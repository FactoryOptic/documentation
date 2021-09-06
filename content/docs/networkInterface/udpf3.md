---
title: "UDP F3 Streaming Protocol"
description: "UDP F3 Streaming Protocol"
lead: "F3 protocol is open, so you can use with LONET or write your own UDP interface"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "networkinterface"
weight: 430
toc: true
---

### F3 Protocol

SYNCRO-LINK 0xF3 STREAMING DATAGRAM FORMAT
Codeveloped with LOLED Virtual for use with their open source Unreal Engine Plugin

UDP Destination Port Number: user configurable
UDP Payload: Fields
UDP Data format with comma delimiters, variable length, ASCII except field 01

    Field 01 0xF3 Packet identifier
    Field 02 Lens Name
    Field 03 Focus Distance in mm
    Field 04 Aperture Value
    Field 05 Focal Length in mm
    Field 06 Entrance Pupil in mm (signed value)
    Field 07 Hyperfocal Distance in mm
    Field 08 Near Focus Distance in mm
    Field 09 Far Focus Distance in mm
    Field 10 Horizontal Field of View in degrees

    Field 11 Image Height 0 in mm
    Field 12 Image Height 1 in mm
    Field 13 Image Height 2 in mm
    Field 14 Image Height 3 in mm
    Field 15 Image Height 4 in mm
    Field 16 Image Height 5 in mm
    Field 17 Image Height 6 in mm

    Field 18 Lens Shading/Vignetting 0 in %
    Field 19 Lens Shading/Vignetting 1 in %
    Field 20 Lens Shading/Vignetting 2 in %
    Field 21 Lens Shading/Vignetting 3 in %
    Field 22 Lens Shading/Vignetting 4 in %
    Field 23 Lens Shading/Vignetting 5 in %
    Field 24 Lens Shading/Vignetting 6 in %

    Field 25 OpenCV Radial Distortion Coefficient k1 as float
    Field 26 OpenCV Radial Distortion Coefficient k2 as float
    Field 27 OpenCV Tangential Distortion Coefficient p1 as float
    Field 28 OpenCV Tangential Distortion Coefficient p2 as float
    Field 29 OpenCV Radial Distortion Coefficient k3 as float
    Field 30 OpenCV Radial Distortion Coefficient k4 as float
    Field 31 OpenCV Radial Distortion Coefficient k5 as float
    Field 32 OpenCV Radial Distortion Coefficient k6 as float
    Field 33 OpenCV Cx as float
    Field 34 OpenCV Cy as float

    Field 35 Timecode HH:MM:SS:FF
    Field 36 Dropframe (0=non-dropframe, 1=dropframe)
    Field 37 Video Framerate (0,23.98,24,25,29.97,30,47.95,48,50,59.94,60)
    Field 38 Lens Manufacturer
    Field 39 Lens Serial Number
    Field 40 Lens Owner
    Field 41 Lens Firmware Version

Example UDP Packet Data

    0000   30 24 32 97 ac 2a 04 e9 e5 0e 5e 2c 08 00 45 00   0$2..*....^,..E.
    0010   01 45 50 8d 00 00 40 11 a4 5e c0 a8 01 ad c0 a8   .EP...@..^......
    0020   01 bf 22 b8 4e 20 01 31 9e 49 f3 2c 50 72 65 6d   ..".N .1.I.,Prem
    0030   69 73 74 61 32 38 2d 31 30 30 6d 6d 54 32 2e 39   ista28-100mmT2.9
    0040   20 46 2c 33 30 35 33 2c 33 2e 38 39 2c 34 39 2e    F,3053,3.89,49.
    0050   39 2c 37 39 2c 35 36 32 37 35 2c 32 39 31 38 2c   9,79,56275,2918,
    0060   33 32 30 32 2c 34 33 2e 32 2c 30 2c 37 2c 31 31   3202,43.2,0,7,11
    0070   2e 36 2c 31 36 2e 32 2c 31 38 2e 35 2c 32 30 2e   .6,16.2,18.5,20.
    0080   38 2c 32 33 2e 32 2c 31 30 30 2c 39 38 2e 32 2c   8,23.2,100,98.2,
    0090   39 35 2e 31 2c 39 30 2e 32 2c 38 32 2e 36 2c 36   95.1,90.2,82.6,6
    00a0   36 2e 34 2c 34 38 2e 35 2c 31 2e 33 33 35 30 65   6.4,48.5,1.3350e
    00b0   2d 30 32 2c 31 2e 31 33 32 30 65 2d 30 32 2c 30   -02,1.1320e-02,0
    00c0   2e 30 30 30 30 65 2b 30 30 2c 30 2e 30 30 30 30   .0000e+00,0.0000
    00d0   65 2b 30 30 2c 31 2e 32 32 38 31 65 2d 30 33 2c   e+00,1.2281e-03,
    00e0   30 2e 30 30 30 30 65 2b 30 30 2c 30 2e 30 30 30   0.0000e+00,0.000
    00f0   30 65 2b 30 30 2c 30 2e 30 30 30 30 65 2b 30 30   0e+00,0.0000e+00
    0100   2c 35 2e 30 30 30 30 65 2d 30 31 2c 35 2e 30 30   ,5.0000e-01,5.00
    0110   30 30 65 2d 30 31 2c 30 37 3a 31 35 3a 31 33 3a   00e-01,07:15:13:
    0120   34 34 2c 30 2c 36 30 2c 46 55 4a 49 4e 4f 4e 2c   44,0,60,FUJINON,
    0130   46 30 38 30 30 30 30 30 30 2c 46 55 4a 49 46 49   F08000000,FUJIFI
    0140   4c 4d 20 43 6f 72 70 6f 72 61 74 69 6f 6e 2c 36   LM Corporation,6
    0150   2e 35 32                                          .52

