---
title: "Pixelorama v1.0 is finally out!"
slug: pixelorama-1.0-is-out
date: 2024-07-29
authors: [Overloaded]
image: /img/blog/pixelorama-1.0-is-out/main.png
---

```mdx-code-block
import layerEffects from '@site/static/img/blog/pixelorama-1.0-is-out/layer_effects.mp4';
```

![Artwork by Roroto Sic, made with Pixelorama](/img/blog/pixelorama-1.0-is-out/main.png)

Artwork by Wishdream, one of the artists for v1.0's splash screen artworks.

We made it. After 5 years in development, version 1.0 of Pixelorama is finally here. To be honest, I'm not even sure where to start with this post. I suppose I should thank each and every one of you for contributing, donating, translating, using, providing feedback and reading this post. This would not be possible without you, and the team and I are extremely grateful.

Today also marks the release of Pixelorama on Steam! For more information about this, you can read our [previous blog post](../pixelorama-is-coming-to-steam). Thank you everyone who has wishlisted and followed our Steam page!

<iframe src="https://store.steampowered.com/widget/2779170/" frameborder="0" width="646" height="190"></iframe>

<!-- truncate -->

As always, if you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/) or [itch.io](https://orama-interactive.itch.io/pixelorama)! We really rely on your financial support so we can focus on Pixelorama's development and make it sustainable.

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

So, what is new in this version? Here's an overview of the biggest changes.

## Layer blend modes
Multiple layer blend modes was a basic feature missing from Pixelorama, but no more! The blend modes currently supported are: Normal, Darken, Multiply, Color burn, Linear burn, Lighten, Screen, Color dodge, Add, Overlay, Soft light, Hard light, Difference, Exclusion, Subtract, Divide, Hue, Saturation, Color, Luminosity. You can read about what each mode does in our [documentation](https://www.oramainteractive.com/Pixelorama-Docs/concepts/layer). In the future I would like to support group layer blending as well.

## Non-destructive layer effects
The image effects that are available in Pixelorama can now also be applied as non-destructive effects per layer. Non-destructive essentially means that the effects do not permanently alter the image, unless you want them to. In the future I also plan to allow users to load custom shaders (written in Godot's shading language) for custom effects, as well as support animated effects.

<video controls style={{ maxWidth: "100%", height: "auto" }}>
    <source src={layerEffects} type="video/mp4">
    </source>
Your browser does not support the video tag.
</video>

## Curve tool
A new curve tool has finally been implemented, allowing you to easily create pixelated bezier curves. You can change its size, as well as enable filling the area inside it, allowing it to be used as a polygon tool as well.

## Clipping masks
Layers can now be used as clipping masks. Clipping masks can be used to draw the content of the layer only on top of the non-transparent pixels of the layer directly below. In other words, the layer below the clipping mask is what controls the visibility of the content of the clipping mask. You can make a layer be a clipping mask by right-clicking the layer button in the timeline, and toggling "Clipping mask". In the future, I also want to support group layers to support clipping masks.

## New color picker panel
The old color picker buttons are now gone and have been replaced with a new color picker panel that is always visible. This results in less clicks, making the selecting color process faster. To select whether you want to pick colors for either the left or the right tool, simply click on either the left or the right button below the picker, and the colors that will be picked will work for that respective button. The new color picker also supports multiple color shapes, such as the HSV Rectangle (default), HSV Wheel, VHS Circle and OKHSL Circle. You can also now use the OKHSL color mode.
![Screenshot of Pixelorama's new color picker panel](/img/blog/pixelorama-1.0-is-out/color_picker.png)

Clicking on "Color options" will bring out sliders that allow for more accurate color selection.

## Extension explorer
You can now find extensions that are available online easily, inside Pixelorama itself. Just go to the Edit menu, Preferences, Extensions and click on "Explore Online". From there, you can effortlessly download extensions without leaving the application at all.

## Timeline improvements
What's a good update without some much needed timeline improvements? It is now (finally!) possible to drag and drop multiple selected cels/layers/frames to re-arrange them, instead of dragging them one by one. The frame tags have also received some love, as they can now be created from the frame button's right click menu, and to edit them all you need to do is either click on their name in the timeline, or drag around their edges to move and resize them!

## Video importing and exporting
It is now possible to import and export video files. However, for that to work, you need to download [FFMPEG](https://ffmpeg.org/download.html), and place its installation path inside Pixelorama's Preferences. If FFMPEG is available as a PATH environment variable, simply putting `ffmpeg` in the Preferences should work, at least on Linux devices. In the future I would also like to implement the ability to add audio inside projects, and videos could be exported with the audio you added.

## **IMPORTANT** -  Incompatibilities with previous versions
Pixelorama 1.0 introduced some breaking changes.
- `.pxo` files have a completely new file format now than they used to, they are now essentially `.zip` files in disguise. While `.pxo` files from previous versions (from v0.8 to v0.11.4) can be loaded in v1.0, the opposite is not true, `.pxo` files exported from v1.0 **CANNOT** be imported to older versions.
- Due to security concerns for `.tres` files, palettes made in older versions **CANNOT** be opened in version 1.0. Version 1.0 uses `.json` files for palettes instead. However, starting with version 0.11.4, you can export your palettes as image files, which can later be imported by version 1.0 as palettes.
- Extensions made for Pixelorama v1.0 will not work for previous versions, and extensions made for Pixelorama v0.x will also not work for v1.0. This is due to the fact that 0.x versions use Godot 3, while 1.0 uses Godot 4.
- For the same reason as above, custom shortcut profiles made for v1.0 will not work for previous versions, and vice versa.
- While user interface layouts are technically compatible between 0.x and 1.0 versions, it's recommended to remove the old layouts (if you have made any) and make them again in v1.0, as they may not appear correctly, due to the fact that v1.0 has new panels.

## Command Line Interface
Pixelorama now has its own basic Command Line Interface, which allows you to do stuff such as exporting your projects, from the command line. This is very helpful for automating tasks.

## Full changelog:
The changes described above are just the tip of the iceburg! There are so many more additions, improvements and fixes that are coming in version 1.0:

### Added
- Multiple layer blend modes are finally here! Note that group blending is not currently supported. [#911](https://github.com/Orama-Interactive/Pixelorama/pull/911)
- Non-destructive layer effects have been implemented. [#940](https://github.com/Orama-Interactive/Pixelorama/pull/940)
- A new curve tool has been implemented. It contains a "fill shape" tool option, allowing it to be used as a polygon tool as well. [#1019](https://github.com/Orama-Interactive/Pixelorama/pull/1019)
- [Pixelorama is now available on Steam!](https://store.steampowered.com/app/2779170). Consider purchasing on Steam as a way to support the development of the project, and getting benefits such as automatic updates and even Steam Achievements!
- An extension explorer has been integrated into Pixelorama, allowing for easy extension downloading from the internet. [#910](https://github.com/Orama-Interactive/Pixelorama/pull/910)
- Export to video formats. FFMPEG is required to be installed in the device in order for video exporting to work. [#980](https://github.com/Orama-Interactive/Pixelorama/pull/980)
- Importing video formats and gif files is also possible, but FFMPEG is again required for this.
- Basic clipping mask functionality has been implemented. Enabling clipping mask on a layer will use the layer directly below it as the mask. Note that right now group layers cannot be used as masks.
- Alpha lock has been added as a global tool option. When enabled, users can only draw on non-transparent pixels.
- Export to webp and jpeg file formats. Webp is currently only for static images and does not support animations.
- A basic Command Line Interface has been implemented, to help with automating mass project file exporting. [#579](https://github.com/Orama-Interactive/Pixelorama/discussions/579)
- A 64-bit ARM build is now also available along with the 32-bit ARM build.
- Dragging and dropping multiple frames or layers to re-arrange them is now (finally!) supported, instead of only moving the last layer/frame selected.
- Users can now create new tags from the frame right-click menu, by clicking on "New Tag".
- It is now possible to edit a tag's properties by clicking on its name from the timeline, and to move and resize it by dragging its edges.
- Users can now resize the timeline's cel size from the timeline settings, which used to be onion skinning settings.
- Exporting the project's data to a separate JSON file is now possible from the export dialog.
- Native file dialogs are now supported and can be enabled from the Preferences!
- Dialog popups can now be native OS windows instead of embedded within Pixelorama's main window. This can be changed from the Preferences.
- Added some missing shortcuts for buttons. [#900](https://github.com/Orama-Interactive/Pixelorama/pull/900)
- Palette colors can now be sorted.
- Added new Pixelize and Palettize effects. Pixelize makes the image pixelated, and Palettize maps the color of the input to the nearest color in the selected palette. Useful for limiting color in pixel art and for artistic effects. Can also act as a workaround for the current lack of a proper indexed mode.
- Exporting each layer as a different file is now possible.
- The bucket tool now supports filling while the mouse is moving and the button is still being held.
- A new boot splash image is being shown when Pixelorama is loading, instead of a gray color.
- The brush increment/decrement shortcuts can now be changed. [#900](https://github.com/Orama-Interactive/Pixelorama/pull/900)
- Changing layers is now possible with keyboard shortcuts (Control + Up/Down arrow keys by default).
- A "Crop to Selection" option has been added to the Image menu, that crops the image based on the active selection.
- A stabilizer for smoother drawing has been implemented.
- Users can now add custom data in the form of text in their projects, layers, frames, tags and cels.
- Image brushes can now be flipped and rotated with 90 degree steps in the tool options. [#988](https://github.com/Orama-Interactive/Pixelorama/pull/988)
- Added support for inverted tablet pens. [#966](https://github.com/Orama-Interactive/Pixelorama/pull/966)
- Added new dialogs for cel, layer and project properties. Cel and layer which can be accessed by right-clicking cel and the layer buttons in the timeline respectively, while project properties can be found under the Image menu.
- A new z-index property has been added to the cel properties, allowing for independent, per-frame layer ordering.
- Dragging and dropping images directly from a Web browser into Pixelorama is now possible! Note that this may not work with all browsers.
- Pasting tags from other projects is now possible. [#946](https://github.com/Orama-Interactive/Pixelorama/pull/946)
- A new "Pixelorama" palette has been added to the default palettes.
- <kbd>Control + Shift + T</kbd> has been added as a default shortcut that opens the last project.
- Imported `.gpl` palettes now take into account their "Columns" field. [#1025](https://github.com/Orama-Interactive/Pixelorama/pull/1025)
- "Snap to" settings from the View menu are now being remembered between sessions.
- The step of the zoom and rotation canvas sliders can now be snapped, to 100 and 45 respectively.
- It is now possible to change the color space of gradients from sRGB, which is the default, to Linear sRGB and Oklab.
- 3D layers now support torus shapes. [#900](https://github.com/Orama-Interactive/Pixelorama/pull/900)
- Image effect animation now supports the tweening transition method of spring. [#900](https://github.com/Orama-Interactive/Pixelorama/pull/900)
- Added a new Rose theme.

### Changed
- The file format of pxo files has been changed. Pxo files are now zip files in disguise. [#952](https://github.com/Orama-Interactive/Pixelorama/pull/952)
- Similarly, the file format of Pixelorama's palette files has been changed from .tres back to .json as they used to be in the past. This change had to happen due to [security concerns regarding Godot's resource files](https://github.com/godotengine/godot-proposals/issues/4925). [#967](https://github.com/Orama-Interactive/Pixelorama/pull/967)
- Changes made to the User Interface layouts are now automatically being saved. To restore a default layout, users can go to Window > Manage Layouts > Add and select from one of the default layouts.
- Pixelorama's icon has changed.
- The config file has been renamed from "cache.ini" to "config.ini". This effectively means that preferences edited in v0.x will not be automatically be carried over to v1.0.
- The colors of the themes has been limited and grouped to allow for easier theming, using this [new stand-alone tool](https://github.com/Orama-Interactive/PixeloramaThemeCreator).
- The color picker is now always visible in the user interface as its own panel, instead of being a popup. The previous color buttons have been re-purposed to allow for setting whether the color being selected is for the left or the right tool.
- The color pickers has been vastly improved, thanks to the update to Godot 4. Users can now use the OKHSL color mode, and choose between four different picker shapes: HSV Rectangle (default), HSV Wheel, VHS Circle and OKHSL Circle.
- The opacity slider in the timeline now affects layer opacity and not cel opacity. Cel opacity has been moved to the cel properties dialog.
- Bucket tool's "similar colors" mode now changes the same color in all selected cels, acting as a color replace for multiple cels.
- The timeline's UI has been changed to better indicate which cels are selected and improves on how child layers of groups are being shown.
- The onion skinning settings has been changed into general timeline settings.
- Cel-specific effects have been moved from the Image menu into the new Effects menu.
- Linked cels no longer have a colored outline, they now have a rectangle behind their preview which makes linked cels look like they are chained together.
- "Crop Image" has been renamed to "Crop to Content".
- Imported images automatically become new projects without opening the import dialog, if there is only one project open, and that project is empty.
- Window opacity is disabled by default to improve performance, but it can be enabled in the Preferences.
- Reference images have received some nice improvements, including undo/redo and easy transformations directly on the canvas. [#961](https://github.com/Orama-Interactive/Pixelorama/pull/961)
- The add/remove swatch color buttons have been moved to the same horizontal container as the palette select and add/edit palette buttons, allowing for Inkscape-like horizontal placement of the palette panel, without any wasted space.
- Cel buttons now hide their transparent background when their corresponding cels are empty, instead of just dimming them.
- Every shader-based image effect is automatically working without the need to change renderers, and they all work now on the Web version. This comes at the cost of less compatibility, as the desktop version now requires OpenGL 3.3 minimum instead of 2.1, and the Web version requires WebGL 2 instead of WebGL 1. [#900](https://github.com/Orama-Interactive/Pixelorama/pull/900)
- The dynamics popup only show the relevant properties to which dynamics are currently toggled on.
- When attempting to enable an extension, a confirmation dialog appears, as an extra security step.
- The aspect ratio button in the Scale Image dialog is toggled on by default.
- Negative values in shading tool options are now allowed. [#1015](https://github.com/Orama-Interactive/Pixelorama/issues/1015)
- If "Include frame tags in the file name" is enabled in the export window, the tag name is included even when exporting a single file.
- When deleting an extension, a confirmation window now appears that lets users either to delete the palette permanently, move it to trash, or cancel. [#919](https://github.com/Orama-Interactive/Pixelorama/pull/919)
- "Developers" and "Contributors" have been merged into "Authors" in the About dialog. "Donate" has also been removed from there, and a new "Support Pixelorama's Development" option has been added to the Help menu.

### Fixed
- There should be less crashes overall. 0.x versions crashed randomly on some devices, probably due to how Godot 3 handled memory management for images, but 1.0 no longer seems to cause these crashes.
- Performance when drawing and doing operations such as bucket area fill should be better now. [#900](https://github.com/Orama-Interactive/Pixelorama/pull/900)
- Selections now scale properly when they are not transforming any image content. [#774](https://github.com/Orama-Interactive/Pixelorama/issues/774)
- The aspect ratio is now being kept correctly in image effect dialog previews.
- Dividing by zero in value sliders and spinboxes no longer crashes the program.
- Default palettes are now available for clean installs on macOS. [#1008](https://github.com/Orama-Interactive/Pixelorama/pull/1008)
- When drawing, the focus of other GUI elements of the application now gets released. This prevents behaviors such as switching the focus of GUI elements with, for example, the arrow keys while moving the canvas or an active selection with the arrow keys.
- The canvas no longer remains in the drag state when the mouse it outside of it. Meaning, if the middle mouse button or space is being pressed to drag the canvas, and the mouse gets out of the canvas while the button is still pressed and then it is released, when the mouse re-enters the canvas, it is no longer being dragged.
- Pixelorama no longer quits when saving from the File menu, if the user attempted to save on exit before and cancelled the save file dialog.
- The delete layer button is now immediately disabled when locking a layer, thus preventing the user from being able to delete a locked layer.
- Fixed a bug where the exported files had the wrong tag name, if "Include frame tags in the file name" was enabled.
- The text of the rulers is now being properly clipped. [#1023](https://github.com/Orama-Interactive/Pixelorama/pull/1023)

### Removed
- BubbleGum16, Complementary, Monochromatic, Shades and Triad palettes have been removed from the default palettes.
- The frame tag button has been removed from the timeline.
- It is no longer possible to change the renderer from the Preferences, as GLES3 is now the only option.

## The Future of Pixelorama
I have many more ideas for Pixelorama that I want to work on and implement for the future. But that future depends on you. As a free and open source project, we need and rely on your support, so if you like what you see, please consider supporting us so we can keep working on the project we love. Here are some ideas that I have for future versions. Note that it's not 100% certain when and if these will be implemented, but I will do my best!
- Indexed mode.
- Tilemap layers.
- Vector layers, for non-destructive shape editing and text editing.
- An Android version.
- Animated layer effects, with support for custom shader loading.
- A more powerful brush system, perhaps giving the ability for users to create their own code-based brushes instead of just images.
- More love for the 3D layers, such as the ability to edit an object's material, and load and export GLTF files.
- Performance improvements, especially for operations that affect a large number of pixels. Some of the algorithms we use may have to be re-written in C++.
- The ability to rotate and skew selections directly with gizmos.
- Make the shading tool have a mode that takes darker and lighter colors from the palette.
- Color curves and brightness/contrast adjusting.
- Save gradients so that they can be re-used easily, and give the options to users to add their own dithering matrices.


Thank you all for taking the time to read this blog post and for supporting us. We appreciate every and each one of you, with special thanks to our contributors, our translators and our [patrons](https://www.patreon.com/OramaInteractive)! Happy painting, and keep pixelating your dreams.

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
