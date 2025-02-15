---
id: color_mode
title: Color mode
sidebar_label: Color mode
---

As of right now, Pixelorama supports the **RGBA** and **Indexed** color modes for its [projects](project). You can choose a color mode when creating a new project, or at any time during the editing of a project, by going to the Image menu, and selecting a color mode from the "Color mode" submenu.

## RGBA
RGBA is the default color mode. It stands for Red, Green, Blue and Alpha. When using this color mode, each pixel of the image contains four values: a red value, a green value, a blue value and an alpha value. The first three values make up the color of the pixel, and the alpha value contains its transparency.

## Indexed
When using the indexed color mode, each pixel contains a number that references the index of a color in the [palette](../user_manual/palettes). This means that the pixels do not have their own independent color values. Instead, they get their color from the palette, depending on the index number they contain. This essentially means that if a pixel contains the number "3", its color will be the same as the 3rd color of the currently selected palette. Changing that color in the palette, or even switching to a new palette, will change all of the colors of the image that are also mapped to the 3rd palette color. Re-ordering the colors of the palette also affect the image. If the 3rd color in the palette is a blue color and the 4th is a green one, moving the green one into the 3rd spot, will make all of the previously blue pixels of the image green, as they will remain mapped to the 3rd color of the palette, whatever that is.

To change the color of the pixels, simply pick the color you want from the palette, and use a drawing [tool](../user_manual/tools) on the pixels you want. If you freely select a color from the color picker, it will not be applied to the image. Instead, Pixelorama will automatically find the closest color from the currently active palette, and apply that instead.

This mode is used when you want to limit the colors of your project to a specific palette, and when you want changes in the palette to be reflected immediately to all pixels of the image.
