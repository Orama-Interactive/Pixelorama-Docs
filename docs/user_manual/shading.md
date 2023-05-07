---
id: shading
title: Shading
sidebar_label: Shading
---

Pixelorama's shading tool can be used to easily add lighting and shadows to the artwork. You can use it the same way you use the [Pencil or Eraser tools](drawing), you mouse press on where the pixels of the sprite where you want to apply the shading. Similar to Pencil and Eraser, you can change the affected area size and brush. As of right now, there are two modes of shading, Simple Shading and Hue Shifting, which you can switch from the tool's options.

## Simple Shading
This is a fairly straightforward method of shading. You can choose to either lighten or darken the area where you clicked, as well as the shading value. The bigger the number, the more shading will be applied. All it does is simply increase (with lighting) or decrease (with shading) the `Value` of the pixel's colors, which represents the color's brightness. It essentially just makes the same colors brighter or darker.

## Hue Shifting
Hue Shifting is a bit more complex than Simple Shading. Instead of just shifting the `Value` of the color, we also shift their `Hue` and `Saturation` too. When we are brightening the colors, we shift their hue to move towards yellow (the limit is set to roughly 60 Hue), decrease their saturation and increase their value. On the contrary, when we are darkening the colors, their hue shifts towards blue (the limit is set to roughly 240 Hue), their saturation increases and their value decreases. This is all done automatically by the Shading tool, but you can also configure the amount the Hue, Saturation and Value change from the tool options.

:::caution hue shifting limits
The hue shifting mode does not always change the hue, saturation and value of the colors exactly as much as the values have been set by the user. For example, a color with a hue of 70 and the shading tool set to hue shifting, lighten and a hue of, let's say, 20, will not result in a color with a hue of 50 (because 70 - 20 = 50), but it will rather stay limited to 60, as this is the hard limit of lighting. Similarly, the hard hue limit of darkening is 240. If you want to exactly change the HSV values of a color, you can use the `Adjust Hue/Saturation/Value` image effect under the Image menu.
:::
