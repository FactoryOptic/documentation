---
title: "Lens Mapping"
description: "Configure SERVO32"
lead: "Configure SERVO32"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs2:
    parent: "mapping"
weight: 320
toc: true
---

## Lens Mapping

Lens maps need to be created, unless provided.

### Barrel Marks

SERVO32 supports up to 16 data points on the table, which easily covers all your iris marks. The first and last will be min and max, so you really get 14 barrel marks to map to. For example, mapping focus, choose up to 14 barrel marks.

### Barrel Mark List

First create a list of your barrel marks that you will map to, iris, focus, or zoom.

Look at each lens, if they are different, and choose the marks and fill out your vertical row with your marks.

### Using mixed lens sets

If you are mixing different lenses, you need to make sure all marks are represented. Say you have 3 mixed lenses with a fastest stops at T2.0, T2.6 and T2.8, then your table should have all 3 of these values. When you do your mapping, you will have to interpolate T2.6 on lenses that don't have that mark, but have T2.0. Do your best to approximate these virtual marks.

## Motor Positions

Preston normalizes their motor positions as a 16 bit unsigned value, in other words, they report the range from 0x0000 to 0xFFFF in hexadecimal, which is 0-65535 in decimal.

### Table min & max

- The MIN, or minimum value should always be 0.
- The MAX, or maximum value should always be 65535.
- Values in the table should always increase from min to max.
  - If your motor is not increasing, use the MDR switch or button to reverse the motor

### Note on Motor Span

Motor span is the actual motor encoder counts from end stop to end stop. This will vary from lens to lens as well as from lens motor to lens motor. This would be the raw range of motor positions, can could be less than 65535 or it could be much greater than 65535.

Motor span is not reported to the user, but it should be understood that you will always have 16 bits of motor posision to work with. But any sloppyness in the setup could result in increased motor span, which may make your maps less accurate, especially if your mapping setup differs from your setup on the day.

### Importance of proper lens motor setup

If you have a flexy setup, where your lens motor is flexing relative to your lens, your lens motor span could have increased motor encoder counts. Be sure to follow best practices with your setups before mapping.

If possible, map with the exact same setup you will use on-the-day. This will eliminate variables in your maps.

## Recording motor positions at the barrel marks

Once you have your barrel mark list and your lens motor setup, begin the process for each lens. At this point, we are just recording the numbers, so it's not important which channel or MDR we are using.

### Hitting the marks

Using the Preston Hand Unit, drive the motor to the mark. Always approach the mark slowly and from the same direction. When the barrel mark lines up with the witness mark, record the motor position. Repeat for all marks.

It's important to hit the marks accuratly in the region you plan on using. If your are planning on being in a 4 - 5.6, then those marks are important.

### Marks of a different name or unit

If focus mapping lenses with metric and USCS units, you will have to do the metric to USCS conversion.

If lens is missing marks at the closed end of iris, like T16, do your best to guess the location Generally, anything beyond T22 is considered closed.

### Missing marks on mixed lens sets

#### Marks missing on the minimum end

If your table has marks that the lens can't hit, just put in 0.

For example, your set has lenses with T1.9 and T2, The T2 lens value for T1.9 would be 0.

#### Marks missing on the minimum end

If your lens is missing marks at the end, for example, T16 is the last mark, use 65535 for entry on T22.

#### Example of mis-matched lenses

Here we have maps of a Panavision Primo 21mm T1.9 and a Panavision Super Speed 24mm T2, which has doens't have a T22 mark. For the 24mm, the T1.9 value has been set as 0 and the T22 is set at 65535.

The Lens maps would line up like this. Between T2 and T16, the marks will hit everytime. Under T2, the 24mm will stay at T2.

| Barrel Mark | Panavision Primo 21mm (Primary) | Panavision 24mm Lens (Replica) |
| ----------- | ------------------- | ------------------- |
| MIN  | 0 | 0 |
| T1.9 | 2553 | 0 |
| T2 | 5863 | 5801 |
| T2.8 | 16369 | 22055 |
| T4 | 22662 | 41169 |
| T5.6 | 31160 | 51142 |
| T8 | 39340 | 57824 |
| T11 | 47476 | 62047 |
| T16 | 55957 | 65337 |
| T22 | 64206 | 65535 |
| MAX | 65535 | 65535 |

<img src="/images/s32/panavisionprimo.png" title="Panavision Primo Lens" alt="alt title"/>

- Panavision Primo 21mm Lens with T1.9 - T22

<img src="/images/s32/panavision24mm.png" title="Panavision 24mm Lens" alt="alt title"/>

- Panavision 24mm Lens with T2 - T16