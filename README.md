# Tiny Meeting Cost

> **TinyManager Module · Foundation**  
> هزینه واقعی جلسه را قبل، حین و بعد از جلسه قابل مشاهده کن.

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md) · [TinyManager Core](https://github.com/webtanan-sketch/tinymanager)

![TinyManager Module](https://img.shields.io/badge/TinyManager-Module-2563EB)
![Status](https://img.shields.io/badge/Status-Foundation-64748B)
![FA RTL](https://img.shields.io/badge/FA-RTL-0F766E)
![EN LTR](https://img.shields.io/badge/EN-LTR-0F766E)
![License](https://img.shields.io/badge/License-MIT-111827)

## هدف

**Tiny Meeting Cost** یک ابزار کوچک برای پاسخ به یک سؤال ساده مدیریتی است:

> این جلسه واقعاً چقدر برای سازمان هزینه دارد؟

مدیر تعداد شرکت‌کنندگان، مدت جلسه و هزینه ساعتی تقریبی افراد را وارد می‌کند و ابزار هزینه جلسه را به شکلی سریع و قابل فهم نمایش می‌دهد.

## دامنه نسخه اول

- تعداد شرکت‌کنندگان
- مدت جلسه
- هزینه ساعتی متوسط یا هزینه جداگانه هر شرکت‌کننده
- محاسبه هزینه کل
- هزینه در لحظه برای Timer زنده
- نمایش Person-hours مصرف‌شده
- مقایسه «هزینه جلسه» با «هزینه یک ساعت کار یک نفر»
- فارسی/English
- RTL/LTR
- Local-first
- خروجی خلاصه قابل اشتراک

## چیزی که این ماژول نیست

این پروژه Calendar، Video Conference یا Meeting Notes کامل نیست. یک **Micro Tool** است که فقط هزینه زمانی و مالی جلسه را شفاف می‌کند.

## TinyManager Integration

در حالت یکپارچه، ماژول از Core برای این موارد استفاده می‌کند:

```text
Locale / Direction
Theme
Storage
Projects (optional)
Export
```

## Module Identity

```text
ID:       tiny-meeting-cost
Icon:     Clock3 (Lucide)
Category: insight
Route:    /modules/meeting-cost
Status:   Foundation
```

## Stack هدف

```text
TypeScript + React + Vite
TinyManager Module Contract
Lucide Icons
Local-first persistence
```

## اصول طراحی

1. محاسبه باید در چند ثانیه انجام شود.
2. کاربر برای یک محاسبه ساده مجبور به ساخت حساب نباشد.
3. نتیجه باید برای تصمیم‌گیری مفید باشد، نه فقط یک عدد بزرگ.
4. نسخه مستقل و نسخه داخل TinyManager از یک Domain Logic استفاده کنند.

## Roadmap

- [x] تعریف Module Manifest
- [x] تعریف دامنه محصول
- [ ] Calculation engine
- [ ] Standalone UI
- [ ] TinyManager integration
- [ ] Live meeting timer
- [ ] Export
- [ ] Tests + CI

## License

MIT © 2026 Webtanan
