# WoW Forever: Shaman Baseline Spells, Totems, Weapon Imbues & Items

> Research date: **2026-10-02** (beta running Sept 17 – Oct 21 2026; launch Nov 4 2026).
> Scope: baseline (trainer) abilities, totems, weapon imbues, class quests, class items/sets. Talents only where they affect baseline spells.
> Notation: ~~Classic value~~ → **Forever value**.
> Confidence tags: 🔵 official Blizzard · 🟢 datamined / client data · 🟡 community guide / testing · 🔴 rumor / unclear / unreliable source.

**Client builds in sources:** beta `1.60.1.69893` (Sept 12–13 previews, per [ForeverTome](https://forevertome.com/guides/shaman)), `1.60.1.70009` (Sept 24 patch, per [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-bolt) / [ClassicWoWForever](https://classicwowforever.com/class-changes/shaman/)), `1.60.1.70170` (Oct 1 patch, per [ForeverChanges](https://foreverchanges.pro/spellbook/shaman)). The Classic comparison baseline is Classic Era `1.15.9.69722` ([ForeverChanges](https://foreverchanges.pro/spellbook/shaman)).

---

## TL;DR

1. **Totem overhaul (🔵/🟢):** new **Totem Bar** with three "multi-drop" spells: **Call of the Elements (L20), Call of the Ancestors (L30) and Call of the Spirits (L40)**. Each one places up to 4 preset totems in a single 3 s cast. There are also two new baseline spells, **Totemic Recall (L20)** and **Totemic Projection (L22)**. Most buff totems go ~~20 yd / 1–2 min~~ → **30 yd / 5 min**.
2. **Fire Nova Totem became the spell "Fire Nova"** (🟢). It is an instant nova centred on your active Fire totem, with a cooldown of ~~15 s~~ → **10 s**.
3. **Caster rescale (🟢):** Lightning Bolt goes ~~3.0 s~~ → **2.5 s** from rank 4 up. Chain Lightning goes ~~2.5 s~~ → **2.0 s**. Both cost less mana, but their **base damage is much lower** while spell-power coefficients rise at low ranks. Shocks lose about 40–45% of their base damage. Heals lose about 7–25% of base healing, with cast times unchanged.
4. **Weapon imbues (🟢):** all four last ~~5 min~~ → **60 min**. Flametongue Weapon and Windfury Weapon on the main hand now **disable your own Flametongue Totem / Windfury Totem benefit**.
5. **Totem stacking nerfs (🔵, Sept 24):** Windfury, Grace of Air and Tranquil Air Totems no longer stack, even when they come from different Shamans. Flametongue Totem no longer stacks with itself, Flametongue Weapon or Windfury Totem.
6. **Lava Burst, Riptide, Water Shield, Stormstrike and Mana Tide are talent-granted** (not baseline). Lava Burst and Riptide have 3 trainer ranks once talented (L40/50/60) (🟢).
7. **Tier sets (🟢):** new Hyjal T1-style sets (Spiritcaller / Spiritcaller's Rage / Spiritcaller's Storm). The Elements (D1) has been reworked. Earthfury and Ten Storms bonuses appear **unchanged** (see Conflicts).

---

## 1. New Baseline Abilities

| Spell | Level | Cost | Cast | CD | Effect | Conf. |
|---|---|---|---|---|---|---|
| **Call of the Elements** | 20 | none | 3 s | none (1.5 s GCD) | "Simultaneously places up to 4 totems specified in the Totem Bar." Schools Fire/Nature/Frost; can't be used while shapeshifted | 🟢 [Wowhead](https://www.wowhead.com/forever/spell=66842/call-of-the-elements), [WoWHandbook](https://wowhandbook.com/classes/shaman/), 🔵 confirmed in Blizzard class overview ([guided.news](https://guided.news/en/news/wow-forever-shaman-totem-systems-rogue-overhaul/)) |
| **Call of the Ancestors** | 30 | none | 3 s | none | Same as above, separate totem set | 🟢 [Wowhead](https://www.wowhead.com/forever/spell=66843/call-of-the-ancestors), [EndgameTools](https://endgametools.com/en/blog/wow-forever-shaman) |
| **Call of the Spirits** | 40 | none | 3 s | none | Same as above, third totem set | 🟢 [ForeverChanges](https://foreverchanges.pro/spellbook/shaman), [EndgameTools](https://endgametools.com/en/blog/wow-forever-shaman) |
| **Totemic Recall** | 20 | not listed | Instant | not listed | "Returns your totems to the earth, giving you 25% of the mana required to cast each totem destroyed by Totemic Recall." 1 rank | 🟢 [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-totemic-recall); mana-refund bug fixed Oct 1 🔵 [Blizzard dev notes](https://www.bluetracker.gg/wow/topic/us-en/2360696-wow-forever-beta-development-notes-updated-september-24/) |
| **Totemic Projection** | 22 | 25% of base mana (seen as **230 mana** in a preview) | Instant | 1 min | "Relocates your active totems to the specified location." 30 yd range | 🟢 [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-totemic-projection); 🟡 230 mana from Soda's stream via [ForeverTome](https://forevertome.com/guides/shaman) |
| **Fire Nova** (replaces Fire Nova Totem) | 12/22/32/42/52 (5 ranks) | same as Classic per rank (one preview shows **280 mana**) | Instant | ~~15 s~~ → **10 s** | "Instantly inflicts fire damage to enemies within 10 yd of your active Fire totem". Range ~~none~~ → **30 yd**. Classic version summoned a 5 HP totem lasting 5 s | 🟢 [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-fire-nova); 🟡 [ForeverTome](https://forevertome.com/guides/shaman) |

**Not baseline:** Water Shield, Riptide, Lava Burst, Stormstrike, Maelstrom Weapon, Rage of the Farseer, Mana Tide and Nature's Swiftness all come from talents ([ClassicWoWForever](https://classicwowforever.com/class-changes/shaman/), [WCLBox index](https://wowforever.wclbox.com/en/fashu/shaman)) 🟢. Elemental Mastery **is absent** from the beta tree, and no source shows it as a baseline spell ([ClassicWoWForever](https://classicwowforever.com/class-changes/shaman/), [GameSpot via Yahoo](https://tech.yahoo.com/gaming/articles/wow-forever-shaman-spells-class-153122479.html)) 🟡.

### Talent-granted spells with trainer ranks (for reference)

| Spell | Ranks (level) | Mana | Cast / CD | Values | Conf. |
|---|---|---|---|---|---|
| **Lava Burst** (Elemental 31-pt / row 7) | R1 40, R2 50, R3 60 | 165 / 230 / 265 | 2.5 s / 10 s, 30 yd | R1 **150–192**, R2 **180–230**, R3 **192–248** Fire; +20% if your Flame Shock is on the target | 🟢 [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-lava-burst), [ClassicWoWForever](https://classicwowforever.com/class-changes/shaman/). R1–2 buffed Sept 24 to "about 10% more base damage than the Lightning Bolt rank learned around the same level" 🔵 [Blizzard notes](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696) |
| **Riptide** (Resto row 7) | R1 40, R2 50, R3 60 | 245 / 300 / 385 | Instant / 6 s, 40 yd | R1 **486–534** + 445 over 15 s; R2 615–676 + 575; R3 **799–883** + 805. Chain Heal +25% when cast directly on that target | 🟢 [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-riptide). Crit fixed Sept 24 🔵 [Blizzard notes](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696) |
| **Water Shield** (Resto row 3) | 1 rank | — | Instant / 15 s; 10 min duration | 3 globes; spell, melee or ranged hit taken, or a healing crit, restores **2% max mana** per globe | 🟢 [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/calc-shaman-restoration-water-shield) |
| **Stormstrike** (Enh, moved ~~row 7~~ → **row 4**) | — | 125 mana | Instant / ~~20 s~~ → **8 s** | Weapon strike; next Lightning Bolt, Chain Lightning or Earth Shock deals +20% (12 s) | 🟢 [ClassicWoWForever](https://classicwowforever.com/class-changes/shaman/); 🟡 [classicwow.gg](https://classicwow.gg/forever/guides/shaman) |
| **Mana Tide Totem** (moved mid-tree) | R1 ~~40~~ → **25**, R2 48, R3 58 | ~~20~~ → **10** / ~~40~~ → **30** / 60 | 5 min CD, 12 s, ~~20~~ → **30 yd** | Per 3 s: R1 ~~170~~ → **88**, R2 ~~230~~ → **197**, R3 **290** (unchanged) | 🟢 [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-mana-tide-totem) |

---

## 2. Changed Baseline Spells

### 2a. Global note: base damage down, coefficients up 🟢/🟡

- Forever caster spells use **lower base values with higher spell-power coefficients at low ranks**. For example, Lightning Bolt R1 has a coefficient of ~~12.3%~~ → **42.9%** and R2 ~~31.4%~~ → **57.1%** ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-bolt)) 🟢.
- 🔵 **Official context:** bonus healing now also grants **1/3 as much bonus damage**. Caster weapons now carry spell power. Wands no longer scale with spell damage as of Sept 24 ([wofwforever](https://wofwforever.com/en/guides/wow-forever-spell-power-scaling/), citing the Deep Dive panel of Sept 13 and the Sept 24 notes).
- 🔴 "A general cut to spell base damage" is described as a **player claim, not a Blizzard statement** ([wofwforever](https://wofwforever.com/en/guides/wow-forever-spell-power-scaling/)). One forum post estimates Elemental needs **700+ spell power** to match Classic baseline damage ([Blizzard forums "Please fix shamans"](https://us.forums.blizzard.com/en/wow/t/please-fix-shamans/2365290), Sept 28–30) 🟡.

### 2b. Lightning Bolt (10 ranks, L1–56) 🟢

Sources: [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-bolt); R10 cross-checked with [Wowhead R10 (15208)](https://www.wowhead.com/forever/spell=15208/lightning-bolt), which shows 220 mana, 2.5 s, value 197, **SP mod 0.714**.

| Rank | Lvl | Mana | Cast | Damage | SP coeff |
|---|---|---|---|---|---|
| 1 | 1 | 15 | 1.5 s | 15–17 | ~~12.3%~~ → **42.9%** |
| 2 | 8 | 30 | 2.0 s | ~~28–33~~ → **29–34** | ~~31.4%~~ → **57.1%** |
| 3 | 14 | 45 | 2.5 s | ~~48–57~~ → **44–52** | ~~55.4%~~ → **71.4%** |
| 4 | 20 | ~~75~~ → **60** | ~~3.0~~ → **2.5 s** | ~~88–100~~ → **55–63** | ~~85.7%~~ → **71.4%** |
| 5 | 26 | ~~105~~ → **85** | ~~3.0~~ → **2.5 s** | ~~131–149~~ → **71–80** | ~~85.7%~~ → **71.4%** |
| 6 | 32 | ~~135~~ → **110** | ~~3.0~~ → **2.5 s** | ~~179–202~~ → **108–122** | 71.4% |
| 7 | 38 | ~~165~~ → **135** | ~~3.0~~ → **2.5 s** | ~~235–264~~ → **142–160** | 71.4% |
| 8 | 44 | ~~195~~ → **160** | ~~3.0~~ → **2.5 s** | ~~291–326~~ → **158–176** | 71.4% |
| 9 | 50 | ~~230~~ → **190** | ~~3.0~~ → **2.5 s** | ~~357–400~~ → **173–193** | 71.4% |
| 10 | 56 | ~~265~~ → **220** | ~~3.0~~ → **2.5 s** | ~~428–477~~ → **190–211** | ~~85.7%~~ → **71.4%** |

- 🔵 Sept 24: "Damage on ranks 3 and 4 increased to make these spells always upgrades over previous ranks" ([Blizzard notes](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696)). Another source quotes R3 as **41–49** and R4 as **52–60**, which are probably pre-patch values (see Conflicts).
- The 2.5 s max-rank cast is also reported by GameSpot ([via Yahoo](https://tech.yahoo.com/gaming/articles/wow-forever-shaman-spells-class-153122479.html)) 🟡 and seen on stream (R7, 135 mana) ([ForeverTome](https://forevertome.com/guides/shaman)) 🟡.

### 2c. Chain Lightning (4 ranks, L32–56) 🟢

Sources: [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-lightning); R4 cross-checked with [Wowhead (10605)](https://www.wowhead.com/forever/spell=10605/chain-lightning), which shows 485 mana, 2 s, 6 s CD, value 124, SP mod 0.571.

| Rank | Lvl | Mana | Cast | Damage |
|---|---|---|---|---|
| 1 | 32 | ~~280~~ → **225** | ~~2.5~~ → **2 s** | ~~200–227~~ → **85–97** |
| 2 | 40 | ~~380~~ → **305** | ~~2.5~~ → **2 s** | ~~288–323~~ → **97–109** |
| 3 | 48 | ~~490~~ → **390** | ~~2.5~~ → **2 s** | ~~391–438~~ → **109–122** |
| 4 | 56 | ~~605~~ → **485** | ~~2.5~~ → **2 s** | ~~505–564~~ → **119–133** |

Cooldown stays 6 s, range 30 yd, 3 targets. Coefficient ~~71.4%~~ → **57.1%** (WCLBox prints "57.1%–51.7%") 🟢. ⚠ The base-damage cut (roughly −76% at R4) is far deeper than Lightning Bolt's (−56%). See Conflicts.

### 2d. Shocks 🟢 ([WCLBox Earth](https://wowforever.wclbox.com/en/fashu/shaman/shaman-earth-shock), [Flame](https://wowforever.wclbox.com/en/fashu/shaman/shaman-flame-shock), [Frost](https://wowforever.wclbox.com/en/fashu/shaman/shaman-frost-shock))

Mana costs, cooldowns (6 s) and levels are unchanged.

| Spell / Rank (lvl) | Classic | Forever |
|---|---|---|
| Earth Shock R1 (4) | ~~19–22~~ | **20–21** (SP ~~15.4%~~ → **38.6%**) |
| Earth Shock R3 (14) | ~~65–69~~ | **52–55** |
| Earth Shock R5 (36) | ~~235–249~~ | **135–142** |
| Earth Shock R7 (60), 450 mana, 20 yd | ~~517–545~~ | **293–309** (SP mod 0.386, [Wowhead](https://www.wowhead.com/forever/spell=10414/earth-shock)) |
| Flame Shock R1 (10), 55 mana | ~~25~~ + 28 DoT | **24** + 28 DoT |
| Flame Shock R3 (28) | ~~95 + 96~~ | **49 + 56** |
| Flame Shock R6 (60), 410 mana | ~~292 + 320~~ over 12 s | **166 + 176** over 12 s |
| Frost Shock R1 (20), 115 mana | ~~95–101~~ | **68–73** |
| Frost Shock R4 (58), 430 mana | ~~492–520~~ | **279–295** (50% slow, 8 s, unchanged) |

### 2e. Heals 🟢 (cast times and mana unchanged)

**Healing Wave** (10 ranks) ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-healing-wave); R10 per [Wowhead (25357)](https://www.wowhead.com/forever/spell=25357/healing-wave): 620 mana, **3 s**, value 1616, SP mod 0.857)

| Rank | Lvl | Mana | Cast | Heal | SP coeff |
|---|---|---|---|---|---|
| 1 | 1 | 25 | 1.5 s | ~~36–47~~ → **37–47** | ~~12.3%~~ → **42.9%** |
| 2 | 6 | 45 | 2 s | 69–83 | ~~27.1%~~ → **57.1%** |
| 3 | 12 | 80 | 2.5 s | ~~136–163~~ → **127–150** | ~~50%~~ → **71.4%** |
| 4 | 18 | 155 | 3 s | ~~279–328~~ → **246–289** | ~~79.3%~~ → **85.7%** |
| 5 | 24 | 200 | 3 s | ~~389–454~~ → **329–382** | — |
| 6 | 32 | 265 | 3 s | ~~552–639~~ → **465–536** | — |
| 7 | 40 | 340 | 3 s | ~~759–874~~ → **656–753** | — |
| 8 | 48 | 440 | 3 s | ~~1040–1191~~ → **929–1062** | — |
| 9 | 56 | 560 | 3 s | ~~1389–1583~~ → **1277–1455** | — |
| 10 | 60 | 620 | 3 s | ~~1620–1850~~ → **1508–1722** | 85.7% |

**Lesser Healing Wave** (6 ranks, L20–60, 1.5 s, 105–380 mana): R1 ~~170–195~~ → **151–172**; R6 ~~832–928~~ → **775–865** ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-lesser-healing-wave)) 🟢.

**Chain Heal** (3 ranks, 2.5 s, 3 targets, 50% falloff per jump): R1 (40) ~~332–381~~ → **246–281**; R2 (46) ~~419–479~~ → **326–372**; R3 (54) ~~567–646~~ → **474–539** ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-heal)) 🟢.

### 2f. Utility and other spells

| Spell | Change | Conf. |
|---|---|---|
| **Lightning Shield** (7 ranks, L8–56) | Damage per orb: R2 ~~29~~ → **24**, R3 ~~51~~ → **40**, R4 ~~80~~ → **64**, R5 ~~114~~ → **96**, R6 ~~154~~ → **134**, R7 ~~198~~ → **178**. 3 orbs, 10 min, mana unchanged. Tooltip says it triggers on spell, melee or ranged hits | 🟢 [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-shield), [ForeverChanges](https://foreverchanges.pro/spellbook/shaman) |
| **Ghost Wolf** (L20) | **Unchanged baseline**: 100 mana, 3 s cast, +40% speed, outdoors only. Indoor use comes from the **Improved Ghost Wolf** talent. Oct 1: "should now be more visible while in well-lit areas" | 🟢 [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-ghost-wolf); 🟢 talent [ClassicWoWForever](https://classicwowforever.com/class-changes/shaman/); 🔵 [Blizzard notes](https://www.bluetracker.gg/wow/topic/us-en/2360696-wow-forever-beta-development-notes-updated-september-24/) |
| **Reincarnation** (L30) | Unchanged: 1 h CD, 20% health/mana, **still requires Ankh (1)** | 🟢 [Wowhead](https://www.wowhead.com/forever/spell=20608/reincarnation), [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-reincarnation) |
| **Purge** (2 ranks, L12/32) | Unchanged | 🟢 [ForeverChanges](https://foreverchanges.pro/spellbook/shaman) |
| **Astral Recall** (L30), **Far Sight** (L26), **Water Walking** (L28), **Water Breathing** (L22), **Cure Poison** (L16), **Cure Disease** (L22), **Ancestral Spirit** (5 ranks) | Unchanged | 🟢 [ForeverChanges](https://foreverchanges.pro/spellbook/shaman), [WCLBox index](https://wowforever.wclbox.com/en/fashu/shaman) |

---

## 3. Totems

### 3a. System-level changes

- **Totem Bar plus 3 Call spells, Recall and Projection**: see section 1. 🔵 confirmed in the Blizzard class overview video ([guided.news](https://guided.news/en/news/wow-forever-shaman-totem-systems-rogue-overhaul/)).
- **Range ~~20 yd~~ → 30 yd and duration ~~2 min (1 min for Healing Stream / Mana Spring)~~ → 5 min** for most buff and utility totems 🟢 ([ForeverChanges](https://foreverchanges.pro/spellbook/shaman), [GameSpot via Yahoo](https://tech.yahoo.com/gaming/articles/wow-forever-shaman-spells-class-153122479.html)). Resistance totems now affect "**party and raid members**" ([ForeverTome](https://forevertome.com/guides/shaman)) 🟡.
- 🔵 **Sept 24 stacking rules** ([Blizzard notes](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696), [mobalytics](https://mobalytics.gg/wow-forever/guides/patch-notes-september-24)):
  - "Tranquil Air Totem, Windfury Totem, and Grace of Air Totem no longer stack together even if used by different Shamans in the same group."
  - Flametongue Totem "no longer has a duration and is instantly replaced when placing another totem". It also can no longer be stacked by recasting, and no longer stacks with Flametongue Weapon or Windfury Totem.
  - Buff names now read "Windfury Totem" (not "…Passive") and "Flametongue Totem" (not "…Effect").
- Totem relics (new items) modify totems. See section 5.

### 3b. Per-totem table

All values are client data 🟢 from WCLBox / ForeverChanges unless noted. ✔ = unchanged from Classic.

| Totem | Element | Ranks (lvls) | Classic → Forever | Source |
|---|---|---|---|---|
| **Stoneskin** | Earth | 6 (4/14/24/34/44/54) | Range ~~20~~ → **30 yd**, ~~2~~ → **5 min**; "melee" → "Physical" damage; reduction 4/7/11/16/22/30 ✔ | [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-stoneskin-totem) |
| **Earthbind** | Earth | 1 (6) | ✔ 45 s, 10 yd slow | [ForeverChanges](https://foreverchanges.pro/spellbook/shaman) |
| **Stoneclaw** | Earth | 6 (8–58) | ✔ | [ForeverChanges](https://foreverchanges.pro/spellbook/shaman) |
| **Strength of Earth** | Earth | 5 (10/24/38/52/60) | ~~20~~ → **30 yd**, ~~2~~ → **5 min**; Str ~~10/20/36/61/77~~ → **7/14/25/42/53** (about −30%) | [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-strength-of-earth-totem) |
| **Tremor** | Earth | 1 (18), 60 mana | ~~2~~ → **5 min**; 30 yd | [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-tremor-totem) |
| **Searing** | Fire | 6 (10–60) | ✔ (30–55 s, 20 yd, R6 40–54) | [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-searing-totem) |
| **Fire Nova** | Fire, now a spell | 5 | See section 1 | [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-fire-nova) |
| **Magma** | Fire | 4 (26–56) | R4 ~~75~~ → **73** per 2 s; 20 s, 8 yd | [ForeverChanges](https://foreverchanges.pro/spellbook/shaman) |
| **Frost Resistance** | Fire | 3 (24–54) | ~~20~~ → **30 yd**, ~~2~~ → **5 min**, +60 at R3 | [ForeverChanges](https://foreverchanges.pro/spellbook/shaman) |
| **Flametongue** | Fire | 4 (28/38/48/58), 90–275 mana | ~~20~~ → **30 yd**, ~~2~~ → **5 min**; R1 ~~6.4–19.6~~ → **6.12–22**, R4 ~~15.8–48.7~~ → **17–55**; non-stacking (🔵 Sept 24) | [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-flametongue-totem) |
| **Healing Stream** | Water | 5 (20/30/40/50/60), 40–80 mana | ~~1~~ → **5 min**, ~~20~~ → **30 yd**; per 2 s heal: R1 ~~6~~ → **5**, R2 ~~8~~ → **6**, R3 ~~10~~ → **7**, R4 ~~12~~ → **9**, R5 ~~14~~ → **11** | [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-healing-stream-totem) |
| **Poison Cleansing** | Water | 1 (22) | ~~20~~ → **30 yd**, ~~2~~ → **5 min** | [ForeverChanges](https://foreverchanges.pro/spellbook/shaman) |
| **Mana Spring** | Water | 4 (26/36/46/56), 40–100 mana | ~~1~~ → **5 min**, ~~20~~ → **30 yd**; 4/6/8/10 mana per 2 s ✔ | [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-mana-spring-totem) |
| **Fire Resistance** | Water | 3 (28–58) | ~~20~~ → **30 yd**, ~~2~~ → **5 min**, +60 at R3 | [ForeverChanges](https://foreverchanges.pro/spellbook/shaman) |
| **Disease Cleansing** | Water | 1 (38) | ~~20~~ → **30 yd**, ~~2~~ → **5 min** (the 5 min duration was bugged until the Oct 1 fix 🔵) | [ForeverChanges](https://foreverchanges.pro/spellbook/shaman), [Blizzard notes](https://www.bluetracker.gg/wow/topic/us-en/2360696-wow-forever-beta-development-notes-updated-september-24/) |
| **Mana Tide** | Water (talent) | 3 | See section 1 | [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-mana-tide-totem) |
| **Grounding** | Air | 1 (30) | ✔ 45 s, 1 spell per 10 s | [ForeverChanges](https://foreverchanges.pro/spellbook/shaman) |
| **Nature Resistance** | Air | 3 (30–60) | ~~20~~ → **30 yd**, ~~2~~ → **5 min**, +60 at R3 | [ForeverChanges](https://foreverchanges.pro/spellbook/shaman) |
| **Windfury** | Air | 3 (32/42/52) | ~~20~~ → **30 yd**, ~~2~~ → **5 min**; AP ~~122/229/315~~ → **95/179/246** (about −22%); 20% chance of 1 extra main-hand attack; no stacking with Grace of Air or Tranquil Air (🔵) | [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-windfury-totem) |
| **Sentry** | Air | 1 (34) | ✔ | [ForeverChanges](https://foreverchanges.pro/spellbook/shaman) |
| **Windwall** | Air | 3 (36–56) | ~~20~~ → **30 yd**, ~~2~~ → **5 min**; R3 −64 ranged damage | [ForeverChanges](https://foreverchanges.pro/spellbook/shaman) |
| **Grace of Air** | Air | 3 (42/56/60), 155/250/310 mana | ~~20~~ → **30 yd**, ~~2~~ → **5 min**; Agi **buffed** ~~43/67/77~~ → **49/77/89** | [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-grace-of-air-totem) |
| **Tranquil Air** | Air | (50) | ⚠ **Listed as "not in Forever"** in the client diff, and the [Wowhead Forever page returns 404](https://www.wowhead.com/forever/spell=25908/tranquil-air-totem). Blizzard's Sept 24 notes still reference it | 🔴 see Conflicts |

### 3c. Totem tools and class quests

- **Totem items and quests still exist.** Earth unlocks at **L4**, Fire at **L10**, Water at **L20** and Air at **L30** 🟡 ([Warcraft Tavern Dwarf totem quests](https://www.warcrafttavern.com/forever/guides/dwarf-shaman-totem-quests/), [Warcraft Tavern shaman guide](https://www.warcrafttavern.com/forever/guides/shaman/)).
- **New Dwarf Shaman quest chain** (Alliance, new race) 🟡 ([Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/dwarf-shaman-totem-quests/)):
  - *Call of Earth* (L4): Teo Hammerstorm, Anvilmar. Collect 2 Iceclaw Bear Pendants, drink Earth Sapta at the Spirit Stone, kill the Minor Manifestation of Earth. Rewards **Earth Totem** and Stoneskin Totem.
  - *Call of Fire* (L10): Bruegs Kindleborn (Dun Morogh) and Braldir Ashmantle (Loch Modan). Collect Fire Tar and a Reagent Pouch, drink Fire Sapta, kill the Minor Manifestation of Fire. Rewards **Fire Totem** and Searing Totem. Mobs go up to L14.
  - *Call of Water* (L20): Norric Lochthane (Loch Modan) and Hervdana Saegrund (Wetlands). Collect water samples in Wetlands, Redridge and Ashenvale, drink Water Sapta at the Forgotten Shrine, kill the Corrupt Minor Manifestation of Water. Rewards **Water Totem** and Healing Stream Totem. Takes about 2 h of travel.
  - *Call of Air* (L30): not yet documented.
- **Skyborne (Horde, new race) *Call of the Earth*:** steal a ring for a cultist, drink a sapta, fight an earth elemental at a stone, then receive a shard to craft the totem. Players called it thematically weak, and no blue reply was seen ([Blizzard forums](https://us.forums.blizzard.com/en/wow/t/call-of-the-earth-disappointing-skyborne-quest/2365329)) 🟡.
- No source states whether Forever replaced the four totem items with a single tool, or whether they still occupy bag slots. ❓

---

## 4. Weapon Imbues

All imbues go ~~5 min~~ → **60 min**. Mana and levels are unchanged 🟢.

| Imbue | Ranks (lvls) | Classic → Forever | Source |
|---|---|---|---|
| **Rockbiter Weapon** | 7 (1/8/16/24/34/44/54) | **Only the duration changed.** AP +50/79/118/194/355/522/653 ✔; still "allowing melee attacks to cause additional threat" | 🟢 [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-rockbiter-weapon) |
| **Flametongue Weapon** | 6 (10–56) | Damage slightly lower: R1 ~~5.7–17.6~~ → **4.71–18**, R6 ~~36.5–112.4~~ → **35–112** (scales with weapon speed). **New clause:** on the main hand it "disables any benefit you personally receive from Flametongue Totem" | 🟢 [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-flametongue-weapon) |
| **Frostbrand Weapon** | 5 (20/28/38/48/58) | Frost damage ~~48/77/124/166/187~~ → **45/72/117/159/169**; 25% slow for 8 s ✔ | 🟢 [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-frostbrand-weapon) |
| **Windfury Weapon** | 4 (30/40/50/60), 90–165 mana | 20% chance of **2 extra attacks** ✔; AP R1 104 … R2 ~~222~~ → **221**, R3 ~~316~~ → **315**, R4 333. **New clause:** on the main hand it "disables any benefit you personally receive from Windfury Totem" | 🟢 [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-windfury-weapon) |

- No source reports a change to the proc rate or internal cooldown of Windfury Weapon or Totem. The data shows a flat 20% chance in both cases. ❓
- **Talent interaction:** Elemental Weapons (3 ranks) gives Rockbiter AP up to +20%, Windfury up to +40%, and Flametongue / Frostbrand damage up to +15%. It does **not** affect Windfury Totem 🟡 ([classicwow.gg](https://classicwow.gg/forever/guides/shaman)).

---

## 5. Items: Relics, Sets, Class Items

### 5a. New totem relics (relic slot) 🟢 ([WoWHandbook relics](https://wowhandbook.com/gear/relics/); count also given as "8 Shaman totems among 25 new relics" in search summaries of [wow.gg](https://wow.gg/guides/wow-forever-tier-set-bonuses)/[WoWHandbook](https://wowhandbook.com/gear/relics/))

| Totem | Req. lvl | Equip effect |
|---|---|---|
| Firestorm Totem | any | Totem mana cost −5% |
| Windcarved Effigy | any | Lightning Bolt −5 mana |
| Polished Driftwood Icon | 20 | 8% of mana regen continues while casting |
| Totem of Ancestral Protection | 40 | Grounding Totem CD −1 s |
| Burning Totem | 60 | Flame Shock duration +3 s |
| Tidal Totem | 60 | Healing Wave mana −5% |
| Totem of the Storm | 60 | Lightning Bolt can trigger Maelstrom Weapon at 50% reduced chance |
| Totem of Urgency | 60 | Lesser Healing Wave crit +4% |
| Totem of Elders | ? | Fire Nova extends Flame Shock by 1 s (+2 s more vs Beasts) |
| Totem of the Undergrove | ? | Shocks vs Undead reduce Stormstrike CD by 0.5 s |

### 5b. Set bonuses

- **New raid sets (Hyjal, mail, 5-pc)** 🟢 ([wow.gg datamined, 2026-09-17](https://wow.gg/guides/wow-forever-tier-set-bonuses), [WoWHandbook](https://wowhandbook.com/gear/shaman/)):
  - *The Spiritcaller* (heal): 2 = +10 Spirit; 3 = Fire/Water totem radius +10 yd; 4 = +26 healing / +9 damage; 5 = **Riptide CD −1 s**.
  - *The Spiritcaller's Rage* (enh): 2 = +1% attack and cast speed; 3 = Air/Earth totem radius +10 yd; 4 = +36 AP vs Elementals; 5 = **Stormstrike CD −0.5 s**.
  - *The Spiritcaller's Storm* (ele): 2 = +1% hit; 3 = Earthbind CD −2 s; 4 = +21 spell damage vs Elementals; 5 = **Lava Burst CD −1 s**.
- **The Elements (D1, 8 items)**, reworked 🟢 ([Wowhead Forever item-set 187](https://www.wowhead.com/forever/item-set=187/the-elements)): 2 = +8 all resistances; 3 = +18 spell damage/healing; 4 = 5% chance on being struck in melee to disarm the attacker for 4 s (once per 60 s); 5 = chance on melee or spellcast for +65 spell damage/healing for 10 s; 6 = +8 mp5. wow.gg lists the removed Classic bonuses as 2 = +200 armor, 4 = +23 spell damage, 6 = "The Furious Storm".
- **The Five Thunders (D2)**, reworked 🟢 ([wow.gg](https://wow.gg/guides/wow-forever-tier-set-bonuses)): 2 = +8 all resistances; 3 = mana regen; 5 = "Electrocute"; 6 = +23 spell damage. Removed: 2 = +40 AP/+23 SD/+44 heal and 8 = +200 armor. [WoWHandbook](https://wowhandbook.com/gear/shaman/) instead lists a new "chance on spell cast to increase your damage and healing by up to 65 for 10 sec".
- **Stormcaller's Garb (AQ40)** 🟡 ([WoWHandbook](https://wowhandbook.com/gear/shaman/)): LB/CL/Shock casts have a 20% chance to grant +50 Nature damage for 8 s; Chain Heal cast time −0.4 s.
- **The Earthfury (T1)** and **The Ten Storms (T2)**: 🔴 WoWHandbook labels them "changed", but the bonuses it lists **match the Classic text word for word** ([Wowhead Classic Earthfury](https://www.wowhead.com/classic/item-set=207/the-earthfury), [Wowhead Classic Ten Storms](https://www.wowhead.com/classic/item-set=216/the-ten-storms)). The Wowhead Forever pages ([207](https://www.wowhead.com/forever/item-set=207/the-earthfury), [216](https://www.wowhead.com/forever/item-set=216/the-ten-storms)) list 8 items but would not render bonuses for this research. Most likely unchanged. Note that the Earthfury 3-pc ("totem radius increased to 30 yd") would be **redundant** now that Forever totems are 30 yd baseline.
- **PvP sets** 🟡: new variants such as "Thunderfist" (+23 spell damage/healing) and "Wartide", plus standardized shock-crit bonuses ([WoWHandbook](https://wowhandbook.com/gear/shaman/)). Low detail.

### 5c. Proficiencies

Mail is still learned at **L40**. Weapons: one- and two-hand axes and maces, staves, fist weapons, daggers, shields, and relic-slot totems ([Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/)) 🟡.

---

## 6. Trainer and Rank Changes

- **Rank counts are identical to Classic** for every spell checked (LB 10, CL 4, HW 10, LHW 6, CH 3, ES 7, FS 6, FrS 4, imbues 7/6/5/4). **Learn levels are also unchanged**, except Mana Tide R1 ~~40~~ → **25** (talent moved) 🟢 ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman), [ForeverChanges](https://foreverchanges.pro/spellbook/shaman)).
- **New trainer spells:** Call of the Elements (20), Totemic Recall (20), Totemic Projection (22), Call of the Ancestors (30), Call of the Spirits (40). Fire Nova Totem was converted to Fire Nova at the same levels (12/22/32/42/52) 🟢.
- **Talent ranks trained:** Lava Burst and Riptide each have R1 at L40, R2 at L50 and R3 at L60 🟢.
- **Diff totals** (ForeverChanges / WCLBox, 56 spells): **5 new, 29 changed, 1 removed (Tranquil Air)** 🟢. GameSpot counts "16 new spells/talents, 95 modified, 8 talents removed". Its methodology is different because talents are included 🟡 ([GameSpot via Yahoo](https://tech.yahoo.com/gaming/articles/wow-forever-shaman-spells-class-153122479.html)).
- **Beta level cap:** a level-30 cap was announced for an upcoming beta update ([classicwow.gg](https://classicwow.gg/forever/guides/shaman)) 🟡. This means L30+ spells have not been tested live. Their values are client data only.

---

## Conflicts / Open Questions

1. **Tranquil Air Totem existence.** The client diff says it is "not in Forever" ([ForeverChanges](https://foreverchanges.pro/spellbook/shaman), [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman)), and Wowhead Forever returns 404. Yet Blizzard's Sept 24 notes explicitly add stacking rules for it ([Blizzard](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696)). Possible explanations: it was removed from the trainer list but not the code; it was not yet exported; or it moved to a talent or relic. 🔴
2. **Lava Burst R1 damage.** Sources give **150–192** ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-lava-burst), [ClassicWoWForever](https://classicwowforever.com/class-changes/shaman/)) and **143–185** ([EndgameTools](https://endgametools.com/en/blog/wow-forever-shaman)). The second is probably the pre-Sept 24 value, but the +5% gap does not match Blizzard's "about 10%" framing, which compares against Lightning Bolt rather than the old value.
3. **Riptide R1.** Sources give **486–534** (WCLBox), **485–533** ([ClassicWoWForever](https://classicwowforever.com/class-changes/shaman/)) and **456–504** ([EndgameTools](https://endgametools.com/en/blog/wow-forever-shaman)). The HoT is 445 in every source. Riptide is listed as 1 rank by EndgameTools and 3 ranks by WCLBox.
4. **Lightning Bolt R3/R4 post-buff.** WCLBox gives 44–52 / 55–63, while a search-indexed source gives 41–49 / 52–60. The latter is likely the pre-buff value. Odd detail: even after the "buff", R3 (44–52) stays **below** Classic R3 (48–57) at the same 2.5 s cast.
5. **Chain Lightning base damage** (R4 119–133, Wowhead value 124) is cut proportionally much harder than Lightning Bolt. This could be a deliberate redesign or a data-reading error. Live verification is needed.
6. **Fire Nova R1 damage.** Sources give 53–62 (WCLBox, "identical to Classic") and 48–56 ([EndgameTools](https://endgametools.com/en/blog/wow-forever-shaman)). Max-rank figures vary from 396–442 to 412 to 413–459 across [EndgameTools](https://endgametools.com/en/blog/wow-forever-shaman), [WoWHandbook](https://wowhandbook.com/classes/shaman/) and [ForeverChanges](https://foreverchanges.pro/spellbook/shaman). The rank-to-number mapping is unclear.
7. **Healing Wave cast time.** One search summary claimed "Healing Wave changed to 1.5 s". Client data ([Wowhead](https://www.wowhead.com/forever/spell=25357/healing-wave)) shows **3 s** at R10. The claim is treated as false.
8. **Ghost Wolf.** GameSpot implies a baseline cast reduction plus indoor use. Client data shows the baseline is unchanged and indoor use comes from the Improved Ghost Wolf talent ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-ghost-wolf), [ClassicWoWForever](https://classicwowforever.com/class-changes/shaman/)).
9. **Flametongue Totem "no longer has a duration".** This conflicts with the 5 min duration in client data. It probably refers to the **buff on players** (it persists until replaced), not to the totem itself.
10. **Elemental Fury / Elemental Alacrity rows.** The Blizzard note text reads "Swapped … Elemental Fury (Row 3) and Elemental Alacrity (Row 6)". Guides interpret the result as Alacrity → row 3 and Fury → row 6. This is in scope only because it affects LB/CL/LvB cast times.
11. **Earthfury / Ten Storms**: see 5b. They are likely unchanged, which would make the Earthfury 3-pc redundant.
12. **Totem items**: still four separate items, or one tool? There is no data.
13. **Totemic Recall** mana cost and cooldown are not listed in any source.

## Known Beta Bugs (reported / fixed)

- **Totemic Recall not restoring mana.** Fixed Oct 1 🔵 ([Blizzard notes](https://www.bluetracker.gg/wow/topic/us-en/2360696-wow-forever-beta-development-notes-updated-september-24/)).
- **Disease Cleansing Totem not lasting 5 min.** Fixed Oct 1 🔵 (same source).
- **Ghost Wolf hard to see in well-lit areas.** Visibility improved Oct 1 🔵 (same source).
- **Riptide could not crit.** Fixed Sept 24 🔵 ([Blizzard notes](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696)).
- **Flametongue Totem stacking by recasting, and stacking with FT Weapon / WF Totem.** Fixed Sept 24 🔵 (same).
- **Windfury / Flametongue Totem buffs displayed as "Passive" / "Effect".** Fixed Sept 24 🔵 (same).
- Player complaints (not bugs): the removal of totem twisting and stacking, low base spell damage, Lava Burst as capstone, and the missing Elemental Mastery ([Blizzard forums](https://us.forums.blizzard.com/en/wow/t/please-fix-shamans/2365290)) 🟡.

---

## Sources

| Source | Type | Reliability notes |
|---|---|---|
| [Blizzard forums: WoW Forever Beta Development Notes (Sept 24 / Oct 1)](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696) | 🔵 Official | Primary source for patch changes. No build numbers in the text |
| [Bluetracker mirror of the dev notes (updated Oct 1)](https://www.bluetracker.gg/wow/topic/us-en/2360696-wow-forever-beta-development-notes-updated-september-24/) | 🔵 Official mirror | Oct 1 Shaman fixes |
| [mobalytics: Sept 24 patch notes](https://mobalytics.gg/wow-forever/guides/patch-notes-september-24) | 🔵 Relay | Verbatim totem text |
| [guided.news: Blizzard confirms shaman totem systems](https://guided.news/en/news/wow-forever-shaman-totem-systems-rogue-overhaul/) | 🔵 Relay | Cites Blizzard class overview video (Oct 1). No direct URL |
| [guided.news: first major beta patch](https://guided.news/en/news/wow-forever-beta-patch-class-racial-ability-ui-changes/) | 🟡 Relay | Sept 25 summary of the official notes |
| [Wowhead Forever spell/item-set DB](https://www.wowhead.com/forever/spell=15208/lightning-bolt) | 🟢 Datamined | Most authoritative client data. Pages render partially via fetch (no rank labels or set bonuses for T1/T2) |
| [WCLBox WoW Forever DB](https://wowforever.wclbox.com/en/fashu/shaman) | 🟢 Datamined diff | Full rank tables vs Classic. Build 1.60.1.70009. Agrees with Wowhead on all spot checks (LB, ES, HW, CL) |
| [ForeverChanges spellbook](https://foreverchanges.pro/spellbook/shaman) | 🟢 Datamined diff | Build 1.60.1.70170 vs Classic Era 1.15.9.69722. Same 56/5/29/1 dataset as WCLBox |
| [ClassicWoWForever: Shaman changes](https://classicwowforever.com/class-changes/shaman/) | 🟢/🟡 | Build 1.60.1.70009, reviewed Sept 27. Talents plus tooltips |
| [The Forever Era](https://theforeverera.com/en/classes/shaman/) | 🟡 | Build 1.60.1.70009, summary of patch notes |
| [EndgameTools](https://endgametools.com/en/blog/wow-forever-shaman) | 🟡 | Sept 27, build 1.60.1.70009. Some numbers look pre-patch |
| [ForeverTome](https://forevertome.com/guides/shaman) | 🟡 | Stream-sourced values (Soda, Guzu, Esfand, Xaryu; Sept 12–13), build 1.60.1.69893. Low-rank values only |
| [classicwow.gg Shaman overview](https://classicwow.gg/forever/guides/shaman) | 🟡 | Oct 1. One copy/paste error ("Lava Burst heals…") |
| [GameSpot (via Yahoo)](https://tech.yahoo.com/gaming/articles/wow-forever-shaman-spells-class-153122479.html) | 🟡 | Cheri Faulkner, Sept 21. Good overview, some conflation (Ghost Wolf). Original [GameSpot URL](https://www.gamespot.com/articles/wow-forever-shaman-spells-class-overview-and-changes/) returned 403 |
| [WoWHandbook: class](https://wowhandbook.com/classes/shaman/), [sets](https://wowhandbook.com/gear/shaman/), [relics](https://wowhandbook.com/gear/relics/) | 🟡 | Updated Oct 2. The set page mislabels unchanged Classic bonuses as "Forever changes" |
| [wow.gg: datamined set bonuses](https://wow.gg/guides/wow-forever-tier-set-bonuses) | 🟢 | Sept 17 datamine. Structured but terse ("Electrocute") |
| [wofwforever: spell power scaling](https://wofwforever.com/en/guides/wow-forever-spell-power-scaling/) | 🟡 | Separates official statements from player claims well |
| [Warcraft Tavern: shaman guide](https://www.warcrafttavern.com/forever/guides/shaman/) / [Dwarf totem quests](https://www.warcrafttavern.com/forever/guides/dwarf-shaman-totem-quests/) | 🟡 | Val Hull. The quest guide is detailed. The shaman guide fetch returned spell IDs mislabeled as "ranks" (e.g. "Lava Burst (rank 408490)", an SoD-style ID), so treat it with caution |
| [Wowhead Classic set pages](https://www.wowhead.com/classic/item-set=216/the-ten-storms) | Reference | Used only as the Classic baseline for comparing sets |
| [Blizzard forums: "Please fix shamans"](https://us.forums.blizzard.com/en/wow/t/please-fix-shamans/2365290), [Skyborne quest thread](https://us.forums.blizzard.com/en/wow/t/call-of-the-earth-disappointing-skyborne-quest/2365329) | 🟡 Player feedback | No blue replies |
| [wowforever.games totem guide](https://www.wowforever.games/410.html) | 🔴 **Excluded** | Contains clear errors (Totem of Wrath, "1–2 min durations"). Looks AI-generated |
| Icy Veins ([class overview](https://www.icy-veins.com/wow-forever/shaman-class-overview)), Leprestore | — | HTTP 403. Not used |
