---
title: Healing Mechanics
description: How Shaman heals, Riptide, Water Shield, HoT crits and the Restoration talents work in Classic Era and what WoW Forever changed.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 💧 Healing Mechanics

This page explains the Restoration Shaman's healing spells, healing totems and key talents: coefficients, Chain Heal bouncing, crits on heal-over-time effects, and Forever's new Riptide and Water Shield. It starts from the Classic Era baseline, then covers Forever. Rank tables are on [Spells and Ranks](../reference/Spells-and-Ranks.md) and talent per-rank data on [Restoration Talents](../talents/Restoration-Talents.md).

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified, see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

> ⚠ **Beta cap is level 30.** Chain Heal (L40) and the Riptide trainer ranks (L50/60) haven't been tested live. Riptide is a 31-point talent, out of reach at level 30 (21 points, 26 with the Legacy perk).

## 📑 Contents
- [Forever-Wide Rules](#-forever-wide-rules)
- [Healing Spells](#-healing-spells)
  - [Healing Wave](#healing-wave)
  - [Lesser Healing Wave](#lesser-healing-wave)
  - [Chain Heal](#chain-heal)
  - [Riptide](#riptide)
- [Mana and Crits](#-mana-and-crits)
  - [Water Shield](#water-shield)
  - [HoT Crits](#hot-crits)
- [Talents](#-talents)
  - [Ancestral Healing](#ancestral-healing)
  - [Nature's Swiftness](#natures-swiftness)
  - [Healing Way](#healing-way)
- [Healing Totems](#-healing-totems)
  - [Healing Stream Totem](#healing-stream-totem)
  - [Mana Tide Totem](#mana-tide-totem)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

---

## 🌐 Forever-Wide Rules

- 🟢 **Heals lost about 7–25% of their base healing.** Cast times and mana are unchanged ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-healing-wave)).
- 🟢 Low ranks **scale better**: the Classic sub-level-20 penalty is gone (e.g. Healing Wave R1 coefficient 12.3% → 42.9%). The coefficient is the share of your bonus healing added to each heal.
- 🔵 **Downranking penalty (Oct 1):** "spells cast using spell ranks vastly below your current level receive less benefit from your Spell Damage and Spell Healing and have a reduced chance to activate your Class abilities and Talents" ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)). This matters for Shamans who downrank Healing Wave or Chain Heal for mana. Classic had **no** level-based downranking penalty ([Ozgar, Warcraft Tavern](https://www.warcrafttavern.com/wow-classic/guides/ozgars-downranking-guide-tool/)). The exact formula isn't published.
- 🔵 Bonus healing now also gives **1/3 as much spell damage** ([Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)).
- 🔵 **HoTs can crit** (see [HoT Crits](#hot-crits)).
- 🟢 **Mindfulness** (new, Resto row 2): 17 / 33 / 50% of mana regen continues while casting. See [Mana Regeneration](Mana-Regeneration.md).
- 🟢 Heal crits in Classic do **150%**. Elemental Fury doesn't apply to heals ([WH 16089](https://www.wowhead.com/classic/spell=16089)).
- 🟡 Classic healing threat: 0.5 threat per point healed, split among enemies. Forever's **Natural Grace** cuts threat from **all** your spells by up to 15% ([magey](https://github.com/magey/classic-warrior/wiki/Threat-Mechanics); [wowforevertalents.com](https://wowforevertalents.com/shaman/)). See [Threat](Threat.md).

---

## 💚 Healing Spells

### Healing Wave

**Classic baseline**
- 🟢 R10: **1620–1850**, 3.0 s cast, 620 mana, coefficient **0.857** ([WH 25357](https://www.wowhead.com/classic/spell=25357)).
- 🟢 Improved Healing Wave cuts the cast to 2.5 s; cast-time talents **don't change the coefficient** (DB2).
- 🟢 R1–R4 have the sub-level-20 penalty (R4: 0.793).

**In Forever**
- 🟢 R10 ~~1620–1850~~ → **1508–1722**, still **3 s**, 620 mana, 0.857 ([Wowhead R10](https://www.wowhead.com/forever/spell=25357/healing-wave); [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-healing-wave)).
- 🟢 Coefficients: R1 ~~12.3%~~ → **42.9%**, R2 ~~27.1%~~ → **57.1%**, R3 ~~50%~~ → **71.4%**, R4 ~~79.3%~~ → **85.7%**.
- 🔴 A search summary claimed "Healing Wave changed to 1.5 s". Client data shows 3 s; treated as false.
- 🟢 Improved Healing Wave unchanged (−0.5 s at 5/5). **Healing Way** is now a flat +25% to Healing Wave (see [Healing Way](#healing-way)).
- 🟢 Relic **Tidal Totem** (L60): Healing Wave mana −5% ([WoWHandbook](https://wowhandbook.com/gear/relics/)).

### Lesser Healing Wave

**Classic baseline**
- 🟢 R6: **832–928**, **1.5 s**, coefficient **0.429** ([WH 10468](https://www.wowhead.com/classic/spell=10468)).

**In Forever**
- 🟢 R1 ~~170–195~~ → **151–172**, R6 ~~832–928~~ → **775–865**. 1.5 s, mana unchanged ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-lesser-healing-wave)).
- 🟢 Relic **Totem of Urgency** (L60): Lesser Healing Wave crit chance **+4%** ([WoWHandbook](https://wowhandbook.com/gear/relics/)).

### Chain Heal

**Classic baseline**
- 🟢 R3: **567–646**, 2.5 s, 3 targets, coefficient **0.714** on the first target ([WH 10623](https://www.wowhead.com/classic/spell=10623); DB2).
- 🟢 **50% falloff:** `ChainAmplitude 0.5`, so the jumps heal **100% / 50% / 25%** (DB2).
- 🟢 **Party-only jump rule:** cast on a party member, it only jumps to other members of that party ([WH tooltip](https://www.wowhead.com/classic/spell=10623)).
- 🟡 An old 2007 estimate said 0.238; [Icy Veins Classic Resto](https://icy-veins.com/wow-classic/restoration-shaman-healer-pve-stat-priority) says "roughly 71%", matching DB2.

**In Forever**
- 🟢 R1 ~~332–381~~ → **246–281**, R2 ~~419–479~~ → **326–372**, R3 ~~567–646~~ → **474–539**. Still 2.5 s, 3 targets, **50% falloff per jump** ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-heal)).
- 🟢 **Riptide synergy:** Chain Heal **cast directly on** a target with your Riptide is **25% more effective** ([wowforevertalents.com](https://wowforevertalents.com/shaman/)). "Cast directly on" suggests only the first target counts.
- 🟡 *Stormcaller's Garb* (AQ40): Chain Heal cast time −0.4 s ([WoWHandbook](https://wowhandbook.com/gear/shaman/)).
- No source gives the Forever coefficient or confirms the party-only jump rule.

### Riptide

**New in Forever** (Restoration 31-point talent, row 7; requires Healing Way 3/3).

- 🟢 **Instant**, **6 s** cooldown, **40 yd**, 245 mana. Direct heal plus a **HoT over 15 s**, and your **Chain Heal cast directly on that target is 25% more effective** ([wowforevertalents.com](https://wowforevertalents.com/shaman/)).
- 🟢 **DB2 (R1, spell 408521):** direct base **480** at **21.4%** coefficient, plus a HoT of **89 every 3 s** at **10% per tick** over 15 s (5 ticks) ([wago SpellEffect](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170); [Wowhead](https://www.wowhead.com/forever/spell=408521)). 🟡 Conquest Capped gives the same 21.4% / 50% ([CC](https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/)).
- R1 values disagree between sources:

| Source | R1 direct | R1 HoT |
|---|---|---|
| [wowforevertalents.com](https://wowforevertalents.com/shaman/) (client) | **484–535** | 445 over 15 s |
| [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-riptide) | 486–534 | 445 |
| [wowforevertalent.com](https://wowforevertalent.com/shaman/reference/) | 485–533 | 445 |
| [EndgameTools](https://endgametools.com/en/blog/wow-forever-shaman) (stale) | 456–504 | 445 |

- 🟢 Trainer ranks: R2 (L50, 300 mana) 613–678 + 575; R3 (L60, 385 mana) **799–883** + 805 ([wowforevertalents.com abilities](https://wowforevertalents.com/abilities/shaman/)).
- 🔵 **Could not crit until Sept 24:** "Corrected an issue and now Riptide can land critical hits" ([dev notes](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696)).
- 🟢 *The Spiritcaller* 5-pc: **Riptide cooldown −1 s** ([wow.gg](https://wow.gg/guides/wow-forever-tier-set-bonuses)).

---

## 🔋 Mana and Crits

### Water Shield

**New in Forever** (Restoration row 3, 11-point talent). No Classic equivalent.

- 🟢 Instant. **3 water globes for 10 min.** When you're hit by a spell, melee or ranged attack, **or one of your heals crits**, you get **2% of max mana** and use up a globe ([wowforevertalents.com](https://wowforevertalents.com/shaman/); [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/calc-shaman-restoration-water-shield)).
- 🟢 DB2 (408510, proc 408511): **15 s cooldown** and a **3.5 s internal proc cooldown**, so at most one globe every 3.5 s. No flat MP5 ([wago SpellAuraOptions / SpellCooldowns](https://wago.tools/db2/SpellAuraOptions/csv?build=1.60.1.70170)).
- 🟢 **Only one Elemental Shield** at a time: Water Shield replaces Lightning Shield.
- 🟡 **Bugs** (Skyborne, confirmed on Tauren, Sept 25) ([thread 2361063](https://us.forums.blizzard.com/en/wow/t/2361063)):
  - At 2 or 1 charges, the buff tooltip reads "**1%** of maximum mana" instead of 2%.
  - The listed 15 s cooldown **didn't apply**; it was GCD-only.
  - The buff always says "3 charges".
- 🟡 The cooldown bug was marked **Fixed** on Oct 1 ([forever-bugs #134](https://github.com/ClassicWoWCommunity/forever-bugs/issues/134)). It's unclear which way: a real 15 s cooldown added, or the tooltip changed. DB2 70170 still has 15 s.
- 🟡 It does nothing for Elemental's **damage** crits ([thread 2364061](https://us.forums.blizzard.com/en/wow/t/2364061)).
- See [Mana Regeneration](Mana-Regeneration.md#water-shield).

### HoT Crits

**Classic baseline**
- 🟡 Forever sources describe periodic crits as new ("Damage-over-time effects can now crit", [forever-hunter wiki](https://github.com/classic-hunter/forever-hunter/wiki/Forever-Beta-Changes)), so periodic effects are treated here as unable to crit in Classic. The Classic Shaman's only periodic heal was Healing Stream Totem.

**In Forever**
- 🔵 **HoTs and DoTs can crit.** Blizzard fixed bugs so that Rejuvenation, Tranquility, Wild Growth, **Riptide**, Devouring Plague and Hellfire "can land critical hits". Inner Focus "no longer applies its Critical Strike increase to Periodic Effects", which implies periodic effects crit in general ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)).
- 🟡 Before the fix, HoT ticks (Renew, Rejuvenation, Wild Growth, Riptide) couldn't crit while Regrowth's HoT could ([forever-bugs #71](https://github.com/ClassicWoWCommunity/forever-bugs/issues/71)).
- Unknown: whether **Healing Stream Totem** ticks crit, and whether HoT crits trigger **Ancestral Healing** or **Water Shield**.

---

## 🌿 Talents

### Ancestral Healing

- 🟢 **Classic and Forever:** your heal crits raise the target's armor by **+8 / 17 / 25%** for 15 s. Moved to row 3 in Forever; ranks 1 and 3 match Classic, and rank 2 reads 17% (BlizzCon build: 16%) ([wowforevertalent.com](https://wowforevertalent.com/shaman/reference/); [wowforevertalents.com beta changes](https://wowforevertalents.com/beta/)).
- 🔵 As a talent proc, it may be affected by the downranking penalty's "reduced chance to activate … Talents" when you crit with low ranks. Not tested.

### Nature's Swiftness

- 🟢 **Classic and Forever (unchanged):** 3 min cooldown; your next Nature spell with a cast time under 10 s is **instant** ([wowforevertalent.com](https://wowforevertalent.com/shaman/reference/)). In Forever it's the Restoration **21-point** talent (row 5).
- Typical use: an instant max-rank Healing Wave in an emergency.

### Healing Way

**Classic baseline**
- 🟢 3 ranks: 33 / 66 / 100% chance after Healing Wave to apply a stacking **+6% Healing Wave healing taken** debuff on the target, up to **3 stacks** (+18%), 15 s ([wowforevertalents.com Classic diff](https://wowforevertalents.com/shaman/)).

**In Forever**
- 🟢 Reworked to a flat **+8 / 17 / 25% Healing Wave healing**, with no stacking or ramp-up ([wowforevertalents.com](https://wowforevertalents.com/shaman/)). Row 5 (21 points); opens Riptide. BlizzCon build: 16/24% at ranks 2/3.
- Because it's now a flat bonus, it no longer depends on proc chance or on spamming one target.

---

## 🌊 Healing Totems

### Healing Stream Totem

**Classic baseline**
- 🟢 R5: **14 HP every 2 s** to party members within 20 yd, 1 min. Coefficient **0.022 per tick** ([WH 10463](https://www.wowhead.com/classic/spell=10463); DB2 10461).
- 🟢 Classic Restorative Totems: Healing Stream and Mana Spring +5–25%.
- 🟡 Generates **0 threat** ([Warcraft Tavern threat table](https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/)).

**In Forever**
- 🟢 Per 2 s: R1 ~~6~~ → **5**, R2 ~~8~~ → **6**, R3 ~~10~~ → **7**, R4 ~~12~~ → **9**, R5 ~~14~~ → **11**. Duration ~~1~~ → **5 min**, range ~~20~~ → **30 yd** ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-healing-stream-totem)).
- 🟢 **Restorative Totems** now gives **Healing Stream +10 / 20 / 30 / 40 / 50%** (Mana Spring still +5–25%) ([wowforevertalents.com](https://wowforevertalents.com/shaman/)).
- 🟢 *The Spiritcaller* 3-pc: Fire and Water totem radius +10 yd. See [Totem Mechanics](Totem-Mechanics.md#items-that-modify-totems).

### Mana Tide Totem

**Classic baseline**
- 🟢 Restoration 31-point talent. R3: **290 mana every 3 s** for 12 s to the party within 20 yd; 5 min cooldown. R1 170, R2 230 ([WH 17359](https://www.wowhead.com/classic/spell=17359); DB2 17360).
- 🔴 4 or 5 ticks is unverified (12 s at 3 s intervals).

**In Forever**
- 🟢 Moved ~~row 7 (31 points)~~ → **row 4 (16 points)**. R1 learned at ~~40~~ → **25**. The 5-HP totem lasts 12 s and restores mana every 3 s to group members within ~~20~~ → **30 yd** ([wowforevertalents.com](https://wowforevertalents.com/shaman/); [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-mana-tide-totem)):

| Rank | Level | Mana cost | Mana per 3 s |
|---|---|---|---|
| R1 (talent) | ~~40~~ → **25** | ~~20~~ → **10** | ~~170~~ → **88** |
| R2 | 48 | ~~40~~ → **30** | ~~230~~ → **197** |
| R3 | 58 | 60 | 290 (unchanged) |

- 🟢 Still a 5 min cooldown.

---

## 📋 Quick Reference

| Mechanic | Classic Era | Forever | Conf. |
|---|---|---|---|
| Base healing | Classic values | **−7–25%**; casts and mana unchanged | 🟢 |
| Low-rank coefficients | sub-level-20 penalty | penalty gone (HW R1 42.9%) | 🟢 |
| Downranking | no penalty | **less SP and fewer talent procs** for far-below-level ranks | 🔵 |
| Healing Wave R10 | 1620–1850, 3 s, 0.857 | **1508–1722**, 3 s, 0.857 | 🟢 |
| LHW R6 | 832–928, 1.5 s, 0.429 | **775–865** | 🟢 |
| Chain Heal R3 | 567–646, 50% falloff, party-only jumps | **474–539**, 50% falloff; +25% on Riptide target | 🟢 |
| Riptide | — | instant, 6 s CD, R1 ~484–535 + 445 HoT, 21.4% + 10%/tick | 🟢 / 🔵 |
| Water Shield | — | 3 globes, 2% max mana on hit or heal crit, 3.5 s ICD, 15 s CD | 🟢 / 🟡 |
| HoT crits | no | **yes** | 🔵 |
| Healing Way | stacking +6% taken (3×) | **flat +25%** Healing Wave | 🟢 |
| Ancestral Healing | +25% armor on heal crit | unchanged | 🟢 |
| Nature's Swiftness | instant Nature spell, 3 min | unchanged (21-pt) | 🟢 |
| Tidal Mastery | +5% crit, heals **and lightning** | +5% crit, **heals only** | 🟢 |
| Healing Stream R5 | 14 / 2 s, 1 min, 20 yd | **11** / 2 s, 5 min, 30 yd; Restorative Totems +50% | 🟢 |
| Mana Tide | 31-pt, R3 290 / 3 s, 20 yd | **16-pt**, R1 88 at L25, 30 yd | 🟢 |

---

## 🔍 To Verify

- [ ] **Downranking penalty formula** for heals: how far below your level, and how much SP is lost ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)).
- [ ] **Chain Heal party-only jump rule** and **coefficient** in Forever. No source ([WH Classic](https://www.wowhead.com/classic/spell=10623)).
- [ ] **Riptide synergy scope.** Does the +25% apply only to the first Chain Heal target, and is Riptide consumed? ([wowforevertalents.com](https://wowforevertalents.com/shaman/)).
- [ ] **Riptide R1 value** (484–535 vs 486–534 vs 485–533). DB2 base 480 plus level scaling ([wago](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170)).
- [ ] **Water Shield after the Oct 1 fix.** Is the 15 s cooldown live, and is the 1%-at-low-charges a real mana loss or only a display bug? ([forever-bugs #134](https://github.com/ClassicWoWCommunity/forever-bugs/issues/134); [thread 2361063](https://us.forums.blizzard.com/en/wow/t/2361063)).
- [ ] **Water Shield on HoT crits.** Do Riptide HoT crits trigger a globe? No data.
- [ ] **Healing Stream Totem ticks crit?** ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)).
- [ ] **Ancestral Healing** from HoT crits, and under the downranking proc penalty. No data.
- [ ] **Mana Tide tick count** (4 vs 5) ([WH 17359](https://www.wowhead.com/classic/spell=17359)).
- [ ] **PvP crit halving on heals.** The player finding mentions melee, spell and DoT crits; heals aren't mentioned ([Icy Veins snippet](https://www.icy-veins.com/wow-forever/news/players-found-a-hidden-pvp-rule-in-wow-forever-that-halves-crit-bonuses/)).

---

## 📚 Sources

- [WCLBox Healing Wave](https://wowforever.wclbox.com/en/fashu/shaman/shaman-healing-wave), [LHW](https://wowforever.wclbox.com/en/fashu/shaman/shaman-lesser-healing-wave), [Chain Heal](https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-heal), [Riptide](https://wowforever.wclbox.com/en/fashu/shaman/shaman-riptide), [Water Shield](https://wowforever.wclbox.com/en/fashu/shaman/calc-shaman-restoration-water-shield), [Healing Stream](https://wowforever.wclbox.com/en/fashu/shaman/shaman-healing-stream-totem), [Mana Tide](https://wowforever.wclbox.com/en/fashu/shaman/shaman-mana-tide-totem) — Forever values
- [Wowhead Forever HW](https://www.wowhead.com/forever/spell=25357/healing-wave), [Riptide](https://www.wowhead.com/forever/spell=408521) and [Wowhead Classic](https://www.wowhead.com/classic/spell=25357) — tooltips
- [wago.tools beta 70170](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170) and [Classic Era DB2](https://wago.tools/db2/SpellEffect?product=wow_classic_era) — coefficients, Water Shield cooldowns, chain amplitude
- [wowforevertalents.com](https://wowforevertalents.com/shaman/) (+ [abilities](https://wowforevertalents.com/abilities/shaman/), [beta changes](https://wowforevertalents.com/beta/)) and [wowforevertalent.com](https://wowforevertalent.com/shaman/reference/) — talents
- [Blizzard dev notes, Sept 24](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696) / [Oct 1](https://us.forums.blizzard.com/en/wow/t/2360696) — Riptide crit fix, HoT crits, downranking
- [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap) — healing→damage
- [forever-bugs #71](https://github.com/ClassicWoWCommunity/forever-bugs/issues/71), [#134](https://github.com/ClassicWoWCommunity/forever-bugs/issues/134); forum threads [2361063](https://us.forums.blizzard.com/en/wow/t/2361063), [2364061](https://us.forums.blizzard.com/en/wow/t/2364061) — bugs and tests
- [Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/), [EndgameTools](https://endgametools.com/en/blog/wow-forever-shaman) — guide values
- [Ozgar's Downranking Guide](https://www.warcrafttavern.com/wow-classic/guides/ozgars-downranking-guide-tool/), [Icy Veins Classic Resto](https://icy-veins.com/wow-classic/restoration-shaman-healer-pve-stat-priority), [magey Threat](https://github.com/magey/classic-warrior/wiki/Threat-Mechanics), [Warcraft Tavern threat table](https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/) — Classic baseline
- [WoWHandbook relics](https://wowhandbook.com/gear/relics/), [sets](https://wowhandbook.com/gear/shaman/), [wow.gg set bonuses](https://wow.gg/guides/wow-forever-tier-set-bonuses) — items
