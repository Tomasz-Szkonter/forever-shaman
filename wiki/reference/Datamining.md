---
title: Datamining
description: How to look up WoW Forever Shaman spell data yourself with wago.tools DB2 exports and Wowhead, plus spell IDs, caveats, a sample build diff and a monitoring routine.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# ⛏ Datamining

Beta numbers change every few days. This page shows how to check them yourself in the game client's data tables, so you do not have to wait for a guide to update. It covers where the data lives, which tables matter for Shaman spells, the traps (legacy talent tables, reused Season of Discovery IDs, tooltip rounding), and a routine for spotting changes in each new build.

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified — see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

All endpoints on this page returned HTTP 200 on 2026-10-02 🟢 ([research snapshot 05](#-sources)).

## 📑 Contents
- [Where the Data Lives](#-where-the-data-lives)
- [Tables and What They Hold](#-tables-and-what-they-hold)
- [Caveats](#-caveats)
- [Shaman Spell IDs](#-shaman-spell-ids)
- [Comparing Builds](#-comparing-builds)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

## 🗄 Where the Data Lives

### wago.tools Builds API

[wago.tools][wago-builds] tracks every client build. The JSON list is at `https://wago.tools/api/builds` (keyed by product); the web view is at `https://wago.tools/builds`. The Forever beta product is **`wow_classic_beta`**, version `1.60.1`.

| Build | Created (UTC) | Notes |
|---|---|---|
| 1.60.1.**69876** | 2026-09-16 18:23 | Beta launch build |
| 1.60.1.69893 | 2026-09-16 23:14 | |
| 1.60.1.69913 | 2026-09-18 03:02 | |
| 1.60.1.69977 | 2026-09-23 00:35 | Sept 22 class tuning |
| 1.60.1.**70009** | 2026-09-24 22:02 | Sept 24 dev notes |
| 1.60.1.70058 | 2026-09-29 16:41 | |
| 1.60.1.70124 | 2026-09-30 01:57 | |
| 1.60.1.**70170** | 2026-10-01 22:54 | **Current**; Oct 1 level-30 patch |

- There is also a China beta product, `wow_cn_beta`, on 1.60.1.70094 and 1.60.1.70178 (Oct 2, newer than 70170) 🟢.
- 🔴 Wowhead's Legacy calculator reportedly used `1.60.1.69800`, which is not in wago's list (probably a pre-release build) ([wowforeverbuilds][wfbuilds]).

### CSV Endpoints

The easiest way to script lookups is the CSV export, which returns a whole DB2 table for one build:

```text
https://wago.tools/db2/<Table>/csv?build=1.60.1.70170
```

For example:

```bash
curl -s "https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170" -o SpellEffect_70170.csv
curl -s "https://wago.tools/db2/SpellName/csv?build=1.60.1.70170"   -o SpellName_70170.csv
```

- **Browser view:** `https://wago.tools/db2/SpellEffect?build=1.60.1.70170`. Use the table's filter box to search by SpellID. (The exact query-string filter syntax has not been tested.)
- **Classic Era data** for comparison: use product `wow_classic_era`, e.g. [`https://wago.tools/db2/SpellEffect?product=wow_classic_era`][wago-era]. The Forever diff sites compare against Classic Era `1.15.9.69722` ([ForeverChanges][fc]).

### Wowhead Forever

Wowhead keeps a separate Forever database under the **`/forever/` prefix**:
- Spells: `https://www.wowhead.com/forever/spell=408521` (Riptide). Spell pages render with base values and coefficients, and can be fetched by scripts.
- Lists and news: `https://www.wowhead.com/forever/spells`, `https://www.wowhead.com/forever/news`, and the RSS feed `https://www.wowhead.com/forever/news/rss/all`.
- 🟡 **News article bodies are blocked to scripts** (HTTP 403 / CloudFront). Open them in a browser.
- 🟡 **Item data lags behind the client.** Example: Staff of Westfall shows 20.50 DPS on Wowhead but 15.2 DPS in game ([forum thread 2359184][f-2359184]). Do not trust Wowhead weapon DPS for Forever yet.
- 🟢 Some pages render only partly through a fetch (no rank labels, no set bonuses for T1/T2) ([Wowhead item-set 207][wh-207]).

### Client-Reading Sites

These fan sites read the client data and present it as diffs or calculators. They are 🟢 for numbers, but they are not Blizzard and they lag a little behind new builds:

| Site | What it shows | Build |
|---|---|---|
| [WCLBox][wcl] | Spell rank tables vs Classic | 70009 |
| [ForeverChanges][fc] | Spellbook, talents and racials diff vs Classic Era 1.15.9.69722 | 70170 |
| [wowforevertalents.com][wfts] | Talents from the trait tables plus the hotfix cache, rank by rank vs Classic; best talent source | 70170 + hotfixes of Oct 2 |
| [wowforevertalent.com][wft] | Talent calculator, "1 October Forever export" | 70170 |

### Item Data Is Hidden

🔵/🟡 There will be **no PTRs**, and raid bosses and item stats stay hidden until players reach them ([Method.gg][method-ptr]). About **12,500 items are hidden** from dataminers; roughly 4,419 had been revealed during the beta 🟡 ([Icy Veins, snippet][iv-hidden]). Spell data is complete, but expect item and set data to have gaps. See [Items and Set Bonuses](Items-and-Set-Bonuses.md).

## 📊 Tables and What They Hold

### Useful Tables

| Table | What it holds | Typical use |
|---|---|---|
| `SpellName` | Spell names by ID | Find the IDs for a spell name |
| `Spell` | Tooltip text: `Description_lang`, `AuraDescription_lang` with `$s1`-style tokens | Read what the tooltip will say |
| `SpellEffect` | Base points (`EffectBasePointsF`), **SP coefficient** (`EffectBonusCoefficient`), AP coefficient (`BonusCoefficientFromAP`), period, trigger spell, `Variance`, per-level scaling (`EffectRealPointsPerLevel`) | Damage, healing and coefficients |
| `SpellMisc` | `CastingTimeIndex`, `DurationIndex`, `RangeIndex`, `SchoolMask` | Cast time, duration, range, school |
| `SpellCastTimes`, `SpellDuration` | Lookup tables for the indexes above | Turn an index into milliseconds |
| `SpellCooldowns` | Cooldowns, category cooldowns, GCD | Cooldown values |
| `SpellAuraOptions` | Charges, proc chance, **internal cooldown**, PPM id | Proc behaviour (Water Shield, Maelstrom Weapon, Windfury) |
| `SpellProcsPerMinute` | PPM (procs per minute) values | Weapon-speed-normalized procs |
| `SpellLevels` | Spell levels | Which level a rank is learned at |
| `SkillLineAbility` | Which spells belong to which skill line | Filter to real Shaman spells |
| `Talent` | **Legacy** talent table (see caveats) | Do not use for Forever talents |
| `TraitTree`, `TraitNode`, `TraitNodeEntry`, `TraitDefinition` | The **Forever** talent trees | Talent layout and spells |

### Coefficient Basics

- `EffectBonusCoefficient` is the spell power coefficient. For **periodic effects it is per tick**: Flame Shock's 0.10 per tick over 4 ticks is 0.40 in total ([wago Classic Era][wago-era]).
- Classic rules for reference: direct spells use `cast time / 3.5`, DoTs and HoTs use `duration / 15`, and spells learned before level 20 get `coef × (1 − (20 − level) × 0.0375)`. Classic Era DB2 reproduces those numbers exactly ([Ozgar's guide][ozgar]). See [Spell Coefficients](../mechanics/Spell-Coefficients.md).

## ⚠ Caveats

### Talent Data Lives in Trait Tables

🟢 **`Talent.db2` still contains the legacy TBC-style 3×7 tree and does not reflect Forever.** The Forever trees live in the **Trait** tables. Follow `TraitTree` → `TraitNode` → `TraitNodeEntry` → `TraitDefinition` to get the layout. `TraitDefinition` lists Lava Burst, Lightning Overload, Earthbound, Riptide, Water Shield, Rage of the Farseer, Maelstrom Weapon, Improved Stormstrike, Mental Quickness, Shamanistic Focus and others.

### Season of Discovery ID Reuse

🟢 Many Forever spells **reuse Season of Discovery IDs (40xxxx–46xxxx)**: Lava Burst R1 is 408490, Riptide R1 is 408521. The client also holds dozens of SoD-only duplicates (many "Lightning Bolt" and "Chain Lightning" IDs). **Always filter through `SkillLineAbility` or `TraitDefinition`** before trusting a row.

- 🟡 Some guides show these IDs as if they were ranks (for example "Lava Burst (rank 408490)" in a fetch of the Warcraft Tavern guide) ([Warcraft Tavern][wt-shaman]).
- 🟢 The Classic Era client has the same issue in reverse: it is shared with SoD and Anniversary realms, so some Classic Shaman enchant rows point to 2024 spells (Windfury Weapon procs 439431; Flametongue procs 436519 and 415138) ([wago Classic Era][wago-era]).

### Tooltip Values and Off-by-One

🟢 Displayed tooltip numbers are `EffectBasePointsF` adjusted by `Variance` and `EffectRealPointsPerLevel`, and some displays are off by one. Example: Riptide R1 has base 480 in DB2, but Wowhead shows "481 … 90 every 3 sec" ([Wowhead 408521][wh-rt]). Lightning Bolt R10 is base 196 with variance ≈0.108 and +1.2 per level, giving about 189–211 at level 60.

### Server-Side Logic

🟢 Not everything is in the client. Examples:
- Maelstrom Weapon (408498) shows ProcChance 100 and no PPM entry, yet players report a "chance" to proc; the real proc logic is probably elsewhere ([wago SpellAuraOptions][wago-auraopt]).
- Riptide's Sept 24 crit fix is not visible in `SpellEffect`; it is probably a `SpellMisc` attribute flag or a server change.
- Totemic Recall's new helper spell 1323420 has an energize amount of 0, so the refund is probably computed by a script.

### Shaman Skill Lines

🟢 Filter `SkillLineAbility` to these three skill lines to get the real Shaman spellbook:

| Skill line | Tree |
|---|---|
| **373** | Enhancement |
| **374** | Restoration |
| **375** | Elemental |

## 🔢 Shaman Spell IDs

### Spell ID Lookup

🟢 Confirmed in build 70170 ([wago Spell][wago-spell], [SpellEffect][wago-se]):

| Spell | IDs | Notes |
|---|---|---|
| Lava Burst | 408490 (R1, from SoD), **1238299** (R2), **1238300** (R3) | Hidden variants 1238373, 1238376 |
| Riptide | 408521 (R1), **1239242** (R2), **1239243** (R3) | |
| Water Shield | 408510 | Mana proc 408511 |
| Maelstrom Weapon | 408498 (talent) | Buff 408505 |
| Lightning Overload | 408438 | |
| Rage of the Farseer | 425336 | |
| Shamanistic Focus | 1223030 | |
| Improved Stormstrike | 1223031 | |
| Earthbound | 1222988 | |
| Mental Quickness | 30812 | Both effects base 30 |
| Call of the Elements / Ancestors / Spirits | 66842 / 66843 / 66844 | |
| Totemic Recall | 36936 (trainer) | 1323420 = new helper in 70170 |
| Totemic Projection | 437009 | |
| Lightning Bolt | 548 (R3), 915 (R4), 15208 (R10) | SoD variants 408440 / 408441 / 408442 |
| Chain Lightning | 10605 (R4) | |
| Earth Shock | 10414 (R7) | |
| Flame Shock | 8050 (R1) | |
| Healing Wave | 25357 (R10) | |
| Reincarnation | 20608 | |
| Windfury Totem | 8512 / 10613 / 10614 | |
| Flametongue Weapon | 8024, 8027, 8030, 16339, 16341, 16342 | 6 ranks |
| Talent-flavour spells | 1214302 "Improved Lightning Bolt/Lava Burst"; 1220642 "Improved Riptide/Chain Heal/Earth Shield"; 1309442 "Storm's Grasp" | Purpose unclear |
| Set bonuses | 1301711 "Tier 1 Shaman Elemental 5P – Lava Burst"; 1301713 "Tier 1 Restoration 5P – Riptide" | See [Items](Items-and-Set-Bonuses.md#the-spiritcaller) |
| Weapon | 1309539 "Tidebringer's Claw" | See [Items](Items-and-Set-Bonuses.md#tidebringers-claw) |

Classic Era IDs for the other ranks are linked from [Spells and Ranks](Spells-and-Ranks.md) and [Totems](Totems.md).

## 🔁 Comparing Builds

### How to Diff Two Builds

1. Download the same table (`SpellEffect`, `Spell`, `SpellMisc`, `SpellAuraOptions`, `TraitDefinition`) for the old and new build from the CSV endpoint.
2. Filter both to Shaman spells: join with `SkillLineAbility` on skill lines 373/374/375, plus the Shaman `TraitDefinition` spells.
3. Compare row by row (by spell ID and effect) and list any field that changed.

```bash
curl -s "https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70124" -o SpellEffect_70124.csv
curl -s "https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170" -o SpellEffect_70170.csv
# then filter both files to Shaman spell IDs and compare them (diff, a spreadsheet, or a short script)
```

### Sample Diff 69876 to 70170

🟢 Produced from the `SpellEffect` and `Spell` CSVs, filtered to skill lines 373/374/375. It **reproduces the Sept 24 patch notes exactly** 🔵 ([dev notes][blz-notes]):

```text
Lava Burst (408490) eff0 base: 113 -> 164          # R1 buff (Sept 24 note)
Lava Burst (1238299) eff0 base: 179 -> 196         # R2 buff (Sept 24 note)
Lightning Bolt (548) eff0 base: 35 -> 45           # R3 buff (Sept 24 note)
Lightning Bolt (915) eff0 base: 50 -> 56           # R4 buff (Sept 24 note)
Lightning Bolt (408440/408441/408442) base: 15->14.5 / 18->22.5 / 25->28
Rage of the Farseer (425336) eff2: REMOVED; tooltip "melee attack speed and spell casting speed" -> "attack speed"
Windfury Totem (8512/10613/10614) tooltip radius token re-pointed to the next aura spell
Flametongue Weapon (6 ranks) tooltip gains +($10444m1)/+($29469m1)/+($29470m1) flat term   # first appears in 70170
```

- The **70124 → 70170** step changed **only** the Flametongue Weapon tooltips among skill-line spells. It also added spell 1323420 (Totemic Recall helper), which is not on a skill line.
- 🔴 Wowhead's own Oct 1 datamine article ([news 383219][wh-383219]) has not been read (403 to scripts). Reconcile it with this diff by hand.

### Monitoring Loop

A suggested routine for keeping this wiki current:

| When | What |
|---|---|
| **Daily** | Check the [wago builds API][wago-builds] and the [Wowhead Forever RSS][wh-rss] |
| **Each new build** | Run the DB2 diff for skill lines 373/374/375 plus the Shaman `TraitDefinition` spells; update the [Beta Changelog](../forever/Beta-Changelog.md) |
| **Twice a week** | Search the forums for `shaman category:349` ([search API][forum-search]) and check [forever-bugs][fb] for Shaman issues |
| **Each patch day** | Re-read the [dev notes thread][blz-notes] (it is updated in place) |

## 📋 Quick Reference

| Need | Where |
|---|---|
| List of builds | `https://wago.tools/api/builds` |
| Any DB2 table as CSV | `https://wago.tools/db2/<Table>/csv?build=1.60.1.70170` |
| Classic Era table | `https://wago.tools/db2/<Table>?product=wow_classic_era` |
| Spell power coefficient | `SpellEffect.EffectBonusCoefficient` (per tick for periodic effects) |
| Cast time / duration / range | `SpellMisc` indexes → `SpellCastTimes` / `SpellDuration` |
| Cooldowns | `SpellCooldowns` |
| Proc chance, ICD, charges | `SpellAuraOptions` (+ `SpellProcsPerMinute`) |
| Forever talents | `TraitTree` → `TraitNode` → `TraitNodeEntry` → `TraitDefinition` (not `Talent`) |
| Real Shaman spells | `SkillLineAbility` lines 373 / 374 / 375 |
| Linkable spell page | `https://www.wowhead.com/forever/spell=<ID>` |
| News feed | `https://www.wowhead.com/forever/news/rss/all` |

## 🔍 To Verify

- [ ] **wago.tools browser filter syntax** for a SpellID query string — not tested ([wago.tools][wago-se]).
- [ ] **Wowhead Oct 1 datamine article** — reconcile with the sample diff above ([Wowhead 383219][wh-383219]).
- [ ] **Talent-flavour spells** 1214302, 1220642, 1309442 — what do they do, and are they live? ([wago Spell][wago-spell]).
- [ ] **China beta build 70178** (newer than 70170) — does it contain Shaman changes not yet on the US beta? ([wago builds][wago-builds]).
- [ ] **Maelstrom Weapon proc logic** — not visible in `SpellAuraOptions`; find the controlling spell or confirm it is server-side ([wago SpellAuraOptions][wago-auraopt]).

## 📚 Sources

- [wago.tools builds API][wago-builds] and DB2 exports ([SpellEffect][wago-se], [Spell][wago-spell], [SpellAuraOptions][wago-auraopt], [Classic Era][wago-era]) — 🟢 all build, table and diff data on this page
- [Wowhead Forever][wh-rt] and [news RSS][wh-rss] — 🟢 spell pages, datamine news
- [WCLBox][wcl], [ForeverChanges][fc], [wowforevertalents.com][wfts], [wowforevertalent.com][wft] — 🟢 client-reading sites
- [Blizzard Beta Development Notes][blz-notes] — 🔵 patch notes that the diff reproduces
- [Method.gg][method-ptr], [Icy Veins (snippet)][iv-hidden] — 🟡 hidden items, no PTRs
- [wowforeverbuilds][wfbuilds], [Warcraft Tavern][wt-shaman], [forum thread 2359184][f-2359184] — 🟡 / 🔴 notes on build 69800, ID mislabels, Wowhead item lag
- [Ozgar's Downranking Guide][ozgar] — Classic coefficient rules
- Research snapshot `_research/05-sources-and-beta-findings.md` (2026-10-02) — endpoint checks and the sample diff

[wago-builds]: https://wago.tools/api/builds
[wago-se]: https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170
[wago-spell]: https://wago.tools/db2/Spell/csv?build=1.60.1.70170
[wago-auraopt]: https://wago.tools/db2/SpellAuraOptions/csv?build=1.60.1.70170
[wago-era]: https://wago.tools/db2/SpellEffect?product=wow_classic_era
[wh-rt]: https://www.wowhead.com/forever/spell=408521
[wh-rss]: https://www.wowhead.com/forever/news/rss/all
[wh-207]: https://www.wowhead.com/forever/item-set=207/the-earthfury
[wh-383219]: https://www.wowhead.com/forever/news=383219/datamined-class-changes-for-wow-forever-build-on-october-1st
[wcl]: https://wowforever.wclbox.com/en/fashu/shaman
[fc]: https://foreverchanges.pro/spellbook/shaman
[wfts]: https://wowforevertalents.com/shaman/
[wft]: https://wowforevertalent.com/shaman/reference/
[blz-notes]: https://us.forums.blizzard.com/en/wow/t/2360696
[forum-search]: https://us.forums.blizzard.com/en/wow/search.json?q=shaman%20category%3A349
[fb]: https://github.com/ClassicWoWCommunity/forever-bugs
[method-ptr]: https://www.method.gg/wow-forever/no-ptrs-and-new-datamining-restrictions-coming-to-world-of-warcraft-forever
[iv-hidden]: https://www.icy-veins.com/wow-forever/news/wow-forever-hid-over-12500-items-from-dataminers-heres-whats-still-secret/
[wfbuilds]: https://wowforeverbuilds.com/wow-forever-beta
[wt-shaman]: https://www.warcrafttavern.com/forever/guides/shaman/
[f-2359184]: https://us.forums.blizzard.com/en/wow/t/2359184
[ozgar]: https://www.warcrafttavern.com/wow-classic/guides/ozgars-downranking-guide-tool/
