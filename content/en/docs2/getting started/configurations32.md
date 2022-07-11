---
title: "SERVO32 Quick Start Guide"
description: "Factory Optic's SYNCRO-LINK SERVO32 is a device that connects up to 8 Preston Cinema MDRs; giving you control of up to 32 lens motors with a single Hand Unit. Ideal for multicamera setups such as 3D or camera arrays."
lead: "Factory Optic's SYNCRO-LINK SERVO32 is a device that connects up to 8 Preston Cinema MDRs; giving you control of up to 32 lens motors with a single Hand Unit. Ideal for multicamera setups such as 3D or camera arrays."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs2:
    parent: "getting started"
weight: 310
toc: true
---

## Description
The SERVO32 connects up to 8 MDRs using a single Hand Unit. All MDRs use their serial port to connect to the Primary port (1) and Replica ports (2). The Primary port (1) MDR is connected to the Preston Hand Unit via RF or command cable. Power is provided to the SERVO32 through the MDR connected to the Primary port (1) or through the Optional power port (3). The Optional power port uses a 2-pin Lemo port that can provide power for an MDR-2, which Preston Cinema recommends not powering through the serial port of the MDR. Control of the Primary port is provided by the Hand Unit, of the Replica ports by the SERVO32, and of the Replica ports in Unmapped mode by the MDR at the Primary port. The motors on the MDRs connected to the Replica ports are mapped one-to-one with the motors on the MDR at the Primary port. For example, the Iris motor of the Replica ports will be driven by the value of the Iris motor of the Primary port. Same with Focus, Zoom and AUX motors. The SERVO32 Display (4) will provide status of the MDRs connected and show the motor positions. The Rotary Knob (5) is used for changing the display page on the Display. The USB Micro Connector (5) is used for mapping configuration with the SERVO32 console and is not needed for Unmapped mode. 

<img src="/images/SERVO32WIRING.png" title="Wiring Diagram" alt="alt title"/>


## Unmapped Mode

The SERVO32 in unmapped mode needs no configuration. Be sure to confirm mapping is disabled.

<img src="/images/s32/s32overview.png" title="SERVO32 In Action" alt="alt title"/>

Here it is ideal to use the same model lenses with identical lens barrels. By using the same model lenses the iris, Focus, Zoom & Aux motor positions at a Replica port will match the motor positions at the Primary port. When using mismatched lenses, the MDR at the Primary port will set the limit of lens motors that are controllable at the Replica ports. For example, we have an MDR-4 at the Primary port and a MDR-3 at the Replica port. The MDR-4 only controls iris and Focus, so only the iris and Focus of the MDR-3 will be usable, not the Zoom and Aux.

### Wiring Setup

In order to connect the SERVO32 and additional components, use the following connections:

- Preston Serial, ports 1 - 8 of SERVO32
  - Connector is Lemo 4-Pin OB
  - Port 1 is the Primary MDR and can provide power to the SERVO32
  - Ports 2-8 are the Replica MDRs, no power is provided or taken on this connector
  - Supports MDR-2, MDR-3 or MDR-4

| EGG.0B.304 | EGG.0B.304 |
| ---------- | ---------- |
| Pin 1 | Pin 1 |
| Pin 2 | Pin 2 |
| Pin 3 | Pin 3 |
| Pin 4 | Pin 4 |

- DC POWER (Optional)
  - Connector is Lemo 2-Pin OB
  - 8-32VDC input @ 4W max
  - Input is protected from reverse polarity and has resettable fuse
  - Wired to Preston Polarity Standard

| EGG.0B.302 | Signal |
| ---------- | ------ |
| Pin 1 | Ground |
| Pin 2 | +8~32VDC |

### Additional Settings

Click to learn more about the display settings (link), MDR settings (link), Preston compatibility (link) or versions (link). 

## Mapped Mode

Mapping allows seamless integration of any MDR and any lens. For advanced setups, use mapping to achieve barrel-mark accuracy across all lenses. Read how at [MAPPING]({{/docs2/mapping/mappingoverview}}).

## Customization

SERVO32 can be expanded to support an infinite number of motors, challenge us with your desired modifications and customizations. 

