---
title: "SERVO32 Quick Start Guide"
description: "Configure SERVO32"
lead: "Configure SERVO32"
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


## Unmapped Mode

The SERVO32 in unmapped mode needs no configuration. Be sure to confirm mapping is disabled.

<img src="/images/s32/s32overview.png" title="SERVO32 In Action" alt="alt title"/>

Here it is ideal to use the same model lenses with identical lens barrels. By using the same model lenses the iris, Focus, Zoom & Aux motor positions at a Replica port will match the motor positions at the Primary port. When using mismatched lenses, the MDR at the Primary port will set the limit of lens motors that are controllable at the Replica ports. For example, we have an MDR-4 at the Primary port and a MDR-3 at the Replica port. The MDR-4 only controls iris and Focus, so only the iris and Focus of the MDR-3 will be usable, not the Zoom and Aux.

## Mapped Mode

Mapping allows seamless integration of any MDR and any lens. A properly mapped system will always hit the witness marks you set on your Hand Unit. For the mapping configuration, see (link to mapping).
