---
title: "SERVO32 Connections"
description: "How to wire up the SERVO32"
lead: "How to wire up the SERVO32"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs2:
    parent: "getting_started"
weight: 315
toc: true
---

#### Connect SERVO32

- Preston Serial, ports 1 - 8
  - Connector is Lemo 4-Pin OB
  - Port 1 is the Primary MDR and can provide power to the SERVO32
  - Ports 2-8 are the Replica MDRs, no power is provided or taken on this connector
  - Supports MDR-2, MDR-3 or MDR-4
- DC POWER (Optional)
  - Connector is Lemo 2-Pin OB
  - 8-32VDC input @ 4W max
  - Input is protected from reverse polarity and has resettable fuse
- Micro USB
  - For console use

### SERVO32 Serial Cables

| EGG.0B.304 | EGG.0B.304 |
| ---------- | ---------- |
| Pin 1 | Pin 1 |
| Pin 2 | Pin 2 |
| Pin 3 | Pin 3 |
| Pin 4 | Pin 4 |


### SERVO32 Power Cable

| EGG.0B.302 | Signal |
| ---------- | ------ |
| Pin 1 | +12V |
| Pin 2 | 0V |
