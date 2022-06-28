---
title: "Lens Map Upload via Terminal"
description: "Configure SERVO32"
lead: "Upload map via TTY Terminal"
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

## Copy & Paste Table

In the Excel spreadsheet, on the ```Table``` tab, the first cell, A1 contains the table as a string of numbers, comma separated. Copy this cell and paste into the terminal.

If successful, you will see that mapping is now enabled.

Otherwise, you may see something like this, which tells you the map you are pasting is corrupt or malformed. If you see this, double check the spreadsheet. Start from a fresh copy of the mapping spreadsheet if needed.

```
2019-01-01 03:43:11.054: [Motor Map] Error: Primary Motor Channel [1] array size [1] out of bounds (3 - 16)
2019-01-01 03:43:11.058: [Motor Map] Error: Primary Motor Channel [1] min array value 2 != 0) )
2019-01-01 03:43:11.062: [Motor Map] Error: Primary Motor Channel [1] max array value 2 != 65535) )
2019-01-01 03:43:11.072: [Motor Map] Error: Motor Channel mismatch 2 != 65536
2019-01-01 03:43:11.180: [Motor Map] Error: motormap.txt with unexpected data length [574] != [575] expected
Mapping is disabled
```

If SERVO32 doesn't like the map for any reason, it will not enable mapping.