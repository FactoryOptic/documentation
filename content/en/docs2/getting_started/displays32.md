---
title: "SERVO32 Display"
description: "SERVO32 Display"
lead: "SERVO32 Display Pages"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs2:
    parent: "getting_started"
weight: 330
toc: true
---

## SERVO32 Display

The SERVO32 has an onboard OLED display that displays useful information. You can cycle thru the displays using the side mounted encoder knob.

### All Pages

<img src="/images/s32/displaypg01.png" title="SERVO32 Display page 1" alt="alt title"/>

- All pages will show the the following on the top bar
  - SERVO32 Firmware Version
  - Input voltage, this is the voltage provided by the MDR on the primary port unless you have power on the power port.

### Page 1 - MDR Type

- For each MDR port, will show the type of MDR connected
  - Unconnected ports will show ---

### Page 2 - MDR Firmwre version

<img src="/images/s32/displaypg02.png" title="SERVO32 Display page 2" alt="alt title"/>

- For each MDR port, will show the firmware version reported by the MDR

### Page 3 MDR Motor Positions

<img src="/images/s32/displaypg03.png" title="SERVO32 Display page 3" alt="alt title"/>

- For each MDR port, will show the motor positions

### Page 4 Primary MDR Motor Positions

<img src="/images/s32/displaypg04.png" title="SERVO32 Display page 4" alt="alt title"/>

- For each motor, shows the motor position

### Pages 5+ Replica MDR Motor Positions

<img src="/images/s32/displaypg05.png" title="SERVO32 Display page 5+ Connected" alt="alt title"/>

- For each motor, shows the motor position and the Servo Channel Number

<img src="/images/s32/displaypg06.png" title="SERVO32 Display page 5+ Unconnected" alt="alt title"/>

- Channels without any connected MDRs will not display motor positions
