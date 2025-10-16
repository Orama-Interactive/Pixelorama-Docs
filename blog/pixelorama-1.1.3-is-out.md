---
title: "Pixelorama v1.1.3 is out!"
slug: pixelorama-1.1.3-is-out
date: 2025-08-06
authors: [Overloaded]
image: /img/blog/pixelorama-1.1.1-is-out/main.png
---
![Artwork by BearSaidNo, made with Pixelorama](/img/blog/pixelorama-1.1.1-is-out/main.png)
Artwork by [BearSaidNo](https://bearsaidno.neocities.org/), one of the artists for v1.1's splash screen artworks.

Pixelorama v1.1.3 is here! 🎉 Mostly a maintenance release, containing a lot of important bug fixes, but it also comes with a few new features. The most significant change in this update is the fact that the tilemap layer system has been refactored behind the scenes, which affects the behavior of isometric tiles. **Make sure to keep backups of your old projects if they contain isometric tiles.**

If you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

<!-- truncate -->

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

## Full changelog of version 1.1.3:

### Added
- Implemented limited support of Photoshop (.psd) file importing. [#1308](https://github.com/Orama-Interactive/Pixelorama/pull/1308)
- Added ability to edit individual tiles in tilemap layers even in place only mode. [#1253](https://github.com/Orama-Interactive/Pixelorama/pull/1253)
- Added support for batch removal of unused tiles in tilemap layers. [#1253](https://github.com/Orama-Interactive/Pixelorama/pull/1253)
- Added a way to re-apply the last image effect from the Effects menu. [#1310](https://github.com/Orama-Interactive/Pixelorama/pull/1310)
- Clicking a palette swatch with the left/right color now directly adds the color to that swatch. [#1300](https://github.com/Orama-Interactive/Pixelorama/pull/1300)
- You can now remove colors from palette swatches by holding <kbd>Control</kbd> while clicking on them. [#1300](https://github.com/Orama-Interactive/Pixelorama/pull/1300)
- A new "Auto add colors" option has been added. When enabled, new colors drawn on canvas will automatically get added to the palette, if space is available. [#1300](https://github.com/Orama-Interactive/Pixelorama/pull/1300)
- An "ignore in onion skinning" layer property has been added.

### Changed
- The tilemap layer system has been refactored behind the scenes. **This has changed how isometric tiles are being handled, so make sure to keep backups of your old projects if they contain isometric tiles.** [#1253](https://github.com/Orama-Interactive/Pixelorama/pull/1253)
- Isometric tilemap layers now use a pixelated grid that is more accurate. [#1252](https://github.com/Orama-Interactive/Pixelorama/pull/1252)
- The backup system has been re-written, now multiple old sessions are being stored, regardless if Pixelorama crashes or not.  [#1299](https://github.com/Orama-Interactive/Pixelorama/pull/1299)
- Made the movement of frame tags more intuitive. [#1281](https://github.com/Orama-Interactive/Pixelorama/pull/1281)

### Fixed
- Fixed transformations making semi-transparent pixels darker due to alpha pre-multiplication.
- Resizing selections while holding Shift now works properly from all corners.
- Fixed resizing tilemap selection when the tilemap cel grid has an offset.
- Fixed loading APNGs.
- Significantly improved performance of the bucket tool, when a selection is active. [#1304](https://github.com/Orama-Interactive/Pixelorama/pull/1304)
- Made the offset pixels effect only accept integer values for the offset.
- The FX icon in the layer button is now properly if all effects have been applied.
- Fixed crash when increasing the width of a palette.
- Fixed crash when creating a convolution matrix layer effect.

Happy painting, and keep pixelating your dreams! 🎨✨

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
