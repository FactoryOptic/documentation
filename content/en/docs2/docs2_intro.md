---
title: "SERVO32 Introduction"
description: "SERVO32 allows you to control up to 32 lens motors using Preston MDRs with a single handset. Ideal for multicamera setups such as 3D or camera arrays."
lead: "SERVO32 allows you to control up to 32 lens motors using Preston MDRs with a single handset. Ideal for multicamera setups such as 3D or camera arrays."
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

## Introduction

Factory Optic's Syncro-Link SERVO32 is a device that allows you to connect up to 8 Preston Cinema MDRs, thereby giving you control of up to 32 lens motors with a single Hand Unit.

<img src="/images/SERVO32WIRING.png" title="Wiring Diagram" alt="alt title"/>

### Primary Port: 1

The Primary port is the MDR that will be connected to the Preston Hand Unit. They should be connected as you normally use them, either via RF or command cable.

This MDR can also provide power to the SERVO32.

SERVO32 will connect to this MDR via the serial port on the MDR. The Servo 32 will communicate with the MDR and constantly query the motor positions. The SERVO32 will not command this MDR to move to motor positions, this will be done by the Preston Hand Unit.

### Replica Ports: 2 - 8

The Replica ports will connect to the additional MDRs, you can connect up to 7. These MDRs will not provide any power to the SERVO32, nor will the SERVO32 provide any power to these MDRs.

These Replica MDRs will be commanded by the SERVO32. In Unmapped mode, they will be commanded with the motor positions sent by the Primary MDR.

The motors on the MDRs will be mapped one-to-one with the primary. For example, the Iris motor of the replicas will be driven by the value of the Iris motor on the primary. Same with Focus, Zoom and AUX motors.

### Optional Power Port

With a MDR-2, Preston Cinema recommends not drawing any power from the serial port. In this case, you can supply power to the SERVO32 on this 2-pin Lemo port.

### Display

The SERVO32 Display will provide status of the MDRs connected, as well as show the motor positions.

### Rotary Knob

The rotary knob is used for changing the display page on the display

### USB Micro Connector

This connector will provide an interface to the SERVO32 console for mapping configuration. For unmapped systems, connecting to the SERVO32 console is not required.

## Get Started with SERVO32

See [GETTING STARTED](/docs2/getting Started/configurations32/) section for the quick start setup of SERVO32 with Preston Cinema MDR.

### Mapping

For advanced setups, use mapping to achieve barrel-mark accuracy across all lenses

## Customization

SERVO32 is customizable for your needs. Contact us for modifications and customizations. SERVO32 can be expanded to support an infinite number of motors, challenge us.