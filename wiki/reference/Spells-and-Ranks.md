---
title: Spells and Ranks
description: Canonical rank tables for every Shaman spell in WoW Forever (level, mana, cast time, values and spell power coefficients), compared to Classic Era.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 📜 Spells and Ranks

This page holds the rank-by-rank numbers for Shaman spells: learn level, mana, cast time, damage or healing, and spell power coefficient, comparing Classic Era with WoW Forever. Mechanics pages summarize these numbers and link back here. Totems have their own page ([Totems](Totems.md)), and talent ranks live on the talent pages.

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified — see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)
>
> **Note: the beta is capped at level 30.** Every rank learned above level 30 comes from **client data only**: nobody has cast it on a live server yet. Treat those rows as "what the files say", not as tested values.

## 📑 Contents
- [How to Read This Page](#-how-to-read-this-page)
- [Trainer Changes](#-trainer-changes)
- [Damage Spells](#-damage-spells)
- [Shocks](#-shocks)
- [Healing Spells](#-healing-spells)
- [Lightning Shield and Weapon Imbues](#-lightning-shield-and-weapon-imbues)
- [Totem Bar Spells](#-totem-bar-spells)
- [Utility Spells](#-utility-spells)
- [Talent-Granted Spells](#-talent-granted-spells)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

## 🧭 How to Read This Page

- **Classic** means **Classic Era 1.15.x** (the comparison build is `1.15.9.69722`, per [ForeverChanges][fc]), not original 2006 patch 1.12.
- Changes are written `~~Classic~~ → **Forever**`. A plain value means "unchanged". A dash (`—`) means **no source gives the number**. We never fill gaps from other WoW versions; the open gaps are listed under [To Verify](#-to-verify).
- **SP coeff** (spell power coefficient) is the share of your bonus spell damage or healing added to the spell. A 71.4% coefficient adds 71.4 damage per 100 spell power. Classic coefficients are Classic Era client values (`EffectBonusCoefficient`) from [wago.tools][wago-era]. Spells learned before level 20 carried a Classic penalty of `coef × (1 − (20 − level) × 0.0375)` ([Ozgar's guide][ozgar]). See [Spell Coefficients](../mechanics/Spell-Coefficients.md) for the full explanation.
- Most Forever rank tables come from the client-data diff sites [WCLBox][wcl] (build 70009) and [ForeverChanges][fc] (build 70170), cross-checked with [Wowhead Forever][wh-lb10] and raw [wago.tools DB2][wago-se] on spot checks 🟢.

**Global patterns** (apply to most tables below):
- 🟢 Forever casters use **lower base damage with higher coefficients at low ranks**. For example, Lightning Bolt R1 has ~~12.3%~~ → **42.9%** ([WCLBox][wcl-lb]). Shocks lose roughly 40–45% of their base damage, and heals lose roughly 7–25% with cast times unchanged.
- 🔴 "A general cut to spell base damage" is a **player description**, not a Blizzard statement ([wofwforever][wofw]).
- 🔵 Bonus healing now also grants **one third as much bonus spell damage**, and caster weapons carry spell power ([Blizzard Deep Dive][blz-dd]). See [Forever System Changes](../forever/Forever-System-Changes.md).
- 🔵 **Downranking penalty (Oct 1):** spell ranks far below your level get less benefit from spell power **and** have a reduced chance to trigger class abilities and talents ([dev notes][blz-notes]).
- 🔵 Periodic effects (DoTs and HoTs) can crit. Riptide's crit was fixed on Sept 24 ([dev notes][blz-notes]).

## 🆕 Trainer Changes

🟢 **Rank counts are identical to Classic** for every spell checked: Lightning Bolt 10, Chain Lightning 4, Healing Wave 10, Lesser Healing Wave 6, Chain Heal 3, Earth Shock 7, Flame Shock 6, Frost Shock 4, and the weapon imbues 7/6/5/4. **Learn levels are also unchanged**, with one exception: Mana Tide Totem R1 moves from ~~40~~ to **25** because the talent moved ([WCLBox][wcl], [ForeverChanges][fc]).

**New spells at the trainer** 🟢 ([ForeverChanges][fc], [WCLBox][wcl]):

| Level | Spell | Notes |
|---|---|---|
| 12 / 22 / 32 / 42 / 52 | [Fire Nova](#fire-nova) (R1–R5) | Replaces Fire Nova Totem at the same levels |
| 20 | [Call of the Elements](#call-of-the-elements) | Places up to 4 Totem Bar totems |
| 20 | [Totemic Recall](#totemic-recall) | Returns totems, refunds 25% of their mana |
| 22 | [Totemic Projection](#totemic-projection) | Moves active totems |
| 30 | Call of the Ancestors | Second Totem Bar set |
| 40 | Call of the Spirits | Third Totem Bar set |
| 40 / 50 / 60 | [Lava Burst](#lava-burst) R1–R3, [Riptide](#riptide) R1–R3 | Only once you have the talent |

- 🟢 **Diff totals** across the 56 Shaman baseline spells: **5 new, 29 changed, 1 removed (Tranquil Air Totem)** ([ForeverChanges][fc], [WCLBox][wcl]). GameSpot counts "16 new spells/talents, 95 modified" because it includes talents 🟡 ([GameSpot via Yahoo][gamespot]).
- 🔴 Tranquil Air Totem's removal conflicts with Blizzard's Sept 24 notes. See [Totems](Totems.md#tranquil-air-totem).
- 🟢 Elemental Mastery is **not** in the tree and **not** in the spellbook. No replacement is known ([wfts][wfts], [ClassicWoWForever][cwf]).

## ⚡ Damage Spells

### Lightning Bolt

🟢 10 ranks. Rank values from [WCLBox][wcl-lb]. R10 cross-checked with [Wowhead R10 (15208)][wh-lb10]: 220 mana, 2.5 s, SP mod 0.714.

| Rank | Level | Mana | Cast | Classic damage | Forever damage | SP coeff |
|---|---|---|---|---|---|---|
| 1 | 1 | 15 | 1.5 s | 15–17 | **15–17** | ~~12.3%~~ → **42.9%** |
| 2 | 8 | 30 | 2.0 s | 28–33 | **29–34** | ~~31.4%~~ → **57.1%** |
| 3 | 14 | 45 | 2.5 s | 48–57 | **44–52** | ~~55.4%~~ → **71.4%** |
| 4 | 20 | ~~75~~ → **60** | ~~3.0 s~~ → **2.5 s** | 88–100 | **55–63** | ~~85.7%~~ → **71.4%** |
| 5 | 26 | ~~105~~ → **85** | ~~3.0 s~~ → **2.5 s** | 131–149 | **71–80** | ~~85.7%~~ → **71.4%** |
| 6 | 32 | ~~135~~ → **110** | ~~3.0 s~~ → **2.5 s** | 179–202 | **108–122** | ~~85.7%~~ → **71.4%** |
| 7 | 38 | ~~165~~ → **135** | ~~3.0 s~~ → **2.5 s** | 235–264 | **142–160** | ~~85.7%~~ → **71.4%** |
| 8 | 44 | ~~195~~ → **160** | ~~3.0 s~~ → **2.5 s** | 291–326 | **158–176** | ~~85.7%~~ → **71.4%** |
| 9 | 50 | ~~230~~ → **190** | ~~3.0 s~~ → **2.5 s** | 357–400 | **173–193** | ~~85.7%~~ → **71.4%** |
| 10 | 56 | ~~265~~ → **220** | ~~3.0 s~~ → **2.5 s** | 428–477 | **190–211** | ~~85.7%~~ → **71.4%** |

Classic coefficients for R4 and up are Classic Era client data: 0.857 for every rank learned at level 20+ ([wago.tools Classic Era][wago-era]).

- 🔵 Sept 24: "Damage on ranks 3 and 4 increased to make these spells always upgrades over previous ranks (despite changing cast times)" ([dev notes][blz-notes]). In DB2 the base value went 35 → 45 for R3 (spell 548) and 50 → 56 for R4 (spell 915) 🟢 ([wago diff](Datamining.md#sample-diff-69876-to-70170)).
- 🟡 Another source quotes R3 **41–49** and R4 **52–60**. Those are most likely the pre-buff values. Even after the buff, R3 (44–52) is still lower than Classic R3 (48–57) at the same 2.5 s cast.
- 🟢 R10 in DB2: base 196, variance ≈0.108, +1.2 per level from spell level 56, which works out to about **189–211** at level 60 ([wago SpellEffect][wago-se], [forum thread 2353745][f-2353745]). WCLBox shows 190–211.
- 🟡 Talents that change Lightning Bolt (Convection, Concussion, Elemental Alacrity, Call of Thunder, Lightning Overload, Elemental Reach, Maelstrom Weapon): see [Elemental Talents](../talents/Elemental-Talents.md) and [Enhancement Talents](../talents/Enhancement-Talents.md#maelstrom-weapon).

### Chain Lightning

🟢 4 ranks, 30 yd, 6 s cooldown, 3 targets. Values from [WCLBox][wcl-cl]. R4 cross-checked with [Wowhead (10605)][wh-cl4]: 485 mana, 2 s cast, 6 s CD, SP mod 0.571.

| Rank | Level | Mana | Cast | Classic damage | Forever damage | SP coeff |
|---|---|---|---|---|---|---|
| 1 | 32 | ~~280~~ → **225** | ~~2.5 s~~ → **2.0 s** | 200–227 | **85–97** | ~~71.4%~~ → **57.1%** |
| 2 | 40 | ~~380~~ → **305** | ~~2.5 s~~ → **2.0 s** | 288–323 | **97–109** | ~~71.4%~~ → **57.1%** |
| 3 | 48 | ~~490~~ → **390** | ~~2.5 s~~ → **2.0 s** | 391–438 | **109–122** | ~~71.4%~~ → **57.1%** |
| 4 | 56 | ~~605~~ → **485** | ~~2.5 s~~ → **2.0 s** | 505–564 | **119–133** | ~~71.4%~~ → **57.1%** |

- 🟢 Classic coefficient 0.714 is Classic Era DB2 for R4, on the primary target. In Classic, each jump does 30% less than the previous one (100% / 70% / 49%) ([wago.tools Classic Era][wago-era]). WCLBox prints the Forever coefficient as "57.1%–51.7%"; what the second number means is unclear.
- 🟢 DB2 70170 for R4: 2.0 s cast, 6 s category cooldown, coefficient 57.1%, base 123 ([wago SpellEffect][wago-se]).
- 🔴 **Needs an in-game check.** The base damage cut (about −76% at R4) is much deeper than Lightning Bolt's (about −56%). This could be a deliberate redesign or a data-reading error. All ranks are above the level-30 cap.
- 🟡 Maelstrom Weapon does **not** affect Chain Lightning ([forum thread 2354160][f-2354160]).

### Lava Burst

🟢 Granted by the Elemental 31-point talent. Ranks 2 and 3 are trained at 50 and 60. Fire damage, 30 yd, 2.5 s cast, 10 s cooldown. Deals **+20% damage if your Flame Shock is on the target** (no guaranteed crit). See [Elemental Talents](../talents/Elemental-Talents.md#lava-burst).

| Rank | Level | Mana | Cast | Classic | Forever damage | SP coeff | Spell ID |
|---|---|---|---|---|---|---|---|
| 1 | 40 | 165 | 2.5 s | — (new) | **150–193** ([wfts][wfts-lvb]) · 150–192 ([WCLBox][wcl-lvb], [wft][wft]) · 143–185 ([EndgameTools][egt], likely pre-patch) | **71.4%** | 408490 |
| 2 | 50 | 230 | 2.5 s | — (new) | **180–230** ([WCLBox][wcl-lvb]) · 179–231 ([wfts abilities][wfts-ab]) | **71.4%** | 1238299 |
| 3 | 60 | 265 | 2.5 s | — (new) | **192–248** | **71.4%** | 1238300 |

- 🟢 Coefficient 71.4% and the +20% Flame Shock bonus (effect 2, base 20) come from DB2 70170 ([wago Spell][wago-spell]). Conquest Capped gives the same 71.4% 🟡 ([CC][cc]). Hidden variants 1238373 and 1238376 also exist.
- 🔵🟢 Sept 24 buff: "Lava Burst damage on ranks 1 and 2 increased to be about 10% more base damage than the Lightning Bolt rank learned around the same level" ([dev notes][blz-notes]). In DB2, R1 base went **113 → 164** and R2 **179 → 196** ([sample diff](Datamining.md#sample-diff-69876-to-70170)).
- 🟢 Per the talent tooltips, Lava Burst does **not** benefit from Call of Thunder, Concussion or Lightning Overload, but **does** get +15% from Call of Flame. Forum posters say the same ([forum thread 2353745][f-2353745]). ⚠ Not an in-game test: Lava Burst is a 31-point talent and out of reach at the beta cap, so this is a tooltip reading.
- 🔴 Why sources disagree on R1: 150–193 vs 150–192 is probably rounding. The EndgameTools 143–185 is probably the pre-Sept-24 value, although its +5% gap does not match Blizzard's "about 10%" (which compares with Lightning Bolt, not with the old value).

### Fire Nova

🟢 The Classic **Fire Nova Totem became an instant spell**. It "instantly inflicts fire damage to enemies within 10 yd of your active Fire totem", so you need a Fire totem down to use it ([WCLBox][wcl-fn]).

| | Classic (Fire Nova Totem) | Forever (Fire Nova) |
|---|---|---|
| Ranks / levels | 5: 12 / 22 / 32 / 42 / 52 | 5: 12 / 22 / 32 / 42 / 52 |
| Cast | summons a 5 HP totem that lasts 5 s and detonates after 4 s | **instant nova** centred on your Fire totem |
| Cooldown | 15 s | **10 s** |
| Range | none (totem at your feet) | **30 yd** (to the Fire totem) |
| Radius | 10 yd | 10 yd |
| Mana | — | "same as Classic per rank" (one stream preview showed **280 mana** 🟡, rank unknown) |
| R1 damage | 53–62 | **53–62** ([WCLBox][wcl-fn], "identical to Classic") · 48–56 ([EndgameTools][egt]) |
| Max rank damage | — | 396–442 ([EndgameTools][egt]) · 412 ([WoWHandbook][whb-class]) · 413–459 ([ForeverChanges][fc]) 🔴 |
| SP coeff | 14.3% (R5 nova, spell 11307) | — |

- 🔴 Which number belongs to which rank is unclear for the max-rank values, so the column above lists all three.
- 🟢 Talents: **Improved Fire Nova** gives +10/20% damage and −2/4 s cooldown. **Call of Flame** gives +5/10/15% ([wfts][wfts]). Relic: Totem of Elders lets Fire Nova extend Flame Shock (see [Items](Items-and-Set-Bonuses.md#totem-relics)).
- 🟡 Fire Nova does **not** trigger Elemental Devastation ([forum thread 2366738][f-2366738]). Players describe it as "a massive threat generator even against single target" ([thread 2366147][f-2366147]).
- 🟡 Bug: the range indicator does not turn red beyond 30 yd from the Fire totem ([forever-bugs #79][fb-79]).

## 💥 Shocks

All three shocks share a **6 s cooldown** (Classic spell category 19) and have a 20 yd range. 🟢 Mana costs, cooldowns and learn levels are **unchanged** in Forever ([WCLBox Earth][wcl-es], [Flame][wcl-fs], [Frost][wcl-frs]). Mechanics: [Shock Mechanics](../mechanics/Shock-Mechanics.md).

### Earth Shock

🟢 7 ranks. Interrupts spellcasting (Classic: 2 s school lockout) and causes high threat (2× in Classic). Only four ranks are documented in our sources.

| Rank | Level | Mana | Cast | Classic damage | Forever damage | SP coeff |
|---|---|---|---|---|---|---|
| 1 | 4 | — | Instant | 19–22 | **20–21** | ~~15.4%~~ → **38.6%** |
| 2 | — | — | Instant | — | — | — |
| 3 | 14 | — | Instant | 65–69 | **52–55** | — |
| 4 | — | — | Instant | — | — | — |
| 5 | 36 | — | Instant | 235–249 | **135–142** | — |
| 6 | — | — | Instant | — | — | — |
| 7 | 60 | 450 | Instant | 517–545 | **293–309** | 38.6% (unchanged) |

- 🟢 R7 is spell [10414][wh-es7]; Wowhead Forever shows SP mod 0.386. Classic Era R7 is also 0.386 ([wago.tools Classic Era][wago-era]).
- 🟢 Concussion now boosts **Earth Shock only** among the shocks, and Stormstrike buffs the next Earth Shock ([wfts][wfts]).

### Flame Shock

🟢 6 ranks. Direct Fire damage plus a 12 s DoT (4 ticks, one every 3 s).

| Rank | Level | Mana | Cast | Classic (direct + DoT) | Forever (direct + DoT) | SP coeff |
|---|---|---|---|---|---|---|
| 1 | 10 | 55 | Instant | 25 + 28 | **24 + 28** | Classic 13.4% direct · Forever **21.4% direct + 10% per tick** |
| 2 | — | — | Instant | — | — | — |
| 3 | 28 | — | Instant | 95 + 96 | **49 + 56** | — |
| 4 | — | — | Instant | — | — | — |
| 5 | — | — | Instant | — | — | — |
| 6 | 60 | 410 | Instant | 292 + 320 | **166 + 176** | Classic 21.4% direct + 10% per tick (40% total) |

- 🟢 R1 is spell 8050. In DB2 70170 the direct part has **base 20** at a 21.4% coefficient, and the DoT does 7 per tick at a 10% coefficient per tick ([wago SpellEffect][wago-se]). WCLBox displays 24 for the direct part; the gap between 20 and 24 is not explained in our sources.
- 🟢 Classic R6 is spell [29228][wh-fs6] (Classic Era DB2, [wago.tools][wago-era]).
- 🟡 Flame Shock **ticks can crit** in Forever, but those tick crits do **not** trigger Elemental Devastation ([forum thread 2366738][f-2366738]).
- 🟢 Talents and items: Elemental Reach +8/15 yd range on Flame Shock, Call of Flame +15% damage ([wfts][wfts]), Burning Totem relic +3 s duration ([Items](Items-and-Set-Bonuses.md#totem-relics)).

### Frost Shock

🟢 4 ranks. Frost damage plus a **50% movement slow for 8 s** (unchanged).

| Rank | Level | Mana | Cast | Classic damage | Forever damage | SP coeff |
|---|---|---|---|---|---|---|
| 1 | 20 | 115 | Instant | 95–101 | **68–73** | — |
| 2 | — | — | Instant | — | — | — |
| 3 | — | — | Instant | — | — | — |
| 4 | 58 | 430 | Instant | 492–520 | **279–295** | Classic 38.6% · Forever — |

- 🟢 Classic R4 is spell [10473][wh-frs4] (coefficient 0.386, Classic Era DB2).

## 💧 Healing Spells

🟢 Heal **cast times and mana costs are unchanged**; base healing is lower ([WCLBox][wcl-hw]). Mechanics: [Healing Mechanics](../mechanics/Healing-Mechanics.md).

### Healing Wave

🟢 10 ranks. R10 per [Wowhead (25357)][wh-hw10]: 620 mana, **3 s**, SP mod 0.857.

| Rank | Level | Mana | Cast | Classic heal | Forever heal | SP coeff |
|---|---|---|---|---|---|---|
| 1 | 1 | 25 | 1.5 s | 36–47 | **37–47** | ~~12.3%~~ → **42.9%** |
| 2 | 6 | 45 | 2.0 s | 69–83 | **69–83** | ~~27.1%~~ → **57.1%** |
| 3 | 12 | 80 | 2.5 s | 136–163 | **127–150** | ~~50%~~ → **71.4%** |
| 4 | 18 | 155 | 3.0 s | 279–328 | **246–289** | ~~79.3%~~ → **85.7%** |
| 5 | 24 | 200 | 3.0 s | 389–454 | **329–382** | — |
| 6 | 32 | 265 | 3.0 s | 552–639 | **465–536** | — |
| 7 | 40 | 340 | 3.0 s | 759–874 | **656–753** | — |
| 8 | 48 | 440 | 3.0 s | 1040–1191 | **929–1062** | — |
| 9 | 56 | 560 | 3.0 s | 1389–1583 | **1277–1455** | — |
| 10 | 60 | 620 | 3.0 s | 1620–1850 | **1508–1722** | 85.7% (unchanged) |

- 🔴 A search summary claimed "Healing Wave changed to 1.5 s". Client data shows **3 s** at R10, so we treat that claim as false.
- 🟢 Talents: Improved Healing Wave (−0.1 s per rank) and Healing Way (+8/17/25% flat) ([wfts][wfts]). Tidal Totem relic: −5% mana.

### Lesser Healing Wave

🟢 6 ranks, learned from level 20 to 60, 1.5 s cast, 105–380 mana ([WCLBox][wcl-lhw]).

| Rank | Level | Mana | Cast | Classic heal | Forever heal | SP coeff |
|---|---|---|---|---|---|---|
| 1 | 20 | 105 | 1.5 s | 170–195 | **151–172** | — |
| 2–5 | — | — | 1.5 s | — | — | — |
| 6 | 60 | 380 | 1.5 s | 832–928 | **775–865** | Classic 42.9% · Forever — |

- 🟢 Classic R6 is spell [10468][wh-lhw6] (coefficient 0.429, Classic Era DB2). Totem of Urgency relic: +4% crit on Lesser Healing Wave.

### Chain Heal

🟢 3 ranks, 2.5 s cast, 3 targets, each jump heals 50% of the previous one ([WCLBox][wcl-ch]).

| Rank | Level | Mana | Cast | Classic heal | Forever heal | SP coeff |
|---|---|---|---|---|---|---|
| 1 | 40 | — | 2.5 s | 332–381 | **246–281** | — |
| 2 | 46 | — | 2.5 s | 419–479 | **326–372** | — |
| 3 | 54 | — | 2.5 s | 567–646 | **474–539** | Classic 71.4% · Forever — |

- 🟢 Classic R3 is spell [10623][wh-ch3] (coefficient 0.714 on the primary target). In Classic, when cast on a party member it jumps only within the party.
- 🟢 Chain Heal cast directly on a target with your Riptide is **25% more effective** ([wfts][wfts]).

### Riptide

🟢 Granted by the Restoration 31-point talent. Ranks 2 and 3 are trained at 50 and 60. Instant, 40 yd, **6 s cooldown**. Direct heal plus a HoT over 15 s. See [Restoration Talents](../talents/Restoration-Talents.md#riptide).

| Rank | Level | Mana | Cast | Classic | Forever direct heal | Forever HoT (15 s) | Spell ID |
|---|---|---|---|---|---|---|---|
| 1 | 40 | 245 | Instant | — (new) | **484–535** ([wfts][wfts]) · 486–534 ([WCLBox][wcl-rt]) · 485–533 ([wft][wft], [ClassicWoWForever][cwf]) · 456–504 ([EndgameTools][egt], stale) | **445** | 408521 |
| 2 | 50 | 300 | Instant | — (new) | **615–676** ([WCLBox][wcl-rt]) · 613–678 ([wfts abilities][wfts-ab]) | **575** | 1239242 |
| 3 | 60 | 385 | Instant | — (new) | **799–883** | **805** | 1239243 |

- 🟢 **DB2 70170** for R1: direct **base 480** at a **21.4%** coefficient, plus HoT 89 per 3 s at **10% per tick** over 15 s. The displayed range comes from the base plus level scaling. R2/R3 bases are 612/115 and 841/161 ([wago SpellEffect][wago-se]). Wowhead shows "481 … 90 every 3 sec", the usual +1 display offset ([Wowhead 408521][wh-rt1]).
- 🟡 Conquest Capped gives 21.4% direct + 50% HoT, which matches 10% × 5 ticks ([CC][cc]).
- 🔵 Riptide could not crit until the Sept 24 fix ([dev notes][blz-notes], [forever-bugs #71][fb-71]).
- 🟢 Set bonus: The Spiritcaller 5-piece lowers the Riptide cooldown by 1 s ([Items](Items-and-Set-Bonuses.md#the-spiritcaller)).

## 💫 Lightning Shield and Weapon Imbues

### Lightning Shield

🟢 7 ranks, learned from level 8 to 56. 3 orbs, 10 min, mana unchanged. The Forever tooltip says it triggers on spell, melee or ranged hits ([WCLBox][wcl-ls], [ForeverChanges][fc]).

| Rank | Level | Mana | Classic damage per orb | Forever damage per orb |
|---|---|---|---|---|
| 1 | 8 | — | — | — |
| 2 | — | — | 29 | **24** |
| 3 | — | — | 51 | **40** |
| 4 | — | — | 80 | **64** |
| 5 | — | — | 114 | **96** |
| 6 | — | — | 154 | **134** |
| 7 | 56 | — | 198 | **178** |

- 🟢 Classic R7 is spell [10432][wh-ls7]: coefficient 0.267 per orb and a 3.5 s internal cooldown between orb discharges (Classic Era DB2). Forever coefficient: —.
- 🟢 Talents: Improved Lightning Shield +5/10/15% damage, Shamanistic Focus −45% mana cost ([wfts][wfts]). Only one Elemental Shield (Lightning or Water) can be active at a time.
- 🟡 A tester could not make Lightning Shield crit ([forum thread 2366738][f-2366738]).

### Weapon Imbues Overview

🟢 All four imbues last ~~5 min~~ → **60 min**. Mana and learn levels are unchanged ([WCLBox][wcl]). How imbues interact with totems, procs and talents is on [Weapon Imbues](../mechanics/Weapon-Imbues.md).

### Rockbiter Weapon

🟢 7 ranks. **Only the duration changed.** It still lets melee attacks "cause additional threat" ([WCLBox][wcl-rb]).

| Rank | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Level | 1 | 8 | 16 | 24 | 34 | 44 | 54 |
| Attack power | 50 | 79 | 118 | 194 | 355 | 522 | 653 |

- 🟢 Classic R7 tooltip is spell [16316][wh-rb7]. In Classic Era DB2 the passive stores +554 AP, which does not match the 653 tooltip ([wago.tools Classic Era][wago-era]).
- 🟢 Elemental Weapons: Rockbiter AP +7/13/20% ([wfts][wfts]). Threat details: [Threat](../mechanics/Threat.md).

### Flametongue Weapon

🟢 6 ranks (level 10 to 56). Fire damage per hit, scaled by weapon speed. **New clause:** on the main hand it "disables any benefit you personally receive from Flametongue Totem" ([WCLBox][wcl-ftw]).

| Rank | Classic damage per hit | Forever damage per hit |
|---|---|---|
| 1 | 6–18 (WCLBox: 5.7–17.6) | **4.71–18** |
| 2 | 9–26 | — |
| 3 | 14–42 | — |
| 4 | 22–69 | — |
| 5 | 31–95 | — |
| 6 | 37–112 (WCLBox: 36.5–112.4) | **35–112** |

- 🟢 Classic values are rounded Wowhead Classic tooltips ([WH 16342][wh-ftw6]). The R6 range implies about `28 × weapon speed` per hit, clamped to roughly 1.3–4.0 s weapons (derived, not confirmed).
- 🟢 Spell IDs of the 6 ranks in 70170: 8024, 8027, 8030, 16339, 16341, 16342. In 70170 the tooltips gained a flat `+($10444m1)` term from the Flametongue Attack spell ([sample diff](Datamining.md#sample-diff-69876-to-70170)).
- 🟡 Bug fixed: the tooltip did not update with spell power, but the damage **did** scale with spell power ([forever-bugs #80][fb-80]).

### Frostbrand Weapon

🟢 5 ranks. Each hit has a chance to deal Frost damage and slow the target by 25% for 8 s (unchanged) ([WCLBox][wcl-fbw]).

| Rank | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Level | 20 | 28 | 38 | 48 | 58 |
| Classic damage | 48 | 77 | 124 | 166 | 187 |
| Forever damage | **45** | **72** | **117** | **159** | **169** |

- 🟢 Classic R5 is spell [16356][wh-fbw5], damage coefficient 0.10 (Classic Era DB2). The proc rate is not stored in the client, and the often-quoted "9 PPM" is unconfirmed.

### Windfury Weapon

🟢 4 ranks. Each hit has a **20% chance to grant 2 extra attacks** with bonus attack power (unchanged). **New clause:** on the main hand it "disables any benefit you personally receive from Windfury Totem" ([WCLBox][wcl-wfw]).

| Rank | Level | Mana | Classic AP | Forever AP | Classic spell ID |
|---|---|---|---|---|---|
| 1 | 30 | 90 | 104 | **104** | [8232][wh-wfw1] |
| 2 | 40 | 115 | 222 | **221** | 8235 |
| 3 | 50 | 140 | 316 | **315** | 10486 |
| 4 | 60 | 165 | 333 | **333** | [16362][wh-wfw4] |

- 🟢 **Internal cooldown (ICD)**, the minimum time between two procs: Classic Era 1.15 has a **1.5 s ICD** (DB2 proc spell 439431, `ProcCategoryRecovery = 1500`; also measured by Zirene in 2023 per [magey][magey-wf]). Warcraft.wiki.gg says original 1.12 had none. No source reports a Forever change.
- 🟢 **R1 is learnable at level 30, so Windfury Weapon can be tested in the current beta.** Higher ranks are client data only.
- 🟢 Elemental Weapons: Windfury effect +13/27/40% ([wfts][wfts]).

## 🗿 Totem Bar Spells

These spells manage totems. The totems themselves (ranks, durations, values) are on [Totems](Totems.md), and the rules are on [Totem Mechanics](../mechanics/Totem-Mechanics.md).

### Call of the Elements

🟢🔵 "Simultaneously places up to 4 totems specified in the Totem Bar." Blizzard confirmed the Totem Bar system in its class overview video ([guided.news][guided]).

| Spell | Level | Cost | Cast | Cooldown | Spell ID |
|---|---|---|---|---|---|
| Call of the Elements | 20 | none | 3.0 s | none (1.5 s GCD) | [66842][wh-cote] |
| Call of the Ancestors | 30 | none | 3.0 s | none (1.5 s GCD) | [66843][wh-cota] |
| Call of the Spirits | 40 | none | 3.0 s | none (1.5 s GCD) | 66844 |

- 🟢 DB2 70170: CastingTime 3000 ms, GCD 1.5 s, school mask 28 (Fire/Nature/Frost). Cannot be used while shapeshifted ([wago SpellMisc][wago-misc], [Wowhead][wh-cote]). GCD is the global cooldown, the short lockout after most spells.
- 🟡 **Timing test:** dropping 4 totems by hand places them at 0/1/2/3 s with the GCD ending at 4 s. Call of the Elements lands all 4 at 3.0 s, so it **only saves about 1 s when you need all 4 totems** and are not pushed back. For 3 totems or fewer, manual placement is faster ([forum thread 2369645][f-2369645]).
- 🟢 Totemic Focus reduces the mana cost of totems **and** of spells that summon or move them, naming Call of the Elements and Totemic Projection ([wfts][wfts]).

### Totemic Recall

🟢 Level 20, 1 rank, instant. "Returns your totems to the earth, giving you 25% of the mana required to cast each totem destroyed by Totemic Recall" ([WCLBox][wcl-tr]). Spell ID **36936**.

- Mana cost and cooldown: **not listed in any source**.
- 🟡 Recall **costs a GCD** ([forum thread 2364945][f-2364945]).
- 🔵 Bug: it returned **0 mana** until it was fixed on Oct 1 ([dev notes][blz-notes], [forever-bugs #186][fb-186]). Build 70170 added a hidden helper spell **1323420** "Totemic Recall" (energize mana, base 0, so the amount is probably computed by a script) 🟢, which is most likely how the fix was implemented 🔴.
- Below level 20 the only way to dismiss a totem is to right-click it on the totem frame. See [Macros](Macros.md#totem-dismiss-macro-does-not-work).

### Totemic Projection

🟢 Level 22, instant, **60 s cooldown**, 30 yd. "Relocates your active totems to the specified location" ([WCLBox][wcl-tp], [wago SpellCooldowns][wago-cd]). Spell ID **437009**.

- Cost: 25% of base mana; one preview showed **230 mana** 🟡 ([ForeverTome][ftome], from a stream).

## 🐺 Utility Spells

### Ghost Wolf

🟢 Level 20, 100 mana, **3 s cast**, +40% run speed, outdoors only. **Unchanged from Classic** ([WCLBox][wcl-gw]).

- 🟢 Indoor use comes from the **Improved Ghost Wolf** talent (−1/3 s cast, usable indoors), so 2/2 makes it instant ([wfts][wfts]).
- 🔴 Icy Veins and Conquest Capped list a **2 s** base cast. That is probably the BlizzCon demo value; the client says 3 s ([wfts abilities][wfts-ab]). GameSpot also implies a baseline change, which client data does not support.
- 🔵 Oct 1: made more visible in well-lit areas ([dev notes][blz-notes]). 🟡 Players now say it is too bright ([thread 2369180][f-2369180]). See [Known Beta Bugs](../forever/Known-Beta-Bugs.md).

### Reincarnation

🟢 Level 30. **Unchanged:** 60 min cooldown, resurrect with 20% health and mana, **still uses an Ankh** ([Wowhead 20608][wh-reinc], [WCLBox][wcl-reinc]).

- 🟢 Improved Reincarnation now also gives +2/4% max health, alongside −10/20 min cooldown and +10/20% health and mana on reincarnate ([wfts][wfts]).

### Purge

🟢 2 ranks (level 12 and 32). Unchanged ([ForeverChanges][fc]).

### Other Utility Spells

🟢 Unchanged from Classic ([ForeverChanges][fc], [WCLBox index][wcl]):

| Spell | Level |
|---|---|
| Cure Poison | 16 |
| Water Breathing | 22 |
| Cure Disease | 22 |
| Far Sight | 26 |
| Water Walking | 28 |
| Astral Recall | 30 |
| Ancestral Spirit | 5 ranks (levels: —) |

## 🌳 Talent-Granted Spells

These spells come from talents. Their full data lives on the talent pages; only Lava Burst and Riptide have trainer ranks (above). Short summaries of Stormstrike and Water Shield follow the table.

| Spell | Tree (row) | Page |
|---|---|---|
| Lava Burst | Elemental (7) | [Elemental Talents](../talents/Elemental-Talents.md#lava-burst) |
| Stormstrike | Enhancement (4) | [Enhancement Talents](../talents/Enhancement-Talents.md#stormstrike) |
| Rage of the Farseer | Enhancement (7) | [Enhancement Talents](../talents/Enhancement-Talents.md#rage-of-the-farseer) |
| Water Shield | Restoration (3) | [Restoration Talents](../talents/Restoration-Talents.md#water-shield) |
| Mana Tide Totem | Restoration (4) | [Restoration Talents](../talents/Restoration-Talents.md#mana-tide-totem), ranks on [Totems](Totems.md#mana-tide-totem) |
| Nature's Swiftness | Restoration (5) | [Restoration Talents](../talents/Restoration-Talents.md#natures-swiftness) |
| Riptide | Restoration (7) | [Restoration Talents](../talents/Restoration-Talents.md#riptide) |

### Stormstrike

🟢 Enhancement row 4 (moved up from row 7, now a 16-point talent). 125 mana, instant, melee ([wfts][wfts], [ClassicWoWForever][cwf]).

| | Classic | Forever |
|---|---|---|
| Cooldown | 20 s | **8 s** |
| Strike | Extra attack | Normal weapon damage |
| Debuff | Next **2 Nature damage sources** on the target take +20%, 12 s | Your **next Lightning Bolt, Chain Lightning or Earth Shock** on the target deals +20%, 12 s |

- 🟢 Improved Stormstrike, the Spiritcaller's Rage 5-piece (−0.5 s cooldown) and the Totem of the Undergrove relic modify it. Full details: [Enhancement Talents](../talents/Enhancement-Talents.md#stormstrike).

### Water Shield

🟢 Restoration row 3, 1 rank. Instant, **15 s cooldown**, 10 min, 3 water globes. When you are hit by a spell, melee or ranged attack, **or one of your heals crits**, you gain **2% of max mana** and use up a globe. Only one Elemental Shield (Water or Lightning) at a time ([wfts][wfts], [WCLBox][wcl]).

- 🟢 DB2 70170: spell 408510 (mana proc 408511), 15 s category cooldown, **3.5 s internal proc cooldown**, no flat MP5 ([wago SpellEffect][wago-se]).
- 🟡 Bugs reported Sept 25: the tooltip drops to **1%** at 2 or fewer charges, always says "3 charges", and the listed 15 s cooldown was **not applied**. The cooldown issue was marked Fixed on Oct 1, but which way (cooldown added or tooltip changed) is unclear ([forum thread 2361063][f-2361063], [forever-bugs #134][fb-134]).
- Full details: [Restoration Talents](../talents/Restoration-Talents.md#water-shield), [Mana Regeneration](../mechanics/Mana-Regeneration.md).

## 📋 Quick Reference

| Spell | Ranks (levels) | Headline Forever change | Conf. |
|---|---|---|---|
| Lightning Bolt | 10 (1–56) | ~~3.0 s~~ → **2.5 s** from R4; less mana; base damage roughly halved; coeff ~~85.7%~~ → **71.4%** | 🟢🔵 |
| Chain Lightning | 4 (32–56) | ~~2.5 s~~ → **2.0 s**; less mana; R4 ~~505–564~~ → **119–133** | 🟢 / 🔴 check |
| Lava Burst | 3 (40/50/60) | New (talent); 150–193 R1; +20% with Flame Shock | 🟢🔵 |
| Fire Nova | 5 (12–52) | Totem → instant spell at your Fire totem; CD ~~15 s~~ → **10 s** | 🟢 |
| Earth Shock | 7 (4–60) | Base −40–45%; R7 ~~517–545~~ → **293–309** | 🟢 |
| Flame Shock | 6 (10–60) | R6 ~~292 + 320~~ → **166 + 176**; ticks can crit | 🟢 / 🟡 |
| Frost Shock | 4 (20–58) | R4 ~~492–520~~ → **279–295** | 🟢 |
| Healing Wave | 10 (1–60) | Base healing lower (R10 ~~1620–1850~~ → **1508–1722**); coeff up at low ranks; cast unchanged | 🟢 |
| Lesser Healing Wave | 6 (20–60) | R6 ~~832–928~~ → **775–865** | 🟢 |
| Chain Heal | 3 (40/46/54) | R3 ~~567–646~~ → **474–539** | 🟢 |
| Riptide | 3 (40/50/60) | New (talent); instant heal + HoT, 6 s CD | 🟢🔵 |
| Lightning Shield | 7 (8–56) | Orb damage lower (R7 ~~198~~ → **178**) | 🟢 |
| Weapon imbues | 7 / 6 / 5 / 4 | ~~5 min~~ → **60 min**; FT/WF Weapon disable your own FT/WF Totem benefit | 🟢 |
| Call of the Elements / Ancestors / Spirits | 1 each (20 / 30 / 40) | New; 3 s cast, places up to 4 totems | 🟢🔵 |
| Totemic Recall | 1 (20) | New; 25% mana refund; GCD | 🟢 / 🟡 |
| Totemic Projection | 1 (22) | New; moves totems, 60 s CD | 🟢 |
| Ghost Wolf, Reincarnation, Purge, utility | — | Unchanged | 🟢 |

## 🔍 To Verify

- [ ] **Missing rank rows** for Earth Shock R2/R4/R6, Flame Shock R2/R4/R5, Frost Shock R2/R3, Lesser Healing Wave R2–R5, Lightning Shield R1 and the learn levels of R2–R6, Flametongue Weapon R2–R5, plus Chain Heal mana — not in any research source; pull from [wago SpellEffect][wago-se] / [WCLBox][wcl].
- [ ] **Forever coefficients** for Frost Shock, Lesser Healing Wave, Chain Heal, Lightning Shield, Fire Nova and Healing Wave R5–R9 — not reported; read `EffectBonusCoefficient` from [wago SpellEffect][wago-se].
- [ ] **Chain Lightning base damage** (R4 119–133) — a much deeper cut than Lightning Bolt; possibly a data-reading error; needs level 32+ in-game ([WCLBox][wcl-cl]).
- [ ] **Chain Lightning jump falloff** in Forever — WCLBox prints "57.1%–51.7%"; Classic was −30% per jump ([WCLBox][wcl-cl]).
- [ ] **Flame Shock R1 direct damage**: DB2 base 20 vs WCLBox 24 — explain the gap ([wago SpellEffect][wago-se], [WCLBox][wcl-fs]).
- [ ] **Fire Nova damage by rank** — R1 53–62 vs 48–56, max rank 396–442 / 412 / 413–459; mana per rank unknown ([EndgameTools][egt], [ForeverChanges][fc]).
- [ ] **Lava Burst R1** 150–193 vs 150–192 — rounding? Test at level 40 ([wfts][wfts-lvb]).
- [ ] **Riptide R1** 484–535 / 486–534 / 485–533 — test at level 40 ([wfts][wfts], [WCLBox][wcl-rt]).
- [ ] **Totemic Recall** — mana cost, cooldown, and whether the Oct 1 fix really refunds 25% on 70170 ([forever-bugs #186][fb-186]).
- [ ] **Totemic Projection** exact mana cost per level (25% of base mana; 230 seen on stream) ([ForeverTome][ftome]).
- [ ] **Windfury Weapon ICD** in Forever (Classic Era: 1.5 s) — testable now at level 30 ([magey][magey-wf]).
- [ ] **Downranking penalty size** for Shaman spells (how far below your level a rank must be) — Blizzard gave no formula ([dev notes][blz-notes]).

## 📚 Sources

- [WCLBox WoW Forever DB][wcl] — 🟢 rank tables vs Classic (build 70009), all per-spell pages linked above
- [ForeverChanges spellbook][fc] — 🟢 diff of 70170 vs Classic Era 1.15.9.69722; trainer list, diff totals
- [Wowhead Forever][wh-lb10] — 🟢 spot checks (Lightning Bolt 15208, Chain Lightning 10605, Earth Shock 10414, Healing Wave 25357, Riptide 408521, Reincarnation 20608, Call of the Elements 66842)
- [wago.tools DB2 build 70170][wago-se] — 🟢 coefficients, base values, cast times, cooldowns, spell IDs ([Spell][wago-spell], [SpellMisc][wago-misc], [SpellCooldowns][wago-cd])
- [wago.tools DB2 Classic Era][wago-era] — 🟢 Classic coefficients and spell IDs
- [wowforevertalents.com][wfts] and [abilities][wfts-ab] — 🟢 talent-granted ranks, Ghost Wolf base cast, talent effects
- [wowforevertalent.com reference][wft] — 🟢 alternative Lava Burst / Riptide values
- [Blizzard Beta Development Notes][blz-notes] — 🔵 Lightning Bolt, Lava Burst, Riptide, Totemic Recall, Ghost Wolf changes; downranking
- [Blizzard Deep Dive recap][blz-dd] — 🔵 bonus healing → spell damage, caster weapons
- [guided.news][guided] — 🔵 relay of Blizzard's Totem Bar confirmation
- [ClassicWoWForever][cwf], [EndgameTools][egt], [ForeverTome][ftome], [WoWHandbook][whb-class], [GameSpot via Yahoo][gamespot], [Conquest Capped][cc], [wofwforever][wofw] — 🟡 guides and stream-sourced values; conflicts noted inline
- Blizzard forum threads [2353745][f-2353745], [2354160][f-2354160], [2364945][f-2364945], [2366147][f-2366147], [2366738][f-2366738], [2369180][f-2369180], [2369645][f-2369645] — 🟡 player tests
- [forever-bugs][fb] issues [#71][fb-71], [#79][fb-79], [#80][fb-80], [#186][fb-186] — 🟡 bug reports
- [Ozgar's Downranking Guide][ozgar], [magey Windfury Totem][magey-wf] — Classic coefficient rules and Windfury ICD

[wcl]: https://wowforever.wclbox.com/en/fashu/shaman
[wcl-lb]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-bolt
[wcl-cl]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-lightning
[wcl-lvb]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-lava-burst
[wcl-fn]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-fire-nova
[wcl-es]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-earth-shock
[wcl-fs]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-flame-shock
[wcl-frs]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-frost-shock
[wcl-hw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-healing-wave
[wcl-lhw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-lesser-healing-wave
[wcl-ch]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-heal
[wcl-rt]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-riptide
[wcl-ls]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-shield
[wcl-rb]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-rockbiter-weapon
[wcl-ftw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-flametongue-weapon
[wcl-fbw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-frostbrand-weapon
[wcl-wfw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-windfury-weapon
[wcl-tr]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-totemic-recall
[wcl-tp]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-totemic-projection
[wcl-gw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-ghost-wolf
[wcl-reinc]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-reincarnation
[fc]: https://foreverchanges.pro/spellbook/shaman
[wh-lb10]: https://www.wowhead.com/forever/spell=15208/lightning-bolt
[wh-cl4]: https://www.wowhead.com/forever/spell=10605/chain-lightning
[wh-es7]: https://www.wowhead.com/forever/spell=10414/earth-shock
[wh-hw10]: https://www.wowhead.com/forever/spell=25357/healing-wave
[wh-rt1]: https://www.wowhead.com/forever/spell=408521
[wh-reinc]: https://www.wowhead.com/forever/spell=20608/reincarnation
[wh-cote]: https://www.wowhead.com/forever/spell=66842/call-of-the-elements
[wh-cota]: https://www.wowhead.com/forever/spell=66843/call-of-the-ancestors
[wh-fs6]: https://www.wowhead.com/classic/spell=29228
[wh-frs4]: https://www.wowhead.com/classic/spell=10473
[wh-lhw6]: https://www.wowhead.com/classic/spell=10468
[wh-ch3]: https://www.wowhead.com/classic/spell=10623
[wh-ls7]: https://www.wowhead.com/classic/spell=10432
[wh-rb7]: https://www.wowhead.com/classic/spell=16316
[wh-ftw6]: https://www.wowhead.com/classic/spell=16342
[wh-fbw5]: https://www.wowhead.com/classic/spell=16356
[wh-wfw1]: https://www.wowhead.com/classic/spell=8232
[wh-wfw4]: https://www.wowhead.com/classic/spell=16362
[wago-se]: https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170
[wago-spell]: https://wago.tools/db2/Spell/csv?build=1.60.1.70170
[wago-misc]: https://wago.tools/db2/SpellMisc/csv?build=1.60.1.70170
[wago-cd]: https://wago.tools/db2/SpellCooldowns/csv?build=1.60.1.70170
[wago-era]: https://wago.tools/db2/SpellEffect?product=wow_classic_era
[wfts]: https://wowforevertalents.com/shaman/
[wfts-ab]: https://wowforevertalents.com/abilities/shaman/
[wfts-lvb]: https://wowforevertalents.com/shaman/talents/lava-burst/
[wft]: https://wowforevertalent.com/shaman/reference/
[blz-notes]: https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696
[blz-dd]: https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap
[guided]: https://guided.news/en/news/wow-forever-shaman-totem-systems-rogue-overhaul/
[cwf]: https://classicwowforever.com/class-changes/shaman/
[egt]: https://endgametools.com/en/blog/wow-forever-shaman
[ftome]: https://forevertome.com/guides/shaman
[whb-class]: https://wowhandbook.com/classes/shaman/
[gamespot]: https://tech.yahoo.com/gaming/articles/wow-forever-shaman-spells-class-153122479.html
[cc]: https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/
[wofw]: https://wofwforever.com/en/guides/wow-forever-spell-power-scaling/
[ozgar]: https://www.warcrafttavern.com/wow-classic/guides/ozgars-downranking-guide-tool/
[magey-wf]: https://github.com/magey/classic-warrior/wiki/Windfury-Totem
[f-2353745]: https://us.forums.blizzard.com/en/wow/t/2353745
[f-2354160]: https://us.forums.blizzard.com/en/wow/t/2354160
[f-2364945]: https://us.forums.blizzard.com/en/wow/t/2364945
[f-2366147]: https://us.forums.blizzard.com/en/wow/t/2366147
[f-2366738]: https://us.forums.blizzard.com/en/wow/t/2366738
[f-2369180]: https://us.forums.blizzard.com/en/wow/t/2369180
[f-2369645]: https://us.forums.blizzard.com/en/wow/t/2369645
[f-2361063]: https://us.forums.blizzard.com/en/wow/t/2361063
[fb-134]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/134
[fb]: https://github.com/ClassicWoWCommunity/forever-bugs
[fb-71]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/71
[fb-79]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/79
[fb-80]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/80
[fb-186]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/186
