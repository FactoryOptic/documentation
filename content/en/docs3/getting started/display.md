---
title: "QuickTC Display"
description: "QuickTC Display"
lead: ""
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

## QuickTC Display Modes

The QuickTC has an onboard OLED display that displays useful information. You can cycle through the modes on the display by pushing on the OLED display on the right side, closest to the BNC port. Some uses of the display on the QuickTC include:

- Quickly confirm you are receiving timecode
- Freeze timecode to read it out and verbally confirm it over intercom or walkie talkie
- Read out the user bits
- Confirm framerate or closest match, including drop frame and non drop frame
- Check if you have a valid timecode signal

### Auto return to Timecode Readout

After 30 seconds in any other mode, QuickTC will automatically return to the Timecode Readout mode

### Timecode Readout

<img src="/images/qtc/qtcpg1.jpg" title="QuickTC Display page 1" alt="alt title"/>

- Shows the current timecode in standard format
  - Drop frame timecode will display a `;` between the seconds and frames numbers
- When battery is less than 20%, the battery percentage indicator will show up
- After 30 seconds in any other mode, QuickTC will automatically return to this mode

### Timecode Freeze

<img src="/images/qtc/qtcpg2.jpg" title="QuickTC Display page 2" alt="alt title"/>

- Will freeze the timecode readout at the moment the pushbutton OLED is pressed
  - The frozen timecode will have a rectangular box around the timecode to indicate it is frozen

### User Bits

<img src="/images/qtc/qtcpg3.jpg" title="QuickTC Display page 3" alt="alt title"/>

- Displays the user bits from the timecode

### Timecode Framerate

<img src="/images/qtc/qtcpg4.jpg" title="QuickTC Display page 4" alt="alt title"/>

- Displays the video rate of the timecode in fps
- Will display DF for drop frame. Otherwise, rate is non drop frame.

### Timecode Signal

<img src="/images/qtc/qtcpg5.jpg" title="QuickTC Display page 5" alt="alt title"/>

- The first line displays the timecode signal peak-to-peak value, up to 4V peak-to-peak
- The second line displays `SMPTE Valid` for the SMPTE preferred amplitude range and `SMPTE Low` or `SMPTE High` when out of SMPTE preferred amplitude range
  - Note: most devices will operate with a higher amplitude than SMPTE preferred, which will display as `SMPTE High`. It is advisable to adjust the timecode generator or any devices that have variable gain to bring the signal amplitude down into the `SMPTE Valid` range.

### Battery

<img src="/images/qtc/qtcpg6.jpg" title="QuickTC Display page 6" alt="alt title"/>

- Displays the remaining battery charge
- When connected to USB will display `USB`

### Firmware version

<img src="/images/qtc/qtcpg7.jpg" title="QuickTC Display page 7" alt="alt title"/>

- Displays QuickTC firmware version

### No Signal

- Displays no signal when there is no valid timecode signal
