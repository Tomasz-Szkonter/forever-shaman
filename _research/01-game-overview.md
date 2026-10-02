# 01 – World of Warcraft: Forever: Game Overview & System Changes (Shaman lens)

*Research date: 2026-10-02 (beta week 3, level-30 phase). Only web sources were used. Where a page blocked fetching (HTTP 403: Icy Veins, Mobalytics, MassivelyOP), the claim is cited from the search-result snippet and tagged accordingly.*

**Confidence legend:** 🔵 official Blizzard · 🟢 datamined / client data · 🟡 community guide / testing · 🔴 rumor / unclear / unverified

---

## 1. Basics

### 1.1 Identity & philosophy
- WoW: Forever is a separate, permanent game mode that sits alongside modern WoW and Classic. It is set after *Warcraft III Reforged: Forsaken Kingdom* and before Molten Core, takes place on the original continents, and has a level cap of 60. 🔵 [Blizzard – Carve a New Path](https://worldofwarcraft.blizzard.com/news/24302093/)
- The level cap stays at 60 for good. There is no expansion roadmap: the plan is to build "wider rather than higher". 🟡 [Warcraft Tavern](https://www.warcrafttavern.com/forever/news/warcraft-forever-classic-announced-at-blizzcon-2026/), [search snippet summary of Blizzard news](https://news.blizzard.com/en-us/article/24302093/)
- It is not in the same continuity as retail WoW, and the setting is fixed at year 25 ADP. 🟡 [warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Forever) (the wiki cites a Twitch clip)
- Development pillars: "Approachable and familiar" (no flying mounts), "World is the main character", "Journey before destination" (no level-cap increases), "Protect social experiences". 🟡 [warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Forever)
- There will be **no PTRs**. Raid bosses and item stats stay hidden until players meet them, which is why the item data is heavily obfuscated. This comes from an MMORPG.com interview with Josh Greenfield (Aggrend). 🔵/🟡 [Method.gg](https://www.method.gg/wow-forever/no-ptrs-and-new-datamining-restrictions-coming-to-world-of-warcraft-forever)
- About 12,500 items are hidden from dataminers, and roughly 4,419 had been revealed during the beta. 🟡 [Icy Veins (snippet)](https://www.icy-veins.com/wow-forever/news/wow-forever-hid-over-12500-items-from-dataminers-heres-whats-still-secret/)

### 1.2 Dates
| Event | Date | Conf. | Source |
|---|---|---|---|
| Announcement (BlizzCon 2026) | Sept 12, 2026 | 🔵 | [Blizzard](https://worldofwarcraft.blizzard.com/news/24302093/) |
| Beta start | Thu Sept 17, 2026 | 🔵 | [Blizzard](https://worldofwarcraft.blizzard.com/news/24302093/) |
| Beta end | **Oct 21, 2026** (some sources say Oct 22; see Conflicts) | 🟡 | [Gfinity](https://www.gfinityesports.com/article/world-of-warcraft-forever-beta-dates-level-caps-how-to-access), [Warcraft Tavern editions](https://www.warcrafttavern.com/news/world-of-warcraft-forever-editions-skyborne-race-unlock-beta-access/) |
| Early Name Reservation | Oct 27 – Nov 3, 2026 (up to 3 characters) | 🟡 | [Insider Gaming (snippet)](https://insider-gaming.com/when-does-wow-forever-come-out-release-date-times/), [warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Forever) |
| **Launch** | **Nov 4, 2026, 3:00 p.m. PDT, global** (Nov 5 00:00 CET) | 🔵 | [Blizzard](https://worldofwarcraft.blizzard.com/news/24302093/), [Zockify](https://www.zockify.com/forever/) |
| Raids unlock | Dec 9, 2026 | 🔵/🟡 | [Gfinity roadmap](https://www.gfinityesports.com/article/world-of-warcraft-forever-roadmap-guide), [Zockify](https://www.zockify.com/forever/) |
| Hardcore ruleset | "Winter 2026" / "sometime after launch" | 🔵/🟡 | [Gfinity roadmap](https://www.gfinityesports.com/article/world-of-warcraft-forever-roadmap-guide), [Blizzard EU forum](https://eu.forums.blizzard.com/en/wow/t/630507/1) |

### 1.3 Beta phases & level caps
- **Phase 1 (Sept 17 onward):** level cap 20. Dungeons: Hall of Thanes and Ruins of Lordaeron. Includes the Legacy system, new class abilities and talents. 🟡 [Gfinity](https://www.gfinityesports.com/article/world-of-warcraft-forever-beta-dates-level-caps-how-to-access), [Icy Veins (snippet, dev interview)](https://www.icy-veins.com/wow/news/the-wow-forever-beta-starts-at-level-20-level-30-after-couple-of-weeks/)
- **Phase 2 (Oct 1 build):** "Players can now level up to a maximum of level 30." Adds Excavation Site: Wetlands. 🔵 [Blizzard Beta Development Notes](https://us.forums.blizzard.com/en/wow/t/2360696)
- In the beta, respeccing costs 1 silver. The price rises after the first reset and drops back to 1 silver after an hour. 🔵 [Blizzard dev notes](https://us.forums.blizzard.com/en/wow/t/2360696), [wowguide.net](https://wowguide.net/en/guides/wow-forever-beta-patch-notes)
- The beta already uses layering. 🟡 [Blizzard EU forum thread (players)](https://eu.forums.blizzard.com/en/wow/t/630507/1)
- The Sept 24 build added a **Cooldown Manager**. It is off by default and lives under Options > Gameplay Enhancement. At first it supported only Druid, Mage, Priest, Warrior and Warlock, so **not Shaman** yet, and it did not handle spell ranks. 🟡 [wowguide.net](https://wowguide.net/en/guides/wow-forever-beta-patch-notes), [search summary of beta-patch coverage](https://players-realm.com/en/news/wow-forever-beta-class-changes-cooldown-manager/)

### 1.4 Client builds (wago.tools build monitor)
The product is **`wow_classic_beta`**, version **1.60.1**. 🟢 [wago.tools API /api/builds](https://wago.tools/api/builds)

| Build | Created (UTC) |
|---|---|
| 1.60.1.69876 | 2026-09-16 18:23 |
| 1.60.1.69893 | 2026-09-16 23:14 |
| 1.60.1.69913 | 2026-09-18 03:02 (the build players had on beta launch day) |
| 1.60.1.69977 | 2026-09-23 00:35 (controller and Mac fixes, per [Icy Veins snippet](https://www.icy-veins.com/wow-forever/news/a-new-beta-client-build-arrives-for-wow-forever/)) |
| 1.60.1.70009 | 2026-09-24 22:02 (matches the Sept 24 dev notes) |
| 1.60.1.70058 | 2026-09-29 16:41 |
| 1.60.1.70124 | 2026-09-30 01:57 |
| **1.60.1.70170** | **2026-10-01 22:54** (current; matches the Oct 1 dev notes) |

There is also a China beta product `wow_cn_beta` on 1.60.1.70094 and 1.60.1.70178 (Oct 2). 🟢 [wago.tools API](https://wago.tools/api/builds). ForeverChanges says it uses beta build 1.60.1.70170. 🟢/🟡 [foreverchanges.pro](https://foreverchanges.pro/)

### 1.5 Access, editions, subscription
- **Base game access comes with a WoW subscription or game time.** No separate box purchase is needed. 🔵 [Blizzard](https://worldofwarcraft.blizzard.com/news/24302093/)
- There will be no tokens and no character boosts. 🟡 [Zockify](https://www.zockify.com/forever/)
- Platforms: Windows and Mac through Battle.net. There is no console version. 🟡 [Gfinity](https://www.gfinityesports.com/article/world-of-warcraft-forever-beta-dates-level-caps-how-to-access)
- Controller support is included. 🟡 [Zockify](https://www.zockify.com/forever/)

| Edition | Price (USD) | Contents | Conf. |
|---|---|---|---|
| **Skyborne Heroic Pack** | $29.99 | Skyborne race and the Zephras Isle starting experience, Early Name Reservation, Cerulean Prideclaw ground mount, transmog, housing decor, 1 Invite-A-Friend code | 🔵 contents [Blizzard](https://worldofwarcraft.blizzard.com/news/24302093/); 🟡 price [Warcraft Tavern](https://www.warcrafttavern.com/news/world-of-warcraft-forever-editions-skyborne-race-unlock-beta-access/) |
| **Skyborne Epic Pack** | $59.99 | Everything in Heroic, plus **beta access (from Sept 17)**, 30 days of game time (starting Nov 4), extra mount, transmog, pets, tabards, 3 IAF codes in total | 🔵 / 🟡 same sources |
| **Warcraft Forever Collection** (limited time) | $79.99 | Everything in Epic, plus *Warcraft III: Reforged*, the *Forsaken Kingdom* campaign, and figurine decor | 🔵 / 🟡 same sources |
| Collector's Edition (physical) | n/a | Sold through the Blizzard Gear Store | 🔵 [Blizzard](https://worldofwarcraft.blizzard.com/news/24302093/) |

- **The Skyborne race needs the Heroic Pack or a higher edition.** "Access to Skyborne Race or the Zephras Isle starting experience questline requires purchase of Skyborne Heroic Pack or higher edition." No later free unlock has been announced. 🔵 (quoted ToS line) [Warcraft Tavern](https://www.warcrafttavern.com/news/world-of-warcraft-forever-editions-skyborne-race-unlock-beta-access/), 🟡 [Icy Veins (snippet)](https://www.icy-veins.com/wow-classic/news/new-warcraft-forever-race-requires-skyborne-heroic-pack/)
- Beta access is otherwise opt-in through the official site, and opting in does not guarantee access. 🟡 [Gfinity](https://www.gfinityesports.com/article/world-of-warcraft-forever-beta-dates-level-caps-how-to-access)

### 1.6 Realms → Rulesets (realmless)
- **There are no realms.** Players pick a ruleset instead: **Normal** (PvP by consent), **PvP**, **Roleplaying**, and **Hardcore** (after launch). Each ruleset is one large ecosystem per region. 🔵 [Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap), [Blizzard EU forum](https://eu.forums.blizzard.com/en/wow/t/630507/1)
- Characters have two-part names (first and last) per region. Collections and Legacy Points are account-wide across rulesets, **except Hardcore**. Players cannot group across rulesets, and Horde and Alliance stay separate. 🔵 [Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)
- A character cannot switch rulesets; a new character is required. Dead Hardcore characters can move to other rulesets to be resurrected. 🟡 [Icy Veins (snippet)](https://www.icy-veins.com/wow-forever/news/rulesets-replace-realms-in-wow-forever-heres-how-it-works/)
- A player worried that one account may be **faction-locked on the PvP ruleset**. This is not confirmed. 🔴 [Blizzard EU forum (player post)](https://eu.forums.blizzard.com/en/wow/t/630507/1)

---

## 2. Races, and who can be a Shaman

### 2.1 Race roster
- Alliance: Human, Dwarf, Night Elf, Gnome, High Order Skyborne. Horde: Orc, Tauren, Troll, Undead, Windshaper Skyborne. 🔵 [Blizzard – Meet the Skyborne](https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne), 🟡 [Zockify](https://www.zockify.com/forever/races/)
- **Six new combinations** for the old races: **Gnome Priest, Human Hunter, Dwarf Shaman, Orc Mage, Troll Warlock, Undead Paladin.** 🔵 [Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)

### 2.2 Shaman-eligible races
| Faction | Race | Status | Conf. |
|---|---|---|---|
| Horde | Orc | existing | 🔵/🟢 |
| Horde | Tauren | existing | 🔵/🟢 |
| Horde | Troll | existing | 🔵/🟢 |
| Horde | **Windshaper Skyborne** | **new**; needs the paid Heroic Pack or higher | 🔵 [Blizzard – Skyborne](https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne) |
| Alliance | **Dwarf** | **new**; the **only Alliance Shaman** | 🔵 [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap) |

- **Shaman is no longer Horde-only. Dwarf is the only Alliance option.** Human, Night Elf, Gnome, Undead and High Order (Alliance) Skyborne **cannot** be Shaman. **There is no Draenei in Forever.** 🟢 [ForeverChanges matrix (build 1.60.1.70170)](https://foreverchanges.pro/racials), 🟡 [Warcraft Tavern](https://www.warcrafttavern.com/forever/news/undead-paladins-other-race-class-combos-in-world-of-warcraft-forever/), [Warcraft Tavern Shaman guide](https://www.warcrafttavern.com/forever/guides/shaman/)
- Skyborne classes: Windshaper (Horde) can be Druid, Hunter, Rogue, **Shaman** or Warrior. High Order (Alliance) can be Druid, Hunter, **Mage**, Rogue or Warrior. 🔵 [Blizzard – Skyborne](https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne)

### 2.3 Racial redesign (game-wide)
- "Each race now has two active abilities and two passive abilities, tuned to provide a similar amount of offensive power while preserving signature utility." 🔵 [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)
- All resistance racials are gone, and racial weapon-skill bonuses became +1% crit with the weapon type. 🟡 [search summary of Icy Veins/Method coverage](https://www.icy-veins.com/wow-forever/news/all-new-race-and-class-combos-and-racial-abilities-in-wow-forever-official/), 🟢 [ForeverChanges](https://foreverchanges.pro/racials)

### 2.4 Racials for Shaman-eligible races (beta build 1.60.1.70170)
Sources: 🟢 [ForeverChanges](https://foreverchanges.pro/racials) and 🟡 [Method.gg](https://www.method.gg/wow-forever/all-new-racial-abilities-in-world-of-warcraft-forever). Skyborne text is 🔵 from [Blizzard](https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne).

| Race | Active 1 | Active 2 | Passive 1 | Passive 2 | Shaman notes |
|---|---|---|---|---|---|
| **Orc** | **Blood Fury**: +10% Attack Power **and Spell Power** for 15s (changed) | **Shatter Curse** (new): removes curses/banes, −15% magic damage taken for 8s | Axe Specialization: +1% crit with 1H/2H axes | Hardiness: stun duration −20% | Blood Fury now helps casters too, so it is good for Elemental and Enhancement. Warcraft Tavern calls Orc "the best choice for Horde Shamans" 🟡 [WT](https://www.warcrafttavern.com/forever/guides/shaman/) |
| **Tauren** | War Stomp: 2s AoE stun, 8 yd, 5 targets | **Cultivation** (changed): duplicate nearby herbs without Herbalism (level-gated: herb skill ÷ 5) | **Plainsrunning** (new): +1% move speed per 5s moving, up to 30% | **Endurance**: +5% Health **+1% hit** | The 1% hit is useful to every spec |
| **Troll** | **Berserking** (changed): **flat +10% cast and attack speed for 10s** | **Rapid Regeneration** (new): heal 50% max HP over 6s | Beast Slaying: +5% vs beasts | Regeneration: +10% HP regen, 10% continues in combat | Berserking is no longer health-scaled |
| **Dwarf** | **Stoneform**: removes bleeds, poisons and diseases, −10% physical damage for 8s | Find Treasure | **Mace Specialization** (new): +1% crit with maces | **Big Game Hunter** (new): +5% vs beasts | Maces suit Enhancement. (The Dwarf priest racials changed too: Fear Ward is now baseline for all Priests 🟡 [Warcraft Tavern](https://www.warcrafttavern.com/forever/news/priest-racials-in-world-of-warcraft-forever-fear-ward-is-baseline/)) |
| **Windshaper Skyborne** (Horde) | **Walk on Air**: glide for 10s | **Skysight**: +10% run speed (30s base, 15 min near a "convergence") | **Wind Blessed**: +1% melee, ranged and spell haste | **Elemental Insight**: +5% damage to Elementals | Flat haste is a rare stat in Forever (see 4.3) |

- Skyborne lore: Highborne exiles who made a pact with wind spirits at Skywall. They start on Zephras Isle (levels 1–12). Windshapers follow the elemental path and look to the Earthen Ring. 🔵 [Blizzard – Skyborne](https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne), 🟡 [search summary of Icy Veins/Blizzard Watch](https://www.icy-veins.com/wow-classic/news/meet-wow-forevers-new-race-everything-we-know-about-the-skyborne/)
- Oct 1 notes: "Shenthul in Orgrimmar will now train Windshaper Skyborne." "High Order Skyborne can now do the quest 'Power Over Poison' to learn the Cure Poison spell." 🔵 [Blizzard dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)
- Racial tuning in the beta: Gnome Eureka! became a 10% resource discount and then stopped affecting periodic effects. Tauren Cultivation gained level requirements. 🔵 [Blizzard dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)

---

## 3. New content

### 3.1 Totals at launch
More than 1,000 new quests, **nine new dungeons**, two new raids, new zones, the Skyborne race, updated graphics with an optional SD/HD model toggle, optional transmog, and a new 15v15 battleground (Darkspear Islands). 🔵 [Blizzard (snippet)](https://worldofwarcraft.blizzard.com/news/24302093/), 🟡 [Zockify](https://www.zockify.com/forever/), [warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Forever)

### 3.2 New zones
| Zone | Notes | Conf. |
|---|---|---|
| **Zephras Isle** | Skyborne starting zone, levels 1–12 | 🔵 [Blizzard](https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne) |
| **Riverglades** | New zone on the east coast of the Eastern Kingdoms, 150+ quests, both factions; holds the dungeon Krol'dok Stronghold (40–45) | 🟡 [search summary of Warcraft Tavern/Icy Veins](https://www.warcrafttavern.com/forever/news/all-new-zones-areas-in-wow-forever-revealed-at-blizzcon/) |
| **Shen'dralas** | Between Mulgore and Desolace. Highborne, Eldre'Thalas and Dire Maul lore, Gelkis vs. Magram centaurs. Level range unconfirmed (guessed 30–50) | 🟡 same |
| **Mount Hyjal** | Endgame leveling zone after Archimonde's defeat; leads into the raids | 🟡 same |
| Dalaran (Alterac Mountains) and expanded original zones | | 🟡 [warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Forever) |

### 3.3 New dungeons (level ranges from warcraft.wiki.gg) 🟡 [warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Forever)
1. Hall of Thanes (Ironforge), 13–18
2. Ruins of Lordaeron (Undercity), 15–20
3. Excavation Site: Wetlands, 24–29 (one summary of the dev notes said 26–31; see Conflicts)
4. City of Dalaran (Alterac Mountains), 28–33
5. The Drowned City (Stranglethorn Vale), 35–40
6. Krol'dok Stronghold (Riverglades), 40–45
7. Alcaz Prison (Dustwallow Marsh), 48–53
8. Blackmaw Hold (Azshara), 55–60
9. Shaper's Terrace (Un'Goro Crater), 58–60

- Unique dungeon boss items are now blue quality, and set bonuses have been improved. Every dungeon drop was re-examined and hundreds were added. 🔵 [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)
- Dungeon sets drop the 8-piece format in favor of "real abilities" (datamined). 🟡 [search summary of Icy Veins datamining coverage](https://www.icy-veins.com/wow-forever/news/wow-forever-hid-over-12500-items-from-dataminers-heres-whats-still-secret/)

### 3.4 Raids & roadmap 🟡 [Gfinity roadmap](https://www.gfinityesports.com/article/world-of-warcraft-forever-roadmap-guide), [Icy Veins (snippet)](https://www.icy-veins.com/wow-classic/news/warcraft-forever-roadmap-unveils-raid-unlocks-and-major-updates/)
- **Dec 9, 2026:** Barrow Deeps (10-player, under Hyjal, Night Elf barrow dens), Hyjal Summit (20-player), and **Onyxia's Lair (40-player)**.
- **Winter 2026:** Hardcore ruleset.
- **Spring 2027:** two new raids (10- and 20-player), two dungeons, new quests and a new area, a **legendary questline**, and a PvP season refresh.
- **Summer 2027:** a "revamped iconic raid", one new raid, two dungeons, world content, a PvP refresh, and Legacy updates.
- No world buffs in raids. 🟡 [Zockify](https://www.zockify.com/forever/) (needs official confirmation)

### 3.5 New systems
- **Legacy System:** account-wide horizontal progression. 65 Legacy Challenges in 6 categories (Classes, Tradeskills, PvP, Adventure, Dungeons, Raids), 1 point each, usually starting around character level 25. Each character can spend **16 points** at launch across three trees (Professions, Adventure, Resourcefulness), e.g. Reagent Economy and Well Rested. Changing Legacy talents requires a class trainer. Hardcore does not share Legacy progress. 🔵 [Blizzard – Legacy System](https://news.blizzard.com/en-us/article/24307383/), [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)
- **Camping:** a Basic Campfire creates a campsite. Up to 3 profession objects can be added (one per player, 1-hour cooldown), each giving one-hour buffs or utility such as vendors and repairs. Examples: Blacksmith Sharpening Wheel (Attack Power) and Tailor Faction Banner (Spirit). 🔵 [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap). Camp buffs do **not stack with class buffs**; Herbalism Incense Candle gives Intellect. 🟡 [Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-professions/)
- **Professions:** more than 600 new recipes, Blueprint recipes from dungeon bosses, food that gives an XP bonus, First Aid expanded with curatives and potions. Skinning is back to one skin per corpse (Oct 1). 🔵 [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap), [dev notes](https://us.forums.blizzard.com/en/wow/t/2360696); 🟡 [Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-professions/)

---

## 4. Cross-class system changes

### 4.1 Talents
- "Talent trees are being revised with the same Classic-minded approach: familiar structure, the same number of rows, and one-point milestone talents at 11, 21, and 31 points, **now joined by a new 16-point milestone**." Talents start at level 10. 🔵 [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap), [Blizzard Class Deep Dive: Hunter & Druid (Sept 30)](https://worldofwarcraft.blizzard.com/en-gb/news/24301515)
- The tree format is 3 trees, 7 rows, 51 points, with each row unlocking per 5 points spent. Some talents are unchanged from 1.12 and others are adjusted. Key class buffs moved from talents to baseline, e.g. Blessing of Kings, Improved Mark of the Wild, Divine Spirit, and (per community) Blessing of Might and Improved Battle Shout. 🔵 [Blizzard Class Deep Dive](https://worldofwarcraft.blizzard.com/en-gb/news/24301515), 🟡 [search summary](https://powerupgaming.co.uk/2026/09/14/new-wow-forever-talents-changes-vs-classic-guide/)
- **Changing talents requires a class trainer in a major city**, and this includes Legacy talents. 🔵 [Blizzard Class Deep Dive](https://worldofwarcraft.blizzard.com/en-gb/news/24301515)
- **Dual Specialization unlocks at level 40.** 🔵 [Blizzard Class Deep Dive](https://worldofwarcraft.blizzard.com/en-gb/news/24301515). The cost is unknown.
- **Shaman tree:** 50 talents in total: 15 new, 25 changed, 10 unchanged. New talents include Lava Burst (Elemental), Maelstrom Weapon (Enhancement) and Water Shield (Restoration). Stormstrike now raises the Shaman's own Nature damage rather than the target's damage taken. 🟡 [Power Up Gaming](https://powerupgaming.co.uk/2026/09/14/new-wow-forever-talents-changes-vs-classic-guide/) (see file 02/03 for detail)
- Datamining of the first build found 60 new talents and 64 set bonuses. 🟡 [search summary of Icy Veins](https://www.icy-veins.com/wow-forever/news/wow-forever-hid-over-12500-items-from-dataminers-heres-whats-still-secret/)
- **Official class deep dives so far:** Hunter & Druid (Sept 30), plus Paladin inside the BlizzCon Deep Dive. Blizzard says more will come "as beta progresses". **No official Shaman deep dive had been published as of Oct 2.** 🔵 [Blizzard](https://worldofwarcraft.blizzard.com/en-gb/news/24301515). There may also be a Priest/Warrior deep dive. 🔴 [Icy Veins title only](https://icy-veins.com/wow-forever/news/priest-and-warrior-class-changes-deep-dive)

### 4.2 Itemization & stat model
- **Hit and crit are unified:** "Spell, melee, and ranged hit chance are combined, as are spell, melee, and ranged critical chance." 🔵 [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap). This matters a lot for Enhancement and other hybrid Shamans.
- **Healing gear gives damage too:** "Bonus healing now also includes one third as much bonus damage." 🔵 [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)
- **Caster weapons** now carry spell damage and healing, from around level 10. 🔵 [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap), 🟡 [Method.gg](https://www.method.gg/wow-forever/itemization-updates-in-world-of-warcraft-forever-expertise-spell-damage-more)
- **Weapon skill:** "still works as it always has, but items with weapon skill offer less of it per item". New stats reduce the target's chance to parry or dodge. 🔵 [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap). Method calls this "Expertise… similar to TBC". 🟡 [Method.gg](https://www.method.gg/wow-forever/itemization-updates-in-world-of-warcraft-forever-expertise-spell-damage-more)
- New trinkets are tied to specific environments and creature types. Bad epic world drops have been removed. 🔵 / 🟡 same sources
- **Haste:** a new secondary stat appears on Skyborne Wind Blessed (+1% haste for all attack types). Warcraft Tavern says haste was not yet on any gear they had collected. 🔵 [Blizzard – Skyborne](https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne), 🟡 [Warcraft Tavern stats](https://www.warcrafttavern.com/forever/guides/stats/)
- Shaman relic slot: Shamans still use **Totems in the Relic slot**. 🟡 [Warcraft Tavern Shaman guide](https://www.warcrafttavern.com/forever/guides/shaman/)
- Combat pace: solo mobs take about 10–15 seconds, CC matters in dungeons, and threat matters. 🔵 [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)

### 4.3 Spell power, spell ranks & downranking
- Low-rank spells lose spell power benefit: "spells cast using spell ranks vastly below your current level receive less benefit from your Spell Damage and Spell Healing **and have a reduced chance to activate your Class abilities and Talents**." Example: "Using a Rank 1 Frostbolt at level 60 will result in a 0% chance to get a Frostbite activation." 🔵 [Blizzard dev notes, Oct 1](https://us.forums.blizzard.com/en/wow/t/2360696). This applies to downranked Chain Heal, Healing Wave and Lightning Bolt procs.
- Some spells now scale dynamically with the caster's spell power (Thorns, Retribution Aura). Wands no longer scale with spell damage. Wizard Oil is back to 8/16/24 spell power. 🔵 [Blizzard dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)
- Warcraft Tavern says Forever "drastically changes how spell power scaling works", moving reliance from spell ranks to gear. 🟡 [Warcraft Tavern Shaman guide](https://www.warcrafttavern.com/forever/guides/shaman/)
- Some rank cast times changed: "Lightning Bolt: Damage on ranks 3 and 4 increased to make these spells always upgrades over previous ranks (despite changing cast times)." 🔵 [Blizzard dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)
- Spells are still learned in ranks, and downranking is still possible through the spellbook dropdown. 🟡 [Blizzard forum (player discussion, no blue post)](https://us.forums.blizzard.com/en/wow/t/2352785)

### 4.4 Critical strikes on periodic effects (DoT/HoT crits)
- **HoTs and DoTs can crit.** Blizzard fixed bugs so that Rejuvenation, Tranquility, Wild Growth, **Riptide**, Devouring Plague and Hellfire "can land critical hits". Inner Focus "no longer applies its Critical Strike increase to Periodic Effects", which means periodic effects can crit in general. 🔵 [Blizzard dev notes](https://us.forums.blizzard.com/en/wow/t/2360696). This affects Flame Shock, Healing Stream and similar effects (see Open Questions).
- **PvP crit rule (found by players):** against players, the crit bonus is halved. Melee crits deal 150% instead of 200%, spell crits about 125% instead of 150%, and DoT crits are reduced the same way. 🟡 [Icy Veins (snippet, player testing)](https://www.icy-veins.com/wow-forever/news/players-found-a-hidden-pvp-rule-in-wow-forever-that-halves-crit-bonuses/)
- Rage now normalizes on crit: +100% Rage from a basic-attack crit for Warriors and Bears. This is not relevant to Shaman. 🔵 [dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)

### 4.5 Mana regeneration
- **Talents add "Spirit regen while casting" across classes**, which works around the 5-second rule. Official examples: Paladin **Reverence** ("allows Paladins to regenerate Mana from Spirit while casting"), Paladin Shield Specialization and Improved Seal of Fury, Hunter Bestial Discipline, Rapid Recuperation and Resourcefulness. 🔵 [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap), [Blizzard Class Deep Dive](https://worldofwarcraft.blizzard.com/en-gb/news/24301515)
- Restoration Shaman gets "Meditation"/"Mindfulness"-style talents: 17% per rank, up to about 50–51% of regen continuing while casting. Water Shield also returns mana. Druid Reflection is 17/33/50% and Priest Meditation 17% at rank 1. 🟡 [wow.gg Resto Shaman](https://wow.gg/guides/shaman-restoration-forever-overview), [Power Up Gaming](https://powerupgaming.co.uk/2026/09/14/new-wow-forever-talents-changes-vs-classic-guide/), [kami-labs Resto Druid](https://kami-labs.fr/en/wow-forever/build-druide-restauration-wow-forever/), [search summary of wowforevertalents.com](https://wowforevertalents.com/shaman/)
- Spirit still works like Classic outside the 5-second rule: "Spirit increases your Health and Mana Regeneration while out of combat and/or not casting." 🟡 [Warcraft Tavern stats](https://www.warcrafttavern.com/forever/guides/stats/)
- **Unverified claim:** Spirit regen while not casting is cut "across the board", while talents for regen while casting are buffed so that in-combat regen stays about the same. 🔴 This comes only from a Mobalytics search snippet ([page 403](https://mobalytics.gg/wow-forever/guides/shaman-class-overview)) and has **no official confirmation**.
- Totemic Recall restores mana when totems are recalled (fixed Oct 1). 🔵 [dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)
- There is a racial mana regen burst: High Order Skyborne Read Ley Line (+100% HP/mana regen). It is Alliance-only, so not available to Shamans. 🔵 [Blizzard – Skyborne](https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne)

### 4.6 Totems & buff-stacking rules (game-wide implications)
From the Sept 24 notes 🔵 [Blizzard dev notes](https://us.forums.blizzard.com/en/wow/t/2360696):
- "Flametongue Totem no longer has a duration and is instantly replaced when placing another totem."
- Flametongue Totem no longer stacks with itself, with Flametongue Weapon, or with Windfury Totem.
- "Tranquil Air Totem, Windfury Totem, and Grace of Air Totem no longer stack together even if used by different Shamans in the same group." In practice a group gets only one air-totem effect at a time.
- Disease Cleansing Totem lasts 5 minutes (fixed Oct 1).
- Camp profession buffs do not stack with class buffs. 🟡 [Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-professions/)
- Totem unlock levels: Earth 4, Fire 10, Water 20, Air 30. 🟡 [Warcraft Tavern Shaman guide](https://www.warcrafttavern.com/forever/guides/shaman/)

### 4.7 Mounts & riding
- Mount costs follow the TBC model: "shifting the up-front mount cost into training and granting a mount when players learn the riding skill." 🔵 [Blizzard Deep Dive](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)
- There are no flying mounts. 🟡 [warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Forever)
- About 37 new mount models were datamined. 🟡 [search summary of Gamewave/Icy Veins](https://gamewave.fr/world-of-warcraft-forever/wow-forever-plus-de-30-modeles-de-montures-datamines-sur-la-beta/)
- **Unknown:** the riding level (40?) and the gold cost.

### 4.8 Other
- Dungeon quests give 50% less bonus XP (Sept 24). Honor costs for PvP gear rose about 50%, and the honor cap rose from 15,000 to 25,000. 🔵 [Blizzard dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)
- Ghost Wolf is easier to see in bright areas (Oct 1). 🔵 [dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)
- Shaman gets two-handed axes and maces baseline, and **dual wield was not available in the BlizzCon demo** (level 38). 🟡 [Zockify Shaman](https://www.zockify.com/forever/shaman/)
- **No sources found** for: spell batching, the GCD rules (including the totem GCD), buff or debuff slot limits, faction-balance measures, and trainer or spell-rank cost changes.

---

## 5. Official & community sources map
- **Official:** the announcement ([worldofwarcraft.blizzard.com/news/24302093](https://worldofwarcraft.blizzard.com/news/24302093/)); Meet the Skyborne ([news.blizzard.com/…/24302071](https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne)); the Deep Dive panel recap ([24303313](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)); the Legacy System post ([24307383](https://news.blizzard.com/en-us/article/24307383/)); Class Deep Dives: Hunter & Druid ([24301515](https://worldofwarcraft.blizzard.com/en-gb/news/24301515)); the Beta Development Notes on the forums ([US 2360696](https://us.forums.blizzard.com/en/wow/t/2360696), [EU 631316](https://eu.forums.blizzard.com/en/wow/t/631316/1)); Choose Your Ruleset ([EU 630507](https://eu.forums.blizzard.com/en/wow/t/630507/1)); and the official Forever forum category ([US forums c/347](https://us.forums.blizzard.com/en/wow/c/wow-forever/347)). Also mentioned but not fetched: the "What's Next" and "Found Photos" panel articles, the Hardcore panel, and "Evolving a Timeless World".
- **Datamining:** [wago.tools](https://wago.tools/api/builds) for build numbers, [ForeverChanges](https://foreverchanges.pro/) (build 1.60.1.70170 with racials, talents and a spellbook), and the Wowhead Forever hub ([wowhead.com/forever](https://www.wowhead.com/forever)), whose content is JS-rendered and could not be read.
- **Community guides:** [Zockify](https://www.zockify.com/forever/), [Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/), Icy Veins ([Shaman overview](https://www.icy-veins.com/wow-forever/shaman-class-overview), [talent calculator](https://www.icy-veins.com/wow-forever/shaman-talent-calculator); blocked for fetching), [Method.gg](https://www.method.gg/wow-forever/all-new-racial-abilities-in-world-of-warcraft-forever), [wow.gg](https://wow.gg/guides/shaman-restoration-forever-overview), Mobalytics (blocked), [Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-professions/), [wowforevertalent.com](https://wowforevertalent.com/) (talent calculator built on the "1 October Forever export"), [wowforevertalents.com](https://wowforevertalents.com/shaman/) (a different site), [warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Forever).
- **Reddit:** discussion happens on [r/classicwow](https://gummysearch.com/r/classicwow/). I found no dedicated Forever subreddit and no Discord links.

---

## 6. Conflicts / Open Questions

1. **Beta end date:** Oct 21 per Gfinity, the Warcraft Tavern editions article and Zockify. Oct 22 per warcraft.wiki.gg and the Gfinity roadmap article. This is probably the PDT vs. UTC/CEST difference. Name reservation starts Oct 27 either way.
2. **Shaman races on warcraft.wiki.gg:** a fetch of the wiki returned a table that listed *Undead* as Shaman-capable. It also returned a "six new combos" list (Dwarf Rogue, Gnome Paladin, Human Mage, Orc Hunter, Troll Shaman, Undead Mage) that contradicts the **official** Deep Dive list (Gnome Priest, Human Hunter, Dwarf Shaman, Orc Mage, Troll Warlock, Undead Paladin). I treat the official list and the ForeverChanges client matrix as authoritative. **Undead cannot be Shaman.** The wiki page was probably vandalized or misparsed and should be checked by hand.
3. **Weapon skill vs. Expertise:** Blizzard says weapon skill "still works as it always has" with smaller amounts per item, plus new parry/dodge-reduction stats. Method.gg says weapon skill is replaced by TBC-style Expertise. The two may be describing the same thing differently.
4. **Bonus healing → spell damage:** Blizzard says healing gives one-third as much bonus damage. Method.gg says healing gear "will now also have Spell Power on it". The second is likely a loose paraphrase of the first.
5. **Mana regen model:** it is confirmed that talents grant Spirit regen while casting. It is **not confirmed** that baseline out-of-casting Spirit regen was nerfed (only a Mobalytics snippet, 🔴). One unattributed snippet also claimed that Paladins and Shamans "now explicitly benefit from Spirit". That is misleading, since they already did in Classic, so I did not use it.
6. **Shaman 31/16-point talent names and numbers** are deferred to the class files. Mindfulness vs. Meditation naming for Resto Shaman differs between sources (wowforevertalents.com vs. wow.gg).
7. **Excavation Site: Wetlands level range:** 24–29 (wiki) vs. 26–31 (one AI summary of the dev notes, unconfirmed).
8. **Raid count at Dec 9:** Zockify lists two (Barrow Deeps, Hyjal Summit). The roadmap adds Onyxia's Lair as a third, existing raid. These are consistent because Blizzard counts "two new" raids.
9. **Hardcore timing:** "Winter 2026" on the roadmap vs. "sometime after launch" on the forum. These are consistent.
10. **Warcraft Tavern announcement summary** mentions a "Riverlands" zone and a "High Elf (Skyborne)" Alliance race. These are most likely summarizer paraphrases of Riverglades and of Skyborne being Highborne descendants.
11. **Not found anywhere:** dual-spec cost, riding level and cost, spell batching, GCD changes (including totem GCD), buff and debuff caps, faction balance, trainer or rank cost changes, whether every DoT/HoT including totem pulses (Healing Stream, Searing Totem) can crit, and haste on gear.
12. **No official Shaman class deep dive yet.** Shaman details come from the dev notes, the BlizzCon demo (level 38) and beta datamining, so they may change.
13. **Faction lock on the PvP ruleset** is a player concern on the forum, not confirmed.

---

## 7. Sources (with reliability assessment)

| # | URL | Site reliability |
|---|---|---|
| 1 | https://worldofwarcraft.blizzard.com/news/24302093/ | 🔵 Official announcement. Authoritative for dates and editions. |
| 2 | https://news.blizzard.com/en-us/article/24302093/ | 🔵 Official (mirror of #1). |
| 3 | https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne | 🔵 Official Skyborne post. Authoritative for classes and racials. |
| 4 | https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap | 🔵 Official Deep Dive recap. The best single source for systems. |
| 5 | https://news.blizzard.com/en-us/article/24307383/ | 🔵 Official Legacy System post. |
| 6 | https://worldofwarcraft.blizzard.com/en-gb/news/24301515 | 🔵 Official Class Deep Dive (Hunter & Druid, Sept 30). Covers talents, dual spec and trainer rules. |
| 7 | https://www.wowhead.com/forever/blue-tracker/news/eu/world-of-warcraft-forever-class-deep-dives-hunter-and-druid-world-of-warcraft-24301515 | 🔵 Wowhead blue-tracker mirror of #6. |
| 8 | https://us.forums.blizzard.com/en/wow/t/2360696 | 🔵 Official Beta Development Notes (Sept 24 and Oct 1). Highest value for current beta state. |
| 9 | https://eu.forums.blizzard.com/en/wow/t/631316/1 | 🔵 EU mirror of #8. |
| 10 | https://eu.forums.blizzard.com/en/wow/t/630507/1 | 🔵 Official ruleset post. The player replies in the thread are 🔴. |
| 11 | https://us.forums.blizzard.com/en/wow/t/2352785 | 🟡/🔴 Player discussion on downranking. No blue post. |
| 12 | https://us.forums.blizzard.com/en/wow/c/wow-forever/347 | Official forum category (index only). |
| 13 | https://wago.tools/api/builds | 🟢 Build monitor. Reliable for build numbers and timestamps. |
| 14 | https://foreverchanges.pro/ and https://foreverchanges.pro/racials | 🟢/🟡 Fan datamining site (build 1.60.1.70170). Good for numbers; not Blizzard-verified. |
| 15 | https://www.zockify.com/forever/ , /races/ , /shaman/ | 🟡 Large community hub, updated often (Sept 25). Generally accurate. Some items (world buffs) need confirmation. |
| 16 | https://www.warcrafttavern.com/forever/news/warcraft-forever-classic-announced-at-blizzcon-2026/ | 🟡 Reputable Classic site. The fetched summary had paraphrase errors (see Conflict 10). |
| 17 | https://www.warcrafttavern.com/forever/news/undead-paladins-other-race-class-combos-in-world-of-warcraft-forever/ | 🟡 Reputable. Had demo access. |
| 18 | https://www.warcrafttavern.com/news/world-of-warcraft-forever-editions-skyborne-race-unlock-beta-access/ | 🟡 Reputable. Quotes Blizzard's edition text and prices. |
| 19 | https://www.warcrafttavern.com/forever/guides/shaman/ | 🟡 Community class guide (Sept 2026). |
| 20 | https://www.warcrafttavern.com/forever/guides/stats/ | 🟡 Community stats guide. Openly says what is not yet known. |
| 21 | https://www.warcrafttavern.com/forever/news/priest-racials-in-world-of-warcraft-forever-fear-ward-is-baseline/ | 🟡 (title and snippet only) |
| 22 | https://www.warcrafttavern.com/forever/news/all-new-zones-areas-in-wow-forever-revealed-at-blizzcon/ | 🟡 (snippet) |
| 23 | https://www.method.gg/wow-forever/all-new-racial-abilities-in-world-of-warcraft-forever | 🟡 Reputable. Racials match the client data. |
| 24 | https://www.method.gg/wow-forever/itemization-updates-in-world-of-warcraft-forever-expertise-spell-damage-more | 🟡 Paraphrases the Deep Dive. Some wording differs from the official text. |
| 25 | https://www.method.gg/wow-forever/no-ptrs-and-new-datamining-restrictions-coming-to-world-of-warcraft-forever | 🟡 Reports a Blizzard interview (MMORPG.com). |
| 26 | https://www.gfinityesports.com/article/world-of-warcraft-forever-beta-dates-level-caps-how-to-access | 🟡 General gaming news. Fine for dates. |
| 27 | https://www.gfinityesports.com/article/world-of-warcraft-forever-roadmap-guide | 🟡 Restates the official roadmap. |
| 28 | https://warcraft.wiki.gg/wiki/Forever | 🟡/🔴 Wiki. Dungeon list looks plausible, but the race/class table as fetched is wrong (Conflict 2). Verify by hand. |
| 29 | https://powerupgaming.co.uk/2026/09/14/new-wow-forever-talents-changes-vs-classic-guide/ | 🟡 Smaller site. The talent counts are useful but secondary. |
| 30 | https://wow.gg/guides/shaman-restoration-forever-overview | 🟡 Community guide (Sept 19). |
| 31 | https://kami-labs.fr/en/wow-forever/build-druide-restauration-wow-forever/ | 🟡 Community talent guide. |
| 32 | https://wowguide.net/en/guides/wow-forever-beta-patch-notes | 🟡 Aggregator of patch notes. Check against #8. |
| 33 | https://players-realm.com/en/news/wow-forever-beta-class-changes-cooldown-manager/ | 🟡 (snippet) |
| 34 | https://conquestcapped.com/guides/wow-forever/wow-forever-professions/ | 🟡 Reputable community site (Sept 23). |
| 35 | https://wowforevertalent.com/ | 🟡 Fan talent calculator built on the Oct 1 export. Not Blizzard-verified. |
| 36 | https://wowforevertalents.com/shaman/ | 🟡 (snippet) A different fan calculator. |
| 37 | https://www.icy-veins.com/wow-forever/news/all-new-race-and-class-combos-and-racial-abilities-in-wow-forever-official/ | 🟡 Reputable, but returned 403. Used via snippet only. |
| 38 | https://www.icy-veins.com/wow/news/the-wow-forever-beta-starts-at-level-20-level-30-after-couple-of-weeks/ | 🟡 (snippet; based on a dev interview) |
| 39 | https://www.icy-veins.com/wow-forever/news/a-new-beta-client-build-arrives-for-wow-forever/ | 🟡 (snippet) |
| 40 | https://www.icy-veins.com/wow-forever/news/wow-forever-hid-over-12500-items-from-dataminers-heres-whats-still-secret/ | 🟡 (snippet) |
| 41 | https://www.icy-veins.com/wow-forever/news/players-found-a-hidden-pvp-rule-in-wow-forever-that-halves-crit-bonuses/ | 🟡 (snippet; player testing, not confirmed by Blizzard) |
| 42 | https://www.icy-veins.com/wow-forever/news/rulesets-replace-realms-in-wow-forever-heres-how-it-works/ | 🟡 (snippet) |
| 43 | https://www.icy-veins.com/wow-classic/news/new-warcraft-forever-race-requires-skyborne-heroic-pack/ | 🟡 (snippet) |
| 44 | https://www.icy-veins.com/wow-classic/news/meet-wow-forevers-new-race-everything-we-know-about-the-skyborne/ | 🟡 (snippet) |
| 45 | https://www.icy-veins.com/wow-classic/news/warcraft-forever-roadmap-unveils-raid-unlocks-and-major-updates/ | 🟡 (snippet) |
| 46 | https://icy-veins.com/wow-forever/news/priest-and-warrior-class-changes-deep-dive | 🔴 Title only (403). Could not confirm it is an official deep dive. |
| 47 | https://mobalytics.gg/wow-forever/guides/shaman-class-overview | 🔴 Returned 403. Its regen claim is a snippet only and unverified. |
| 48 | https://insider-gaming.com/when-does-wow-forever-come-out-release-date-times/ | 🟡 (snippet; name reservation dates) |
| 49 | https://gamewave.fr/world-of-warcraft-forever/wow-forever-plus-de-30-modeles-de-montures-datamines-sur-la-beta/ | 🟡 (snippet) |
| 50 | https://gummysearch.com/r/classicwow/ | Reddit stats index only. |
| 51 | https://www.wowhead.com/forever | Wowhead Forever hub. Content is JS-rendered and unreadable through fetch. |
