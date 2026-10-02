# WoW Forever: Shaman Talent Trees (Elemental, Enhancement, Restoration)

> Research snapshot: **2026-10-02** (beta Sept 17 – Oct 21 2026; launch Nov 4 2026).
> Data baseline: **Forever beta client build 1.60.1.70170** (published 1 Oct 2026) plus server hotfixes, as read by [wowforevertalents.com][wfts] and the "1 October Forever export" used by [wowforevertalent.com][wft]. Classic baseline is **Classic Era 1.15.9.69722**, compared rank by rank by [wowforevertalents.com][wfts].
>
> **Confidence tags:** 🔵 official Blizzard · 🟢 datamined, client or talent-calculator data · 🟡 community guide or testing · 🔴 rumor or unclear
>
> **Status tags (vs Classic Era):** **NEW** · **CHANGED** (values or effect) · **MOVED** (position only, same text) · **UNCHANGED** · *RENAMED* is noted inside CHANGED.

---

## 0. Quick facts

- **51 talent points at level 60**, 3 trees, **50 talents** (Classic had 46): **12 new, 30 changed (5 of them renamed), 8 identical, 8 Classic talents removed**. 🟢 [wfts][wfts]. ([wft][wft] counts 29 changed and 12 new.)
- **Row gating:** row N needs (N−1)×5 points in that tree: row 2 = 5, row 3 = 10, row 4 = 15, row 5 = 20, row 6 = 25, row 7 = 30. A prerequisite must be at **max rank**. 🟢 [wft ref][wft], [wfts][wfts]
- **Each tree now ends in a new 31-point active**: **Lava Burst** (Elemental), **Rage of the Farseer** (Enhancement), **Riptide** (Restoration). 🟢 [wft][wftcalc] 🟡 [Icy Veins][iv]
- The old capstones moved up: **Stormstrike** (row 7 → row 4) and **Mana Tide Totem** (row 7 → row 4) are now **16-point** talents. 🟢 [wft ref][wft]
- **Legacy "Talented" perk:** Legacy Challenges can grant **up to 5 extra talent points**. Icy Veins posts 21-point and 26-point level-30 builds for this reason. 🟡 [IV Elemental][iv-ele], [IV Enhancement][iv-enh]
- Talent tree changes during the beta came from Blizzard's official dev notes. **Sept 24 (build 1.60.1.70009):** Elemental Fury and Elemental Alacrity swapped rows, Lava Burst damage raised, Rage of the Farseer lost its spell-haste part, and a Riptide crit fix. 🔵 [Blizzard 24 Sep][blz924]. **Oct 1:** no talent changes for Shaman. 🔵 [Blizzard 1 Oct][blz1001]

### Milestone talents (point thresholds)

| Points spent | Row | Elemental | Enhancement | Restoration |
|---|---|---|---|---|
| **11-point** (10 spent) | 3 | Elemental Focus, **Elemental Alacrity** | Elemental Weapons, **Shamanistic Focus** (NEW), Anticipation | Ancestral Healing, Healing Focus, **Water Shield** (NEW) |
| **16-point** (15 spent) | 4 | Improved Fire Nova, Eye of the Storm, **Call of Thunder** | Toughness, Flurry, **Stormstrike** (moved up from 31) | Tidal Mastery, Restorative Totems, **Mana Tide Totem** (moved up from 31) |
| **21-point** (20 spent) | 5 | Elemental Reach, **Lightning Overload** (NEW), **Earthbound** (NEW) | Spirit Weapons, **Mental Quickness** (NEW), **Improved Stormstrike** (NEW) | **Healing Way**, **Nature's Swiftness** |
| 26-point (25 spent) | 6 | **Elemental Fury** (5 ranks) | **Maelstrom Weapon** (NEW) | Purification |
| **31-point** (30 spent) | 7 | **Lava Burst** (NEW) | **Rage of the Farseer** (NEW) | **Riptide** (NEW) |

Source for all positions: 🟢 [wft calculator grid ids][wftcalc] (tree-row-column), cross-checked with the per-talent "opens at N points" values on [wfts][wfts].

---

## 1. Elemental (Elemental Combat), 16 talents

Positions use (row, column) from the [wft calculator][wftcalc]. All effect text comes from the client tooltips in [wft reference][wft] and [wfts][wfts] 🟢, which match unless a difference is flagged.

