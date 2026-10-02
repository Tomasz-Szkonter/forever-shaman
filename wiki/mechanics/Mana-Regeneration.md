---
title: Mana Regeneration
description: How Shamans regain mana, covering Spirit, MP5, the five-second rule, Mana Spring and Mana Tide in Classic Era, plus WoW Forever's regen while casting (Mindfulness, Improved Stormstrike), Water Shield, Totemic Recall and cost reductions.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 💧 Mana Regeneration

How a Shaman gets mana back. In Classic, Shamans had **no way to regenerate from Spirit while casting**, so MP5 was king. WoW Forever adds regen while casting talents, **Water Shield**, a stronger Mana Tide at low level, and **Totemic Recall** refunds. This page covers the Classic rules first, then every Forever change.

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified. See [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

## 📑 Contents
- [Classic Baseline](#-classic-baseline)
- [In Forever](#️-in-forever)
- [Worked Examples](#-worked-examples)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

---

## 📜 Classic Baseline

### Spirit regeneration

- 🟡 **`15 + Spirit/5` mana every 2 seconds**, but **only outside the five-second rule** ([Warcraft Tavern mana guide][wt-mana]).
- 🔴 **Disputed constant:** [Blizzard Watch][bw] gives `Spirit/5 + 17`. With 100 Spirit that is 35 vs 37 mana per tick. We show 15 because the Warcraft Tavern table is the more detailed source, but neither is a primary source.
- Spirit also regenerates health: `0.11 × Spirit + 7` per tick ([Warcraft Tavern mana guide][wt-mana]).

### Five-second rule

- 🟡 The **five-second rule (5SR)**: Spirit regen **stops for 5 seconds after any completed spell that costs mana**, then resumes in 2-second ticks ([Warcraft Tavern mana guide][wt-mana]).
- A healer casting back to back never leaves the 5SR, so Spirit gives them almost nothing in combat.

### MP5

- 🟡 **MP5** (mana per 5 seconds, from gear) is paid in **2-second ticks at all times**: in combat, while casting, and inside the 5SR ([Warcraft Tavern mana guide][wt-mana]).
- 🟡 Shamans had **no talent** that allowed Spirit regen while casting (unlike Priest Meditation, Druid Reflection or Mage Armor). **MP5 was the Shaman healer stat** ([Warcraft Tavern mana guide][wt-mana]).

### Clearcasting and the 5SR

- 🟢 **Elemental Focus**: 10% chance after a Fire, Frost or Nature damage spell that your next damage spell costs no mana (Clearcasting, 15 s, 1 charge) ([Wowhead 16164][wh-ef-c]).
- 🟡 Free casts from Clearcasting **do not reset the 5SR** ([Warcraft Tavern mana guide][wt-mana]).

### Mana Spring in Classic

- 🟢 **Mana Spring Totem R4**: **10 mana every 2 s** (= 25 MP5) to party members within **20 yd**, lasting 1 min ([Wowhead 10497][wh-ms]; DB2 period 2000 ms).

### Mana Tide in Classic

- 🟢 **Mana Tide Totem** (Restoration 31-point talent): **290 mana every 3 s for 12 s** at R3, 5 min cooldown (R1 170, R2 230) ([Wowhead 17359][wh-mt]; DB2 period 3000 ms). That is about **1,160 mana per party member** at R3.
- 🔴 Whether it ticks **4 or 5 times** in 12 s is unverified.
- 🟡 Mana Tide, Mana Spring and Healing Stream generate **0 threat** ([Warcraft Tavern threat table][wt-threat]).

### Classic mana talents

| Talent | Effect | Conf. |
|---|---|---|
| Ancestral Knowledge (Enh) | +1% **max mana** per rank, 5 ranks | 🟢 [Wowhead 17487][wh-ak] |
| Tidal Focus (Resto) | −1% healing spell mana per rank, 5 ranks | 🟢 [wfts Classic comparison][wfts] |
| Totemic Focus (Resto) | −5% totem mana per rank, 5 ranks | 🟢 [wfts Classic comparison][wfts] |
| Convection (Ele) | −10% mana on Shocks, Lightning Bolt and Chain Lightning at 5/5 | 🟢 [Wowhead 16112][wh-conv] |
| Improved Reincarnation (Resto) | Reincarnation returns 20% → up to 40% health **and mana** | 🟢 [Wowhead 16209][wh-ir] |

---

## ♾️ In Forever

### Regen while casting

- 🔵 Across classes, Forever talents add **Spirit regen while casting**, which works around the 5SR. Blizzard's examples are Paladin *Reverence* ("allows Paladins to regenerate Mana from Spirit while casting") and several Hunter talents ([Blizzard Deep Dive][blz-dd]; [Blizzard Class Deep Dive][blz-class]).
- 🟡 Spirit still works like Classic outside the 5SR: "Spirit increases your Health and Mana Regeneration while out of combat and/or not casting" ([Warcraft Tavern stats][wt-stats]).
- Shaman sources of regen while casting:

| Source | Regen while casting | Uptime | Conf. |
|---|---|---|---|
| [Mindfulness](../talents/Restoration-Talents.md#mindfulness) (Resto row 2, 3 ranks) | **17/33/50%** | always | 🟢 |
| [Improved Stormstrike](../talents/Enhancement-Talents.md#improved-stormstrike) (Enh row 5, 2 ranks) | **50%** | 15 s after Stormstrike (50/100% chance) | 🟢 |
| Polished Driftwood Icon (relic, level 20) | **8%** | always | 🟢 |

### Mindfulness

- 🟢 **New Restoration talent**, row 2, 3 ranks: **17/33/50% of your mana regeneration continues while casting** ([wowforevertalents.com][wfts]; [wowforevertalent.com][wft]). The BlizzCon build showed 34/51% (rounding) ([wfts beta changes][wfts-beta]).
- 🟡 Guides call it "Meditation"-style. Druid Reflection is also 17/33/50%, and Priest Meditation 17% at rank 1 ([wow.gg Resto Shaman][wowgg-resto]; [kami-labs][kami-druid]). [wowforevertalents.com][wfts] and [wow.gg][wowgg-resto] disagree on the name (Mindfulness vs Meditation); we use the client-read name.
- 🟡 Popular **off-spec dip**: Elemental takes **8 points in Restoration** to reach Mindfulness ([Warcraft Tavern][wt-forever]; [Icy Veins][iv-overview]).

### Improved Stormstrike

- 🟢 **New Enhancement talent**, row 5, 2 ranks: when you Stormstrike, a **50/100% chance** to gain **50% mana regen while casting for 15 s**. It also gives Stormstrike's cooldown a 50/100% chance to reset on dodge or parry ([wfts][wfts]).
- 🟢 Stormstrike's cooldown is now **8 s**, so at 2/2 the 15 s buff can in principle be kept up permanently (derived) ([wfts][wfts]).
- 🟢 Before the current build, rank 2 gave **100% regen while casting for 30 s** ([wfts beta changes][wfts-beta]). Guides written before Sept 24 may show the old value.
- 🟡 Enhancement going **OOM** (out of mana) was reported from the level-38 BlizzCon demo, not the beta ([thread 2354160][f-2354160]).

### Polished Driftwood Icon

- 🟢 Totem relic, **required level 20**: "8% of mana regen continues while casting" ([WoWHandbook relics][wowhb-relics]). Shamans still use totems in the relic slot ([Warcraft Tavern][wt-forever]).

### Water Shield

🟢 **New Restoration talent** (row 3, 11-point). Data from [wfts][wfts], [wft][wft], [WCLBox][wcl-ws] and DB2 spell 408510 / proc 408511 ([wago SpellAuraOptions 70170][wago-auraopts]):

| Property | Value |
|---|---|
| Cast | Instant, **15 s cooldown** (DB2 category cooldown) |
| Duration | 10 min |
| Globes | 3 |
| Mana per globe | **2% of maximum mana** |
| Triggers | being hit by a **spell, melee or ranged** attack, **or one of your heals crits** |
| Internal cooldown (ICD) | **3.5 s** between globes (tooltip: "a few seconds") |
| Flat MP5 | **none** |
| Exclusivity | only one Elemental Shield at a time (so not with Lightning Shield) |

- An **ICD** (internal cooldown) is a hidden timer that stops a proc from firing again too soon.
- 🟡 **Bugs** (reported Sept 25 on Skyborne, confirmed on Tauren) ([thread 2361063][f-2361063]):
  - At 2 or 1 charges the buff tooltip reads "**1%** of maximum mana" instead of 2%.
  - The listed **15 s cooldown did not exist**; Water Shield was GCD-only.
  - The buff always says "3 charges".
- 🟡 The cooldown issue was filed as [forever-bugs #134][bug-134] ("Water Shield claims a cooldown") and marked **Fixed** on Oct 1. **Which way it was fixed is unclear**: the tooltip could have lost its cooldown, or a real 15 s cooldown could have been added. DB2 70170 still has the 15 s cooldown.
- 🔴 Whether the 1%-at-low-charges text means you **really** get 1% or is only a display bug is unknown.
- 🟡 Water Shield does nothing for Elemental's **damage** crits; only heal crits and being hit trigger it ([thread 2364061][f-2364061]).
- Because it scales with **max mana**, Ancestral Knowledge's +10% Intellect raises each globe too.

### Mana Spring Totem

- 🟢 Unchanged **4/6/8/10 mana every 2 s**, but range ~~20~~ → **30 yd** and duration ~~1 min~~ → **5 min** ([WCLBox Mana Spring][wcl-ms]).
- 🟢 [Restorative Totems](../talents/Restoration-Talents.md#restorative-totems) raises Mana Spring by **+5–25%** ([wfts][wfts]).

### Mana Tide Totem

🟢 Now a **16-point** Restoration talent (row 4), and trainable from level 25 ([WCLBox Mana Tide][wcl-mt]; [wfts][wfts]):

| Rank | Level | Mana cost | Mana per 3 s | Range |
|---|---|---|---|---|
| R1 | ~~40~~ → **25** | ~~20~~ → **10** | ~~170~~ → **88** | ~~20~~ → **30 yd** |
| R2 | 48 | ~~40~~ → **30** | ~~230~~ → **197** | 30 yd |
| R3 | 58 | 60 | **290** (unchanged) | 30 yd |

- 12 s duration, 5 min cooldown, 5 HP totem, group members within 30 yd.
- R1 restores much less than Classic R1 but arrives 15 levels earlier. R2 and R3 are above the level-30 beta cap and have **not been tested live**. See [Mana Tide Totem](../talents/Restoration-Talents.md#mana-tide-totem) and [Totems](../reference/Totems.md).

### Totemic Recall

- 🟢 **New baseline spell**, level 20, instant: "Returns your totems to the earth, giving you **25% of the mana** required to cast each totem destroyed by Totemic Recall" ([WCLBox Totemic Recall][wcl-tr]). Mana cost and cooldown are not listed.
- 🟡 **Bug history:** testers found it gave **0 mana back** ("tested it multiple times and you gain 0 mana back", confirmed by a second player) ([thread 2364054][f-2364054]; [forever-bugs #186][bug-186], closed Sept 30).
- 🔵 **Fixed Oct 1:** "Fixed an issue where Totemic Recall was not restoring Mana" ([dev notes][blz-notes]).
- 🟢 Build 70170 adds a hidden spell **1323420 "Totemic Recall"** that energizes mana with base 0, so the amount is probably computed by a script. It is most likely the fix ([wago Spell / SpellEffect 70170][wago-effect]). 🔴 That reading is our interpretation.
- 🟡 Recall uses a GCD; the old `/click TotemFrameTotemN RightButton` dismiss macro does nothing in Forever ([thread 2364945][f-2364945]).

### Totemic Focus and the Call spells

- 🟢 [Totemic Focus](../talents/Restoration-Talents.md#totemic-focus) (Resto row 1): ~~totem mana −5–25%~~ → mana cost of totems **and of spells that summon or move them** (Call of the Elements, Totemic Projection, and so on) −5/10/15/20/25% ([wfts][wfts]).
- 🟢 The **Call of the Elements / Ancestors / Spirits** spells place up to 4 Totem Bar totems in one **3 s cast** and list **no cost** of their own ([Wowhead 66842][wh-cote]; [WCLBox][wcl-index]). 🟢 **Totemic Projection** costs **25% of base mana** (230 mana in a preview) and has a 1 min cooldown ([WCLBox Projection][wcl-tp]; 🟡 [ForeverTome][forevertome]).

### Mana cost reductions

| Source | Effect | Conf. |
|---|---|---|
| Convection (Ele) | Shocks, LB, **Lava Burst**, CL mana −2–10% | 🟢 [wfts][wfts] |
| Shamanistic Focus (Enh, new) | Shocks and **Lightning Shield** mana **−45%** | 🟢 [wfts][wfts] |
| Tidal Focus (Resto) | healing spell mana −1–5% (plus hit) | 🟢 [wfts][wfts] |
| Elemental Focus (Ele) | Clearcasting, unchanged | 🟢 [wft][wft] |
| Maelstrom Weapon (Enh, new) | next Lightning Bolt's cast time and mana −4–20% per stack, 5 stacks (5/5 → free at 5 stacks, per-stack reading 🟡) | 🟢🟡 [wfts][wfts]; [Warcraft Tavern][wt-forever] |
| Firestorm Totem (relic) | totem mana −5% | 🟢 [WoWHandbook][wowhb-relics] |
| Windcarved Effigy (relic) | Lightning Bolt −5 mana | 🟢 [WoWHandbook][wowhb-relics] |
| Tidal Totem (relic, level 60) | Healing Wave mana −5% | 🟢 [WoWHandbook][wowhb-relics] |
| Spell rescale | Lightning Bolt R4+ and Chain Lightning cost about 17–20% less (e.g. LB R10 ~~265~~ → **220**) | 🟢 [WCLBox LB][wcl-lb] |

### Other mana sources

- 🟢 Ancestral Knowledge is now **+2–10% Intellect** (more max mana, plus AP/SP for Enhancement). See [Stat Mechanics](Stat-Mechanics.md#ancestral-knowledge).
- 🟢 Set bonuses: *The Elements* (D1) 6-piece **+8 MP5**; *The Five Thunders* (D2) 3-piece "mana regen"; *The Spiritcaller* (healing raid set) 2-piece **+10 Spirit** ([Wowhead item-set 187][wh-set187]; [wow.gg sets][wowgg-sets]).
- 🔵 Camp objects include a Tailor Faction Banner (Spirit) ([Blizzard Deep Dive][blz-dd]). 🟡 Herbalism Incense Candle gives Intellect, and camp buffs do not stack with class buffs ([Conquest Capped][cc-prof]).
- The downranking trick (cheap low ranks for efficiency) is weaker now: low ranks get less spell power. See [Spell Coefficients](Spell-Coefficients.md#downranking-penalty).

### Spirit-nerf claim

- 🔴 **Unverified:** a Mobalytics snippet claims Spirit regen while not casting is cut "across the board", while regen-while-casting talents are buffed so in-combat regen stays about the same. The page returned 403 and **no official source** confirms it ([Mobalytics, snippet only][moba]).

---

## 🧪 Worked Examples

**Derived arithmetic, not tests.** They assume the Classic Spirit formula still applies.

### Mindfulness with 100 Spirit

| Situation | Mana per 2 s tick (15 constant) | (17 constant) |
|---|---|---|
| Outside the 5SR | 15 + 100/5 = **35** | 37 |
| Casting, 0/3 Mindfulness | 0 | 0 |
| Casting, 3/3 Mindfulness (50%) | **17.5** | 18.5 |

### Water Shield upper bound

With **3,000 max mana**, each globe gives 2% = **60 mana**. If all three globes trigger as fast as the 3.5 s ICD allows and you recast on the 15 s cooldown, the ceiling is **3 × 60 = 180 mana per 15 s**, about **60 mana per 5 s**. In practice you need to be hit or land heal crits, so real returns are lower.

### Mana Tide per party member

| Rank | Per tick | 4 ticks | 5 ticks |
|---|---|---|---|
| R1 (88) | 88 | 352 | 440 |
| R3 (290) | 290 | 1,160 | 1,450 |

---

## 📋 Quick Reference

| Topic | Classic Era | Forever (70170) | Conf. (Forever) |
|---|---|---|---|
| Spirit regen | `15 (or 17) + Spi/5` per 2 s, outside 5SR | same (claimed nerf unverified) | 🟡 / 🔴 |
| 5-second rule | yes | yes, softened by talents | 🔵 |
| MP5 | 2 s ticks, always | no reported change | 🔴 |
| Regen while casting | **none** for Shaman | Mindfulness **17/33/50%**, Imp. Stormstrike **50%** (15 s), Driftwood Icon **8%** | 🟢 |
| Water Shield | — | 3 globes × 2% max mana, 15 s CD, 3.5 s ICD | 🟢 (bugs 🟡) |
| Mana Spring | 4/6/8/10 per 2 s, 20 yd, 1 min | same values, **30 yd, 5 min** | 🟢 |
| Mana Tide | 170/230/290 per 3 s, 20 yd, level 40 | **88/197/290**, **30 yd**, level **25** | 🟢 |
| Totemic Recall | — | 25% of each totem's mana (fixed Oct 1) | 🟢🔵 |
| Totemic Focus | totems only | totems + Call/Projection spells | 🟢 |
| Ancestral Knowledge | +5% max mana | **+10% Intellect** | 🟢 |
| Clearcasting and 5SR | free casts don't reset 5SR | no reported change | 🔴 |

---

## 🔍 To Verify

- [ ] **Spirit constant** (15 vs 17 + Spi/5) and whether Forever changed Spirit regen at all ([Warcraft Tavern][wt-mana] vs [Blizzard Watch][bw]; [Mobalytics snippet][moba]).
- [ ] **Do Mindfulness, Improved Stormstrike and the Driftwood Icon stack**, and how? Additive (up to 108%?) or capped at 100%? No source ([wfts][wfts]; [WoWHandbook][wowhb-relics]).
- [ ] **Does "mana regen while casting" include only Spirit regen**, or MP5-style effects like Mana Spring too? MP5 already ticks while casting in Classic.
- [ ] **Water Shield cooldown**: which way was forever-bugs #134 fixed, and is the 15 s cooldown live on 70170? ([bug #134][bug-134]; [wago 70170][wago-auraopts])
- [ ] **Water Shield 1% at low charges**: real reduced mana or tooltip only? Log max mana and gains per globe ([thread 2361063][f-2361063]).
- [ ] **Totemic Recall on 70170**: does it now refund 25%? Is the refund based on base cost or the Totemic Focus-reduced cost? What are its mana cost and cooldown? ([dev notes][blz-notes]; [wago][wago-effect])
- [ ] **Totemic Focus and Call of the Elements**: the Call spells list no cost. Does Totemic Focus reduce the totems placed by them? ([wfts][wfts])
- [ ] **Mana Tide tick count** (4 vs 5 in 12 s), in Classic and Forever ([Wowhead 17359][wh-mt]).
- [ ] **Clearcasting and the 5SR in Forever**: still no reset? ([Warcraft Tavern][wt-mana])
- [ ] **Mana Tide R2/R3 and Mana Spring R2+** are above the level-30 cap: client data only.

---

## 📚 Sources

- [Warcraft Tavern Classic mana guide][wt-mana]: Spirit formula, 5SR, MP5, Clearcasting
- [Blizzard Watch][bw]: alternative Spirit constant
- [Warcraft Tavern Classic threat table][wt-threat]: totem regen generates no threat
- Wowhead Classic: [Elemental Focus 16164][wh-ef-c], [Mana Spring 10497][wh-ms], [Mana Tide 17359][wh-mt], [Ancestral Knowledge 17487][wh-ak], [Convection 16112][wh-conv], [Improved Reincarnation 16209][wh-ir]
- [Blizzard: Forever Deep Dive panel recap][blz-dd], [Class Deep Dive: Hunter & Druid][blz-class]: regen-while-casting talents, camps
- [Blizzard: Beta Development Notes][blz-notes]: Totemic Recall fix (Oct 1)
- [wowforevertalents.com][wfts] and [beta changes][wfts-beta], [wowforevertalent.com][wft]: Mindfulness, Improved Stormstrike, Water Shield, Mana Tide, Totemic Focus, cost talents
- [WCLBox][wcl-index]: [Water Shield][wcl-ws], [Mana Spring][wcl-ms], [Mana Tide][wcl-mt], [Totemic Recall][wcl-tr], [Totemic Projection][wcl-tp], [Lightning Bolt][wcl-lb]
- [wago.tools SpellAuraOptions 70170][wago-auraopts], [SpellEffect 70170][wago-effect]: Water Shield cooldown and ICD, Totemic Recall helper spell
- [Wowhead Forever: Call of the Elements][wh-cote], [The Elements set][wh-set187]
- [WoWHandbook relics][wowhb-relics]: Polished Driftwood Icon and cost relics
- [wow.gg datamined set bonuses][wowgg-sets], [wow.gg Resto Shaman][wowgg-resto], [kami-labs Resto Druid][kami-druid]: sets, Mindfulness naming
- [Warcraft Tavern Forever Shaman guide][wt-forever], [Forever stats guide][wt-stats], [Icy Veins Shaman overview][iv-overview]: guides
- [ForeverTome][forevertome]: Totemic Projection preview cost
- [Conquest Capped: professions][cc-prof]: camp buffs
- [Mobalytics Shaman overview][moba]: unverified Spirit-nerf claim (snippet only)
- [forever-bugs #134][bug-134], [#186][bug-186]: Water Shield and Totemic Recall bugs
- Blizzard forum threads [2361063][f-2361063] (Water Shield bugs), [2364061][f-2364061] (Water Shield and Elemental), [2364054][f-2364054] (Totemic Recall), [2364945][f-2364945] (dismiss macro), [2354160][f-2354160] (Enhancement OOM)

[wt-mana]: https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/
[bw]: https://blizzardwatch.com/2019/06/17/wow-classic-primary-secondary-stats-attributes/
[wt-threat]: https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/
[wh-ef-c]: https://www.wowhead.com/classic/spell=16164
[wh-ms]: https://www.wowhead.com/classic/spell=10497
[wh-mt]: https://www.wowhead.com/classic/spell=17359
[wh-ak]: https://www.wowhead.com/classic/spell=17487
[wh-conv]: https://www.wowhead.com/classic/spell=16112
[wh-ir]: https://www.wowhead.com/classic/spell=16209
[blz-dd]: https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap
[blz-class]: https://worldofwarcraft.blizzard.com/en-gb/news/24301515
[blz-notes]: https://us.forums.blizzard.com/en/wow/t/2360696
[wfts]: https://wowforevertalents.com/shaman/
[wfts-beta]: https://wowforevertalents.com/beta/
[wft]: https://wowforevertalent.com/shaman/reference/
[wcl-index]: https://wowforever.wclbox.com/en/fashu/shaman
[wcl-ws]: https://wowforever.wclbox.com/en/fashu/shaman/calc-shaman-restoration-water-shield
[wcl-ms]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-mana-spring-totem
[wcl-mt]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-mana-tide-totem
[wcl-tr]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-totemic-recall
[wcl-tp]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-totemic-projection
[wcl-lb]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-bolt
[wago-auraopts]: https://wago.tools/db2/SpellAuraOptions/csv?build=1.60.1.70170
[wago-effect]: https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170
[wh-cote]: https://www.wowhead.com/forever/spell=66842/call-of-the-elements
[wh-set187]: https://www.wowhead.com/forever/item-set=187/the-elements
[wowhb-relics]: https://wowhandbook.com/gear/relics/
[wowgg-sets]: https://wow.gg/guides/wow-forever-tier-set-bonuses
[wowgg-resto]: https://wow.gg/guides/shaman-restoration-forever-overview
[kami-druid]: https://kami-labs.fr/en/wow-forever/build-druide-restauration-wow-forever/
[wt-forever]: https://www.warcrafttavern.com/forever/guides/shaman/
[wt-stats]: https://www.warcrafttavern.com/forever/guides/stats/
[iv-overview]: https://www.icy-veins.com/wow-forever/shaman-class-overview
[forevertome]: https://forevertome.com/guides/shaman
[cc-prof]: https://conquestcapped.com/guides/wow-forever/wow-forever-professions/
[moba]: https://mobalytics.gg/wow-forever/guides/shaman-class-overview
[bug-134]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/134
[bug-186]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/186
[f-2361063]: https://us.forums.blizzard.com/en/wow/t/2361063
[f-2364061]: https://us.forums.blizzard.com/en/wow/t/2364061
[f-2364054]: https://us.forums.blizzard.com/en/wow/t/2364054
[f-2364945]: https://us.forums.blizzard.com/en/wow/t/2364945
[f-2354160]: https://us.forums.blizzard.com/en/wow/t/2354160
