---
title: Sources and Hubs
description: Rated list of sources for WoW Forever Shaman information, including official posts, datamining sites, bug trackers, forums, Discords, creators, guide sites and related GitHub projects.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🧭 Sources and Hubs

This page rates the places where WoW Forever Shaman information comes from, and says how much to trust each one. It covers official Blizzard posts, datamining sites, bug trackers, forums, Discords, creators, guide sites, and related GitHub projects. Use it to decide which source wins when two disagree.

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified — see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

**Ratings:** ★★★ high · ★★ medium · ★ low. **Reliability** is how often the source is right. **Usefulness** is how much it helps keep this wiki current. Ratings are our own judgement as of 2026-10-02.

## 📑 Contents
- [Official Blizzard](#-official-blizzard)
- [Datamining and Client Data](#-datamining-and-client-data)
- [Bug Trackers](#-bug-trackers)
- [Forums and Reddit](#-forums-and-reddit)
- [Discord Servers](#-discord-servers)
- [Creators](#-creators)
- [Guide Sites](#-guide-sites)
- [GitHub Projects](#-github-projects)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

## 🔵 Official Blizzard

### Blizzard Posts

| Source | Reliability | Usefulness | Notes |
|---|---|---|---|
| [Beta Development Notes, thread 2360696][blz-notes] (mirror: [bluetracker][bluetracker]; EU copy: [631316][blz-notes-eu]) | ★★★ | ★★★ | The patch notes. **Updated in place** each patch (Sept 24, Oct 1), with no build numbers in the text. Diff it every patch day |
| [Beta Update Maintenance – Oct 1 (2367661)][blz-2367661] | ★★★ | ★★ | Level-30 announcement (Kaivax) |
| [Announcement: Carve a New Path][blz-announce] | ★★★ | ★ | Dates, editions |
| [Meet the Skyborne][blz-skyborne] | ★★★ | ★★ | Skyborne classes and racials |
| [Deep Dive panel recap][blz-dd] | ★★★ | ★★★ | Best single source for game-wide systems (unified hit/crit, healing → spell damage, talents) |
| [Legacy System][blz-legacy] | ★★★ | ★ | Account-wide progression |
| [Class Deep Dives: Hunter & Druid][blz-classdd] | ★★★ | ★★ | Talent rules, dual spec at 40. **No Shaman deep dive had been published as of Oct 2** |
| [Choose Your Ruleset (EU 630507)][blz-ruleset] | ★★★ (post) / ★ (replies) | ★ | Rulesets replace realms |

- Relays of official text 🔵: [mobalytics Sept 24 notes][moba] (verbatim totem text), [guided.news][guided] (Blizzard's class overview video on totems, no direct video URL), [Wowhead blue tracker][wh-blue].

## 🟢 Datamining and Client Data

How to use these yourself is on [Datamining](Datamining.md).

| Source | Reliability | Usefulness | Notes |
|---|---|---|---|
| [wago.tools][wago-builds] builds API and `db2/<Table>/csv?build=` | ★★★ | ★★★ | Ground truth for tooltips, coefficients, cast times, cooldowns |
| [Wowhead Forever DB][wh-spells] and [news RSS][wh-rss] | ★★★ spells / ★★ items | ★★★ | Linkable spell pages. Item data lags (staff DPS). News bodies return 403 to scripts |
| [wowforevertalents.com][wfts] | ★★★ | ★★★ | Best talent source: reads trait tables plus hotfixes, diffs rank by rank vs Classic Era 1.15.9.69722, checks Blizzard's notes claim by claim. Build 70170 |
| [wowforevertalent.com][wft] | ★★★ | ★★ | Talent calculator ("1 October Forever export"); popular-build stats are 🟡 |
| [WCLBox][wcl] | ★★★ | ★★★ | Full spell rank tables vs Classic. Build 70009. Agrees with Wowhead on every spot check |
| [ForeverChanges][fc] | ★★★ | ★★★ | Spellbook, talents, racials diff. Build 70170 vs Classic Era 1.15.9.69722 |
| [wow.gg datamined set bonuses][wowgg-sets] | ★★ | ★★ | Sept 17 datamine; terse ("Electrocute") |

## 🐛 Bug Trackers

### forever-bugs

[ClassicWoWCommunity/forever-bugs][fb] — ★★★ reliability, ★★★ usefulness. "A place for WoW Forever bug reports and research": about 200 issues (125 open) and 16 stars as of Oct 2. It uses an issue form (*Current Behavior / Expected Behavior / How to Reproduce / Source Material*) and labels such as `Fixed`, `Seen` (Blizzard acknowledged), `NAB` and `Pending Approval`. Its sibling repos (`classic-era-bugs`, `classic-hardcore-bugs`, `tbc-classic-bugs`, `mop-classic-bugs`) show a long track record. **The best place to mirror Shaman bugs.**

Shaman issues found on 2026-10-02:

| # | Title | State |
|---|---|---|
| [186][fb-186] | Totem Recall doesn't refund 25% mana | closed 09-30 |
| [175][fb-175] | Disease Cleansing Totem not 5 min | Fixed |
| [163][fb-163] | Revelation enchant buff not consumed by DoTs, totems or melee | closed |
| [160][fb-160] | Ghost Wolf barely visible | Fixed |
| [134][fb-134] | Water Shield claims a cooldown | Fixed |
| [80][fb-80] | Flametongue tooltip not updating with spell power | Fixed |
| [79][fb-79] | Fire Nova range indicator | open, Pending Approval |
| [71][fb-71] | HoT crit consistency (Riptide) | closed |
| [40][fb-40] | Ghost Wolf plus equipment manager visual | open |

Current status of each bug: [Known Beta Bugs](../forever/Known-Beta-Bugs.md).

## 💬 Forums and Reddit

### Blizzard Forums

The forums run on Discourse, so they have a JSON API: `https://us.forums.blizzard.com/en/wow/t/<id>.json`, `…/search.json?q=…`, and `…/c/349.json` (follow the redirect).

| Forum | Category ID | Reliability | Usefulness | Notes |
|---|---|---|---|---|
| [WoW: Forever Beta Discussion][forum-349] | **349** | ★★ | ★★★ | Main venue for beta feedback; about 60 Shaman threads between Sept 15 and Oct 2. Filter for posts with a method and numbers. [Search: `shaman category:349`][forum-search] |
| [WoW: Forever General Discussion][forum-347] | **347** | ★★ | ★★ | Some Shaman theorycraft |
| Bug Report | **17** | ★ | ★ | **Shared with retail.** Example: the "Doom Winds double procs" thread ([2363015][f-2363015]) mentions 600 Maelstrom, which is retail, not Forever. Always check the category is 349 or 347 |
| EU feedback threads ([631193][eu-631193], [632437][eu-632437]) | — | ★★ | ★ | Design feedback, little test data |

- 🔴 A US forum thread disputes an "Official WoW Forever Discord" that is **not** run by Blizzard ([thread 2351698][f-2351698]).

### Reddit

🔴 **Not verified.** Reddit search and JSON returned HTTP 403 to automated access, and web search surfaced no indexed Shaman beta threads. Check manually: r/classicwow, r/shamanclassic, and a Forever subreddit (exact name unconfirmed).

## 🎧 Discord Servers

Member counts from the Discord invite API on **2026-10-02**. None of these are run by Blizzard.

| Server | Members (online) | Reliability | Usefulness | Notes |
|---|---|---|---|---|
| [Earthshrine][dc-earthshrine] | **125,908** (37.8k) | ★★ | ★★★ | Largest Shaman community, all game versions. Channels not inspected (needs login) |
| [Shaman Classic][dc-shamanclassic] | **76,409** (20.9k) | ★★ | ★★★ | "All things Classic World of Warcraft Shaman". Classic focus suits Forever |
| [Chadhancement][dc-chad] | **2,328** (548) | ★★ | ★★ | Calls itself "WoW Forever Enhancement Shaman Official Discord"; created by the YouTuber Holderhek. "Official" here does not mean Blizzard |
| "Shamancord" | — | — | — | Cited as the source of a bug video in [forever-bugs #163][fb-163]. Probably one of the two big servers; which one is unknown 🔴 |

## 🎥 Creators

| Creator | Content | Reliability | Usefulness |
|---|---|---|---|
| [Holderhek][yt-holderhek] | [Enhancement first thoughts + Q&A][yt-holderhek-vid]; runs Chadhancement | ★★ | ★★ |
| [notweber][yt-notweber] | [Elemental talents + 2 builds][yt-notweber-vid] (pre-beta, Sept 15) | ★★ | ★ |
| [Failz][yt-failz] | [Shaman world PvP][yt-failz-vid] | ★★ | ★ |
| Guzu (streamer) | Cited on the forums for going "OOM every pull" as Enhancement in the level-38 **BlizzCon demo**, not the beta ([thread 2354160][f-2354160]) | ★★ | ★ |
| Blizzard videos | Enhancement overview short, class highlights; covered by Wowhead ([383200][wh-383200], [383189][wh-383189]) | ★★★ | ★★ |

Use creator videos for visuals and impressions, not numbers. Stream values (Soda, Guzu, Esfand, Xaryu on Sept 12–13) are collected by [ForeverTome][ftome].

## 📖 Guide Sites

### Guide Reliability Notes

| Site | Conf. | Reliability | Notes |
|---|---|---|---|
| [Icy Veins: class overview][iv], [Elemental][iv-ele], [Enhancement][iv-enh], [Restoration][iv-res] | 🟡 | ★★ | Reputable; level-30 builds updated Oct 1–2. **403 to scripts.** Some details predate Sept 24 (Elemental Fury position, Ghost Wolf 2 s base) and some wording is loose |
| [Warcraft Tavern: Shaman guide][wt-shaman], [Dwarf totem quests][wt-dwarf] | 🟡 | ★★ | Good overview; the quest guide is detailed. The Elemental level-30 screenshot uses the **pre-Sept-24 tree**, and a fetch showed SoD spell IDs as "ranks" |
| [ClassicWoWForever][cwf] | 🟢/🟡 | ★★ | Build 70009, reviewed Sept 27; talents plus tooltips |
| [The Forever Era][tfe] | 🟡 | ★★ | Build 70009; patch-note summary |
| [classicwow.gg][cwgg] | 🟡 | ★★ | Oct 1; one copy/paste error ("Lava Burst heals…") |
| [wofwforever: spell power scaling][wofw] | 🟡 | ★★ | Separates official statements from player claims well |
| [Zockify][zockify] | 🟡 | ★★ | Large hub (updated Sept 15–25). Counts renamed talents as both new and removed |
| [Method.gg][method] | 🟡 | ★★ | Racials match client data; some paraphrasing of official text |
| [wow.gg Resto overview][wowgg-resto] | 🟡 | ★★ | Sept 19 |
| [GameSpot (via Yahoo)][gamespot] | 🟡 | ★★ | Sept 21; good overview, but conflates Ghost Wolf changes. The original GameSpot URL returns 403 |
| [EndgameTools][egt] | 🟡 | ★ | Sept 27, build 70009, but **some numbers look pre-patch** (Lava Burst 143–185, Riptide 456–504) |
| [ForeverTome][ftome] | 🟡 | ★ | Stream-sourced values from build 69893; low ranks only |
| [WoWHandbook][whb] | 🟡 | ★ | Updated Oct 2. **Mislabels unchanged Classic set bonuses as Forever changes** |
| [Conquest Capped][cc] | 🟡/🔴 | ★ | "Updated Sept 29" but content reflects BlizzCon / pre-Sept-24 data (layout, Ghost Wolf, Rage of the Farseer). Only source for some coefficients |
| [mythicsim][mythicsim] | 🟡 | ★ | Sim of reference characters; says "values still being checked" |
| [kami-labs][kami], [wowtbc.gg][wowtbc] | 🟡 | ★ | Talent values only / JS-rendered builds |
| [wowforeverbuilds beta tracker][wfbuilds], [wowguide.net][wowguide], [Power Up Gaming][pug] | 🟡 | ★ | Aggregators; verify against the dev notes and wago |
| [warcraft.wiki.gg Forever][wwg] | 🟡/🔴 | ★ | Dungeon list plausible, but the race/class table we fetched was **wrong** (listed Undead Shamans) |
| [mobalytics Shaman overview][moba-shaman] | 🔴 | ★ | 403; its "Spirit regen cut" claim exists only as a search snippet |

### Excluded Sources

| Source | Why |
|---|---|
| [wowforever.games totem guide][wfg] | 🔴 **Excluded.** Clear errors (Totem of Wrath, "1–2 min durations"); looks AI-generated |
| [leprestore][lepre], expcarry, playhub, wowforeverguides | 🔴 SEO guide sites, often unsourced or AI-written; leprestore returns 403. Quote only after independent checks |
| [buildthehomelab/wow-mod-forever-shaman][azcore] | An AzerothCore 3.3.5 module that **emulates** Forever Shaman changes. **Not** a Forever source |

## 🐙 GitHub Projects

### forever-hunter

[classic-hunter/forever-hunter][fh] is the Hunter project this wiki is modelled on 🟡 ★★★:
- **Main repo:** almost empty — one 288-byte README, 7 commits, no license. It is a fork of a 2019 combat-log repo. The README asks testers to "specify the beta build number or the date the test/video was taken".
- **Issues tab = testing queue:** 51 issues (36 open testing requests on Oct 2). Each is opened by `watchyoursixx` and its body is just a link to a thread in the Classic Hunter Lodge Discord. Labels include `Spell`, `Talent`, `Race`, `Request`, `Tested`.
- **Wiki:** 16 pages plus a sidebar, all by `watchyoursixx` (52 commits, Sept 16–30). "Forever Beta Changes" marks Blizzard-confirmed items with 🔵, stamps beta builds, uses `~~old~~ → **new**`, and ends with Known Beta Bugs. Mechanics pages are Classic references with Forever deltas kept separate.
- Cross-class findings useful to Shamans: DoTs can crit and recalculate dynamically 🟡; Raptor Strike and Wing Clip can proc Windfury ([Forever Beta Changes][fh-changes], [Melee Weaving][fh-weaving]).

### Other GitHub Projects

There is **no** other Shaman testing or wiki hub on GitHub as of Oct 2. Shaman tools (all unreviewed, ★ reliability):

| Repo | What it is | Created / last push |
|---|---|---|
| [alexmetwork/forever-shaman-sim][gh-sim] | Enhancement DPS simulator (talents, gear, rotations, stat weights); values unverified 🔴 | 09-25 / 10-02 |
| [cassidymichael/ShamanForever][gh-shamanforever] | Shaman addon | 09-21 / 10-02 |
| [bverger/ForeverTotems][gh-forevertotems] | Totem management addon | 09-29 / 10-01 |
| [Aratox/TotembarKeys][gh-totembarkeys] | Totem Bar keybind addon | 09-30 / 10-01 |
| [dreaves-paprika/forever-shaman-toolkit][gh-toolkit] | Level 20 checklist and BiS guide for Dwarf Shamans | 09-26 / 10-01 |

Cross-class research repos worth watching:

| Repo | Why |
|---|---|
| [ClassicWoWCommunity/forever-bugs][fb] | Cross-class bug tracker (see above) |
| [tzcnt/forever-data][gh-tzcnt-data], [tzcnt/WarriorSim][gh-tzcnt-sim] | Warrior beta data and sim |
| [opitaru-sys/forever-warlock-lab][gh-warlock], [forever-mage-lab][gh-mage] | "Theorycraft lab … beta spell data"; a possible template for a Shaman lab |
| [magey/forever-warrior][gh-magey] | Warrior, no description (same account as the magey/classic-warrior wiki used for Classic baselines) |
| [coolbat-vibe/wowforevertalent][gh-wft], [DavidRabasco/wow-forever-tools][gh-tools] | Talent calculators |
| [snibi/forever-meta][gh-meta] | "One build per spec, with cited sources" |
| [limbuilder/wow-forever-wiki][gh-wiki1], [lrainys/wow-forever-wiki][gh-wiki2] | General wikis, low activity |

## 📋 Quick Reference

| Question | Check first | Then |
|---|---|---|
| What did Blizzard change? | [Dev notes 2360696][blz-notes] | [mobalytics][moba], [bluetracker][bluetracker] |
| What are the numbers? | [wago.tools][wago-builds] | [Wowhead Forever][wh-spells], [WCLBox][wcl], [ForeverChanges][fc] |
| Talent values? | [wowforevertalents.com][wfts] | [wowforevertalent.com][wft] |
| Is it a known bug? | [forever-bugs][fb] | [Forum cat. 349][forum-349] |
| What are players testing? | [Forum cat. 349 search][forum-search] | [Earthshrine][dc-earthshrine], [Shaman Classic][dc-shamanclassic] |
| Guides and builds | [Icy Veins][iv], [Warcraft Tavern][wt-shaman] | Check against client data |

## 🔍 To Verify

- [ ] **"Shamancord"**: Earthshrine or Shaman Classic? ([forever-bugs #163][fb-163]).
- [ ] **Reddit** Shaman beta threads — automated access was blocked; needs a manual pass.
- [ ] **Discord channels** — which servers have Forever testing or theorycraft channels (needs login) ([Earthshrine][dc-earthshrine], [Shaman Classic][dc-shamanclassic]).
- [ ] **Wowhead news articles** blocked to scripts — read the Oct 1 datamine article by hand ([Wowhead 383219][wh-383219]).
- [ ] **Icy Veins** pages (403 to scripts) — re-read in a browser for post-Sept-24 updates ([Icy Veins][iv]).
- [ ] **Member counts** change daily — refresh before relying on them.

## 📚 Sources

- Research snapshots in `_research/` (2026-10-02): `05-sources-and-beta-findings.md` (hubs, ratings, GitHub, Discord counts), `03-spells-totems-items.md`, `02-talents.md` and `01-game-overview.md` (source reliability tables)
- Discord invite API counts: [Earthshrine][dc-earthshrine-api], [Shaman Classic][dc-shamanclassic-api], [Chadhancement][dc-chad-api]
- GitHub API: [classic-hunter/forever-hunter][fh-api], [ClassicWoWCommunity org repos][fb-org-api]

[blz-notes]: https://us.forums.blizzard.com/en/wow/t/2360696
[bluetracker]: https://www.bluetracker.gg/wow/topic/us-en/2360696-wow-forever-beta-development-notes-updated-october-1/
[blz-notes-eu]: https://eu.forums.blizzard.com/en/wow/t/631316/1
[blz-2367661]: https://us.forums.blizzard.com/en/wow/t/2367661
[blz-announce]: https://worldofwarcraft.blizzard.com/news/24302093/
[blz-skyborne]: https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne
[blz-dd]: https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap
[blz-legacy]: https://news.blizzard.com/en-us/article/24307383/
[blz-classdd]: https://worldofwarcraft.blizzard.com/en-gb/news/24301515
[blz-ruleset]: https://eu.forums.blizzard.com/en/wow/t/630507/1
[moba]: https://mobalytics.gg/wow-forever/guides/patch-notes-september-24
[moba-shaman]: https://mobalytics.gg/wow-forever/guides/shaman-class-overview
[guided]: https://guided.news/en/news/wow-forever-shaman-totem-systems-rogue-overhaul/
[wh-blue]: https://www.wowhead.com/forever/blue-tracker/news/eu/world-of-warcraft-forever-class-deep-dives-hunter-and-druid-world-of-warcraft-24301515
[wago-builds]: https://wago.tools/api/builds
[wh-spells]: https://www.wowhead.com/forever/spells
[wh-rss]: https://www.wowhead.com/forever/news/rss/all
[wh-383200]: https://www.wowhead.com/forever/news=383200/enhancement-only-uses-2-handed-weapons-in-wow-forever-enhancement-shaman
[wh-383189]: https://www.wowhead.com/forever/news=383189/class-highlights-for-warriors-rogues-and-shamans-in-wow-forever
[wh-383219]: https://www.wowhead.com/forever/news=383219/datamined-class-changes-for-wow-forever-build-on-october-1st
[wfts]: https://wowforevertalents.com/shaman/
[wft]: https://wowforevertalent.com/shaman/reference/
[wcl]: https://wowforever.wclbox.com/en/fashu/shaman
[fc]: https://foreverchanges.pro/spellbook/shaman
[wowgg-sets]: https://wow.gg/guides/wow-forever-tier-set-bonuses
[fb]: https://github.com/ClassicWoWCommunity/forever-bugs
[fb-186]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/186
[fb-175]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/175
[fb-163]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/163
[fb-160]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/160
[fb-134]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/134
[fb-80]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/80
[fb-79]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/79
[fb-71]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/71
[fb-40]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/40
[fb-org-api]: https://api.github.com/orgs/ClassicWoWCommunity/repos
[forum-349]: https://us.forums.blizzard.com/en/wow/c/in-development/wow-forever-beta-discussion/349
[forum-347]: https://us.forums.blizzard.com/en/wow/c/wow-forever/347
[forum-search]: https://us.forums.blizzard.com/en/wow/search.json?q=shaman%20category%3A349
[f-2363015]: https://us.forums.blizzard.com/en/wow/t/2363015
[f-2351698]: https://us.forums.blizzard.com/en/wow/t/official-wow-forever-discord/2351698
[f-2354160]: https://us.forums.blizzard.com/en/wow/t/2354160
[eu-631193]: https://eu.forums.blizzard.com/en/wow/t/wow-forever-beta-feedback-%E2%80%93-shaman-totems-dual-wield-elemental-mastery-stronger-spec-identity/631193
[eu-632437]: https://eu.forums.blizzard.com/en/wow/t/my-beta-feedback-%E2%80%93-warlock-shaman-ui-improvements/632437
[dc-earthshrine]: https://discord.gg/earthshrine
[dc-shamanclassic]: https://discord.com/invite/uwubagknvb
[dc-chad]: https://discord.com/invite/MS4zBMy
[dc-earthshrine-api]: https://discord.com/api/v10/invites/earthshrine?with_counts=true
[dc-shamanclassic-api]: https://discord.com/api/v10/invites/uwubagknvb?with_counts=true
[dc-chad-api]: https://discord.com/api/v10/invites/MS4zBMy?with_counts=true
[yt-holderhek]: https://www.youtube.com/@Holderhek
[yt-holderhek-vid]: https://www.youtube.com/watch?v=1-kp-SGG3lg
[yt-notweber]: https://www.youtube.com/@notweber
[yt-notweber-vid]: https://www.youtube.com/watch?v=1UoWnjVbYxU
[yt-failz]: https://www.youtube.com/@Failz
[yt-failz-vid]: https://www.youtube.com/watch?v=2KDNs_nR4HI
[ftome]: https://forevertome.com/guides/shaman
[iv]: https://www.icy-veins.com/wow-forever/shaman-class-overview
[iv-ele]: https://www.icy-veins.com/wow-forever/elemental-shaman-ranged-dps-pve-guide
[iv-enh]: https://www.icy-veins.com/wow-forever/enhancement-shaman-melee-dps-pve-guide
[iv-res]: https://www.icy-veins.com/wow-forever/restoration-shaman-healer-pve-guide
[wt-shaman]: https://www.warcrafttavern.com/forever/guides/shaman/
[wt-dwarf]: https://www.warcrafttavern.com/forever/guides/dwarf-shaman-totem-quests/
[cwf]: https://classicwowforever.com/class-changes/shaman/
[tfe]: https://theforeverera.com/en/classes/shaman/
[cwgg]: https://classicwow.gg/forever/guides/shaman
[wofw]: https://wofwforever.com/en/guides/wow-forever-spell-power-scaling/
[zockify]: https://www.zockify.com/forever/shaman/
[method]: https://www.method.gg/wow-forever/all-new-racial-abilities-in-world-of-warcraft-forever
[wowgg-resto]: https://wow.gg/guides/shaman-restoration-forever-overview
[gamespot]: https://tech.yahoo.com/gaming/articles/wow-forever-shaman-spells-class-153122479.html
[egt]: https://endgametools.com/en/blog/wow-forever-shaman
[whb]: https://wowhandbook.com/gear/shaman/
[cc]: https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/
[mythicsim]: https://mythicsim.com/wow-forever/shaman
[kami]: https://kami-labs.fr/en/wow-forever/build-chaman-elementaire-wow-forever/
[wowtbc]: https://wowtbc.gg/warcraftforever/class-guides/elemental-shaman/
[wfbuilds]: https://wowforeverbuilds.com/wow-forever-beta
[wowguide]: https://wowguide.net/en/guides/wow-forever-beta-patch-notes
[pug]: https://powerupgaming.co.uk/2026/09/14/new-wow-forever-talents-changes-vs-classic-guide/
[wwg]: https://warcraft.wiki.gg/wiki/Forever
[wfg]: https://www.wowforever.games/410.html
[lepre]: https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-shaman-guide-overview/
[azcore]: https://github.com/buildthehomelab/wow-mod-forever-shaman
[fh]: https://github.com/classic-hunter/forever-hunter
[fh-api]: https://api.github.com/repos/classic-hunter/forever-hunter
[fh-changes]: https://github.com/classic-hunter/forever-hunter/wiki/Forever-Beta-Changes
[fh-weaving]: https://github.com/classic-hunter/forever-hunter/wiki/Melee-Weaving
[gh-sim]: https://github.com/alexmetwork/forever-shaman-sim
[gh-shamanforever]: https://github.com/cassidymichael/ShamanForever
[gh-forevertotems]: https://github.com/bverger/ForeverTotems
[gh-totembarkeys]: https://github.com/Aratox/TotembarKeys
[gh-toolkit]: https://github.com/dreaves-paprika/forever-shaman-toolkit
[gh-tzcnt-data]: https://github.com/tzcnt/forever-data
[gh-tzcnt-sim]: https://github.com/tzcnt/WarriorSim
[gh-warlock]: https://github.com/opitaru-sys/forever-warlock-lab
[gh-mage]: https://github.com/opitaru-sys/forever-mage-lab
[gh-magey]: https://github.com/magey/forever-warrior
[gh-wft]: https://github.com/coolbat-vibe/wowforevertalent
[gh-tools]: https://github.com/DavidRabasco/wow-forever-tools
[gh-meta]: https://github.com/snibi/forever-meta
[gh-wiki1]: https://github.com/limbuilder/wow-forever-wiki
[gh-wiki2]: https://github.com/lrainys/wow-forever-wiki
