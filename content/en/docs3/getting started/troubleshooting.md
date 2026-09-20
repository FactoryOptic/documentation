---
title: "QuickTC Troubleshooting"
description: "What the QuickTC is telling you"
lead: ""
date: 2026-09-19T00:00:00+00:00
lastmod: 2026-09-19T00:00:00+00:00
draft: false
images: []
menu:
  docs3:
    parent: "getting started"
weight: 340
toc: true
---

## The display shows "No Signal" with timecode connected

- Check the **Timecode Signal** page. `Low` with a very small reading means the feed is not reaching the
  QuickTC: check the cable and the source.
- Hot signals read `High` and usually still decode; if the display stays on **No Signal**, bring the
  generator's level down.
- Timecode that is not SMPTE 12M linear timecode (for example MIDI timecode or a word clock) is not decoded.

## The frame rate shows "--"

Identification takes two full seconds of timecode. If it stays at `--`, the timecode is not counting normally
(a stopped generator, or a source that jumps).

## The unit keeps switching itself off

It is meant to: 15 s after power-on with no timecode, or 20 s after the signal is lost. Feed it timecode and
it stays on.

## The battery went flat in storage

Something woke the unit repeatedly. The usual causes are a timecode lead left connected to a live source,
or packing that presses the screen. Store the unit with nothing connected and nothing resting on the screen.
Switched off, the unit uses almost no power; charge it every six months if it sits unused.

## Reporting a problem

Quote the firmware version from the splash page (`QuickTC v2.0.0`) and the reading on the Timecode Signal page.
