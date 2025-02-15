---
id: image_effects
title: Image effects
sidebar_label: Image effects
---
You can apply multiple image effects to an image, to easily and quickly affect its content, without modifying it pixel by pixel. The image effects can be found under the Image menu.

:::warning
Image effects are **destructive**. This means that, once they are applied, they directly modify the image data, and the only way to reverse this change is by undoing. If you want to use a non-destructive workflow, use [layer effects](../concepts/layer#layer-effects) instead.
:::

## List of image effects
| Name      | Description |
| ----------- | ----------- |
| Offset | Moves the pixels of the image to a new position. The moved pixels can optionally be wrapped around when they go out of bounds. For example, if a pixel leaves the canvas from the right, it re-appears on the left side. |
| Mirror | Mirrors the content of the image horizontally, vertically or both. |
| Rotate | Rotates the content of the image. Can change the angle, the pivot point, as well as the algorithm. There are seven rotation algorithms to choose from: Rotxel with Smear, cleanEdge, OmniScale, Nearest Neighbor (Shader), Nearest Neighbor, Rotxel and "Upscale, Rotate and Downscale". The first four are shader-based, meaning that they use the GPU, while the rest use the CPU. The algorithms that use the GPU tend to be faster. Rotxel with Smear can also create a smearing effect. |
| Outline | Generates an outline, with a given thickness, color and pattern. The outline is being generated outside the pixels that have transparent pixels are neighbors. If "place inside image" is toggled on, the outline is being drawn on these pixels themselves, rather than outside them. |
| Drop shadow | Creates a shadow of the image's content at a given offset, with a given color. |
| Invert colors | Inverts the colors of the image. Can choose whether this affects the red, blue, green or alpha channels, or multiple at once. |
| Desaturation | Desaturates the colors of the image, turning them to grayscale. Can choose whether this affects the red, blue, green or alpha channels, or multiple at once. |
| Adjust Hue/Saturation/Value | Adjusts the hue, saturation and the value of the image's colors. |
| Adjust Brightness/Contrast | Adjusts the brightness, contrast, and even the saturation, RGB values and tint color of the image's colors. |
| Palettize | Limits the number of colors of the image to the colors of the currently active palette. Each color is being mapped to the nearest color in the palette. |
| Pixelize | Pixelates the image by combining its pixels into larger squares, containing their average color. |
| Posterize | Limits the number of colors of the image to the posterization level. Can also set an optional dither intensity. |
| Gradient | Generates a gradient. Its colors can be modified from the gradient edit, by clicking on the colored area to add new color steps. Clicking on the color steps with the left mouse allows you to change the color of that step, and right clicking on a step, removes it. Gradients can either be linear or radial, and they can optionally be dithered and/or repeated. You can also generate step gradients by changing the interpolation type to constant. |
| Gradient map | Converts the colors of the image into a gradient, based on their lightness. Darker colors are mapped to colors on the left side of the gradient, and brighter colors are mapped to colors on the right side of the gradient. |

## Animate image effects
Some of these image effects can be animated. To animate an image effect, first create as many frames as you want the animation to last for, and select them. Then, open the image effect dialog you desire, and click on the small play icon on the top right side of the dialog. A new dialog will appear, containing all of the animatable properties. Select the property you wish to animate, toggle "Animate" on, and put the initial and final values, as well as the ease type and interpolation. Once you're done, click on "OK" on the image effect dialog, and the image effect will be applied to all of the selected frames, with the animatable properties you chose being automatically interpolated based on the position of each frame. This method can be used to easily make something move, rotate, etc, without having to edit each frame manually.

:::tip Affect active selection
By default, image effects will affect only the selected area of the cel(s). If there is no active selection, the entire cel(s) will be affected. If you have an active selection but want to affect the entire image, you can toggle off the "Only affect selection" checkbox in the dialog of the image effect you wish to apply.
:::

:::tip Affecting multiple cels at once
By default, image effects will apply in all of the currently selected cels. It is also possible to make them apply to the entire selected frame, to all frames of the project, and to all projects as well, by selecting one of these options from the option button found next to the "Only affect selection" checkbox, in the dialog of the image effect you wish to apply.
:::
