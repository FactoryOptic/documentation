---
title: "SERVO32 Display Settings"
description: "SERVO32 Display Settings"
date: 2020-10-06T08:49:31+00:00
lastmod: 2022-06-27
draft: false
images: []
menu:
  docs2:
    parent: "getting started"
weight: 330
toc: true
---

The SERVO32 has an onboard OLED display that displays useful information. You can cycle thru the displays using the side mounted rotary knob.

### All Pages

All pages will show the following on the top bar:

- SERVO32 Firmware Version (v0.1.10 in the image below)
- Input voltage provided either by the MDR on the primary port or by the power port (10.9 Vdc in the image). Note, this is the approximate voltage provided by either the 2 pin Lemo or by MDR #1, via the 4 pin Lemo. If both are connected, this will show the highest voltage of the 2 inputs.

### Page 1 - MDR Type

<img src="/images/s32/displaypg01.png" title="SERVO32 Display page 1" alt="alt title"/>

For each MDR port, this display will show the type of MDR connected. Unconnected ports will show --- (three dashes)

### Page 2 - MDR Firmware version

<img src="/images/s32/displaypg02.png" title="SERVO32 Display page 2" alt="alt title"/>

Each MDR port will show its firmware version.

### Page 3 MDR Motor Positions

<img src="/images/s32/displaypg03.png" title="SERVO32 Display page 3" alt="alt title"/>

This page shows an overview of all MDR ports with their motor positions.

### Page 4 Primary MDR Motor Positions

<img src="/images/s32/displaypg04.png" title="SERVO32 Display page 4" alt="alt title"/>

This page shows the primary port motor positions and channel number for each motor.

### Pages 5+ Replica MDR Motor Positions

<img src="/images/s32/displaypg05.png" title="SERVO32 Display page 5+ Connected" alt="alt title"/>

This page shows the replica port number and the motor positions and channel number for each motor.

<img src="/images/s32/displaypg06.png" title="SERVO32 Display page 5+ Unconnected" alt="alt title"/>

Channels without a connected MDR will not display motor positions.
