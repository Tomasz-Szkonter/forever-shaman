---
title: Forever Shaman Changes
description: Every documented Shaman change in WoW Forever compared with Classic Era, covering new spells, the spell rescale, totems, imbues, talents, items and beta findings.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# ♾️ Forever Shaman Changes

This page lists every documented **Shaman** change in **WoW Forever** compared with Classic Era. It is the place to start: each section gives the headline changes and links to the detailed page. It reflects beta build `1.60.1.70170` (Oct 1, 2026). The beta is capped at **level 30**, so everything above level 30 is **client data only** and has not been tested live.

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified. See [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

## 🔎 Verification Note

- 🔵 marks information **explicitly confirmed by Blizzard**: the [Beta Development Notes][blz] (Sept 24 and Oct 1), the [BlizzCon Deep Dive recap][deepdive], the [Class Deep Dive][classdd] and Blizzard's class overview video (relayed by [guided.news][guided]). **Blizzard had not published a Shaman class deep dive as of Oct 2**, so most Shaman details below come from client data (🟢) and beta testing (🟡).
- 🟢 marks **client data**: datamined spell and talent tables ([wago.tools][wago-spell], [Wowhead Forever][wh-lb], [WCLBox][wcl], [ForeverChanges][fc], [wowforevertalents.com][wfts], [wowforevertalent.com][wft]).
- 🟡 marks **community testing or guide claims**. 🔴 marks anything **unverified or disputed**.
- Notation: ~~Classic Era value~~ → **Forever value**. The Classic baseline is **Classic Era 1.15.x**, not original patch 1.12.

## 📑 Contents

- [✨ New Baseline Abilities](#-new-baseline-abilities)
- [✨ New Talent Abilities](#-new-talent-abilities)
- [⚡ Spell Rescale](#-spell-rescale)
- [🗿 Totem Changes](#-totem-changes)
- [🗡️ Weapon Imbue Changes](#️-weapon-imbue-changes)
- [🌳 Talent Changes](#-talent-changes)
- [🛡️ Items and Sets](#️-items-and-sets)
- [🧬 Races](#-races)
- [⚙️ Mechanics Observed in Testing](#️-mechanics-observed-in-testing)
- [🐛 Known Beta Bugs](#-known-beta-bugs)
- [📋 Quick Reference](#-quick-reference)

---

## ✨ New Baseline Abilities

These come from the class trainer. All of them are part of the new **Totem Bar** system: you assign up to 4 totems (one per element) to a bar, then drop them with one spell. 🔵 Blizzard confirmed the Totem Bar system in its class overview video ([guided.news][guided]).

### Call of the Elements

- 🔵🟢 **NEW** trainer spell at **level 20**: "Simultaneously places up to 4 totems specified in the Totem Bar." ([Wowhead][wh-cote], [guided.news][guided])
- 🟢 **3.0 s cast**, no mana cost of its own and no cooldown. It triggers the normal 1.5 s GCD (global cooldown, the short lockout after most spells). It cannot be used while shapeshifted. ([wago SpellMisc][wago-misc], spell 66842)
- 🟢 Two more copies give you more preset totem sets:
  - **Call of the Ancestors**: level **30** ([Wowhead][wh-cota], spell 66843)
  - **Call of the Spirits**: level **40** ([ForeverChanges][fc], spell 66844)
- 🟢 The **Totemic Focus** talent also reduces the mana cost of the totems placed by these spells ([wfts][wfts]).
- 🟡 Testing shows Call of the Elements only saves time when you need **all 4 totems**. See [Mechanics Observed in Testing](#call-of-the-elements-timing).
- Details: [Totem Mechanics](../mechanics/Totem-Mechanics.md)

### Totemic Recall

- 🟢 **NEW** at **level 20**, instant, 1 rank: "Returns your totems to the earth, giving you **25% of the mana** required to cast each totem destroyed by Totemic Recall." ([WCLBox][wcl-recall])
- 🟡 It costs a GCD ([forum thread 2364945][f-2364945]). No source lists its mana cost or cooldown.
- 🔵 The mana refund was **not working** until it was fixed on Oct 1: "Fixed an issue where Totemic Recall was not restoring Mana" ([dev notes][blz]).

### Totemic Projection

- 🟢 **NEW** at **level 22**, instant, **1 min cooldown**, 30 yd range: "Relocates your active totems to the specified location." ([WCLBox][wcl-proj], [wago SpellCooldowns][wago-cd], spell 437009)
- 🟢 Costs 25% of base mana. 🟡 A pre-beta stream showed **230 mana** ([ForeverTome][ftome]).

### Fire Nova

- 🟢 ~~Fire Nova Totem~~ → **Fire Nova**, now a **spell** instead of a totem. It "instantly inflicts fire damage to enemies within **10 yd of your active Fire totem**". ([WCLBox][wcl-fn])
- 🟢 Cooldown ~~15 s~~ → **10 s**. Range ~~none~~ → **30 yd**. Same 5 ranks at the same levels (12/22/32/42/52) and the same mana per rank. ([WCLBox][wcl-fn], [ForeverChanges][fc])
- In Classic, Fire Nova Totem summoned a 5 HP totem that exploded after a delay. That delay is gone.
- 🟢 The talent **Improved Fire Nova** (renamed from Improved Fire Totems) adds +10/20% damage and −2/4 s cooldown ([wfts][wfts]).
- 🔴 Rank damage values disagree between sources (R1 53–62 vs 48–56). See [Spells and Ranks](../reference/Spells-and-Ranks.md#fire-nova).
- 🟡 Players report Fire Nova is "a massive threat generator even against single target" ([thread 2366147][f-2366147]).

---

## ✨ New Talent Abilities

New talents, with one line each. Full per-rank data lives on the talent pages. Values are client data 🟢 from [wowforevertalents.com][wfts] and [wowforevertalent.com][wft] unless noted.

### Lava Burst

- 🟢 **Elemental 31-point talent** (row 7). 2.5 s cast, 10 s cooldown, 30 yd, 165 mana. Deals **150–193** Fire damage (rank 1), **+20% if your Flame Shock is on the target**. 🟢 There is **no guaranteed crit** ([wago Spell][wago-spell], spell 408490).
- 🟢 Trainer ranks: R2 at level 50 and R3 at level 60 ([wfts abilities][wfts-ab]).
- 🔵 Sept 24: R1 and R2 base damage raised to "about 10% more base damage than the Lightning Bolt rank learned around the same level" ([dev notes][blz]).
- 🔴 R1 damage differs by source: 150–193 (wfts), 150–192 ([wft][wft], [WCLBox][wcl-lvb]), 143–185 ([EndgameTools][egt], probably pre-patch).
- [Elemental Talents: Lava Burst](../talents/Elemental-Talents.md#lava-burst)

### Riptide

- 🟢 **Restoration 31-point talent**. Instant, 6 s cooldown, 40 yd, 245 mana. Heals **484–535** plus **445 over 15 s** (rank 1). Your **Chain Heal cast directly on that target is 25% more effective**.
- 🟢 Trainer ranks: R2 at level 50, R3 at level 60 ([wfts abilities][wfts-ab]).
- 🔵 Sept 24: "Corrected an issue and now Riptide can land critical hits" ([dev notes][blz]).
- 🔴 R1 values differ by source: 484–535 (wfts), 486–534 ([WCLBox][wcl-rt]), 485–533 (wft), 456–504 ([EndgameTools][egt], stale). The DB2 base is 480 plus level scaling ([wago SpellEffect][wago-eff]).
- [Restoration Talents: Riptide](../talents/Restoration-Talents.md#riptide)

### Water Shield

- 🟢 **Restoration 11-point talent** (row 3). Instant, 10 min duration, **3 water globes**. Being hit by a spell, melee or ranged attack, **or landing a healing crit**, uses a globe and restores **2% of maximum mana**. Only one Elemental Shield can be active at a time.
- 🟢 DB2 in 70170 has a **15 s cooldown** and a **3.5 s internal cooldown** (ICD: a hidden timer between procs) between globes ([wago SpellAuraOptions][wago-auraopt]).
- 🟡 Beta bugs: the 15 s cooldown was not applied, and the tooltip showed 1% at 2 or fewer charges. See [Known Beta Bugs](Known-Beta-Bugs.md).
- [Restoration Talents: Water Shield](../talents/Restoration-Talents.md#water-shield)

### Maelstrom Weapon

- 🟢 **Enhancement 26-point talent** (row 6), 5 ranks. Melee hits have a **chance** to reduce the cast time and mana cost of your next **Lightning Bolt** by **4/8/12/16/20%** per stack. **Stacks to 5, lasts 30 s.**
- 🟡 At 5/5 talent and 5 stacks, that reads as an **instant, free Lightning Bolt** (20% × 5). The tooltip implies the per-stack reading, but nobody has confirmed it in-game ([Warcraft Tavern][wt], [thread 2356116][f-2356116]).
- 🟡 Lightning Bolt **only**: not Chain Lightning, not heals ([thread 2354160][f-2354160]).
- 🟡 Testers say it builds **slowly on two-handers**. Whether it uses a flat chance or PPM (procs per minute, which normalizes for weapon speed) is unknown ([thread 2365290][f-please-fix]).
- [Enhancement Talents: Maelstrom Weapon](../talents/Enhancement-Talents.md#maelstrom-weapon)

### Rage of the Farseer

- 🟢 **Enhancement 31-point talent**. Instant, **3 min cooldown**: **+30% attack speed for 25 s**.
- 🔵 Sept 24: it **no longer increases spell casting speed** ([dev notes][blz]).
- 🟡 Guides describe it as a "personal Bloodlust" ([Warcraft Tavern][wt]).
- [Enhancement Talents: Rage of the Farseer](../talents/Enhancement-Talents.md#rage-of-the-farseer)

### Lightning Overload

- 🟢 **Elemental 21-point talent**, 3 ranks. Lightning Bolt and Chain Lightning have a **3/7/10%** chance to cast a free second copy for **half damage** and no threat.
- 🟢 The tooltip names Lightning Bolt and Chain Lightning only, so it does **not** work on Lava Burst. Forum posters say the same ([thread 2356600][f-2356600]).
- [Elemental Talents: Lightning Overload](../talents/Elemental-Talents.md#lightning-overload)

### Earthbound

- 🟢 **Elemental 21-point talent**, 1 rank. Earthbind Totem **immobilizes** nearby targets for **5 s** when cast.
- 🟡 Guides call it "incredibly powerful in PvP" ([Icy Veins][iv]).
- [Elemental Talents: Earthbound](../talents/Elemental-Talents.md#earthbound)

### Mental Dexterity and Mental Quickness

- 🟢 **Mental Dexterity** (Enhancement row 2, 3 ranks): Attack Power **+33/67/100% of Intellect**. [Enhancement Talents: Mental Dexterity](../talents/Enhancement-Talents.md#mental-dexterity)
- 🟢 **Mental Quickness** (Enhancement row 5, 2 ranks): spell damage and healing **+15/30% of Intellect**. DB2 confirms 30 at max rank. 🔴 Early previews said 100% ([wago SpellEffect][wago-eff], [thread 2354160][f-2354160]). [Enhancement Talents: Mental Quickness](../talents/Enhancement-Talents.md#mental-quickness)

### Shamanistic Focus

- 🟢 **Enhancement 11-point talent**, 1 rank. Mana cost of **Shocks and Lightning Shield −45%**.
- [Enhancement Talents: Shamanistic Focus](../talents/Enhancement-Talents.md#shamanistic-focus)

### Improved Stormstrike

- 🟢 **Enhancement 21-point talent**, 2 ranks, requires Stormstrike. On Stormstrike: a 50/100% chance to gain **50% mana regeneration while casting for 15 s**. The Stormstrike cooldown also has a 50/100% chance to **reset on Dodge or Parry**.
- 🟡 Players point out the reset "will not trigger on bosses" ([thread 2365734][f-2365734]).
- [Enhancement Talents: Improved Stormstrike](../talents/Enhancement-Talents.md#improved-stormstrike)

### Mindfulness

- 🟢 **Restoration row 2**, 3 ranks. **17/33/50%** of your mana regeneration continues while casting. This works around the 5SR (five-second rule: Spirit-based regen normally stops for 5 s after you spend mana).
- 🟡 wow.gg calls it "Meditation" ([wow.gg][wowgg-resto]); the client name is Mindfulness.
- [Restoration Talents: Mindfulness](../talents/Restoration-Talents.md#mindfulness)

---

## ⚡ Spell Rescale

🟢 Forever caster spells use **lower base values** and **higher spell-power coefficients at low ranks**. The coefficient is the fraction of your spell power added to a spell. Rank counts and learn levels are **unchanged** (except Mana Tide). Full rank tables: [Spells and Ranks](../reference/Spells-and-Ranks.md). Coefficients: [Spell Coefficients](../mechanics/Spell-Coefficients.md).

- 🔵 Context from Blizzard: bonus healing now also gives **one third as much bonus damage**, and **caster weapons now carry spell power** ([Deep Dive][deepdive]). Warcraft Tavern says Forever moves reliance "from spell ranks to gear" 🟡 ([WT][wt]).
- 🔴 "A general cut to spell base damage" is a **player description, not a Blizzard statement** ([wofwforever][wofw]).
- 🟡 A community estimate says Elemental needs about **700 spell power** for Forever Lightning Bolt to match a Classic one. This is tooltip arithmetic, not a measurement ([thread 2353745][f-2353745], [thread 2365290][f-please-fix]).
- 🔵 Downranked spells now get **less spell power and a lower chance to trigger talents**. See [Forever System Changes](Forever-System-Changes.md#downranking-penalty).

### Lightning Bolt

- 🟢 Cast ~~3.0 s~~ → **2.5 s** from rank 4 up, with lower mana costs (R10 ~~265~~ → **220**).
- 🟢 Rank 10 damage ~~428–477~~ → **190–211**. Coefficient ~~85.7%~~ → **71.4%**. ([WCLBox][wcl-lb], [Wowhead R10][wh-lb])
- 🟢 Low ranks gain coefficient: R1 ~~12.3%~~ → **42.9%**, R2 ~~31.4%~~ → **57.1%**.
- 🔵 Sept 24: "Damage on ranks 3 and 4 increased to make these spells always upgrades over previous ranks (despite changing cast times)" ([dev notes][blz]). 🟢 R3 is now 44–52, which is still below Classic R3 (48–57).

### Chain Lightning

- 🟢 Cast ~~2.5 s~~ → **2.0 s**, mana R4 ~~605~~ → **485**, cooldown still 6 s, 3 targets.
- 🟢 R4 damage ~~505–564~~ → **119–133**. Coefficient ~~71.4%~~ → **57.1%** ([WCLBox][wcl-cl], [Wowhead][wh-cl]).
- 🔴 That base-damage cut (about −76%) is much deeper than Lightning Bolt's (about −56%). It may be deliberate or a data-reading error, and **needs an in-game check**.

### Shocks

- 🟢 About **40–45% less base damage**. Mana, 6 s cooldowns and learn levels are unchanged. ([WCLBox Earth][wcl-es], [Flame][wcl-fs], [Frost][wcl-frs])
- Earth Shock R7 ~~517–545~~ → **293–309** (coefficient 38.6%, [Wowhead][wh-es])
- Flame Shock R6 ~~292 + 320~~ → **166 + 176** over 12 s
- Frost Shock R4 ~~492–520~~ → **279–295** (50% slow for 8 s, unchanged)

### Heals

- 🟢 About **7–25% less base healing**. Cast times and mana are unchanged ([WCLBox HW][wcl-hw], [LHW][wcl-lhw], [CH][wcl-ch]).
- Healing Wave R10 ~~1620–1850~~ → **1508–1722**, still 3 s, coefficient 85.7% ([Wowhead][wh-hw])
- Lesser Healing Wave R6 ~~832–928~~ → **775–865**
- Chain Heal R3 ~~567–646~~ → **474–539**
- 🔴 A search summary claimed "Healing Wave changed to 1.5 s". Client data shows **3 s** at R10, so the claim is treated as false.

### Lightning Shield and utility spells

- 🟢 Lightning Shield orb damage R7 ~~198~~ → **178** (lower at every rank). Still 3 orbs and 10 min ([WCLBox][wcl-ls]).
- 🟢 **Ghost Wolf** baseline is **unchanged**: 3 s cast, +40% speed, outdoors only. Indoor use and the instant cast come from **Improved Ghost Wolf** ([WCLBox][wcl-gw]). 🔴 Icy Veins and Conquest Capped list a 2 s base cast, which is probably the BlizzCon value.
- 🔵 Ghost Wolf "should now be more visible while in well-lit areas" (Oct 1, [dev notes][blz]).
- 🟢 **Reincarnation** is unchanged and **still needs an Ankh** ([Wowhead][wh-reinc]). Purge, Astral Recall, Far Sight, Water Walking, Water Breathing, Cure Poison, Cure Disease and Ancestral Spirit are unchanged ([ForeverChanges][fc]).
- 🟡 Elemental Mastery is **not** in the spellbook either ([ClassicWoWForever][cwf]).

---

## 🗿 Totem Changes

Detailed rules: [Totem Mechanics](../mechanics/Totem-Mechanics.md). Per-rank values: [Totems](../reference/Totems.md).

### Totem system

- 🔵🟢 **Totem Bar** with Call of the Elements, Ancestors and Spirits, plus Totemic Recall and Totemic Projection (see [New Baseline Abilities](#call-of-the-elements)).
- 🟢 Most buff and utility totems: range ~~20 yd~~ → **30 yd**, duration ~~2 min~~ (~~1 min~~ for Healing Stream and Mana Spring) → **5 min** ([ForeverChanges][fc]).
- 🟢 The Classic talent **Totemic Mastery** (30 yd totem radius) is gone. Its effect is baseline in practice, since Forever tooltips read 30 yd ([wfts][wfts]). 🟡 No source says "baseline" outright.
- 🟡 Resistance totems now affect "party and raid members" ([ForeverTome][ftome]).
- 🟡 Element totems still come from class quests: **Earth at 4, Fire at 10, Water at 20, Air at 30** ([Warcraft Tavern][wt]). See [Class Quests](../reference/Class-Quests.md).
- 🟡 **Air totems cannot be tested properly** at the level-30 cap. Windfury Totem is first available at **level 32** ([thread 2353663][f-2353663]).

### Totem stacking rules

🔵 From the Sept 24 notes ([dev notes][blz], [mobalytics relay][moba924]):
- "**Tranquil Air Totem, Windfury Totem, and Grace of Air Totem no longer stack together** even if used by different Shamans in the same group." In practice a group gets **one air-totem effect** at a time.
- **Flametongue Totem** "no longer has a duration and is instantly replaced when placing another totem". It can no longer be stacked by recasting, and **no longer stacks with Flametongue Weapon or Windfury Totem**. 🔴 Client data still shows a 5 min totem duration, so "no duration" probably refers to the buff on players.
- Buffs now display as "Windfury Totem" (not "…Passive") and "Flametongue Totem" (not "…Effect").
- 🟡 Players list the loss of **totem twisting** (swapping air totems to keep two buffs up) among their top complaints ([thread "Please fix shamans"][f-please-fix]). 🔴 A guide claims early testers saw Windfury's benefit vanish when it was replaced, but Windfury Totem is above the beta cap, so this cannot come from beta testing ([leprestore][leprestore]).

### Per-totem changes

🟢 Client data ([WCLBox][wcl], [ForeverChanges][fc]). "30 yd / 5 min" means the range and duration change above.

| Totem | Element | Headline change |
|---|---|---|
| Strength of Earth | Earth | 30 yd / 5 min; Strength **cut about 30%**: R5 ~~77~~ → **53** |
| Stoneskin | Earth | 30 yd / 5 min; reduces "Physical" instead of "melee" damage; values unchanged |
| Tremor | Earth | ~~2 min~~ → **5 min** |
| Earthbind, Stoneclaw | Earth | Unchanged. The **Earthbound** talent makes Earthbind root on cast |
| Searing | Fire | Unchanged |
| Fire Nova | Fire | **Now a spell**, see [Fire Nova](#fire-nova) |
| Magma | Fire | R4 ~~75~~ → **73** per 2 s |
| Flametongue | Fire | 30 yd / 5 min; damage slightly **up** (R4 ~~15.8–48.7~~ → **17–55**); non-stacking 🔵 |
| Frost / Fire / Nature Resistance | Fire / Water / Air | 30 yd / 5 min; +60 at R3 |
| Healing Stream | Water | 30 yd / 5 min; heal per 2 s **down**, R5 ~~14~~ → **11**. **Restorative Totems** now gives it +50% |
| Mana Spring | Water | 30 yd / 5 min; 4/6/8/10 mana per 2 s, unchanged |
| Poison / Disease Cleansing | Water | 30 yd / 5 min. 🔵 Disease Cleansing's 5 min duration was bugged until the Oct 1 fix |
| Mana Tide (talent) | Water | Now a 16-point talent; R1 at level ~~40~~ → **25**; R1 ~~170~~ → **88** mana per 3 s; ~~20~~ → **30 yd** |
| Windfury | Air | 30 yd / 5 min; AP **cut about 22%**: ~~122/229/315~~ → **95/179/246**; non-stacking 🔵. Level 32+, so **untested** |
| Grace of Air | Air | 30 yd / 5 min; Agility **buffed**: ~~43/67/77~~ → **49/77/89** |
| Windwall | Air | 30 yd / 5 min |
| Grounding, Sentry | Air | Unchanged |
| Tranquil Air | Air | 🔴 **Conflict**: the client diff says "not in Forever" and [Wowhead returns 404][wh-tranq], yet Blizzard's Sept 24 notes give it stacking rules |

---

## 🗡️ Weapon Imbue Changes

Detailed mechanics: [Weapon Imbues](../mechanics/Weapon-Imbues.md).

- 🟢 All four imbues last ~~5 min~~ → **60 min**. Mana costs and learn levels are unchanged ([WCLBox][wcl]).
- 🔵 Flametongue Totem no longer stacks with Flametongue Weapon or Windfury Totem ([dev notes][blz]).

### Windfury Weapon

- 🟢 Still a **20% chance for 2 extra attacks**. AP bonus is almost unchanged (R3 ~~316~~ → **315**) ([WCLBox][wcl-wfw]).
- 🟢 **New clause:** on the main hand it "disables any benefit you personally receive from **Windfury Totem**".
- 🟢 **ICD:** Classic Era 1.15 has a **1.5 s internal cooldown** on Windfury Weapon and Totem (DB2, and a [magey test from 2023][magey-wf]); warcraft.wiki.gg says there was none in original 1.12. No source reports a Forever change. Windfury Weapon is learned at **level 30**, so it **can be tested now**.

### Flametongue Weapon

- 🟢 Damage slightly lower: R6 ~~36.5–112.4~~ → **35–112** (scales with weapon speed) ([WCLBox][wcl-ftw]).
- 🟢 **New clause:** on the main hand it "disables any benefit you personally receive from **Flametongue Totem**".
- 🟡 Its tooltip did not update with spell power, although the damage did scale. This was marked fixed ([forever-bugs #80][fb-80]). 🟢 In 70170 the tooltip gained a flat extra term from the Flametongue Attack spell ([wago Spell][wago-spell]).

### Frostbrand Weapon

- 🟢 Frost damage lower: ~~48/77/124/166/187~~ → **45/72/117/159/169**. The 25% slow for 8 s is unchanged ([WCLBox][wcl-fbw]).

### Rockbiter Weapon

- 🟢 **Only the duration changed.** AP values are unchanged and it still adds threat ([WCLBox][wcl-rb]).
- 🟡 Rockbiter and Earth Shock have high threat modifiers. Players report pulling threat off tanks in low-level dungeons ([thread 2365062][f-2365062]).

- 🟡 **Elemental Weapons** (Enhancement, 3 ranks) boosts Rockbiter, Windfury Weapon, Flametongue and Frostbrand, but **not Windfury Totem** ([classicwow.gg][cwgg]).

---

## 🌳 Talent Changes

Full trees with per-rank values: [Talent Overview](../talents/Talent-Overview.md), [Elemental](../talents/Elemental-Talents.md), [Enhancement](../talents/Enhancement-Talents.md), [Restoration](../talents/Restoration-Talents.md).

- 🔵 Trees keep the Classic structure (3 trees, 7 rows, 51 points) and the 11/21/31-point milestones, **plus a new 16-point milestone** ([Deep Dive][deepdive], [Class Deep Dive][classdd]).
- 🟢 Shaman has **50 talents** (Classic had 46): **12 new, 30 changed (5 of them renamed), 8 unchanged, and 8 Classic talents removed** ([wfts][wfts]). Other counts exist (Zockify: 17 new / 13 removed; Power Up Gaming: 15 new / 25 changed / 10 unchanged) because they count renames differently.
- 🔵 Oct 1 brought **no Shaman talent changes** ([EU dev notes][blz-eu1001]).

### Milestone talents

🟢 Current layout, after the Sept 24 swap ([wft calculator][wftcalc], [wfts][wfts]):

| Points | Elemental | Enhancement | Restoration |
|---|---|---|---|
| 11 (row 3) | Elemental Focus, **Elemental Alacrity** | Elemental Weapons, **Shamanistic Focus** (new), Anticipation | Ancestral Healing, Healing Focus, **Water Shield** (new) |
| 16 (row 4) | Improved Fire Nova, Eye of the Storm, **Call of Thunder** | Toughness, Flurry, **Stormstrike** (moved from row 7) | Tidal Mastery, Restorative Totems, **Mana Tide Totem** (moved from row 7) |
| 21 (row 5) | Elemental Reach, **Lightning Overload** (new), **Earthbound** (new) | Spirit Weapons, **Mental Quickness** (new), **Improved Stormstrike** (new) | Healing Way, Nature's Swiftness |
| 26 (row 6) | **Elemental Fury** (now 5 ranks) | **Maelstrom Weapon** (new) | Purification |
| 31 (row 7) | **Lava Burst** (new) | **Rage of the Farseer** (new) | **Riptide** (new) |

🔵 Sept 24: Elemental Fury and Elemental Alacrity **swapped rows** ([dev notes][blz]). Guides written before that (including Warcraft Tavern's Elemental screenshot and Conquest Capped) show the old layout.

### Removed talents

🟢 [wfts][wfts]:
- **Elemental Mastery**: gone, with **no replacement named**. 🔴 Whether it returns in some form is unknown.
- **Two-Handed Axes and Maces**: now **baseline** 🟡 ([Zockify][zk], [WT][wt]).
- **Weapon Mastery**, **Shield Specialization**, **Enhancing Totems**, **Improved Weapon Totems**: removed, no successor named.
- **Totemic Mastery**: effectively baseline (30 yd totems) 🟡.
- **Nature's Guidance** (+hit): its hit role moved into **Tidal Focus** 🟡 (inference).
- **Renamed:** Lightning Mastery → **Elemental Alacrity**, Storm Reach → **Elemental Reach**, Improved Fire Totems → **Improved Fire Nova**, Healing Grace → **Natural Grace**, Parry → **Spirit Weapons**. **Earth's Grasp** moved from Elemental to Enhancement.

### Big redesigns

🟢 ([wfts][wfts], [wft][wft]):
- **Stormstrike**: now a **16-point** talent, and its cooldown goes ~~20 s~~ → **8 s**. The target takes +20% damage from your **next Lightning Bolt, Chain Lightning or Earth Shock** (12 s), instead of from your next 2 Nature damage sources.
- **Mana Tide Totem**: now a **16-point** talent, 88 mana per 3 s at rank 1, 30 yd.
- **Elemental Fury**: ~~1 rank~~ → **5 ranks** (+20% crit damage bonus per rank, still 100% at 5/5), moved to row 6.
- **Elemental Alacrity**: ~~5 ranks, −1.0 s~~ → **3 ranks, −0.5 s** to Lightning Bolt, Chain Lightning and Lava Burst cast time.
- **Call of Thunder**: ~~5 ranks~~ → **1 rank**. 🔴 wft shows +3% Lightning Bolt and Chain Lightning crit, but the **client tooltip is blank** in 70170 ([wfts][wfts-cot]).
- **Flurry**: ~~10–30%~~ → **5–25%** attack speed, and it now triggers on **melee** crits only.
- **Thundering Strikes**: crit now applies to **all spells and attacks**, not only weapon attacks.
- **Ancestral Knowledge**: ~~+max mana~~ → **+2–10% Intellect**. **Toughness**: ~~+armor~~ → **+2–10% Stamina**.
- **Healing Way**: ~~a stacking debuff on the target~~ → a flat **+8/17/25% Healing Wave** healing.
- **Tidal Focus** gains **+1–5% hit**. **Tidal Mastery** now covers **healing only** (no longer lightning).
- **Restorative Totems**: Healing Stream Totem bonus doubled to **+10–50%**.
- **Improved Ghost Wolf**: **−1/3 s** cast (instant at 2/2) and **usable indoors**.
- **Spirit Weapons**: threat **−30% without Rockbiter, +30% with Rockbiter** (an off-tank option).
- **Concussion** now covers Earth Shock only among the shocks. **Call of Flame** now also covers Flame Shock, Fire Nova and Lava Burst.

---

## 🛡️ Items and Sets

Full list: [Items and Set Bonuses](../reference/Items-and-Set-Bonuses.md).

- 🟡 Shamans still use **totems in the Relic slot** ([WT][wt]). Mail is still learned at level 40.
- 🔵 **Caster weapons now carry spell damage and healing** from around level 10 ([Deep Dive][deepdive]). 🟡 Caster **staves have lower weapon DPS in game** than Wowhead shows (Staff of Westfall 20.5 on Wowhead vs **15.2** in game), so do not trust Wowhead weapon DPS for Forever yet ([thread 2359184][f-2359184], [thread 2365746][f-2365746]).

### Totem relics

🟢 New relics ([WoWHandbook][wowhb-relics]). Highlights:
- **Polished Driftwood Icon** (level 20): 8% of mana regen continues while casting.
- **Totem of the Storm** (level 60): Lightning Bolt can trigger Maelstrom Weapon at 50% reduced chance.
- **Burning Totem** (60): Flame Shock +3 s. **Tidal Totem** (60): Healing Wave −5% mana. **Totem of Urgency** (60): Lesser Healing Wave crit +4%.
- Also: Firestorm Totem, Windcarved Effigy, Totem of Ancestral Protection, Totem of Elders, Totem of the Undergrove.

### Spiritcaller sets

🟢 New Hyjal raid sets (mail, 5 pieces), datamined ([wow.gg][wowgg-sets], [WoWHandbook][wowhb-gear]):
- **The Spiritcaller** (healing): 5-piece **Riptide cooldown −1 s**.
- **The Spiritcaller's Rage** (Enhancement): 5-piece **Stormstrike cooldown −0.5 s**.
- **The Spiritcaller's Storm** (Elemental): 5-piece **Lava Burst cooldown −1 s**.

### Dungeon set reworks

- 🟢 **The Elements (D1)** reworked: +8 all resistances, +18 spell power, a melee-disarm proc, a +65 spell power proc and +8 mp5 ([Wowhead item-set 187][wh-d1]).
- 🟢 **The Five Thunders (D2)** reworked, including an "Electrocute" bonus ([wow.gg][wowgg-sets]). WoWHandbook describes a different proc, so the details are unsettled.
- 🔵 Unique dungeon boss items are now blue quality and set bonuses have been improved ([Deep Dive][deepdive]).
- 🔴 **The Earthfury (T1)** and **The Ten Storms (T2)** are probably **unchanged**. WoWHandbook labels them "changed", but its text matches the Classic bonuses word for word. If unchanged, the Earthfury 3-piece (totem radius to 30 yd) does nothing, because 30 yd is now baseline.

---

## 🧬 Races

🔵 Shaman is **no longer Horde-only**. **Dwarf** is the only Alliance Shaman, and the new **Windshaper Skyborne** (Horde, paid Heroic Pack or higher) can also be a Shaman, alongside Orc, Tauren and Troll ([Deep Dive][deepdive], [Meet the Skyborne][skyborne]). There is no Draenei in Forever. Every race now has two active and two passive racials. Notable for Shaman: Orc **Blood Fury** now also gives spell power, Tauren **Endurance** gives +1% hit, Troll **Berserking** is a flat +10% haste, and Skyborne **Wind Blessed** gives +1% haste. Full details: [Races and Racials](Races-and-Racials.md).

---

## ⚙️ Mechanics Observed in Testing

Community findings from the beta. 🟡 unless marked. Builds are inferred from dates.

### Call of the Elements timing

- 🟡 Manual drops place totems at 0/1/2/3 s with the GCD ending at 4 s. Call of the Elements lands all 4 at **3.0 s**. So it **saves only 1 s, and only when you need all 4 totems** without pushback. Haste and slows affect it. For 3 or fewer totems, manual placement is better ([thread 2369645][f-2369645], Oct 2).

### Totem behavior

- 🟡 The macro `/click TotemFrameTotemN RightButton`, used to dismiss a single totem, **does nothing** in Forever. Below level 20, right-clicking the totem frame is the only way to dismiss one ([thread 2364945][f-2364945], Sept 28).
- 🟡 Stoneclaw Totem "builds passive threat to the totem and only overtakes if it is out threating". It is not a true taunt ([thread 2366147][f-2366147]).
- 🟡 Stoneskin Totem at max rank gives 30 physical damage reduction, ×1.2 with Guardian Totems = 36. 🔴 Wowhead reportedly found a leftover Season of Discovery 4% damage reduction effect on Stoneskin and Windwall ([thread 2367626][f-2367626]).

### Crits and procs

- 🟡 **Flame Shock periodic ticks can crit** ([thread 2366738][f-2366738]). 🔵 Blizzard's fix notes say HoTs and DoTs such as Riptide can crit ([dev notes][blz]).
- 🟡 **Elemental Devastation proc test:** it triggers from Lightning Bolt, Earth Shock, Frost Shock and the **initial** Flame Shock hit. It does **not** trigger from Flame Shock periodic crits, Searing Totem, Fire Nova, Flametongue Weapon or Frostbrand Weapon. Lightning Shield could not be made to crit. Method: 3/3 talent, cast at a dummy until a crit, check the buff ([thread 2366738][f-2366738], Sept 30).
- 🟢 **Lava Burst** does **not** benefit from Call of Thunder, Concussion or Lightning Overload, but **does** get +15% from Call of Flame. This comes from the talent text, which forum posters repeat ([thread 2353745][f-2353745]). ⚠ Not an in-game test: Lava Burst is a 31-point talent and out of reach at the beta cap, so this is a tooltip reading.
- 🟡 Water Shield gives nothing for Elemental's **damage** crits, only heal crits and hits taken ([thread 2364061][f-2364061]).
- 🟡 **Revelation** (a spell-crit weapon enchant: +100% crit on the next non-crit spell) is consumed only by direct spells, **not** by DoT ticks, melee or totem spells. That leaves a +100% crit window for totems and DoTs ([forever-bugs #163][fb-163]).

### Enhancement

- 🟡 Maelstrom Weapon procs are "insanely slow" on two-handers; players estimate 17–20 s for 5 stacks. 🟢 DB2 shows ProcChance 100 with no PPM entry on the talent spell, so the real proc logic is likely elsewhere ([thread 2356116][f-2356116], [wago SpellAuraOptions][wago-auraopt]).
- 🟡 Spirit Weapons gives "−30% threat reduction … when not using Rockbiter" ([thread 2365734][f-2365734]).

### Threat and gear

- 🟡 Rockbiter and Earth Shock have high threat modifiers and Fire Nova is a big threat generator, so Shamans pull threat in low-level dungeons. There is no single-target taunt ([thread 2365062][f-2365062], [thread 2366147][f-2366147]).
- 🟡 Crescent Staff is no longer better than a one-hander for leveling, because staff DPS was cut ([thread 2365746][f-2365746]).
- 🔴 One player claims an imbue on a white, non-soulbound weapon stays on it after a trade. Others dispute it. **Untested** ([thread 2368409][f-2368409]).

---

## 🐛 Known Beta Bugs

Short list. Full table with status and sources: [Known Beta Bugs](Known-Beta-Bugs.md).

- 🔵 **Fixed Oct 1:** Totemic Recall gave no mana back; Disease Cleansing Totem did not last 5 min; Ghost Wolf was hard to see in bright areas ([dev notes][blz]).
- 🔵 **Fixed Sept 24:** Riptide could not crit; Flametongue Totem stacked by recasting and with Flametongue Weapon or Windfury Totem ([dev notes][blz]).
- 🟡 **Water Shield:** the listed 15 s cooldown was not applied (marked Fixed Oct 1 on [forever-bugs #134][fb-134], direction unclear); the tooltip reads 1% at 2 or fewer charges ([thread 2361063][f-2361063]).
- 🟡 **Open:** Fire Nova's range indicator does not turn red past 30 yd ([#79][fb-79]); the Equipment Manager in Ghost Wolf shows both models ([#40][fb-40]); Ghost Wolf is now too bright ([thread 2369180][f-2369180]).

---

## 📋 Quick Reference

| Area | Headline change | Conf. | Details |
|---|---|---|---|
| Totem Bar | Call of the Elements (20), Ancestors (30), Spirits (40): drop 4 totems in one 3 s cast | 🔵🟢 | [Totem Mechanics](../mechanics/Totem-Mechanics.md) |
| Totem utility | Totemic Recall (20, 25% mana back), Totemic Projection (22, 1 min CD) | 🟢 | [Totem Mechanics](../mechanics/Totem-Mechanics.md) |
| Fire Nova | Totem → instant spell around your Fire totem, 10 s CD, 30 yd | 🟢 | [Spells and Ranks](../reference/Spells-and-Ranks.md#fire-nova) |
| Totem range/duration | ~~20 yd / 2 min~~ → **30 yd / 5 min** | 🟢 | [Totems](../reference/Totems.md) |
| Totem stacking | One air-totem effect per group; Flametongue Totem doesn't stack | 🔵 | [Totem Mechanics](../mechanics/Totem-Mechanics.md) |
| Lightning Bolt | 2.5 s from R4; R10 ~~428–477~~ → **190–211**; coefficient 71.4% | 🟢 | [Spells and Ranks](../reference/Spells-and-Ranks.md#lightning-bolt) |
| Chain Lightning | 2.0 s; R4 ~~505–564~~ → **119–133** | 🟢 / 🔴 | [Spells and Ranks](../reference/Spells-and-Ranks.md#chain-lightning) |
| Shocks / heals | Base −40–45% / −7–25% | 🟢 | [Spells and Ranks](../reference/Spells-and-Ranks.md) |
| Imbues | 60 min; FT/WF Weapon on main hand cancel your own FT/WF Totem benefit | 🟢 | [Weapon Imbues](../mechanics/Weapon-Imbues.md) |
| 31-point talents | Lava Burst, Rage of the Farseer, Riptide | 🟢 | [Talent Overview](../talents/Talent-Overview.md) |
| 16-point talents | Call of Thunder, Stormstrike, Mana Tide Totem | 🔵🟢 | [Talent Overview](../talents/Talent-Overview.md) |
| Removed | Elemental Mastery (no replacement), 2H Axes and Maces (baseline), Totemic Mastery (baseline) | 🟢 | [Talent Overview](../talents/Talent-Overview.md) |
| Races | Dwarf (Alliance) and Windshaper Skyborne join Orc, Tauren, Troll | 🔵 | [Races and Racials](Races-and-Racials.md) |

## 🔍 To Verify

- [ ] **Call of Thunder** effect in 70170: does it still give +3% LB/CL crit? The wft value comes from BlizzCon and the client tooltip is blank ([wfts][wfts-cot]).
- [ ] **Tranquil Air Totem**: does it exist in Forever? The client diff says no, while Blizzard's Sept 24 notes give it stacking rules ([ForeverChanges][fc], [dev notes][blz]). It is level 50, so not testable in the beta.
- [ ] **Lava Burst R1** damage on a level-40 character (150–193 vs 150–192 vs 143–185). Not testable until the cap reaches 40 ([wfts][wfts], [WCLBox][wcl-lvb], [EndgameTools][egt]).
- [ ] **Chain Lightning** R1 base damage in game (85–97 per client data), to check whether the steep cut is real. CL R1 is level 32, above the current cap ([WCLBox][wcl-cl]).
- [ ] **Maelstrom Weapon**: per-stack vs total reduction, and flat chance vs PPM (count procs per swing on a 1H vs a 2H) ([thread 2356116][f-2356116]).
- [ ] **Totemic Recall** on 70170: is 25% really refunded? The new helper spell 1323420 has an energize base of 0 ([wago Spell][wago-spell]).
- [ ] **Water Shield**: is the 15 s cooldown now applied in game, and does the 1% tooltip at low charges reflect the real mana gain? ([forever-bugs #134][fb-134], [thread 2361063][f-2361063])
- [ ] **Windfury Weapon ICD** in Forever (1.5 s in Classic Era). Testable now at level 30 ([magey][magey-wf]).
- [ ] **Flame Shock ticks** and Elemental Devastation: intended or a bug? ([thread 2366738][f-2366738])
- [ ] **Fire Nova** rank damage values, since sources disagree ([WCLBox][wcl-fn], [EndgameTools][egt]).
- [ ] **Earthfury / Ten Storms** bonuses on the Wowhead Forever pages, which did not render for research ([Wowhead 207][wh-t1], [216][wh-t2]).
- [ ] **Dual wield**: Zockify says it was not available in the BlizzCon demo (level 38), and a Wowhead headline says Enhancement uses only two-handers. No beta source confirms either ([Zockify][zk], [Wowhead news 383200][wh-383200]).
- [ ] **Totemic Recall** mana cost and cooldown: no source lists them ([WCLBox][wcl-recall]).
- [ ] **Imbues on traded weapons** ([thread 2368409][f-2368409]).

## 📚 Sources

- [Blizzard: Beta Development Notes (Sept 24, Oct 1)][blz] and [EU copy, Oct 1][blz-eu1001]: patch changes, fixes, totem stacking rules
- [Blizzard: Deep Dive panel recap][deepdive]: talents, itemization, unified stats
- [Blizzard: Class Deep Dives, Hunter and Druid][classdd]: talent structure and rules
- [Blizzard: Meet the Skyborne][skyborne]: Skyborne classes and racials
- [guided.news][guided]: relay of Blizzard's class overview video (Totem Bar)
- [mobalytics: Sept 24 notes][moba924]: verbatim totem text
- [wago.tools DB2][wago-spell]: spell data, cast times, cooldowns, proc settings
- [Wowhead Forever spell DB][wh-lb]: spell pages and coefficients
- [WCLBox Forever DB][wcl] and [ForeverChanges][fc]: Classic vs Forever spell diffs
- [wowforevertalents.com][wfts] and [wowforevertalent.com][wft]: client-read talent data
- [ClassicWoWForever][cwf], [EndgameTools][egt], [ForeverTome][ftome], [classicwow.gg][cwgg]: secondary spell summaries
- [Warcraft Tavern Shaman guide][wt], [Icy Veins Shaman overview][iv], [Zockify][zk], [wow.gg Resto][wowgg-resto], [wofwforever][wofw]: guide claims
- [WoWHandbook relics][wowhb-relics], [WoWHandbook gear][wowhb-gear], [wow.gg set bonuses][wowgg-sets], [Wowhead item-set 187][wh-d1]: items and sets
- [ClassicWoWCommunity/forever-bugs][fb]: bug reports
- Blizzard beta forum threads (cited inline): player tests and feedback
- [magey Windfury Totem][magey-wf]: Classic Era Windfury ICD

[blz]: https://us.forums.blizzard.com/en/wow/t/2360696
[blz-eu1001]: https://eu.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-1-october/631316/4
[deepdive]: https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap
[classdd]: https://worldofwarcraft.blizzard.com/en-gb/news/24301515
[skyborne]: https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne
[guided]: https://guided.news/en/news/wow-forever-shaman-totem-systems-rogue-overhaul/
[moba924]: https://mobalytics.gg/wow-forever/guides/patch-notes-september-24
[wago-spell]: https://wago.tools/db2/Spell/csv?build=1.60.1.70170
[wago-eff]: https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170
[wago-misc]: https://wago.tools/db2/SpellMisc/csv?build=1.60.1.70170
[wago-cd]: https://wago.tools/db2/SpellCooldowns/csv?build=1.60.1.70170
[wago-auraopt]: https://wago.tools/db2/SpellAuraOptions/csv?build=1.60.1.70170
[wh-cote]: https://www.wowhead.com/forever/spell=66842/call-of-the-elements
[wh-cota]: https://www.wowhead.com/forever/spell=66843/call-of-the-ancestors
[wh-lb]: https://www.wowhead.com/forever/spell=15208/lightning-bolt
[wh-cl]: https://www.wowhead.com/forever/spell=10605/chain-lightning
[wh-es]: https://www.wowhead.com/forever/spell=10414/earth-shock
[wh-hw]: https://www.wowhead.com/forever/spell=25357/healing-wave
[wh-reinc]: https://www.wowhead.com/forever/spell=20608/reincarnation
[wh-tranq]: https://www.wowhead.com/forever/spell=25908/tranquil-air-totem
[wh-d1]: https://www.wowhead.com/forever/item-set=187/the-elements
[wh-t1]: https://www.wowhead.com/forever/item-set=207/the-earthfury
[wh-t2]: https://www.wowhead.com/forever/item-set=216/the-ten-storms
[wh-383200]: https://www.wowhead.com/forever/news=383200/enhancement-only-uses-2-handed-weapons-in-wow-forever-enhancement-shaman
[wcl]: https://wowforever.wclbox.com/en/fashu/shaman
[wcl-recall]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-totemic-recall
[wcl-proj]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-totemic-projection
[wcl-fn]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-fire-nova
[wcl-lvb]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-lava-burst
[wcl-rt]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-riptide
[wcl-lb]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-bolt
[wcl-cl]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-lightning
[wcl-es]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-earth-shock
[wcl-fs]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-flame-shock
[wcl-frs]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-frost-shock
[wcl-hw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-healing-wave
[wcl-lhw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-lesser-healing-wave
[wcl-ch]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-heal
[wcl-ls]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-shield
[wcl-gw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-ghost-wolf
[wcl-wfw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-windfury-weapon
[wcl-ftw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-flametongue-weapon
[wcl-fbw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-frostbrand-weapon
[wcl-rb]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-rockbiter-weapon
[fc]: https://foreverchanges.pro/spellbook/shaman
[wfts]: https://wowforevertalents.com/shaman/
[wfts-ab]: https://wowforevertalents.com/abilities/shaman/
[wfts-cot]: https://wowforevertalents.com/shaman/talents/call-of-thunder/
[wft]: https://wowforevertalent.com/shaman/reference/
[wftcalc]: https://wowforevertalent.com/shaman/
[cwf]: https://classicwowforever.com/class-changes/shaman/
[egt]: https://endgametools.com/en/blog/wow-forever-shaman
[ftome]: https://forevertome.com/guides/shaman
[cwgg]: https://classicwow.gg/forever/guides/shaman
[wt]: https://www.warcrafttavern.com/forever/guides/shaman/
[iv]: https://www.icy-veins.com/wow-forever/shaman-class-overview
[zk]: https://www.zockify.com/forever/shaman/
[wowgg-resto]: https://wow.gg/guides/shaman-restoration-forever-overview
[wofw]: https://wofwforever.com/en/guides/wow-forever-spell-power-scaling/
[leprestore]: https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-shaman-guide-overview/
[wowhb-relics]: https://wowhandbook.com/gear/relics/
[wowhb-gear]: https://wowhandbook.com/gear/shaman/
[wowgg-sets]: https://wow.gg/guides/wow-forever-tier-set-bonuses
[magey-wf]: https://github.com/magey/classic-warrior/wiki/Windfury-Totem
[fb]: https://github.com/ClassicWoWCommunity/forever-bugs
[fb-40]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/40
[fb-79]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/79
[fb-80]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/80
[fb-134]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/134
[fb-163]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/163
[f-please-fix]: https://us.forums.blizzard.com/en/wow/t/please-fix-shamans/2365290
[f-2353663]: https://us.forums.blizzard.com/en/wow/t/2353663
[f-2353745]: https://us.forums.blizzard.com/en/wow/t/2353745
[f-2354160]: https://us.forums.blizzard.com/en/wow/t/2354160
[f-2356116]: https://us.forums.blizzard.com/en/wow/t/2356116
[f-2356600]: https://us.forums.blizzard.com/en/wow/t/2356600
[f-2359184]: https://us.forums.blizzard.com/en/wow/t/2359184
[f-2361063]: https://us.forums.blizzard.com/en/wow/t/2361063
[f-2364061]: https://us.forums.blizzard.com/en/wow/t/2364061
[f-2364945]: https://us.forums.blizzard.com/en/wow/t/2364945
[f-2365062]: https://us.forums.blizzard.com/en/wow/t/2365062
[f-2365734]: https://us.forums.blizzard.com/en/wow/t/2365734
[f-2365746]: https://us.forums.blizzard.com/en/wow/t/2365746
[f-2366147]: https://us.forums.blizzard.com/en/wow/t/2366147
[f-2366738]: https://us.forums.blizzard.com/en/wow/t/2366738
[f-2367626]: https://us.forums.blizzard.com/en/wow/t/2367626
[f-2368409]: https://us.forums.blizzard.com/en/wow/t/2368409
[f-2369180]: https://us.forums.blizzard.com/en/wow/t/2369180
[f-2369645]: https://us.forums.blizzard.com/en/wow/t/2369645
