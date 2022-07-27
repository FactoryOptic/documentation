---
title: "LONET"
description: "LONET Streaming Protocol"
lead: "Stream XD Data directly to Unreal, via Live Link using the LONET open source plugin"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "networkinterface"
weight: 410
toc: true
---

## Syncro-Link Mark Zero uses LOLED VIRTUAL's open source Unreal Plugin

The pre-compiled plugins can be found on [loledvirtual](https://loledvirtual.com/documentation/software-downloads/unreal-plugin-releases) and the source can be found on [Github](https://github.com/MadlyFX/LONET-2-LiveLink-Plugin).

### Unreal Engine 4.27 Open Source Plugin from LOLED

- Download the latest plugin (1.7.0 or newer) from LOLED VIRTUAL: [https://loledvirtual.com/documentation/software-downloads/files](https://loledvirtual.com/documentation/software-downloads/files) under /Unreal Plugin/4.27/

- See [Unreal](/docs/gettingstarted/unreal/) for how to setup and configure

### Unreal Engine 5.0 Open Source Plugin from LOLED

-  Download the latest plugin (2.4.1 or newer) from LOLED VIRTUAL: [https://loledvirtual.com/documentation/software-downloads/files](https://loledvirtual.com/documentation/software-downloads/files) under /Unreal Plugin/5.0/

### Configure SYNCRO-LINK Mark-Zero for streaming to LONET plugin using Live Link

On the micro-SD card, there is a config file for user selecting the streaming format.

If file doesn't exist, SYNCRO-LINK will default to F3, which is correct for LONET.

The file consists of one line and can be edited with any text editor.

Line 1 - hex value of streaming format
Below is an example stream.txt file

```plaintext
F3
```

Be sure to setup dest.txt for destination IP and port that is receiving packets, see  [configuration]({{< relref "configuration.md" >}})
