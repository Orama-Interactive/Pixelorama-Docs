---
id: layer
title: Layer
sidebar_label: Layer
---

An artwork in Pixelorama can be consisted by several layers, giving you better control over different parts of the image, by allowing you to edit these parts without affecting any other part of the image. Layers are stacked on top of each other, which means that bottom layers are being drawn behind top layers. You can edit them in the [timeline](../user_manual/user_interface/timeline). Each layer consists of a [cels](cel), the number of which depends on the number of frames that the project has.

## Types of layers
Right now, there are three types of layers. Pixel layers, group layers, and 3D layers.

### Pixel layers
Pixel layers are the default and most straight forward type of layer. Their cels contain regular raster image data, in which you can normally draw and manipulate pixels. Pixel cels are the only types of cels that can be linked right now.

### Group layers
Group layers are used solely for organization and their cels are empty and do not hold any actual data. They can be used to group common layers together, and they can expanded and collapsed from view in the timeline.

### 3D layers
The cels of 3D layers contain 3D mesh, lighting, camera and environment data, that are being rasterized based on the size of the canvas. They can contain lights, such as directional lights, spot lights and point lights, and a variety of primitive meshes, including boxes, capsules, spheres, cylinders, prisms, planes and even text. Importing custom .obj models is also possible.
