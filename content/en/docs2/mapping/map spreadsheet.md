---
title: "Lens Map Spreadsheet"
description: "Configure SERVO32"
lead: "Configure SERVO32"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs2:
    parent: "mapping"
weight: 330
toc: true
---

## Excel

The lens maps need to be stored in Excel, using the provided Excel file.

IMPORTANT: Avoid cutting and pasting inside the map as this will move cells around and can corrupt the map export. Use Copy & Paste instead. Then go back and clear the cells if needed.

### Choosing Primary Lens

Choosing the primary lens is important if you have mis-matched lens setup. Ideally, choose the lens with the most lens marks. This will give the mapped lenses the full range.

### Choosing Primary MDR

Any MDR will work as a primary.

Avoid MDR-2 if possible, as the update rate is not as fast.

If you have mixed MDR-3 and MDR-4 in your setup and only mapping iris, best to choose the MDR-4 as your primary to make maximum use of your motor ports.

### Filling out the spreadsheet

#### Motor Map Tab

This is the first tab on the sheet and contains your blank map.

Generally the primary lens must be mapped at a minimum. Replica lenses left blank are considered without maps will automatically map one to one with the primary.

Sections in yellow are for the user to fill out. Don't touch the non-yellow cells.

##### Replicated Motor ID (1-4)

This row lets you set which primary motor (1-4) is mapped to the replica motor (5-32). Default is 1.

##### Data Labels

This column has 16 cells, use as many as you need, starting at the top.

The first cell is `End Stop` and should not be changed.

Next add in your barrel mark list, which should be 1-14 values.

The last cell on your list should also be `End Stop`

##### Primary Motor Positions

Now enter your mapped motor positions for the marks. This should match up with the Data Labels column and the End Stops should be 0 at th top and 65535 for your last entry.

##### Replica Motor Positions

The Replica can be left blank if you want simple replication of the primary without modification.

If you enter a map, then the SERVO32 will use that map to determine the Replica motor position.

The Replica map requirements are as follows

- The first cell, which is the End Stop, must be 0
- The last cell, which is the End Stop, must be 65535
- All cells in between must have numbers
- Numbers must be increasing in value
- Duplicates are allowed, and usually only needed at the ends

Fill out all motor channels you will be using as mapped.

#### Notes and names

There is a row for lens model number as well as serial number. It is advised you fill that out to keep track of your maps.
