---
id: selecting
title: Selecting
sidebar_label: Selecting
---

You can select specific areas of your sprite to make changes at. When there is an available selection, any operation such as drawing, shading and image effect application will only affect the selected part(s) of the drawing. Selections also allow you to easily [apply transformations to specific parts of the image, such as moving and scaling](../../concepts/transforming). An active selection is denoted by a [marching ants effect](https://en.wikipedia.org/wiki/Marching_ants) around the selected pixels.

## Selection Tools
You can use one of the available selection tools in Pixelorama. Each tool selects things slightly differently.

| Name      | Description | Default Shortcut |
| ----------- | ----------- | ----------- |
| Rectangular Selection | Create a rectangular selection.| L: <kbd>R</kbd>, R: <kbd> Alt + R</kbd> |
| Elliptical Selection | Create an elliptical selection. | L: <kbd>Y</kbd>, R: <kbd> Alt + Y</kbd> |
| Polygonal Selection | Create a polygonal selection. Click where you want each point of the polygon to be. Double click to end your polygon and finalize your selection area. | L: <kbd>K</kbd>, R: <kbd> Alt + K</kbd> |
| Select By Color | Selects all parts of the cel that share the same color.| L: <kbd>W</kbd>, R: <kbd> Alt + W</kbd> |
| Magic Wand | Selects the neighboring same-color area of the pixel the cursor was in on mouse button press. | L: <kbd>Q</kbd>, R: <kbd> Alt + Q</kbd> |
| Lasso / Free Select Tool | Selects a rough outline of an area. | L: <kbd>F</kbd>, R: <kbd> Alt + F</kbd> |

Similar to the [shape drawing tools](drawing), you can use keyboard shortcuts to modify how the rectangular and elliptical selections are being created.
- Mouse click + <kbd>Shift</kbd> = Create a 1:1 (square/circle) selection.
- Mouse click + <kbd>Control</kbd> = Create a selection that expands from the center.
- Mouse click + <kbd>Alt</kbd> = Displaces the origin of the selection.

You can also easily change the selection's position and size from the tool options if you have a selection tool pressed. Keep in mind that if there is an active transformation, the content inside the selected parts will be affected as well. Otherwise, these options only affect the selection itself and not its content.

## Modifying Selections
The selection tools also give you the ability to modify the already existing selection, by either adding to it, removing from it or creating intersections. By default, the selection tools replace the already existing selection with a new one. Keep in mind that you have to **press the keyboard modifiers first before the mouse button is pressed.**
- <kbd>Shift</kbd> + Mouse click = Add to selection.
- <kbd>Control</kbd> + Mouse click = Subtract from the selection.
- <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + Mouse click = Create selection intersection.

### Selecting All
You can easily select the entire canvas by either pressing <kbd>Control + A</kbd>, or by going to the Select menu and pressing **All**.

### Clearing Selection
If you want to delete the entire selection, the easiest way is to deselect everything. You can do that by either pressing <kbd>Control + D</kbd>, or by going to the Select menu and pressing **Clear**. If you have the rectangular selection, elliptical selection, magic wand or lasso tools selected, clicking anywhere outside the canvas also clears the selection.

### Inverting Selection
Inverting the selection means that all of the currently selected pixels will get deselected, while all of the unselected pixels will get selected. You can do this by either pressing <kbd>Control + I</kbd>, or going to the Select menu and pressing **Invert**. If you have everything selected, inverting will clear the selection. Likewise, if you have nothing selected, inverting will select everything.

## Duplicating
If you **don't** have an active transformation, holding <kbd>Control + Alt + Mouse click</kbd> will *duplicate* whatever was below it and place it in active transformation.

:::tip Duplicating Quickly!
**During active transformation** <kbd>Control + Alt + Mouse click</kbd> will not only apply transformation but will also **retain** its content, which you can use again. Handy when duplicating something multiple times.
:::

## Copy, Paste, Cut and Delete
If you have an active selection, you can copy its contents by pressing <kbd>Control + C</kbd>. Then, you can paste it whenever you like, either on the same cel, on another cel or even a completely different project with <kbd>Control + V</kbd>. Pasting will create a new transformation which will be created at the same position as the original selection was when it was copied, but you will easily be able to move it to where you want. Keep in mind that copy/paste **does not** work at an Operating System level. Meaning, you won't be able to copy/paste image data between different applications on your device.

You can also easily delete the selected content with the <kbd>Delete</kbd> key. You can also cut with <kbd>Control + X</kbd>. Cut basically copies the selected content and then immediately deletes it.

Keep in mind that all of these operations only affect the currently selected cel and not the entire layer as of right now. You can also use the Edit menu to find these options instead of using keyboard shortcuts.

## Selection Preferences
Under Edit -> Preferences -> Selection, you will find options to change the colors of the marching ants effect, as well as toggle its animation on or off.
