---
title: Spell Attack Table
description: How Shaman spells hit, miss, get resisted and crit, covering the Classic Era baseline and what WoW Forever changed (unified hit/crit, Tidal Focus hit, 5-rank Elemental Fury, DoT/HoT crits).
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🎯 Spell Attack Table

How a Shaman spell decides between **miss, resist, hit and crit**. The page covers the Classic Era baseline first, then what WoW Forever changed. It is for Elemental players chasing hit cap, healers wondering what crit is worth, and anyone checking whether a Frost Shock "should" have landed.

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified. See [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

## 📑 Contents
- [Spell Hit](#-spell-hit)
- [Resistances and Partial Resists](#️-resistances-and-partial-resists)
- [Spell Critical Strikes](#-spell-critical-strikes)
- [In Forever](#️-in-forever)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

---

## 🎯 Spell Hit

### Spell hit table

In Classic, spell hit depends **only on the level difference** between you and the target. Weapon skill and Defense play no part. All values below are vs mobs (PvE).

| Target level − your level | Base hit | Base miss | Spell hit needed to cap |
|---|---|---|---|
| −3 / −2 / −1 | 99 / 98 / 97% | 1 / 2 / 3% | 0 / 1 / 2% |
| 0 | 96% | 4% | 3% |
| +1 | 95% | 5% | 4% |
| +2 | 94% | 6% | 5% |
| **+3 (raid boss, level 63)** | **83%** | **17%** | **16%** |
| +4 | 72% | 28% | (27%) |
| +5 | 61% | 39% | (38%) |

🟡 Sources: [Jasica's Guide to Combat Tables][jasica], [Allakhazam: Hit Rate][akz-hit], the vanillagaming guide quoted in a [Blizzard forum thread][vg] ("+3: 17% chance to miss. 16% chance to Hit is needed for cap"), and [Icy Veins Classic Elemental][iv-ele-classic] (3/4/5/16%).

Note the jump between +2 and +3: each level beyond +2 adds about **11% miss** instead of 1%. A boss is far harder to hit than an elite two levels above you.

### The 1% floor

- 🟡 Miss chance can **never drop below 1%**. The most spell hit you can have is **99%** ([Jasica][jasica]). Any hit beyond the cap for your target is wasted.

### Spell hit in PvP

- 🟡 Vs **players** 3 levels above you, base spell miss is **13%**, not 17%. This lower value applies to PvP only ([Jasica][jasica]).

### Classic sources of spell hit

- 🟢 **Nature's Guidance** (Restoration, 3 ranks) gives **+1/2/3% hit to both melee and spells** ([Wowhead 16198][wh-ng]). With 3/3 the boss spell cap from gear falls from 16% to **13%** ([Icy Veins][iv-ele-classic]).
- 🟢 **There is no Elemental hit talent in Classic.** *Elemental Precision* does not exist in Classic Era data: its TBC spell ID 30672 has no Classic entry ([Wowhead 30672][wh-30672]).

---

## 🛡️ Resistances and Partial Resists

### Average resistance

🟡 A target's magic resistance (Fire, Frost or Nature for a Shaman) reduces your damage on **average** by:

```
AverageResist = (TargetResistance / (CasterLevel × 5)) × 0.75      (capped at 75%)
```

([warcraft.wiki.gg: Resistance][wwg-resist]; [Jasica][jasica])

### Partial resists

🟡 **Non-binary** spells (pure damage spells) roll a **partial resist** of 0, 25, 50, 75 or 100%. The rolls are weighted so that their average equals the figure above ([warcraft.wiki.gg][wwg-resist]). Spell hit does not change this roll; it only decides whether the spell lands at all.

### Binary spells

🟡 **Binary** spells carry a non-damage effect (snare, interrupt, crowd control). They are resisted **in full or not at all**. Resistance lowers their chance to land, and spell hit does **not** offset that part ([warcraft.wiki.gg][wwg-resist]). The vanillagaming list classes Frost Nova, Counterspell, Polymorph and Fear as binary, and Shadow Bolt, Immolate and Fireball as non-binary ([Blizzard forum copy][vg]).

🔴 **No source classifies the Shaman spells.** By analogy only:

| Spell | Likely type | Why |
|---|---|---|
| Frost Shock | binary? | damage + snare |
| Earth Shock | binary? | damage + interrupt |
| Lightning Bolt, Chain Lightning, Lava Burst | non-binary? | damage only |
| Flame Shock | non-binary? | damage + DoT, no control effect |

This matters most vs high-Frost or high-Nature resistance targets. See [To Verify](#-to-verify).

### Level-based resistance

🔴 Mobs above your level are believed to gain about **8 resistance per level** ("the exact number may have been higher"). Spell penetration cannot overcome it. For a level-63 boss that is about 24 resistance, or roughly **6% average mitigation** on every non-binary spell ([warcraft.wiki.gg][wwg-resist]). The value is an assumption on the source page, not a measurement.

---

## 💥 Spell Critical Strikes

### Intellect and base spell crit

| Value (level 60 Shaman) | Number | Conf. | Source |
|---|---|---|---|
| Intellect per 1% spell crit | **59.5** | 🟡 | [Warcraft Tavern mana guide][wt-mana], [RankedBoost][rb], [Blizzard Watch][bw] |
| (disputed) | 59.2 (a 2005 blue post, original not found) or 57.16 ([warcraft.wiki.gg][wwg-crit], which appears to use TBC-era constants) | 🔴 | — |
| Base spell crit (class constant) | **2.2%** (some community sources say 2.3%) | 🔴 | [warcraft.wiki.gg][wwg-crit] (same TBC-constants caveat) |

### Crit multiplier

- 🟡 A spell **or heal** crit does **150%** of normal damage or healing (an "additional 50%") ([Warcraft Tavern mana guide][wt-mana]; [Jasica][jasica]).
- The older [warcraft.wiki.gg Spell crit page][wwg-crit] says "crits deal 200%". That is a later-expansion value and **does not apply** to the Classic baseline.

### Elemental Fury

- 🟢 Classic **Elemental Fury** (1 rank) raised the crit bonus of "your Searing, Magma, and Fire Nova Totems and your Fire, Frost, and Nature spells" by **100%**. Crits from those sources did **200%** damage ([Wowhead 16089][wh-ef]).
- **Heals stay at 150%.** Elemental Fury only touches damage.
- 🟡 Fire totem damage can crit and scales with spell damage ([Warcraft Tavern tank guide][wt-tank]).

### Classic crit talents

| Talent | Effect | Conf. | Source |
|---|---|---|---|
| Call of Thunder (Elemental, 5 ranks) | +6% crit on Lightning Bolt and Chain Lightning at max rank | 🟡 | [wowisclassic calculator][wic] |
| Tidal Mastery (Restoration, 5 ranks) | +1% crit per rank on **healing and lightning** spells (5% at 5/5) | 🟢 | [Wowhead 16194][wh-tm1], [16218][wh-tm5] |
| Elemental Mastery (Elemental, 1 rank) | Next Fire/Frost/Nature damage spell is a guaranteed crit and costs no mana; 3 min cooldown | 🟢 | [Wowhead 16166][wh-em] |
| Thundering Strikes (Enhancement, 5 ranks) | +1–5% crit with **weapon attacks only** (no spell crit in Classic) | 🟢 | [Wowhead 16302][wh-ts] |

Together, Call of Thunder and Tidal Mastery gave an Elemental Shaman **11% extra lightning crit** in Classic.

---

## ♾️ In Forever

### Unified hit and crit

- 🔵 "Spell, melee, and ranged hit chance are combined, as are spell, melee, and ranged critical chance" ([Blizzard Deep Dive][blz-dd]).
- In practice: **one hit stat and one crit stat** on gear and talents. Every point helps your spells **and** your melee, which makes hybrid Shamans (Enhancement weaving Lightning Bolts, Elemental with a melee weapon) much easier to gear.
- 🔴 No source says whether the **spell hit table itself** (17% miss vs a level-63 boss) changed. Treat the Classic table above as the baseline until someone tests it. The beta is capped at level 30, so +3-level tests are only possible vs level 33 mobs.

### Hit sources in Forever

| Source | Hit | Conf. | Source |
|---|---|---|---|
| **Tidal Focus** (Restoration row 2, 5 ranks) | ~~healing mana cost only~~ → **healing mana −1–5% and hit chance +1/2/3/4/5%** | 🟢 | [wowforevertalents.com][wfts] |
| ~~Nature's Guidance~~ | **Removed.** Its hit role effectively moved to Tidal Focus | 🟢 removal / 🟡 "moved" inference | [wfts][wfts]; [Icy Veins][iv-overview], [Warcraft Tavern][wt-forever] |
| **Tauren** Endurance | +5% Health **+1% hit** | 🟢🟡 | [ForeverChanges racials][fc-racials], [Method.gg][method-racials] |
| *The Spiritcaller's Storm* (Elemental raid set, 2-piece) | +1% hit | 🟢 | [wow.gg datamined sets][wowgg-sets] |

Tidal Focus sits in **Restoration row 2**, so 5/5 costs **10 Restoration points** (row 2 needs 5 points spent in the tree first, per the [row gating rules][wfts]). Because hit is unified, those points now give hit to an Elemental **or** an Enhancement Shaman. See [Tidal Focus](../talents/Restoration-Talents.md#tidal-focus).

If the Classic table still applies (unconfirmed), the boss cap from gear would be **16% − 5% (Tidal Focus) = 11%**, or **10%** for a Tauren. That is arithmetic, not a test.

### Crit talents in Forever

| Talent | Classic | Forever | Conf. |
|---|---|---|---|
| [Elemental Fury](../talents/Elemental-Talents.md#elemental-fury) | ~~1 rank, +100% crit bonus~~ | **5 ranks, +20/40/60/80/100%** crit bonus for Searing and Magma Totems and Fire/Frost/Nature spells. Moved to **row 6** (26-point), needs Call of Thunder 1/1 | 🟢 [wfts][wfts-ef]; 🔵 row swap [Sept 24 notes][blz-notes] |
| [Call of Thunder](../talents/Elemental-Talents.md#call-of-thunder) | ~~5 ranks, +6% LB/CL crit~~ | **1 rank, row 4.** [wowforevertalent.com][wft] shows **+3%** LB/CL crit, but the client tooltip is **blank** in 70170 per [wowforevertalents.com][wfts-cot] (the +3% came from a BlizzCon transcription) | 🔴 conflict |
| [Tidal Mastery](../talents/Restoration-Talents.md#tidal-mastery) | ~~healing **and lightning** crit +1–5%~~ | **Healing crit +1–5% only.** Lightning lost its share | 🟢 [wfts][wfts] |
| [Thundering Strikes](../talents/Enhancement-Talents.md#thundering-strikes) | ~~weapon attacks only~~ | **All spells and attacks** +1–5% crit (Enhancement row 1) | 🟢 [wfts][wfts] |
| Elemental Mastery | guaranteed crit, 3 min | **Removed.** Not a talent, not in the spellbook, no replacement named | 🟢 [wfts][wfts] |

- **Elemental Fury per rank (derived).** If "+20% crit bonus" works like the Classic wording (it raises the 50% bonus by that percentage), crits do **160/170/180/190/200%** damage at ranks 1–5. 5/5 still equals the Classic 200%. [wowforevertalent.com][wftcalc]'s FAQ line "adds 20% instead of 100%" is per rank, not a nerf to the total.
- Fire Nova Totem dropped off the Elemental Fury list. Fire Nova is now a **Fire spell**, so it is still covered as a Fire spell (🟢 [wfts][wfts-ef]).
- 🟡 **Elemental crit budget.** Forum math: Elemental talents give **3%** crit (Call of Thunder, if it works) plus **5%** from Thundering Strikes in Enhancement, versus **11%** in Classic ([thread 2362045][f-2362045], [thread 2358173][f-2358173]).
- 🟢 Per the talent tooltips, **Lava Burst does not benefit from Call of Thunder** (or Concussion or Lightning Overload) but does get +15% from Call of Flame. Forum posters say the same ([thread 2353745][f-2353745]). ⚠ Not an in-game test: Lava Burst is a 31-point talent and out of reach at the beta cap, so this is a tooltip reading.
- 🟢 **Relic:** *Totem of Urgency* (level 60) gives Lesser Healing Wave +4% crit ([WoWHandbook relics][wowhb-relics]).

### DoT and HoT crits

- 🔵 **Periodic effects can crit in Forever.** Blizzard fixed bugs so that Rejuvenation, Tranquility, Wild Growth, **Riptide**, Devouring Plague and Hellfire "can land critical hits", and noted that Inner Focus "no longer applies its Critical Strike increase to Periodic Effects" ([dev notes][blz-notes]). Both fixes imply that periodic crits are intended.
- 🟡 Before Sept 24, HoT ticks in general (Renew, Rejuvenation, Wild Growth, Riptide) could not crit while Regrowth's HoT could ([forever-bugs #71][bug-71]).
- 🟡 **Flame Shock ticks can crit** ([thread 2366738][f-2366738]), which agrees with the Hunter wiki's "DoTs can now crit" ([forever-hunter wiki][hunter-changes]).
- 🟡 **Flame Shock tick crits do not trigger Elemental Devastation.** Neither do Searing Totem, Fire Nova, Flametongue Weapon or Frostbrand Weapon. LB, Earth Shock, Frost Shock and the Flame Shock *initial* hit do trigger it. Lightning Shield could not be made to crit. Method: 3/3 Elemental Devastation, cast on a dummy until a crit, then check the buff ([thread 2366738][f-2366738]). See [Elemental Devastation](../talents/Elemental-Talents.md#elemental-devastation).
- 🔴 Unknown: whether **totem pulses** (Healing Stream Totem, Searing Totem bolts, Magma Totem) can crit in Forever, and whether Elemental Fury raises Flame Shock *tick* crits to 200%.

### PvP crit halving

- 🟡 Players found that **vs other players the crit bonus is halved**: melee crits deal **150%** instead of 200%, spell crits about **125%** instead of 150%, and DoT crits are reduced the same way ([Icy Veins news, player testing][iv-pvp]). **Not confirmed by Blizzard.**
- 🔴 How this interacts with Elemental Fury (does a 200% crit become 150%?) is unknown.

### Revelation and periodic crits

- 🟡 The **Revelation** weapon enchant (+100% crit on your next non-crit spell) was only consumed by direct spells, **not** by periodic ticks, melee or totem-cast spells, which left a +100% crit window for totems and DoTs. Evidence video credited to "Shamancord" ([forever-bugs #163][bug-163], closed).

---

## 📋 Quick Reference

| Topic | Classic Era | Forever (70170) | Conf. (Forever) |
|---|---|---|---|
| Spell miss vs boss (+3) | 17% (16% hit to cap) | not reported as changed | 🔴 |
| Miss floor | 1% (max 99% hit) | not reported as changed | 🔴 |
| PvP miss vs +3 player | 13% | not reported as changed | 🔴 |
| Hit and crit stats | separate spell / melee | **unified** | 🔵 |
| Talent hit | Nature's Guidance 1–3% (melee + spell) | **Tidal Focus 1–5%** (all, unified) | 🟢 |
| Racial hit | none | **Tauren +1%** | 🟢🟡 |
| Int per 1% spell crit (lvl 60) | 59.5 (disputed) | unknown | 🔴 |
| Spell / heal crit | 150% | 150% (no reported change) | 🔴 |
| Elemental Fury | 1 rank → 200% | 5 ranks, 200% at 5/5 | 🟢 |
| Call of Thunder | +6% LB/CL (5 ranks) | +3% LB/CL (1 rank) **or blank** | 🔴 |
| Tidal Mastery | healing + lightning crit | healing crit only | 🟢 |
| Thundering Strikes | weapon crit | **all** crit | 🟢 |
| Elemental Mastery | guaranteed crit | **removed** | 🟢 |
| DoT / HoT crits | no | **yes** | 🔵 |
| Crit bonus vs players | full | **halved** (claimed) | 🟡 |
| Binary spells | full resist or none, hit doesn't help | no reported change | 🔴 |

---

## 🔍 To Verify

- [ ] **Spell hit table in Forever.** Is miss still 4/5/6/17% at 0/+1/+2/+3 levels? Unified hit could have come with a new table. Testable now vs level 33 mobs at level 30 ([Blizzard Deep Dive][blz-dd] says nothing about the table).
- [ ] **Does Tidal Focus hit apply to melee and spells?** Unified hit implies yes, but nobody has logged it ([wfts][wfts]).
- [ ] **Call of Thunder.** Does the blank-tooltip talent still give +3% LB/CL crit server-side? Compare crit rates with and without it over a large sample ([wfts][wfts-cot] vs [wft][wft]).
- [ ] **Elemental Fury per rank.** Confirm 160/170/180/190/200% by logging crit sizes at 1/5 and 5/5 ([wfts][wfts-ef]).
- [ ] **Intellect per crit and base spell crit in Forever.** Classic 59.5 Int and 2.2% are themselves disputed ([warcraft.wiki.gg][wwg-crit]); Forever values are unsourced.
- [ ] **Binary or non-binary:** Frost Shock and Earth Shock. No source classifies Shaman spells ([warcraft.wiki.gg][wwg-resist]).
- [ ] **Level-based resistance** (about 8 per level): an assumption on the source page ([warcraft.wiki.gg][wwg-resist]).
- [ ] **Totem pulse crits** (Healing Stream, Searing, Magma) in Forever. Periodic crits are confirmed for spells, not for totem-cast effects ([dev notes][blz-notes]).
- [ ] **Flame Shock tick crits with Elemental Fury**: 150% or 200%? And is the Elemental Devastation exclusion intended? ([thread 2366738][f-2366738])
- [ ] **PvP crit halving**: player finding only. Also how it interacts with Elemental Fury ([Icy Veins news][iv-pvp]).
- [ ] **Hidden talent-flavour spells** in 70170: 1309442 "Storm's Grasp" (+LB crit) and 1214302 "Improved Lightning Bolt/Lava Burst". Unknown source; they may be set bonuses, Legacy perks or leftovers ([wago Spell 70170][wago-spell]).

---

## 📚 Sources

- [Jasica's Guide to Combat Tables (Allakhazam)][jasica]: spell hit table, 1% floor, PvP miss, crit multiplier
- [Allakhazam: Hit Rate][akz-hit]: spell hit table
- [Blizzard forum thread quoting the vanillagaming guide][vg]: hit cap wording, binary spell examples
- [Icy Veins Classic Elemental stat priority][iv-ele-classic]: hit caps, Nature's Guidance cap
- [Wowhead Classic: Nature's Guidance][wh-ng], [Elemental Precision (no entry)][wh-30672], [Elemental Fury][wh-ef], [Tidal Mastery R1][wh-tm1] / [R5][wh-tm5], [Elemental Mastery][wh-em], [Thundering Strikes][wh-ts]: Classic talent text
- [warcraft.wiki.gg: Resistance][wwg-resist]: resistance formula, partial resists, binary spells, level-based resistance
- [warcraft.wiki.gg: Spell critical strike][wwg-crit]: base crit constant (with TBC caveat)
- [Warcraft Tavern Classic mana guide][wt-mana], [RankedBoost][rb], [Blizzard Watch][bw]: Int per crit, crit multiplier
- [Warcraft Tavern Classic Shaman tanking][wt-tank]: totem crits
- [wowisclassic talent calculator][wic]: Classic Call of Thunder
- [Blizzard: Forever Deep Dive panel recap][blz-dd]: unified hit and crit
- [Blizzard: Beta Development Notes (Sept 24 / Oct 1)][blz-notes]: Elemental Fury row swap, periodic crit fixes
- [wowforevertalents.com][wfts] ([Call of Thunder][wfts-cot], [Elemental Fury][wfts-ef]): Forever talent values (client-read)
- [wowforevertalent.com reference][wft] and [calculator][wftcalc]: alternative talent values
- [ForeverChanges racials][fc-racials], [Method.gg racials][method-racials]: Tauren +1% hit
- [wow.gg datamined set bonuses][wowgg-sets]: Spiritcaller's Storm 2-piece hit
- [WoWHandbook relics][wowhb-relics]: Totem of Urgency
- [Icy Veins Shaman overview][iv-overview], [Warcraft Tavern Forever Shaman guide][wt-forever]: Nature's Guidance → Tidal Focus inference
- [Icy Veins news: PvP crit rule][iv-pvp]: crit halving vs players
- [forever-bugs #71][bug-71], [#163][bug-163]: HoT crits, Revelation
- Blizzard forum threads [2366738][f-2366738] (Elemental Devastation test), [2353745][f-2353745] (Lava Burst talent interactions), [2362045][f-2362045] and [2358173][f-2358173] (crit budget)
- [forever-hunter wiki: Forever Beta Changes][hunter-changes]: DoT crits cross-check
- [wago.tools Spell table, build 70170][wago-spell]: hidden talent-flavour spells

[jasica]: https://wow.allakhazam.com/wiki/Jasica%27s_Guide_to_Combat_Tables_-_Gearing_for_Spellcaster_Bosses_%28WoW%29
[akz-hit]: https://wow.allakhazam.com/wiki/Hit_Rate_%28WoW%29
[vg]: https://us.forums.blizzard.com/en/wow/t/warlocks-spell-resist-and-spell-hit/93617?page=2
[iv-ele-classic]: https://www.icy-veins.com/wow-classic/elemental-shaman-dps-pve-stat-priority
[wh-ng]: https://www.wowhead.com/classic/spell=16198
[wh-30672]: https://www.wowhead.com/classic/spell=30672
[wh-ef]: https://www.wowhead.com/classic/spell=16089
[wh-tm1]: https://www.wowhead.com/classic/spell=16194
[wh-tm5]: https://www.wowhead.com/classic/spell=16218
[wh-em]: https://www.wowhead.com/classic/spell=16166
[wh-ts]: https://www.wowhead.com/classic/spell=16302
[wwg-resist]: https://warcraft.wiki.gg/wiki/Resistance
[wwg-crit]: https://warcraft.wiki.gg/wiki/Spell_critical_strike
[wt-mana]: https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/
[rb]: https://rankedboost.com/world-of-warcraft/classic-stats/
[bw]: https://blizzardwatch.com/2019/06/17/wow-classic-primary-secondary-stats-attributes/
[wt-tank]: https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/
[wic]: https://www.wowisclassic.com/en/talent-calculator/shaman/
[blz-dd]: https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap
[blz-notes]: https://us.forums.blizzard.com/en/wow/t/2360696
[wfts]: https://wowforevertalents.com/shaman/
[wfts-cot]: https://wowforevertalents.com/shaman/talents/call-of-thunder/
[wfts-ef]: https://wowforevertalents.com/shaman/talents/elemental-fury/
[wft]: https://wowforevertalent.com/shaman/reference/
[wftcalc]: https://wowforevertalent.com/shaman/
[fc-racials]: https://foreverchanges.pro/racials
[method-racials]: https://www.method.gg/wow-forever/all-new-racial-abilities-in-world-of-warcraft-forever
[wowgg-sets]: https://wow.gg/guides/wow-forever-tier-set-bonuses
[wowhb-relics]: https://wowhandbook.com/gear/relics/
[iv-overview]: https://www.icy-veins.com/wow-forever/shaman-class-overview
[wt-forever]: https://www.warcrafttavern.com/forever/guides/shaman/
[iv-pvp]: https://www.icy-veins.com/wow-forever/news/players-found-a-hidden-pvp-rule-in-wow-forever-that-halves-crit-bonuses/
[bug-71]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/71
[bug-163]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/163
[f-2366738]: https://us.forums.blizzard.com/en/wow/t/2366738
[f-2353745]: https://us.forums.blizzard.com/en/wow/t/2353745
[f-2362045]: https://us.forums.blizzard.com/en/wow/t/2362045
[f-2358173]: https://us.forums.blizzard.com/en/wow/t/2358173
[hunter-changes]: https://github.com/classic-hunter/forever-hunter/wiki/Forever-Beta-Changes
[wago-spell]: https://wago.tools/db2/Spell/csv?build=1.60.1.70170
