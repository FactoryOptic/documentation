---
title: "Mapping Overview"
description: "Configure SERVO32"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs2:
    parent: "mapping"
weight: 310
toc: true
---

For the most part, arrays tend to use identical lenses and mapping is not typically required. However, when you encounter mismatched lenses, mapping allows you to use MDR-2, MDR-3 and MDR-4 all in the same system.

## Lens Mapping

Lens mapping is the process of creating a simple table for lens marks to motor positions. Below is an example map of an iris barrel.

| Barrel Mark | Motor Position |
| ----------- | -------------- |
| MIN  | 0 |
| T1.9 | 2553 |
| T2.8 | 16369 |
| T4 | 22662 |
| T5.6 | 31160 |
| T8 | 39340 |
| T11 | 47476 |
| T16 | 55957 |
| T22 | 64206 |
| MAX | 65535 |

With lens mapping, you can achieve precise matching of lens marks even if you have lenses with different barrel mark scales. For example, some lenses are manually marked at the factory during calibration. It's also possible to have 2 lenses with differences in the barrel marks. You will see this on Arri lenses like the Masterprime, which can have different scale classes. Using the SERVO32 with mapping enabled will let you match up lenses that wouldn't match otherwise.

In addition, with SERVO32 you can configure your system to use any lens you wish. Sometimes, a fisheye lense is added to the array. You can map it so it matches your other lenses. Also, you can map lenses with different lens speeds. If your set has a variety of lenses, for example T1.8, T2.0, T2.8, the mapping can accommodate this so you can set your lens to T2.8 and all the lenses will be T2.8.

## Channel Mapping

Channel mapping is when you set the relationship between the Replica motors and the Primary motors. The Replica motors on channels 5-32 of the SERVO32 will be mapped to Primary motors on channels 1-4. If you only have iris Primary motors then all Replica motors will map to controls for channel 1 of the SERVO32.

## Primary Choice

The SERVO32 can handle any configuration of lenses you use, but there are recommendations for configuring your system. Your Primary lens should be the fastest lens, so all others can map to it. In addition, your Primary MDR should be MDR-3 or MDR-4. They are newer generation hardware and have better response update rate which helps your system response. If you have a single Primary lens motor to map your Replicas to, setting the MDR-4 as Primary will avoid unused lens ports.
