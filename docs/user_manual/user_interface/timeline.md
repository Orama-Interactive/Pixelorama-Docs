---
id: timeline
title: The Timeline
sidebar_label: The Timeline
---

The timeline's main purpose is to help you with creating animations. It is composed of frames, which are used for creating animations, and layers, which help you separate your frames in different parts. Each frame is essentially a collection of multiple layers, and each individual intersection of a frame and a layer is called a [cel](../../concepts/cel). All frames have the same amount of layers.
![Screenshot of Pixelorama's timeline](../../../static/img/timeline_cels.png)

## Animation
To preview your animation, you can click on the `Play` button (or press <kbd>F5</kbd>) located on the top right side of the timeline. The button on the left (mapped to <kbd>F4</kbd>) is used to preview the animation backwards.

### FPS
On the top and far right side of the timeline you will see a number, which has the default value of 6. This is the FPS, which stands for `Frames Per Second`. To put it simply, this is the speed of the animation and it determines how many frames are being shown for every second. Having a value of 6 FPS, for example, will display 6 frames every second the animation is running.

For more details, you can read this [Wikipedia article](https://en.wikipedia.org/wiki/Frame_rate).

### Loop modes
The button located directly on the left of the FPS is used to change the animation loop mode. There are three loop modes:
- Cycle loop. When the animation reaches the final frame, it will start playing again from the first frame. This is the default option.
- Ping-pong. When the animation reaches the final frame, it begins playing backwards, starting from that final frame. When it reaches the first frame, it will again start playing forwards until it reaches the final frame, and so on.
- No loop. When the animation reaches the final frame, it simply stops playing.

### Onion skinning
Directly on the left of the loop mode button, you will find two buttons used for onion skinning. Onion skinning is useful for animations, because it's a simple and easy way to preview the previous and next frames at the same time as the frame you are currently editing. For more details, you can read this [Wikipedia article](https://en.wikipedia.org/wiki/Onion_skinning).

The button on the right simply toggles onion skinning on and off, and the one on the left brings up options, like the amount of past (previous) and future (next) frames that appear, and blue-red mode, which tints the previous frames blue, and the next frames red.

## Layers
On the left side of the timeline, you will see the layer buttons. Clicking on a layer button will select the current layer. Double clicking will let you change the name of that layer. 

You can also drag and drop layer buttons to re-arrange them. This will also affect their corresponding cels.

The layer buttons have three more buttons on them. The first toggles the layer's visibility. While invisible, the layer cannot be edited by the user. It will also remain invisible on export. The second locks and unlocks the layer. If the layer is locked, it cannot be edited by the user, but it does remain visible. The third button is used to automatically link the new cels that are being created. If it's toggled on, it is essentially a fast way to create linked cels.

There are 6 more buttons located on top of the layers. These, in order of appearance: add a new layer, remove the current active layer, move the current layer up and down, clone current layer and merge the current layer with the one directly below it.

## Frames
Directly above the cels, you will notice some buttons with each one having a number. These are the frame buttons, and the number they have is their order in the animation.

Clicking on a frame button will select that frame, and right clicking a frame button will open up a menu. The menu options include a remove frame option, clone frame, move frame to the left, move frame to the right and frame properties. Clicking on frame properties brings up a window that lets you change the duration of that frame.

:::tip frame duration
By default, the duration of each frame is set to 1x, which means it will take exactly as much time as the timeline FPS (frames per second). Setting it to 2x, for example, that frame will take twice as much time, while setting it to 0.5x will take half the time, meaning it will play out faster.
:::

You can also drag and drop frame buttons to re-arrange them. This will also affect their corresponding cels.

On the top side of the timeline you will find frame-related buttons which offer the same functionality as the frame button right click menu, like adding, removing, cloning and moving frames. You will also find a button that is used to modify `frame tags`.

### Frame tags
Frame tags are used to organize different parts of your animated sprite. Those parts can also be exported independently using frame tags.

Clicking on the button mentioned above will bring up this window.
![Frame tags](../../../static/img/frame_tag_window.png)
Here you can see the list of all of the frame tags of the current [project](../../concepts/project). Using the plus (+) sign, you can add more tags. A tag has a starting frame (from), an ending frame (to), a name and a color.

To edit an already existing tag, you can click on the "Edit" button next to the tag you want.

If "Animation plays only on frames of the same tag" is toggled on, then, when you preview your animation, it will only preview the frames that belong on the same tag as the currently selected frame. This is a great way to preview parts of your animation separately.

## Cels
-- Section under construction --