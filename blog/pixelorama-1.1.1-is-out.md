---
title: "Pixelorama v1.1.1 is out!"
slug: pixelorama-1.1.1-is-out
date: 2025-05-06
authors: [Overloaded]
image: /img/blog/pixelorama-1.1.1-is-out/main.png
---

```mdx-code-block
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
```

![Artwork by BearSaidNo, made with Pixelorama](/img/blog/pixelorama-1.1.1-is-out/main.png)
Artwork by [BearSaidNo](https://bearsaidno.neocities.org/), one of the artists for v1.1's splash screen artworks.

Say hello to Pixelorama v1.1.1! 🎉 This is a minor update, mostly containing bug fixes, but it also has some shiny new features. The most notable new feature is the support of **isometric & hexagonal tile shapes** for tilemap layers!

If you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

<!-- truncate -->

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

## YouTube channel
We have made a brand new YouTube channel for Pixelorama! This channel will be used for tutorials, feature showcases, and perhaps even some devlogs. We have a lot of ideas on videos we could make, so please stay tuned and subscribe. The first video is now live, you can watch it here:

<LiteYouTubeEmbed
  id="-FEZeitwpyY"
  params="autoplay=1&autohide=1&showinfo=0&rel=0"
  title="10 Pixelorama TIPS & TRICKS that you may not know about"
  poster="maxresdefault"
  webp
/>


## Changes to the splash screen artwork event
The splash screen artwork event for version 1.1 had a very low amount of entries compared to past events. The way it currently works is that before we release a new major version, such as 1.0 and 1.1, we announce a time period (usually around a month) where everyone can draw an artwork made with Pixelorama, and they can submit it to the `#pixelorama-splash-screen` channel in our [Discord server](https://discord.gg/GTMtr8s). This causes problems where some artists may be unavailable to work on an artwork at that time, and it also causes problems for us because the event creates an extra delay to major releases, as it is an important factor we have to take into account before a new major version.

Going forward, we are going to get rid of the time limit and allow everyone to submit artworks for the next major version **whenever they want**. This essentially means that you can submit an artwork for the next major version, which will be 1.2, **right now**. This is true for every major release from now on. The moment a new major version is out, we will start accepting entries for the next major version.

We do not have a release date for v1.2, so you will have to wait for a while before seeing it in Pixelorama. However, we believe that this new system will be beneficial for everyone, as it is more asynchronous. If you prefer the old system, you have nothing to worry about, as we will still put out an announcement before releasing a new major version to remind you to participate in the event.

If you are interested, you can join our [Discord server](https://discord.gg/GTMtr8s), where the event takes place. We have added a new role for people who are interested in receiving updates for the event, so make sure to grab it from "Channels & Roles". We hope to see a lot more entries for v1.2, and we can't wait to see what you create!

## Full changelog of version 1.1.1:

### Added
- Implemented isometric & hexagonal tile shapes for tilemap layers! [#1213](https://github.com/Orama-Interactive/Pixelorama/pull/1213)
- Implemented a hexagonal grid type, with support for both pointy-top and flat-top orientations.
- It is now possible to flatten all selected layers into one layer.
- Hexagonal pointy-top and flat-top presets have been added in the tile mode offsets dialog.
- Added a single bezier mode in curve tool, that works similarly to Aseprite's curve tool. [#1216](https://github.com/Orama-Interactive/Pixelorama/pull/1216)
- OpenRaster (`.ora`) and Aseprite (`.ase`/`.aseprite`) files are now being displayed as options in the "Open" dialog.
- Added shortcuts for going to the previous/next frame of the same tag. By default, they are mapped to <kbd>Control + < </kbd> and <kbd>Control + ></kbd> respectively.
- Holding the "automatically change layer" shortcut (<kbd>Control + Alt</kbd> by default) now displays a rectangle around the selected cel, or around the cel whose non-transparent pixels are being hovered by the cursor.
- Users can now color code their cels in the timeline.
- A button for reporting extensions has been added to the extension explorer. [#1214](https://github.com/Orama-Interactive/Pixelorama/pull/1214)

### Changed
- Resizing the canvas, cropping to content and centering frames now moves the offset of each tilemap layer instead of affecting its tileset. [#1213](https://github.com/Orama-Interactive/Pixelorama/pull/1213)
- Scaling the project also scales the size of the tiles by the same amount that the project was scaled. For example, scaling a 64x64 project to 128x64 would scale 16x16 tiles to 32x16. [#1213](https://github.com/Orama-Interactive/Pixelorama/pull/1213)
- Switched "tags by column" and "tags by rows" in the export dialog, when exporting spritesheets.
- The minimum window size has been decreased to (300, 200). [#1221](https://github.com/Orama-Interactive/Pixelorama/discussions/1221)
- The pencil/eraser/shading brush flip/rotation UI is now consistent with the tiles panel flip/rotation UI, and it also supports the same shortcuts.
- The shortcut groups in the Preferences have been re-organized. The Buttons group has been removed, instead the shortcuts are grouped according to their respective panels, such as Timeline, Global Tool Options and Palettes.
- Cels with a non-zero z-index display a "z" in the timeline.
- The reference image rotation incerement step was changed to 0.01. [#1210](https://github.com/Orama-Interactive/Pixelorama/pull/#1210)
- When opening the new tag dialog, the name field automatically grabs focus.

### Fixed
- Value sliders and rulers are no longer displaying integers as floats.
- Fixed a crash when using the lasso and polygon select tools outside of the canvas.
- Using the bucket tool on draw tiles mode on an empty tilemap no longer crashes the app. [#1213](https://github.com/Orama-Interactive/Pixelorama/pull/1213)
- Fixed a crash when switching between tilemap layers with different tilesets, while having selected tiles the positions of which do not exist on the new tilemap's tileset. [#1213](https://github.com/Orama-Interactive/Pixelorama/pull/1213)
- Duplicating tilesets in the project properties no longer crashes the app when a previously deleted tileset is still selected. [#1213](https://github.com/Orama-Interactive/Pixelorama/pull/1213)
- Fixed the import tag option not pasting the frame content, and not working for tilemap and audio layers.
- Z-indexed cels are now being rendered with their proper order in the canvas. [#1220](https://github.com/Orama-Interactive/Pixelorama/issues/1220)
- The "change layer automatically" shortcut (<kbd>Control + Alt</kbd> by default) no longer works when a selection tool is active, thus preventing the shortcut conflict with the "transform copy selected content" shortcut.
- Prevent switching project tabs and saving, if a native save file dialog is already open. This prevents rare cases of saving two open projects with the same name, thus leading to data loss.
- The native save file dialog now always has a default name for the saved .pxo file.
- Fixed horizontal scrolling on the timeline on macOS. [#1219](https://github.com/Orama-Interactive/Pixelorama/pull/1219)
- Fixed selection resizing not working from the tool options. [#1212](https://github.com/Orama-Interactive/Pixelorama/issues/1212)
- The tile indices that appear when holding <kbd>Control</kbd> and a tilemap layer is selected, now scale based on the grid cell size. [#1213](https://github.com/Orama-Interactive/Pixelorama/pull/1213)
- Applying layer effects to passthrough group layer immediately updates the canvas.
- The "select pixels" from the cel menu now works properly with undo.
- Fixed a "section not found" error in the Preferences when launching Pixelorama for the first time. [#1211](https://github.com/Orama-Interactive/Pixelorama/pull/#1211)
- Fixed the pencil density slider value not updating when switching between tools.
- Fixed the color picker acting weirdly when the alpha of the color is set to 0.
- Rulers now update whenever the canvas panel resizes.
- Fixed a regression in v1.1 where mouse button shortcuts (such as the mouse thumb buttons) were not activating tools.
- Empty audio layers now only show the audio icon in the frame where the audio is supposed to start playing.
- Fixed issue where the wrong font would be chosen for the interface in certain circumstances. [#1217](https://github.com/Orama-Interactive/Pixelorama/pull/#1217)
- Fixed canvas preview's camera not being fit to frame when Pixelorama first launches and the canvas preview is visible.

### Removed
- The "All" grid type option has been removed, as it is no longer needed since we can now display multiple grids at once.

Happy painting, and keep pixelating your dreams! 🎨✨

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
