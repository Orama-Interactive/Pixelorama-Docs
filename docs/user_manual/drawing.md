---
id: drawing
title: Drawing
sidebar_label: Drawing
---

Drawing is the main feature of Pixelorama and it's what you will be doing most of the time. There are multiple tools that can be used for drawing in the [canvas](user_interface/canvas), with the main one being the **Pencil** tool.

## Drawing Tools
You can use one of the available drawing tools in Pixelorama to bring your heart's content to life.

| Name      | Description | Default Shortcut |
| ----------- | ----------- | ----------- |
| Pencil | Draw individual pixels on mouse position.| L: <kbd>P</kbd>, R: <kbd> Alt + P</kbd> |
| Bucket | Fill a same-color area or all of the pixels of the same color with a new color. | L: <kbd>B</kbd>, R: <kbd> Alt + B</kbd> |
| Line Tool | Create a straight line. | L: <kbd>L</kbd>, R: <kbd> Alt + L</kbd> |
| Rectangle Tool | Create a rectangle.| L: <kbd>S</kbd>, R: <kbd> Alt + S</kbd> |
| Ellipse Tool | Create an ellipse. | L: <kbd>C</kbd>, R: <kbd> Alt + C</kbd> |

Tools that are not used directly for drawing but are very helpful for your drawing process:

| Name      | Description | Default Shortcut |
| ----------- | ----------- | ----------- |
| Color Picker | Get the color of the pixel on mouse position. | L: <kbd>O</kbd>, R: <kbd> Alt + O</kbd> |
| Eraser | Erase individual pixels on mouse position.| L: <kbd>E</kbd>, R: <kbd> Alt + E</kbd> |
| Shading | [See this page for a detailed explanation.](shading)| L: <kbd>U</kbd>, R: <kbd> Alt + U</kbd> |

## Pencil and Eraser
The main tools of Pixelorama. Used to draw or erase pixels at an individual pixel level. You can select from multiple [brushes](../concepts/brush) and change their size. You can also hold <kbd>Shift</kbd> before drawing to create lines between two points, and by also holding <kbd>Control</kbd>, you constrain them either by 15 degrees, or always making them be pixel-perfect angles by having the "Pixel Perfect" option enabled.

The eraser erases pixels by simply subtracting their color RGBA value by the given opacity value. If the opacity value is 255 then the color RGBA value becomes (0, 0, 0 ,0), which is equivalent to black that is completely transparent.

### Pencil Tool Options
The Pencil tool also has an "Overwrite Color" tool option. If this is enabled, the color of the drawn pixels will always become the same color as the selected one. Otherwise, if the colors are transparent, their alpha values will blend. For example, if the color of the drawn pixels have are 30% transparent and your currently selected color is 25% transparent, the resulting transparency will be 55%. While if the overwrite color option is on, the resulting transparency will always be 25%.

The "Fill inside" option fills the entire area with the selected color between the first mouse-clicked position and the last, after the mouse button gets released.

### Pixel Perfect
The Pencil and Eraser (and [Shading](shading)!) tools have an option called "Pixel Perfect". This essentially creates "pixel perfect" lines for you by automatically removing the middle pixel of L-shapes. In other words, it removes extra adjacent pixels often referred to as "doubles" in order to create lines that are one-pixel thick.

![Not pixel-perfect line vs pixel perfect line](../../static/img/pixel_perfect_line_diff.png)

##### Not pixel-perfect line on the left, compared to a pixel perfect line on the right.

## Bucket
The bucket tool is a quick way to paint large sections of the image. You can select one of two fill areas. "Same color area" will fill the area around the mouse click position that is the same color as the pixel on mouse position with the selected color, using a [flood fill algorithm](https://en.wikipedia.org/wiki/Flood_fill). "Same color pixels" will change all of the pixels of the selected [cels](../concepts/cel) of the same color as the one on mouse position with the selected color.

You can also choose to fill with patterns instead of a color.

## Shape tools
The shape tools include the line tool, rectangle tool and ellipse tool. All of them are very straightforward to use; you click on where you want to place your shape, hold your mouse button and finally release it on where you want your shape to end. You can also change the shape's thickness, and for the rectangle and ellipse tools, you can choose whether to create hollow or filled with color shapes.

Similar to the [selection tools](selection), you can use keyboard shortcuts to modify how the shapes are being created.
- Mouse click + <kbd>Shift</kbd> = Create a 1:1 (square/circle) shape. For the line tool, <kbd> Shift</kbd> will restrain the angle to be pixel perfect, similar to how <kbd>Control</kbd> and <kbd>Shift</kbd> do for the Pencil tool.
- Mouse click + <kbd>Control</kbd> = Create a shape that expands from center.
- Mouse click + <kbd>Alt</kbd> = Displaces the origin of the shape.

## Color Picker
This one is fairly simple to comprehend. While not a drawing tool itself, the color picker tool is used for getting a sample of an existing color on the canvas with the purpose of replicating it, depending on which pixel the selection is done at.

Now, there's only one category available as an option for the time being, called "Pick for:". This means that the sample taken will replace one of the colors, either the **Left Color** or **Right Color**. Choosing **Left Color** replaces the left selected color, while right replaces the right selected color. 

*Tip: A quick and helpful way to use the color picker is having it mapped to your* ***right mouse button*** *and having the* ***Left Color*** *option selected while having a drawing tool mapped to your* ***left mouse button.*** *The color picker can compliment the drawing tool by selecting the color you next desire to paint with, making it an immediate way of switching between hues.*

## Mirroring
All drawing tools can work with symmetry. Symmetry in Pixelorama is either horizontal, vertical or both at the same time. It can be enabled from the tool options. If, for example, horizontal symmetry is enabled, whatever you draw will get mirrored, meaning it will also get drawn on the other horizontal side, having the same distance from the symmetry line as your original drawing. So if you draw a pixel two pixels from the left of the vertical symmetry line and horizontal symmetry is enabled, then the pixel two pixels from the right of the symmetry line and on the same vertical position will also get drawn. The same holds true for when vertical symmetry is enabled.

If you have both horizontal and vertical mirroring enabled, then the drawn pixels will get repeated four times.
