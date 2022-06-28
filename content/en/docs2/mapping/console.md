---
title: "Console"
description: "Interface to SERVO32 via TTY Console"
lead: "Interface to SERVO32 via TTY Console"
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

## Connect SERVO32 to computer console
Using a USB Micro cable, connect the SERVO32 to your computer via USB.

### Determine Serial port

#### Windows
In Windows, look at Device Manager for the COM port and remember that number for later

#### Mac
In MAC, open terminal and type

``` ls /dev/tty.*```

It will respond with a list of devices, look for

```/dev/tty.usbserial-132150```

## Upload Map using Serial Console
You can connect to SERVO32 with any serial terminal app to upload maps, check maps, and disable mapping.

Download and open your favorite serial terminal. For Mac, [SerialTools](https://apps.apple.com/us/app/serialtools/id611021963) is a good option. For Windows, [PuTTY](https://www.putty.org) is a good option.

### Serial Terminal Settings (115200/8-N-1)
- Baud Rate: 115200
- Data Bits: 8
- Parity: None
- Stop Bits: 1

### Console Commands
When connected, type ? and hit enter, it should respond with info on mapping, as well as which MDRs are connected.

```
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