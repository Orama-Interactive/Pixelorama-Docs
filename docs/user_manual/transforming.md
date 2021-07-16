---
id: transforming
title: Transforming
sidebar_label: Transforming
---

Currently, there are three types of transformations in Pixelorama. Translation (moving), scale and rotation. Transformations can either affect the currently active entire cels, or [selections](selecting).

Keep in mind that any content moved outside the canvas boundaries will be lost.

## Move
To move pixels around in the canvas, you can use the Move tool. It works by simply holding the mapped mouse button and dragging the cursor to where you want to move the content. If there is no active selection, it will move the entire content of the active cels. If there is a selection, it will start a selection transformation, and it will move both the selection itself and its content. To move a selection, it is also possible to use a selection tool and click inside the selected area and, while the mapped mouse button is being held, drag the cursor, just like you do with the Move tool. There are some keyboard shortcuts that can help you with movement. **The order of the key press and mouse button press matters for the selection tools.**

- Mouse movement + <kbd>Shift</kbd> = Moves & snaps selection to axis.
- Mouse movement + <kbd>Control</kbd> = Moves & snaps selection to rectangular grid.
- <kbd>Control</kbd> + <kbd>Alt</kbd> + mouse movement = Moves selection without content. **This only works for the selection tools and not the Move tool.**
- <kbd>Alt</kbd> + mouse movement = Copies selection and moves it without cutting it from the original position. This is basically a quick way to copy and move stuff around without <kbd>Control + C</kbd> and <kbd>Control + V</kbd>. **This only works for the selection tools and not the Move tool.**

If you have a selection tool active, you can also use the arrow keys to move the selection and contents. Pressing <kbd>Alt</kbd> only moves the selection without content, and holding <kbd>Control</kbd> moves the selection by the size of the rectangular grid tiles. You can also manually change the position of the selection from the tool options. If there is an active transformation, the content will be affected as well, otherwise it will only move the selection itself without its content.

## Scale
To resize your image, you can go to the Image menu and select Scale Image. There you can choose the new size of your entire [project](../concepts/project). You can also just expand the canvas without affecting the content that is inside by going to the Image menu and pressing Resize Canvas. Furthermore, you can go to Image -> Crop Image, which will remove all of the transparent pixels that surrounds your drawing, by shrinking the size of the image. Of course, all of these options will affect all of the cels of the project.

If you want you resize only selected part(s) of your artwork, you can create a [selection](selecting) and use one of the eight gizmos that appear on each side of the selection borders. To use them, you can simply left click on them, hold, and move your cursor. Moving it outwards will expand the size, while moving it inwards will shrink it. Using gizmos will start a selection transformation. Like with movement, there are some keyboard shortcuts you can use to give you more control over the transformation.

- Mouse click + <kbd>Shift</kbd> = keeps original aspect ratio of the selection.
- Mouse click + <kbd>Control</kbd> = expands from center.
- <kbd>Alt</kbd> + Mouse click = only affects the selection and not the content.

You can also manually change the size of the selection from the tool options. If there is an active transformation, the content will be affected as well, otherwise it will only scale the selection itself without its content.

## Rotate
To rotate your image, you can go to the Image menu and select Rotate Image. There, you can choose one of the three rotation algorithms. You can experiment with every one of them to see what works best for you. You are also given the option to only affect the selected part of the image, or the entire area of the active cels. In the future, there will most likely be gizmos that rotate the selection directly, just like there are for scaling.

## Having An Active Transformation
When moving or scaling a selection with its contents, the selected pixels will suddenly become transparent. This indicates that a selection transformation has started. This means that your changes haven't yet been applied to the image. When there is an active transformation, moving and scaling will only affect the transformed content and nothing else, until its applied.

### Applying A Transformation
To apply your changes, you can either press <kbd>Enter</kbd>, or by doing any other action, such as drawing, applying an image effect, selecting another cel, adding a new frame or layer, etc. Doing any of these will automatically apply your changes.

### Cancelling A Transformation
To cancel a transformation, you can either press <kbd>Escape</kbd>, or undo. You will not be able to redo your actions if you decide to cancel.
