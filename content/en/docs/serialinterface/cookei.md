---
title: "Cooke /i Interface"
description: "Cooke /i Interface"
lead: "Connect to lenses with Cooke /i interface"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "serialinterface"
weight: 450
toc: true
---

### Cooke /i & /i squared

Cooke metadata collected by Syncro-Link will include the following CORE metadata dynamic values:

    Focal Length
    Focus Distance
    Aperture
    Hyperfocal distance
    Near focus distance
    Far focus distance
    Entrance pupil position
    Horizontal field of view, based on 35mm film reference frame

Static values include

    Lens serial number
    Lens owner data
    Lens firmware version
    Lens name of manufacturer
    Lens name (typically the lens model #)

### Zeiss eXtended Data (XD) based on Cooke /i

XD data will include all the metadata above and adds the following dynamic values:

    Lens Distortion, converted to OpenCV coefficients k1, k2, p1, p2, k3, k4, k5 & k6
    Lens shading as a function of image height

### Cooke /i cubed

The newest Cooke /i cubed data now includes the following:

    Anamorphic squeeze factor
    Shading data
    Distortion data

### Interface

Syncro-Link connects to lenses with external Cooke /i metadata ports. Lenses with Cooke /i metadata will have a Lemo 4-pin connector.
