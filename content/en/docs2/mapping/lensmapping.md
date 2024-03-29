---
title: "Choose lens mapping points"
description: "Configure SERVO32"
date: 2020-10-06T08:49:31+00:00
lastmod: 2022-06-27
draft: false
images: []
menu:
  docs2:
    parent: "mapping"
weight: 320
toc: true
---

## Motor Values

Preston normalizes their motor positions as a 16 bit unsigned value in a range from 0x0000 to 0xFFFF in hexadecimal, which is 0-65535 in decimal. This means that the values you write for your lens mapping points should be as follows:

- The MIN, or minimum value should always be 0.
- The MAX, or maximum value should always be 65535.
- Values in the table should never decrease from min to max.
  - If your motor values are not increasing, use the MDR switch/button to reverse the motor direction

### Note on Motor Span

Motor span is the actual motor encoder counts from end stop to end stop. This will vary from lens to lens as well as from lens motor to lens motor. This would be the raw range of motor positions, can could be less than 65535 or it could be much greater than 65535.

Motor span is not reported to the user, but you will always have 16 bits of motor position to work with. Any flex in the motor to lens engagement could result in increased motor span, which may make your maps less accurate, especially if your mapping setup differs from your setup on the day.

## Lens Motor Setup

If you have a flex in your setup, where your lens motor is flexing relative to your lens, your lens motor span could have increased motor encoder counts. Be sure to follow best practices with your setups before mapping. If possible, map with the exact same setup you will use on-the-day. This will eliminate variables in your maps.

## Barrel Mark List

Create a list of up to 14 barrel marks that you will map to for iris, focus, or zoom lenses. SERVO32 supports up to 16 data points in the lens map, which easily covers all your iris marks. The first and last data points serve as the min and max, which are typically 0 and 65535.

If you have different lenses then in your mapping table fill out one vertical row per lens with the respective lens marks. Say you have 3 mixed lenses with a fastest stops at T2.0, T2.6 and T2.8, then your table should have all 3 of these values. When you do your mapping, you will have to interpolate T2.6 on lenses that don't have that mark, but have T2.0. Do your best to approximate these virtual marks.

## Hitting the Marks

Now that you have the motor values and barrel mark list we can test the mapping points for accuracy. Using the Preston Hand Unit, drive the motor to the barrel mark. Always approach the mark slowly and from the same direction. When the barrel mark lines up with the witness mark, record the motor position. Repeat for all marks.

It's important to hit the marks accurately, especially in the region you plan on using. If your are planning on being in a T2.8 - T5.6, then the marks in this range are important, so do your best to record them.

### Complications with Marks

If focus mapping lenses with metric and USCS units, you will have to do the metric to USCS conversion. If a lens is missing marks at the closed end of iris, like T16, do your best to guess the location. Generally, marks labeled C, CLOSE or CLOSED are considered T22.

If your table has marks that the lens can't hit, just put in 0. For example, if your set has lenses with T1.9 and T2 the T2 lens value for T1.9 would be 0.

If your lens is missing marks at the end, for example, T16 is the last mark, use 65535 for entry on T22.

### Example of Mismatched Lenses

Here we have maps of a Panavision Primo 21mm T1.9 and a Panavision Super Speed 24mm T2, which has doesn't have a T22 mark. For the 24mm, the T1.9 value has been set as 0 and the T22 is set at 65535.

The Lens maps would line up like this. Between T2 and T16, the marks will hit every time. Under T2, the 24mm will stay at T2.

| Barrel Mark | Panavision Primo 21mm (Primary) | Panavision 24mm Lens (Replica) |
| ----------- | ------------------------------- | ------------------------------ |
| MIN         | 0                               | 0                              |
| T1.9        | 2553                            | 0                              |
| T2          | 5863                            | 5801                           |
| T2.8        | 16369                           | 22055                          |
| T4          | 22662                           | 41169                          |
| T5.6        | 31160                           | 51142                          |
| T8          | 39340                           | 57824                          |
| T11         | 47476                           | 62047                          |
| T16         | 55957                           | 65337                          |
| T22         | 64206                           | 65535                          |
| MAX         | 65535                           | 65535                          |

<img src="/images/s32/panavisionprimo.png" title="Panavision Primo Lens" alt="alt title"/>

- Panavision Primo 21mm Lens with T1.9 - T22

<img src="/images/s32/panavision24mm.png" title="Panavision 24mm Lens" alt="alt title"/>

- Panavision 24mm Lens with T2 - T16