Example UDP Payload (ASCII)

    ó,Premista28-100mmT2.9 F,3053,3.89,49.9,79,56275,2918,3202,43.2,0,7,11.6,16.2,18.5,20.8,23.2,100,98.2,95.1,90.2,82.6,66.4,48.5,1.3350e-02,1.1320e-02,0.0000e+00,0.0000e+00,1.2281e-03,0.0000e+00,0.0000e+00,0.0000e+00,5.0000e-01,5.0000e-01,07:15:13:44,0,60,FUJINON,F08000000,FUJIFILM Corporation,6.52

Example Decoded Values

    Lens Name = Premista28-100mmT2.9 F
    Focus Distance = 10’-0.2” [3053 mm]
    T-Stop = 3.89
    Focal Length = 49.9 mm
    Entrance Pupil = 3.11" [79 mm]
    Hyperfocal Distance = 185' [56275 mm]
    Near Focus Distance = 9'-7" [2918 mm]
    Far Focus Distance = 10’-6” [3202 mm]
    HFOV = 43.2° (See note 1)
    Heights Array = 0, 7mm, 11.6mm, 16.2mm, 18.5mm, 20.8mm, 23.2mm
    Shading/Vignetting Array = 100%, 98.2%, 95.1%, 90.2%, 82.6%, 66.4%, 48.5% (see note 2)
    OpenCV Values: k1 = 1.3350e-02, k2 = 1.1320e-02, p1 = 0, p2 = 0,
    k3 = 1.2281e-03, k4 = 0, k5 = 0, k6 = 0, cx = 0.5, cy = 0.5 (see note 3)
    Timecode: 07:15:13:44
    Dropframe: 0 = non-dropframe
    Framerate: 60
    Lens Manufacturer: FUJINON
    Lens Serial Number: F08000000
    Lens Owner: FUJIFILM Corporation
    Lens Firmware: 6.52

Notes

1. Entrance Pupil for Zeiss and Fujinon lenses is measured from the front face of the lens.

2. Per Cooke /i format, the reference frame size used for the Horizontal Field of View is based on the dimensions for 35mm film (full aperture) and is specified as 24.892mm. See https://www.cookeoptics.com/s/technicaldocumentation.html

3. The lens shading/vignetting and image height values create a curve such that the image height is radial distance from the image center. The resulting plot will show a curve in figure 1. At present, Unreal Engine is unable to make use of this data other than to change the vignetting value (0-1). The LOLED Blueprint will approximate this, but should be considered as such.

    ![shading curve](/images/shadingcurve.png)

    Figure 1. Lens Shading Curve

4. The OpenCV values provided are normalized for a 36mm x 24mm full-frame sensor. fx and fy are not being streamed as they are dependent on actual pixel pitch.  It is required that the resolution and sensor size values are entered downstream, so fx & fy get updated based on lens focal length, using equations:

    fx = focal length (mm) x horizontal resolution (pixels) / sensor width (mm)
    fy = focal length (mm) x vertical resolution (pixels) / sensor height (mm)

    Resolution is of the image size being used and sensor size is actual active area of the sensor used to capture at that resolution. It is simpler when the camera is configured such that the video output matches the active area of the sensor. For example, Sony Venice can output 4K at 4096x2160 with sensor active area of 24.3mm x 12.8mm.

    To utilize full-frame, it gets a bit more complex as you have to determine the sensor sized used based on scaling and/or crop. For example, you could configure a Sony Venice at 6K 17:9, the active area of the sensor is 36 x 19mm and the active sensor resolution is 6054 x 3192. If you are streaming video live to a virtual system, the Venice will scale the image to 4K, at 4096 x 2160. In this case, you would enter 4096 pixels & 36mm for horizontal and 2160 pixels & 19mm for vertical.

    For use with Unreal, these values would be entered in the Blueprint.

v0.1.0-2021-06-01

### Configure Syncro-Link Mark-Zero for streaming F3 packets

On the micro-SD card, there is a config file for user selecting the streaming format.

If file doesn't exist, SYNCRO-LINK will default to F3, which is correct for LONET.

The file consists of one line and can be edited with any text editor.

Line 1 - hex value of streaming format
Below is an example stream.txt file

    F3

Be sure to setup dest.txt for destination IP and port that is receiving packets, see  [configuration](/docs/gettingstarted/configuration/)
