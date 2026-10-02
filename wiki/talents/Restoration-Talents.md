---
title: Restoration Talents
description: The full Forever Restoration talent tree with per-rank values, prerequisites and Classic Era comparison for every talent.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🌊 Restoration Talents

This page covers every talent in the Forever **Restoration** tree, rank by rank, against Classic Era. Restoration gained mana-regen talents (Mindfulness, Water Shield), Mana Tide Totem moved up to the 16-point row, and the tree now ends in **Riptide**. For tree rules and respecs, see the [Talent Overview](Talent-Overview.md). For how to play the spec, see the [Restoration Guide](../guides/Restoration-Guide.md).

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified — see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)
> **Classic baseline:** Classic Era 1.15.9.69722, compared rank by rank by [wowforevertalents.com](https://wowforevertalents.com/shaman/).
> **Beta cap is level 30** (21 points, or up to 26 with the Legacy *Talented* perk). Water Shield, Mana Tide Totem and Nature's Swiftness are reachable now. **Riptide has never been available live in the beta**; its numbers are client data only.

## 📑 Contents
- [Tree Grid](#-tree-grid)
- [Talents](#-talents)
- [Removed from this Tree](#-removed-from-this-tree)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

## 🧩 Tree Grid

16 talents. Positions are (row, column) from the [wowforevertalent.com calculator](https://wowforevertalent.com/shaman/), cross-checked with [wowforevertalents.com](https://wowforevertalents.com/shaman/) 🟢. Row *N* needs (N−1)×5 points in Restoration.

| Row (pts) | Col 1 | Col 2 | Col 3 | Col 4 |
|---|---|---|---|---|
| 1 (0) | | [Improved Healing Wave](#improved-healing-wave) 5 | [Totemic Focus](#totemic-focus) 5 | |
| 2 (5) | [Mindfulness](#mindfulness) 3 | [Natural Grace](#natural-grace) 3 | [Tidal Focus](#tidal-focus) 5 | [Improved Reincarnation](#improved-reincarnation) 2 |
| 3 (10) | [Ancestral Healing](#ancestral-healing) 3 | [Healing Focus](#healing-focus) 3 | [Water Shield](#water-shield) 1 | |
| 4 (15) | [Tidal Mastery](#tidal-mastery) 5 | [Restorative Totems](#restorative-totems) 5 | [Mana Tide Totem](#mana-tide-totem) 1 | |
| 5 (20) | | [Healing Way](#healing-way) 3 | [Nature's Swiftness](#natures-swiftness) 1 | |
| 6 (25) | | | [Purification](#purification) 5 | |
| 7 (30) | | [Riptide](#riptide) 1 ⬅ Healing Way | | |

⬅ = requires the named talent at **max rank**.

| Row | Col | Talent | Ranks | Status | Requires |
|---|---|---|---|---|---|
| 1 | 2 | [Improved Healing Wave](#improved-healing-wave) | 5 | UNCHANGED | — |
| 1 | 3 | [Totemic Focus](#totemic-focus) | 5 | CHANGED + MOVED | — |
| 2 | 1 | [Mindfulness](#mindfulness) | 3 | NEW | — |
| 2 | 2 | [Natural Grace](#natural-grace) | 3 | RENAMED from Healing Grace | — |
| 2 | 3 | [Tidal Focus](#tidal-focus) | 5 | CHANGED + MOVED | — |
| 2 | 4 | [Improved Reincarnation](#improved-reincarnation) | 2 | CHANGED | — |
| 3 | 1 | [Ancestral Healing](#ancestral-healing) | 3 | MOVED | — |
| 3 | 2 | [Healing Focus](#healing-focus) | 3 | CHANGED | — |
| 3 | 3 | [Water Shield](#water-shield) | 1 | NEW (11-pt active) | — |
| 4 | 1 | [Tidal Mastery](#tidal-mastery) | 5 | CHANGED | — |
| 4 | 2 | [Restorative Totems](#restorative-totems) | 5 | CHANGED | — |
| 4 | 3 | [Mana Tide Totem](#mana-tide-totem) | 1 | CHANGED + MOVED (16-pt active) | — |
| 5 | 2 | [Healing Way](#healing-way) | 3 | CHANGED (reworked) | — |
| 5 | 3 | [Nature's Swiftness](#natures-swiftness) | 1 | UNCHANGED | — |
| 6 | 3 | [Purification](#purification) | 5 | UNCHANGED | — |
| 7 | 2 | [Riptide](#riptide) | 1 | NEW (31-pt active) | Healing Way 3/3 |

## 🌳 Talents

Effect text comes from client tooltips as read by [wowforevertalent.com](https://wowforevertalent.com/shaman/reference/) (wft) and [wowforevertalents.com](https://wowforevertalents.com/shaman/) (wfts) 🟢. Where they disagree, wfts wins and the other value is noted.

### Improved Healing Wave

**Row 1, Col 2 · 5 ranks · Requires: — · Status: `UNCHANGED`**

- 🟢 **Forever:** Healing Wave cast time `−0.1 / 0.2 / 0.3 / 0.4 / 0.5 sec` ([wft](https://wowforevertalent.com/shaman/reference/)).
- **vs Classic:** identical. Healing Wave's base cast times are also unchanged (3 s from rank 4) ([Spells and Ranks](../reference/Spells-and-Ranks.md#healing-wave)).
- In Classic, cast-time talents do not change a spell's coefficient ([Classic Era DB2](https://wago.tools/db2/SpellEffect?product=wow_classic_era)). Not checked in Forever.

### Totemic Focus

**Row 1, Col 3 · 5 ranks · Requires: — · Status: `CHANGED` + `MOVED` (row 2 → row 1)**

- 🟢 **Forever:** mana cost of your totems **and of spells that summon or move them** (Call of the Elements, Totemic Projection and so on) `−5 / 10 / 15 / 20 / 25%` ([wfts](https://wowforevertalents.com/shaman/)).
- **vs Classic:** ~~totems only~~ (5–25%) → **adds the totem-placing spells**. ~~Position (2,3)~~ → **(1,3)**.
- Beta history: in the BlizzCon layout Tidal Mastery was in row 1 and Totemic Focus in row 4; they swapped ([wfts beta](https://wowforevertalents.com/beta/)).
- Note: client data lists the Call spells' own cost as "none" ([Wowhead](https://www.wowhead.com/forever/spell=66842/call-of-the-elements)). Analysis: the discount presumably applies to the totems they place and to Totemic Projection's mana cost. See [Totem Mechanics](../mechanics/Totem-Mechanics.md).

### Mindfulness

**Row 2, Col 1 · 3 ranks · Requires: — · Status: `NEW`**

- 🟢 **Forever:** `17 / 33 / 50%` of your mana regeneration continues while casting ([wft](https://wowforevertalent.com/shaman/reference/), [wfts](https://wowforevertalents.com/shaman/)).
- **vs Classic:** did not exist. Classic Shamans had **no** talent for Spirit regen while casting, so MP5 was the healer stat ([Warcraft Tavern Classic mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/)).
- 🔵 Context: Blizzard is adding "Spirit regen while casting" talents across classes ([Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)). wow.gg calls the Resto Shaman version "Meditation" 🟡 ([wow.gg](https://wow.gg/guides/shaman-restoration-forever-overview)).
- Beta rounding: 34/51% → 33/50% ([wfts beta](https://wowforevertalents.com/beta/)).
- 🟡 Warcraft Tavern and Icy Veins suggest an 8-point Restoration dip for Mindfulness on Elemental ([Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/), [Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview)).
- See [Mana Regeneration](../mechanics/Mana-Regeneration.md).

### Natural Grace

**Row 2, Col 2 · 3 ranks · Requires: — · Status: `RENAMED from Healing Grace`, `CHANGED` + `MOVED`**

- 🟢 **Forever:** threat generated by **all your spells** `−5 / 10 / 15%` ([wfts](https://wowforevertalents.com/shaman/), [wft](https://wowforevertalent.com/shaman/reference/)).
- **vs Classic (Healing Grace):** ~~healing spells only~~ (5/10/15%) ([WH Classic 29187](https://www.wowhead.com/classic/spell=29187)) → **all spells**. ~~Position (3,4)~~ → **(2,2)**.
- See [Threat](../mechanics/Threat.md).

### Tidal Focus

**Row 2, Col 3 · 5 ranks · Requires: — · Status: `CHANGED` + `MOVED` (row 1 → row 2)**

- 🟢 **Forever:** mana cost of healing spells `−1 / 2 / 3 / 4 / 5%` **and hit chance `+1 / 2 / 3 / 4 / 5%`** ([wfts](https://wowforevertalents.com/shaman/)).
- **vs Classic:** ~~mana cost only~~ (1–5%) → **adds hit chance**. ~~Position (1,3)~~ → **(2,3)**.
- 🟡 Guides treat this as the successor to Classic's **Nature's Guidance** (+1–3% melee and spell hit), which was removed. That is an inference, not a stated design ([Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview), [Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/)).
- 🔵 Hit is unified in Forever (spell, melee and ranged share one value) ([Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)). Analysis: so the +5% hit should help every Shaman spell and attack, but nobody has tested it. See [Spell Attack Table](../mechanics/Spell-Attack-Table.md).

### Improved Reincarnation

**Row 2, Col 4 · 2 ranks · Requires: — · Status: `CHANGED`**

- 🟢 **Forever:** Reincarnation cooldown `−10 / 20 min`, **maximum health `+2 / 4%`**, and `+10 / 20%` health and mana when you reincarnate ([wfts](https://wowforevertalents.com/shaman/)).
- **vs Classic:** ~~no max-health part~~ ([WH Classic 16184](https://www.wowhead.com/classic/spell=16184)) → **adds +2/4% max health**.
- Reincarnation itself is unchanged: level 30, 60 min cooldown, 20% health and mana, still uses an **Ankh** ([Spells and Ranks](../reference/Spells-and-Ranks.md#reincarnation)). At 2/2: 40 min cooldown, 40% health and mana (Classic math, unchanged).

### Ancestral Healing

**Row 3, Col 1 · 3 ranks · Requires: — · Status: `MOVED` (row 2 → row 3)**

- 🟢 **Forever:** your healing crits raise the target's armor by `8 / 17 / 25%` for 15 sec ([wft](https://wowforevertalent.com/shaman/reference/)).
- **vs Classic:** ranks 1 and 3 identical. Rank 2 reads 17% (it was 16% in the BlizzCon build); wfts flags this rounding as a "number change" ([wfts beta](https://wowforevertalents.com/beta/)). ~~Position (2,2)~~ → **(3,1)**.

### Healing Focus

**Row 3, Col 2 · 3 ranks · Requires: — · Status: `CHANGED`**

- 🟢 **Forever:** `23 / 47 / 70%` chance to avoid interruption (pushback) from damage while casting healing spells ([wfts](https://wowforevertalents.com/shaman/)).
- **vs Classic:** ~~5 ranks × 14% (70% max)~~ → **3 ranks, 70% max**. Beta rounding: 46/69% → 47/70% ([wfts beta](https://wowforevertalents.com/beta/)).

### Water Shield

**Row 3, Col 3 · 1 rank · Requires: — · Status: `NEW` (11-point active)**

- 🟢 **Forever:** active. **Instant, 15 sec cooldown, lasts 10 min, 3 water globes.** When you are hit by a spell, melee or ranged attack, **or one of your heals crits**, you gain **2% of your maximum mana** and use up one globe. Only one Elemental Shield can be active at a time ([wft](https://wowforevertalent.com/shaman/reference/), [wfts](https://wowforevertalents.com/shaman/), [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/calc-shaman-restoration-water-shield)). Spell 408510, proc 408511.
- **Mana cost:** not stated in any source we have (see To Verify). **Trainer ranks:** none; 1 rank only.
- 🟢 DB2 70170: 3 charges, 10 min duration, **15 sec category cooldown**, **3.5 sec internal proc cooldown** (ICD, the minimum time between two globes). No flat MP5 component ([wago SpellAuraOptions](https://wago.tools/db2/SpellAuraOptions/csv?build=1.60.1.70170)).
- **vs Classic:** did not exist.
- 🟡 **Bug history (Sept 25, Skyborne, confirmed on Tauren):** (a) at 2 or 1 charges the buff tooltip read **1%** of max mana instead of 2%; (b) the listed **15 sec cooldown was not applied**, so it was GCD-only; (c) the buff always said "3 charges" ([thread 2361063](https://us.forums.blizzard.com/en/wow/t/2361063)). The cooldown issue was marked **Fixed** on Oct 1 ([forever-bugs #134](https://github.com/ClassicWoWCommunity/forever-bugs/issues/134)), but it is unclear whether the fix added a real cooldown or removed it from the tooltip. DB2 still has the 15 sec cooldown. See [Known Beta Bugs](../forever/Known-Beta-Bugs.md).
- 🟡 Water Shield does nothing for Elemental's **damage** crits; only heal crits and being hit trigger it ([thread 2364061](https://us.forums.blizzard.com/en/wow/t/2364061)).
- See [Spells and Ranks](../reference/Spells-and-Ranks.md#water-shield) and [Mana Regeneration](../mechanics/Mana-Regeneration.md#water-shield).

### Tidal Mastery

**Row 4, Col 1 · 5 ranks · Requires: — · Status: `CHANGED`**

- 🟢 **Forever:** healing spell crit chance `+1 / 2 / 3 / 4 / 5%` ([wfts](https://wowforevertalents.com/shaman/)).
- **vs Classic:** ~~healing **and lightning** spells~~ (1–5%) ([WH Classic 16194](https://www.wowhead.com/classic/spell=16194)) → **healing spells only**. This removed 5% lightning crit from Elemental hybrids.
- Beta history: it was in row 1 in the BlizzCon layout; it is now row 4 ([wfts beta](https://wowforevertalents.com/beta/)). 🔴 Conquest Capped still lists it as "Row 1" ([Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/)).
- Analysis: more heal crits mean more [Water Shield](#water-shield) globes and [Ancestral Healing](#ancestral-healing) procs, since both trigger on heal crits.

### Restorative Totems

**Row 4, Col 2 · 5 ranks · Requires: — · Status: `CHANGED`**

- 🟢 **Forever:** Mana Spring Totem `+5 / 10 / 15 / 20 / 25%`; **Healing Stream Totem `+10 / 20 / 30 / 40 / 50%`** ([wfts](https://wowforevertalents.com/shaman/)).
- **vs Classic:** ~~both totems +5–25%~~ → **Healing Stream doubled to +10–50%**.
- Healing Stream's base heal per tick was lowered (R5 ~~14~~ → **11** per 2 s) ([Totems](../reference/Totems.md#healing-stream-totem)).

### Mana Tide Totem

**Row 4, Col 3 · 1 rank · Requires: — · Status: `CHANGED` + `MOVED` (row 7 → row 4, now a 16-point active)**

- 🟢 **Forever:** active. **10 mana, instant, 5 min cooldown.** Summons a 5 HP Water totem for 12 sec that restores **88 mana every 3 sec** to group members within **30 yd** ([wfts](https://wowforevertalents.com/shaman/), [wft](https://wowforevertalent.com/shaman/reference/)).
- **vs Classic:** ~~31-point capstone; R1 170 mana per 3 sec, 20 yd, learned at 40~~ ([WH Classic 17359](https://www.wowhead.com/classic/spell=17359)) → **16-point talent; R1 88 per 3 sec, 30 yd, learned at 25**.

**Trainer ranks** 🟢 ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-mana-tide-totem)):

| Rank | Level | Mana | Mana per 3 s |
|---|---|---|---|
| R1 (talent) | ~~40~~ → **25** | ~~20~~ → **10** | ~~170~~ → **88** |
| R2 | 48 | ~~40~~ → **30** | ~~230~~ → **197** |
| R3 | 58 | 60 | **290** (unchanged) |

12 sec duration, 5 min cooldown, ~~20~~ → **30 yd** at all ranks.

- Analysis: Mana Tide R1 is the only rank reachable in the beta (cap 30). Classic research notes a 4-vs-5-tick question for the 12 s duration (ticks at 3 s) that is still open.
- See [Totems](../reference/Totems.md#mana-tide-totem) and [Mana Regeneration](../mechanics/Mana-Regeneration.md#mana-tide-totem).

### Healing Way

**Row 5, Col 2 · 3 ranks · Requires: — (unlocks Riptide) · Status: `CHANGED` (reworked)**

- 🟢 **Forever:** Healing Wave healing `+8 / 17 / 25%` (flat) ([wfts](https://wowforevertalents.com/shaman/)).
- **vs Classic:** ~~33/66/100% chance to apply a stacking +6% Healing Wave healing-taken buff on the target (3 stacks, 15 sec)~~ → **flat +25% at 3/3**.
- Beta rounding: 16/24% → 17/25% ([wfts beta](https://wowforevertalents.com/beta/)).
- 🟡 Icy Veins' 26-point level-30 Restoration build adds Healing Way 3/3 ([Icy Veins Restoration](https://www.icy-veins.com/wow-forever/restoration-shaman-healer-pve-guide)).

### Nature's Swiftness

**Row 5, Col 3 · 1 rank · Requires: — · Status: `UNCHANGED`**

- 🟢 **Forever:** active. **3 min cooldown.** Your next Nature spell with a base cast time under 10 sec becomes instant ([wft](https://wowforevertalent.com/shaman/reference/)).
- **Mana / cast:** no mana cost or cast time is given in our sources (see To Verify). **Trainer ranks:** none; 1 rank only.
- **vs Classic:** identical.
- 🔵 Downranked spells get less benefit from spell power and a reduced chance to trigger talents since Oct 1 ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)). Analysis: an instant max-rank Healing Wave is unaffected; a low-rank one would heal less than in Classic.
- See [Healing Mechanics](../mechanics/Healing-Mechanics.md#natures-swiftness).

### Purification

**Row 6, Col 3 · 5 ranks · Requires: — · Status: `UNCHANGED`**

- 🟢 **Forever:** healing effectiveness `+2 / 4 / 6 / 8 / 10%` ([wfts](https://wowforevertalents.com/shaman/)).
- **vs Classic:** identical per wfts. wft tags it "changed", but neither shows a different value ([wft](https://wowforevertalent.com/shaman/reference/)).

### Riptide

**Row 7, Col 2 · 1 rank · Requires: Healing Way 3/3 · Status: `NEW` (31-point active)**

- 🟢 **Forever:** active. **245 mana, 40 yd, instant, 6 sec cooldown.** Heals `484–535` instantly plus **445 over 15 sec**. Your **Chain Heal cast directly on that target is 25% more effective** ([wfts](https://wowforevertalents.com/shaman/)). Spell ID 408521.
- **vs Classic:** did not exist (it is a Season of Discovery spell ID reused).
- 🟢 **DB2 70170:** direct heal base 480 with level scaling, **21.4%** spell power coefficient; HoT 89 every 3 sec at **10% per tick** (5 ticks, 50% total) ([wago SpellEffect](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170), [Wowhead spell=408521](https://www.wowhead.com/forever/spell=408521)). Wowhead shows "481 … 90 every 3 sec", the usual +1 display offset. Conquest Capped gives the same 21.4% / 50% 🟡 ([Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/)).
- 🔵 **Can crit** since Sept 24: "Corrected an issue and now Riptide can land critical hits" ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696); bug [forever-bugs #71](https://github.com/ClassicWoWCommunity/forever-bugs/issues/71)). Forever lets HoT ticks crit in general.

**Trainer ranks** (the talent teaches rank 1) 🟢:

| Rank | Level | Mana | Direct heal | HoT (15 s) | Source |
|---|---|---|---|---|---|
| R1 (talent) | 40 | 245 | **484–535** (wfts) · 486–534 (WCLBox) · 485–533 (wft, ClassicWoWForever) · ~~456–504~~ (EndgameTools, stale) | 445 | [wfts](https://wowforevertalents.com/shaman/), [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-riptide), [EndgameTools](https://endgametools.com/en/blog/wow-forever-shaman) |
| R2 (1239242) | 50 | 300 | **613–678** (wfts) · 615–676 (WCLBox) | 575 | [wfts abilities](https://wowforevertalents.com/abilities/shaman/) |
| R3 (1239243) | 60 | 385 | **799–883** | 805 | [wfts abilities](https://wowforevertalents.com/abilities/shaman/) |

Instant, 6 sec cooldown and 40 yd at every rank. Rank levels 40/50/60 are confirmed by DB2 SpellLevels. [wfts beta](https://wowforevertalents.com/beta/) mislabels the 799–883 rank as "level 50".

**Notes**
- Beta history: talent rank was 479–528 + 499 HoT at BlizzCon; now 484–535 + 445 ([wfts beta](https://wowforevertalents.com/beta/)).
- Gear: *The Spiritcaller* 5-piece reduces Riptide's cooldown by 1 sec 🟢 ([wow.gg](https://wow.gg/guides/wow-forever-tier-set-bonuses); [Items and Set Bonuses](../reference/Items-and-Set-Bonuses.md)).
- Chain Heal is learned at level 40, the same level as Riptide R1 ([Spells and Ranks](../reference/Spells-and-Ranks.md#chain-heal)).
- See [Spells and Ranks](../reference/Spells-and-Ranks.md#riptide) and [Healing Mechanics](../mechanics/Healing-Mechanics.md#riptide).

## ❌ Removed from this Tree

| Classic talent | Classic effect | What happened | Conf. |
|---|---|---|---|
| **Totemic Mastery** | friendly-totem radius raised to 30 yd ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Totemic_Mastery)) | Effectively **baseline**: Forever buff-totem tooltips read 30 yd. No source says this outright, so treat "baseline" as an inference | 🟢 tooltips ([wfts abilities](https://wowforevertalents.com/abilities/shaman/)); 🟡 inference |
| **Nature's Guidance** | +1% melee and spell hit per rank (3 ranks) ([WH Classic 16198](https://www.wowhead.com/classic/spell=16198)) | Its hit role is effectively in [Tidal Focus](#tidal-focus) (+1–5% hit) | 🟡 inference ([Icy Veins](https://www.icy-veins.com/wow-forever/shaman-class-overview), [Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/)) |
| *Healing Grace* | healing threat −5/10/15% | **Renamed** → [Natural Grace](#natural-grace), now all spells | 🟢 [wfts](https://wowforevertalents.com/shaman/) |

## 📋 Quick Reference

| Talent | Max-rank effect (Forever) | Classic max rank | Conf. |
|---|---|---|---|
| Improved Healing Wave | HW cast −0.5 s | same | 🟢 |
| Totemic Focus | −25% mana: totems and totem-placing spells | −25% totems | 🟢 |
| Mindfulness | 50% of regen continues while casting | — | 🟢 |
| Natural Grace | −15% threat, all spells | Healing Grace: heals only | 🟢 |
| Tidal Focus | −5% heal mana, +5% hit | −5% heal mana | 🟢 |
| Improved Reincarnation | −20 min CD, +4% max HP, +20% HP/mana | no HP part | 🟢 |
| Ancestral Healing | heal crit → +25% target armor, 15 s | same | 🟢 |
| Healing Focus | 70% pushback avoidance (3 ranks) | 70% (5 ranks) | 🟢 |
| Water Shield | 3 globes × 2% max mana; 15 s CD, 3.5 s ICD | — | 🟢 (CD 🟡 bug history) |
| Tidal Mastery | +5% heal crit | +5% heal **and lightning** crit | 🟢 |
| Restorative Totems | Mana Spring +25%, Healing Stream +50% | both +25% | 🟢 |
| Mana Tide Totem | R1 88 mana / 3 s, 30 yd, 12 s, 5 min CD | R1 170, 20 yd | 🟢 |
| Healing Way | Healing Wave +25% (flat) | stacking +6% buff | 🟢 |
| Nature's Swiftness | next Nature spell <10 s instant, 3 min CD | same | 🟢 |
| Purification | +10% healing | same | 🟢 |
| Riptide | 484–535 + 445 over 15 s; Chain Heal +25% on target; 6 s CD | — | 🟢🔵 |

## 🔍 To Verify
- [ ] **Water Shield cooldown after the Oct 1 fix** — is there a real 15 s cooldown now (DB2), or was it removed from the tooltip? ([forever-bugs #134](https://github.com/ClassicWoWCommunity/forever-bugs/issues/134), [thread 2361063](https://us.forums.blizzard.com/en/wow/t/2361063))
- [ ] **Water Shield 1% at 2 or fewer charges** — display bug only, or does it really return less mana? Compare mana gained per globe ([thread 2361063](https://us.forums.blizzard.com/en/wow/t/2361063)).
- [ ] **Water Shield mana cost** and **Nature's Swiftness mana cost** — not in any source.
- [ ] **Riptide R1 exact range** — 484–535 / 486–534 / 485–533 across sources; needs a level-40 character ([wfts](https://wowforevertalents.com/shaman/), [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-riptide)).
- [ ] **Riptide's +25% Chain Heal** — does it apply only when Chain Heal *starts* on the Riptide target (tooltip wording "cast directly on that target"), or also on jumps?
- [ ] **Tidal Focus hit** — does the +5% hit apply to damage spells and melee too (unified hit), or healing spells only?
- [ ] **Totemic Focus and the Call spells** — the Call spells cost nothing; check whether the discount reaches the totems they drop and Totemic Projection's mana cost.
- [ ] **Mana Tide tick count** — 4 or 5 ticks in 12 s (open since Classic).
- [ ] **Totemic Mastery as baseline** — confirm every friendly totem reaches 30 yd in game.

## 📚 Sources
- [wowforevertalents.com: Shaman](https://wowforevertalents.com/shaman/) — 🟢 client-read talent values and Classic diff; [abilities](https://wowforevertalents.com/abilities/shaman/); [beta changes](https://wowforevertalents.com/beta/)
- [wowforevertalent.com reference](https://wowforevertalent.com/shaman/reference/) and [calculator](https://wowforevertalent.com/shaman/) — 🟢 talent text, positions
- [Blizzard Beta Development Notes](https://us.forums.blizzard.com/en/wow/t/2360696) — 🔵 Riptide crit fix, downranking rule
- [Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap) — 🔵 unified hit, regen-while-casting talents
- [wago.tools DB2 (70170)](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170), [Wowhead Riptide](https://www.wowhead.com/forever/spell=408521) — 🟢 Riptide and Water Shield data
- [WCLBox: Riptide](https://wowforever.wclbox.com/en/fashu/shaman/shaman-riptide), [Mana Tide](https://wowforever.wclbox.com/en/fashu/shaman/shaman-mana-tide-totem), [Water Shield](https://wowforever.wclbox.com/en/fashu/shaman/calc-shaman-restoration-water-shield) — 🟢 rank tables
- [EndgameTools](https://endgametools.com/en/blog/wow-forever-shaman) — 🟡 older Riptide values
- [forever-bugs #134](https://github.com/ClassicWoWCommunity/forever-bugs/issues/134), [#71](https://github.com/ClassicWoWCommunity/forever-bugs/issues/71); forum threads [2361063](https://us.forums.blizzard.com/en/wow/t/2361063), [2364061](https://us.forums.blizzard.com/en/wow/t/2364061) — 🟡 tester findings
- [Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview), [Icy Veins Restoration](https://www.icy-veins.com/wow-forever/restoration-shaman-healer-pve-guide), [Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/), [wow.gg Resto](https://wow.gg/guides/shaman-restoration-forever-overview), [Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/) — 🟡 guide claims
- [wow.gg set bonuses](https://wow.gg/guides/wow-forever-tier-set-bonuses) — 🟢 Spiritcaller 5-pc
- Classic baseline: [Wowhead Classic](https://www.wowhead.com/classic/spell=16194) tooltips (16184, 16194, 16198, 17359, 29187), [warcraft.wiki.gg Totemic Mastery](https://warcraft.wiki.gg/wiki/Totemic_Mastery), [Warcraft Tavern Classic mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/)
