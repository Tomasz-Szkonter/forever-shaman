---
title: Items and Set Bonuses
description: Shaman totem relics, tier, dungeon and PvP set bonuses, weapon and armor proficiencies, and item findings for WoW Forever.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🛡 Items and Set Bonuses

This page covers Shaman items in WoW Forever: the new totem relics, raid and dungeon set bonuses (Classic vs Forever), what Shamans can equip, and item-related beta findings.

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified — see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)
>
> **Note: item data is incomplete on purpose.** Blizzard will run **no PTRs** and keeps raid bosses and item stats hidden until players meet them, so item data in the client is heavily obfuscated 🔵/🟡 ([Method.gg][method-ptr], reporting an MMORPG.com interview with Josh Greenfield). About **12,500 items are hidden from dataminers**, and roughly 4,419 had been revealed during the beta 🟡 ([Icy Veins, snippet][iv-hidden]). Expect this page to fill in slowly.

## 📑 Contents
- [Totem Relics](#-totem-relics)
- [Raid Sets](#-raid-sets)
- [Dungeon Sets](#-dungeon-sets)
- [PvP Sets](#-pvp-sets)
- [Weapons and Armor](#-weapons-and-armor)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

## 🗿 Totem Relics

### Totem Relics

🟡 Shamans still use **Totems in the relic slot** ([Warcraft Tavern][wt-shaman]). Forever adds new totem relics that modify specific spells or totems 🟢 ([WoWHandbook relics][whb-relics]). Search summaries of [wow.gg][wowgg-sets] and WoWHandbook count "8 Shaman totems among 25 new relics", but WoWHandbook's list below has 10.

| Relic | Req. level | Equip effect |
|---|---|---|
| Firestorm Totem | any | Totem mana cost −5% |
| Windcarved Effigy | any | Lightning Bolt costs 5 less mana |
| Polished Driftwood Icon | 20 | 8% of mana regeneration continues while casting |
| Totem of Ancestral Protection | 40 | [Grounding Totem](Totems.md#grounding-totem) cooldown −1 s |
| Burning Totem | 60 | [Flame Shock](Spells-and-Ranks.md#flame-shock) duration +3 s |
| Tidal Totem | 60 | [Healing Wave](Spells-and-Ranks.md#healing-wave) mana cost −5% |
| Totem of the Storm | 60 | Lightning Bolt can trigger [Maelstrom Weapon](../talents/Enhancement-Talents.md#maelstrom-weapon) at a 50% reduced chance |
| Totem of Urgency | 60 | [Lesser Healing Wave](Spells-and-Ranks.md#lesser-healing-wave) crit chance +4% |
| Totem of Elders | — | [Fire Nova](Spells-and-Ranks.md#fire-nova) extends Flame Shock by 1 s (+2 s more against Beasts) |
| Totem of the Undergrove | — | Shocks against Undead reduce the Stormstrike cooldown by 0.5 s |

All rows 🟢 per [WoWHandbook relics][whb-relics]. Drop sources and item IDs: —.

## 🏰 Raid Sets

### The Spiritcaller

🟢 New Hyjal raid set (mail, 5 pieces), **healing** version. Datamined Sept 17 ([wow.gg][wowgg-sets], [WoWHandbook sets][whb-sets]).

| Pieces | Bonus |
|---|---|
| 2 | +10 Spirit |
| 3 | Fire and Water totem radius +10 yd |
| 4 | +26 healing and +9 spell damage |
| 5 | **Riptide cooldown −1 s** |

🟢 The 5-piece exists in DB2 as spell 1301713 "Tier 1 Restoration 5P – Riptide" ([wago Spell][wago-spell]).

### The Spiritcaller's Rage

🟢 Hyjal raid set (mail, 5 pieces), **Enhancement** version ([wow.gg][wowgg-sets], [WoWHandbook sets][whb-sets]).

| Pieces | Bonus |
|---|---|
| 2 | +1% attack and casting speed |
| 3 | Air and Earth totem radius +10 yd |
| 4 | +36 attack power against Elementals |
| 5 | **Stormstrike cooldown −0.5 s** |

### The Spiritcaller's Storm

🟢 Hyjal raid set (mail, 5 pieces), **Elemental** version ([wow.gg][wowgg-sets], [WoWHandbook sets][whb-sets]).

| Pieces | Bonus |
|---|---|
| 2 | +1% hit |
| 3 | [Earthbind Totem](Totems.md#earthbind-totem) cooldown −2 s |
| 4 | +21 spell damage against Elementals |
| 5 | **Lava Burst cooldown −1 s** |

🟢 The 5-piece exists in DB2 as spell 1301711 "Tier 1 Shaman Elemental 5P – Lava Burst" ([wago Spell][wago-spell]). Raids open on Dec 9, 2026 (Barrow Deeps, Hyjal Summit, Onyxia's Lair) 🔵/🟡 ([Gfinity roadmap][gfinity]).

### The Earthfury

🔴 **Classic T1 (8 items). Most likely unchanged.** WoWHandbook labels it "changed", but the bonuses it lists **match the Classic text word for word** ([WoWHandbook sets][whb-sets], [Wowhead Classic Earthfury][wh-ef-classic]). The [Wowhead Forever page][wh-ef] lists 8 items but did not render bonuses for our research.

- The Classic **3-piece** raises totem radius to 30 yd. That is now **redundant**, since Forever totems are 30 yd baseline ([Totems](Totems.md#in-forever)).

### The Ten Storms

🔴 **Classic T2 (8 items). Most likely unchanged**, for the same reason as Earthfury: WoWHandbook's "changed" bonuses match the Classic text ([WoWHandbook sets][whb-sets], [Wowhead Classic Ten Storms][wh-ts-classic], [Wowhead Forever][wh-ts]).

### Stormcaller's Garb

🟡 AQ40 set, per [WoWHandbook][whb-sets]:
- Lightning Bolt, Chain Lightning and Shock casts have a 20% chance to grant +50 Nature damage for 8 s.
- Chain Heal cast time −0.4 s.

## 🏛 Dungeon Sets

🔵 Unique dungeon boss items are now blue quality, set bonuses were improved, and every dungeon drop was re-examined ([Blizzard Deep Dive][blz-dd]). 🟡 Datamining coverage says dungeon sets moved away from the 8-piece format toward "real abilities" ([Icy Veins, snippet][iv-hidden]).

### The Elements

🟢 **Dungeon Set 1, reworked** (8 items) ([Wowhead Forever item-set 187][wh-elements]):

| Pieces | Classic bonus | Forever bonus |
|---|---|---|
| 2 | +200 armor | **+8 all resistances** |
| 3 | — | **+18 spell damage and healing** |
| 4 | +23 spell damage | **5% chance when struck in melee to disarm the attacker for 4 s** (once per 60 s) |
| 5 | — | **Chance on melee hit or spellcast to gain +65 spell damage and healing for 10 s** |
| 6 | "The Furious Storm" | **+8 MP5** |

Removed Classic bonuses per [wow.gg][wowgg-sets].

### The Five Thunders

🟢 **Dungeon Set 2, reworked**, but the two datamine sources **disagree** ([wow.gg][wowgg-sets], [WoWHandbook sets][whb-sets]):

| Pieces | Classic bonus (per wow.gg) | Forever bonus (wow.gg) |
|---|---|---|
| 2 | +40 attack power / +23 spell damage / +44 healing | **+8 all resistances** |
| 3 | — | **Mana regeneration** (amount not given) |
| 5 | — | **"Electrocute"** (no description) |
| 6 | — | **+23 spell damage** |
| 8 | +200 armor | removed |

- 🔴 **Conflict:** WoWHandbook instead lists a new "chance on spell cast to increase your damage and healing by up to 65 for 10 sec". That text is very close to the Elements 5-piece, so one source may have mixed up the two sets.

## ⚔ PvP Sets

🟡 Low detail. WoWHandbook mentions new variants such as **"Thunderfist"** (+23 spell damage and healing) and **"Wartide"**, plus standardized shock-crit bonuses ([WoWHandbook sets][whb-sets]).

- 🔵 Sept 24: honor costs for PvP gear rose about 50%, and the honor cap rose from 15,000 to 25,000 ([dev notes][blz-notes]).

## 🪓 Weapons and Armor

### Proficiencies

- 🟡 **Mail** is still learned at **level 40** ([Warcraft Tavern][wt-shaman]).
- 🟡 **Weapons:** one- and two-handed axes and maces, staves, fist weapons, daggers, shields, and totems in the relic slot ([Warcraft Tavern][wt-shaman]).
- 🟡 **Two-handed axes and maces are baseline.** The Classic talent "Two-Handed Axes and Maces" was removed ([Zockify][zockify], [Warcraft Tavern][wt-shaman]).
- 🟡 **Dual wield was not available** in the level-38 BlizzCon demo ([Zockify][zockify]). Wowhead covered a Blizzard short titled "Enhancement only uses 2-handed weapons in WoW Forever" ([Wowhead 383200][wh-383200]; article body not read).
- 🔵 **Caster weapons now carry spell damage and healing**, from around level 10 ([Blizzard Deep Dive][blz-dd]).

### Caster Staff DPS

🟡 **Caster staves have lower weapon DPS in game than on Wowhead.** Example: Staff of Westfall shows 20.50 DPS on Wowhead but **15.2 DPS in game**. Players note that Crescent Staff is no longer better than a one-hander for leveling Shamans ([forum thread 2359184][f-2359184], [thread 2365746][f-2365746]).

- Wowhead's Forever item database may lag behind the client, so **do not trust Wowhead weapon DPS for Forever** until it updates. See [Datamining](Datamining.md#wowhead-forever).

### Tidebringer's Claw

🟢 DB2 70170 contains a spell **1309539 "Tidebringer's Claw"**, listed among Shaman weapon-related spells ([wago Spell][wago-spell]). What item it belongs to and what it does are unknown; the item is probably one of the hidden ones.

### Revelation Enchant

🟡 **Revelation** is a spell-crit weapon enchant: your next spell that does not crit gets +100% crit chance. A bug report showed that the buff was only consumed by **direct spells**, not by periodic ticks, melee hits or **spells cast by totems**. That left a +100% crit window for totems and DoTs. The evidence video is credited to "Shamancord" ([forever-bugs #163][fb-163]). The issue is closed; whether it was fixed in game is not stated.

## 📋 Quick Reference

| Item / set | Type | Forever status | Conf. |
|---|---|---|---|
| 10 totem relics | Relic slot | New; small spell tweaks | 🟢 |
| The Spiritcaller / Rage / Storm | Hyjal raid, 5 pc | New; 5 pc lowers Riptide / Stormstrike / Lava Burst cooldown | 🟢 |
| The Earthfury (T1) | Raid, 8 pc | Likely unchanged; 3 pc now redundant | 🔴 |
| The Ten Storms (T2) | Raid, 8 pc | Likely unchanged | 🔴 |
| Stormcaller's Garb (AQ40) | Raid | Nature damage proc; Chain Heal −0.4 s | 🟡 |
| The Elements (D1) | Dungeon, 8 items | Reworked: resistances, spell power, disarm, proc, MP5 | 🟢 |
| The Five Thunders (D2) | Dungeon | Reworked; sources disagree | 🟢 / 🔴 |
| PvP sets | PvP | New variants (Thunderfist, Wartide) | 🟡 |
| Caster staves | Weapon | In-game DPS lower than Wowhead shows | 🟡 |
| Revelation enchant | Enchant | Totem and DoT crit window (bug report closed) | 🟡 |

## 🔍 To Verify

- [ ] **Earthfury and Ten Storms bonuses** in Forever — Wowhead Forever pages did not render bonuses; WoWHandbook's text matches Classic ([Wowhead Forever 207][wh-ef], [216][wh-ts]).
- [ ] **The Five Thunders** real bonuses — wow.gg and WoWHandbook disagree; "Electrocute" is undescribed ([wow.gg][wowgg-sets], [WoWHandbook][whb-sets]).
- [ ] **Relic count and sources** — 8 vs 10 Shaman totem relics; drop locations and item IDs unknown; two relics have no level ([WoWHandbook relics][whb-relics]).
- [ ] **Tidebringer's Claw** — which item, what effect ([wago Spell][wago-spell]).
- [ ] **Revelation** — was the totem/DoT crit window fixed? ([forever-bugs #163][fb-163]).
- [ ] **Staff DPS** — is it all caster staves, and does Wowhead now match the client? ([thread 2359184][f-2359184]).
- [ ] **Dual wield** — confirm whether Shamans can dual wield at any level in Forever ([Zockify][zockify], [Wowhead 383200][wh-383200]).
- [ ] **PvP set bonuses** — full text missing ([WoWHandbook][whb-sets]).

## 📚 Sources

- [WoWHandbook relics][whb-relics] and [sets][whb-sets] — 🟡 relic list, AQ40 and PvP sets; mislabels unchanged Classic bonuses as changed
- [wow.gg datamined set bonuses][wowgg-sets] — 🟢 Sept 17 datamine of raid and dungeon sets
- [Wowhead Forever item-set 187][wh-elements], [207][wh-ef], [216][wh-ts]; Wowhead Classic [207][wh-ef-classic], [216][wh-ts-classic] — 🟢 set data and Classic baseline
- [wago.tools Spell table, build 70170][wago-spell] — 🟢 set-bonus and Tidebringer's Claw spell IDs
- [Blizzard Deep Dive recap][blz-dd], [Beta Development Notes][blz-notes] — 🔵 dungeon loot, caster weapons, honor costs
- [Method.gg][method-ptr], [Icy Veins (snippet)][iv-hidden] — 🟡 hidden items, no PTRs
- [Warcraft Tavern Shaman guide][wt-shaman], [Zockify][zockify], [Wowhead news 383200][wh-383200], [Gfinity roadmap][gfinity] — 🟡 proficiencies, raid dates
- Blizzard forum threads [2359184][f-2359184], [2365746][f-2365746]; [forever-bugs #163][fb-163] — 🟡 player findings

[method-ptr]: https://www.method.gg/wow-forever/no-ptrs-and-new-datamining-restrictions-coming-to-world-of-warcraft-forever
[iv-hidden]: https://www.icy-veins.com/wow-forever/news/wow-forever-hid-over-12500-items-from-dataminers-heres-whats-still-secret/
[wt-shaman]: https://www.warcrafttavern.com/forever/guides/shaman/
[whb-relics]: https://wowhandbook.com/gear/relics/
[whb-sets]: https://wowhandbook.com/gear/shaman/
[wowgg-sets]: https://wow.gg/guides/wow-forever-tier-set-bonuses
[wago-spell]: https://wago.tools/db2/Spell/csv?build=1.60.1.70170
[gfinity]: https://www.gfinityesports.com/article/world-of-warcraft-forever-roadmap-guide
[wh-ef-classic]: https://www.wowhead.com/classic/item-set=207/the-earthfury
[wh-ef]: https://www.wowhead.com/forever/item-set=207/the-earthfury
[wh-ts-classic]: https://www.wowhead.com/classic/item-set=216/the-ten-storms
[wh-ts]: https://www.wowhead.com/forever/item-set=216/the-ten-storms
[wh-elements]: https://www.wowhead.com/forever/item-set=187/the-elements
[blz-dd]: https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap
[blz-notes]: https://us.forums.blizzard.com/en/wow/t/2360696
[zockify]: https://www.zockify.com/forever/shaman/
[wh-383200]: https://www.wowhead.com/forever/news=383200/enhancement-only-uses-2-handed-weapons-in-wow-forever-enhancement-shaman
[f-2359184]: https://us.forums.blizzard.com/en/wow/t/2359184
[f-2365746]: https://us.forums.blizzard.com/en/wow/t/2365746
[fb-163]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/163
