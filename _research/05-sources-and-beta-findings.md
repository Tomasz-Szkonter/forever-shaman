# WoW Forever Shaman: Source Map & Beta Testing Findings

> Research date: **2026-10-02**. Beta runs Sept 17 to Oct 21 2026 and launch is Nov 4 2026. The level cap went from 20 to **30 on Oct 1** ([Kaivax, Blizzard forums](https://us.forums.blizzard.com/en/wow/t/2367661); [Wowhead](https://www.wowhead.com/forever/news=383217/level-30-now-available-forever-beta-patch-notes)).
> Scope: (1) the reference project `classic-hunter/forever-hunter`, (2) sibling and class repos on GitHub, (3) Shaman community hubs, (4) concrete Shaman beta findings, (5) datamining endpoints for the beta client.
> Confidence tags: 🔵 official Blizzard · 🟢 datamined (client DB2, checked by me against wago.tools unless noted) · 🟡 community testing or report · 🔴 rumor, unverified or unreliable.
> Build notation: `wow_classic_beta 1.60.1.NNNNN`. Every finding states its build or date where one is known.

---

## TL;DR

1. **forever-hunter is two things.** The **main repo is almost empty**: one README, 7 commits, no license, no code. It is a fork of a 2019 combat-log repo. Its value is the **Issues tab, used as a "testing requests" queue**: each issue links back to a thread in the Classic Hunter Lodge Discord. The **wiki** holds the actual knowledge: 16 pages plus a sidebar, all written by `watchyoursixx`. Its key page, "Forever Beta Changes", marks Blizzard-confirmed items with 🔵 and stamps beta builds.
2. **No Shaman equivalent exists yet.** There is no `forever-shaman`-style testing or wiki repo on GitHub. The closest things are the cross-class tracker [ClassicWoWCommunity/forever-bugs](https://github.com/ClassicWoWCommunity/forever-bugs), which already holds about 8 Shaman issues, plus a handful of Shaman addons and sims.
3. **Hubs to watch:** the [Earthshrine Discord](https://discord.gg/earthshrine) (~126k members) and [Shaman Classic Discord](https://discord.com/invite/uwubagknvb) (~76k), the Enhancement-only [Chadhancement Discord](https://discord.com/invite/MS4zBMy) (~2.3k), Blizzard's **WoW: Forever Beta Discussion** forum (category 349), the dev-notes thread [2360696](https://us.forums.blizzard.com/en/wow/t/2360696), and Wowhead's [Forever news RSS](https://www.wowhead.com/forever/news/rss/all).
4. **Most useful tested findings:**
   - Totemic Recall gave **no mana back** until it was fixed on Oct 1.
   - Water Shield's 15 s cooldown was missing and its tooltip dropped to 1% at fewer charges.
   - Elemental Devastation does **not** proc from Flame Shock ticks, Searing Totem, Fire Nova or imbues.
   - Call of the Elements takes a **3.0 s cast** and only saves time when all 4 totems are needed.
   - Maelstrom Weapon is "chance on melee hit" and affects **Lightning Bolt only**; testers say it builds slowly on 2H weapons.
   - Riptide could not crit before Sept 24.
   - Caster staves had their weapon DPS cut in game.
5. **Datamining works.** `https://wago.tools/db2/<Table>/csv?build=1.60.1.70170` returns full DB2 tables (Spell, SpellName, SpellEffect, SpellMisc, TraitDefinition…). Wowhead uses the `/forever/` prefix, e.g. `https://www.wowhead.com/forever/spell=408521`. My diff from 69876 to 70170 reproduces the Sept 24 patch notes exactly.

---

## 1. Reference project: `classic-hunter/forever-hunter`

### 1.1 Organization `classic-hunter`

| Field | Value | Source |
|---|---|---|
| Display name | **Classic Hunter Lodge** | [API: orgs/classic-hunter](https://api.github.com/orgs/classic-hunter) |
| Description | "Resources for Classic Hunters" | same |
| Created | 2024-11-28 | same |
| Blog link | `https://discord.com/invite/classic-hunter-lodge-253213664708919296`. This invite currently returns "Unknown Invite", but guild ID **253213664708919296** is the one every forever-hunter issue links to | same; [issue #16](https://github.com/classic-hunter/forever-hunter/issues/16) |
| Public repos | 2: `classic-hunter.github.io` (created 2024-11-29, last push 2024-12-02, no description or language) and `forever-hunter` | [API: orgs/classic-hunter/repos](https://api.github.com/orgs/classic-hunter/repos) |

### 1.2 Main repo (code side): what is actually in it

| Field | Value | Source |
|---|---|---|
| Description | "Testing requests for WoW Forever Hunter" | [API repo](https://api.github.com/repos/classic-hunter/forever-hunter) |
| Fork? | **Yes.** It is a fork of `watchyoursixx/classic-hunter`, created 2019-06-16 to share Classic-beta combat logs. Commits from 2019 delete files such as `Watchyoursixx_troll_plus35skill_log.txt` and `Watchyoursixx_orc_plus3_log.txt` | [API repo (parent/source)](https://api.github.com/repos/classic-hunter/forever-hunter), [commits](https://github.com/classic-hunter/forever-hunter/commits/master) |
| Repo created | 2026-09-15. The only push is the 2026-09-15 README edit | [API repo](https://api.github.com/repos/classic-hunter/forever-hunter) |
| Tree | **`README.md` only** (288 bytes). No `.github/`, no issue templates, no code or data | [git tree API](https://api.github.com/repos/classic-hunter/forever-hunter/git/trees/master?recursive=1) |
| Commits | 7 in total: 6 from 2019 and 1 on 2026-09-15 | [commits](https://github.com/classic-hunter/forever-hunter/commits/master) |
| License | **None** | [API repo](https://api.github.com/repos/classic-hunter/forever-hunter) |
| Stars / forks / PRs | 3 / 0 / 0 | same |
| Wiki enabled | yes | same |

**README (full text):** "*This is a place for hunter-related WoW Forever beta things. Feel free to open issues for bug reports and for suggesting mechanics/behaviors to research. Be sure to specificy the beta build number or the date the test/video was taken because things can drastically change between builds.*" ([raw README](https://raw.githubusercontent.com/classic-hunter/forever-hunter/master/README.md))

**How the Issues tab is used:** this is the real "main repo" content.
- There are 51 issues. #1–#14 are template/tag tests that were later closed. #16 "READ ME FIRST BEFORE POSTING" is closed. #15 and #17–#51 are open testing requests, **36 open** at the time of checking ([issues API](https://api.github.com/repos/classic-hunter/forever-hunter/issues?state=all&per_page=100)).
- **Every issue is opened by `watchyoursixx`, and its body is just a Discord thread URL** in guild 253213664708919296. Examples: [#45 "Can Raptor Strike proc Deadly Aspects?"](https://github.com/classic-hunter/forever-hunter/issues/45) and [#16](https://github.com/classic-hunter/forever-hunter/issues/16). In other words, GitHub serves as a **public index of Discord forum-channel threads**, filed manually or by a bot.
- Labels: `General, Spell, Spells, Talent, Talents, Beastmaster, Marksmanship, Survival, Race, Movement, Professions, World Interaction, Unsure/Misc, Request, Tested, bug, duplicate` ([labels API](https://api.github.com/repos/classic-hunter/forever-hunter/labels)). A `Tested` label exists, but no open issue carries it yet.
- Example request topics: "Pet Ability Crit chance", "How (melee) attack power scale with agility?", "Does hit rating impact traps to hit?", "Sky Elf Air Walk w/Cheetah", "Troll bonus Dmg racial and skinning bonus", "are hunter aspects on the GCD or separate?".

### 1.3 Wiki side

- Source: [wiki](https://github.com/classic-hunter/forever-hunter/wiki). Clonable at `https://github.com/classic-hunter/forever-hunter.wiki.git`.
- **17 files: 16 pages plus `_Sidebar.md`.** **52 wiki commits, all by `watchyoursixx`**, between 2026-09-16 and 2026-09-30. The most recent was "Updated Forever Beta Changes" on Sept 30 (verified by cloning the wiki git repo).

| Section (sidebar) | Pages |
|---|---|
| Top | Home, **Forever Beta Changes** |
| Hunter Mechanics | Ranged Attack Table · Attack Formulas · Stat Mechanics · Shot Mechanics · Melee Weaving · Spell and Ability Mechanics |
| Pet Mechanics | Pet Fundamentals · Pet Families and Abilities · Pet Attack Formulas · Pet Stat Mechanics |
| Reference | Consumables · Ammo and Quivers · Hunter Macros |
| Orphan pages | `Pets` and `Forever Changes`. The latter is an older datamine page stamped `wow_classic_beta - 1.60.1.69876`. Both exist as files but are not in the sidebar |

**Conventions worth copying for a Shaman wiki:**
- Home presents a table of pages and what each covers.
- *Forever Beta Changes* (19 KB) opens with a "🔎 Verification Note": 🔵 = "explicitly confirmed by Blizzard"; unmarked = beta client data, tooltips or in-game testing.
- Changes use the ~~old~~ → **new** strike-through format, with Classic vs Forever rank-value strings (e.g. "Classic Bonus Damage: `70 / 125 / …`").
- The page ends with a "🐛 Known Beta Bugs" section.
- Mechanics pages are **Classic-era references** (formulas, attack tables) with Forever deltas kept separately.

**Cross-class items in the Hunter wiki that matter to Shamans:**
- "Damage-over-time effects can now **crit**" and DoTs "dynamically recalculate damage instead of snapshotting" 🟡 ([Forever Beta Changes](https://github.com/classic-hunter/forever-hunter/wiki/Forever-Beta-Changes)).
- Raptor Strike and Wing Clip can proc Windfury, and the extra attack lands "on the same server tick" (Classic reference) 🟡 ([Melee Weaving](https://github.com/classic-hunter/forever-hunter/wiki/Melee-Weaving)).
- Windfury formula `(mAP + WindfuryAP) / 14 × MHSwingSpeed + MHAverageDamage` ([Attack Formulas](https://github.com/classic-hunter/forever-hunter/wiki/Attack-Formulas)).

---

## 2. Similar or sibling projects on GitHub

Searched via the GitHub search API, repos created after 2026-08-01, on 2026-10-02.

### 2.1 Shaman-specific: no testing or wiki hub yet

| Repo | What it is | Created / last push | Note |
|---|---|---|---|
| [alexmetwork/forever-shaman-sim](https://github.com/alexmetwork/forever-shaman-sim) | "WoW Forever Enhancement Shaman DPS Simulator — talents, gear, rotations and stat weights" | 09-25 / 10-02 | 0★; values unverified 🔴 |
| [cassidymichael/ShamanForever](https://github.com/cassidymichael/ShamanForever) | Shaman addon for Forever | 09-21 / 10-02 | addon |
| [bverger/ForeverTotems](https://github.com/bverger/ForeverTotems) | totem management addon | 09-29 / 10-01 | addon |
| [Aratox/TotembarKeys](https://github.com/Aratox/TotembarKeys) | Totem Bar keybind addon (no description) | 09-30 / 10-01 | addon |
| [dreaves-paprika/forever-shaman-toolkit](https://github.com/dreaves-paprika/forever-shaman-toolkit) | "Level 20 checklist and BiS gear guide for Dwarf Shamans" | 09-26 / 10-01 | guide |
| [buildthehomelab/wow-mod-forever-shaman](https://github.com/buildthehomelab/wow-mod-forever-shaman) | AzerothCore 3.3.5 module that *emulates* Forever shaman changes | 09-30 / 10-02 | **not** a Forever source |

There is **no** `forever-shaman`, `classic-shaman` or Earthshrine GitHub org or repo comparable to forever-hunter.

### 2.2 Cross-class or other-class research repos

| Repo | Relevance |
|---|---|
| **[ClassicWoWCommunity/forever-bugs](https://github.com/ClassicWoWCommunity/forever-bugs)** | "A place for WoW Forever bug reports and research". About 200 issues (125 open), 16★. Uses an issue form with *Current Behavior / Expected Behavior / How to Reproduce / Source Material* and labels like `Fixed`, `Seen`, `NAB`, `Pending Approval`. The **sibling repos** (`classic-era-bugs`, `classic-hardcore-bugs`, `tbc-classic-bugs`, `mop-classic-bugs`) show a long-running maintainer track record ([org repos](https://api.github.com/orgs/ClassicWoWCommunity/repos)). This is the best place to mirror Shaman bugs |
| [tzcnt/forever-data](https://github.com/tzcnt/forever-data) and [tzcnt/WarriorSim](https://github.com/tzcnt/WarriorSim) | Warrior beta data collection plus a sim. Not checked in depth |
| [opitaru-sys/forever-warlock-lab](https://github.com/opitaru-sys/forever-warlock-lab) and [forever-mage-lab](https://github.com/opitaru-sys/forever-mage-lab) | "theorycraft lab … beta spell data". A possible template for a Shaman lab; there is no shaman lab from this author yet |
| [magey/forever-warrior](https://github.com/magey/forever-warrior) | Warrior (no description) |
| [coolbat-vibe/wowforevertalent](https://github.com/coolbat-vibe/wowforevertalent) and [DavidRabasco/wow-forever-tools](https://github.com/DavidRabasco/wow-forever-tools) | Talent calculators |
| [limbuilder/wow-forever-wiki](https://github.com/limbuilder/wow-forever-wiki) and [lrainys/wow-forever-wiki](https://github.com/lrainys/wow-forever-wiki) | General wikis. The first is pre-beta; both are low activity |
| [snibi/forever-meta](https://github.com/snibi/forever-meta) | "one build per spec, with cited sources" |

---

## 3. Community hubs for Forever Shamans

### 3.1 Discord

| Server | Members (approx., 2026-10-02) | Notes | Source |
|---|---|---|---|
| **Earthshrine** (`discord.gg/earthshrine`) | **125,908** (37.8k online) | Long-standing all-version Shaman class Discord; guild ID 91325323542552576 | [invite API](https://discord.com/api/v10/invites/earthshrine?with_counts=true) |
| **Shaman Classic** (`discord.gg/shaman-classic`, invite `uwubagknvb`) | **76,409** (20.9k online) | "all things Classic World of Warcraft Shaman"; guild ID 260297137554849794 | [invite API](https://discord.com/api/v10/invites/uwubagknvb?with_counts=true), [Discord listing](https://discord.com/servers/shaman-classic-260297137554849794) |
| **Chadhancement** (invite `MS4zBMy`) | **2,328** (548 online) | Describes itself as "WoW Forever Enhancement Shaman Official Discord". The invite was created by **Holderhek**, the YouTube creator. Despite the word "Official", it is a community server, not Blizzard's | [invite API](https://discord.com/api/v10/invites/MS4zBMy?with_counts=true) |
| "Shamancord" | ? | A forever-bugs issue cites a "Video from Shamancord" as evidence. This is probably one of the two big Shaman Discords, but which one is unconfirmed 🔴 | [forever-bugs #163](https://github.com/ClassicWoWCommunity/forever-bugs/issues/163) |

Note: the US forums have a thread disputing an "Official WoW Forever Discord" that is **not** Blizzard-run ([thread 2351698](https://us.forums.blizzard.com/en/wow/t/official-wow-forever-discord/2351698)).

### 3.2 Official Blizzard forums

These run on Discourse, and the JSON API works: `https://us.forums.blizzard.com/en/wow/t/<id>.json`, `…/search.json?q=…`, `…/c/349.json` (follow the redirect).

| Forum / thread | Use |
|---|---|
| **WoW: Forever Beta Discussion** (category 349): `https://us.forums.blizzard.com/en/wow/c/in-development/wow-forever-beta-discussion/349` | Main venue for beta feedback. About 60 Shaman threads between Sept 15 and Oct 2 |
| World of Warcraft: Forever General Discussion (category 347) | Some Shaman theorycraft threads |
| Bug Report (category 17) | **Shared with retail.** Filter carefully: the "Doom Winds" thread there is retail, not Forever |
| **Dev notes thread [2360696](https://us.forums.blizzard.com/en/wow/t/2360696)** "WoW Forever Beta Development Notes – Updated October 1" | 🔵 authoritative patch notes, updated in place. Mirror: [bluetracker](https://www.bluetracker.gg/wow/topic/us-en/2360696-wow-forever-beta-development-notes-updated-october-1/). EU copy: [631316](https://eu.forums.blizzard.com/en/wow/t/631316/1) |
| [Beta Update Maintenance – Oct 1 (2367661)](https://us.forums.blizzard.com/en/wow/t/2367661) | Level 30 announcement (Kaivax) |
| EU feedback: [Shaman totems/dual wield/EM (631193)](https://eu.forums.blizzard.com/en/wow/t/wow-forever-beta-feedback-%E2%80%93-shaman-totems-dual-wield-elemental-mastery-stronger-spec-identity/631193), [Warlock/Shaman UI (632437)](https://eu.forums.blizzard.com/en/wow/t/my-beta-feedback-%E2%80%93-warlock-shaman-ui-improvements/632437) | Design feedback, little test data |

### 3.3 Reddit

- Reddit's search and JSON returned **HTTP 403** to automated access, and web search surfaced **no** indexed r/classicwow or r/WowForever Shaman beta threads.
- **Status: not verified.** Check manually later at r/classicwow, r/wowforever (exact subreddit name unconfirmed 🔴) and r/shamanclassic.

### 3.4 YouTube / Twitch creators

| Creator | Video | Notes |
|---|---|---|
| **Holderhek** ([@Holderhek](https://www.youtube.com/@Holderhek)) | [WOW FOREVER BETA - ENHANCEMENT SHAMAN FIRST THOUGHTS + Q&A](https://www.youtube.com/watch?v=1-kp-SGG3lg) | Runs the Chadhancement Discord |
| **notweber** ([@notweber](https://www.youtube.com/@notweber)) | [WoW Forever - Ele Shaman Talents + The 2 Builds I'm Playing](https://www.youtube.com/watch?v=1UoWnjVbYxU) | Pre-beta/Sept 15 talent review |
| **Failz** ([@Failz](https://www.youtube.com/@Failz)) | [WoW Forever Beta \| Shaman World PvP](https://www.youtube.com/watch?v=2KDNs_nR4HI) | PvP footage |
| Guzu (streamer) | (not linked) | Cited on the forums as going "OOM every pull in the level 38 dungeon" on Enhancement in the BlizzCon demo, not the beta ([thread 2354160](https://us.forums.blizzard.com/en/wow/t/2354160)) 🟡 |
| Blizzard | Enhancement overview short / class highlights video | Covered by [Wowhead 383200](https://www.wowhead.com/forever/news=383200/enhancement-only-uses-2-handed-weapons-in-wow-forever-enhancement-shaman) and [Wowhead 383189](https://www.wowhead.com/forever/news=383189/class-highlights-for-warriors-rogues-and-shamans-in-wow-forever) |

### 3.5 Wowhead and news sites

- **Wowhead Forever news RSS:** `https://www.wowhead.com/forever/news/rss/all`. Items include build-datamine posts such as "[Datamined Class Changes for WoW: Forever Build on October 1st](https://www.wowhead.com/forever/news=383219/datamined-class-changes-for-wow-forever-build-on-october-1st)" and "[Skyborne Shaman Totem Models Revealed](https://www.wowhead.com/forever/news=382948)". The article bodies are blocked to scripts (403/CloudFront); open them in a browser.
- Secondary trackers, useful but unverified 🟡/🔴: [wowforeverbuilds.com beta tracker](https://wowforeverbuilds.com/wow-forever-beta), which cites wago.tools and build 69876; [classicwowforever.com Shaman changes](https://classicwowforever.com/class-changes/shaman/); [mobalytics Sept 24 notes](https://mobalytics.gg/wow-forever/guides/patch-notes-september-24); and the Icy Veins Forever Shaman guides (403 to scripts).

### 3.6 Bug trackers (Shaman issues found)

From [ClassicWoWCommunity/forever-bugs](https://github.com/ClassicWoWCommunity/forever-bugs/issues?q=shaman); details are in §4.

| # | Title | State |
|---|---|---|
| [186](https://github.com/ClassicWoWCommunity/forever-bugs/issues/186) | Totem Recall doesn't refund 25% mana | closed 09-30 |
| [175](https://github.com/ClassicWoWCommunity/forever-bugs/issues/175) | Disease Cleansing Totem not 5 min | Fixed |
| [163](https://github.com/ClassicWoWCommunity/forever-bugs/issues/163) | Revelation enchant buff not consumed by DoTs, totems or melee | closed |
| [160](https://github.com/ClassicWoWCommunity/forever-bugs/issues/160) | Ghost Wolf barely visible | Fixed |
| [134](https://github.com/ClassicWoWCommunity/forever-bugs/issues/134) | Water Shield claims a cooldown | Fixed |
| [80](https://github.com/ClassicWoWCommunity/forever-bugs/issues/80) | Flametongue tooltip not updating with spell power | Fixed |
| [79](https://github.com/ClassicWoWCommunity/forever-bugs/issues/79) | Fire Nova range indicator | open, Pending Approval |
| [71](https://github.com/ClassicWoWCommunity/forever-bugs/issues/71) | HoT crit consistency (Riptide) | closed |
| [40](https://github.com/ClassicWoWCommunity/forever-bugs/issues/40) | Ghost Wolf plus equipment manager visual | open |

---

## 4. Beta testing findings: Shaman

Ordered by system. "Build" is the build the tester was most likely on, inferred from the date and the wago build list in §5.1.

### 4.1 Totems and the Totem Bar

| Finding | Tag | Date / build | Source |
|---|---|---|---|
| **Call of the Elements / Ancestors / Spirits** each place up to 4 Totem Bar totems with a **3.0 s cast** (DB2: CastingTime 3000 ms, GCD 1.5 s, school mask 28) | 🟢 | 70170 | [wago SpellMisc](https://wago.tools/db2/SpellMisc/csv?build=1.60.1.70170) (spells 66842/66843/66844) |
| Tester's timing analysis: manual drops place totems at 0/1/2/3 s with the GCD ending at 4 s, while CotE lands all 4 at 3.0 s. **CotE only saves 1 s when all 4 totems are needed and there is no pushback**, and it is affected by haste or slows. Manual placement is "strictly better" for 3 or fewer totems | 🟡 | Oct 2 | [thread 2369645](https://us.forums.blizzard.com/en/wow/t/2369645) |
| **Totemic Projection**: 60 s cooldown, relocates active totems | 🟢 | 70170 | [wago SpellCooldowns](https://wago.tools/db2/SpellCooldowns/csv?build=1.60.1.70170) (437009) |
| **Totemic Recall gave 0 mana back.** Tooltip says 25%; "tested it multiple times and you gain 0 mana back", confirmed by a second player | 🟡 → 🔵 fixed | Sept 27–Oct 1 (≤70124) | [thread 2364054](https://us.forums.blizzard.com/en/wow/t/2364054), [forever-bugs #186](https://github.com/ClassicWoWCommunity/forever-bugs/issues/186); fix: "Fixed an issue where Totemic Recall was not restoring Mana" ([dev notes Oct 1](https://us.forums.blizzard.com/en/wow/t/2360696)) |
| Build 70170 adds a **new hidden spell 1323420 "Totemic Recall"** (effect 30 = energize mana, effect 3 = dummy, base 0, so the amount is presumably script-computed). It is absent in 70124. This is most likely the implementation of the Oct 1 fix. The trainer spell is still 36936 (25%) | 🟢 (interpretation 🔴) | 70124 → 70170 | [wago Spell](https://wago.tools/db2/Spell/csv?build=1.60.1.70170), [SpellEffect](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170) |
| **The `/click TotemFrameTotemN RightButton` dismiss macro does nothing** in Forever (it worked in TBC Anniversary). Below level 20 the only way to dismiss is right-clicking the totem frame. Recall costs a GCD, which a macro would not | 🟡 | Sept 28 | [thread 2364945](https://us.forums.blizzard.com/en/wow/t/2364945) |
| **Disease Cleansing Totem lasted 2 min**, while other buff totems and Poison Cleansing are 5 min. Fixed | 🟡 → 🔵 fixed | Sept 28 / Oct 1 | [forever-bugs #175](https://github.com/ClassicWoWCommunity/forever-bugs/issues/175), [dev notes Oct 1](https://us.forums.blizzard.com/en/wow/t/2360696) |
| **Fire Nova range indicator** does not turn red beyond 30 yd from the fire totem | 🟡 open | Sept 22 | [forever-bugs #79](https://github.com/ClassicWoWCommunity/forever-bugs/issues/79) |
| Air-totem non-stacking (Windfury / Grace of Air / Tranquil Air "no longer stack together even if used by different Shamans") | 🔵 | Sept 24 (70009) | [dev notes](https://us.forums.blizzard.com/en/wow/t/2360696) |
| Players **could not test air totems** at the 20/30 cap. One noted "Windfury totem is first obtainable at lvl 32". Another reported that Windfury and poisons stacked in the level-38 BlizzCon demo | 🟡 | Sept 18–25 | [2353663](https://us.forums.blizzard.com/en/wow/t/2353663), [2361624](https://us.forums.blizzard.com/en/wow/t/2361624) |
| The "Taunt" (Stoneclaw-style) totem "builds passive threat to the totem and only overtakes if it is out threating". It is not a true taunt | 🟡 | Sept 29 | [thread 2366147](https://us.forums.blizzard.com/en/wow/t/2366147) |
| Windfury Totem tooltips now reference the **second** rank-aura spell for radius (e.g. `$8514a1` → `$8515a1`). This suggests the totem buff spells were rewired, consistent with the "displays as Windfury Totem instead of Windfury Totem Passive" note | 🟢 | 69876 → 70170 | [wago Spell](https://wago.tools/db2/Spell/csv?build=1.60.1.70170) (8512, 10613, 10614); [dev notes](https://us.forums.blizzard.com/en/wow/t/2360696) |
| Stoneskin Totem is "30 physical damage reduction, ×1.2 with Guardian Totems = 36". Wowhead reportedly datamined a leftover SoD 4% damage-reduction effect on Stoneskin and Windwall | 🟡 / 🔴 | Sept 30 | [thread 2367626](https://us.forums.blizzard.com/en/wow/t/2367626) |

### 4.2 Weapon imbues and Windfury

| Finding | Tag | Date / build | Source |
|---|---|---|---|
| **The Flametongue Weapon tooltip did not update with spell power**, but damage *did* scale. Shown with a 2.8 speed weapon at 0 vs 26 SP. Fixed | 🟡 → fixed | Sept 22–23 | [forever-bugs #80](https://github.com/ClassicWoWCommunity/forever-bugs/issues/80) |
| In 70124 → 70170 the Flametongue Weapon tooltips gained a **flat additive term** `+($10444m1)` / `+($29469m1)`. The tooltip now includes a component from the Flametongue Attack spell | 🟢 | 70170 | [wago Spell](https://wago.tools/db2/Spell/csv?build=1.60.1.70170) (8024, 8027, 8030, 16339, 16341, 16342) |
| **Trading imbued weapons:** a player claims an imbue on a white, non-soulbound weapon *stays on the item* when traded, and proposes Windfury-imbued white weapons for a Fury Warrior. Others dispute this ("imbues are personal buffs"). **Unconfirmed; needs a test** | 🔴 | Oct 1 | [thread 2368409](https://us.forums.blizzard.com/en/wow/t/2368409) |
| **Revelation** (spell-crit weapon enchant, +100% crit on next non-crit) is only consumed by direct spells, *not* by periodic ticks, melee or **totem-cast spells**. That left a +100% crit window for totems and DoTs. Evidence video credited to "Shamancord" | 🟡 | Sept 27 | [forever-bugs #163](https://github.com/ClassicWoWCommunity/forever-bugs/issues/163) |
| The secondary claim that "early testers report that removing Windfury removes its benefit instead of the familiar twisting window" **could not be verified**: the page returns 403, and Windfury Totem (L32) is above the beta cap | 🔴 | n/a | [leprestore guide](https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-shaman-guide-overview/) (via search snippet) |

### 4.3 Enhancement: Maelstrom Weapon, Stormstrike, Mental Quickness

| Finding | Tag | Date / build | Source |
|---|---|---|---|
| The MW tooltip in game reads "When you deal damage with a melee attack, you have a **chance** to reduce the cast time and Mana cost of your next **Lightning Bolt** spell by X%. Stacks up to 5 times. Lasts 30 sec." In DB2, spell 408498 has 20% max per stack and 5 stacks | 🟢 / 🟡 | Sept 20 | [thread 2356116](https://us.forums.blizzard.com/en/wow/t/2356116); [wago Spell](https://wago.tools/db2/Spell/csv?build=1.60.1.70170) (408498/408505) |
| MW affects **Lightning Bolt only, not Chain Lightning**: "Maelstrom only affects Lightning Bolt, not Chain Lightning. So CL is going to be full cost always" / "You cant chain lightning with it" | 🟡 | Sept 18 | [thread 2354160](https://us.forums.blizzard.com/en/wow/t/2354160) |
| Per-rank value: **4% per stack at 1/5, 20% per stack at 5/5 (100% at 5 stacks)**. Pre-beta calculators showed different numbers, including "25 stacks", which was a leak artifact | 🟡 | Sept 23 | [thread 2356116](https://us.forums.blizzard.com/en/wow/t/2356116) |
| Proc rate on 2H weapons: "MW procs with a 2 hander are insanely slow". Players estimate 17–20 s for 5 stacks even at 100% per hit on a 3.5–3.8 speed weapon. **Whether MW is PPM-normalized is unknown**: SpellAuraOptions for 408498 shows ProcChance 100 with no PPM entry, so the real proc logic is likely elsewhere | 🟡 / 🟢 | Sept 20–29 | [2365290](https://us.forums.blizzard.com/en/wow/t/2365290), [2356116](https://us.forums.blizzard.com/en/wow/t/2356116); [wago SpellAuraOptions](https://wago.tools/db2/SpellAuraOptions/csv?build=1.60.1.70170) |
| **Mental Quickness** = 30% of Intellect as spell damage and healing (DB2 30812: both effects base 30). An earlier preview said 100% | 🟢 | 70170 | [wago SpellEffect](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170); [thread 2354160](https://us.forums.blizzard.com/en/wow/t/2354160) |
| **Rage of the Farseer** lost its spell-haste component: the tooltip changed from "melee attack speed and spell casting speed" to "attack speed", and effect #2 was removed | 🔵 / 🟢 | Sept 24 (70009) | [dev notes](https://us.forums.blizzard.com/en/wow/t/2360696); diff in §5.4 |
| The Stormstrike dodge/parry-reset talent "will not trigger on bosses", because bosses cannot be parried or dodged by players in a useful way. Design concern | 🟡 | Oct 1 | [thread 2365734](https://us.forums.blizzard.com/en/wow/t/2365734) |
| A Spirit Weapons-related talent gives "-30% threat reduction … when not using Rockbiter" | 🟡 | Sept 29 | [thread 2365734](https://us.forums.blizzard.com/en/wow/t/2365734) |
| **Earth Shield is not trackable in the in-game Cooldown Manager** (Enhancement) | 🟡 | Sept 28 | [thread 2365038](https://us.forums.blizzard.com/en/wow/t/2365038) |

### 4.4 Elemental: Lightning Bolt, Chain Lightning, Lava Burst, crit talents

| Finding | Tag | Date / build | Source |
|---|---|---|---|
| **Lightning Bolt R10**: 2.5 s cast, **coefficient 71.4%**, base 196 with variance ≈0.108 and +1.2 per level (spell level 56). That gives about **189–211** at 60, which matches the tooltip numbers players quote. Classic R10 was 428–477 with an 85.71% coefficient | 🟢 / 🟡 | 70170 | [wago SpellEffect](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170) (15208); [thread 2353745](https://us.forums.blizzard.com/en/wow/t/2353745) |
| **Chain Lightning R4**: 2.0 s cast, 6 s category cooldown, coefficient 57.1%, base 123 | 🟢 | 70170 | same (10605) |
| Community estimate: about **700 SP** needed for Forever LB to match a Classic LB at 300 SP. Separate claims: about 350 SP to reach a vanilla *baseline* LB, and "700+ SP for Chain Lightning base value, 500+ for LB/ES/FrS". These are arithmetic from tooltips, not measured in game | 🟡 | Sept 21–28 | [2353745](https://us.forums.blizzard.com/en/wow/t/2353745), [2360727](https://us.forums.blizzard.com/en/wow/t/2360727), [2365290](https://us.forums.blizzard.com/en/wow/t/2365290) |
| **Lava Burst**: "+20% damage if Flame Shock is on the target" (DB2 effect 2 base 20). There is **no guaranteed crit**. Coefficient 71.4%, 2.5 s cast, 10 s cooldown. Ranks unlock at 40, 50 and 60 (spell levels from SpellLevels) | 🟢 | 70170 | [wago Spell](https://wago.tools/db2/Spell/csv?build=1.60.1.70170) (408490, 1238299, 1238300); [wago SpellLevels](https://wago.tools/db2/SpellLevels/csv?build=1.60.1.70170) |
| Lava Burst R1 base **113 → 164** and R2 **179 → 196** between 69876 and 70170. This matches 🔵 "Lava Burst damage on ranks 1 and 2 increased to be about 10% more base damage" | 🟢 / 🔵 | 70009 | diff §5.4; [dev notes](https://us.forums.blizzard.com/en/wow/t/2360696) |
| Testers report that Lava Burst does **not** benefit from Call of Thunder (LB/CL crit), Concussion or Lightning Overload, but **does** get +15% from Call of Flame. One tester counts 35% total with Flame Shock | 🟡 | Sept 18–21 | [thread 2353745](https://us.forums.blizzard.com/en/wow/t/2353745) |
| Lightning Overload is described as a "9% proc on 2 second casts, doesnt work on lavaburst, half the dmg" | 🟡 | Sept 21 | [thread 2356600](https://us.forums.blizzard.com/en/wow/t/2356600) |
| Tree math: Call of Thunder is now 1/1 for 3% (LB/CL only). Lightning Mastery is now 3/3 at 0.167 s each, with 0.5 s baked into the spell. Elemental talents give 3% crit plus 5% from the Enhancement tree, versus 11% in Classic | 🟡 | Sept 22–25 | [2362045](https://us.forums.blizzard.com/en/wow/t/2362045), [2358173](https://us.forums.blizzard.com/en/wow/t/2358173) |
| **Elemental Devastation proc test.** It triggers from LB, Earth Shock, Frost Shock and the Flame Shock *initial* hit. It does **not** trigger from Flame Shock *periodic* crits, Searing Totem, Fire Nova, Flametongue Weapon or Frostbrand Weapon. Lightning Shield could not be made to crit. Method: 3/3 talent, cast on a dummy until a crit, then check the buff | 🟡 | Sept 30 | [thread 2366738](https://us.forums.blizzard.com/en/wow/t/2366738) |
| The same tester states that **Flame Shock periodic ticks can crit** in Forever. This is consistent with the Hunter wiki's "DoTs can now crit" | 🟡 | Sept 30 | [2366738](https://us.forums.blizzard.com/en/wow/t/2366738); [Hunter wiki](https://github.com/classic-hunter/forever-hunter/wiki/Forever-Beta-Changes) |
| **Flame Shock R1**: direct 20 at a 21.4% coefficient, plus DoT 7 per 3 s tick at **10% coefficient per tick** over 12 s. The shock category cooldown is 6 s | 🟢 | 70170 | [wago SpellEffect](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170) (8050) |
| Elemental Reach also gives Flame Shock +15 yd range. Water Shield does nothing for Elemental's damage crits | 🟡 | Oct 1 | [thread 2364061](https://us.forums.blizzard.com/en/wow/t/2364061) |
| Lightning Bolt ranks 3 and 4 buffed (548: 35 → 45; 915: 50 → 56), plus SoD-ID LB variants changed | 🟢 / 🔵 | 70009 | diff §5.4; [dev notes](https://us.forums.blizzard.com/en/wow/t/2360696) |

### 4.5 Restoration: Water Shield, Riptide, HoT crits

| Finding | Tag | Date / build | Source |
|---|---|---|---|
| **Water Shield bugs (Skyborne, confirmed on Tauren):** (a) at 2 or 1 charges the buff tooltip reads "**1%** of maximum mana" instead of 2%; (b) the listed **15 s cooldown did not exist**, so it was GCD-only; (c) the buff always says "3 charges" | 🟡 | Sept 25 | [thread 2361063](https://us.forums.blizzard.com/en/wow/t/2361063) |
| The cooldown issue was filed separately and marked **Fixed** on Oct 1 | 🟡 → fixed | Sept 25–Oct 1 | [forever-bugs #134](https://github.com/ClassicWoWCommunity/forever-bugs/issues/134) |
| DB2 Water Shield (408510): 3 charges, 10 min duration, **15 s category cooldown**, **3.5 s internal proc cooldown** ("one globe every few seconds"). It restores 2% max mana (408511). It procs on **being hit** or on **critical heals**, with no flat MP5 | 🟢 | 70170 | [wago SpellAuraOptions / SpellCooldowns](https://wago.tools/db2/SpellAuraOptions/csv?build=1.60.1.70170); [thread 2364061](https://us.forums.blizzard.com/en/wow/t/2364061) |
| **Riptide could not crit** before Sept 24, and **HoT ticks in general** (Renew, Rejuvenation, Wild Growth, Riptide) could not crit while Regrowth's HoT could | 🟡 → 🔵 fixed | Sept 22–24 | [forever-bugs #71](https://github.com/ClassicWoWCommunity/forever-bugs/issues/71); "Corrected an issue and now Riptide can land critical hits" ([dev notes Sept 24](https://us.forums.blizzard.com/en/wow/t/2360696)) |
| **Riptide R1** (408521): direct 480 at 21.4% coefficient, plus HoT 89 per 3 s at 10% coefficient over 15 s, and +25% to Chain Heal on that target. Wowhead shows "481 … 90 every 3 sec", the usual +1 display offset. R2/R3 (1239242/3) are 612/115 and 841/161. Ranks unlock at 40, 50 and 60 | 🟢 | 70170 | [wago SpellEffect](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170); [Wowhead spell=408521](https://www.wowhead.com/forever/spell=408521) |

### 4.6 Threat, tanking, items, visuals, misc

| Finding | Tag | Date / build | Source |
|---|---|---|---|
| Rockbiter and Earth Shock have **high threat modifiers**, so Shamans rip threat in low-level dungeons. Fire Nova is "a massive threat generator even against single target". There is no single-target taunt | 🟡 | Sept 28–29 | [2365062](https://us.forums.blizzard.com/en/wow/t/2365062), [2366147](https://us.forums.blizzard.com/en/wow/t/2366147) |
| **Caster staves have reduced weapon DPS**: e.g. Staff of Westfall shows 20.50 DPS on Wowhead but **15.2 DPS in game**. Crescent Staff is no longer better than a 1H for Shaman leveling | 🟡 | Sept 23–29 | [2359184](https://us.forums.blizzard.com/en/wow/t/2359184), [2365746](https://us.forums.blizzard.com/en/wow/t/2365746) |
| Enhancement mana: going OOM was observed in the **BlizzCon L38 demo** (Guzu), not in the beta | 🟡 | Sept 18 | [2354160](https://us.forums.blizzard.com/en/wow/t/2354160) |
| Ghost Wolf was barely visible in certain lighting. It was fixed on Oct 1, and players now say it is **too bright** ("bloom is entirely excessive") | 🟡 → 🔵 fixed → 🟡 regression | Sept 26–Oct 2 | [forever-bugs #160](https://github.com/ClassicWoWCommunity/forever-bugs/issues/160), [dev notes Oct 1](https://us.forums.blizzard.com/en/wow/t/2360696), [2369180](https://us.forums.blizzard.com/en/wow/t/2369180) |
| Opening the Equipment Manager in Ghost Wolf shows both the wolf and the character model | 🟡 open | Sept 19 | [forever-bugs #40](https://github.com/ClassicWoWCommunity/forever-bugs/issues/40) |
| A Draenei Shaman (retail, category 15) could take the Orgrimmar portal from Shattrath. **Retail, ignore** | n/a | Oct 1 | [2367850](https://us.forums.blizzard.com/en/wow/t/2367850) |

---

## 5. Datamining resources for the Forever beta client

### 5.1 Builds (wago.tools)

Builds list API: `https://wago.tools/api/builds` (JSON, keyed by product). UI: `https://wago.tools/builds`.

| Product | Version | Created (UTC) | Matches |
|---|---|---|---|
| wow_classic_beta | 1.60.1.**69876** | 2026-09-16 18:23 | Beta launch build; cited by the Hunter wiki and wowforeverbuilds |
| wow_classic_beta | 1.60.1.69893 | 2026-09-16 23:14 | |
| wow_classic_beta | 1.60.1.69913 | 2026-09-18 03:02 | |
| wow_classic_beta | 1.60.1.69977 | 2026-09-23 00:35 | Sept 22 "class tuning" build |
| wow_classic_beta | 1.60.1.**70009** | 2026-09-24 22:02 | Sept 24 dev notes |
| wow_classic_beta | 1.60.1.70058 | 2026-09-29 16:41 | |
| wow_classic_beta | 1.60.1.70124 | 2026-09-30 01:57 | |
| wow_classic_beta | 1.60.1.**70170** | 2026-10-01 22:54 | **Current**; Oct 1 level-30 patch |
| wow_cn_beta | 1.60.1.70094 / 70178 | 09-29 / 10-02 | China beta of the same branch (70178 is newer) |

Wowhead's Legacy calculator reportedly used `1.60.1.69800` data ([wowforeverbuilds](https://wowforeverbuilds.com/wow-forever-beta)). That build is not in wago's list, probably because it was a pre-release or internal build 🔴.

### 5.2 Spell data endpoints (all verified HTTP 200 on 2026-10-02)

- **CSV export (best for scripts):** `https://wago.tools/db2/<Table>/csv?build=1.60.1.70170`
  - Verified tables: `SpellName` (833 KB), `Spell` (Description_lang / AuraDescription_lang tooltips with `$s1`-style tokens), `SpellEffect` (base points, `EffectBonusCoefficient` = SP coefficient, `BonusCoefficientFromAP`, period, trigger spell, `Variance`, `EffectRealPointsPerLevel`), `SpellMisc` (CastingTimeIndex, DurationIndex, RangeIndex, SchoolMask), `SpellCastTimes`, `SpellDuration`, `SpellCooldowns`, `SpellAuraOptions` (charges, proc chance, internal cooldown, PPM id), `SpellProcsPerMinute`, `SpellLevels`, `SkillLineAbility` (Shaman skill lines **373 Enhancement, 374 Restoration, 375 Elemental**), `Talent`, `TraitTree`, `TraitNode`, `TraitDefinition`.
- **Browser UI:** `https://wago.tools/db2/SpellEffect?build=1.60.1.70170`. Use the table's filter box for SpellID; the exact query-string syntax was not tested.
- **Diffing builds:** download the same table for two builds and compare. A sample result is in §5.4.
- **Wowhead Forever DB:** prefix `/forever/`. Examples: `https://www.wowhead.com/forever/spell=408521` (Riptide; the page renders with base and coefficients), `https://www.wowhead.com/forever/spells`, `https://www.wowhead.com/forever/news`. Script fetches of Wowhead *news* bodies were blocked (403), while spell pages worked through WebFetch.

### 5.3 Spell IDs confirmed in 70170 (handy lookup list)

| Spell | IDs | Notes |
|---|---|---|
| Lava Burst | 408490 (R1, from SoD), **1238299 (R2), 1238300 (R3)**; 1238373 / 1238376 hidden variants | |
| Riptide | 408521 (R1), **1239242 (R2), 1239243 (R3)** | |
| Water Shield | 408510; proc 408511 | |
| Maelstrom Weapon | 408498 (talent); buff 408505 | |
| Lightning Overload | 408438 | |
| Rage of the Farseer | 425336 | |
| Shamanistic Focus | 1223030 | |
| Improved Stormstrike | 1223031 | |
| Earthbound | 1222988 | |
| Call of the Elements / Ancestors / Spirits | 66842 / 66843 / 66844 | |
| Totemic Recall | 36936 (trainer); 1323420 (new helper in 70170) | |
| Totemic Projection | 437009 | |
| Talent-flavour spells | 1214302 "Improved Lightning Bolt/Lava Burst" (+X% LB/CL/LvB); 1220642 "Improved Riptide/Chain Heal/Earth Shield"; 1309442 "Storm's Grasp" (+LB crit) | |
| Set bonuses | 1301711 "Tier 1 Shaman Elemental 5P – Lava Burst"; 1301713 "Tier 1 Restoration 5P – Riptide" | |
| Weapon | 1309539 "Tidebringer's Claw" | |

**Caveats:**
- **`Talent.db2` still contains the legacy TBC-style 3×7 tree** and does *not* reflect Forever. The Forever tree lives in the **Trait\*** tables: `TraitDefinition` lists Lava Burst, Lightning Overload, Earthbound, Riptide, Water Shield, Rage of the Farseer, Maelstrom Weapon, Improved Stormstrike, Mental Quickness, Shamanistic Focus and others. Use `TraitTree` → `TraitNode` → `TraitNodeEntry` → `TraitDefinition` for tree layout.
- Many Forever spells **reuse Season of Discovery IDs (40xxxx–46xxxx)**. Several SoD-only duplicates exist (dozens of "Lightning Bolt" and "Chain Lightning" IDs), so always filter through `SkillLineAbility` or `TraitDefinition`.
- Displayed tooltip values equal `EffectBasePointsF` adjusted by `Variance` and `EffectRealPointsPerLevel`, with an off-by-one in some displays (480 → 481).

### 5.4 Sample diff of Shaman skill-line spells: 69876 (launch) → 70170 (current) 🟢

This was produced from `SpellEffect` and `Spell` CSVs, filtering to `SkillLineAbility` lines 373/374/375.

```
Lava Burst (408490) eff0 base: 113 -> 164          # R1 buff (Sept 24 note)
Lava Burst (1238299) eff0 base: 179 -> 196         # R2 buff (Sept 24 note)
Lightning Bolt (548) eff0 base: 35 -> 45           # R3 buff (Sept 24 note)
Lightning Bolt (915) eff0 base: 50 -> 56           # R4 buff (Sept 24 note)
Lightning Bolt (408440/408441/408442) base: 15->14.5 / 18->22.5 / 25->28
Rage of the Farseer (425336) eff2: REMOVED; tooltip "melee attack speed and spell casting speed" -> "attack speed"
Windfury Totem (8512/10613/10614) tooltip radius token re-pointed to the next aura spell
Flametongue Weapon (6 ranks) tooltip gains +($10444m1)/+($29469m1)/+($29470m1) flat term   # first appears in 70170
```

The 70124 → 70170 step changed **only** the Flametongue Weapon tooltips among skill-line spells. It also added spell 1323420 (Totemic Recall helper), which is not on a skill line. Riptide's crit fix (Sept 24) is not visible in SpellEffect; it is probably a SpellMisc attribute flag or a server-side change.

---

## 6. Conflicts / Open Questions

1. **Can Windfury Totem be tested at all?** It reportedly unlocks at L32 ([2353663](https://us.forums.blizzard.com/en/wow/t/2353663)), and the beta cap is 30. So any "early testers report" claims about WF and Grace of Air twisting ([leprestore](https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-shaman-guide-overview/)) must come from the BlizzCon L38 demo or from datamining. Treat them as 🔴 until a later cap raise.
2. **Totemic Recall fix.** The dev notes say it was fixed Oct 1. In 70170, new spell 1323420 has energize base 0 (script-driven?). This needs an in-game check on 70170 that 25% is actually refunded.
3. **Water Shield.** forever-bugs #134 is marked Fixed, but which way? Did the tooltip lose its 15 s cooldown, or was a real 15 s cooldown added? DB2 70170 still has a 15 s category cooldown. Also unverified: does the 1%-at-low-charges tooltip reflect *actual* reduced mana, or only a display bug?
4. **Maelstrom Weapon proc model.** Is it PPM (weapon-speed normalized) or a flat chance? DB2 shows ProcChance 100 with no PPM on 408498, yet players report it is a "chance". The proc logic may sit on a different spell or server script. A measured proc count per swing on a 2H vs a 1H is needed.
5. **Flame Shock tick crits vs Elemental Devastation.** Ticks crit (🟡) but do not trigger ED. Is that intended? It could become an official "talent text clarification".
6. **Weapon imbues on traded weapons** ([2368409](https://us.forums.blizzard.com/en/wow/t/2368409)): no test yet. If true, it would likely be hotfixed.
7. **Mental Quickness 30% vs 100% Int.** Previews said 100%; DB2 70170 says 30. Did the change happen before beta, or are the previews wrong?
8. **Maelstrom Weapon numbers.** Pre-beta calculators showed different per-stack values, and "25 stacks". Current consensus is 4%/rank per stack, 5 stacks.
9. **Staff DPS.** Wowhead shows Classic DPS (20.5) and the game shows 15.2. Wowhead's Forever item DB may lag behind the client, so **do not trust Wowhead weapon DPS** for Forever until it updates.
10. **The Bug Report forum (category 17) is shared with retail.** The "Doom Winds double procs" thread ([2363015](https://us.forums.blizzard.com/en/wow/t/2363015)) mentions 600 Maelstrom, which is **retail Midnight, not Forever**. Always check the category ID (349 or 347 = Forever).
11. **"Shamancord" identity.** Is it Earthshrine or Shaman Classic? Unknown.
12. **Wowhead's Oct 1 datamine article** ([383219](https://www.wowhead.com/forever/news=383219/datamined-class-changes-for-wow-forever-build-on-october-1st)): the body was not retrieved (403). Read it manually and reconcile it with §5.4.
13. **Reddit coverage** was not retrievable. A manual pass is needed.

---

## 7. Sources & Hubs: curated, rated for an ongoing wiki

Reliability: ★★★ high · ★★ medium · ★ low. Usefulness = value for keeping a Shaman wiki current.

| # | Source | Type | Reliability | Usefulness | Why / how to use |
|---|---|---|---|---|---|
| 1 | [Dev notes thread 2360696](https://us.forums.blizzard.com/en/wow/t/2360696) (+ [bluetracker mirror](https://www.bluetracker.gg/wow/topic/us-en/2360696-wow-forever-beta-development-notes-updated-october-1/)) | 🔵 official | ★★★ | ★★★ | Updated in place each patch. Diff it weekly |
| 2 | [wago.tools builds API](https://wago.tools/api/builds) plus `db2/<Table>/csv?build=` | 🟢 client data | ★★★ | ★★★ | Ground truth for tooltips, coefficients, cast times, cooldowns. Script build-to-build diffs (§5.4) |
| 3 | [Wowhead Forever DB](https://www.wowhead.com/forever/spells) and [news RSS](https://www.wowhead.com/forever/news/rss/all) | 🟢 / news | ★★★ (spells) / ★★ (items lag) | ★★★ | Linkable spell pages for the wiki. RSS for datamine posts |
| 4 | [ClassicWoWCommunity/forever-bugs](https://github.com/ClassicWoWCommunity/forever-bugs) | 🟡 structured bug reports | ★★★ (repro steps, Fixed/Seen labels) | ★★★ | Mirror Shaman issues. Labels show Blizzard acknowledgement ("Seen") |
| 5 | [WoW: Forever Beta Discussion (cat 349)](https://us.forums.blizzard.com/en/wow/c/in-development/wow-forever-beta-discussion/349) + [search API](https://us.forums.blizzard.com/en/wow/search.json?q=shaman%20category%3A349) | 🟡 player tests and opinion | ★★ (mixed signal) | ★★★ | Highest volume of Shaman test reports. Filter for posts with method and numbers |
| 6 | [Earthshrine Discord](https://discord.gg/earthshrine) | 🟡 community | ★★ | ★★★ | Largest Shaman community. Likely theorycraft and testing channels (not inspected; needs login) |
| 7 | [Shaman Classic Discord](https://discord.com/invite/uwubagknvb) | 🟡 community | ★★ | ★★★ | Classic-focused, which suits Forever. Possibly the source of the "Shamancord" videos |
| 8 | [classic-hunter/forever-hunter](https://github.com/classic-hunter/forever-hunter) + [wiki](https://github.com/classic-hunter/forever-hunter/wiki) | 🟡 / 🔵-marked | ★★★ (careful, build-stamped) | ★★ | Format template, plus cross-class mechanics (DoT crits, Windfury on hunters) |
| 9 | [Chadhancement Discord](https://discord.com/invite/MS4zBMy) / [Holderhek YouTube](https://www.youtube.com/@Holderhek) | 🟡 creator | ★★ | ★★ | Enhancement-specific impressions and Q&A |
| 10 | [notweber](https://www.youtube.com/@notweber), [Failz](https://www.youtube.com/@Failz) | 🟡 creator | ★★ | ★ | Talent and PvP footage. Use for visuals, not numbers |
| 11 | [wowforeverbuilds beta tracker](https://wowforeverbuilds.com/wow-forever-beta), [classicwowforever.com](https://classicwowforever.com/class-changes/shaman/), [mobalytics](https://mobalytics.gg/wow-forever/guides/patch-notes-september-24) | 🟡 aggregators | ★★ | ★★ | Quick summaries. Verify against #1 and #2 |
| 12 | Icy Veins / Warcraft Tavern Forever Shaman guides | 🟡 guides | ★★ | ★ | Scripts get 403. Useful for spotting claims, not as primary evidence |
| 13 | SEO guide sites (leprestore, expcarry, playhub, wowforeverguides…) | 🔴 | ★ | ★ | Often unsourced or AI-written. Quote only after independent verification |
| 14 | GitHub Shaman tools ([forever-shaman-sim](https://github.com/alexmetwork/forever-shaman-sim), [ForeverTotems](https://github.com/bverger/ForeverTotems), [ShamanForever](https://github.com/cassidymichael/ShamanForever)) | code | ★ (unreviewed) | ★ | Watch for spell-ID tables or proc-rate measurements in source |

**Suggested monitoring loop:**
- **Daily:** wago builds API and the Wowhead RSS.
- **On each new build:** run the DB2 diff for skill lines 373/374/375 plus Shaman TraitDefinitions.
- **Twice a week:** forum search `shaman category:349`, and forever-bugs issues filtered by Shaman keywords.
- **Each patch day:** re-read the dev notes thread.
