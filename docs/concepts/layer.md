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
Group layers are used solely for organization and their cels are empty and do not hold any actual data. They can be used to group common layers together, and they can expanded and collapsed from view in the timeline. Right now, they do not affect blending or masking.

### 3D layers
The cels of 3D layers contain 3D mesh, lighting, camera and environment data, that are being rasterized based on the size of the canvas. They can contain lights, such as directional lights, spot lights and point lights, and a variety of primitive meshes, including boxes, capsules, spheres, cylinders, prisms, toruses, planes and even text. Importing custom .obj models is also possible.

## Blend modes
The blend mode of each layer determines how its colors blend with the colors of the layer directly below it. Pixelorama supports the following blend modes:

| Name      | Category | Description |
| ----------- | ----------- | ----------- |
| Normal | Normal | The blend layer colors are simply placed on top of the base colors. |
| Darken | Darken | Keeps the darker colors between the blend and the base layers. |
| Multiply | Darken | Multiplies the numerical values of the two colors, giving a darker result. |
| Color burn | Darken | Darkens by increasing the contrast between the blend and base colors. |
| Linear burn | Darken | Darkens the base colors based on the value of the blend colors. |
| Lighten | Lighten | Keeps the lighter colors between the blend and the base layers. |
| Screen | Lighten | Lightens the colors by multiplying the inverse of the blend and base colors. |
| Color dodge | Lighten | Lightens by decreasing the contrast between the blend and base colors. |
| Add | Lighten | Lightens by adding the numerical values of the two colors. Also known as linear dodge. |
| Overlay | Contrast | Like Screen mode in bright base colors and Multiply mode in darker base colors. |
| Soft light | Contrast | Similar to Overlay, but more subtle. |
| Hard light | Contrast | Like Screen mode in bright blending colors and Multiply mode in darker colors. |
| Difference | Inversion | Subtracts the blend color from the base or vice versa, depending on the brightness. |
| Exclusion | Inversion | Similar to Difference mode, but with less contrast between the colors. |
| Subtract | Inversion | Darkens by subtracting the numerical values of the blend colors from the base. |
| Divide | Inversion | Divides the numerical values of the base colors by the blend. |
| Hue | Component | Uses the blend hue while preserving the base saturation and luminosity. |
| Saturation | Component | Uses the blend saturation while preserving the base hue and luminosity. |
| Color | Component | Uses the blend hue and saturation while preserving the base luminosity. |
| Luminosity | Component | Uses the blend luminosity while preserving the base hue and saturation. |

## Clipping mask
Clipping masks can be used to draw the content of the layer only on top of the non-transparent pixels of the layer directly below. In other words, the layer below the clipping mask is what controls the visibility of the content of the clipping mask. You can make a layer be a clipping mask by right-clicking the layer button in the timeline, and toggling "Clipping mask".