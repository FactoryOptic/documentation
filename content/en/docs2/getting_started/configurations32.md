---
title: "SERVO32 System Configuration"
description: "Configure SERVO32"
lead: "Configure SERVO32"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs2:
    parent: "getting_started"
weight: 310
toc: true
---

The SERVO32 in unmapped mode needs no configuration. Be sure to confirm mapping is disabled.

<img src="/images/s32/s32overview.png" title="SERVO32 In Action" alt="alt title"/>

## Unmapped Mode

In Unmapped mode, there isn't much to configure. Generally you want all the MDRs to be the same model so you have one-to-one lens motors. For example, if you have an MDR-4 (supports 2 lens motors, iris and focus) as your Primary, you will only be able to command 2 motors per replica MDR. If you have a replica MDR-3 (supports 4 lens motors), Zoom and Aux will not do anything.

## Mapped Mode

Using mapped mode will give you the flexibility to configure your system anyway you wish.

### Mismatched Lenses

Mapping allows seemless integration of any MDR and any lens. A properly mapped system will always hit the witness marks you set on your hand unit.

You now have the freedom to match up lenses that are not identical.