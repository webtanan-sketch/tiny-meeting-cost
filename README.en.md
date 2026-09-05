# Tiny Meeting Cost

> **TinyManager Module · Foundation**  
> Make the real cost of a meeting visible before, during and after it happens.

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md) · [TinyManager Core](https://github.com/webtanan-sketch/tinymanager)

![TinyManager Module](https://img.shields.io/badge/TinyManager-Module-2563EB)
![Status](https://img.shields.io/badge/Status-Foundation-64748B)
![FA RTL](https://img.shields.io/badge/FA-RTL-0F766E)
![EN LTR](https://img.shields.io/badge/EN-LTR-0F766E)
![License](https://img.shields.io/badge/License-MIT-111827)

## Purpose

**Tiny Meeting Cost** answers one focused management question:

> What is this meeting actually costing the organization?

A manager enters participants, duration and approximate hourly cost, and the tool turns that into an immediate, understandable cost signal.

## First-release scope

- participant count
- meeting duration
- average or per-person hourly cost
- total meeting cost
- optional live cost timer
- person-hours consumed
- useful cost comparisons
- Persian / English
- RTL / LTR
- local-first persistence
- shareable summary export

## What this module is not

It is not a calendar, video-conferencing platform or full meeting-notes suite. It is a **micro tool** dedicated to making meeting cost visible.

## TinyManager integration

Integrated mode consumes shared Core services for locale, direction, theme, storage, optional project context and export.

## Module identity

```text
ID:       tiny-meeting-cost
Icon:     Clock3 (Lucide)
Category: insight
Route:    /modules/meeting-cost
Status:   Foundation
```

## Target stack

```text
TypeScript + React + Vite
TinyManager Module Contract
Lucide Icons
Local-first persistence
```

## Product principles

1. A calculation should take seconds, not setup work.
2. No account should be required for a simple local calculation.
3. The output should help a manager act, not merely show a large number.
4. Standalone and integrated modes must share one domain engine.

## Roadmap

- [x] Define module manifest
- [x] Define product scope
- [ ] Calculation engine
- [ ] Standalone UI
- [ ] TinyManager integration
- [ ] Live meeting timer
- [ ] Export
- [ ] Tests + CI

## License

MIT © 2026 Webtanan
