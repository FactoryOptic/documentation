---
title: "QuickTC Display"
description: "QuickTC Display"
lead: ""
date: 2026-09-19T00:00:00+00:00
lastmod: 2026-09-19T00:00:00+00:00
draft: false
images: []
menu:
  docs3:
    parent: "getting started"
weight: 330
toc: true
---

## QuickTC Display Modes

The QuickTC has an onboard OLED display. Cycle through the pages by pressing on the OLED display on the
right side, closest to the BNC port. The pages let you:

- Confirm you are receiving timecode
- Freeze timecode to read it out over intercom or radio
- Read the user bits
- Confirm the frame rate, including drop frame
- Check the timecode signal level
- Check the battery

### Auto return to Timecode Readout

After 30 seconds without a button press, QuickTC returns to the Timecode Readout page (or to **No Signal**
when no timecode is connected).

### Timecode Readout

<img src="/images/qtc/v2/01_timecode.png" title="Timecode readout" alt="Timecode readout"/>

- Shows the incoming timecode as hours : minutes : seconds : frames
- Drop-frame timecode is marked with a `;` between seconds and frames:

<img src="/images/qtc/v2/01_timecode_df.png" title="Drop-frame timecode" alt="Drop-frame timecode"/>

- Below 20 % battery a gauge appears in the top-right corner:

<img src="/images/qtc/v2/01_timecode_lowbatt.png" title="Timecode with low-battery gauge" alt="Timecode with low-battery gauge"/>

### Timecode Freeze

<img src="/images/qtc/v2/02_freeze.png" title="Frozen timecode" alt="Frozen timecode"/>

- Freezes the readout at the moment the button is pressed. The frame around the numbers means "frozen".
- Press again to move on; the readout resumes live on the next lap.

### User Bits

<img src="/images/qtc/v2/03_userbits.png" title="User bits" alt="User bits"/>

- The eight user-bit groups as hexadecimal digits, group 8 on the left through group 1 on the right (the
  same order as earlier QuickTC firmware).

### Timecode Framerate

<img src="/images/qtc/v2/04_framerate_25.png" title="Frame rate 25" alt="Frame rate 25"/>

- 23.98 and 24, and 29.97 and 30, are shown as pairs:

<img src="/images/qtc/v2/04_framerate_2997_df.png" title="Frame rate 29.97/30 drop frame" alt="Frame rate 29.97/30 drop frame"/>

- `DF` is shown for drop-frame timecode; otherwise the rate is non-drop.
- `--` is shown for the first two seconds after timecode appears, while the rate is being identified:

<img src="/images/qtc/v2/04_framerate_unknown.png" title="Frame rate not yet known" alt="Frame rate not yet known"/>

### Timecode Signal

<img src="/images/qtc/v2/05_ltc_valid.png" title="Timecode signal level" alt="Timecode signal level"/>

- The first line shows the timecode signal amplitude, peak to peak.
- The second line rates it against the SMPTE preferred range: `Valid`, `Low`, or `High`.

<img src="/images/qtc/v2/05_ltc_high.png" title="Signal too high" alt="Signal too high"/>

- Most generators run hotter than SMPTE prefers and will read `High`. QuickTC still decodes; if a device has
  an output-level control, bringing it into the `Valid` range is the better setting.

### Battery

<img src="/images/qtc/v2/06_battery_45.png" title="Battery page" alt="Battery page"/>

- Remaining charge in 5 % steps, with the gauge.
- `usb` appears while a USB cable supplies power:

<img src="/images/qtc/v2/06_battery_usb.png" title="Battery page while charging" alt="Battery page while charging"/>

### Firmware version

<img src="/images/qtc/v2/07_splash.png" title="Splash and firmware version" alt="Splash and firmware version"/>

- Shown for two seconds at power-on and available as a page. Quote this version when reporting a problem.

### No Signal

<img src="/images/qtc/v2/09_nosignal.png" title="No signal" alt="No signal"/>

- Shown when no valid timecode is present. The LED double-blinks about once a second.

### Powering down

<img src="/images/qtc/v2/10_sleep_nosignal.png" title="Powering down after loss of signal" alt="Powering down"/>

- Shown for a moment before the unit switches itself off (see *Powering Off* under QuickTC Setup).

<img src="/images/qtc/v2/10_sleep_lowbattery.png" title="Powering down on low battery" alt="Powering down, low battery"/>

- At 5 % battery the unit switches off to protect the cell and wakes only for a USB cable.
