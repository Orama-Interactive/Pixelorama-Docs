---
title: "Pixelorama v1.1.8 is out!"
slug: pixelorama-1.1.8-is-out
date: 2025-12-31
authors: [Overloaded]
image: /img/blog/pixelorama-1.1.1-is-out/main.png
---
![Artwork by BearSaidNo, made with Pixelorama](/img/blog/pixelorama-1.1.1-is-out/main.png)
Artwork by [BearSaidNo](https://bearsaidno.neocities.org/), one of the artists for v1.1's splash screen artworks.

As the year comes to an end, we show up at quite literally the last minute for a new update for you all! Version 1.1.8 is our late Christmas present to close this amazing year, and to welcome the new one. We want to take a moment to thank you all for your continuous support. Pixelorama is going to be 7 years old in 2026, and it would not have lived so long without all of your help. Thank you for the bottom of our hearts, and may the new year be an amazing one for you all!

If you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

<!-- truncate -->

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

## Full changelog of version 1.1.8:

### Added
- Added support for multi frame/cel swapping! [#1393](https://github.com/Orama-Interactive/Pixelorama/pull/#1393)
- You can now search & rename tilesets in the project properties dialog. [#1383](https://github.com/Orama-Interactive/Pixelorama/pull/#1383)
- Various improvements to the import image dialog have been made when importing an image as a spritesheet, such as a preset system and the ability to include or exclude empty tiles. [#1385](https://github.com/Orama-Interactive/Pixelorama/pull/#1385)
- The recorder panel now has more options, such as the ability to use FFMPEG to export the recording as a gif file, and the ability to set a custom rectangular area of the screen to record. [#1387](https://github.com/Orama-Interactive/Pixelorama/pull/#1387)

### Changed
- Gif files are now being exported frame by frame, which saves memory space and users can now see the current progress of the export. [#1396](https://github.com/Orama-Interactive/Pixelorama/pull/#1396)
- The `override.cfg` file, which is used to store settings such as single-window mode, window transparency and audio driver is now stored in the same place as the `config.ini` file, instead of the same folder as the Pixelorama executable.
- When double clicking on a layer button to rename it, the entire text is now automatically selected. [#1411](https://github.com/Orama-Interactive/Pixelorama/pull/#1411)

### Fixed
- The "apply all" toggle when importing multiple images is now faster. [#1390](https://github.com/Orama-Interactive/Pixelorama/pull/#1390)
- Fixed a visual bug with clipping masks. [#1389](https://github.com/Orama-Interactive/Pixelorama/pull/#1389)
- Clear the saved processed images from memory when closing the export dialog, so that they don't waste space in memory. [#1397](https://github.com/Orama-Interactive/Pixelorama/pull/#1397)
- Fixed selection animated borders setting not being applied on startup.
- Non-valid names for projects are no longer allowed in the project properties. [#1383](https://github.com/Orama-Interactive/Pixelorama/pull/#1383)
- Fixed guides being appended twice when loading Krita & Photoshop projects, leading to crashes when hovering over the canvas rulers.

Happy painting, and keep pixelating your dreams! 🎨✨

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
