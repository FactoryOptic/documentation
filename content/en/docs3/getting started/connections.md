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

## Connecting the QuickTC

Plug the coaxial timecode feed cable into the QuickTC BNC port. The cable should have a single-ended signal per SMPTE ST 12-1:2014. Input is standard 75 ohm BNC and has an input impedance of 10K ohm.

## Powering the QuickTC

If the coaxial cable is plugged into the BNC port QuickTC will automatically power on and read out timecode when it detects an LTC signal.

The USB-C input can also power the QuickTC for long-term use. If the USB-C cable is plugged in, press the OLED display on the right side closest to the BNC port to turn the device on.

Note: Battery capacity must be at least 5% to power on.

### LED Flashing Patterns

QuickTC has 2 modes of flashing pattern for the LED (located next to the USB-C input, see image):

1. **Valid timecode:** With valid timecode connected, the LED will flash once per second for the duration of the first frame. When using multiple QuickTCs the LED on each QuickTC should flash at the same time to indicate timecode sync.
2. **Invalid timecode:** Without valid timecode the LED will double flash about once per second.

<img src="/images/qtc/qtcusb.jpg" title="QuickTC Heartbeat" alt="alt title"/>

### Powering Off

If QuickTC does not see a valid timecode signal for 10 seconds, it will power off. Alternatively, when disconnected from timecode and not connected via USB-C, QuickTC will automatically power off.
