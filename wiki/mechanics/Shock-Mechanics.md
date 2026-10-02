---
title: Shock Mechanics
description: How Earth Shock, Flame Shock and Frost Shock work in Classic Era - shared cooldown, interrupt, slow, DoT - and what WoW Forever changed.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# ⚡ Shock Mechanics

Earth Shock, Flame Shock and Frost Shock are the Shaman's instant damage spells. This page covers the rules they share (cooldown, range, talents), what each one does on its own, and how Forever changed them. Per-rank damage is on [Spells and Ranks](../reference/Spells-and-Ranks.md#earth-shock).

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified, see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

## 📑 Contents
- [Shared Rules](#-shared-rules)
  - [Shared Cooldown](#shared-cooldown)
  - [Range](#range)
  - [Hit and Resists](#hit-and-resists)
- [The Three Shocks](#-the-three-shocks)
  - [Earth Shock](#earth-shock)
  - [Flame Shock](#flame-shock)
  - [Frost Shock](#frost-shock)
- [Talents and Items](#-talents-and-items)
  - [Classic Shock Talents](#classic-shock-talents)
  - [Forever Shock Talents](#forever-shock-talents)
  - [Shock Items](#shock-items)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

---

## 🔗 Shared Rules

### Shared Cooldown

- 🟢 All three shocks share **spell category 19**, with a **6 s** category cooldown on top of the 1.5 s GCD (global cooldown). Casting any shock puts the other two on cooldown ([DB2 SpellCategories / SpellCooldowns](https://wago.tools/db2/SpellCooldowns?product=wow_classic_era); Wowhead tooltips "6 sec cooldown").
- 🟢 **Chain Lightning's 6 s cooldown is separate** (category 85), so shocks and Chain Lightning don't block each other.
- 🟢 **Reverberation** cuts the shock cooldown by 0.2 s per rank, down to **5 s** at 5/5 ([wowforevertalent.com](https://wowforevertalent.com/shaman/reference/)).
- **Forever:** 🟢 mana costs, the 6 s cooldown and learn levels are unchanged ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-earth-shock); [wago SpellEffect 70170](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170)). Reverberation is unchanged and moved to row 2.

### Range

- 🟢 All shocks have a **20 yd** range in Classic (Wowhead tooltips). Earth Shock R7 is still 20 yd in Forever ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-earth-shock)).
- **Forever:** 🟢 **Elemental Reach** gives **Flame Shock +8/15 yd** (so 35 yd at 2/2). It doesn't extend Earth or Frost Shock ([wowforevertalents.com](https://wowforevertalents.com/shaman/); 🟡 [thread 2364061](https://us.forums.blizzard.com/en/wow/t/2364061)).

### Hit and Resists

- 🟢 Shocks use the spell hit table: 17% base miss vs a level-63 boss, 16% hit to cap (see [Spell Attack Table](Spell-Attack-Table.md)).
- 🔴 **Binary or not?** "Binary" spells carry a non-damage effect and are resisted fully or not at all; partial resists don't apply. No source classifies the shocks. By analogy, Frost Shock (snare) and Earth Shock (interrupt) are probably binary and Flame Shock is probably not ([warcraft.wiki.gg Resistance](https://warcraft.wiki.gg/wiki/Resistance)).
- **Forever:** 🔵 spell, melee and ranged hit are **unified** into one stat ([Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)), so melee hit gear also helps Enhancement's shocks land.

---

## 🎯 The Three Shocks

### Earth Shock

**Classic baseline**
- 🟢 R7: **517–545** Nature damage, 0.386 spell-power coefficient (the share of your spell damage added to each hit) ([WH 10414](https://www.wowhead.com/classic/spell=10414)).
- 🟢 **Interrupts** the target's cast and locks that spell school for **2 s** (DB2 DurationIndex 39 = 2000 ms).
- 🟢🟡 "Causes a high amount of threat": **2× threat** ([Warcraft Tavern threat table](https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/); [LibThreatClassic2](https://github.com/dfherr/LibThreatClassic2/blob/master/ClassModules/Classic/Shaman.lua)). Frost Shock and Flame Shock have no special threat modifier in any source.

**In Forever**
- 🟢 Base damage cut: R1 ~~19–22~~ → **20–21**, R3 ~~65–69~~ → **52–55**, R5 ~~235–249~~ → **135–142**, R7 ~~517–545~~ → **293–309** ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-earth-shock); [Wowhead R7](https://www.wowhead.com/forever/spell=10414/earth-shock)).
- 🟢 Low ranks scale better: R1 coefficient ~~15.4%~~ → **38.6%**. R7 is unchanged at 0.386.
- 🟢 **Concussion** now boosts **Earth Shock only** among the shocks (plus LB and CL).
- 🟢 **Stormstrike** now buffs your next **Lightning Bolt, Chain Lightning or Earth Shock** by +20% (see [Stormstrike](Enhancement-Mechanics.md#stormstrike)).
- 🟡 Still a big threat tool: testers say Rockbiter and Earth Shock pull threat in low-level dungeons ([thread 2365062](https://us.forums.blizzard.com/en/wow/t/2365062)). The interrupt and 2 s lockout have no reported change.

### Flame Shock

**Classic baseline**
- 🟢 R6: **292** Fire damage up front plus **320 over 12 s** (80 per tick, **4 ticks every 3 s**) ([WH 29228](https://www.wowhead.com/classic/spell=29228)).
- 🟢 Coefficients: direct **0.214**, DoT **0.100 per tick (0.40 total)** (DB2). An old 2007 estimate of 0.171 total is superseded ([Lowyat](https://forum.lowyat.net/topic/405783)).
- 🟢 R1 (level 10) has the sub-level-20 penalty: 0.134 direct.

**In Forever**
- 🟢 Base damage cut: R1 ~~25~~ → **24** + 28 DoT, R3 ~~95 + 96~~ → **49 + 56**, R6 ~~292 + 320~~ → **166 + 176** over 12 s ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-flame-shock)).
- 🟢 R1 coefficients: direct **21.4%** (no low-level penalty any more), DoT **10% per tick** over 12 s; 6 s shared cooldown ([wago SpellEffect](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170), spell 8050).
- 🔵🟡 **DoT ticks can crit.** Blizzard fixed several HoTs and DoTs so they "can land critical hits" ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)). A tester confirms Flame Shock ticks crit ([thread 2366738](https://us.forums.blizzard.com/en/wow/t/2366738)).
- 🟡 **Tick crits don't trigger Elemental Devastation.** Only the initial hit does ([thread 2366738](https://us.forums.blizzard.com/en/wow/t/2366738)).
- 🟡 The Hunter wiki reports that DoTs now "dynamically recalculate damage instead of snapshotting" ([forever-hunter: Forever Beta Changes](https://github.com/classic-hunter/forever-hunter/wiki/Forever-Beta-Changes)). That would mean a spell-power buff gained mid-DoT changes the remaining ticks. Not checked for Flame Shock.
- 🟢 **Call of Flame** now boosts Flame Shock (+5/10/15%); in Classic it only covered Fire totems.
- 🟢 **Lava Burst** deals **+20% damage if your Flame Shock is on the target** ([wago Spell](https://wago.tools/db2/Spell/csv?build=1.60.1.70170)). This makes Flame Shock a setup spell for Elemental (see [Lava Burst](Elemental-Mechanics.md#lava-burst)).
- 🟢 Elemental Reach: Flame Shock +8/15 yd range.

### Frost Shock

**Classic baseline**
- 🟢 R4: **492–520** Frost damage plus a **50% movement slow for 8 s** ([WH 10473](https://www.wowhead.com/classic/spell=10473)). Coefficient 0.386.

**In Forever**
- 🟢 Base damage cut: R1 ~~95–101~~ → **68–73**, R4 ~~492–520~~ → **279–295**. The 50% slow for 8 s is unchanged ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-frost-shock)).
- 🟢 Concussion **no longer** boosts Frost Shock.
- 🟡 Frost Shock crits do trigger Elemental Devastation ([thread 2366738](https://us.forums.blizzard.com/en/wow/t/2366738)).

---

## 🧩 Talents and Items

### Classic Shock Talents

| Talent | Effect | Source |
|---|---|---|
| Convection | −2% mana per rank on Shocks, LB and CL (−10% at 5/5) | 🟢 [WH 16112](https://www.wowhead.com/classic/spell=16112) |
| Concussion | +1% damage per rank on LB, CL and **all Shocks** (+5%) | 🟢 [wowforevertalents.com (Classic diff)](https://wowforevertalents.com/shaman/) |
| Reverberation | Shock cooldown −0.2 s per rank (−1 s) | 🟢 [wowforevertalent.com](https://wowforevertalent.com/shaman/reference/) |
| Elemental Focus | 10% chance after a Fire/Frost/Nature damage spell that the next damage spell costs no mana (Clearcasting, 15 s, 1 charge) | 🟢 [WH 16164](https://www.wowhead.com/classic/spell=16164) |
| Call of Flame | Fire **totems** only, +5/10/15% | 🟢 [wowforevertalents.com](https://wowforevertalents.com/shaman/) |

### Forever Shock Talents

All 🟢 from [wowforevertalents.com](https://wowforevertalents.com/shaman/) / [wowforevertalent.com](https://wowforevertalent.com/shaman/reference/) unless noted.

| Talent | Tree (row) | Forever effect | Change vs Classic |
|---|---|---|---|
| [Convection](../talents/Elemental-Talents.md#convection) | Ele (1) | −2/4/6/8/10% mana: Shocks, LB, **Lava Burst**, CL | adds Lava Burst |
| [Concussion](../talents/Elemental-Talents.md#concussion) | Ele (1) | +1–5% damage: LB, CL and **Earth Shock** | ~~all Shocks~~ → Earth Shock only |
| [Reverberation](../talents/Elemental-Talents.md#reverberation) | Ele (2) | Shock cooldown −0.2 s per rank | moved row 3 → 2 |
| [Call of Flame](../talents/Elemental-Talents.md#call-of-flame) | Ele (2) | +5/10/15%: Fire totems, **Flame Shock**, Fire Nova, Lava Burst | wider scope |
| [Elemental Focus](../talents/Elemental-Talents.md#elemental-focus) | Ele (3) | Clearcasting, unchanged | none |
| [Elemental Reach](../talents/Elemental-Talents.md#elemental-reach) | Ele (5) | **Flame Shock +8/15 yd** (plus LB, CL, Fire Nova, LvB +3/6 yd) | new Flame Shock part |
| [Shamanistic Focus](../talents/Enhancement-Talents.md#shamanistic-focus) | Enh (3) | **Shock and Lightning Shield mana −45%** | new |
| [Stormstrike](../talents/Enhancement-Talents.md#stormstrike) | Enh (4) | next LB, CL or **Earth Shock** +20% | reworked |
| [Thundering Strikes](../talents/Enhancement-Talents.md#thundering-strikes) | Enh (1) | +1–5% crit with **all spells and attacks** | was weapon only |

- 🟡 Elemental Devastation is triggered by **Earth Shock, Frost Shock and the Flame Shock initial hit** ([thread 2366738](https://us.forums.blizzard.com/en/wow/t/2366738)).
- 🔵 **Downranking penalty:** "spells cast using spell ranks vastly below your current level receive less benefit from your Spell Damage … and have a reduced chance to activate your Class abilities and Talents" (Oct 1, [dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)). Low-rank shocks for mana efficiency get less spell power and fewer Clearcasting procs.

### Shock Items

| Item | Effect | Conf. |
|---|---|---|
| Burning Totem (relic, L60) | Flame Shock duration **+3 s** | 🟢 [WoWHandbook relics](https://wowhandbook.com/gear/relics/) |
| Totem of Elders (relic) | Fire Nova **extends Flame Shock by 1 s** (+2 s more vs Beasts) | 🟢 [WoWHandbook relics](https://wowhandbook.com/gear/relics/) |
| Totem of the Undergrove (relic) | Shocks vs Undead reduce Stormstrike cooldown by 0.5 s | 🟢 [WoWHandbook relics](https://wowhandbook.com/gear/relics/) |
| Stormcaller's Garb (AQ40 set) | LB / CL / Shock casts: 20% chance of +50 Nature damage for 8 s | 🟡 [WoWHandbook sets](https://wowhandbook.com/gear/shaman/) |
| PvP sets | "standardized shock-crit bonuses" (no detail) | 🟡 [WoWHandbook sets](https://wowhandbook.com/gear/shaman/) |

---

## 📋 Quick Reference

| Mechanic | Classic Era | Forever | Conf. |
|---|---|---|---|
| Cooldown | 6 s shared (category 19), separate from CL | unchanged | 🟢 |
| Range | 20 yd | 20 yd; Flame Shock up to **35 yd** with Elemental Reach | 🟢 |
| Base damage | Classic values | **about −40–45%** at high ranks | 🟢 |
| Low-rank coefficients | sub-level-20 penalty | penalty gone (ES R1 15.4% → 38.6%, FS R1 21.4%) | 🟢 |
| Earth Shock | interrupt, 2 s school lockout, 2× threat | no change reported | 🟢 / 🟡 |
| Frost Shock | 50% slow, 8 s | unchanged | 🟢 |
| Flame Shock DoT | 4 ticks / 3 s, 12 s, 0.10 per tick | same; **ticks crit**, no ED from ticks | 🟢 / 🟡 |
| Concussion | all shocks | **Earth Shock only** | 🟢 |
| Call of Flame | Fire totems | + Flame Shock, Fire Nova, Lava Burst | 🟢 |
| Shock mana talent | Convection −10% | Convection −10% + Shamanistic Focus −45% | 🟢 |
| Stormstrike link | +20% to next 2 Nature hits | +20% to next LB / CL / **Earth Shock** | 🟢 |
| Lava Burst link | — | +20% LvB damage with your Flame Shock up | 🟢 |

---

## 🔍 To Verify

- [ ] **Binary status** of Earth Shock and Frost Shock. No source, Classic or Forever ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Resistance)).
- [ ] **Earth Shock interrupt lockout and threat multiplier in Forever.** No change reported, but untested ([WH 10414](https://www.wowhead.com/classic/spell=10414)).
- [ ] **Flame Shock snapshot vs dynamic.** The Hunter wiki says DoTs recalculate dynamically; untested for Flame Shock ([forever-hunter](https://github.com/classic-hunter/forever-hunter/wiki/Forever-Beta-Changes)).
- [ ] **Flame Shock tick crits not triggering Elemental Devastation.** Intended or bug? ([thread 2366738](https://us.forums.blizzard.com/en/wow/t/2366738)).
- [ ] **Does Elemental Fury apply to Flame Shock tick crits?** Not tested.
- [ ] **Shamanistic Focus and Convection stacking.** Additive (−55%) or multiplicative? No data ([wowforevertalents.com](https://wowforevertalents.com/shaman/)).
- [ ] **Downranking penalty formula.** How far below your level a rank must be, and how big the penalty is ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)).
- [ ] **Coefficients at mid ranks** (ES R2–R6, FrS, FS R2–R6) in Forever. Only R1 and max ranks were checked ([wago](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170)).

---

## 📚 Sources

- [wago.tools DB2, Classic Era](https://wago.tools/db2/SpellCooldowns?product=wow_classic_era) and [beta 70170](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170) — categories, cooldowns, coefficients
- [Wowhead Classic](https://www.wowhead.com/classic/spell=10414) and [Wowhead Forever](https://www.wowhead.com/forever/spell=10414/earth-shock) — tooltips
- [WCLBox Earth](https://wowforever.wclbox.com/en/fashu/shaman/shaman-earth-shock), [Flame](https://wowforever.wclbox.com/en/fashu/shaman/shaman-flame-shock), [Frost](https://wowforever.wclbox.com/en/fashu/shaman/shaman-frost-shock) — Forever rank values
- [wowforevertalents.com](https://wowforevertalents.com/shaman/), [wowforevertalent.com](https://wowforevertalent.com/shaman/reference/) — talent text
- [Blizzard dev notes](https://us.forums.blizzard.com/en/wow/t/2360696) — DoT crits, downranking penalty
- [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap) — unified hit
- Blizzard forum threads [2366738](https://us.forums.blizzard.com/en/wow/t/2366738) (ED proc test), [2364061](https://us.forums.blizzard.com/en/wow/t/2364061), [2365062](https://us.forums.blizzard.com/en/wow/t/2365062) — tester findings
- [Warcraft Tavern threat table](https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/), [LibThreatClassic2](https://github.com/dfherr/LibThreatClassic2/blob/master/ClassModules/Classic/Shaman.lua) — Earth Shock threat
- [warcraft.wiki.gg Resistance](https://warcraft.wiki.gg/wiki/Resistance) — binary spells
- [WoWHandbook relics](https://wowhandbook.com/gear/relics/) and [sets](https://wowhandbook.com/gear/shaman/) — shock items
- [forever-hunter wiki](https://github.com/classic-hunter/forever-hunter/wiki/Forever-Beta-Changes) — DoT behaviour
