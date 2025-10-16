---
title: "Pixelorama v1.0.5 is out!"
slug: pixelorama-1.0.5-is-out
date: 2024-11-18
authors: [Overloaded]
image: img/blog/pixelorama-1.0.5-is-out/main.png
---
![Artwork by Wishdream, made with Pixelorama](/img/blog/pixelorama-1.0.1-is-out/main.png)

Artwork by Wishdream, one of the artists for v1.0's splash screen artworks.

Greetings everyone, a new Pixelorama version just dropped today! Version 1.0.5 is here with some nice fixes and a few new features.

While we have been working on this update, we have also been preparing the next big version, v1.1 at the same time! If all goes well, it will be the next update after this one, and it will contain some huge new features, such as a text tool and the long awaited indexed mode! Stay tuned for more information soon.

<!-- truncate -->

If you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

Full changelog of version 1.0.5:

### Added
- Add density to the square & circle brushes. 100% density means that the brush gets completely drawn. Anything less leaves gaps inside the brush, acting like a spray tool.
- Selection expanding, shrinking and borders have been added as options in the Select menu.
- Mouse buttons can now be used as menu shortcuts. [#1070](https://github.com/Orama-Interactive/Pixelorama/issues/1070)
- Added confirm and cancel buttons in the selection tool options to confirm/cancel an active transformation.
- OKHSL Lightness sorting in palettes has been implemented. [#1126](https://github.com/Orama-Interactive/Pixelorama/pull/1126)

### Changed
- The brush size no longer changes by <kbd>Control</kbd> + Mouse Wheel when resizing the timeline cels or the palette swatches.
- Improved the UI of the Tile Mode Offsets dialog and added an "Isometric" preset button.
- The Recorder panel now automatically records for the current project. This also allows for multiple projects to be recorded at the same time.

### Fixed
- Opening the Tile Mode Offsets dialog no longer crashes the application.
- Panels no longer get scrolled when using the mouse wheel over a slider.
- Fixed layer effect slider values being rounded to the nearest integer.
- Fixed memory leak where the project remained referenced by a drawing tool, even when its tab was closed.
- Fixed memory leak where the first project remained forever references in memory by the Recorder panel.
- Slightly optimize circle brushes by only calling the ellipse algorithms once while drawing

### Removed
- The Recorder panel has been removed from the Web version. It wasn't functional anyway in a way that was useful, and it's unsure if we can find a way to make it work.

Thank you all for taking the time to read this blog post and for supporting us. We appreciate every and each one of you, with special thanks to our contributors, our translators and our [patrons](https://www.patreon.com/OramaInteractive)! Happy painting, and keep pixelating your dreams.

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
