---
title: "MDR Motor Settings"
description: "Motors, numbers and ports"
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2022-06-27
draft: false
images: []
menu:
  docs2:
    parent: "getting started"
weight: 360
toc: true
---

## Primary MDR Motors

Each MDR can have 2, 3 or 4 motors, with one motor per channel on the SERVO32. Each MDR has an iris and focus motor at minimum, which are connected to channels 1 - 2. Some MDRs have a zoom, which connects to channel 3. And MDR-3s have a aux, which connects to channel 4.

| MDR Port | Motor Function | Note                 |
| -------- | -------------- | -------------------- |
| 1        | Iris           | MDR-2, MDR-3 & MDR-4 |
| 2        | Focus          | MDR-2, MDR-3 & MDR-4 |
| 3        | Zoom           | MDR-2 & MDR-3        |
| 4        | Aux            | MDR-3 Only           |

## SERVO32 Motor Channels

For a detailed layout of all channels, see the table below:

- Motor Channels are from 1 - 32
  - Primary MDR is connected to channels 1 - 4
  - Replica MDRs are connected to channels 5 - 32

| SERVO32 Motor Channel | MDR        | MDR Port                  |
| --------------------- | ---------- | ------------------------- |
| 1 - 2 - 3 - 4         | #1 Primary | Iris - Focus - Zoom - Aux |
| 5 - 6 - 7 - 8         | #2 Replica | Iris - Focus - Zoom - Aux |
| 9 - 10 - 11 - 12      | #3 Replica | Iris - Focus - Zoom - Aux |
| 13 - 14 - 15 - 16     | #4 Replica | Iris - Focus - Zoom - Aux |
| 17 - 18 - 19 - 20     | #5 Replica | Iris - Focus - Zoom - Aux |
| 21 - 22 - 23 - 24     | #6 Replica | Iris - Focus - Zoom - Aux |
| 25 - 26 - 27 - 28     | #7 Replica | Iris - Focus - Zoom - Aux |
| 29 - 30 - 31 - 32     | #8 Replica | Iris - Focus - Zoom - Aux |

Note: If you use any number of MDR-2s or MDR-4s you will not be able to use all 32 motor channels. As an example, if you have an MDR-3 as your primary and MDR-2 as your only Replica, connected to Replica port #4, then you will have motor channels 1, 2, 3, 4, 13, 14 & 15 available.
