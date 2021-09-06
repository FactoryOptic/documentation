---
title: "Disguise OSC Protocol"
description: "OSC packet for Disguise"
lead: "Stream focus and zoom positions to Disguise using OSC"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "networkinterface"
weight: 470
toc: true
---

### OSC

The OSC packet will be sent as a bundle in the following format

    d3/camera/cam1/focus:0.0
    d3/camera/cam1/zoom:0.0

The values will be as follows

    zoom focal length (float) in mm
    focus distance (float) in cm

### Configure Syncro-Link Mark-Zero for streaming to Disguise with OSC

On the micro-SD card, there is a config file for user selecting the streaming format.

If file doesn't exist, you need to create the file, naming it 'stream.txt'

The file consists of one line and can be edited with any text editor.

Line 1 - hex value of streaming format
Below is an example stream.txt file

    0D

To set the camera ID number, create or edit the file 'cameraid.txt and edit the 1st line to set the camera ID 1-9 in decimal or 00-FF in hex.

    01

Be sure to setup dest.txt for destination IP and port that is receiving packets, see  [configuration](/docs/gettingstarted/configuration/)

Note: Syncro-Link must be on firmware v0.3.3 or later