| Pos | Talent | Ranks | Forever effect per rank | Prereq | Status | Classic Era | Src |
|---|---|---|---|---|---|---|---|
| (1,2) | **Convection** | 5 | Mana cost of Shocks, Lightning Bolt, **Lava Burst**, Chain Lightning −2/4/6/8/10% | — | CHANGED (adds Lava Burst) | same values, no Lava Burst | 🟢 [wft][wft] [wfts][wfts] |
| (1,3) | **Concussion** | 5 | Lightning Bolt, Chain Lightning and **Earth Shock** damage +1/2/3/4/5% | — | CHANGED (narrowed) | ~~all Shock spells~~ (now Earth Shock only) | 🟢 [wft][wft] [wfts][wfts] |
| (2,1) | **Elemental Warding** | 3 | Fire/Frost/Nature damage taken −3/7/10% | — | CHANGED | ~~4%~~ at rank 1, 10% at rank 3 | 🟢 [wfts][wfts] |
| (2,2) | **Reverberation** | 5 | Shock cooldown −0.2/0.4/0.6/0.8/1.0 sec | — | MOVED (3,2)→(2,2), text identical | 0.2 sec per rank | 🟢 [wft][wft] [wfts][wfts] |
| (2,3) | **Call of Flame** | 3 | Fire Totems **and Flame Shock, Fire Nova, Lava Burst** damage +5/10/15% | — | CHANGED (wider scope) | ~~Fire Totems only~~ (5/10/15%) | 🟢 [wfts][wfts] |
| (2,4) | **Elemental Devastation** | 3 | Offensive spell crit gives +3/6/9% melee crit for 10 sec | — | MOVED (4,4)→(2,4), wording only | same values | 🟢 [wft][wft] [wfts][wfts] |
| (3,2) | **Elemental Focus** | 1 | 10% chance after a Fire/Frost/Nature damage spell to make the next damage spell cost no mana (Clearcasting) | — | UNCHANGED | same | 🟢 [wft][wft] |
| (3,3) | **Elemental Alacrity** *(renamed from Lightning Mastery)* | 3 | Lightning Bolt, Chain Lightning, **Lava Burst** cast time −0.17/0.33/0.50 sec | — (opens Call of Thunder) | CHANGED + MOVED (6,3)→(3,3) | ~~5 ranks, −0.2 sec per rank (−1.0 sec max)~~ | 🟢 [wfts][wfts]; 🔵 swap [Blizzard 24 Sep][blz924]; 🟡 1 sec Classic total [IV][iv] |
| (4,1) | **Improved Fire Nova** *(renamed from Improved Fire Totems)* | 2 | Fire Nova (now a spell) damage +10/20% and cooldown −2/4 sec | — | CHANGED (reworked) | ~~Fire Nova Totem delay −1/2 sec, Magma Totem threat −25/50%~~ | 🟢 [wfts][wfts] |
| (4,2) | **Eye of the Storm** | 3 | Pushback on Lightning Bolt, Chain Lightning, Lava Burst −23/47/70% | — | CHANGED (reworked) | ~~33/66/100% chance on being crit to gain Focused Casting (no pushback) for 6 sec~~ | 🟢 [wfts][wfts] |
| (4,3) | **Call of Thunder** | 1 | Lightning Bolt and Chain Lightning crit chance **+3%** (see note) | **Elemental Alacrity 3/3** | CHANGED + MOVED (3,3)→(4,3) | ~~5 ranks~~ (1% at rank 1) | 🟢 [wft][wft]; ⚠ blank tooltip in the client per [wfts][wfts-cot] |
| (5,1) | **Elemental Reach** *(renamed from Storm Reach)* | 2 | Range of Lightning Bolt, Chain Lightning, **Fire Nova, Lava Burst** +3/6 yd; **Flame Shock +8/15 yd** | — | CHANGED | ~~Lightning Bolt and Chain Lightning +3/6 yd only~~ | 🟢 [wfts][wfts] |
| (5,2) | **Lightning Overload** | 3 | Lightning Bolt and Chain Lightning have a 3/7/10% chance to cast a second copy on the same target, free, for half damage and no threat | — (opens Lava Burst) | **NEW** | — | 🟢 [wft][wft] [wfts][wfts] |
| (5,4) | **Earthbound** | 1 | Earthbind Totem **immobilizes** nearby targets for 5 sec when cast | — | **NEW** | — | 🟢 [wft][wft] [wfts][wfts] |
| (6,3) | **Elemental Fury** | 5 | Crit damage bonus of Searing and Magma Totems and Fire/Frost/Nature spells +20/40/60/80/100% | **Call of Thunder 1/1** | CHANGED + MOVED (5,2)→(6,3) | ~~1 rank = 100%~~ (also listed Fire Nova Totem) | 🟢 [wfts][wfts-ef]; 🔵 swap [Blizzard 24 Sep][blz924] |
| (7,2) | **Lava Burst** | 1 | **Active.** 165 mana, 30 yd, 2.5 sec cast, 10 sec CD. Deals **150–193** Fire damage, **+20% if your Flame Shock is on the target** | **Lightning Overload 3/3** | **NEW** (31-pt) | — | 🟢 [wfts][wfts-lvb] (wft shows 150–192); 🔵 damage buff [Blizzard 24 Sep][blz924] |

**Lava Burst trainable ranks** (the talent teaches rank 1): rank 2 at level 50 deals 179–231 for 230 mana; rank 3 at level 60 deals 192–248 for 265 mana. 🟢 [wfts abilities][wfts-ab]. Icy Veins says Lava Burst's base damage goes down as spell power from gear goes up (lower coefficients across the kit) 🟡 [IV Elemental][iv-ele]. Conquest Capped gives Lava Burst a **71.4% spell power** coefficient; nobody else confirms this 🟡 [CC][cc].

