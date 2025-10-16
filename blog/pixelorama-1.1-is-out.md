---
title: "Pixelorama v1.1 is out!"
slug: pixelorama-1.1-is-out
date: 2025-03-28
authors: [Overloaded]
image: /img/blog/pixelorama-1.1-is-out/main.png
---
![Artwork by Roroto Sic, made with Pixelorama](/img/blog/pixelorama-1.1-is-out/main.png)
Artwork by [Roroto Sic](https://linktr.ee/Roroto_Sic), one of the artists for v1.1's splash screen artworks.

Pixelorama v1.1 is here, bringing a lot of game-changing new features! 🎉 This release introduces highly anticipated additions like tilemap layers, audio layers, indexed mode, a brand new text tool, and much more!

The journey to implement these features in such a short time has been challenging, but your incredible support has kept us going. We're thrilled to keep improving Pixelorama with the help of this amazing community. If you'd like to support the continued development and speed up future updates, consider [becoming a Patron](https://www.patreon.com/OramaInteractive) for exclusive rewards, or [grab Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), or [itch.io](https://orama-interactive.itch.io/pixelorama)!

<!-- truncate -->

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

Here is an overview of the biggest changes in this version.

## Tilemap layers
It is now possible to create tilemaps in Pixelorama, in the form of tilemap layers. Tilemap layers are a special type of pixel layer which use a tileset, and each cell of the grid has a reference to a tile from that tileset. Tilemaps are usually used when designing levels for games. Tilemap layers have a draw tiles mode which, when enabled, allows you to directly modify tiles on the canvas. You can read more information on [Pixelorama's documentation](https://www.oramainteractive.com/Pixelorama-Docs/user_manual/tilemaps).

![A GIF of a tileset being resized with selection tools, using the draw tiles mode.](/img/blog/pixelorama-1.1-is-out/tileset_selection_resize.gif)

## Indexed mode
Indexed mode is an alternative color mode to the default, which is RGBA. In indexed mode, each pixel is assigned to a number that references a palette color. This essentially means that the colors of the image are restricted to a specific palette, and they will automatically get updated when you make changes to that palette, or when you switch to a different one. More information [here](https://www.oramainteractive.com/Pixelorama-Docs/concepts/color_mode).

## Text tool
After years of waiting, a text tool is finally here. Currently this is destructive, meaning that once you confirm the text, you cannot edit it later. In the future I would also like to add non-destructive editing, either when using the text tool on a vector layer (whenever they get implemented), or by making a new type of layer entirely for text.

## Audio layers
It's been awfully quiet here. Time to make some noise! Audio layers have been added, allowing artists to easily synchronize their animations with music and sound effects. Each audio layer contains an audio file, which can be played at any time during the animation. Users can load an audio file (only `.mp3` and `.wav` files are supported at the moment), and choose the frame they want the audio to start playing. Audio also gets [imported/exported with videos, if FFMPEG is installed](https://www.oramainteractive.com/Pixelorama-Docs/user_manual/save_and_export#export-a-video).

## Custom effect loading
Do you like using effects, but find that the amount of effects Pixelorama offers is lacking? This is no longer a problem, as you can now load Godot 4 `canvas_item` shaders as custom effects. There are a few things to keep in mind, so make sure to read [the documentation](https://www.oramainteractive.com/Pixelorama-Docs/user_manual/image_effects#loading-custom-effects). In the future (maybe v1.2? 👀), we plan to create a custom effect graph which will let users create effects directly within Pixelorama itself, and it will look and function similarly to Godot's Visual Shader editor.

## Pasting from clipboard
A "Paste from Clipboard" option has been added to the Edit menu, allowing images from the operating system's clipboard to be pasted into Pixelorama. Note that copying images from Pixelorama into the OS' clipboard has not been implemented at the moment.

## Full changelog of version 1.1:

### Added
- Tilemap layers have arrived! Tilemap layers allow artists to create tiles, and easily preview and dynamically modify them within Pixelorama. [#1146](https://github.com/Orama-Interactive/Pixelorama/pull/1146)
- Indexed mode has finally been implemented! [#1136](https://github.com/Orama-Interactive/Pixelorama/pull/1136)
- Audio layers have been added, allowing artists to easily synchronize their animations with audio. [#1149](https://github.com/Orama-Interactive/Pixelorama/pull/1149)
- Added a new text tool. Destructive only for now, meaning that once the text is confirmed, it cannot be changed later. [#1134](https://github.com/Orama-Interactive/Pixelorama/pull/1134)
- A "Paste from Clipboard" option has been added to the Edit menu, allowing images from the operating system's clipboard to be pasted into Pixelorama. Note that copying images from Pixelorama into the OS' clipboard has not been implemented at the moment.
- A color curves image and layer effect has been added.
- A gradient layer effect has been added, alongside its already existing image effect equivalent, allowing for non-destructive gradient generation.
- It is now possible to load custom Godot shaders as image and layer effects.
- Importing OpenRaster (`.ora`) and Aseprite (`.ase`/`.aseprite`) files is now possible. Exporting to these file formats is not yet supported.
- Loading custom dithering patterns as images is now possible. This is not exposed somewhere in the UI yet, users have to go to Pixelorama's data folder (the same place where its settings, backups etc are kept), and create a "dither_matrices" folder and add the images there.
- A new Reset layout option has been added to the Layouts submenu, that can be used to reset default layouts to their original state.
- Implemented support for multiple grids. [#1122](https://github.com/Orama-Interactive/Pixelorama/pull/1122)
- Overhauled the gradient edit widget's UI and added options such as reverse and evenly distribute points, and gradient presets.
- Users can now color code their layers in the timeline.
- A new "Select cel area" option has been added to the Selection menu that makes a rectangular selection around the content of the active cel, and it is mapped to <kbd>Control + T</kbd> by default.
- Added a "Select pixels" option in the right click popup menu button of cel buttons
- Added a shortcut to swap tools, <kbd>Shift + X</kbd> by default. [#1173](https://github.com/Orama-Interactive/Pixelorama/pull/1173)
- Added <kbd>V</kbd> as the default shortcut for the crop tool.
- A "Show Reference Images" option has been added to the View menu, allowing quick and easy reference image toggling.
- Hiding the notification labels is now possible from the Preferences.
- StartupWMClass has been added to Pixelorama's Linux .desktop file. [#1170](https://github.com/Orama-Interactive/Pixelorama/pull/1170)

### Changed
- The Manage Layouts dialog has been replaced by new items in the Layouts submenu, that are responsible for adding and deleting layouts.
- The default shortcuts of the Move tool and the Pan tool have been changed to <kbd>M</kbd> and <kbd>A</kbd> respectively.
- The "Image" menu has been renamed to "Project". This name should be more accurate, since this menu has options that affect the entire project.
- Simplified the change layer automatically shortcut to just <kbd>Control + Alt</kbd>.
- The image and layer effects have been organized into subcategories.
- Layer buttons in the timeline now have a small icon on their right side that denotes their type, such as pixel layers, group layers, 3D layers, tilemap layers and audio layers.
- Layer buttons in the timeline also have an icon if the layers contain at least one layer effect.
- The import dialog is always being opened when opening images from File > Open.
- The extension crash preventing system has been revised. [#1177](https://github.com/Orama-Interactive/Pixelorama/pull/1177)
- The minimum cel size is now smaller, and it can get even smaller by decreasing the font size from the Preferences.
- System font names are now sorted by alphabetical order.
- The red, green, blue and alpha buttons in invert and desaturate layer effects have been made into "RGBA" buttons instead of checkboxes, just like they are in their image effect counterparts.
- "Tile Mode" under the Selection menu has been renamed to "Wrap Strokes". This does not affect the "Tile Mode" option in the View menu. [#1150](https://github.com/Orama-Interactive/Pixelorama/pull/1150)
- Improved the look of 3D object gizmos. [#1194](https://github.com/Orama-Interactive/Pixelorama/pull/1194)
- Re-organized the licenses in the About dialog. There are now three license categories, the Pixelorama license, the Godot licenses and the third-party licenses.

### Fixed
- The text is no longer blurry and hard to read of menus and dialog windows, if the display scale is set to anything but 100%. This was fixed due to the update to Godot 4.4. [#1065](https://github.com/Orama-Interactive/Pixelorama/issues/1065)
- Saving pxo files should no longer freeze the application on GNOME, when using native file dialogs. This was fixed due to the update to Godot 4.4. [#1115](https://github.com/Orama-Interactive/Pixelorama/issues/1115)
- Fixed crash when Pixelorama starts without a palette.
- Undo/redo now works again when the cursor is hovering over the timeline.
- The first frame is no longer exported twice when using ping-pong loop.
- Fixed pencil/eraser/shading previews turning white for a brief moment when changing image brushes, and when switching between tools.
- Fixed the preview on the left tool not being visible, if the right tool had a preview. [#1157](https://github.com/Orama-Interactive/Pixelorama/issues/1157)
- Dialogs that are children of other dialogs now always appear on top, to avoid issues where they could hide behind their parents and causing confusion that made Pixelorama seem unresponsive.
- Palette swatches now get deleted when the user removes all palettes.
- The CLI's output option now works with filepaths instead of just filenames. [#1145](https://github.com/Orama-Interactive/Pixelorama/pull/1145)
- Fixed a crash when importing a model in a 3D layer. [952498a](https://github.com/Orama-Interactive/Pixelorama/commit/952498a2b8a72f0c7cdca87e763fc18ea12d8b5f)
- Loading obj files as custom models in 3D layers that are not paired with .mtl files now works. [#1165](https://github.com/Orama-Interactive/Pixelorama/issues/1165)
- Fixed a UI bug where the minimum size of the panels was not calculated correctly. [a28b526](https://github.com/Orama-Interactive/Pixelorama/commit/a28b526645d2cc085b0d3eca9d0756aee8a6f978)
- Dockable panels are now properly sorted when toggling movable panels. [d7ba7fe](https://github.com/Orama-Interactive/Pixelorama/commit/d7ba7fe6fc4f2efb587234634020bf567474dba9)
- Changing the name of pxo files when saving them in the Web version now works as intended. [faae464](https://github.com/Orama-Interactive/Pixelorama/commit/faae4648f0751b72cff0ff174c74cac2c499b994)
- Pixelorama's window no longer spawns at the position of a monitor that has been disconnected. [#1189](https://github.com/Orama-Interactive/Pixelorama/pull/1189)
- Fixed the resize canvas dialog's offset not resetting to zero on dialog popup. [f273918](https://github.com/Orama-Interactive/Pixelorama/commit/f273918368f568f860a8d08d28f5c9d9346461a4)
- Fixed group layer blending when they contain invisible layers. [#1166](https://github.com/Orama-Interactive/Pixelorama/issues/1166)
- Fixed color picker changing hue when modifying the saturation and value inside the color picker shape. [3f2245c](https://github.com/Orama-Interactive/Pixelorama/commit/3f2245cd9bc81b1a244ae394927aa074650a5d70)
- Fixed the Palettize effect and palette exporting to images storing slightly wrong color values. [77f6bcf](https://github.com/Orama-Interactive/Pixelorama/commit/77f6bcf07bd80bc042e478bb883d05900cebe436)
- Fixed some issues with the Palettize effect where the output would be different if the palette size changed and empty swatches were added, even if the colors themselves stayed the same. Initially fixed by [bd7d3b1](https://github.com/Orama-Interactive/Pixelorama/commit/bd7d3b19cc98804e9b99754153c4d553d2048ee3), but [1dcb696](https://github.com/Orama-Interactive/Pixelorama/commit/1dcb696c35121f8208bde699f87bb75deff99d13) is the proper fix.
- The lasso and polygon select tools now select all expected pixels without gaps, when the selection goes out of the canvas bounds.
- Fixed bug where the child windows of floating windows appear behind them.
- Fixed layouts overwriting the position info of panels, which were added by extensions. [#1172](https://github.com/Orama-Interactive/Pixelorama/pull/1172)
- Image export with split layers no longer ignores layer effects. [#1193](https://github.com/Orama-Interactive/Pixelorama/issues/1193)
- Fixed recorder label not updating when project is changed. [#1139](https://github.com/Orama-Interactive/Pixelorama/pull/1139)
- The vertical scrollbar in the timeline is no longer visible when it's not needed.
- Fixed a bug where the mouse cursor does not reset to default when hovering over a selection gizmo, and the selection gets cleared. [ead7593](https://github.com/Orama-Interactive/Pixelorama/commit/ead7593e7e4013238b9e935ee24d8cea0ad49b38)
- Fixed a curve tool preview bug where the preview was changing when the cursor was moving, but the end point was staying the same. [d0fef33](https://github.com/Orama-Interactive/Pixelorama/commit/d0fef332315a856d3ef0384eddee89c6c61eb6e0)


## What's next?
When v1.0 was released, I wrote some plans I had for the future of Pixelorama. I am happy to say that a lot of the stuff from that list have now been implemented, such as the indexed mode, tilemap layers, custom shader loading, shading tool mode that works directly with palette colors, color curves, brightness/contrast adjusting, gradient saving and custom dithering pattern support. All that (and so many more!) in the span of just 8 months! But, of course, there is still so much more to be done, and we will keep needing your support in order to implement these new features. These are my current plans, in no particular order:

- An effect graph which will let users create effects directly within Pixelorama itself.
- An Android version.
- Vector layers, for non-destructive shape editing and text editing.
- The ability to rotate and skew selections directly with gizmos.
- Autotiling for tilemap layers.
- Even more tools, such as a gradient tool.
- Support for skeletal, bone-based 2D animation system.
- A more powerful brush system, perhaps giving the ability for users to create their own code-based brushes instead of just images.
- Better compatibility with other software, such as exporting directly to Godot nodes and resources in the form on AnimationPlayer, AnimatedSprite, TileSet and TileMapLayer, etc.
- More love for the 3D layers, such as the ability to edit an object's material, and load and export GLTF files.
- Performance improvements, especially for operations that affect a large number of pixels. Some of the algorithms we use may have to be re-written in C++.

Thank you so much for reading and for your continued support of Pixelorama! We truly appreciate each and every one of you—especially our contributors, translators and [patrons](https://www.patreon.com/OramaInteractive)! Your support means the world to us.

Happy painting, and keep pixelating your dreams! 🎨✨

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
