---
title: "Programming the lens maps"
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


## Set up SERVO32 for mapping

Using a USB Micro cable, connect the SERVO32 to your computer via USB. You can connect to SERVO32 with any serial terminal app to upload maps, check maps, and disable mapping.

### Windows

In Windows, look at Device Manager for the COM port and remember that number for later. 
Download a serial terminal, [PuTTY](https://www.putty.org) is a good option.

### Mac 
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


## Copy & Paste Table

In the Excel spreadsheet, on the ```Table``` tab, the first cell, A1 contains the table as a string of numbers, comma separated. Copy this cell and paste into the terminal.


# Checking lens maps

The best way to check is to set the primary lens at a mark, say T4. Then confirm all lenses are hitting the same mark. Check at a couple of marks.

## Booting up with maps

Once a map has been uploaded, it will be enabled, unless you disable it. When the device boots with an enabled lens map, it will always use that map, until you replace it or disable the maps.

If successful, you will see that mapping is now enabled.

Otherwise, you may see something like this, which tells you the map you are pasting is corrupt or malformed. If you see this, double check the spreadsheet. Start from a fresh copy of the mapping spreadsheet if needed.

```text
[Motor Map] Error: Primary Channel [1] array size [1] out of bounds (3 - 16)
[Motor Map] Error: Primary Channel [1] min array value != 0) )
[Motor Map] Error: Primary Channel [1] max array value != 65535) )
[Motor Map] Error: Motor Channel mismatch
[Motor Map] Error: motormap.txt with unexpected data length [574] != [575] expected
Mapping is disabled
```

If SERVO32 doesn't like the map for any reason, it will not enable mapping.