**Removed from the Elemental tree:**
- **Elemental Mastery** (Classic 1 rank: next Fire/Frost/Nature damage spell gets 100% crit and costs no mana) is **gone**. It is not a talent and is not in the spellbook. No source names a replacement. 🟢 [wfts][wfts] 🟡 [CC][cc]
- **Earth's Grasp** moved to Enhancement (1,1) with identical text. 🟢 [wft][wft]
- Improved Fire Totems, Lightning Mastery and Storm Reach were **renamed** (see above). Zockify counts these as removed; see Conflicts. 🟢 [wfts][wfts]

---

## 2. Enhancement, 18 talents

| Pos | Talent | Ranks | Forever effect per rank | Prereq | Status | Classic Era | Src |
|---|---|---|---|---|---|---|---|
| (1,1) | **Earth's Grasp** | 2 | Stoneclaw Totem health +25/50%; Earthbind Totem radius +10/20% | — | MOVED (Elemental (2,1) → Enhancement (1,1)), text identical | same | 🟢 [wft][wft] |
| (1,2) | **Thundering Strikes** | 5 | Crit chance with **all spells and attacks** +1/2/3/4/5% | — | CHANGED + MOVED (2,2)→(1,2) | ~~weapon attacks only~~ (1–5%) | 🟢 [wfts][wfts] |
| (1,3) | **Ancestral Knowledge** | 5 | **Intellect** +2/4/6/8/10% | — | CHANGED | ~~max Mana +1/2/3/4/5%~~ | 🟢 [wfts][wfts] |
| (2,1) | **Guardian Totems** | 2 | Stoneskin and Windwall Totem reduction +10/20%; Grounding Totem CD −1/2 sec | — | UNCHANGED | same | 🟢 [wft][wft] |
| (2,2) | **Mental Dexterity** | 3 | Attack Power +33/67/100% of Intellect | — (opens Flurry) | **NEW** | — | 🟢 [wft][wft] [wfts][wfts] |
| (2,3) | **Improved Ghost Wolf** | 2 | Ghost Wolf cast −1/**3** sec, and **usable indoors** | — | CHANGED | ~~−1/2 sec, outdoors only~~ | 🟢 [wfts][wfts] |
| (2,4) | **Improved Lightning Shield** | 3 | Lightning Shield orb damage +5/10/15% | — | UNCHANGED | same | 🟢 [wft][wft] |
| (3,1) | **Elemental Weapons** | 3 | Rockbiter AP bonus +7/13/20%, Windfury Weapon effect +13/27/40%, Flametongue and Frostbrand damage +5/10/15% | — | MOVED (5,2)→(3,1). Ranks 1 and 3 identical; wfts flags a rank-2 number change (rounding) | same at ranks 1 and 3 | 🟢 [wft][wft] [wfts][wfts] |
| (3,3) | **Shamanistic Focus** | 1 | Mana cost of Shocks and **Lightning Shield** −45% | — | **NEW** | — | 🟢 [wft][wft] [wfts][wfts] |
| (3,4) | **Anticipation** | 3 | Dodge +2/4/6% | — | CHANGED | ~~5 ranks × 1% (5% max)~~ | 🟢 [wfts][wfts] |
| (4,1) | **Toughness** | 5 | **Stamina** +2/4/6/8/10% | — | CHANGED | ~~armor from items +2–10%~~ | 🟢 [wfts][wfts] |
| (4,2) | **Flurry** | 5 | After a **melee** crit, attack speed +5/10/15/20/25% for the next 3 swings | **Mental Dexterity 3/3** | CHANGED (nerfed per rank) | ~~10/15/20/25/30%~~, any crit | 🟢 [wfts][wfts] |
| (4,3) | **Stormstrike** | 1 | **Active.** 125 mana, melee, instant, **8 sec CD**. Strikes for normal weapon damage; the target takes +20% damage from your **next Lightning Bolt, Chain Lightning or Earth Shock** within 12 sec | — | CHANGED + MOVED (7,2)→(4,3), now 16-pt | ~~extra attack; next 2 Nature damage sources +20%, 12 sec; 20 sec CD~~ | 🟢 [wfts][wfts]; 🟡 Classic 20 sec CD [IV][iv] |
| (5,1) | **Spirit Weapons** *(renamed from Parry)* | 1 | Gives a chance to parry; threat **−30% without Rockbiter**, **+30% with Rockbiter** active | — | CHANGED | ~~parry chance only~~ | 🟢 [wfts][wfts] |
| (5,2) | **Mental Quickness** | 2 | Spell damage and healing + up to 15/30% of Intellect | — (opens Rage of the Farseer) | **NEW** | — | 🟢 [wft][wft] [wfts][wfts] |
| (5,3) | **Improved Stormstrike** | 2 | On Stormstrike: 50/100% chance to gain **50% mana regen while casting for 15 sec**; Stormstrike CD has a 50/100% chance to **reset on Dodge or Parry** | **Stormstrike 1/1** | **NEW** | — | 🟢 [wft][wft] [wfts][wfts] |
| (6,3) | **Maelstrom Weapon** | 5 | Melee damage has a chance to cut the cast time and mana cost of your next **Lightning Bolt** by 4/8/12/16/20%; **stacks to 5; lasts 30 sec** | — | **NEW** | — | 🟢 [wft][wft] [wfts][wfts] |
| (7,2) | **Rage of the Farseer** | 1 | **Active.** Instant, **3 min CD**. **Attack speed +30% for 25 sec** (no longer affects spell casting speed) | **Mental Quickness 2/2** | **NEW** (31-pt) | — | 🟢 [wfts][wfts]; 🔵 haste removed [Blizzard 24 Sep][blz924] |

Notes:
- **Maelstrom Weapon** applies only to Lightning Bolt. Warcraft Tavern points out it cannot make Chain Lightning or an instant heal, unlike retail. 🟡 [WT][wt]. Warcraft Tavern reads 5 stacks at 5/5 as an "instant and free Lightning Bolt", which means the 20% applies per stack. The tooltip wording supports that reading, but nobody has confirmed it in-game. 🟡 [WT][wt]
- **Two-handed axes and maces are baseline** for Shaman, so the talent is gone. 🟡 [Zockify][zk], [WT][wt]
- Rage of the Farseer works as a "personal Bloodlust" on a 3 min CD. 🟡 [WT][wt] [IV][iv]

**Removed from the Enhancement tree** (5) 🟢 [wfts][wfts]:

| Classic talent | Classic effect | What happened to it |
|---|---|---|
| Two-Handed Axes and Maces | lets you use 2H axes and maces | **Baseline** 🟡 [ZK][zk] [WT][wt] |
| Weapon Mastery | +2% weapon damage per rank (5 ranks) | Removed; no successor named |
| Shield Specialization | +1% block and +5% amount blocked per rank (5 ranks) | Removed; no successor named |
| Enhancing Totems | Strength of Earth and Grace of Air +8% per rank (2 ranks) | Removed; no successor named |
| Improved Weapon Totems | Windfury Totem AP +15%, Flametongue Totem +6% per rank | Removed; no successor named |
| *(Parry)* | parry chance | **Renamed to Spirit Weapons** (gained threat effects) |

---

## 3. Restoration, 16 talents

| Pos | Talent | Ranks | Forever effect per rank | Prereq | Status | Classic Era | Src |
|---|---|---|---|---|---|---|---|
| (1,2) | **Improved Healing Wave** | 5 | Healing Wave cast −0.1/0.2/0.3/0.4/0.5 sec | — | UNCHANGED | same | 🟢 [wft][wft] |
| (1,3) | **Totemic Focus** | 5 | Mana cost of totems **and of spells that summon or move them** (Call of the Elements, Totemic Projection, and so on) −5/10/15/20/25% | — | CHANGED + MOVED (2,3)→(1,3) | ~~totems only~~ (5–25%) | 🟢 [wfts][wfts] |
| (2,1) | **Mindfulness** | 3 | 17/33/50% of mana regen continues while casting | — | **NEW** | — | 🟢 [wft][wft] [wfts][wfts] |
| (2,2) | **Natural Grace** *(renamed from Healing Grace)* | 3 | Threat from **all your spells** −5/10/15% | — | CHANGED + MOVED (3,4)→(2,2) | ~~healing spells only~~ (5/10/15%) | 🟢 [wfts][wfts] [wft][wft] |
| (2,3) | **Tidal Focus** | 5 | Healing spell mana cost −1–5% **and hit chance +1/2/3/4/5%** | — | CHANGED + MOVED (1,3)→(2,3) | ~~mana cost only~~ (1–5%) | 🟢 [wfts][wfts] |
| (2,4) | **Improved Reincarnation** | 2 | Reincarnation CD −10/20 min, **max health +2/4%**, +10/20% health and mana on reincarnate | — | CHANGED (adds max HP) | no max HP part | 🟢 [wfts][wfts] |
| (3,1) | **Ancestral Healing** | 3 | Healing crits raise the target's armor +8/17/25% for 15 sec | — | MOVED (2,2)→(3,1). Ranks 1 and 3 identical; rank 2 reads 17% (BlizzCon build had 16%) | same at ranks 1 and 3 | 🟢 [wft][wft] [wfts beta][wfts-beta] |
| (3,2) | **Healing Focus** | 3 | 23/47/70% chance to avoid interruption from damage while casting heals | — | CHANGED | ~~5 ranks × 14% (70% max)~~ | 🟢 [wfts][wfts] |
| (3,3) | **Water Shield** | 1 | **Active.** Instant, 15 sec CD. 3 water globes for 10 min. When you are hit by a spell, melee or ranged attack, **or one of your heals crits**, you get **2% of max mana** and use up a globe (internal cooldown of "a few seconds"). Only one Elemental Shield at a time | — | **NEW** | — | 🟢 [wft][wft] [wfts][wfts] |
| (4,1) | **Tidal Mastery** | 5 | Healing crit chance +1/2/3/4/5% | — | CHANGED | ~~healing **and lightning** spells~~ (1–5%) | 🟢 [wfts][wfts] |
| (4,2) | **Restorative Totems** | 5 | Mana Spring Totem +5/10/15/20/25%; **Healing Stream Totem +10/20/30/40/50%** | — | CHANGED | ~~both totems +5–25%~~ | 🟢 [wfts][wfts] |
| (4,3) | **Mana Tide Totem** | 1 | **Active.** 10 mana, instant, 5 min CD. 5-HP totem for 12 sec that restores **88 mana every 3 sec** to group members within **30 yd** | — | CHANGED + MOVED (7,2)→(4,3), now 16-pt | ~~170 mana / 3 sec, 20 yd~~ | 🟢 [wfts][wfts] [wft][wft] |
| (5,2) | **Healing Way** | 3 | Healing Wave healing **+8/17/25%** (flat) | — (opens Riptide) | CHANGED (reworked) | ~~33/66/100% chance to stack +6% Healing Wave taken on the target, 3 stacks, 15 sec~~ | 🟢 [wfts][wfts] |
| (5,3) | **Nature's Swiftness** | 1 | **Active.** 3 min CD. Next Nature spell with a cast time under 10 sec becomes instant | — | UNCHANGED | same | 🟢 [wft][wft] |
| (6,3) | **Purification** | 5 | Healing effectiveness +2/4/6/8/10% | — | UNCHANGED (wfts lists it as identical; wft tags it "changed") | same | 🟢 [wfts][wfts] |
| (7,2) | **Riptide** | 1 | **Active.** 245 mana, 40 yd, instant, **6 sec CD**. Heals **484–535** plus **445 over 15 sec**; your **Chain Heal cast directly on that target is 25% more effective** | **Healing Way 3/3** | **NEW** (31-pt) | — | 🟢 [wfts][wfts] (wft shows 485–533); 🔵 can now crit [Blizzard 24 Sep][blz924] |

**Riptide trainable ranks:** rank 2 at level 50 heals 613–678 plus 575 over 15 sec for 300 mana; rank 3 at level 60 heals 799–883 plus 805 for 385 mana. 🟢 [wfts abilities][wfts-ab]. Conquest Capped gives coefficients of 21.4% spell power for the direct heal and 50% for the HoT; nobody else confirms these 🟡 [CC][cc].

**Removed from the Restoration tree** (2) 🟢 [wfts][wfts]:

| Classic talent | Classic effect | What happened to it |
|---|---|---|
| **Totemic Mastery** | friendly-totem radius raised to 30 yd | Baseline in effect: Forever totem tooltips read 30 yd (Windfury Totem "within 30 yards", Frost Resistance Totem 30 yd, Disease Cleansing Totem 30 yd). 🟢 [wfts abilities][wfts-ab] [wfts beta][wfts-beta]. Treat "baseline" as a 🟡 inference, since no source says it outright. |
| **Nature's Guidance** | +1% melee and spell hit per rank (3 ranks) | Its hit role is effectively in **Tidal Focus** (+1–5% hit). 🟡 [IV][iv] [WT][wt] (inference) |
| *(Healing Grace)* | healing threat reduction | **Renamed to Natural Grace** (now covers all spells) |

---

## 4. What changed during the beta (BlizzCon build → current client)

Useful for dating guides. Anything written from BlizzCon footage or before Sept 24 may show the old values. Source for all rows: 🟢 [wfts beta changes][wfts-beta], with the official notes 🔵 [Blizzard 24 Sep][blz924] where marked.

| Talent | BlizzCon / pre-24-Sep | Current (1.60.1.70170) |
|---|---|---|
| Elemental Fury / Elemental Alacrity | Elemental Fury row 3 (10 pts) → Call of Thunder → **Elemental Alacrity row 6 (25 pts)** | **Swapped**: Alacrity row 3, Fury row 6 🔵 |
| Totemic Focus / Tidal Mastery | Tidal Mastery row 1, Totemic Focus row 4 | Totemic Focus row 1, Tidal Mastery row 4 |
| Lava Burst (talent rank) | 158–187 at BlizzCon; 105–135 in build 69977 | **150–193** (Sept 24 buff) 🔵 |
| Rage of the Farseer | melee attack speed **and spell casting speed** +30% | attack speed only 🔵 |
| Maelstrom Weapon | stacks up to 5×rank (to **25**), lasted 30×rank sec (to 150 sec) | **5 stacks, 30 sec** |
| Flurry | 5–25% for the next **3×rank swings** (up to 15) | the next **3** swings |
| Improved Stormstrike r2 | 100% mana regen while casting for 30 sec | **50% for 15 sec** |
| Stormstrike | +20% **Nature damage** taken for 12 sec | +20% to the **next Lightning Bolt, Chain Lightning or Earth Shock** |
| Improved Ghost Wolf r2 | −2 sec | −3 sec (base Ghost Wolf is a 3 sec cast, so 2/2 makes it instant) |
| Call of Thunder | "+3%" tooltip | tooltip **blank** in the client (see Conflicts) |
| Riptide (talent rank) | 479–528 + 499 HoT | 484–535 + 445 HoT; crit fix 🔵 |
| Lightning Overload | 3/6/9% | 3/7/10% |
| Minor rounding | Mental Dexterity 66/99%, Mindfulness 34/51%, Elemental Alacrity 0.34/0.51 sec, Eye of the Storm 46/69%, Healing Focus 46/69%, Healing Way 16/24%, Elemental Warding 6/9%, Elemental Reach Flame Shock +16 yd | 67/100%, 33/50%, 0.33/0.50 sec, 47/70%, 47/70%, 17/25%, 7/10%, +15 yd |

---

## 5. Builds mentioned by guides

> At this date the beta is capped at **level 30** (21 talent points, or up to 26 with the Legacy Talented perk). **No guide has published a researched level-60 build yet.** Level-60 splits come only from community calculator popularity or unverified snippets.

### Leveling / beta-level builds
- **Level 20 (any spec):** put points into **Improved Ghost Wolf** first for mobility. 🟡 [Warcraft Tavern][wt]
- **Warcraft Tavern level 30**, from their build screenshots 🟡 [WT][wt]:
  - *Enhancement 0/21/0*: Thundering Strikes 5, Ancestral Knowledge 1, Mental Dexterity 3, Improved Ghost Wolf 2, Elemental Weapons 3, Shamanistic Focus 1, Flurry 4, Stormstrike 1, Improved Stormstrike 1.
  - *Restoration 0/0/21*: Improved Healing Wave 5, Totemic Focus 5, Mindfulness 3, Tidal Focus 2, Ancestral Healing 3, Water Shield 1, Mana Tide Totem 1, Nature's Swiftness 1.
  - *Elemental 21/0/0*: Convection 5, Concussion 5, Elemental Focus 1, **Elemental Fury 5 (in its old row-3 spot)**, Call of Thunder 1, Eye of the Storm 3, Lightning Overload 1. ⚠ **This build was drawn on the pre-Sept-24 layout and is not legal now**: Elemental Fury needs 25 points. The text recommends Elemental Alacrity, which matches the current tree.
- **Icy Veins level 30** (21 and 26 points, updated Oct 1–2) 🟡:
  - *Elemental* ([guide][iv-ele], calculator `#tc-111114442267772a99988`, 26-pt `…cccde`): Concussion 5, Call of Flame 3, Elemental Warding (or Convection), Elemental Focus, Elemental Alacrity, Call of Thunder, Eye of the Storm, Improved Fire Nova. With 26 points it adds **Earthbound, Lightning Overload, and 1 point in Elemental Fury**.
  - *Enhancement* ([guide][iv-enh], `#tc-hhhhhikkkllnnnorrrrsv`): the extra Talented points go to **Improved Stormstrike 2/2 → Spirit Weapons → Flurry 5/5 → Mental Quickness**. Icy Veins says Maelstrom Weapon is not worth taking until you can fit all 5 points.
  - *Restoration* ([guide][iv-res], `#tc-yyyyyAAABBGEEEFJHHHHL`, 26-pt `…HKKKM`): Improved Healing Wave 5, Mindfulness 3, Natural Grace or Improved Reincarnation, Water Shield, Mana Tide Totem, Nature's Swiftness, Tidal Mastery. With 26 points it adds **Healing Way 3**.

### Hybrid / off-tree dips (guide suggestions)
- **Elemental:** 8 points in Restoration for **Mindfulness**; or 11 in Enhancement for **Thundering Strikes + Ancestral Knowledge** plus 1 point of Improved Ghost Wolf for indoor use. 🟡 [WT][wt] [IV][iv]
- **Enhancement:** 8 points in Elemental for **Elemental Devastation** (spell crit → melee crit → Flurry → faster Maelstrom stacks). 🟡 [WT][wt]
- **Restoration:** 12 points in Enhancement for **instant indoor Ghost Wolf + 5% crit + 10% Intellect**. 🟡 [WT][wt] [IV][iv]
- **Enhancement as a tank or off-tank:** Spirit Weapons with Rockbiter gives +30% threat; Icy Veins says Enhancement can tank dungeons "in a pinch". 🟡 [IV][iv] [WT][wt]

### Level-60 splits (popularity data, not recommendations)
- [wowforevertalent.com popular builds][wftcalc] (30,447 complete builds; updated 2026-10-02 04:05 UTC) 🟡: **Enhancement 18/33/0** (#1), **Restoration 0/10/41** (967 opens), **Enhancement 8/33/10**, **Elemental 38/13/0** (803 opens). Overall pick split: Elemental 24%, Enhancement 58%, Restoration 18%. Most-picked talents are Thundering Strikes (90%), Ancestral Knowledge (75%), Shamanistic Focus (73%), Improved Ghost Wolf (71%) and Concussion (68%).
- A search-engine summary listed "Elemental 31/7/13, Enhancement 19/32/0, Restoration 0/8/43" builds. 🔴 **I could not find the source page** (likely leprestore.com, which returned 403), so treat these as unverified.

### PvP
- **No dedicated PvP build found.** Guides point to **Earthbound** (a root on demand, "incredibly powerful in PvP"), **Improved Ghost Wolf** (instant, indoors) and **Orc** racials. 🟡 [IV][iv] [WT][wt]

---

## 6. Conflicts / Open Questions

1. **Elemental row 3 / row 6 (resolved).** Warcraft Tavern's screenshots, Conquest Capped's prerequisite chain (Call of Thunder requiring Elemental Fury, Elemental Alacrity requiring Call of Thunder, updated 29 Sep), and Icy Veins' overview ("Elemental Fury ... located earlier in the tree") all describe the **old layout**. Blizzard's Sept 24 notes 🔵 and both client-read calculators 🟢 show **Elemental Alacrity in row 3 → Call of Thunder (row 4) → Elemental Fury in row 6**. Use the current layout.
2. **Call of Thunder value.** [wft][wft] shows "+3% crit to Lightning Bolt and Chain Lightning", but [wfts][wfts-cot] says the current client tooltip is **empty** (the "+3%" came from the BlizzCon transcription). The effect may still exist server-side, but the 3% is **not confirmed for the current build**. 🔴
3. **Lava Burst talent rank:** 150–**193** ([wfts][wfts] client) vs 150–**192** ([wft][wft], [kami-labs][kami]). Probably rounding.
4. **Riptide talent rank:** 484–535 ([wfts][wfts]) vs 485–533 ([wft][wft]). [wfts beta][wfts-beta] labels the 799–883 rank "level 50", but [wfts abilities][wfts-ab] lists rank 2 at level 50 (613–678) and rank 3 at level 60 (799–883).
5. **Ghost Wolf base cast:** client says **3 sec** ([wfts abilities][wfts-ab], [wft][wftcalc]), so Improved Ghost Wolf 2/2 (−3 sec) makes it instant. [Icy Veins][iv] and [Conquest Capped][cc] say the base is **2 sec**, which is probably the BlizzCon value.
6. **Rage of the Farseer:** Conquest Capped still says "+30% melee/spell speed". Spell haste was **removed on Sept 24** 🔵.
7. **Tidal Mastery position:** Conquest Capped puts it in "Row 1" (BlizzCon layout). It is now row 4 and Totemic Focus is row 1 🟢.
8. **New/removed counts:** [Zockify][zk] says "17 new / 13 removed" because it counts the 5 renamed talents (Elemental Alacrity, Elemental Reach, Improved Fire Nova, Natural Grace, Spirit Weapons) as both new and removed. Client comparison gives **12 new, 8 removed, 5 renamed** 🟢. [wft][wft] says 29 changed and [wfts][wfts] says 30.
9. **Wording errors in guides:** the Icy Veins overview says Lightning Overload affects "your Nature spells" (the client says Lightning Bolt and Chain Lightning only); that Ancestral Knowledge went "from 1% to 2% Intellect" (Classic was **max mana** 1%/rank); and that Fire Nova is a "30 yard explosion" (client: 30 yd *range*, hits within **10 yd** of your Fire totem). [wft][wftcalc]'s FAQ says "Elemental Fury adds 20% critical damage instead of 100%", but that is **per rank**; 5/5 still gives 100%.
10. **Maelstrom Weapon math:** whether 4–20% applies **per stack** (so 5 stacks at 5/5 means an instant, free bolt) or as a total is implied by the tooltip but not confirmed in testing. 🟡
11. **Rank-2 rounding vs Classic:** [wfts][wfts] flags Elemental Weapons and Ancestral Healing as "numbers changed" even though ranks 1 and 3 match Classic. The difference is in rank 2 (for example Ancestral Healing 17% vs the BlizzCon build's 16%), so it is not a meaningful change.
12. **Elemental Mastery:** removed with no stated replacement. Whether Blizzard plans to bring it back (for example as a trainable spell or Legacy perk) is unknown. 🔴
13. **Coefficients** (Lava Burst 71.4% spell power, Riptide 21.4% direct + 50% HoT) come from Conquest Capped alone. 🟡
14. **No level-60 testing exists yet** (beta cap is level 30). All deep-tree evaluations are theory.

---

## 7. Sources

| Ref | Source | Type / reliability | Build / date reflected |
|---|---|---|---|
| [wfts] | [wowforevertalents.com/shaman](https://wowforevertalents.com/shaman/) (with per-talent pages, [abilities][wfts-ab] and [beta changes][wfts-beta]) | 🟢 **Best source.** Reads the Forever client's trait and spell tables plus the hotfix cache, and diffs rank by rank against Classic Era 1.15.9.69722. Checks Blizzard's notes claim by claim. Fan site, not Blizzard-verified. | **1.60.1.70170** (pub. 1 Oct 2026), hotfix cache of 2 Oct 2026; history back to 1.60.1.69893 (18 Sep) and the BlizzCon transcription |
| [wft] | [wowforevertalent.com/shaman/reference](https://wowforevertalent.com/shaman/reference/) and [calculator][wftcalc] | 🟢 Talent calculator with full rank text, Classic reference text (rank 1 only), and "Moved (row,col)" notes; independent fan project. Popular-build stats are 🟡 community data. | "1 October Forever export", snapshot `beta-20261001-4159f5fd`; stats updated 2026-10-02 04:05 UTC |
| [blz924] | [Blizzard forums: WoW Forever Beta Development Notes, updated Sept 24](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-september-24/2360696) (Kaivax) | 🔵 Official | Sept 24 beta build (1.60.1.70009 per wfts) |
| [blz1001] | [Blizzard forums (EU): Beta Development Notes, updated 1 October](https://eu.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-1-october/631316/4) | 🔵 Official. No Shaman talent changes. | Oct 1 build (1.60.1.70170 per wfts) |
| [iv] | [Icy Veins: Shaman class overview](https://www.icy-veins.com/wow-forever/shaman-class-overview) | 🟡 Reputable guide. Some details predate Sept 24 (Elemental Fury position, Ghost Wolf 2 sec) and some wording is loose. | Changelog 12/15/17 Sep 2026 |
| [iv-ele] [iv-enh] [iv-res] | Icy Veins [Elemental](https://www.icy-veins.com/wow-forever/elemental-shaman-ranged-dps-pve-guide), [Enhancement](https://www.icy-veins.com/wow-forever/enhancement-shaman-melee-dps-pve-guide), [Restoration](https://www.icy-veins.com/wow-forever/restoration-shaman-healer-pve-guide) guides | 🟡 Level-30 beta builds (21 and 26 points) | Updated Oct 1–2 2026 |
| [wt] | [Warcraft Tavern: Shaman guide](https://www.warcrafttavern.com/forever/guides/shaman/) | 🟡 Good overview. The **Elemental level-30 screenshot uses the pre-Sept-24 tree.** | "Last reviewed September 2026" |
| [cc] | [Conquest Capped: Shaman talents](https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/) | 🟡/🔴 Detailed values, but **stale layout, prerequisites, Ghost Wolf and Rage of the Farseer data**. Only source for coefficients. | "Updated 29 Sep 2026", but the content reflects BlizzCon / pre-Sept-24 data |
| [zk] | [Zockify: Shaman talents & changes](https://www.zockify.com/forever/shaman/) | 🟡 Lists of new and removed talents (renames counted as new + removed) | Updated 15 Sep 2026 |
| [kami] | [kami-labs: Elemental build](https://kami-labs.fr/en/wow-forever/build-chaman-elementaire-wow-forever/) | 🟡 Talent values only; no prose build | Published 14 Sep 2026 |
| — | [wowtbc.gg Elemental guide](https://wowtbc.gg/warcraftforever/class-guides/elemental-shaman/) | 🟡 Its calculator grid matches the current layout (r3c3 = 3 ranks, r6c3 = 5 ranks); builds are rendered by JS and were not captured | Undated, beta level 30 |
| — | [mythicsim.com/wow-forever/shaman](https://mythicsim.com/wow-forever/shaman) | 🟡 Sim of reference characters (Elemental 398 DPS ranked #23 of 23, Enhancement 622 DPS #7); no talent splits given; says "values still being checked" | Engine 6823b49, simmed 2 Oct 2026 |
| — | [GameSpot Shaman overview](https://www.gamespot.com/articles/wow-forever-shaman-spells-class-overview-and-changes/), leprestore.com guides, mobalytics.gg | Not read (HTTP 403) | — |

[wfts]: https://wowforevertalents.com/shaman/
[wfts-cot]: https://wowforevertalents.com/shaman/talents/call-of-thunder/
[wfts-ef]: https://wowforevertalents.com/shaman/talents/elemental-fury/
[wfts-lvb]: https://wowforevertalents.com/shaman/talents/lava-burst/
[wfts-ab]: https://wowforevertalents.com/abilities/shaman/
[wfts-beta]: https://wowforevertalents.com/beta/
[wft]: https://wowforevertalent.com/shaman/reference/
[wftcalc]: https://wowforevertalent.com/shaman/
[blz924]: https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-september-24/2360696
[blz1001]: https://eu.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-1-october/631316/4
[iv]: https://www.icy-veins.com/wow-forever/shaman-class-overview
[iv-ele]: https://www.icy-veins.com/wow-forever/elemental-shaman-ranged-dps-pve-guide
[iv-enh]: https://www.icy-veins.com/wow-forever/enhancement-shaman-melee-dps-pve-guide
[iv-res]: https://www.icy-veins.com/wow-forever/restoration-shaman-healer-pve-guide
[wt]: https://www.warcrafttavern.com/forever/guides/shaman/
[cc]: https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/
[zk]: https://www.zockify.com/forever/shaman/
[kami]: https://kami-labs.fr/en/wow-forever/build-chaman-elementaire-wow-forever/
