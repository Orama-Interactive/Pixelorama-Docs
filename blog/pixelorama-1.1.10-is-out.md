---
title: "Pixelorama v1.1.10 is out & v1.2 enters its beta stage!"
slug: pixelorama-1.1.10-is-out
date: 2026-04-30
authors: [Overloaded]
image: /img/blog/pixelorama-1.1.1-is-out/main.png
---
![Artwork by BearSaidNo, made with Pixelorama](/img/blog/pixelorama-1.1.1-is-out/main.png)
Artwork by [BearSaidNo](https://bearsaidno.neocities.org/), one of the artists for v1.1's splash screen artworks.

What's this? Two updates in a single month? Today we are releasing version 1.1.10, mostly aimed to fix a very serious bug that corrupts any project with indexed mode that was exported from v1.1.8 and older, along with various other issues. But we also took the opportunity to sneak in a few new small features as well!

If you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

<!-- truncate -->

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

## Version 1.2 enters its beta stage
After working on the next major version for months, we believe that it's finally time for it to enter its long-awaited beta stage! The main new features include:
- A brand new keyframe mode for the timeline, that allows you to **animate non-destructive layer effects**! The UI side of things is not yet finalized, but it is functional. More info here: [#1417](https://github.com/Orama-Interactive/Pixelorama/pull/1417)
- **Autotiling support for tilemap layers**. A new tool has been added for tilemap layers that allows users to set the autotiling bits on each tile, similar to how Godot's TileSet terrain editor works. Once the autotiling bits are set, users can enable autotiling when placing tiles. Oh, and the autotiling setup is being kept when exporting to a Godot TileSet resource! More info here: [#1482](https://github.com/Orama-Interactive/Pixelorama/pull/1482)
- The 3D layer system has been completely re-written. It is now more powerful and easier to animate properties of 3D objects that was just not possible before. This has also allowed some new features, such as **drawing directly on 3D objects** (still an experimental feature) and importing GLTF scenes! Unfortunately, this **breaks compatibility of pxo files that have 3D layers between v1.2 and older versions**, so if you have projects that contain 3D layers, make sure to finish your work in v1.1.10 before using v1.2. Projects that don't have 3D layers are NOT affected and are still compatible. More info here: [#1429](https://github.com/Orama-Interactive/Pixelorama/pull/1429)

Testing would be greatly appreciated so we can ensure a stable release. We are looking forward to your feedback! To try out the beta, you can download the desktop version [here](https://nightly.link/Orama-Interactive/Pixelorama/workflows/dev-desktop-builds/master), and you can also try out the Web version [here](https://orama-interactive.github.io/Pixelorama/early_access/).

If you are using Pixelorama on Steam, you can find the beta version by going to your Steam Library, right clicking on Pixelorama, selecting Properties, and under the "Betas" tab, select the `early-access` channel in "Beta Participation".

### Splash screen event
A new major release also means a new splash screen event! Similarly to the outcome of the previous events, there can be multiple winners, not just one, with each artwork alternating randomly every time the software is opened! That of course depends on a lot of factors, including the amount of participants, how well each participant has followed the criteria, etc. If you are interested in participating, you can join our [Discord server](https://discord.gg/GTMtr8s) and read the pinned messages of the `#pixelorama-splash-screen` channel for the rules and the information that you need to know. You also have to choose a license for your artwork. Since Pixelorama is on Steam with a price, if you want your artwork to be included in the Steam version, you need to either choose a license that allows it to be used for commercial purposes, or give us explicit permission to include it there. Otherwise, it will only be included in the free versions, such as on itch.io.

Submissions will end on **May 20th 2026**, so please upload your artwork by then. We can't wait to see what you create!

## Full changelog of version 1.1.10:

### Added
- Added a license text field in the project properties, so users can optionally add a license for projects they want to share.
- Added author information in the preferences, which are then stored in `.pxo` files.
- Added a shortcut to rename layers. By default, it's <kbd>F2</kbd>. [#1481](https://github.com/Orama-Interactive/Pixelorama/pull/1481)
- Added RGB color shifting to the adjust brightness/contrast effect. [#1494](https://github.com/Orama-Interactive/Pixelorama/pull/1494)
- Exposed preferences that allow users to choose whether they want changing the visibility and the locked status of a layer to be included in the undo history. [#1488](https://github.com/Orama-Interactive/Pixelorama/pull/1488)

### Changed
- Made the adjust hue, saturation & value effect produce more predictable results. [#1494](https://github.com/Orama-Interactive/Pixelorama/pull/1494)
- Disabled the overwrite file warning that appeared in the Export dialog's "Browse" file dialog. Instead, only show the warning when clicking on Export. [#1492](https://github.com/Orama-Interactive/Pixelorama/issues/1492)

### Fixed
- Fixed a critical regression from v1.1.9, which ruined projects with indexed mode that were saved in version 1.1.8 or older. [#1491](https://github.com/Orama-Interactive/Pixelorama/issues/1491)
- Fixed issues when, during transformations, the user switched to from a selection with content transformation to a selection-only transformation (by holding <kbd>Alt</kbd> by default), and vice versa.
- Fixed copying not working when a selection-only ransformation was active.
- Fixed final images on the export dialog, that have clipping masks and invisible layers, being wrongly rendered. [#1493](https://github.com/Orama-Interactive/Pixelorama/issues/1493)
- Fixed a crash when cloning a cel when there is only one frame, and the linked cels button is pressed.
- Fixed layers and cels being misaligned in the timeline when the font size is too small. [#1441](https://github.com/Orama-Interactive/Pixelorama/issues/1441)

Happy painting, and keep pixelating your dreams! 🎨✨

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
