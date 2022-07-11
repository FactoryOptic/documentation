---
title: "Program the lens maps"
description: "Configure SERVO32"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs2:
    parent: "mapping"
weight: 360
toc: true
---




# Connect SERVO32 to the computer

Using a USB Micro cable, connect the SERVO32 to your computer via USB. You can connect to SERVO32 with any serial terminal app to upload maps, check maps, and disable mapping.

#### Windows

In Windows, look at Device Manager for the COM port and remember that number for later. 
Download a serial terminal, [PuTTY](https://www.putty.org) is a good option.

#### Mac 
In Mac, open Terminal and type

```ls /dev/tty.*```

It will respond with a list of devices, look for

```/dev/tty.usbserial-132150```

Download a serial terminal, [SerialTools](https://apps.apple.com/us/app/serialtools/id611021963) is a good option. 


### Serial Terminal Settings (115200/8-N-1)

- Baud Rate: 115200
- Data Bits: 8
- Parity: None
- Stop Bits: 1

### Console Commands

When connected, type ? and hit enter, it should respond with info on mapping, as well as which MDRs are connected.

```text
Mapping is disabled
MDR[01] = MDR-3
MDR[02] = MDR-2
MDR[03] =
MDR[04] =
MDR[05] =
MDR[06] =
MDR[07] =
MDR[08] =
Type 'h' for help
```

For a list of commands, type ```h```

### Booting up with maps

Once a map has been uploaded, it will be enabled, unless you disable it. When the device boots with an enabled lens map, it will always use that map, until you replace it or disable the maps.


# Upload Map using Excel 

In order to upload the map to the SERVO32 we can use Excel Data Streamer. This is currently only supported with Excel 2016 for Windows. Follow these [instructions](https://support.microsoft.com/en-us/office/enable-the-data-streamer-add-in-70052b28-3b00-41e7-8ab6-8a9f142dffeb) to enable the add-in. Once your map is built in Excel, connect Excel to SERVO32 via Data Streamer.

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



# Upload maps via Terminal

In the Excel spreadsheet, on the ```Table``` tab, the first cell, A1 contains the table as a string of numbers, comma separated. Copy this cell and paste into the terminal. Do not use Cut or the mapping will be corrupted. If successful, you will see that mapping is now enabled.

IF you may see something like this the map you are pasting is corrupt or malformed. Double check the spreadsheet and start from a fresh copy of the mapping spreadsheet if needed.

```text
[Motor Map] Error: Primary Channel [1] array size [1] out of bounds (3 - 16)
[Motor Map] Error: Primary Channel [1] min array value != 0) )
[Motor Map] Error: Primary Channel [1] max array value != 65535) )
[Motor Map] Error: Motor Channel mismatch
[Motor Map] Error: motormap.txt with unexpected data length [574] != [575] expected
Mapping is disabled
```

If SERVO32 doesn't like the map for any reason, it will not enable mapping.



# Testing the map 

Once the map has been programmed we can check that it works. Set the primary lens at a mark, say T4. Then confirm all lenses are hitting the same mark. Check at a couple of marks.


