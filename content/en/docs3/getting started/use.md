---
title: "QuickTC Operation"
description: "QuickTC - How to Use"
lead: "QuickTC - How to use"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs3:
    parent: "getting started"
weight: 321
toc: true
---

The QuickTC is simple to use

## Power ON

### USB Power

Connecting USB Power will always power on the QuickTC.

### Plug it in to timecode

When you connect timecode to the BNC, the QuickTC will power on and readout timecode.

Note: Battery capacity must be at least 5%.

### Press Pushbutton Display

A quick press of the pushbutton display will turn the device on.

Note: Battery capacity must be at least 5%.

## Disconnect to power off

When QuickTC has been turned on and never sees timecode, it will power down in about 10 seconds

When QuickTC loses timecode, it will power down after about 30 seconds.

## Pushbutton Display

The OLED display can be pressed on the right side, closest to the BNC. This will power on the device and also allow you to cycle thru the readouts

### LEDs

#### Charge LED

Stays on solid during charge. Will turn off when battery is fully charged.

#### Heartbeat LED

QuickTC has 2 flash modes of heartbeat

1. With valid timecode connected, the heartbeat LED will flash once per second for the duration of the first frame. This indicates valid timecode and allows you to use multiple QuickTCs to visually confirm TC sync at multiple locations.
2. When no valid timecode is connected and device is ON, the heartbeat LED will double flash about once per second.

<img src="/images/qtc/qtcusb.jpg" title="QuickTC Heartbeat" alt="alt title"/>
