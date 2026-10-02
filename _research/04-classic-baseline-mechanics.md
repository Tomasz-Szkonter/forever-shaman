# 04 — Classic (1.12 / Classic Era) Baseline: Shaman Mechanics

> Scope: the **vanilla / Classic Era baseline** that WoW Forever forked from. This page does not cover Forever's changes.
> Compiled 2026-10-02. Every number has an inline source. Where sources disagree, both values are given and the item is tagged **[DISPUTED]**. Anything still unconfirmed is tagged **[VERIFY]** and listed again in the *To Verify* section.

### How to read the data sources

| Tag | Meaning |
|---|---|
| **WH-tooltip** | Wowhead Classic tooltip, fetched from Wowhead's tooltip API. The page link is `https://www.wowhead.com/classic/spell=<ID>`. This is current Classic Era client data. |
| **DB2** | Raw Classic Era client tables (`SpellEffect`, `SpellAuraOptions`, `SpellMisc`, `SpellCooldowns`, `SpellCategories`, `SpellDuration`, `SpellRadius`) from [wago.tools](https://wago.tools/db2/SpellEffect?product=wow_classic_era), product `wow_classic_era` (1.15.x). `EffectBonusCoefficient` is the spell power coefficient. For periodic effects it is the value **per tick** (checked against Corruption: 0.167 × 6 ticks = 1.0 total, and Immolate's DoT: 0.13 × 5 = 0.65). |
| **magey** | [magey/classic-warrior wiki](https://github.com/magey/classic-warrior/wiki): large, logged community tests on Classic, plus quoted Blizzard posts. Warrior-focused, but the attack table and Windfury Totem pages apply to every class. |

**Caveat on DB2:** the 1.15.x client is shared with Season of Discovery and the Anniversary realms. Some shaman rows have been re-pointed to 2024-era spell IDs. Examples: the Windfury Weapon enchant now procs spell 439431, and the Flametongue enchant now procs 436519 and 415138. Values that look like reworks are flagged. The direct-damage and heal coefficients reproduce the classic formulas *exactly*, including the sub-level-20 penalty (see §4.1), which is strong evidence that they are 1.12-faithful.

---

## 1. Spells: hit, resists, crit

### 1.1 Spell hit table vs level difference (PvE)
Spell hit depends only on the level difference. Weapon skill and defense play no part.

| Target level − caster level | Base hit | Base miss | Spell hit needed to cap (max 99%) |
|---|---|---|---|
| −3 / −2 / −1 | 99 / 98 / 97% | 1 / 2 / 3% | 0 / 1 / 2% |
| 0 | 96% | 4% | 3% |
| +1 | 95% | 5% | 4% |
| +2 | 94% | 6% | 5% |
| **+3 (raid boss, lvl 63)** | **83%** | **17%** | **16%** |
| +4 | 72% | 28% | (27%) |
| +5 | 61% | 39% | (38%) |

- Sources: [Jasica's Guide to Combat Tables (Allakhazam)](https://wow.allakhazam.com/wiki/Jasica's_Guide_to_Combat_Tables_-_Gearing_for_Spellcaster_Bosses_(WoW)); [Allakhazam "Hit Rate (WoW)"](https://wow.allakhazam.com/wiki/Hit_Rate_(WoW)); vanillagaming guide quoted in [Blizzard forum thread](https://us.forums.blizzard.com/en/wow/t/warlocks-spell-resist-and-spell-hit/93617?page=2) ("+3: 17% chance to miss. 16% chance to Hit is needed for cap"); [Icy Veins Classic Ele stat priority](https://www.icy-veins.com/wow-classic/elemental-shaman-dps-pve-stat-priority) (3/4/5/16%).
- **The 1% floor:** miss chance can never go below 1%, so the most hit you can have is 99% ([Jasica](https://wow.allakhazam.com/wiki/Jasica's_Guide_to_Combat_Tables_-_Gearing_for_Spellcaster_Bosses_(WoW))).
- Vs **players** at +3 levels, base miss is 13% (Jasica). This is PvP-only.
- **Nature's Guidance** (Resto, 3 ranks) gives +1/2/3% hit to melee **and** spells ([WH 16180/16196/16198](https://www.wowhead.com/classic/spell=16198)). That brings the boss spell cap down to **13%** from gear ([Icy Veins](https://www.icy-veins.com/wow-classic/elemental-shaman-dps-pve-stat-priority)).
- **There is no elemental hit talent in Classic.** *Elemental Precision* does not exist in the Classic Era data. Its TBC spell ID 30672 has no Classic entry ([WH tooltip API](https://www.wowhead.com/classic/spell=30672)). It is a 2.0 talent.

### 1.2 Resistances, partial resists, binary spells
- Average resistance = `(TargetResist / (CasterLevel × 5)) × 0.75`, capped at 75% ([warcraft.wiki.gg Resistance](https://warcraft.wiki.gg/wiki/Resistance); [Jasica](https://wow.allakhazam.com/wiki/Jasica's_Guide_to_Combat_Tables_-_Gearing_for_Spellcaster_Bosses_(WoW))).
- **Non-binary** (damage-only) spells roll partial resists of 0/25/50/75/100%, weighted so that the average equals the figure above ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Resistance)).
- **Binary** spells carry a non-damage effect and are resisted in full or not at all. Resistance lowers their chance to land, and spell hit does **not** offset that ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Resistance)). Examples quoted in the vanillagaming list: Frost Nova, Counterspell, Polymorph and Fear are binary. Shadow Bolt, Immolate and Fireball are non-binary ([Blizzard forum copy](https://us.forums.blizzard.com/en/wow/t/warlocks-spell-resist-and-spell-hit/93617?page=2)).
  - **[VERIFY]** No source classifies the shaman spells specifically. By analogy, Frost Shock (damage + snare) and Earth Shock (damage + interrupt) are probably binary, and Lightning Bolt, Chain Lightning and Flame Shock non-binary.
- **Level-based resistance:** mobs above your level gain roughly **8 resistance per level** ("believed; the exact number may have been higher"). Spell penetration cannot overcome it. For a lvl 63 boss that is about 24 resist, or about 6% average mitigation ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Resistance)). **[DISPUTED/VERIFY]**

### 1.3 Spell crit
- **Int per 1% spell crit at level 60 (shaman): 59.5.** Sources: [Warcraft Tavern mana guide (table image)](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/), [RankedBoost Classic stats](https://rankedboost.com/world-of-warcraft/classic-stats/) and [Blizzard Watch 2019](https://blizzardwatch.com/2019/06/17/wow-classic-primary-secondary-stats-attributes/).
  - **[DISPUTED]** A 2005 blue post is reported to give 59.2, but the original was not found. [warcraft.wiki.gg Spell crit](https://warcraft.wiki.gg/wiki/Spell_critical_strike) lists 57.16, but that table appears to use TBC-era constants (it lists mage at 69.88, while Classic mage is 59.5).
- **Base spell crit (class constant): 2.2%** for shaman ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Spell_critical_strike)). **[VERIFY]** The same TBC-constants caveat applies. Some community sources say 2.3%.
- **Spell crit multiplier:** a spell or heal crit does **150%** of normal ("additional 50%") ([Warcraft Tavern mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/); [Jasica](https://wow.allakhazam.com/wiki/Jasica's_Guide_to_Combat_Tables_-_Gearing_for_Spellcaster_Bosses_(WoW))).
  - **Elemental Fury** raises the crit bonus of "your Searing, Magma, and Fire Nova Totems and your Fire, Frost, and Nature spells" by 100%, giving **200%** damage ([WH 16089](https://www.wowhead.com/classic/spell=16089)). Heals stay at 150%.
  - Note: the old [warcraft.wiki.gg Spell crit page](https://warcraft.wiki.gg/wiki/Spell_critical_strike) says "crits deal 200%". That is a later-expansion value and does not apply to Classic baseline.
- Crit talents:
  - **Call of Thunder:** +6% crit on LB/CL at max rank ([wowisclassic talent calc](https://www.wowisclassic.com/en/talent-calculator/shaman/)).
  - **Tidal Mastery:** +1% crit per rank on healing **and lightning** spells; 5 ranks give 5% ([WH 16194](https://www.wowhead.com/classic/spell=16194), [16218](https://www.wowhead.com/classic/spell=16218)).
  - **Elemental Mastery:** the next Fire/Frost/Nature damage spell is a guaranteed crit and costs no mana; 3 min cooldown ([WH 16166](https://www.wowhead.com/classic/spell=16166)).

---

## 2. Melee attack table (Enhancement)

### 2.1 Dual wield: not available in vanilla — CONFIRMED
Shamans could not dual wield before 2.0.1. The Stormstrike patch note for 2.0.1 reads: "With the advent of Dual Wielding, Stormstrike was changed to instantly attack with all equipped weapons" ([warcraft.wiki.gg Stormstrike](https://warcraft.wiki.gg/wiki/Stormstrike)). The Windfury Weapon note for 2.0.1 adds: "Self-weapon buffs such as Windfury Weapon can now be applied to both main and off-hand weapons" ([warcraft.wiki.gg Windfury Weapon](https://warcraft.wiki.gg/wiki/Windfury_Weapon)).

That leaves two setups: **2H** (axes/maces need the *Two-Handed Axes and Maces* talent) or **1H + shield**. Dual-wield miss (+19%) does not apply.

### 2.2 Formulas (level 60 attacker, mob target)
Source for everything in this section: [magey Attack table](https://github.com/magey/classic-warrior/wiki/Attack-table). Blizzard-confirmed items are linked from that page to [Blizzard post #12](https://us.forums.blizzard.com/en/wow/t/bug-hit-tables/185675/12) and [post #32](https://us.forums.blizzard.com/en/wow/t/bug-hit-tables/185675/32).

```
Defense − Skill ≥ 11:  Miss = 5% + (TargetLvl*5 − Skill)*0.2%
                       HitSuppression = (TargetLvl*5 − Skill − 10)*0.2%   (the first ~1% of +hit is ignored)
Defense − Skill ≤ 10:  Miss = 5% + (TargetLvl*5 − Skill)*0.1%, no suppression
Dodge  = 5% + (TargetLvl*5 − Skill)*0.1%            (Blizzard: 6.5% vs +3)
Parry  = 14% vs +3 (Blizzard)                        (only from the front)
Block  = MIN(5%, 5% + (TargetLvl*5 − Skill)*0.1%)    (mobs never exceed 5%; front only)
Glance = 10% + (TargetLvl*5 − MIN(AttackerLvl*5, Skill))*2%   → 40% vs lvl 63 (white swings only)
Glancing damage: low = 1.3 − 0.05*(Def−Skill) [cap 0.91]; high = 1.2 − 0.03*(Def−Skill) [min 0.2, cap 0.99]; avg of the two
Crit vs mob: −0.2% per point when (MIN(Lvl*5, Skill) − Def) < 0  → −3% vs lvl 63 even at 305+ skill
            plus a flat −1.8% "aura crit suppression" on crit from talents/gear/buffs (not crit from Agility)
            → about −4.8% total vs bosses
```

| Def − Skill | Glancing penalty | Miss (1H/2H) | Hit cap |
|---|---|---|---|
| 15 (300 skill vs 63) | 35% | 8.0% | **9.0%** (suppression) |
| 10 (305) | 15% | 6.0% | 6.0% |
| 8 (307) | 7% | 5.8% | 5.8% |
| 7 (308) | 5% | 5.7% | 5.7% |
| 5 (310) | 5% | 5.5% | 5.5% |

([magey](https://github.com/magey/classic-warrior/wiki/Attack-table). The test-measured values are in parentheses on the source page, e.g. glancing at +3 levels is 40.36% and the penalty about 35.12%.)

- **[DISPUTED]** The [Warcraft Tavern Classic Enh guide](https://www.warcrafttavern.com/wow-classic/guides/pve-enhancement-shaman/) gives an "8%" hit cap ("5% with Nature's Guidance"). Blizzard's 1.12 note says the effective cap is **9%** at 300 skill, so 6% with 3/3 Nature's Guidance. [Icy Veins Classic Enh](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-stat-priority) agrees: "about 6% … if you have at least 305 weapon skill, otherwise you need 9%".
- **Weapon skill:** going from 300 to 305 skill drops the glancing penalty from 35% to 15%, and the cap is reached at about 308 ([Icy Veins Enh](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-stat-priority)). Each point also gives 0.04% crit, which only counts vs players or mobs at your level or below ([magey](https://github.com/magey/classic-warrior/wiki/Attack-table); [Warcraft Tavern Enh](https://www.warcrafttavern.com/wow-classic/guides/pve-enhancement-shaman/)).
  - Orc *Axe Specialization* (+5 Axes) is the main shaman source of weapon skill ([Warcraft Tavern Enh](https://www.warcrafttavern.com/wow-classic/guides/pve-enhancement-shaman/)).
- **White-hit crit cap:** a one-roll table, ordered miss > dodge > parry > block > glancing > crit > hit ([Icy Veins Enh](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-stat-priority)). From behind a boss:
  `CritCap(white) = 100% − Miss_after_hit − 6.5% dodge − 40% glance`.
  Worked example: with 9% hit at 300 skill the cap is about 53.5% *effective*. Sheet crit needs about 4.8% more because of suppression (derived from magey's formulas).
- **2H vs 1H+shield:** slower weapons have larger per-swing damage, which makes Stormstrike and Windfury Weapon stronger ([Icy Veins Enh](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-stat-priority)). With a shield: *Shield Specialization* adds up to +5% block chance and +25% block amount ([wowisclassic talent calc](https://www.wowisclassic.com/en/talent-calculator/shaman/)).

### 2.3 Spell batching
Classic processes damage in **400 ms** batches, and this affects the Windfury AP aura timing in §5 ([magey Windfury Totem](https://github.com/magey/classic-warrior/wiki/Windfury-Totem); see also [magey Spell batching](https://github.com/magey/classic-warrior/wiki/Spell-batching)).

---

## 3. Stat conversions (Shaman, level 60)

| Stat | Effect | Source |
|---|---|---|
| **Strength** | **2 melee AP per point** | [warcraft.wiki.gg Attack power](https://warcraft.wiki.gg/wiki/Attack_power) ("Before Patch 3.0.2, shamans received 2 AP per strength"); [Blizzard Watch](https://blizzardwatch.com/2019/06/17/wow-classic-primary-secondary-stats-attributes/); [Warcraft Tavern Enh](https://www.warcrafttavern.com/wow-classic/guides/pve-enhancement-shaman/) |
| **Agility → AP** | **None for shaman in vanilla.** The 3.0.2 change gave 1 AP per Str and 1 AP per Agi. In Classic only Rogues, Hunters and Cat-form Druids got AP from Agility. | [warcraft.wiki.gg Attack power](https://warcraft.wiki.gg/wiki/Attack_power); [Blizzard Watch](https://blizzardwatch.com/2019/06/17/wow-classic-primary-secondary-stats-attributes/) |
| AP formula | Commonly `Level×2 + Str×2 − 20`. **[VERIFY]**: no primary source found. | — |
| AP → DPS | **14 AP = +1 weapon DPS** | [warcraft.wiki.gg Attack power](https://warcraft.wiki.gg/wiki/Attack_power) |
| **Agility → crit** | **20 Agi = 1% melee crit** | [Warcraft Tavern Enh](https://www.warcrafttavern.com/wow-classic/guides/pve-enhancement-shaman/); [RankedBoost](https://rankedboost.com/world-of-warcraft/classic-stats/); [Blizzard Watch](https://blizzardwatch.com/2019/06/17/wow-classic-primary-secondary-stats-attributes/) |
| Agility → armor | 2 armor per Agi | [RankedBoost](https://rankedboost.com/world-of-warcraft/classic-stats/); [Blizzard Watch](https://blizzardwatch.com/2019/06/17/wow-classic-primary-secondary-stats-attributes/) |
| Agility → dodge | **20 Agi = 1% dodge**; base dodge about 1.75% (2006 measurement) | [warcraft.wiki.gg Talk:Dodge](https://warcraft.wiki.gg/wiki/Talk:Dodge) **[DISPUTED]**: TBC-era pages give 25 Agi per 1%. |
| Base melee crit | **[VERIFY]**: not found in a reliable source | — |
| **Stamina** | 10 HP per point | [RankedBoost](https://rankedboost.com/world-of-warcraft/classic-stats/); [Blizzard Watch](https://blizzardwatch.com/2019/06/17/wow-classic-primary-secondary-stats-attributes/) (whether the first 20 points give 1 HP each is **[VERIFY]**) |
| **Intellect** | 15 mana per point; 59.5 Int = 1% spell crit | [Warcraft Tavern mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/) |
| **Spirit (mana)** | **15 + Spirit/5 mana per 2 s tick**, only outside the 5-second rule | [Warcraft Tavern mana guide table](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/) **[DISPUTED]**: [Blizzard Watch](https://blizzardwatch.com/2019/06/17/wow-classic-primary-secondary-stats-attributes/) says `Spirit/5 + 17`. |
| Spirit (health) | 0.11 × Spirit + 7 per tick | [Warcraft Tavern mana guide table](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/) |
| **MP5** | Paid in **2-second ticks**, at all times: in combat, casting, and inside the 5SR | [Warcraft Tavern mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/) |
| **5-second rule** | Spirit regen stops for 5 s after any completed mana-costing cast, then resumes in 2 s ticks. Free casts (Clearcasting from Elemental Focus) do **not** reset it. | [Warcraft Tavern mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/) |

Shamans get **no talent that allows casting regen from Spirit**, unlike Meditation, Reflection or Mage Armor. MP5 is therefore the healer stat ([Warcraft Tavern mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/)).

---

## 4. Spell coefficients

### 4.1 Rules
- Direct spells: `cast time / 3.5`. DoT/HoT: `duration / 15`. Hybrid spells split the total between the two parts ([Ozgar's Downranking Guide, Warcraft Tavern](https://www.warcrafttavern.com/wow-classic/guides/ozgars-downranking-guide-tool/)).
- **Sub-level-20 penalty:** `coef × (1 − (20 − SpellLevel) × 0.0375)` for spells learned before level 20 ([Ozgar](https://www.warcrafttavern.com/wow-classic/guides/ozgars-downranking-guide-tool/)).
  - **Confirmed against DB2:**
    - LB R1 (lvl 1, 1.5 s): 0.4286 × 0.2875 = **0.123** (DB2 0.123)
    - LB R2 (lvl 8, 2.0 s): 0.571 × 0.55 = **0.314** (DB2 0.314)
    - LB R3 (lvl 14, 2.5 s): 0.714 × 0.775 = **0.554** (DB2 0.554)
    - HW R4 (lvl 18): 0.857 × 0.925 = **0.793** (DB2 0.793)
    - Earth Shock R1 (lvl 4): 0.386 × 0.40 = **0.154** (DB2 0.154)
    - Flame Shock R1 (lvl 10): 0.214 × 0.625 = **0.134** (DB2 0.134)
- **No level-based downranking penalty in Classic.** The "+5/+6 levels" rule is TBC ([Ozgar](https://www.warcrafttavern.com/wow-classic/guides/ozgars-downranking-guide-tool/)).
  - **[DISPUTED]** The 2007 forum list ([Lowyat](https://forum.lowyat.net/topic/405783)) gives a "(max level + 4 or + 6) / player level" formula. That is TBC-era and wrong for Classic.

### 4.2 Shaman coefficient table (max rank unless noted)
All coefficients are **DB2** `EffectBonusCoefficient` from the Classic Era client, via [wago.tools SpellEffect](https://wago.tools/db2/SpellEffect?product=wow_classic_era). The spell IDs are linked to their Wowhead Classic tooltips.

| Spell (ID) | Cast / CD | DB2 coef | Notes |
|---|---|---|---|
| Lightning Bolt R10 ([15208](https://www.wowhead.com/classic/spell=15208)) | 3.0 s | **0.857** | R1–R3 have 1.5/2.0/2.5 s casts *and* the sub-20 penalty (0.123 / 0.314 / 0.554). R4+ (lvl 20+) = 0.857. |
| Chain Lightning R4 ([10605](https://www.wowhead.com/classic/spell=10605)) | 2.5 s / 6 s | **0.714** | ChainAmplitude 0.7 means **−30% per jump**; 3 targets, so 100% / 70% / 49%. **[DISPUTED]** The old forum estimate is 0.357 ([Lowyat 2007](https://forum.lowyat.net/topic/405783)). DB2 and [Icy Veins Classic Ele](https://www.icy-veins.com/wow-classic/elemental-shaman-dps-pve-stat-priority) ("about 71%") support **0.714 on the primary target**. |
| Earth Shock R7 ([10414](https://www.wowhead.com/classic/spell=10414)) | instant / 6 s shared | **0.386** | 1.5/3.5 × 0.9. **[DISPUTED]**: the [Warcraft Tavern tank guide](https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/) says 40.71%. |
| Frost Shock R4 ([10473](https://www.wowhead.com/classic/spell=10473)) | instant / 6 s shared | **0.386** | same |
| Flame Shock R6 ([29228](https://www.wowhead.com/classic/spell=29228)) direct | instant / 6 s shared | **0.214** | |
| Flame Shock DoT | 4 ticks / 3 s, 12 s | **0.100 per tick (0.40 total)** | **[DISPUTED]**: the 2007 estimate was 0.171 total ([Lowyat](https://forum.lowyat.net/topic/405783)). The DB2 per-tick reading is consistent with Corruption and Immolate. |
| Healing Wave R10 ([25357](https://www.wowhead.com/classic/spell=25357)) | 3.0 s (2.5 with Imp. HW) | **0.857** | Talents that cut cast time do not change the coefficient. |
| Lesser Healing Wave R6 ([10468](https://www.wowhead.com/classic/spell=10468)) | 1.5 s | **0.429** | |
| Chain Heal R3 ([10623](https://www.wowhead.com/classic/spell=10623)) | 2.5 s | **0.714** | ChainAmplitude 0.5: each jump is **50%** of the previous, so 100/50/25% over 3 targets. If cast on a party member it only jumps within the party ([WH tooltip](https://www.wowhead.com/classic/spell=10623)). **[DISPUTED]**: the 2007 estimate was 0.238; [Icy Veins Classic Resto](https://icy-veins.com/wow-classic/restoration-shaman-healer-pve-stat-priority) says "roughly 71%". |
| Lightning Shield R7 ([10432](https://www.wowhead.com/classic/spell=10432)) | — | **0.267 per orb** | 3 orbs, 3.5 s internal cooldown between orb discharges ([DB2 SpellAuraOptions](https://wago.tools/db2/SpellAuraOptions?product=wow_classic_era)). **[DISPUTED]**: the Warcraft Tavern tank guide says 33% and "can't crit". |
| Searing Totem R6 attack ([10436](https://www.wowhead.com/classic/spell=10436)) | 2.2 s cast | **0.083 per bolt** | Totem: 5 HP, 55 s, 20 yd. Totem damage can crit, and Elemental Fury applies. |
| Magma Totem R4 pulse ([10581](https://www.wowhead.com/classic/spell=10581)) | every 2 s, 20 s | **0.033 per pulse** | 8 yd ([WH 10587](https://www.wowhead.com/classic/spell=10587)). Pulse period 2000 ms (DB2 10582/8188). |
| Fire Nova Totem R5 nova ([11307](https://www.wowhead.com/classic/spell=11307)) | 15 s CD | **0.143** | Detonates after 4 s unless the totem is killed; 10 yd ([WH 11315](https://www.wowhead.com/classic/spell=11315)). |
| Healing Stream R5 heal ([10461](https://www.wowhead.com/classic/spell=10461)) | every 2 s, 60 s | **0.022 per tick** | 14 HP per 2 s at R5 base; 20 yd, party ([WH 10463](https://www.wowhead.com/classic/spell=10463)). |
| Frostbrand proc R5 ([16353](https://www.wowhead.com/classic/spell=16353)) | proc | **0.10** | See §5.5. |
| Flametongue Weapon proc R6 ([16344](https://www.wowhead.com/classic/spell=16344)) | per hit | **0 in DB2** | **[VERIFY]**: the 2007 estimate was 10%. The 1.15 enchant row now points to 2024 SoD spells, so this is unreliable. |

---

## 5. Windfury, imbues, Stormstrike, Flurry, Elemental Devastation

### 5.1 Windfury Weapon (self imbue)
| Rank (ID) | Level | Mana | Bonus AP | Source |
|---|---|---|---|---|
| R1 ([8232](https://www.wowhead.com/classic/spell=8232)) | 30 | 90 | 104 | WH-tooltip |
| R2 ([8235](https://www.wowhead.com/classic/spell=8235)) | 40 | 115 | 222 | WH-tooltip |
| R3 ([10486](https://www.wowhead.com/classic/spell=10486)) | 50 | 140 | 316 | WH-tooltip |
| R4 ([16362](https://www.wowhead.com/classic/spell=16362)) | 60 | 165 | 333 | WH-tooltip; DB2 16361 aura +333 AP + 1 extra attack |

- Each hit has a **20% chance** to grant **2 extra attacks** with the bonus AP. Lasts 5 min ([WH tooltip](https://www.wowhead.com/classic/spell=16362)).
- **Elemental Weapons** (3 ranks) adds +13/27/40% to the WF Weapon *effect* ([warcraft.wiki.gg Elemental Weapons (Classic)](https://warcraft.wiki.gg/wiki/Elemental_Weapons_(Classic))).
- Patch 1.11.0: "Attack power bonus of Windfury Weapon reduced by 50%". Patch 1.4.0 fixed a bug that granted extra attacks beyond the intended number ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Windfury_Weapon)).
- **Can't proc from itself:** "Windfury Weapon cannot proc off itself" ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Windfury_Weapon)). magey's wording: WF "can't proc itself or proc twice in the same chain of extra attacks" ([magey](https://github.com/magey/classic-warrior/wiki/Windfury-Totem)).
- **Internal cooldown — [DISPUTED]:**
  - warcraft.wiki.gg: "There is no internal cooldown on Windfury Weapon."
  - magey: "Windfury Totem, Windfury Weapon, and Wild Strikes have an internal cooldown of 1.5 seconds. (Confirmed 12/01/2023 by Zirene)."
  - Current Classic Era client data agrees with magey. The WF Weapon enchant procs spell 439431, which has `ProcCategoryRecovery = 1500`, `ProcChance = 20`, and the tooltip "(Proc chance: 20%, 1.5s cooldown)" ([DB2 SpellAuraOptions](https://wago.tools/db2/SpellAuraOptions?product=wow_classic_era); [WH 439431](https://www.wowhead.com/classic/spell=439431)).
  - **Conclusion:** current Classic Era has a 1.5 s ICD. Whether 2006-era 1.12 had one is unclear.
- **Flurry interaction:** patch 2.0.1 "Fixed an issue where extra attacks from Windfury Weapon would not proc Flurry when they crit" ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Windfury_Weapon)). So in 1.12, crits on WF extra attacks did **not** proc Flurry. **[VERIFY]** whether Classic Era reproduces this.
- **Imbue exclusivity:** one temporary enchant per weapon. WF Weapon, Rockbiter, Flametongue, Frostbrand, sharpening stones and oils all overwrite each other ([Blizzard EU forum](https://eu.forums.blizzard.com/en/wow/t/windfury-weapon-buffs/417556); [Warcraft Tavern Enh](https://www.warcrafttavern.com/wow-classic/guides/pve-enhancement-shaman/): weapon oil "doesn't stack with your elemental imbues").

### 5.2 Windfury Totem
| Rank (ID) | Level | Mana | Bonus AP | Source |
|---|---|---|---|---|
| R1 ([8512](https://www.wowhead.com/classic/spell=8512)) | 32 | 115 | 122 | WH-tooltip |
| R2 ([10613](https://www.wowhead.com/classic/spell=10613)) | 42 | 175 | 229 | WH-tooltip |
| R3 ([10614](https://www.wowhead.com/classic/spell=10614)) | 52 | 250 | 315 | WH-tooltip |

- Enchants the **main-hand weapon only** of **party members within 20 yd**. Each hit has a **20% chance** to grant **1 extra attack** with the bonus AP. The totem lasts 2 min and has 5 HP ([WH 10614](https://www.wowhead.com/classic/spell=10614)). The 1.5.0 tooltip change clarified "only the main-hand weapon" ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Windfury_Totem)).
- **Improved Weapon Totems:** +15/30% WF Totem AP and +6/12% Flametongue Totem damage ([WH 29192](https://www.wowhead.com/classic/spell=29192)/[29193](https://www.wowhead.com/classic/spell=29193)). At R3 with 2/2 that is 315 × 1.3 = 409.5 AP.
- **Pulse:** the totem's passive aura triggers the enchant every **5 s** (`EffectAuraPeriod 5000` on 8515/10609, [DB2 SpellEffect](https://wago.tools/db2/SpellEffect?product=wow_classic_era)). The enchant radius is 20 yd (SpellRadius index 9).
- **Enchant duration:** **10 s** per [Icy Veins Classic Enh rotation](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-rotation-cooldowns-abilities). **[DISPUTED]**: [warcraft.wiki.gg Totem Twisting](https://warcraft.wiki.gg/wiki/Totem_Twisting) says 9 s, and DB2 does not store it.
- **The proc** (spell 10610, from magey + DB2):
  1. It grants 1 extra attack and applies an AP aura lasting **1.5 s** with **2 charges** (DB2 `DurationIndex 65 = 1500 ms`, `ProcCharges 2`).
  2. Each melee swing consumes a charge.
  3. **The swing that triggered the proc does not benefit from the AP**, because damage is calculated on swing.
  4. When the proc comes from a normal swing, the aura's uptime is about 400–800 ms. When it comes from an instant attack, uptime is up to 1500 ms ([magey](https://github.com/magey/classic-warrior/wiki/Windfury-Totem)).
- **Triggers** ([magey](https://github.com/magey/classic-warrior/wiki/Windfury-Totem)):
  - Main-hand white swings, on-next-swing attacks (Heroic Strike, Cleave), Slam, and single-target instants. Multi-target instants proc once.
  - **Off-hand swings do not trigger it.** Shield Slam and Shield Bash count as off-hand attacks.
  - Other extra attacks (Sword Specialization, Ironfoe, Hand of Justice) can chain into it, but WF cannot proc twice in one chain.
  - **ICD 1.5 s** (Zirene, 2023). The AP aura counts toward the buff cap.
- **Rogues and warriors:**
  - The totem enchant takes the main-hand temporary-enchant slot. Warriors therefore put stones on the off-hand, and rogues lose their main-hand poison while WF is active ([AskMrRobot forum](https://forums.askmrrobot.com/t/how-are-consumable-sharpening-stones-working/9049)).
  - **[DISPUTED]**: retail-era forum posters say WF Totem is "a buff on your bar". That is modern behavior and does not apply to Classic.
  - Shaman self-interaction: the totem enchant overwrites the shaman's own main-hand imbue, the same way it overwrites any temporary enchant. **[VERIFY]** in-game.
- **Patch 1.11.0:** "Duration increased for ranks 1 through 4" ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Windfury_Totem)).

### 5.3 Totem twisting (Windfury + Grace of Air)
- **Technique:** drop WF Totem so its enchant lands, then drop Grace of Air (or Tranquil Air). Re-drop WF before the enchant expires. That is a WF + second Air totem cast **every 10 s**, at "a huge Mana cost" ([Icy Veins Classic Enh rotation](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-rotation-cooldowns-abilities); [warcraft.wiki.gg Totem Twisting](https://warcraft.wiki.gg/wiki/Totem_Twisting)).
- Dropping totems resets the swing timer, which costs the shaman some DPS. Twisting is worth it with many melee in the group ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Totem_Twisting)). It was removed in 3.0.2.
- **Grace of Air R3:** +77 Agi, 20 yd, 2 min ([WH 25359](https://www.wowhead.com/classic/spell=25359)).
- **Strength of Earth R5:** +77 Str ([WH 25361](https://www.wowhead.com/classic/spell=25361)).
- **Enhancing Totems** boosts both; R1 shows +8% ([WH 16259](https://www.wowhead.com/classic/spell=16259)). [Warcraft Tavern Enh](https://www.warcrafttavern.com/wow-classic/guides/pve-enhancement-shaman/) says "an extra 15%" at 2/2.

### 5.4 Rockbiter & Flametongue
- **Rockbiter Weapon:** "increasing melee attack power by X and allowing melee attacks to cause additional threat". By rank: R1 50, R2 79, R3 118, R4 194, R5 355, R6 522, **R7 653 AP** ([WH 16316](https://www.wowhead.com/classic/spell=16316) etc.).
  - **[VERIFY]**: the DB2 passive 16313 stores +554 AP, which does not match the 653 tooltip.
  - Elemental Weapons adds +7/14/20% to the Rockbiter AP ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Elemental_Weapons_(Classic))).
  - Rockbiter threat is covered in §8.
- **Flametongue Weapon:** "Each hit causes X to Y additional Fire damage, based on the speed of the weapon":

  | Rank | Damage per hit |
  |---|---|
  | R1 | 6–18 |
  | R2 | 9–26 |
  | R3 | 14–42 |
  | R4 | 22–69 |
  | R5 | 31–95 |
  | **R6** | **37–112** |

  Source: [WH 16342](https://www.wowhead.com/classic/spell=16342). The R6 range implies about **28 × WeaponSpeed** per hit, clamped to about 1.3–4.0 s weapon speed. This is derived from the tooltip ratio 112 / 37 ≈ 4.0 / 1.32. **[VERIFY]** the exact server formula.
- **Flametongue Totem R4:** `1217/77` to `1217/25` per hit. In other words, roughly `(1217/100) × speed` for speeds between 1.3 and 4.0 ([WH 16387](https://www.wowhead.com/classic/spell=16387)).

### 5.5 Frostbrand
- R5 ([WH 16356](https://www.wowhead.com/classic/spell=16356)): "Each hit has a chance of causing 187 additional Frost damage and slowing … by 25% for 8 sec".
- Damage coefficient 0.10 (DB2 16353). Elemental Weapons adds +5/10/15% damage.
- Patch 1.6.0: slow-immune targets still take the damage ([warcraft.wiki.gg Frostbrand](https://warcraft.wiki.gg/wiki/Frostbrand_Weapon)).
- **Proc rate [VERIFY]:** it is not stored in the client. The often-quoted "9 PPM" is unconfirmed for vanilla.

### 5.6 Stormstrike
- ([WH 17364](https://www.wowhead.com/classic/spell=17364); [warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Stormstrike))
- "Gives you an extra attack." The next **2** Nature damage sources on the target take **+20%**. The debuff lasts **12 s**; the cooldown is **20 s**.
- DB2 shows Effect 58 (weapon damage, +0 bonus), Aura 87 at +20% for the Nature school, and `ProcCharges 2`.
- Patch 1.11.0: "Now causes an instant second attack instead of only resetting the swing timer. Now costs 15% of base mana (was 30%)."
- **[DISPUTED]** mana cost: the current Era tooltip says 21% of base mana.
- In 1.12 it hits only with the main hand. Both-weapon attacks came with dual wield in 2.0.1.

### 5.7 Flurry
- R5 ([WH 16284](https://www.wowhead.com/classic/spell=16284)): "+30% attack speed for your next 3 swings after dealing a critical strike". The ranks give 10/15/20/25/30% (e.g. [WH 16257](https://www.wowhead.com/classic/spell=16257) is 10%, [16278](https://www.wowhead.com/classic/spell=16278) is 20%).
- The buff ([16280](https://www.wowhead.com/classic/spell=16280)) lasts 15 s with **3 charges**. DB2 has `ProcCategoryRecovery 500`, i.e. a **0.5 s lockout on charge consumption**: two swings landing within 500 ms use only one charge.

### 5.8 Elemental Devastation
"Your offensive spell crits will increase your chance to get a critical strike with melee attacks by 3/6/9% for 10 sec" ([WH 30160](https://www.wowhead.com/classic/spell=30160) / [29180](https://www.wowhead.com/classic/spell=29180)).

### 5.9 Other relevant talents
- Thundering Strikes: +1% weapon crit per rank, 5 ranks ([WH 16302](https://www.wowhead.com/classic/spell=16302)).
- Weapon Mastery: +10% weapon damage at max rank. Two-Handed Axes and Maces enables 2H. Anticipation: +dodge (the rank shown at [WH 16271](https://www.wowhead.com/classic/spell=16271) gives +2%; max-rank value **[VERIFY]**).
- Parry: "Gives a chance to parry". **No threat reduction** in Classic ([WH 16268](https://www.wowhead.com/classic/spell=16268)).

---

## 6. Totem mechanics

| Mechanic | Value | Source |
|---|---|---|
| One totem per element (Earth / Fire / Water / Air); a new one replaces the old | up to 4 at once | [Allakhazam Shaman FAQ](https://wow.allakhazam.com/wiki/Comprehensive_Shaman_FAQ_%28WoW%29); "Tools: Air Totem" etc. on every tooltip |
| Totem HP | **5 HP** for nearly all totems; Stoneclaw R6 has 480 | WH tooltips ([10614](https://www.wowhead.com/classic/spell=10614), [10428](https://www.wowhead.com/classic/spell=10428)) |
| Buff radius | **20 yd**, **party members only** | WH tooltips; DB2 SpellRadius index 9 = 20 yd |
| Totemic Mastery (Resto) | Totems that affect friendly targets reach **30 yd** | [warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Totemic_Mastery) |
| Windfury Totem | Pulses every 5 s; enchant about 10 s (**[DISPUTED]** 9 vs 10); AP aura 1.5 s / 2 charges | §5.2 |
| Mana Spring R4 ([10497](https://www.wowhead.com/classic/spell=10497)) | **10 mana every 2 s** (= 25 MP5) to the party within 20 yd; 1 min | WH; DB2 10494 period 2000 ms |
| Healing Stream R5 | 14 HP every 2 s; 1 min | WH; DB2 10461 period 2000 ms |
| Mana Tide R3 ([17359](https://www.wowhead.com/classic/spell=17359)) | **290 mana every 3 s** for 12 s; 5 min CD (R1 170, R2 230) | WH; DB2 17360 period 3000 ms. **[VERIFY]** 4 vs 5 ticks. |
| Tremor Totem ([8143](https://www.wowhead.com/classic/spell=8143)) | Removes Fear, Charm and Sleep from the party within **30 yd**; 2 min | WH. DB2 passive 8145 has period **4000 ms** and radius index 10 (30 yd). **[DISPUTED]**: [Icy Veins Classic Enh](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-rotation-cooldowns-abilities) says Tremor and the cleansing totems pulse every **5 s** ("drop when slightly less than 5 seconds remains"). |
| Grounding Totem ([8177](https://www.wowhead.com/classic/spell=8177)) | Redirects **one** harmful single-target spell cast on a nearby party member, re-armed **every 10 s**; ignores AoE; 45 s; 15 s CD (Guardian Totems −1/−2 s) | WH; DB2 passive 8179 period 10000 ms |
| Magma Totem | Pulses every 2 s, 8 yd, 20 s | WH 10587; DB2 |
| Fire Nova Totem | Explodes after 4 s, 10 yd, 15 s CD | WH 11315 |
| Searing Totem | 20 yd single target; attack cast time 2.2 s | WH 10438; DB2 SpellCastTimes 24 = 2200 ms |
| Totem threat | Totems do not generate threat for the shaman ("Totems can't deal threat for you"). Healing Stream, Mana Spring and Mana Tide generate **0 threat**. | [Warcraft Tavern tank guide](https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/); [Warcraft Tavern threat table](https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/) |
| Totem crits | Fire totems can crit and scale with spell damage | [Warcraft Tavern tank guide](https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/); Elemental Fury tooltip |

**[DISPUTED]** The Fire Resistance Totem is a **Water** totem and the Frost Resistance Totem a **Fire** totem ([WH 10538](https://www.wowhead.com/classic/spell=10538), [10479](https://www.wowhead.com/classic/spell=10479)). That is correct for Classic, but people often get it backwards.

---

## 7. Shocks

- **Shared cooldown:** Earth, Flame and Frost Shock share spell category 19 with a **6 s** category cooldown, on top of the 1.5 s GCD ([DB2 SpellCategories / SpellCooldowns](https://wago.tools/db2/SpellCooldowns?product=wow_classic_era); WH tooltips "6 sec cooldown"). Chain Lightning's 6 s cooldown is a **separate** category (85).
- **Range** is 20 yd for all shocks (WH tooltips).
- **Earth Shock R7:** 517–545 Nature damage. It interrupts and locks the spell school for **2 s** (DB2 DurationIndex 39 = 2000 ms), and "Causes a high amount of threat" ([WH 10414](https://www.wowhead.com/classic/spell=10414)).
- **Frost Shock R4:** 492–520 Frost damage plus a **50% movement slow for 8 s** ([WH 10473](https://www.wowhead.com/classic/spell=10473)).
- **Flame Shock R6:** 292 Fire damage up front plus 320 over 12 s (80 per 3 s) ([WH 29228](https://www.wowhead.com/classic/spell=29228)).
- **Talents:**
  - Convection: −10% mana on shocks, LB and CL ([WH 16112](https://www.wowhead.com/classic/spell=16112)).
  - Concussion: +5% damage on LB, CL and shocks.
  - Elemental Focus: 10% chance after a Fire/Frost/Nature damage spell that the next damage spell costs no mana (Clearcasting, 15 s, 1 charge) ([WH 16164](https://www.wowhead.com/classic/spell=16164), [16246](https://www.wowhead.com/classic/spell=16246); DB2 ProcChance 10).
- **Threat:** Earth Shock does **2× threat**. Frost Shock and Flame Shock have no special modifier in any source found (§8).

---

## 8. Threat

| Item | Value | Source |
|---|---|---|
| Damage | 1 threat per point | [magey Threat](https://github.com/magey/classic-warrior/wiki/Threat-Mechanics) |
| **Healing** | **0.5 threat per point healed**, split evenly among all mobs in combat; overheal generates none | [magey](https://github.com/magey/classic-warrior/wiki/Threat-Mechanics); [Warcraft Tavern threat ref](https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/) |
| Mana gained | 0.5 threat per mana, split among mobs, not affected by modifiers | [Warcraft Tavern threat ref](https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/) |
| Aggro thresholds | 110% of the tank's threat in melee range, 130% at range | [magey](https://github.com/magey/classic-warrior/wiki/Threat-Mechanics); [Warcraft Tavern](https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/) |
| Shaman class modifier | none (1.0) | [LibThreatClassic2 Shaman.lua](https://github.com/dfherr/LibThreatClassic2/blob/master/ClassModules/Classic/Shaman.lua) (`passiveThreatModifiers = 1`) |
| **Earth Shock** | **×2.0** | [Warcraft Tavern threat ref](https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/); [LibThreatClassic2](https://github.com/dfherr/LibThreatClassic2/blob/master/ClassModules/Classic/Shaman.lua) (`amt * 2`) |
| **Healing Grace** | −5/10/15% healing threat; 3 ranks; added in **1.11.0** (dispel resistance only from 2.4.0) | [warcraft.wiki.gg Healing Grace](https://warcraft.wiki.gg/wiki/Healing_Grace); [WH 29187](https://www.wowhead.com/classic/spell=29187); LibThreatClassic2 (`1 − 0.05 × rank`) |
| **Rockbiter** | Threat value by rank: R1 6, R2 10, R3 16, R4 27, R5 41, R6 55, R7 **72** | [Warcraft Tavern threat ref](https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/). **[DISPUTED]** how it scales: the same site's [tank guide](https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/) table says "72 threat divided by weapon speed", while its text says "72 threat per second on hit. With 2.6 speed weapon, each hit is 2.6 × 72 ≈ 172 threat. Weapon speed won't matter, but haste does." The text reading (72 × weapon speed per hit, i.e. 72 TPS at 100% hit) is internally consistent. |
| Lightning Bolt / CL / Lightning Shield / Stormstrike | threat = damage | [Warcraft Tavern tank guide](https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/) |
| Stoneclaw Totem | about 170 threat per pulse (taunt effect) | [Warcraft Tavern tank guide](https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/) **[VERIFY]** |
| Tranquil Air Totem | −20% threat for party members within 20 yd (the Horde stand-in for Salvation) | [Warcraft Tavern tank guide](https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/) |
| **Spirit Weapons / Elemental Precision threat reduction** | **Not in Classic.** Both are TBC talents. The Classic Enhancement talent at that spot is *Parry* with no threat component ([WH 16268](https://www.wowhead.com/classic/spell=16268)), and Elemental Precision (30672) has no Classic entry. | WH tooltip API |
| Tidal Mastery | Crit only (+1% per rank to heals and lightning); **no threat effect** | [WH 16194](https://www.wowhead.com/classic/spell=16194) |

---

## 9. Mana regen, Reincarnation

- Spirit, MP5 and the 5-second rule are covered in §3.
- **Mana Spring R4:** 10 mana per 2 s, i.e. 25 MP5 for the party.
- **Mana Tide R3:** 290 per 3 s for 12 s, about 1,160 mana per member (talent, 5 min CD) (§6).
- **Elemental Focus / Clearcasting** gives a free damage spell that does not break the 5-second rule ([Warcraft Tavern mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/)).
- **Ancestral Knowledge:** +1% max mana per rank, 5 ranks (R3 shows 3%) ([WH 17487](https://www.wowhead.com/classic/spell=17487)).
- **Tidal Focus:** −1% healing mana per rank, 5 ranks.
- **Totemic Focus:** −5% totem mana per rank, 5 ranks.
- **Improved Healing Wave:** −0.1 s Healing Wave cast per rank, 5 ranks.
- **Nightfall** (the axe) is not a mana mechanic. It is a spell-vulnerability debuff proc, and Enhancement shamans are its typical users; for that reason they should carry Intellect/MP5 pieces ([Warcraft Tavern mana guide](https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/)). Its proc values are out of scope here.
- **Reincarnation** ([WH 20608](https://www.wowhead.com/classic/spell=20608)):
  - Level 30, consumes an **Ankh**, **60 min cooldown**.
  - "resurrect yourself upon death with **20% health and mana**".
  - **Improved Reincarnation** (2 ranks): cooldown −10/−20 min and +10/+20% health and mana. At 2/2 that is a 40 min cooldown and 40% health and mana ([WH 16184](https://www.wowhead.com/classic/spell=16184) / [16209](https://www.wowhead.com/classic/spell=16209)).

---

## To Verify (could not source firmly)

1. **Windfury Weapon ICD in original 1.12** vs current Classic Era. Era data shows 1.5 s; warcraft.wiki.gg says none. Decide which one is "baseline" for Forever.
2. **Windfury Totem enchant duration:** 9 s or 10 s. DB2 does not store it.
3. **Tremor and cleansing totem pulse:** DB2 says 4 s for Tremor; Icy Veins says 5 s.
4. **Flame Shock DoT coefficient:** DB2 per-tick 0.10 (0.40 total) vs the old 0.171 estimate. Also Chain Lightning and Chain Heal at 0.714 vs 0.357/0.238. DB2 looks right, but there is no in-game Classic test log.
5. **Flametongue Weapon:** the exact speed formula (about 28 × speed derived), the spell power coefficient (DB2 shows 0; 2007 estimate 10%), and the effect of SoD-era data contamination on the 1.15 client.
6. **Frostbrand proc rate** (PPM or flat %).
7. **Rockbiter:** R7 AP is 653 per the tooltip vs 554 in DB2; also how its threat scales with weapon speed.
8. **Spirit regen constant:** 15 + Spi/5 or 17 + Spi/5.
9. **Base spell crit** (2.2% vs 2.3%), **base melee crit**, and **Int per crit** (59.5 vs 59.2).
10. **Agility per dodge** (20 vs 25) and base dodge of about 1.75%.
11. **The AP formula constant** (`Lvl×2 + Str×2 − 20`) and the "first 20 Stamina/Int" rule.
12. **Binary or non-binary** status of Frost Shock and Earth Shock.
13. **Level-based boss resistance** (about 8 per level, as an assumption).
14. **Windfury Totem** overwriting the shaman's own main-hand imbue and rogue main-hand poisons in current Era: community consensus, but no primary source.
15. **WF Weapon extra-attack crits not procing Flurry** (pre-2.0.1 bug): does Era reproduce it?
16. **Mana Tide tick count** (4 vs 5) and **Stormstrike mana cost** (15% vs 21% of base mana).
17. Stoneclaw threat per pulse.

---

## Sources (with reliability notes)

| Source | Reliability |
|---|---|
| [wago.tools DB2 browser, product `wow_classic_era`](https://wago.tools/db2/SpellEffect?product=wow_classic_era) (SpellEffect, SpellAuraOptions, SpellMisc, SpellDuration, SpellRadius, SpellCooldowns, SpellCategories, SpellItemEnchantment, SpellCastTimes) | **High** for coefficients, periods, charges and cooldowns. These are raw client data, and the sub-20 penalty reproduces exactly. **Caveat:** the 1.15.x client is shared with SoD and Anniversary, and some shaman enchant rows point to 2024 spells. Server-side formulas (imbue damage scaling, PPM) are not stored. |
| [Wowhead Classic](https://www.wowhead.com/classic/) spell tooltips (via the tooltip API) | **High** for rank values, mana, ranges and durations, as the current Era client sees them. |
| [magey/classic-warrior wiki](https://github.com/magey/classic-warrior/wiki) (Attack table, Windfury Totem, Threat Mechanics, Crit aura suppression) | **High.** Large logged samples plus quoted Blizzard posts. Warrior-focused, but the tables are class-agnostic. |
| [Blizzard forum "Bug: Hit tables" #12 / #32](https://us.forums.blizzard.com/en/wow/t/bug-hit-tables/185675/12) (quoted by magey) | **Official** Blizzard statements for Classic. |
| [warcraft.wiki.gg](https://warcraft.wiki.gg/) (Windfury Weapon/Totem, Stormstrike, Healing Grace, Totemic Mastery, Elemental Weapons (Classic), Resistance, Attack power, Totem Twisting, Talk:Dodge) | **Medium–High** for patch history. **Medium** for mechanics; some pages are thin or modern-focused. Talk:Dodge is a 2006 player measurement. |
| [Warcraft Tavern](https://www.warcrafttavern.com/) Classic guides (Mana Management, PvE Enh, Shaman Tanking, Threat Reference, Ozgar's Downranking) | **Medium.** Well-regarded community guides; some internal inconsistencies (Rockbiter threat wording, 8% hit cap). |
| [Icy Veins Classic](https://www.icy-veins.com/wow-classic/) (Ele/Resto/Enh stat priority, Enh rotation) | **Medium.** Reputable, regularly updated; summaries rather than tests. |
| [LibThreatClassic2 (GitHub)](https://github.com/dfherr/LibThreatClassic2/blob/master/ClassModules/Classic/Shaman.lua) | **Medium–High.** The threat-meter implementation used by Classic addons. It encodes ES ×2 and Healing Grace, but not Rockbiter. |
| [Jasica's Guide to Combat Tables (Allakhazam)](https://wow.allakhazam.com/wiki/Jasica's_Guide_to_Combat_Tables_-_Gearing_for_Spellcaster_Bosses_(WoW)) | **Medium.** Vanilla/TBC-era player guide (page last modified 2009); its spell hit table matches other sources. |
| [Blizzard forum thread quoting the vanillagaming guide](https://us.forums.blizzard.com/en/wow/t/warlocks-spell-resist-and-spell-hit/93617?page=2) | **Medium–Low.** Private-server-era community text, not blue. |
| [RankedBoost Classic stats](https://rankedboost.com/world-of-warcraft/classic-stats/), [Blizzard Watch 2019](https://blizzardwatch.com/2019/06/17/wow-classic-primary-secondary-stats-attributes/) | **Low–Medium.** Secondary summaries; useful for corroboration only (Blizzard Watch has an obvious dodge typo). |
| [Lowyat forum coefficient list (2007)](https://forum.lowyat.net/topic/405783) | **Low.** TBC-era estimates, several marked "not confirmed"; superseded by DB2. Kept to document the disputes. |
| [Allakhazam Comprehensive Shaman FAQ](https://wow.allakhazam.com/wiki/Comprehensive_Shaman_FAQ_%28WoW%29) | **Low.** Mostly WotLK-era; used only for "one totem per element". |
| [AskMrRobot forum](https://forums.askmrrobot.com/t/how-are-consumable-sharpening-stones-working/9049), [Blizzard EU forum](https://eu.forums.blizzard.com/en/wow/t/windfury-weapon-buffs/417556) | **Low.** Player statements; used only for the imbue and enchant-slot interaction. |
| [wowisclassic talent calculator](https://www.wowisclassic.com/en/talent-calculator/shaman/) | **Medium** for talent text (summary-level). |

*Not found or not usable:* no dedicated "magey-style" shaman mechanics wiki on GitHub turned up. The Classic Shaman Discord compendium is not publicly crawlable. The reddit coefficient list by u/RobertVests ([thread](https://www.reddit.com/r/classicwow/comments/95abc8/list_of_spellcoefficients_1121/), cited by Icy Veins) could not be fetched. Icy Veins and Wowhead guide bodies were partly blocked to automated fetch; Icy Veins was retrieved directly.
