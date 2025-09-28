---
title: "Pixelorama v1.1.5 is out!"
slug: pixelorama-1.1.5-is-out
date: 2025-09-06
image: /img/blog/pixelorama-1.1-is-out/main.png
authors: [Overloaded]
---

![Artwork by Roroto Sic, made with Pixelorama](/img/blog/pixelorama-1.1-is-out/main.png)
Artwork by [Roroto Sic](https://linktr.ee/Roroto_Sic), one of the artists for v1.1's splash screen artworks.

Another maintenance release, Pixelorama v1.1.5 arrives today! As usual, there are some nice quality of change improvements and bug fixes, and some of the new features include project palettes (with undo/redo support!), and support for loading Krita and Piskel files, as well as support for loading animations from Photoshop files and palettes from Aseprite files.

<!-- truncate -->

If you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

## Full changelog of version 1.1.5:

### Added
- Project palettes have been implemented, with undo/redo support! [#1335](https://github.com/Orama-Interactive/Pixelorama/pull/1335)
- Implemented loading Krita (`.kra`) files with animation support. Only projects using RGBA with 8-bit color depth are supported at the moment.
- Loading animations from Photoshop (`.psd`) files is now possible.
- Loading palettes from Aseprite (`.ase`/`.aseprite`) files is now possible.
- Implemented loading Piskel (`.piskel`) files with animation support.
- Added a zoom parameter to the offset shader. [#1330](https://github.com/Orama-Interactive/Pixelorama/pull/1330)
- The currently selected frame & layer are now remembered inside `.pxo` files.
- Added an option to transform content in Modify selection. [#1309](https://github.com/Orama-Interactive/Pixelorama/pull/1309)
- Relative paths are now supported in the CLI. [#1326](https://github.com/Orama-Interactive/Pixelorama/pull/1326)

### Changed
- Bumped extensions API version to 7.
- When clicking on the remove layer button, now all selected layers get removed. This is consistent with how frames get deleted, and is what users would expect.
- During animation playback on frames of a tag, if the user changes to a frame of a different tag, then the frames of that tag are being played. [#1311](https://github.com/Orama-Interactive/Pixelorama/pull/1311)
- Using the move tool on a tilemap layer while draw tiles mode is active now clears the selection, if there is any. [#1340](https://github.com/Orama-Interactive/Pixelorama/pull/1340)
- Current frame & layer are used as default values when importing an image as a new frame, new layer or to replace a cel.

### Fixed
- The bucket tool's flood fill has been further optimized. [#1306](https://github.com/Orama-Interactive/Pixelorama/pull/1306)
- Creating rectangular selections now snap to the grid correctly, if snapping is enabled. [#1338](https://github.com/Orama-Interactive/Pixelorama/pull/1338)
- Pasted selections now get snapped to grid. [#1340](https://github.com/Orama-Interactive/Pixelorama/pull/1340)
- Pasting a selection on a tilemap layer while draw tiles mode is active now updates the tileset. [#1340](https://github.com/Orama-Interactive/Pixelorama/pull/1340)
- Backups no longer appear in the recent project list. [#1341](https://github.com/Orama-Interactive/Pixelorama/pull/1341)
- The names of the projects are no longer being translated in tabs. [#1334](https://github.com/Orama-Interactive/Pixelorama/issues/1334)
- Fixed the drop shadow dialog not having a selected option by default for the affect option button.


Happy painting, and keep pixelating your dreams! 🎨✨

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
