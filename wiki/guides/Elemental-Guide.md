---
title: Elemental Guide
description: How to play Elemental Shaman in WoW Forever during the level-30 beta, built only from sourced guide claims, tester findings and clearly labeled analysis.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🔥 Elemental Guide

How to play Elemental (ranged caster DPS) in WoW Forever. Every recommendation comes from a cited guide or tester, or is marked **Analysis:** when it follows directly from the spell and talent data. Talent values live on [Elemental Talents](../talents/Elemental-Talents.md); spell ranks on [Spells and Ranks](../reference/Spells-and-Ranks.md).

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified — see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

> ⚠️ **Status: provisional.** The beta is capped at **level 30** (since Oct 1). Lava Burst (31-point talent, level 40), Chain Lightning (level 32) and every Elemental talent past row 6 have **never been played live**. No researched level-60 build or rotation exists yet. Treat this page as early guidance that will change.

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

Elemental is the Shaman's ranged spell DPS spec: Lightning Bolt as the main nuke, Shocks for instant damage, Fire totems and Fire Nova for area damage, and **Lava Burst** as the new 31-point capstone.

**Strengths (sourced)**
- 🟢 **Lava Burst** at 31 points: a 10 s cooldown nuke that deals +20% damage if your Flame Shock is on the target ([Elemental Talents](../talents/Elemental-Talents.md#lava-burst)).
- 🟢 **Faster Lightning Bolt baseline**: ranks 4+ cast in ~~3.0 s~~ → **2.5 s** before talents ([Spells and Ranks](../reference/Spells-and-Ranks.md#lightning-bolt)).
- 🟡 **PvP control:** Icy Veins calls [Earthbound](../talents/Elemental-Talents.md#earthbound) (Earthbind roots on cast) "incredibly powerful in PvP" ([Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview)).
- 🟢 **Range:** [Elemental Reach](../talents/Elemental-Talents.md#elemental-reach) adds +6 yd to LB, CL, Fire Nova and Lava Burst, and +15 yd to Flame Shock.

**Weaknesses (sourced)**
- 🟡 **Low base damage:** Forever cut base spell damage and raised coefficients at low ranks. One forum estimate says Elemental needs about **700 spell power** to match a Classic Lightning Bolt at 300 SP (arithmetic from tooltips, not measured) ([thread 2353745](https://us.forums.blizzard.com/en/wow/t/2353745), [thread "Please fix shamans"](https://us.forums.blizzard.com/en/wow/t/please-fix-shamans/2365290)).
- 🟡 **Less crit from talents:** 3% from Elemental talents plus 5% from Thundering Strikes, versus 11% in Classic ([thread 2362045](https://us.forums.blizzard.com/en/wow/t/2362045)).
- 🟢 **No Elemental Mastery:** the burst cooldown is gone with no replacement ([wfts](https://wowforevertalents.com/shaman/)).
- 🟡 **Sim ranking:** mythicsim's reference Elemental sims at 398 DPS, ranked 23rd of 23 specs, with the caveat "values still being checked" ([mythicsim](https://mythicsim.com/wow-forever/shaman)).
- 🟡 Popularity: Elemental is 24% of complete Shaman builds on wowforevertalent.com (popularity data) ([calculator](https://wowforevertalent.com/shaman/)).

## 🧬 Recommended Races

Full racial details are on [Races and Racials](../forever/Races-and-Racials.md). Shaman races: Orc, Tauren, Troll, Windshaper Skyborne (Horde) and **Dwarf** (the only Alliance option) 🔵🟢.

| Race | Relevant racials (70170) | Why it matters for Elemental |
|---|---|---|
| [Orc](../forever/Races-and-Racials.md#orc) | **Blood Fury:** +10% Attack Power **and Spell Power** for 15 s | 🟡 Warcraft Tavern calls Orc "the best choice for Horde Shamans" ([Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/)). Analysis: Blood Fury now works for casters, which partly fills the Elemental Mastery gap. |
| [Troll](../forever/Races-and-Racials.md#troll) | **Berserking:** flat +10% cast and attack speed for 10 s | Analysis: a short haste cooldown; no longer health-scaled. |
| [Tauren](../forever/Races-and-Racials.md#tauren) | **Endurance:** +5% Health **and +1% hit**; War Stomp | Analysis: 1% hit is useful to every spec, since hit is unified. |
| [Windshaper Skyborne](../forever/Races-and-Racials.md#windshaper-skyborne) | **Wind Blessed:** +1% melee, ranged and spell haste; **Elemental Insight:** +5% damage to Elementals | Needs the paid Skyborne Heroic Pack or higher 🔵. Haste is rare in Forever. |
| [Dwarf](../forever/Races-and-Racials.md#dwarf) | Stoneform; Mace Specialization (+1% crit with maces) | Only Alliance Shaman. Mace Specialization is a melee bonus. |

Racial data: 🟢 [ForeverChanges](https://foreverchanges.pro/racials), 🟡 [Method.gg](https://www.method.gg/wow-forever/all-new-racial-abilities-in-world-of-warcraft-forever), 🔵 [Blizzard Skyborne](https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne).

## 🌳 Talent Builds

All builds below use the **current** tree (Elemental Alacrity row 3, Call of Thunder row 4, Elemental Fury row 6). Per-talent values: [Elemental Talents](../talents/Elemental-Talents.md).

### Icy Veins Level 30 (21 and 26 points)

🟡 [Icy Veins Elemental guide](https://www.icy-veins.com/wow-forever/elemental-shaman-ranged-dps-pve-guide), updated Oct 1–2; calculator code `#tc-111114442267772a99988` (26-point: `…cccde`).

| Talent | Points | Row |
|---|---|---|
| [Concussion](../talents/Elemental-Talents.md#concussion) | 5 | 1 |
| [Call of Flame](../talents/Elemental-Talents.md#call-of-flame) | 3 | 2 |
| [Elemental Warding](../talents/Elemental-Talents.md#elemental-warding) (or [Convection](../talents/Elemental-Talents.md#convection)) | 3 | 2 / 1 |
| [Elemental Focus](../talents/Elemental-Talents.md#elemental-focus) | 1 | 3 |
| [Elemental Alacrity](../talents/Elemental-Talents.md#elemental-alacrity) | 3 | 3 |
| [Call of Thunder](../talents/Elemental-Talents.md#call-of-thunder) | 1 | 4 |
| [Eye of the Storm](../talents/Elemental-Talents.md#eye-of-the-storm) | 3 | 4 |
| [Improved Fire Nova](../talents/Elemental-Talents.md#improved-fire-nova) | 2 | 4 |
| **+5 with Talented:** [Earthbound](../talents/Elemental-Talents.md#earthbound) 1, [Lightning Overload](../talents/Elemental-Talents.md#lightning-overload) 3, [Elemental Fury](../talents/Elemental-Talents.md#elemental-fury) 1 | 5 | 5–6 |

Analysis: the research lists the talents but not every rank count; the ranks above are filled in so the totals reach 21 and 26 and every row gate is met (15 points before row 4, 25 before Elemental Fury). Check the calculator link before copying.

### Warcraft Tavern Level 30 (outdated layout)

🟡 [Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/): Convection 5, Concussion 5, Elemental Focus 1, **Elemental Fury 5**, Call of Thunder 1, Eye of the Storm 3, Lightning Overload 1.

- ⚠️ **Not legal on the current tree.** The screenshot was drawn on the pre-Sept 24 layout, when Elemental Fury sat in row 3. Elemental Fury now needs 25 points. Warcraft Tavern's own text recommends Elemental Alacrity, which matches the current tree.

### Hybrid Dips

🟡 Guide suggestions ([Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/), [Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview)):
- **8 points in Restoration** for [Mindfulness](../talents/Restoration-Talents.md#mindfulness) (50% of regen continues while casting).
- **11 points in Enhancement** for [Thundering Strikes](../talents/Enhancement-Talents.md#thundering-strikes) (+5% crit, all spells) and [Ancestral Knowledge](../talents/Enhancement-Talents.md#ancestral-knowledge) (+10% Intellect), plus 1 point of [Improved Ghost Wolf](../talents/Enhancement-Talents.md#improved-ghost-wolf) for indoor Ghost Wolf.

### Level-60 Splits (popularity only)

🟡 [wowforevertalent.com](https://wowforevertalent.com/shaman/) popular builds (Oct 2): the most-opened Elemental split is **38/13/0** (803 opens). 🔴 A search snippet also lists "Elemental 31/7/13" from an unfound source. **These are calculator clicks, not tested builds.** See [Talent Overview](../talents/Talent-Overview.md#level-60-splits-from-the-calculator).

## ⚡ Core Abilities and Priority

> No source has published a tested Elemental rotation for Forever. Items marked 🟢 are tooltip facts; the order is **Analysis:** reasoning from those facts.

### Your Toolkit

| Ability | Level | Key facts | Link |
|---|---|---|---|
| Lightning Bolt | 1 (R4 at 20) | 2.5 s from R4; coefficient 71.4% from R3; [Concussion](../talents/Elemental-Talents.md#concussion), [Lightning Overload](../talents/Elemental-Talents.md#lightning-overload), [Call of Thunder](../talents/Elemental-Talents.md#call-of-thunder) apply 🟢 | [Spells and Ranks](../reference/Spells-and-Ranks.md#lightning-bolt) |
| Flame Shock | 10 | direct + 12 s DoT; DoT ticks can crit 🟡; enables Lava Burst's +20% 🟢 | [Shock Mechanics](../mechanics/Shock-Mechanics.md) |
| Earth Shock | 4 | interrupt; Concussion applies; high threat 🟡 | [Spells and Ranks](../reference/Spells-and-Ranks.md#earth-shock) |
| Frost Shock | 20 | 50% slow, 8 s | [Spells and Ranks](../reference/Spells-and-Ranks.md#frost-shock) |
| Fire Nova | 12 | instant, hits within 10 yd of your **active Fire totem**, ~~15~~ → **10 s** CD | [Spells and Ranks](../reference/Spells-and-Ranks.md#fire-nova) |
| Chain Lightning | 32 (above beta cap) | 2.0 s, 6 s CD, 3 targets; **very low base damage** (see To Verify) | [Spells and Ranks](../reference/Spells-and-Ranks.md#chain-lightning) |
| Lava Burst | 40 (31-pt talent) | 2.5 s, 10 s CD, +20% with your Flame Shock on target, no guaranteed crit 🟢 | [Elemental Talents](../talents/Elemental-Talents.md#lava-burst) |

The three Shocks share a 6 s cooldown 🟢 ([wago DB2](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170)).

### Single Target (Analysis)

1. **Flame Shock** the target if your Flame Shock is not on it. *Why:* Lava Burst deals +20% damage only while **your** Flame Shock is on the target 🟢, and Call of Flame adds +15% to both 🟢.
2. **Lava Burst** on cooldown while Flame Shock is up (level 40+). *Why:* it is your highest-damage cast; a forum poster counts about 35% total bonus with Flame Shock and Call of Flame (tooltip arithmetic, untested) 🔴 ([thread 2353745](https://us.forums.blizzard.com/en/wow/t/2353745)).
3. **Lightning Bolt** as filler. *Why:* it is the only spell that gets Concussion, Lightning Overload, Call of Thunder and Elemental Alacrity together 🟢.
4. Use **Earth Shock** for interrupts, or when Flame Shock is already up and the shock cooldown is free. *Why:* Concussion now boosts Earth Shock but not Flame or Frost Shock 🟢.

Below level 40 (the whole beta), steps 1 and 2 drop out. Analysis: Lightning Bolt plus Shocks is the rotation, with Flame Shock still worth applying for its damage.

### Area Damage (Analysis)

- Drop a Fire totem, then cast **Fire Nova**; it explodes around your active Fire totem 🟢. [Improved Fire Nova](../talents/Elemental-Talents.md#improved-fire-nova) brings its cooldown down to 6 s and adds 20% damage.
- 🟡 Fire Nova is "a massive threat generator even against single target" ([thread 2366147](https://us.forums.blizzard.com/en/wow/t/2366147)). Watch threat in groups.
- **Chain Lightning** (32+) also triggers Lightning Overload, but its base damage was cut far more than Lightning Bolt's (R4 ~~505–564~~ → **119–133**) 🟢. Wait for live tests before relying on it.

### Cooldowns

- There is **no Elemental Mastery** in Forever 🟢.
- Racials: Orc Blood Fury (+10% SP) and Troll Berserking (+10% cast speed) 🟢.
- 🔵 **Don't downrank:** since Oct 1, spells cast at ranks far below your level get less spell power and a reduced chance to proc talents ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)). See [Forever System Changes](../forever/Forever-System-Changes.md).

## 📊 Stats

Only sourced rules plus mechanics-derived notes. Stat weights have not been published.

- 🔵 **Hit and crit are unified:** spell, melee and ranged hit chance are combined, as are crit chances ([Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)). Analysis: "+hit" or "+crit" on melee gear now helps your spells too.
- **Spell hit cap:** in Classic, a level-63 boss needs 16% spell hit (17% base miss) ([Jasica via Allakhazam](https://wow.allakhazam.com/wiki/Jasica's_Guide_to_Combat_Tables_-_Gearing_for_Spellcaster_Bosses_(WoW))). Forever's value is **untested**. Hit sources: [Tidal Focus](../talents/Restoration-Talents.md#tidal-focus) (+5%, Resto row 2) and Tauren Endurance (+1%). See [Spell Attack Table](../mechanics/Spell-Attack-Table.md).
- 🔵 **Spell power:** bonus healing now also gives one third as much bonus damage, and caster weapons now carry spell power ([Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)). 🟡 Icy Veins says Lava Burst leans more on gear spell power because base values are lower ([Icy Veins Elemental](https://www.icy-veins.com/wow-forever/elemental-shaman-ranged-dps-pve-guide)).
- 🟡 **Staves:** caster staves had their weapon DPS cut in game (Staff of Westfall: 20.5 on Wowhead, 15.2 in game). Don't trust Wowhead weapon DPS for Forever yet ([thread 2359184](https://us.forums.blizzard.com/en/wow/t/2359184)).
- **Intellect:** mana and spell crit. Classic level-60 Shamans needed 59.5 Int per 1% spell crit ([Warcraft Tavern Classic mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/)); not checked in Forever.
- 🟡 **Haste:** only from Skyborne Wind Blessed so far; Warcraft Tavern found no haste on gear ([Warcraft Tavern stats](https://www.warcrafttavern.com/forever/guides/stats/)).
- 🟡 **PvP:** players found that the crit bonus is halved against players (spell crits about 125% instead of 150%) ([Icy Veins news](https://www.icy-veins.com/wow-forever/news/players-found-a-hidden-pvp-rule-in-wow-forever-that-halves-crit-bonuses/)).

See [Stat Mechanics](../mechanics/Stat-Mechanics.md) and [Spell Coefficients](../mechanics/Spell-Coefficients.md).

## 🗿 Totems to Use

Totem rules changed a lot: buff totems now last **5 min** with **30 yd** range, a Totem Bar with three Call spells drops up to 4 totems at once, and Air totems no longer stack 🔵🟢. Full details: [Totem Mechanics](../mechanics/Totem-Mechanics.md) and [Totems](../reference/Totems.md).

- **Fire:** [Searing Totem](../reference/Totems.md#searing-totem) or [Magma Totem](../reference/Totems.md#magma-totem). 🟢 Elemental Fury raises the crit bonus of Searing and Magma Totems, and Call of Flame boosts Fire totem damage. Analysis: you also need a Fire totem down for Fire Nova to work.
- 🟡 Searing Totem and Fire Nova do **not** proc Elemental Devastation ([thread 2366738](https://us.forums.blizzard.com/en/wow/t/2366738)).
- **Earth (PvP):** [Earthbind Totem](../reference/Totems.md#earthbind-totem) with [Earthbound](../talents/Elemental-Talents.md#earthbound) for a 5 s root 🟡 ([Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview)).
- **Water:** [Mana Spring Totem](../reference/Totems.md#mana-spring-totem) (L26) for mana. Analysis.
- 🟡 **Call of the Elements** takes a 3.0 s cast and only saves about 1 s when you need all 4 totems; for 3 or fewer, drop them by hand ([thread 2369645](https://us.forums.blizzard.com/en/wow/t/2369645)).
- 🔵 **Totemic Recall** returns 25% of each recalled totem's mana (fixed Oct 1) ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)).

## 💧 Mana Management

- 🟢 [Convection](../talents/Elemental-Talents.md#convection): −10% mana on Shocks, LB, Lava Burst and CL.
- 🟢 [Elemental Focus](../talents/Elemental-Talents.md#elemental-focus): 10% chance of a free damage spell.
- 🟡 **Mindfulness dip** (8 Resto points): 50% of mana regen continues while casting ([Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/)).
- 🟢 **Lightning Bolt mana** dropped at most ranks (R10 ~~265~~ → **220**) ([Spells and Ranks](../reference/Spells-and-Ranks.md#lightning-bolt)).
- 🟡 [Water Shield](../talents/Restoration-Talents.md#water-shield) does nothing for damage crits; it only triggers on being hit or on heal crits ([thread 2364061](https://us.forums.blizzard.com/en/wow/t/2364061)).
- 🟢 Relics: *Windcarved Effigy* (Lightning Bolt −5 mana), *Polished Driftwood Icon* (L20, 8% of regen continues while casting), *Firestorm Totem* (totem mana −5%) ([WoWHandbook relics](https://wowhandbook.com/gear/relics/); [Items and Set Bonuses](../reference/Items-and-Set-Bonuses.md)).
- 🔴 A Mobalytics snippet claims Spirit regen outside casting was cut "across the board"; no official confirmation. See [Mana Regeneration](../mechanics/Mana-Regeneration.md).

## 🚫 Common Mistakes and Tester Notes

- **Following old-layout builds.** Any build with Elemental Fury in row 3 or Elemental Alacrity in row 6 predates Sept 24 🔵. This includes Warcraft Tavern's screenshot and Conquest Capped's prerequisites.
- 🟢 Per the talent tooltips, **Lava Burst does not benefit from Concussion, Call of Thunder or Lightning Overload**, but does get Call of Flame. Not testable until level 40 ([thread 2353745](https://us.forums.blizzard.com/en/wow/t/2353745), [thread 2356600](https://us.forums.blizzard.com/en/wow/t/2356600)).
- 🟢 **Concussion no longer boosts Flame Shock or Frost Shock**, only Earth Shock (plus LB and CL).
- 🟢 **Lava Burst has no guaranteed crit** with Flame Shock; it is a flat +20% damage.
- 🔴 **Call of Thunder** shows a blank tooltip in 70170; its +3% is not confirmed ([wfts](https://wowforevertalents.com/shaman/talents/call-of-thunder/)).
- 🟡 Icy Veins' overview says Lightning Overload affects "your Nature spells"; the client says Lightning Bolt and Chain Lightning only ([Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview)).
- 🟡 Threat: Earth Shock and Fire Nova pull threat hard in low-level dungeons ([thread 2365062](https://us.forums.blizzard.com/en/wow/t/2365062), [thread 2366147](https://us.forums.blizzard.com/en/wow/t/2366147)). See [Threat](../mechanics/Threat.md).

## 🔍 To Verify
- [ ] **Chain Lightning base damage** — R4 119–133 vs Classic 505–564, a much deeper cut than Lightning Bolt. Data error or redesign? Needs level 32+ ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-lightning)).
- [ ] **Lava Burst + Flame Shock + Call of Flame** — additive or multiplicative? ([thread 2353745](https://us.forums.blizzard.com/en/wow/t/2353745))
- [ ] **Forever spell hit cap** vs level-63 bosses — Classic is 16%; Forever untested.
- [ ] **Call of Thunder** real crit bonus in 70170 ([wfts](https://wowforevertalents.com/shaman/talents/call-of-thunder/)).
- [ ] **Flame Shock tick crits and Elemental Devastation** — ticks crit (🟡) but don't proc it ([thread 2366738](https://us.forums.blizzard.com/en/wow/t/2366738)).
- [ ] **Icy Veins exact ranks** — confirm the Elemental Warding vs Convection choice and rank counts in the calculator link ([Icy Veins Elemental](https://www.icy-veins.com/wow-forever/elemental-shaman-ranged-dps-pve-guide)).
- [ ] **A tested rotation** — nobody has published one; revisit when Lava Burst becomes reachable.

## 📚 Sources
- [Icy Veins Elemental guide](https://www.icy-veins.com/wow-forever/elemental-shaman-ranged-dps-pve-guide) and [class overview](https://www.icy-veins.com/wow-forever/shaman-class-overview) — 🟡 builds, PvP note
- [Warcraft Tavern Shaman guide](https://www.warcrafttavern.com/forever/guides/shaman/) and [stats guide](https://www.warcrafttavern.com/forever/guides/stats/) — 🟡 builds, dips, races, haste
- [wowforevertalents.com](https://wowforevertalents.com/shaman/), [wowforevertalent.com](https://wowforevertalent.com/shaman/) — 🟢 talent data; 🟡 popularity
- [Blizzard Beta Development Notes](https://us.forums.blizzard.com/en/wow/t/2360696), [Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap), [Meet the Skyborne](https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne) — 🔵 system rules
- [wago.tools DB2](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170), [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-lightning), [ForeverChanges racials](https://foreverchanges.pro/racials) — 🟢 client data
- [mythicsim](https://mythicsim.com/wow-forever/shaman) — 🟡 sim ranking
- [Method.gg racials](https://www.method.gg/wow-forever/all-new-racial-abilities-in-world-of-warcraft-forever), [WoWHandbook relics](https://wowhandbook.com/gear/relics/), [Icy Veins PvP crit news](https://www.icy-veins.com/wow-forever/news/players-found-a-hidden-pvp-rule-in-wow-forever-that-halves-crit-bonuses/) — 🟡
- Blizzard forum threads: [2353745](https://us.forums.blizzard.com/en/wow/t/2353745), [2356600](https://us.forums.blizzard.com/en/wow/t/2356600), [2359184](https://us.forums.blizzard.com/en/wow/t/2359184), [2362045](https://us.forums.blizzard.com/en/wow/t/2362045), [2364061](https://us.forums.blizzard.com/en/wow/t/2364061), [2365062](https://us.forums.blizzard.com/en/wow/t/2365062), [2365290](https://us.forums.blizzard.com/en/wow/t/please-fix-shamans/2365290), [2366147](https://us.forums.blizzard.com/en/wow/t/2366147), [2366738](https://us.forums.blizzard.com/en/wow/t/2366738), [2369645](https://us.forums.blizzard.com/en/wow/t/2369645) — 🟡 tester findings
- Classic baseline: [Jasica's combat tables](https://wow.allakhazam.com/wiki/Jasica's_Guide_to_Combat_Tables_-_Gearing_for_Spellcaster_Bosses_(WoW)), [Warcraft Tavern Classic mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/)
