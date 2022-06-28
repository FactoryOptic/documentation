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

For the most part, arrays tend to use identical lenses and mapping is not typically required. But when you encounter lenses not matching perfectly, mapping is the best way to dial in lenses and match them perfectly.

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

## Channel Mapping

Channel mapping is when you set the relationship between the Replicas and their primary. Each Replica motor (5-32) will be mapped to any Primary Motor, which are motors 1-4 only.

If your setup only includes iris motors, then all Replica motors will map to motor 1.

### Mistached MDRs

With mapping, you can map any lens motor connected to your Replica MDRs to any primary lens motor. This allows you to use MDR-2, MDR-3 and MDR-4 all in the same system.

### Mismatched Lens Barrel Marks

With mapping, you can achieve precise matching of lens marks even if you have lenses with different barrel mark scales. For example, some lenses are manually marked at the factory during calibration. It's also possible to have 2 lenses with differences in the barrel marks. You will see this on Arri lenses like the Masterprime, which can have different scale classes. Using the SERVO32 with mapping enabled will let you match up lenses that wouldn't match otherwise.

### Mismatched lenses

With mapping, you can configure your system to use any lens you wish. Sometimes, a fisheye lense is added to the array. You can map it so it matches your other lenses. Also, you can map lenses with different lens speeds. If your set has a variety of lenses, for example T1.8, T2.0, T2.8, the mapping can accomidate this so you can set your lens to T2.8 and they all will be T2.8.

### Choosing your primary

The SERVO32 can handle any configuration you use, but there are recommendations for configuring your system.

#### Your primary lens should be your fastest lens!

By making your fastest lens your primary, all others can be mapped to it.

#### Your primary MDR should be MDR-3 or MDR-4

If you have a mix of MDRs, the MDR-3 and MDR-4 are recommended for your primary. They are newer generation hardware and a have better response update rate which helps your system response. If you have a single Primary lens motor you wish to map your replicas to, best to use the MDR-4, to avoid having unused lens ports.
