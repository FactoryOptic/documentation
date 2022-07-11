---
title: "SERVO32 Quick Start Guide"
description: "Set up the SERVO32"
lead: "Set up the SERVO32"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs2:
    parent: "getting started"
weight: 310
toc: true
---


## Unmapped Mode

The SERVO32 in unmapped mode needs no configuration. Be sure to confirm mapping is disabled.

<img src="/images/s32/s32overview.png" title="SERVO32 In Action" alt="alt title"/>

Here it is ideal to use the same model lenses with identical lens barrels. By using the same model lenses the iris, Focus, Zoom & Aux motor positions at a Replica port will match the motor positions at the Primary port. When using mismatched lenses, the MDR at the Primary port will set the limit of lens motors that are controllable at the Replica ports. For example, we have an MDR-4 at the Primary port and a MDR-3 at the Replica port. The MDR-4 only controls iris and Focus, so only the iris and Focus of the MDR-3 will be usable, not the Zoom and Aux.

### Wiring Setup

In order to connect the SERVO32 and additional components, use the following connections:

- Preston Serial, ports 1 - 8 of SERVO32
  - Connector is Lemo 4-Pin OB
  - Port 1 is the Primary MDR and can provide power to the SERVO32
  - Ports 2-8 are the Replica MDRs, no power is provided or taken on this connector
  - Supports MDR-2, MDR-3 or MDR-4

| EGG.0B.304 | EGG.0B.304 |
| ---------- | ---------- |
| Pin 1 | Pin 1 |
| Pin 2 | Pin 2 |
| Pin 3 | Pin 3 |
| Pin 4 | Pin 4 |

- DC POWER (Optional)
  - Connector is Lemo 2-Pin OB
  - 8-32VDC input @ 4W max
  - Input is protected from reverse polarity and has resettable fuse
  - Wired to Preston Polarity Standard

| EGG.0B.302 | Signal |
| ---------- | ------ |
| Pin 1 | Ground |
| Pin 2 | +8~32VDC |

### Additional Settings

Click to learn more about the display settings (link), MDR settings (link), Preston compatibility (link) or versions (link). 

## Mapped Mode

Mapping allows seamless integration of any MDR and any lens. A properly mapped system will always hit the witness marks you set on your Hand Unit. For the mapping configuration, see (link to mapping).
