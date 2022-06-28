---
title: "FreeD Protocol"
description: "FreeD protocol"
lead: "Stream FreeD packets to any application or use Live Link plugin"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "networkinterface"
weight: 450
toc: true
---

### FreeD

With XD or Cooke /i lenses, SYNCRO-LINK will send FreeD packets containing zoom, focus and iris as scaled integers as follows

    zoom focal length (24 bits) as focal length in mm x 64
    focus distance (24 bits) as focus distance in mm x 64
    iris stop (12 bits) as stop x 10

For example, FreeD will send zoom as 1792 when actual focal length is 28mm.

All camera position tracking fields will be sent as zeros.

### Configure SYNCRO-LINK Mark-Zero for streaming FreeD

On the micro-SD card, there is a config file for user selecting the streaming format.

If file doesn't exist, you need to create the file, naming it 'stream.txt'

The file consists of one line and can be edited with any text editor.

Line 1 - hex value of streaming format, which is D1 for FreeD

Below is an example stream.txt file

    D1

Be sure to setup dest.txt for destination IP and port that is receiving packets, see  [configuration](/docs/gettingstarted/configuration/)

Note: SYNCRO-LINK must be on firmware v0.3.2 or later
