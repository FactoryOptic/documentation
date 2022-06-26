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

### Unreal Engine 4.27 Plugin

- Download the latest plugin (1.7.0 or newer) from LOLED VIRTUAL'S Github site: [https://loledvirtual.com/documentation/docs/unrealreleases/](https://loledvirtual.com/documentation/docs/unrealreleases/)
- See [Unreal](/docs/gettingstarted/unreal/) for how to setup and configure

### Configure Syncro-Link Mark-Zero for streaming to LONET

On the micro-SD card, there is a config file for user selecting the streaming format.

If file doesn't exist, SYNCRO-LINK will default to F3, which is correct for LONET.

The file consists of one line and can be edited with any text editor.

Line 1 - hex value of streaming format
Below is an example stream.txt file

```plaintext
F3
```

Be sure to setup dest.txt for destination IP and port that is receiving packets, see  [configuration](/docs/gettingstarted/configuration/)
