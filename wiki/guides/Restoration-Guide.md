---
title: Restoration Guide
description: How to play Restoration Shaman in WoW Forever during the level-30 beta, built only from sourced guide claims, tester findings and clearly labeled analysis.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🌊 Restoration Guide

How to play Restoration (healer) in WoW Forever. Every recommendation comes from a cited guide or tester, or is marked **Analysis:** when it follows directly from the spell and talent data. Talent values live on [Restoration Talents](../talents/Restoration-Talents.md); heal ranks on [Spells and Ranks](../reference/Spells-and-Ranks.md).

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified — see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

> ⚠️ **Status: provisional.** The beta is capped at **level 30** (since Oct 1). Water Shield, Mana Tide Totem and Nature's Swiftness are playable now. **Chain Heal (L40) and Riptide (31 points, L40) have never been used live**, so the signature Riptide → Chain Heal combo is untested. No researched level-60 build exists yet.

## 📑 Contents
- [Overview](#-overview)
- [Recommended Races](#-recommended-races)
- [Talent Builds](#-talent-builds)
- [Core Abilities and Priority](#-core-abilities-and-priority)
- [Stats](#-stats)
- [Totems to Use](#-totems-to-use)
- [Mana Management](#-mana-management)
- [Common Mistakes and Tester Notes](#-common-mistakes-and-tester-notes)
- [To Verify](#-to-verify)
- [Sources](#-sources)

## 🧭 Overview

Restoration heals with Healing Wave, Lesser Healing Wave and (from 40) Chain Heal, and gains three new tools in Forever: **Water Shield** (mana on being hit or on heal crits), **Mindfulness** (regen while casting) and **Riptide** (instant heal + HoT that empowers Chain Heal).

**Strengths (sourced)**
- 🟢 **Regen while casting** for the first time: [Mindfulness](../talents/Restoration-Talents.md#mindfulness) keeps 50% of your mana regen going while you cast. Classic Shamans had no such talent ([Warcraft Tavern Classic mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/)).
- 🟢 **Group mana earlier:** [Mana Tide Totem](../talents/Restoration-Talents.md#mana-tide-totem) moved to 16 points (R1 at level 25) with 30 yd range.
- 🟢 **Riptide** at 31 points: instant heal + HoT on a 6 s cooldown, and +25% to a Chain Heal cast directly on that target ([Restoration Talents](../talents/Restoration-Talents.md#riptide)).
- 🔵 **HoT crits:** Riptide was fixed to crit on Sept 24, and HoTs in general can crit in Forever ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)).
- 🔵 **Healing gear gives damage:** bonus healing now also grants one third as much spell damage ([Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)).

**Weaknesses (sourced)**
- 🟢 **Lower base healing:** heals lost about 7–25% of base healing, with cast times unchanged (Healing Wave R10 ~~1620–1850~~ → **1508–1722**) ([Spells and Ranks](../reference/Spells-and-Ranks.md#healing-wave)).
- 🔵 **Downranking is penalized:** since Oct 1, spells cast at ranks far below your level get less benefit from spell healing and a reduced chance to trigger talents ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)). Classic Restoration relied heavily on downranking.
- 🟡 **Water Shield bugs** during the beta (tooltip and cooldown) ([thread 2361063](https://us.forums.blizzard.com/en/wow/t/2361063)).
- 🟡 Popularity: Restoration is 18% of complete Shaman builds on wowforevertalent.com (popularity data) ([calculator](https://wowforevertalent.com/shaman/)).

## 🧬 Recommended Races

Full racial details: [Races and Racials](../forever/Races-and-Racials.md). No source ranks races for Restoration specifically; the notes below are **Analysis** from the racial text 🟢 ([ForeverChanges](https://foreverchanges.pro/racials), [Blizzard Skyborne](https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne)).

| Race | Relevant racials (70170) | Notes |
|---|---|---|
| [Tauren](../forever/Races-and-Racials.md#tauren) | Endurance: +5% Health, +1% hit; War Stomp (2 s AoE stun) | Extra health and an emergency stun. |
| [Troll](../forever/Races-and-Racials.md#troll) | Berserking: flat +10% cast and attack speed for 10 s; Rapid Regeneration: heal 50% max HP over 6 s | A cast-speed cooldown and a self-heal. |
| [Orc](../forever/Races-and-Racials.md#orc) | Blood Fury: +10% AP and Spell Power, 15 s; Shatter Curse (removes curses, −15% magic damage taken) | 🟡 Warcraft Tavern's "best Horde Shaman" pick ([Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/)). Whether "Spell Power" includes healing is unconfirmed. |
| [Windshaper Skyborne](../forever/Races-and-Racials.md#windshaper-skyborne) | Wind Blessed: +1% spell haste | Paid Skyborne Heroic Pack or higher 🔵. |
| [Dwarf](../forever/Races-and-Racials.md#dwarf) | Stoneform: removes bleeds, poisons, diseases; −10% physical damage, 8 s | Only Alliance Shaman. |

## 🌳 Talent Builds

Restoration was not affected by the Sept 24 Elemental row swap; the Tidal Mastery / Totemic Focus swap happened before these builds were written. Per-talent values: [Restoration Talents](../talents/Restoration-Talents.md).

### Warcraft Tavern Level 30 (0/0/21)

🟡 [Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/), from their build screenshot.

| Talent | Points | Row |
|---|---|---|
| [Improved Healing Wave](../talents/Restoration-Talents.md#improved-healing-wave) | 5 | 1 |
| [Totemic Focus](../talents/Restoration-Talents.md#totemic-focus) | 5 | 1 |
| [Mindfulness](../talents/Restoration-Talents.md#mindfulness) | 3 | 2 |
| [Tidal Focus](../talents/Restoration-Talents.md#tidal-focus) | 2 | 2 |
| [Ancestral Healing](../talents/Restoration-Talents.md#ancestral-healing) | 3 | 3 |
| [Water Shield](../talents/Restoration-Talents.md#water-shield) | 1 | 3 |
| [Mana Tide Totem](../talents/Restoration-Talents.md#mana-tide-totem) | 1 | 4 |
| [Nature's Swiftness](../talents/Restoration-Talents.md#natures-swiftness) | 1 | 5 |

Analysis: legal on the current tree (10 points before row 2, 15 before row 3, 19 before row 4, 20 before row 5).

### Icy Veins Level 30 (21 and 26 points)

🟡 [Icy Veins Restoration guide](https://www.icy-veins.com/wow-forever/restoration-shaman-healer-pve-guide), updated Oct 1–2; calculator code `#tc-yyyyyAAABBGEEEFJHHHHL` (26-point: `…HKKKM`).
- Core: [Improved Healing Wave](../talents/Restoration-Talents.md#improved-healing-wave) 5, [Mindfulness](../talents/Restoration-Talents.md#mindfulness) 3, [Natural Grace](../talents/Restoration-Talents.md#natural-grace) **or** [Improved Reincarnation](../talents/Restoration-Talents.md#improved-reincarnation), [Water Shield](../talents/Restoration-Talents.md#water-shield), [Mana Tide Totem](../talents/Restoration-Talents.md#mana-tide-totem), [Nature's Swiftness](../talents/Restoration-Talents.md#natures-swiftness), [Tidal Mastery](../talents/Restoration-Talents.md#tidal-mastery).
- **+5 with Talented:** [Healing Way](../talents/Restoration-Talents.md#healing-way) 3/3 (+25% Healing Wave).
- The research snapshot does not give every rank count; open the calculator code for the exact build.

### Hybrid Dip

- 🟡 **12 points in Enhancement** for instant indoor Ghost Wolf ([Improved Ghost Wolf](../talents/Enhancement-Talents.md#improved-ghost-wolf) 2/2), +5% crit ([Thundering Strikes](../talents/Enhancement-Talents.md#thundering-strikes)) and +10% Intellect ([Ancestral Knowledge](../talents/Enhancement-Talents.md#ancestral-knowledge)) ([Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/), [Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview)).

### Level-60 Splits (popularity only)

🟡 [wowforevertalent.com](https://wowforevertalent.com/shaman/) popular builds (Oct 2): the most-opened Restoration split is **0/10/41** (967 opens). 🔴 A search snippet also lists "Restoration 0/8/43" from an unfound source. **These are calculator clicks, not tested builds.** See [Talent Overview](../talents/Talent-Overview.md#level-60-splits-from-the-calculator).

## ⚡ Core Abilities and Priority

> No source has published a tested Restoration healing priority for Forever. Items marked 🟢 are tooltip facts; the advice is **Analysis:** reasoning from those facts.

### Your Toolkit

| Ability | Level | Key facts | Link |
|---|---|---|---|
| Healing Wave | 1 (R4 at 18) | 3 s cast from R4 (−0.5 s with Improved Healing Wave); [Healing Way](../talents/Restoration-Talents.md#healing-way) +25% 🟢 | [Spells and Ranks](../reference/Spells-and-Ranks.md#healing-wave) |
| Lesser Healing Wave | 20 | 1.5 s cast 🟢 | [Spells and Ranks](../reference/Spells-and-Ranks.md#lesser-healing-wave) |
| Water Shield | 11-pt talent (20+) | 3 globes, 2% max mana each on being hit or on heal crits 🟢 | [Restoration Talents](../talents/Restoration-Talents.md#water-shield) |
| Mana Tide Totem | 16-pt talent (25) | R1 88 mana per 3 s to the group within 30 yd, 12 s, 5 min CD 🟢 | [Restoration Talents](../talents/Restoration-Talents.md#mana-tide-totem) |
| Nature's Swiftness | 21-pt talent (30) | next Nature spell under 10 s becomes instant, 3 min CD 🟢 | [Restoration Talents](../talents/Restoration-Talents.md#natures-swiftness) |
| Chain Heal | 40 (above beta cap) | 2.5 s, 3 targets, 50% falloff per jump 🟢 | [Spells and Ranks](../reference/Spells-and-Ranks.md#chain-heal) |
| Riptide | 31-pt talent (40) | instant, 6 s CD, heal + 15 s HoT; Chain Heal on that target +25% 🟢 | [Restoration Talents](../talents/Restoration-Talents.md#riptide) |

### Healing Priorities (Analysis)

- **Keep Water Shield up.** *Why:* it lasts 10 min, returns 2% max mana per globe when you are hit or a heal crits, and has a 15 s cooldown 🟢. With a 3.5 s internal cooldown between globes, three globes cannot all fire at once 🟢.
- **Healing Wave** is the main single-target heal. *Why:* [Healing Way](../talents/Restoration-Talents.md#healing-way) now gives a flat +25% to it, and [Improved Healing Wave](../talents/Restoration-Talents.md#improved-healing-wave) cuts the cast to 2.5 s 🟢.
- **Lesser Healing Wave** when speed matters (1.5 s cast) 🟢.
- **Nature's Swiftness → Healing Wave** as an emergency instant heal. *Why:* it makes any Nature spell under 10 s instant 🟢.
- **Riptide → Chain Heal on the same target** (level 40+). *Why:* Riptide's tooltip makes "your Chain Heal cast directly on that target" 25% more effective, and Riptide is instant on a 6 s cooldown 🟢. Untested live; see To Verify.
- **Use max ranks, or ranks close to your level.** *Why:* the Oct 1 downranking rule reduces spell-healing benefit and talent procs for ranks "vastly below your current level" 🔵 ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)). How far below counts as "vastly" is not stated.

See [Healing Mechanics](../mechanics/Healing-Mechanics.md).

## 📊 Stats

Only sourced rules plus mechanics-derived notes. Stat weights have not been published.

- 🔵 **Bonus healing** now also gives one third as much bonus spell damage ([Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)).
- 🔵 **Caster weapons carry spell power** from around level 10 ([Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)). 🟡 Caster staves had their weapon DPS cut in game; Wowhead's weapon DPS for Forever is unreliable ([thread 2359184](https://us.forums.blizzard.com/en/wow/t/2359184)).
- **Spirit vs MP5:** in Classic, MP5 was the Shaman healer stat because Shamans had no regen while casting ([Warcraft Tavern Classic mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/)). Analysis: [Mindfulness](../talents/Restoration-Talents.md#mindfulness) (50%) changes that balance, since half your Spirit regen now continues while casting. 🔴 An unconfirmed Mobalytics snippet claims Spirit regen outside casting was cut. See [Mana Regeneration](../mechanics/Mana-Regeneration.md).
- **Crit:** [Tidal Mastery](../talents/Restoration-Talents.md#tidal-mastery) +5% heal crit 🟢. Analysis: heal crits also trigger Water Shield globes and Ancestral Healing.
- **Intellect:** more mana, and Water Shield returns a percentage of max mana 🟢. Analysis: Intellect raises each globe's value.
- 🟡 **Haste:** only Skyborne Wind Blessed and Troll Berserking so far ([Warcraft Tavern stats](https://www.warcrafttavern.com/forever/guides/stats/)).

See [Stat Mechanics](../mechanics/Stat-Mechanics.md).

## 🗿 Totems to Use

Buff totems now last **5 min** with **30 yd** range 🟢. Full details: [Totem Mechanics](../mechanics/Totem-Mechanics.md) and [Totems](../reference/Totems.md).

- **Water:** [Healing Stream Totem](../reference/Totems.md#healing-stream-totem) (L20) — [Restorative Totems](../talents/Restoration-Talents.md#restorative-totems) now gives it +50%, though its base tick was lowered 🟢. [Mana Spring Totem](../reference/Totems.md#mana-spring-totem) (L26) — +25% with Restorative Totems 🟢. [Mana Tide Totem](../reference/Totems.md#mana-tide-totem) on cooldown when the group is low on mana (Analysis).
- **Earth:** [Tremor Totem](../reference/Totems.md#tremor-totem) (L18) and [Stoneskin Totem](../reference/Totems.md#stoneskin-totem) as the fight needs (Analysis).
- 🟢 [Totemic Focus](../talents/Restoration-Talents.md#totemic-focus) cuts totem mana costs by 25% and also covers spells that place or move totems.
- 🟡 **Call of the Elements** (3.0 s cast) only saves about 1 s when you need all 4 totems ([thread 2369645](https://us.forums.blizzard.com/en/wow/t/2369645)).
- 🔵 **Air totems don't stack** across Shamans in a group ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)). Coordinate with other Shamans.

## 💧 Mana Management

| Tool | What it gives | Conf. |
|---|---|---|
| [Water Shield](../talents/Restoration-Talents.md#water-shield) | 3 globes × 2% max mana, on being hit or on heal crits; 3.5 s ICD; 15 s CD | 🟢 (CD bug history 🟡) |
| [Mindfulness](../talents/Restoration-Talents.md#mindfulness) | 50% of mana regen continues while casting | 🟢 |
| [Mana Tide Totem](../talents/Restoration-Talents.md#mana-tide-totem) | R1 88 / R2 197 / R3 290 mana per 3 s to the group, 12 s | 🟢 |
| [Tidal Focus](../talents/Restoration-Talents.md#tidal-focus) | −5% healing spell mana | 🟢 |
| [Totemic Focus](../talents/Restoration-Talents.md#totemic-focus) | −25% totem mana | 🟢 |
| Totemic Recall (L20) | refunds 25% of each recalled totem's mana (fixed Oct 1) | 🔵 [dev notes](https://us.forums.blizzard.com/en/wow/t/2360696) |
| Polished Driftwood Icon (relic, L20) | 8% of mana regen continues while casting | 🟢 [WoWHandbook](https://wowhandbook.com/gear/relics/) |
| Tidal Totem (relic, L60) | Healing Wave −5% mana | 🟢 [WoWHandbook](https://wowhandbook.com/gear/relics/) |

See [Mana Regeneration](../mechanics/Mana-Regeneration.md#water-shield) and [Items and Set Bonuses](../reference/Items-and-Set-Bonuses.md).

## 🚫 Common Mistakes and Tester Notes

- 🟡 **Water Shield tooltip** read **1%** of max mana at 2 or fewer charges, and its listed 15 s cooldown was not applied (bug marked fixed Oct 1; direction unclear) ([thread 2361063](https://us.forums.blizzard.com/en/wow/t/2361063), [forever-bugs #134](https://github.com/ClassicWoWCommunity/forever-bugs/issues/134)). See [Known Beta Bugs](../forever/Known-Beta-Bugs.md).
- 🟡 **Water Shield is for being hit and heal crits only**; damage crits don't trigger it ([thread 2364061](https://us.forums.blizzard.com/en/wow/t/2364061)).
- 🟢 **Tidal Mastery no longer adds lightning crit**; it is healing-only.
- 🔵 **Old Riptide numbers:** guides written before Sept 24 may say Riptide can't crit; it can now ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)).
- 🔴 **Conquest Capped** still shows Tidal Mastery in row 1 (BlizzCon layout) ([Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/)).
- 🟢 **Natural Grace** now lowers threat from **all** your spells, not only heals. Healing threat in Classic is 0.5 per point healed, split among enemies ([magey Threat](https://github.com/magey/classic-warrior/wiki/Threat-Mechanics)). See [Threat](../mechanics/Threat.md).
- 🟡 Riptide R1 numbers vary by source (484–535 / 486–534 / 485–533); EndgameTools' 456–504 is stale.

## 🔍 To Verify
- [ ] **Riptide → Chain Heal +25%** — does it apply only when Chain Heal starts on the Riptide target, or on any jump? Needs level 40 ([wfts](https://wowforevertalents.com/shaman/)).
- [ ] **Water Shield** — real cooldown after the Oct 1 fix, and whether the 1% tooltip at low charges returns less mana ([forever-bugs #134](https://github.com/ClassicWoWCommunity/forever-bugs/issues/134)).
- [ ] **Downranking threshold** — how many levels below counts as "vastly below" for the Oct 1 penalty? ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696))
- [ ] **Blood Fury and healing** — does "+10% Spell Power" raise healing? ([ForeverChanges](https://foreverchanges.pro/racials))
- [ ] **Totem pulse crits** — can Healing Stream ticks crit like other HoTs? Not stated anywhere.
- [ ] **Earth Shield** — a forum thread mentions Earth Shield in the Cooldown Manager ([thread 2365038](https://us.forums.blizzard.com/en/wow/t/2365038)), and a DB2 spell is named "Improved Riptide/Chain Heal/Earth Shield". No other source lists Earth Shield as a Forever Shaman spell.
- [ ] **Icy Veins exact ranks** — decode the calculator link ([Icy Veins Restoration](https://www.icy-veins.com/wow-forever/restoration-shaman-healer-pve-guide)).

## 📚 Sources
- [Icy Veins Restoration guide](https://www.icy-veins.com/wow-forever/restoration-shaman-healer-pve-guide) and [class overview](https://www.icy-veins.com/wow-forever/shaman-class-overview) — 🟡 builds, dips
- [Warcraft Tavern Shaman guide](https://www.warcrafttavern.com/forever/guides/shaman/) and [stats guide](https://www.warcrafttavern.com/forever/guides/stats/) — 🟡 builds, races, haste
- [wowforevertalents.com](https://wowforevertalents.com/shaman/), [wowforevertalent.com](https://wowforevertalent.com/shaman/) — 🟢 talent data; 🟡 popularity
- [Blizzard Beta Development Notes](https://us.forums.blizzard.com/en/wow/t/2360696), [Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap), [Meet the Skyborne](https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne) — 🔵 system rules, fixes
- [ForeverChanges racials](https://foreverchanges.pro/racials), [WoWHandbook relics](https://wowhandbook.com/gear/relics/) — 🟢 racials, relics
- [forever-bugs #134](https://github.com/ClassicWoWCommunity/forever-bugs/issues/134); forum threads [2359184](https://us.forums.blizzard.com/en/wow/t/2359184), [2361063](https://us.forums.blizzard.com/en/wow/t/2361063), [2364061](https://us.forums.blizzard.com/en/wow/t/2364061), [2365038](https://us.forums.blizzard.com/en/wow/t/2365038), [2369645](https://us.forums.blizzard.com/en/wow/t/2369645) — 🟡 tester findings
- [Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/) — 🟡/🔴 stale layout
- Classic baseline: [Warcraft Tavern Classic mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/), [magey Threat Mechanics](https://github.com/magey/classic-warrior/wiki/Threat-Mechanics)
