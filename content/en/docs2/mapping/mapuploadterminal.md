---
title: "Program the lens maps"
description: "Configure SERVO32"
date: 2020-10-06T08:49:31+00:00
lastmod: 2022-06-27
draft: false
images: []
menu:
  docs2:
    parent: "mapping"
weight: 350
toc: true
---

Requirements

- Computer (Windows/Mac/Linux) with USB Type-A port
- Microsoft Excel
- USB 2.0 Cable (Type-A to Micro-B)

## Connect SERVO32 to the Computer

Using a USB cable, connect the SERVO32 to your computer's USB port. You can connect to SERVO32 with any serial terminal app to upload maps, check maps, and disable mapping.

### Windows

In Windows, look at Device Manager for the COM port and remember that number for later.
Download a serial terminal, [PuTTY](https://www.putty.org) is a good option.

### Mac

In Mac, open Terminal and type

`ls /dev/tty.*`

It will respond with a list of devices, look for

`/dev/tty.usbserial-132150`

Download a serial terminal, [SerialTools](https://apps.apple.com/us/app/serialtools/id611021963) is a good option.

### Linux

In Linux, depending on your distro, you may find your serial port device using

`dmesg | grep tty`

[Minicom](https://help.ubuntu.com/community/Minicom) can be used with command line and [CuteCom](http://cutecom.sourceforge.net) is a GUI option.

## Serial Console Terminal

### Serial Port Settings

Depending on your Serial Terminal, you will have to set the following settings.

- The important settings 115200/8-N-1
  - Baud Rate: 115200
  - Data Bits: 8
  - Parity: None
  - Stop Bits: 1
- Unimportant settings - ignore, don't enable, or leave off
  - Local Echo - Leave this off
  - Flow control - None
  - CR/LF - Not needed
  - RAW - Don't enable

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

For a list of commands, type `h`

## Working with Lens Mapping - Excel Data Streamer (Windows Only)

Excel has an optional add-in called Data Streamer, but this is only available for Windows. It automates the map updating process, but is not necessary for uploading maps.

### Enable Data Streamer Add-In

In order to upload the map to the SERVO32 we can use Excel Data Streamer. This is currently only supported with Excel 2016 for Windows. Follow these [instructions](https://support.microsoft.com/en-us/office/enable-the-data-streamer-add-in-70052b28-3b00-41e7-8ab6-8a9f142dffeb) to enable the add-in. Once your map is built in Excel, connect Excel to SERVO32 via Data Streamer.

#### Connect Data Streamer

In Excel, under `Data Streamer` select `Connect a Device` and select the COM port of SERVO32, which typically says `USB Serial Device (COM__)`. Use the COM port number from the Device Manager.

#### Configure Data Streamer

In Excel, under `Data Streamer` select `Advanced` which will open the Advanced - Data Streamer dialog. Under the Settings tab, change the following then hit apply:

- COM Port - should be set already, no need to change
- Data Bits: 8
- Parity: None
- Baud Rate: 115200
- Handshake: None

### Upload Map

At this point, your map will have been uploaded automatically when you connect with Data Streamer.

If you edit any values in the table, it will immediately and automatically re-upload the new map on every edit. This is a great way to tweak your points if they are slightly off.

### Disconnect Device

When you are done, simply hit `Disconnect Device` and remove the cable.

## Using Terminal to Upload Map (Windows, Mac & Linux)

### Copy & Paste Map From Spreadsheet to Terminal

In the Excel spreadsheet, on the `Table` tab, the first cell, A1 contains the table as a string of numbers, comma separated. Copy this cell and paste into the terminal. Do not use Cut or the mapping will be corrupted. If successful, you will see that mapping is now enabled.

If you see any of these types of errors shown below, the map you are pasting is corrupt or malformed. Double check the spreadsheet and start from a fresh copy of the mapping spreadsheet if needed.

```text
[Motor Map] Error: Primary Channel [1] array size [1] out of bounds (3 - 16)
[Motor Map] Error: Primary Channel [1] min array value != 0) )
[Motor Map] Error: Primary Channel [1] max array value != 65535) )
[Motor Map] Error: Motor Channel mismatch
[Motor Map] Error: motormap.txt with unexpected data length [574] != [575] expected
Mapping is disabled
```

If SERVO32 doesn't like the map for any reason and throws one of these errors, mapping will be disabled.

## Testing the Map

Once the map has been uploaded it should be automatically enabled and active. We can now confirm that it is working. Using the hand-unit set the primary lens at a barrel mark, say T4. Then visually confirm all lenses are hitting the same barrel mark. Repeat at a few barrel marks in the range of your map to confirm it's working.

## Booting Up with Mapping Enabled

Once a map has been uploaded it will be enabled unless you disable it. When the device boots with an enabled lens map it will always use that map until you replace it or disable the maps.
