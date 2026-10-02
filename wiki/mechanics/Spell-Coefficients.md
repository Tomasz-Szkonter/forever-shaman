---
title: Spell Coefficients
description: How much spell power each Shaman spell gets, with the Classic Era rules and DB2 values, WoW Forever's per-rank coefficients, the new downranking penalty, and how much spell power Forever needs to match Classic damage.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 📐 Spell Coefficients

A **spell coefficient** is the share of your spell power that a spell adds to its damage or healing. A 3.0 s Lightning Bolt with a coefficient of 0.857 adds 85.7 damage per 100 spell power. This page explains the Classic Era rules, lists the Classic and Forever values for every Shaman spell we have data for, and covers Forever's new downranking penalty.

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified. See [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

## 📑 Contents
- [How Coefficients Work](#-how-coefficients-work)
- [Classic Coefficients](#-classic-coefficients)
- [In Forever](#️-in-forever)
- [Spell Power Needed to Match Classic](#-spell-power-needed-to-match-classic)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

---

## 🧮 How Coefficients Work

```
Damage (or healing) = BaseValue + SpellPower × Coefficient
```

### Direct, periodic and hybrid spells

🟡 Classic rules from [Ozgar's Downranking Guide (Warcraft Tavern)][ozgar]:

| Spell type | Coefficient | Example |
|---|---|---|
| Direct damage or heal | `cast time / 3.5` | 3.0 s Lightning Bolt → 3.0 / 3.5 = **0.857** |
| DoT or HoT (damage or heal over time) | `duration / 15` | |
| Hybrid (direct + periodic) | the total is **split** between the two parts | Flame Shock |

- Instant spells count as 1.5 s for the direct formula, so `1.5 / 3.5 = 0.429` before any other adjustment.
- 🟢 In the client tables (`EffectBonusCoefficient` in DB2), the periodic coefficient is stored **per tick**. This was checked against Corruption (0.167 × 6 ticks = 1.0) and Immolate's DoT (0.13 × 5 = 0.65) ([wago.tools Classic Era SpellEffect][wago-era]).

### Sub-level-20 penalty

🟡 Spells learned **before level 20** get a reduced coefficient ([Ozgar][ozgar]):

```
Coefficient × (1 − (20 − SpellLevel) × 0.0375)
```

🟢 **Confirmed against Classic Era DB2** ([wago.tools][wago-era]): the formula reproduces the client values exactly.

| Spell | Learned at | Cast | Formula | Result | DB2 |
|---|---|---|---|---|---|
| Lightning Bolt R1 | 1 | 1.5 s | 0.4286 × 0.2875 | **0.123** | 0.123 |
| Lightning Bolt R2 | 8 | 2.0 s | 0.571 × 0.55 | **0.314** | 0.314 |
| Lightning Bolt R3 | 14 | 2.5 s | 0.714 × 0.775 | **0.554** | 0.554 |
| Healing Wave R4 | 18 | 3.0 s | 0.857 × 0.925 | **0.793** | 0.793 |
| Earth Shock R1 | 4 | instant | 0.386 × 0.40 | **0.154** | 0.154 |
| Flame Shock R1 | 10 | instant | 0.214 × 0.625 | **0.134** | 0.134 |

### Cast-time talents

- 🟢 Talents that shorten a cast (Improved Healing Wave, Lightning Mastery in Classic) **do not change the coefficient**. Healing Wave R10 stays at 0.857 even when cast in 2.5 s ([wago.tools][wago-era]).

### Downranking in Classic

- 🟡 **Classic has no level-based downranking penalty.** Apart from the sub-level-20 penalty, a low rank gets its full coefficient. The "+5/+6 levels" rule is a TBC rule ([Ozgar][ozgar]).
- 🔴 A 2007 forum list ([Lowyat][lowyat]) gives a "(max level + 4 or + 6) / player level" formula. That is TBC-era and wrong for Classic.

---

## 📜 Classic Coefficients

### Classic coefficient table

🟢 Max rank unless noted. All coefficients are **DB2 `EffectBonusCoefficient`** from the Classic Era client ([wago.tools SpellEffect][wago-era]). Spell IDs link to Wowhead Classic.

| Spell (ID) | Cast / cooldown | Coefficient | Notes |
|---|---|---|---|
| Lightning Bolt R10 ([15208][wh-c-15208]) | 3.0 s | **0.857** | R1–R3 have 1.5/2.0/2.5 s casts **and** the sub-20 penalty (0.123 / 0.314 / 0.554). R4+ (level 20+) = 0.857 |
| Chain Lightning R4 ([10605][wh-c-10605]) | 2.5 s / 6 s | **0.714** on the primary target | −30% per jump (ChainAmplitude 0.7), 3 targets: 100 / 70 / 49%. 🔴 The 2007 estimate was 0.357 ([Lowyat][lowyat]); DB2 and [Icy Veins][iv-ele-classic] ("about 71%") support 0.714 |
| Earth Shock R7 ([10414][wh-c-10414]) | instant / 6 s shared | **0.386** | 1.5/3.5 × 0.9. 🔴 [Warcraft Tavern tank guide][wt-tank] says 40.71% |
| Frost Shock R4 ([10473][wh-c-10473]) | instant / 6 s shared | **0.386** | same as Earth Shock |
| Flame Shock R6 ([29228][wh-c-29228]), direct | instant / 6 s shared | **0.214** | |
| Flame Shock R6, DoT | 4 ticks every 3 s, 12 s | **0.100 per tick (0.40 total)** | 🔴 The 2007 estimate was 0.171 total ([Lowyat][lowyat]); the DB2 per-tick reading matches Corruption and Immolate |
| Healing Wave R10 ([25357][wh-c-25357]) | 3.0 s (2.5 s with Improved Healing Wave) | **0.857** | |
| Lesser Healing Wave R6 ([10468][wh-c-10468]) | 1.5 s | **0.429** | |
| Chain Heal R3 ([10623][wh-c-10623]) | 2.5 s | **0.714** | Each jump heals 50% of the previous one (ChainAmplitude 0.5): 100 / 50 / 25%. 🔴 The 2007 estimate was 0.238; [Icy Veins Classic Resto][iv-resto-classic] says "roughly 71%" |
| Lightning Shield R7 ([10432][wh-c-10432]) | — | **0.267 per orb** | 3 orbs, 3.5 s internal cooldown between discharges. 🔴 Warcraft Tavern says 33% and "can't crit" |
| Searing Totem R6 bolt ([10436][wh-c-10436]) | 2.2 s cast | **0.083 per bolt** | Totem damage can crit; Elemental Fury applies |
| Magma Totem R4 pulse ([10581][wh-c-10581]) | every 2 s, 20 s | **0.033 per pulse** | |
| Fire Nova Totem R5 ([11307][wh-c-11307]) | 15 s cooldown | **0.143** | |
| Healing Stream Totem R5 ([10461][wh-c-10461]) | every 2 s, 60 s | **0.022 per tick** | |
| Frostbrand Weapon R5 proc ([16353][wh-c-16353]) | proc | **0.10** | |
| Flametongue Weapon R6 proc ([16344][wh-c-16344]) | per hit | **0 in DB2** | 🔴 The 2007 estimate was 10%. The 1.15 enchant row now points to 2024 Season of Discovery spells, so the DB2 value is unreliable |

**Caveat** 🟢: the 1.15.x Classic Era client is shared with Season of Discovery and the Anniversary realms, and some Shaman enchant rows point to 2024 spell IDs. The direct-damage and heal coefficients reproduce the classic formulas exactly (including the sub-20 penalty), which is strong evidence that they are faithful to 1.12 ([wago.tools][wago-era]).

---

## ♾️ In Forever

### Forever coefficient table

Forever lowers most base values and **raises low-rank coefficients**. Max-rank coefficients mostly fell because the casts got shorter. Classic values are struck through.

| Spell | Cast (Forever) | Coefficient | Conf. | Source |
|---|---|---|---|---|
| Lightning Bolt R1 | 1.5 s | ~~12.3%~~ → **42.9%** | 🟢 | [WCLBox LB][wcl-lb] |
| Lightning Bolt R2 | 2.0 s | ~~31.4%~~ → **57.1%** | 🟢 | [WCLBox LB][wcl-lb] |
| Lightning Bolt R3 | 2.5 s | ~~55.4%~~ → **71.4%** | 🟢 | [WCLBox LB][wcl-lb] |
| Lightning Bolt R4–R10 | ~~3.0 s~~ → **2.5 s** | ~~85.7%~~ → **71.4%** | 🟢 | [WCLBox LB][wcl-lb]; R10 "SP mod 0.714" on [Wowhead 15208][wh-f-15208]; DB2 [wago 70170][wago-70170] |
| Chain Lightning R1–R4 | ~~2.5 s~~ → **2.0 s** | ~~71.4%~~ → **57.1%** (WCLBox prints "57.1%–51.7%") | 🟢 | [WCLBox CL][wcl-cl]; R4 "SP mod 0.571" on [Wowhead 10605][wh-f-10605]; DB2 [wago][wago-70170] |
| [Lava Burst](../talents/Elemental-Talents.md#lava-burst) (all ranks) | 2.5 s | **71.4%** | 🟢🟡 | DB2 [wago 70170][wago-70170]; [Conquest Capped][cc] |
| Earth Shock R1 | instant | ~~15.4%~~ → **38.6%** | 🟢 | [WCLBox ES][wcl-es] |
| Earth Shock R7 | instant | 38.6% (unchanged) | 🟢 | "SP mod 0.386" on [Wowhead 10414][wh-f-10414] |
| Flame Shock R1 | instant | direct ~~13.4%~~ → **21.4%**; DoT **10% per tick** (4 ticks over 12 s = 40%) | 🟢 | DB2 [wago 70170][wago-70170] (spell 8050) |
| Frost Shock | instant | **not published** | 🔴 | — |
| Healing Wave R1 / R2 / R3 / R4 | 1.5 / 2.0 / 2.5 / 3.0 s | ~~12.3 / 27.1 / 50 / 79.3%~~ → **42.9 / 57.1 / 71.4 / 85.7%** | 🟢 | [WCLBox HW][wcl-hw] |
| Healing Wave R10 | 3.0 s | 85.7% (unchanged) | 🟢 | "SP mod 0.857" on [Wowhead 25357][wh-f-25357] |
| [Riptide](../talents/Restoration-Talents.md#riptide) R1 | instant | direct **21.4%**; HoT **10% per tick** (5 ticks over 15 s = **50%** total) | 🟢 | DB2 [wago 70170][wago-70170] (spell 408521); [Wowhead 408521][wh-f-408521] |
| Lesser Healing Wave, Chain Heal, Lightning Shield, totems, Frostbrand | — | **not published** | 🔴 | — |
| Flametongue Weapon | per hit | **scales with spell power**; coefficient unknown | 🟡 | [forever-bugs #80][bug-80] |

Notes:
- **Why max ranks fell.** The coefficients still follow `cast time / 3.5`: Lightning Bolt's cast went 3.0 → 2.5 s (2.5 / 3.5 = 0.714) and Chain Lightning's 2.5 → 2.0 s (2.0 / 3.5 = 0.571). The total spell power per second of casting is about the same; each cast just gets less.
- 🟢 **Flametongue Weapon:** the tooltip did not update with spell power until a fix, but the damage did scale (shown with a 2.8 speed weapon at 0 vs 26 SP) ([forever-bugs #80][bug-80]). In 70170 the tooltip gained a flat term from the Flametongue Attack spell ([wago Spell 70170][wago-spell]).
- 🟡 [Icy Veins][iv-ele] notes that Lava Burst's base damage loses importance as spell power from gear rises.
- 🟢 **Lightning Overload** copies deal **half damage** ([wfts][wfts]). Whether that halves the spell power part too is not documented.

### Sub-level-20 penalty appears removed

Derived from the 🟢 values above: every low-rank Forever coefficient equals the plain formula **with no sub-20 penalty**.

| Spell | Plain formula | Forever | Classic (with penalty) |
|---|---|---|---|
| Lightning Bolt R1 | 1.5 / 3.5 = 0.429 | 0.429 | 0.123 |
| Lightning Bolt R2 | 2.0 / 3.5 = 0.571 | 0.571 | 0.314 |
| Healing Wave R3 | 2.5 / 3.5 = 0.714 | 0.714 | 0.500 |
| Earth Shock R1 | 1.5 / 3.5 × 0.9 = 0.386 | 0.386 | 0.154 |
| Flame Shock R1 direct | 0.214 | 0.214 | 0.134 |

So low-level spells hit much harder per point of spell power in Forever. Blizzard has instead added a **level-based** penalty for using low ranks (next section).

### Riptide HoT: DB2 vs Conquest Capped

- 🟡 [Conquest Capped][cc] gives Riptide **21.4%** for the direct heal and **50%** for the HoT.
- 🟢 DB2 shows **21.4%** direct and **10% per tick** on a HoT that ticks every 3 s for 15 s ([wago 70170][wago-70170]; [Wowhead 408521][wh-f-408521]).
- **These agree** if Conquest Capped's 50% is the **total** HoT coefficient: 5 ticks × 10% = 50%. We treat Riptide as **21.4% direct + 50% HoT total**.

### Downranking penalty

- 🔵 Oct 1 notes: "spells cast using spell ranks **vastly below your current level** receive **less benefit from your Spell Damage and Spell Healing** and have a **reduced chance to activate your Class abilities and Talents**." Blizzard's example: "Using a Rank 1 Frostbolt at level 60 will result in a 0% chance to get a Frostbite activation" ([Blizzard dev notes][blz-notes]).
- This is new: Classic had no such penalty (see [Downranking in Classic](#downranking-in-classic)).
- 🔴 **Not published:** how far below your level counts as "vastly", the formula for the spell power reduction, and which Shaman talents count as "activations". Downranked Healing Wave, Chain Heal and Lightning Bolt are the obvious candidates, but Blizzard named no Shaman spells.
- 🟡 Spells are still learned in ranks, and you can still pick a lower rank from the spellbook dropdown ([player discussion][f-2352785]).

---

## 🔢 Spell Power Needed to Match Classic

Forever has much lower base damage, so you need a lot of spell power to catch up with Classic numbers. 🔴 One player post called this "a general cut to spell base damage". [wofwforever][wofw] notes that this is a **player claim**, not a Blizzard statement.

### Community estimates

🟡 Arithmetic from tooltips, not measured in game:

- About **700 SP** for a Forever Lightning Bolt to match a Classic Lightning Bolt cast with **300 SP** ([thread 2353745][f-2353745]).
- About **350 SP** to reach a Classic Lightning Bolt with **no** spell power ([thread 2360727][f-2360727]).
- "**700+ SP** for Chain Lightning base value, **500+** for LB/ES/FrS" and Elemental overall needing **700+ SP** to match Classic baseline damage ([thread 2365290, "Please fix shamans"][f-2365290]).

### Checking the math

Derived from the max-rank 🟢 values on this page and [Spells and Ranks](../reference/Spells-and-Ranks.md). Average damage = midpoint of the tooltip range. No talents, no crits.

| Spell (max rank) | Classic avg / coef | Forever avg / coef | Forever SP to match Classic at 0 SP | Forever SP to match Classic at 300 SP |
|---|---|---|---|---|
| Lightning Bolt R10 | 452.5 / 0.857 | 200.5 / 0.714 | (452.5 − 200.5) / 0.714 ≈ **353** | (452.5 + 257 − 200.5) / 0.714 ≈ **713** |
| Chain Lightning R4 (primary target) | 534.5 / 0.714 | 126 / 0.571 | ≈ **715** | ≈ **1,090** |
| Earth Shock R7 | 531 / 0.386 | 301 / 0.386 | ≈ **596** | ≈ **896** |

- The Lightning Bolt figures reproduce the community's **350** and **700**, and Chain Lightning (≈715) matches "700+". Earth Shock (≈596) fits "500+", but Lightning Bolt (≈353) does **not**, so the "500+ for LB" claim conflicts with the "350 for LB" claim. The table supports 350.
- Average damage uses the tooltip midpoints: Classic LB R10 428–477, CL R4 505–564, ES R7 517–545; Forever LB R10 190–211, CL R4 119–133, ES R7 293–309 ([WCLBox][wcl-lb]).
- **Per cast, not per second.** Untalented, Forever's Lightning Bolt casts in 2.5 s vs Classic's 3.0 s, so the per-second gap is smaller than the table shows. Fully talented, both are **2.0 s**: Classic *Lightning Mastery* 5/5 took off 1.0 s, and Forever [Elemental Alacrity](../talents/Elemental-Talents.md#elemental-alacrity) 3/3 takes off 0.5 s from a 2.5 s base (🟢 [wfts][wfts]).
- Forever spells also cost less mana (Lightning Bolt R10 ~~265~~ → **220**) ([WCLBox LB][wcl-lb]).
- 🔴 Chain Lightning's base-damage cut (about −76% at R4) is much deeper than Lightning Bolt's (about −56%). It could be a deliberate redesign or a data-reading error, so treat the Chain Lightning row with care.

---

## 📋 Quick Reference

| Spell | Classic coef | Forever coef | Conf. (Forever) |
|---|---|---|---|
| Lightning Bolt R1 / R2 / R3 | 0.123 / 0.314 / 0.554 | **0.429 / 0.571 / 0.714** | 🟢 |
| Lightning Bolt R4+ | 0.857 (3.0 s) | **0.714** (2.5 s) | 🟢 |
| Chain Lightning | 0.714 (2.5 s), −30% per jump | **0.571** (2.0 s), jump falloff not published | 🟢 |
| Lava Burst | — | **0.714** | 🟢🟡 |
| Earth Shock R1 / R7 | 0.154 / 0.386 | **0.386 / 0.386** | 🟢 |
| Frost Shock | 0.386 | not published | 🔴 |
| Flame Shock R1 | 0.134 direct | **0.214 direct + 0.10 per tick** | 🟢 |
| Healing Wave R1–R4 | 0.123 / 0.271 / 0.500 / 0.793 | **0.429 / 0.571 / 0.714 / 0.857** | 🟢 |
| Healing Wave R10 | 0.857 | 0.857 | 🟢 |
| Riptide | — | **0.214 direct + 0.50 HoT total** | 🟢 (🟡 CC agrees) |
| Sub-level-20 penalty | yes | **appears removed** (derived) | 🟢 |
| Downranking penalty | none | **yes**: less SP and fewer talent procs | 🔵 |
| Healing gear → spell damage | none | **1/3** of bonus healing | 🔵 |

---

## 🔍 To Verify

- [ ] **Downranking penalty formula.** How many levels below you does it start, how big is the cut, and is it visible in client data or server-side only? Test: cast Lightning Bolt R1 and R3 at level 30 with and without +spell power gear ([dev notes][blz-notes]).
- [ ] **Which Shaman procs the downranking penalty reduces**: e.g. Elemental Focus, Lightning Overload, Ancestral Healing. Blizzard only gave a Mage example ([dev notes][blz-notes]).
- [ ] **Chain Lightning jump falloff** in Forever (Classic −30% per jump) and what WCLBox's "57.1%–51.7%" range means ([WCLBox CL][wcl-cl]).
- [ ] **Chain Lightning base damage** (R4 119–133): deliberate or a data error? Needs a live check above level 32 ([WCLBox CL][wcl-cl]).
- [ ] **Missing Forever coefficients**: Frost Shock, Lesser Healing Wave, Chain Heal, Lightning Shield, Searing/Magma Totems, Healing Stream Totem, Fire Nova, Frostbrand, Flametongue Weapon. Pull from [wago 70170][wago-70170].
- [ ] **Lightning Overload**: does the half-damage copy also get half the spell power? ([wfts][wfts])
- [ ] **Sub-level-20 penalty removal**: derived from DB2 values; confirm in game by comparing Lightning Bolt R1 damage with and without spell power gear.
- [ ] **Classic disputes** kept for completeness: Flame Shock DoT 0.40 vs 0.171, Chain Lightning 0.714 vs 0.357, Chain Heal 0.714 vs 0.238, Flametongue Weapon 0 vs 10% ([Lowyat][lowyat]; [wago.tools][wago-era]). DB2 looks right, but there is no logged Classic test.

---

## 📚 Sources

- [Ozgar's Downranking Guide (Warcraft Tavern)][ozgar]: coefficient rules, sub-20 penalty, no Classic downranking penalty
- [wago.tools SpellEffect, Classic Era][wago-era]: Classic DB2 coefficients and the sub-20 confirmations
- [wago.tools SpellEffect, build 70170][wago-70170] and [Spell, build 70170][wago-spell]: Forever coefficients (Lightning Bolt, Chain Lightning, Lava Burst, Flame Shock, Riptide), Flametongue tooltip
- Wowhead Classic: [15208][wh-c-15208], [10605][wh-c-10605], [10414][wh-c-10414], [10473][wh-c-10473], [29228][wh-c-29228], [25357][wh-c-25357], [10468][wh-c-10468], [10623][wh-c-10623], [10432][wh-c-10432], [10436][wh-c-10436], [10581][wh-c-10581], [11307][wh-c-11307], [10461][wh-c-10461], [16353][wh-c-16353], [16344][wh-c-16344]
- Wowhead Forever: [Lightning Bolt 15208][wh-f-15208], [Chain Lightning 10605][wh-f-10605], [Earth Shock 10414][wh-f-10414], [Healing Wave 25357][wh-f-25357], [Riptide 408521][wh-f-408521]
- WCLBox: [Lightning Bolt][wcl-lb], [Chain Lightning][wcl-cl], [Earth Shock][wcl-es], [Healing Wave][wcl-hw]: Forever per-rank coefficients and base values
- [Conquest Capped: Shaman talents][cc]: Lava Burst and Riptide coefficients
- [wowforevertalents.com][wfts]: Elemental Alacrity, Lightning Overload
- [Blizzard: Beta Development Notes][blz-notes]: downranking penalty (Oct 1)
- [forever-bugs #80][bug-80]: Flametongue Weapon spell power scaling
- [wofwforever: spell power scaling][wofw]: official vs player claims
- Blizzard forum threads [2353745][f-2353745], [2360727][f-2360727], [2365290][f-2365290] ("Please fix shamans"), [2352785][f-2352785] (downranking discussion)
- [Icy Veins Classic Elemental][iv-ele-classic], [Classic Restoration][iv-resto-classic], [Forever Elemental][iv-ele]: coefficient cross-checks
- [Warcraft Tavern Classic Shaman tanking][wt-tank]: disputed Earth Shock value
- [Lowyat forum coefficient list (2007)][lowyat]: superseded estimates, kept to document disputes

[ozgar]: https://www.warcrafttavern.com/wow-classic/guides/ozgars-downranking-guide-tool/
[wago-era]: https://wago.tools/db2/SpellEffect?product=wow_classic_era
[wago-70170]: https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170
[wago-spell]: https://wago.tools/db2/Spell/csv?build=1.60.1.70170
[wh-c-15208]: https://www.wowhead.com/classic/spell=15208
[wh-c-10605]: https://www.wowhead.com/classic/spell=10605
[wh-c-10414]: https://www.wowhead.com/classic/spell=10414
[wh-c-10473]: https://www.wowhead.com/classic/spell=10473
[wh-c-29228]: https://www.wowhead.com/classic/spell=29228
[wh-c-25357]: https://www.wowhead.com/classic/spell=25357
[wh-c-10468]: https://www.wowhead.com/classic/spell=10468
[wh-c-10623]: https://www.wowhead.com/classic/spell=10623
[wh-c-10432]: https://www.wowhead.com/classic/spell=10432
[wh-c-10436]: https://www.wowhead.com/classic/spell=10436
[wh-c-10581]: https://www.wowhead.com/classic/spell=10581
[wh-c-11307]: https://www.wowhead.com/classic/spell=11307
[wh-c-10461]: https://www.wowhead.com/classic/spell=10461
[wh-c-16353]: https://www.wowhead.com/classic/spell=16353
[wh-c-16344]: https://www.wowhead.com/classic/spell=16344
[wh-f-15208]: https://www.wowhead.com/forever/spell=15208/lightning-bolt
[wh-f-10605]: https://www.wowhead.com/forever/spell=10605/chain-lightning
[wh-f-10414]: https://www.wowhead.com/forever/spell=10414/earth-shock
[wh-f-25357]: https://www.wowhead.com/forever/spell=25357/healing-wave
[wh-f-408521]: https://www.wowhead.com/forever/spell=408521
[wcl-lb]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-bolt
[wcl-cl]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-lightning
[wcl-es]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-earth-shock
[wcl-hw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-healing-wave
[cc]: https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/
[wfts]: https://wowforevertalents.com/shaman/
[blz-notes]: https://us.forums.blizzard.com/en/wow/t/2360696
[bug-80]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/80
[wofw]: https://wofwforever.com/en/guides/wow-forever-spell-power-scaling/
[f-2353745]: https://us.forums.blizzard.com/en/wow/t/2353745
[f-2360727]: https://us.forums.blizzard.com/en/wow/t/2360727
[f-2365290]: https://us.forums.blizzard.com/en/wow/t/please-fix-shamans/2365290
[f-2352785]: https://us.forums.blizzard.com/en/wow/t/2352785
[iv-ele-classic]: https://www.icy-veins.com/wow-classic/elemental-shaman-dps-pve-stat-priority
[iv-resto-classic]: https://icy-veins.com/wow-classic/restoration-shaman-healer-pve-stat-priority
[iv-ele]: https://www.icy-veins.com/wow-forever/elemental-shaman-ranged-dps-pve-guide
[wt-tank]: https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/
[lowyat]: https://forum.lowyat.net/topic/405783
