# ⚡ Forever Shaman

A sourced, build-stamped knowledge bank for playing **Shaman in World of Warcraft: Forever**, Blizzard's level-60 "Classic+" fork of WoW Classic Era (beta Sept 17 – Oct 21, 2026; launch Nov 4, 2026).

Inspired by the Classic Hunter Lodge's [forever-hunter wiki](https://github.com/classic-hunter/forever-hunter/wiki). This project goes wider: mechanics, Forever changes, full talent trees, guides, and reference tables. Every fact is sourced and tagged by confidence.

**➡️ Start reading: [wiki/Home.md](wiki/Home.md)**

---

## What's in here

| Path | Contents |
|---|---|
| [`wiki/`](wiki/Home.md) | **The wiki.** Curated pages, the current truth |
| [`wiki/forever/`](wiki/forever/) | What Forever changed: Shaman changes, system changes, races, beta changelog, bugs |
| [`wiki/mechanics/`](wiki/mechanics/) | How things work: attack tables, stats, coefficients, totems, imbues, per-spec mechanics |
| [`wiki/talents/`](wiki/talents/) | All three talent trees with per-rank values vs Classic |
| [`wiki/guides/`](wiki/guides/) | How to play each spec, plus leveling |
| [`wiki/reference/`](wiki/reference/) | Lookup tables: spells and ranks, totems, items, quests, macros, datamining, sources |
| [`wiki/Testing-Queue.md`](wiki/Testing-Queue.md) | Open questions that need in-game testing |
| [`_research/`](_research/) | Raw, dated research snapshots the wiki was distilled from |
| [`tools/check-wiki.mjs`](tools/check-wiki.mjs) | `node tools/check-wiki.mjs` checks front matter, links and anchors |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | Style guide, confidence markers, page template, workflow |

## Confidence markers

| | |
|---|---|
| ✅ | Verified in-game by this wiki (with build and date) |
| 🔵 | Official Blizzard |
| 🟢 | Client data (datamined) |
| 🟡 | Community-tested or guide claim |
| 🔴 | Unverified, disputed or rumor |

## Data currency

- **Forever:** beta build `1.60.1.70170` (Oct 1, 2026). The beta level cap is 30, so everything above level 30 is client data only.
- **Classic baseline:** Classic Era 1.15.x.

Builds change often. Each page's front matter says which build it reflects.

## Contributing

Found a mistake, tested something, or seeing different numbers on a newer build? Open an issue using the **Testing request** or **Correction** template, and always include your **build number**. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Roadmap

- [x] Research and knowledge bank (this repo)
- [ ] Clear the Testing Queue in the beta
- [ ] Wanted pages: Consumables, Professions for Shaman, PvP, Gear/BiS by phase, Dungeon notes, Addons and WeakAuras
- [ ] Script to diff Shaman spells between builds (wago.tools)
- [ ] Website generated from `wiki/` (the pages already use relative links and front matter, so they work with MkDocs, VitePress, Astro Starlight, etc.)
