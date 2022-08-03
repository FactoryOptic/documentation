---
title: "Save the lens map"
description: "Configure SERVO32"
date: 2020-10-06T08:49:31+00:00
lastmod: 2022-06-27
draft: false
images: []
menu:
  docs2:
    parent: "mapping"
weight: 330
toc: true
---

Now that you have tested the marks with your motor values (see [Choose lens mapping points]({{< relref "lensmapping" >}})) you will save the lens map.

## Saving a Lens Map in Excel

Make your lens maps using the provided Excel file as a template (email crew@factoryoptic.com to request this file if it is missing). Only one Excel file is needed for your setup. If you wish to have multiple setups, you should maintain one Excel file for each setup.

When using the Excel file, it is important to only use commands Copy & Paste, instead of Cut & Paste, to avoid corrupting the map export. Don't touch the non-yellow cells. Cells that are filled with yellow are intended for the user to fill out as follows:

### Replicated Motor ID (1-4)

This row lets you set which Primary motor (1-4) is mapped to the Replica motor (5-32). The Primary motor default is 1 and the Primary lens must be mapped. Replica lenses left blank will automatically map one to one with the Primary.

### Data Labels

This column has 16 cells, use as many as you need, starting at the top. The first cell is `End Stop` and should not be changed. Next add in your barrel mark list, which should be 1-14 values. The last cell on your list should also be `End Stop`

### Primary Motor Positions

Now enter your mapped motor positions for the marks. This should match up with the Data Labels column and the End Stops should be 0 at the top and 65535 for your last entry.

Note: Remember to choose the fastest lens for your Primary while using mixed lens models, as it has the widest range of iris marks.

### Replica Motor Positions

The Replica can be left blank if you want simple replication of the primary without modification. If you enter a map then the SERVO32 will use that map to determine the Replica motor position. The Replica map requirements are as follows:

- The first cell, which is the End Stop, must be 0
- The last cell, which is the End Stop, must be 65535
- All cells in between must have numbers
- Numbers must be increasing in value
- Duplicates are allowed, and usually only needed at the ends

Fill out all the mapped motor channels you will be using.

### Notes and Names

There is a row for lens model number as well as serial number. It is advised you fill that out to keep track of your maps.
