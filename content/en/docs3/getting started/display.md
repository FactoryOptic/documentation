---
title: "QuickTC Display"
description: "QuickTC Display"
lead: "QuickTC Display Pages"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs3:
    parent: "getting started"
weight: 330
toc: true
---

## QuickTC Display

The QuickTC has an onboard OLED display that displays useful information. You can cycle thru the displays by pushing on the OLED display on the right side, closest to the BNC.

### Timecode Readout

<img src="/images/s32/displaypg01.png" title="QuickTC Display page 1" alt="alt title"/>

- Shows the current timecode in standard format
  - Drop Frame timecode will have a `;` between the `seconds` and `frames` numbers
- When battery is less than 20%, the battery percentage indicator will show up

### Timecode Freeze

- Will freeze the timecode readout at the moment you pressed the pushbutton OLED, so you can write it down or verbally confirm with a second device
- The frozen timecode will have a rectangular box around the timecode to indicate it's frozen
- After 30 seconds, the QuickTC will show live timecode

### User Bits

<img src="/images/s32/displaypg02.png" title="QuickTC Display page 2" alt="alt title"/>

- Displays the user bits from the timecode

### Timecode Frame Rate

<img src="/images/s32/displaypg03.png" title="QuickTC Display page 3" alt="alt title"/>

- Displays the video rate of the timecode in fps, for all standard SMPTE timecode formats
- Will display DF for drop frame. Otherwise, rate is non drop frame.

### Timecode signal amplitude

<img src="/images/s32/displaypg04.png" title="QuickTC Display page 4" alt="alt title"/>

- Displays the timecode signal peak-to-peak value, up to 4V peak-to-peak
- Indicates `SMPTE Valid` for range of SMPTE preferred amplitude range
- `SMPTE Low` and `SMPTE High` for out of SMPTE preferred amplitude range.
  - Note: most devices will operate with a higher than SMPTE preferred, but it is advisable to adjust the timecode generator or any devices that have variable gain to bring the signal into the `SMPTE Valid` range.

### Battery

<img src="/images/s32/displaypg05.png" title="QuickTC Display page 5+ Connected" alt="alt title"/>

- Shows the remaining battery charge life remaining
- When connected to USB, will show `USB`

### Firmware version

<img src="/images/s32/displaypg06.png" title="QuickTC Display page 5+ Unconnected" alt="alt title"/>

- Shows firmware version

### No Signal

- Displays no signal when a valid timecode signal is not connected

### Auto return to main readout

After 30 seconds, QuickTC will automatically return to the Timecode Readout
