---
title: "Lens Map Upload via Excel"
description: "Configure SERVO32"
lead: "Upload Map using Excel"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs2:
    parent: "mapping"
weight: 350
toc: true
---

## Upload Map using Excel Data Streamer Map

Data Streamer can be used to connect to SERVO32 and upload the map. Currently only supported with Excel 2016 for Windows.

### Enable Data Streamer Add-in

Follow these [instructions](https://support.microsoft.com/en-us/office/enable-the-data-streamer-add-in-70052b28-3b00-41e7-8ab6-8a9f142dffeb) to enable the add-in

### Connect Data Streamer to SERVO32

Once your map is built in Excel, connect Excel to SERVO32 via Data Streamer.

#### Connect Data Streamer

In Excel, under ```Data Streamer``` select ```Connect a Device``` and select the COM port of SERVO32, which typically says ```USB Serial Device (COM__)```.

#### Configure Data Streamer

In Excel, under ```Data Streamer``` select ```Advanced``` which will open the Advanced - Data Streamer dialog. Under the Settings tab, change the following

- COM Port - should be set already, no need to change
- Data Bits: 8
- Parity: None
- Baud Rate: 115200
- Handshake: None

Hit apply

#### Upload map

At this point, your map has been uploaded.

If you edit any values in the table, it will immediately re-upload the new map on every edit. This is a great way to tweak your points if they are slightly off.

### Disconnect Device

When you are done, simply hit ```Disconnect Device``` and remove the cable.
