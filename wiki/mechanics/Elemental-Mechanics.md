---
title: Elemental Mechanics
description: How Lightning Bolt, Chain Lightning, Lava Burst, Lightning Overload, Clearcasting and the Elemental crit talents work in Classic Era and WoW Forever.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🌩 Elemental Mechanics

This page explains the Elemental Shaman's core spells and talents: what they do, how they interact, and what testers have found. It gives headline numbers only. Full rank tables are on [Spells and Ranks](../reference/Spells-and-Ranks.md) and talent per-rank data is on [Elemental Talents](../talents/Elemental-Talents.md). Shocks have their own page: [Shock Mechanics](Shock-Mechanics.md).

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified, see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

> ⚠ **Beta cap is level 30.** Chain Lightning (L32) and Lava Burst ranks (L40+) have **not been tested at their trainer ranks**. Lava Burst is a 31-point talent (row 7 needs 30 points spent), more than the 21 points (26 with the Legacy "Talented" perk) available at level 30, so treat tester reports on it with care.

## 📑 Contents
- [Big Picture: the Forever Rescale](#-big-picture-the-forever-rescale)
- [Spells](#-spells)
  - [Lightning Bolt](#lightning-bolt)
  - [Chain Lightning](#chain-lightning)
  - [Lava Burst](#lava-burst)
- [Procs and Talents](#-procs-and-talents)
  - [Lightning Overload](#lightning-overload)
  - [Clearcasting (Elemental Focus)](#clearcasting-elemental-focus)
  - [Elemental Fury](#elemental-fury)
  - [Elemental Mastery (removed)](#elemental-mastery-removed)
  - [Eye of the Storm](#eye-of-the-storm)
  - [Call of Thunder](#call-of-thunder)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

---

## 📉 Big Picture: the Forever Rescale

- 🟢 Forever caster spells have **much lower base damage** but **higher spell-power coefficients at low ranks**. The coefficient is the share of your spell damage added to each cast: a 71.4% coefficient adds 0.714 damage per point of spell damage ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-bolt)).
- 🟢 Lightning Bolt and Chain Lightning got **faster casts** (LB 3.0 → 2.5 s from rank 4; CL 2.5 → 2.0 s) and **cheaper mana**, but **lower coefficients at max rank**.
- 🔵 Bonus healing now also gives **1/3 as much bonus damage**, and caster weapons now carry spell power ([Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)).
- 🔵 Hit and crit are **unified** across spells, melee and ranged ([Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)).
- 🔵 **Downranking penalty:** ranks "vastly below your current level" get less spell power and a reduced chance to activate talents (Oct 1, [dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)). This hits Lightning Overload and Clearcasting procs on low-rank bolts.
- 🟡 Community arithmetic: about **700 spell power** is needed for a Forever Lightning Bolt to match a Classic one at 300 SP. That is from tooltips, not measured ([thread 2353745](https://us.forums.blizzard.com/en/wow/t/2353745)). One sim ranks Elemental last of 23 specs at its reference gear ([mythicsim](https://mythicsim.com/wow-forever/shaman)), which it says is still being checked.
- See [Spell Coefficients](Spell-Coefficients.md) and [Forever System Changes](../forever/Forever-System-Changes.md).

---

## 🔮 Spells

### Lightning Bolt

**Classic baseline**
- 🟢 R10: **428–477** Nature damage, **3.0 s** cast, 265 mana, coefficient **0.857** ([WH 15208](https://www.wowhead.com/classic/spell=15208)).
- 🟢 R1–R3 have 1.5 / 2.0 / 2.5 s casts and the **sub-level-20 penalty** (0.123 / 0.314 / 0.554). R4 and up use 0.857 (DB2, see [Spell Coefficients](Spell-Coefficients.md)).
- 🟢 **Lightning Mastery** (5 ranks) cut the cast by up to 1.0 s, to 2.0 s ([Icy Veins](https://www.icy-veins.com/wow-forever/shaman-class-overview)).

**In Forever**
- 🟢 Cast ~~3.0 s~~ → **2.5 s** from rank 4. R10: ~~428–477~~ → **190–211**, ~~265~~ → **220 mana**, coefficient ~~0.857~~ → **0.714** ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-bolt); [Wowhead R10](https://www.wowhead.com/forever/spell=15208/lightning-bolt)).
- 🟢 Low ranks scale much better: R1 ~~12.3%~~ → **42.9%**, R2 ~~31.4%~~ → **57.1%**, R3 ~~55.4%~~ → **71.4%**.
- 🔵 Sept 24: "Damage on ranks 3 and 4 increased to make these spells always upgrades over previous ranks" ([dev notes](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696)). DB2 base R3 35 → 45, R4 50 → 56 🟢.
- 🟢 **Elemental Alacrity** (renamed Lightning Mastery, now row 3): −0.17 / 0.33 / **0.50 s** on LB, CL and Lava Burst. At 3/3, LB is a **2.0 s** cast, the same end point as Classic. 🟡 Testers put it as "0.5 s baked into the spell" ([thread 2362045](https://us.forums.blizzard.com/en/wow/t/2362045)).
- 🟢 Other Forever links: **Stormstrike** buffs your next LB by 20%; **Maelstrom Weapon** cuts LB cast time and cost (see [Enhancement Mechanics](Enhancement-Mechanics.md#maelstrom-weapon)); relics Windcarved Effigy (−5 mana) and Totem of the Storm ([WoWHandbook](https://wowhandbook.com/gear/relics/)).

### Chain Lightning

**Classic baseline**
- 🟢 R4: **505–564**, 2.5 s cast, **6 s cooldown** (category 85, separate from shocks), 3 targets, coefficient **0.714** on the primary target ([WH 10605](https://www.wowhead.com/classic/spell=10605); DB2).
- 🟢 **Bounce falloff:** `ChainAmplitude 0.7`, so each jump does 70% of the previous: **100% / 70% / 49%** (DB2).
- 🟡 An old 2007 forum estimate said 0.357; DB2 and [Icy Veins Classic](https://www.icy-veins.com/wow-classic/elemental-shaman-dps-pve-stat-priority) ("about 71%") support 0.714.

**In Forever**
- 🟢 Cast ~~2.5~~ → **2.0 s**, mana ~~605~~ → **485** (R4). Still 6 s cooldown, 30 yd, 3 targets ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-lightning); [Wowhead](https://www.wowhead.com/forever/spell=10605/chain-lightning)).
- 🟢 Coefficient ~~71.4%~~ → **57.1%** (WCLBox prints "57.1%–51.7%"). DB2 R4 base 123 ([wago](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170)).
- ⚠ 🟢 **Damage cut much deeper than Lightning Bolt:** R4 ~~505–564~~ → **119–133** (about −76%, vs about −56% for LB R10). This could be a deliberate redesign or a data-reading problem. **Needs an in-game check** (CL is L32, above the cap).
- Forever's bounce falloff isn't documented in any source.
- 🟡 Maelstrom Weapon **doesn't** affect Chain Lightning, so "CL is going to be full cost always" ([thread 2354160](https://us.forums.blizzard.com/en/wow/t/2354160)).

### Lava Burst

**New in Forever** (Elemental 31-point talent, row 7; requires Lightning Overload 3/3).

- 🟢 **2.5 s** cast, **10 s** cooldown, **30 yd**, Fire damage. **+20% damage if your Flame Shock is on the target.** There is **no guaranteed crit** ([wowforevertalents.com](https://wowforevertalents.com/shaman/talents/lava-burst/); [wago Spell](https://wago.tools/db2/Spell/csv?build=1.60.1.70170)).
- 🟢 Coefficient **71.4%** (DB2, spells 408490 / 1238299 / 1238300) ([wago](https://wago.tools/db2/Spell/csv?build=1.60.1.70170)); 🟡 Conquest Capped gives the same ([CC](https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/)).
- 🟢 Ranks (talent teaches R1; R2 at L50, R3 at L60): mana 165 / 230 / 265.

| Rank | wowforevertalents.com | WCLBox / wowforevertalent.com | Other |
|---|---|---|---|
| R1 (talent) | **150–193** | 150–192 | 143–185 ([EndgameTools](https://endgametools.com/en/blog/wow-forever-shaman), likely pre-Sept 24) |
| R2 (L50) | 179–231 | 180–230 | — |
| R3 (L60) | 192–248 | 192–248 | — |

- 🔵 Sept 24: R1 and R2 raised to "about 10% more base damage than the Lightning Bolt rank learned around the same level". DB2 base R1 113 → 164, R2 179 → 196 🟢 ([dev notes](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696)).
- **What affects Lava Burst** (talent text 🟢 / tester reports 🟡):

| Effect | Applies? | Conf. |
|---|---|---|
| Convection (−10% mana) | yes (named in text) | 🟢 |
| Elemental Alacrity (−0.5 s cast) | yes (named in text) | 🟢 |
| Eye of the Storm (pushback) | yes (named in text) | 🟢 |
| Elemental Reach (+6 yd) | yes (named in text) | 🟢 |
| Call of Flame | **yes, +15%** | 🟢 text; 🟡 tested |
| Elemental Fury | text covers "Fire spells" | 🟢 (not tested) |
| Call of Thunder | **no** (tooltip: LB/CL only) | 🟢 tooltip; [thread 2353745](https://us.forums.blizzard.com/en/wow/t/2353745) |
| Concussion | **no** | 🟡 same |
| Lightning Overload | **no** (tooltip: LB/CL only) | 🟢 tooltip; [thread 2356600](https://us.forums.blizzard.com/en/wow/t/2356600) |

- 🔴 One forum poster counts **35% total** with Flame Shock up (20% + 15% Call of Flame), i.e. additive ([thread 2353745](https://us.forums.blizzard.com/en/wow/t/2353745)). ⚠ Not an in-game test: Lava Burst is a 31-point talent and out of reach at the beta cap, so this is a tooltip reading. Whether the bonuses add or multiply is unknown.
- 🟢 Set bonus: *The Spiritcaller's Storm* 5-pc, **Lava Burst cooldown −1 s** ([wow.gg](https://wow.gg/guides/wow-forever-tier-set-bonuses)).

---

## ✨ Procs and Talents

### Lightning Overload

- 🟢 **New** (Elemental row 5, 3 ranks): Lightning Bolt and Chain Lightning have a **3 / 7 / 10%** chance to cast a **second copy** on the same target. The copy is free, deals **half damage** and generates **no threat** ([wowforevertalent.com](https://wowforevertalent.com/shaman/reference/); [wowforevertalents.com](https://wowforevertalents.com/shaman/)). BlizzCon build: 3/6/9%.
- 🟡 Doesn't work on Lava Burst ([thread 2356600](https://us.forums.blizzard.com/en/wow/t/2356600)).
- 🔴 Icy Veins says it affects "your Nature spells". The client says LB and CL only ([Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview)).
- 🔵 Downranked bolts have a reduced proc chance (see above).

### Clearcasting (Elemental Focus)

- 🟢 **Classic and Forever (unchanged):** 10% chance after a Fire, Frost or Nature damage spell that your **next damage spell costs no mana**. Clearcasting lasts 15 s, 1 charge ([WH 16164](https://www.wowhead.com/classic/spell=16164); [wowforevertalent.com](https://wowforevertalent.com/shaman/reference/)).
- 🟡 In Classic a free cast **doesn't reset the 5-second rule**, the 5 s pause in Spirit regen after you spend mana ([Warcraft Tavern mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/)). Forever behaviour not tested. See [Mana Regeneration](Mana-Regeneration.md).
- 🔵 Downranked spells have a reduced chance to trigger it.

### Elemental Fury

**Classic baseline**
- 🟢 1 rank: crit damage bonus of Searing, Magma and Fire Nova Totems and Fire / Frost / Nature spells **+100%**, so damage crits deal **200%** instead of 150%. Heals stay at 150% ([WH 16089](https://www.wowhead.com/classic/spell=16089)).

**In Forever**
- 🟢 **5 ranks, +20 / 40 / 60 / 80 / 100%**: 5/5 still gives 200% crits. It covers Searing and Magma Totems and Fire / Frost / Nature spells ([wowforevertalents.com](https://wowforevertalents.com/shaman/talents/elemental-fury/)).
- 🔵 Moved to **row 6** (25 points), requiring Call of Thunder 1/1. It swapped rows with Elemental Alacrity on Sept 24 ([dev notes](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696)). Guides written before Sept 24 show it in row 3.
- 🟡 wowforevertalent.com's FAQ says "20% instead of 100%". That's **per rank**; 5/5 is still 100%.
- 🟡 **PvP:** players found that crit bonuses are **halved against players** (spell crits about 125% instead of 150%) ([Icy Veins snippet](https://www.icy-veins.com/wow-forever/news/players-found-a-hidden-pvp-rule-in-wow-forever-that-halves-crit-bonuses/)). How this combines with Elemental Fury is unknown.

### Elemental Mastery (removed)

- 🟢 **Classic:** active talent. Your next Fire / Frost / Nature damage spell is a guaranteed crit and costs no mana; 3 min cooldown ([WH 16166](https://www.wowhead.com/classic/spell=16166)).
- 🟢 **Forever: gone.** It isn't a talent and isn't in the spellbook. No source names a replacement ([wowforevertalents.com](https://wowforevertalents.com/shaman/)). 🟡 Players list it among their complaints ([forum](https://us.forums.blizzard.com/en/wow/t/please-fix-shamans/2365290)).

### Eye of the Storm

- 🟢 **Classic:** 33 / 66 / 100% chance, when you're crit, to gain Focused Casting (no pushback) for 6 s.
- 🟢 **Forever (reworked):** pushback on Lightning Bolt, Chain Lightning and Lava Burst **−23 / 47 / 70%**, always on ([wowforevertalents.com](https://wowforevertalents.com/shaman/)). Pushback is the cast-time delay you suffer when hit while casting.

### Call of Thunder

- 🟢 **Classic:** 5 ranks, up to **+6%** crit on Lightning Bolt and Chain Lightning ([wowisclassic talent calc](https://www.wowisclassic.com/en/talent-calculator/shaman/)).
- **Forever:** 1 rank in **row 4**, requires **Elemental Alacrity 3/3**, and opens Elemental Fury.
  - 🔴 **Value disputed.** wowforevertalent.com shows **+3% LB / CL crit** ([wft](https://wowforevertalent.com/shaman/reference/)), but wowforevertalents.com reports the client tooltip is **blank** in 70170. The "+3%" came from the BlizzCon transcription ([wfts](https://wowforevertalents.com/shaman/talents/call-of-thunder/)). The effect may exist server-side.
  - 🟡 Doesn't affect Lava Burst ([thread 2353745](https://us.forums.blizzard.com/en/wow/t/2353745)).
- 🟡 **Crit from talents shrank:** testers count 3% (Call of Thunder) + 5% (Thundering Strikes, Enhancement tree) = 8%, vs 11% in Classic (Call of Thunder 6% + Tidal Mastery 5%) ([thread 2362045](https://us.forums.blizzard.com/en/wow/t/2362045)). In Forever, **Tidal Mastery no longer affects lightning** and **Thundering Strikes now affects spells** 🟢.

---

## 📋 Quick Reference

| Mechanic | Classic Era | Forever | Conf. |
|---|---|---|---|
| Lightning Bolt R10 | 428–477, 3.0 s, 265 mana, 0.857 | **190–211**, **2.5 s**, 220 mana, **0.714** | 🟢 |
| LB low-rank coefficient | 12.3 / 31.4 / 55.4% | **42.9 / 57.1 / 71.4%** | 🟢 |
| Cast-time talent | Lightning Mastery −1.0 s (5 ranks) | Elemental Alacrity −0.5 s (3 ranks) | 🟢 |
| Chain Lightning R4 | 505–564, 2.5 s, 0.714, 70% per jump | **119–133**, **2.0 s**, **0.571**, falloff unknown | 🟢 ⚠ |
| Lava Burst | — | 31-pt talent, 2.5 s, 10 s CD, R1 150–193, +20% with Flame Shock, 0.714 | 🟢 / 🔵 |
| Lightning Overload | — | 3/7/10%, half damage, LB/CL only | 🟢 |
| Clearcasting | 10%, next damage spell free | unchanged | 🟢 |
| Elemental Fury | 1 rank, crits 200% | 5 ranks (20% each), row 6 | 🟢 / 🔵 |
| Elemental Mastery | guaranteed crit + free, 3 min | **removed** | 🟢 |
| Eye of the Storm | Focused Casting on being crit | −70% pushback (LB/CL/LvB) | 🟢 |
| Call of Thunder | +6% LB/CL crit (5 ranks) | 1 rank, +3% **disputed (blank tooltip)** | 🔴 |
| Downranking | no penalty | less SP and fewer procs on low ranks | 🔵 |

---

## 🔍 To Verify

- [ ] **Call of Thunder** actually grants +3% crit despite the blank tooltip. Compare crit rates with and without ([wfts](https://wowforevertalents.com/shaman/talents/call-of-thunder/)).
- [ ] **Chain Lightning damage** (R4 119–133) in game, once L32+ is open ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-lightning)).
- [ ] **Chain Lightning bounce falloff** in Forever. Classic was 0.7 per jump; no Forever source ([DB2 Classic](https://wago.tools/db2/SpellEffect?product=wow_classic_era)).
- [ ] **Lava Burst R1 value** (150–193 vs 150–192). Likely rounding ([wfts](https://wowforevertalents.com/shaman/talents/lava-burst/)).
- [ ] **Lava Burst exclusions** (no Call of Thunder, Concussion, Lightning Overload). Matches the tooltips, but not testable until level 40; single forum source ([thread 2353745](https://us.forums.blizzard.com/en/wow/t/2353745)).
- [ ] **Elemental Fury on Lava Burst and Flame Shock ticks.** Text implies yes; untested.
- [ ] **Lightning Overload copies:** can they crit, trigger Clearcasting or Elemental Devastation? No data.
- [ ] **Clearcasting and the 5-second rule** in Forever ([Warcraft Tavern](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/)).
- [ ] **PvP crit halving** with Elemental Fury ([Icy Veins snippet](https://www.icy-veins.com/wow-forever/news/players-found-a-hidden-pvp-rule-in-wow-forever-that-halves-crit-bonuses/)).
- [ ] **Downranking threshold** (how many levels below counts as "vastly below") ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)).

---

## 📚 Sources

- [WCLBox Lightning Bolt](https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-bolt), [Chain Lightning](https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-lightning), [Lava Burst](https://wowforever.wclbox.com/en/fashu/shaman/shaman-lava-burst) — Forever spell values
- [Wowhead Forever LB](https://www.wowhead.com/forever/spell=15208/lightning-bolt), [CL](https://www.wowhead.com/forever/spell=10605/chain-lightning) and [Wowhead Classic](https://www.wowhead.com/classic/spell=15208) — tooltips
- [wago.tools beta 70170](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170) and [Classic Era](https://wago.tools/db2/SpellEffect?product=wow_classic_era) — coefficients, base values, chain amplitude
- [wowforevertalents.com](https://wowforevertalents.com/shaman/) (incl. [Call of Thunder](https://wowforevertalents.com/shaman/talents/call-of-thunder/), [Elemental Fury](https://wowforevertalents.com/shaman/talents/elemental-fury/), [Lava Burst](https://wowforevertalents.com/shaman/talents/lava-burst/)) and [wowforevertalent.com](https://wowforevertalent.com/shaman/reference/) — talents
- [Blizzard dev notes, Sept 24](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696) / [Oct 1](https://us.forums.blizzard.com/en/wow/t/2360696) — LB and LvB buffs, row swap, downranking
- [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap) — unified hit/crit, healing→damage
- Blizzard forum threads [2353745](https://us.forums.blizzard.com/en/wow/t/2353745), [2356600](https://us.forums.blizzard.com/en/wow/t/2356600), [2362045](https://us.forums.blizzard.com/en/wow/t/2362045), [2354160](https://us.forums.blizzard.com/en/wow/t/2354160), [2365290](https://us.forums.blizzard.com/en/wow/t/please-fix-shamans/2365290) — tester findings
- [Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/), [EndgameTools](https://endgametools.com/en/blog/wow-forever-shaman), [Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview) — guide claims (some stale)
- [wowisclassic talent calc](https://www.wowisclassic.com/en/talent-calculator/shaman/), [Icy Veins Classic Ele](https://www.icy-veins.com/wow-classic/elemental-shaman-dps-pve-stat-priority), [Warcraft Tavern mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/) — Classic baseline
- [wow.gg set bonuses](https://wow.gg/guides/wow-forever-tier-set-bonuses), [WoWHandbook relics](https://wowhandbook.com/gear/relics/) — items
- [mythicsim](https://mythicsim.com/wow-forever/shaman) — sim ranking
