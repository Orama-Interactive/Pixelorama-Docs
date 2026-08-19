---
title: "Pixelorama v1.2.1 is out!"
slug: pixelorama-1.2.1
date: 2026-08-19
authors: [Overloaded]
image: /img/blog/pixelorama-1.2.1/main.png
---
![Artwork by Roroto Sic, made with Pixelorama](/img/blog/pixelorama-1.2.1/main.png)

Artwork by [Roroto Sic](https://linktr.ee/Roroto_Sic), one of the artists for v1.2's splash screen artworks.

Hey everyone! Version 1.2 got released just a few weeks ago, and it is already time for a newer version, 1.2.1! This is a relatively small update, focusing mostly on bug fixes, quality of life improvements and overall polishing, but we do have some small new features as well.

Also, Pixelorama just became 7 years old as of yesterday! It's crazy to think that an experiment we started back on 2019 have evolved into this, and we are extremely grateful to you for all of your support these years. The future looks even brighter, and we can't wait to see what surprises it holds for us, together with you. Thank you from the bottom of our hearts.

If you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

<!-- truncate -->

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

## Full changelog of version 1.2.1:

### Added
- Exporting images as SVG files is now possible. Right now it's very basic, it just takes each non-transparent pixel and makes it a `<rect>` element. In the future we could add an option to merge pixels that have the same color into singular `<rect>` elements, resulting in a smaller file size, but taking a longer time to export.
- Added a new Corner Pin layer effect. [#1586](https://github.com/Orama-Interactive/Pixelorama/pull/1586)
- Right-clicking on a keyframe brings up a popup menu, which allows you to delete the keyframe.
- Support for texture blit Godot shaders have been added and users can now load their own texture blit shaders.

### Changed
- The Index Map effect has been made a lot more powerful. [#1580](https://github.com/Orama-Interactive/Pixelorama/pull/1580)
- Tool shortcuts can now be activated when the cursor is outside the canvas.
- Various quality of life improvements in the keyframe timeline, such as track folding, cursor snapping to frames, tracks are now visually distinguished from sections and the frame number appears larger if it is the current frame. [#1582](https://github.com/Orama-Interactive/Pixelorama/pull/1582)
- Sliders can now be dragged outside of their bounds, if their values can go out of bounds. Previously this was only possible either by manually typing the desired value, or by using the arrow buttons. [#1587](https://github.com/Orama-Interactive/Pixelorama/pull/1587)
- Quick tool shortcuts can now be activated when a tool is being used. [#1588](https://github.com/Orama-Interactive/Pixelorama/pull/1588)
- Projects are now marked as unsaved when you change their export directory path, file name or file format. [#1561](https://github.com/Orama-Interactive/Pixelorama/pull/1561)
- Export settings are now being stored inside pxo files. [#1574](https://github.com/Orama-Interactive/Pixelorama/pull/1574)
- The layer opacity slider is now disabled if the selected layer has opacity keyframes. [#1568](https://github.com/Orama-Interactive/Pixelorama/pull/1568)
- Sliders for 2D vectors are now separated visually in the layer effects window to make it more clear which sliders belong to which value. [#1586](https://github.com/Orama-Interactive/Pixelorama/pull/1586)

### Fixed
- Fixed gif & apng files not being exported from the CLI. [#1563](https://github.com/Orama-Interactive/Pixelorama/issues/1563)
- The quick tool shortcuts no longer get called when a multi-state tool is being used, such as the curve tool, polygon select and isometric box tool. [#1569](https://github.com/Orama-Interactive/Pixelorama/pull/1569)
- Fixed dynamics not changing the brush size, if it is set to 1px.
- The canvas can no longer move with arrow keys if the text tool is currently being used.
- Fixed the keyframe cursor being in wrong place when using mouse wheel for scroll. [#1582](https://github.com/Orama-Interactive/Pixelorama/pull/1582)
- Fixed frame auto scroll not working when keyframe cursor is moved to the left. [#1582](https://github.com/Orama-Interactive/Pixelorama/pull/1582)
- The bucket tool's pattern offset is now working on similar color & whole selection fill modes.
- Fixed text applied by the text tool not having correct transparent colors. [#1577](https://github.com/Orama-Interactive/Pixelorama/pull/1577)
- Fixed text tool options not reflecting correct settings on loading. [#1578](https://github.com/Orama-Interactive/Pixelorama/pull/1578)
- The text now respects the selection area. [#1579](https://github.com/Orama-Interactive/Pixelorama/pull/1579)
- Fixed the shape tool colored indicators not being updated to the correct size. [#1575](https://github.com/Orama-Interactive/Pixelorama/pull/1575)
- Fixed the color picker tool not defaulting to the assigned mouse button. [#1567](https://github.com/Orama-Interactive/Pixelorama/pull/1567)
- Fixed the curve editor looking wrong when adding a new Color Curves layer effect.
- Fixed rounding errors in the Index Map effect.
- Fixed an issue where the selection outline colors were not being updated when Pixelorama launches.
- Fixed a crash when using tools coming from extensions.


Happy painting, and keep pixelating your dreams! 🎨✨

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
