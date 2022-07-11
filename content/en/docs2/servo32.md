---
title: "SERVO32 Overview"
description: "Factory Optic's SYNCRO-LINK SERVO32 is a device that connects up to 8 Preston Cinema MDRs; giving you control of up to 32 lens motors with a single Hand Unit. Ideal for multicamera setups such as 3D or camera arrays."
lead: "Factory Optic's SYNCRO-LINK SERVO32 is a device that connects up to 8 Preston Cinema MDRs; giving you control of up to 32 lens motors with a single Hand Unit. Ideal for multicamera setups such as 3D or camera arrays."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs2:
    parent: "docs2"
weight: 105
toc: true
---

## Description
The SERVO32 connects up to 8 MDRs using a single Hand Unit. All MDRs use their serial port to connect to the Primary port (1) and Replica ports (2). The Primary port (1) MDR is connected to the Preston Hand Unit via RF or command cable. Power is provided to the SERVO32 through the MDR connected to the Primary port (1) or through the Optional power port (3). The Optional power port uses a 2-pin Lemo port that can provide power for an MDR-2, which Preston Cinema recommends not powering through the serial port of the MDR. Control of the Primary port is provided by the Hand Unit, of the Replica ports by the SERVO32, and of the Replica ports in Unmapped mode by the MDR at the Primary port. The motors on the MDRs connected to the Replica ports are mapped one-to-one with the motors on the MDR at the Primary port. For example, the Iris motor of the Replica ports will be driven by the value of the Iris motor of the Primary port. Same with Focus, Zoom and AUX motors. The SERVO32 Display (4) will provide status of the MDRs connected and show the motor positions. The Rotary Knob (5) is used for changing the display page on the Display. The USB Micro Connector (5) is used for mapping configuration with the SERVO32 console and is not needed for Unmapped mode. 

<img src="/images/SERVO32WIRING.png" title="Wiring Diagram" alt="alt title"/>


## Get Started with SERVO32

View the quick start setup of the SERVO32 with Preston Cinema MDR at [GETTING STARTED](/docs2/getting Started/configurations32/).

### Mapping

For advanced setups, use mapping to achieve barrel-mark accuracy across all lenses. Read how at [MAPPING]({{/docs2/mapping/mappingoverview}}).

## Customization

SERVO32 can be expanded to support an infinite number of motors, challenge us with your desired modifications and customizations. 
