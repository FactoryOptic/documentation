---
title: "QuickTC Setup"
description: "How to wire up the QuickTC"
lead: "How to connect and operate the QuickTC"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs3:
    parent: "getting started"
weight: 315
toc: true
---

<img src="/images/qtc/quicktcinfo.png" title="QuickTC Info" alt="alt title"/>

## Connecting the QuickTC

Plug the coaxial timecode feed cable into the QuickTC BNC port. The cable should have a single-ended signal per SMPTE ST 12-1:2014. The signal should be typical 75 ohms and QuickTC has an input impedance of 10K.

## Powering On the QuickTC

QuickTC has an internal battery that powers the device. When it is off, there are 3 methods to power on.

- Pressing the pushbutton OLED will power on the QuickTC.
- Connecting a valid timecode should power on the QuickTC.
- Connecting or disconnecting the USB-C cable will power on QuickTC.

Note: Battery capacity must be at least 5% to power on.

### Heartbeat LED Flashing Patterns

QuickTC has 2 modes of flashing pattern for the Heartbeat LED

1. **Valid timecode:** With valid timecode connected, the LED will flash once per second for the duration of the first frame. When using multiple QuickTCs the LED on each QuickTC should flash at the same time to indicate timecode sync.
2. **Invalid timecode:** Without valid timecode the LED will double flash about once per second.

### Charge LED

LED is on during charge when USB-C is connected.

### Powering Off

If QuickTC turns on and does not see a valid timecode signal, it will power off after about 10 seconds. Alternatively, when QuickTC experiences a loss of timecode, QuickTC will automatically power off after 30 seconds.
