---
title: "Configuration"
description: "Configure Syncro-Link Mark Zero."
lead: "Configure Syncro-Link Mark Zero."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "gettingstarted"
weight: 310
toc: true
---

![sdcard](/images/sdcard.png)

On the side of the SYNCRO-LINK is an microSD slot with a factory installed memory card.

The device should contain a card already, but if you need to replace, it should be formatted as FAT32 and can be up to 32GB.

In the SD card is a folder named 'config'. Inside this folder is the config files for the network.

A fresh copy of the SD Card can be found [here](https://github.com/FactoryOptic/syncrolinkSDCard)

```plaintext
sd card
|   readme.md #this file
+---config
    |---dest.txt #required
    |---NETWORK.LOG #optional, will be created if missing and appended to if exists
    |---network.txt #required
    |---ntp.txt #optional
    |---stream.txt #optional
```

### network.txt

This is the config file for the SYNCRO-LINK network settings.

The file consists of the following 5 lines and can be edited with any text editor.

- Line 1 - IP address for SYNCRO-LINK
- Line 2 - Network subnet
- Line 3 - Network DHCP server or Router IP address
- Line 4 - DNS server
- Line 5 - static or DHCP

In the case of DHCP, it will initially ignore lines 1-4 and attempt to use them if DHCP fails.

DHCP can take up to 60 seconds on power-up, so it is recommended that static IP is used.

Below is an example network.txt file

```plaintext
192.168.1.100
255.255.255.0
192.168.1.1
192.168.1.1
static
```

### dest.txt

This is the config file for the destination server, which is the machine running the Unreal Engine plugin or other software that is waiting to accept UDP packets.

The file consists of the following 2 lines and can be edited with any text editor.

- Line 1 - Destination IP address for the server
- Line 2 - UDP port on server to send to (1024 - 65535)

Below is an example dest.txt file

```plaintext
192.168.1.200
20000
```

Note: for broadcasting to several Unreal Engine LiveLink servers, make sure all UE machines are on the same subnet.

For example, if you have 4 machines

- 192.168.8.20
- 192.168.8.100
- 192.168.8.200
- 192.168.8.230

Just set the dest.txt to 192.168.8.255 and it will broadcast to all

### ntp.txt (optional)

The SYNCRO-LINK doesn't contain a battery backed up real time clock, but can connect to an NTP server for getting updated time of day upon powerup. This is not required for operation, but for the LOG file timestamp.

If ntp.txt file doesn't exist, SYNCRO-LINK will attempt to obtain time from pool.ntp.org. If SYNCRO-LINK is on an air-gapped network or doesn't have internet access (recommended configuration), simply setup any linux machine (sudo apt install ntp, then be sure firewall port 123/udp is open) to be an NTP server and use that IP address, if needed.

Note: If the request for NTP time fails, SYNCRO-LINK will default to Jan 1, 2019.

The file consists of the following 1 line and can be edited with any text editor.

Line 1 - IP address for NTP server
Below is an example ntp.txt file

```plaintext
192.168.1.10
```

### stream.txt (optional)

This is the config file for user selecting the streaming format.

If file doesn't exist, SYNCRO-LINK will default to F3.

The file consists of one line and can be edited with any text editor.

Line 1 - hex value of streaming format
Below is an example stream.txt file

```plaintext
F3
```
