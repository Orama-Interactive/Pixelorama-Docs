---
title: "Pixelorama v1.1.9 is out!"
slug: pixelorama-1.1.9-is-out
date: 2026-04-12
authors: [Overloaded]
image: /img/blog/pixelorama-1.1-is-out/main.png
---
![Artwork by Roroto Sic, made with Pixelorama](/img/blog/pixelorama-1.1-is-out/main.png)
Artwork by [Roroto Sic](https://linktr.ee/Roroto_Sic), one of the artists for v1.1's splash screen artworks.

Hello everyone, we are alive! I know we haven't had a new update in months, but we have been quietly working on the next version, v1.1.9, as well as the next major version, v1.2. Today is the day we break the silence and finally release v1.1.9! This turned out to be quite a big update, with some new features, quality of life improvements and a series of bug fixes and performance enhancements. 

If you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

<!-- truncate -->

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

## Important: Regarding the Android version
When we published version 1.1.7, we also released an experimental Android version. Update 1.1.9 brought many improvements to it. However, its future is rather bleak. And not just Pixelorama's, but the entire Android ecosystem is in danger.

Recent changes and discussions around Android’s policies have raised concerns about the openness of the platform. There is a possibility that future restrictions could make it harder to distribute apps outside of centralized channels like the Google Play Store. This could affect alternative app stores such as F-Droid and create challenges for open source developers like us.

For Pixelorama, the plan was to first release the experimental version on itch, then eventually on F-Droid, and finally on Google Play once it’s polished enough. Depending on how the Android ecosystem evolves, we may need to rethink this approach.

We, along with many other developers, need your help. Please visit https://keepandroidopen.org/ for more information.

## Full changelog of version 1.1.9:

### Added
- It is now finally possible to split layers when exporting spritesheets! [#1456](https://github.com/Orama-Interactive/Pixelorama/pull/1456)
- Implemented the ability to export tilesets as images or Godot `TileSet` resources from the Project Properties window.
- Duplicating cels is now possible, either from the cel button menu, or by using a shortcut, which is <kbd>Alt + D</kbd> by default. [#1470](https://github.com/Orama-Interactive/Pixelorama/pull/1470)
- A search bar has been added in the Preferences.
- You can now load and save exr image files on desktop platforms.
- A read-only option for the global palettes has been added in the Preferences, that, if disabled, allows global palettes to be modified, without creating a project palette copy, like it used to work before version 1.1.5. [#1466](https://github.com/Orama-Interactive/Pixelorama/pull/1466)
- Added a "Collapse main menu" preference that unites the menu bar into a single "Main menu" button. This preference is turned on by default on mobiles, but turned off by default on other platforms.
- On mobile, quick access buttons for save, undo, redo, copy, cut, paste, delete as well as Shift, Control and Alt have been added on the top bar next to the menu.
- On the web version, a confirmation message when the user attempts to close the tab and has unsaved changes has been added.
- A max velocity setting for mice is now exposed in the dynamics panel. [#1430](https://github.com/Orama-Interactive/Pixelorama/pull/1430)
- Added new image size presets when creating a new project. [#1455](https://github.com/Orama-Interactive/Pixelorama/pull/1455)
- Added a shortcut for canvas rotation. [#1449](https://github.com/Orama-Interactive/Pixelorama/pull/1449)
- It is now possible to set a shortcut for the Grayscale View menu option. [#1443](https://github.com/Orama-Interactive/Pixelorama/pull/1443)
- Implemented support for the Thai language.

### Changed
- The export dialog's file browser has changed. Now, users select the entire path of the exported file from there, instead of just the folder, and the file name text field has been removed.
- The mimetype of pxo files has been changed to `application/x-pixelorama`.
- The export file directory & name are stored inside pxo files.
- Undo/redo now works for layer properties. [#1413](https://github.com/Orama-Interactive/Pixelorama/pull/#1413)
- Pixelorama now uses a more centralized crash monitor solution that detects both if a session has crashed, and if an extension caused Pixelorama to crash. [#1472](https://github.com/Orama-Interactive/Pixelorama/pull/1472)
- The brush size found in the dynamics panel is now relative to the brush size in the tool properties. [#1430](https://github.com/Orama-Interactive/Pixelorama/pull/1430)
- Marking folders as favorites in the file manager windows is now saved between sessions. Recent folders are also being saved. [#1434](https://github.com/Orama-Interactive/Pixelorama/pull/1434)
- The Android version no longer requires storage permissions, as now we are using the Storage Access Framework — thanks to the update to Godot 4.6.
- Extension tags are now arranged in alphabetical order in the Extension explorer, and tags are now case-insensitive. [#1458](https://github.com/Orama-Interactive/Pixelorama/pull/1458)
- Decimals are now allowed for reference image values. [#1468](https://github.com/Orama-Interactive/Pixelorama/pull/1468)

### Fixed
- Fixed major slowdown when pasting an image into a tilemap cel, or when deleting the entire cel.
- Improved idle GPU performance because the window was being constantly re-drawn, even if nothing was visibly changing.
- Brush size no longer changes in odd increments if share tool options is enabled.
- In tilesets, unselected tiles can now be deleted, if they are unused in any tilemap layer. [#1460](https://github.com/Orama-Interactive/Pixelorama/issues/1460)
- Fixed transformed tiles not getting erased in tilemaps that have place-only mode enabled.
- Fixed crash when deleting the content of a tilemap cel.
- Fixed Pixelorama freezing when exporting GIFs and when exporting to an already existing file, if single-window mode is disabled. [#1260](https://github.com/Orama-Interactive/Pixelorama/issues/1260) [#1333](https://github.com/Orama-Interactive/Pixelorama/issues/1333) 
- On mobile, the UI is no longer getting cut on fullscreen by camera notches and curved sides.
- Fixed right tool not selected by stylus when invert button is pressed. [#1426](https://github.com/Orama-Interactive/Pixelorama/pull/1426)
- Fixed various visual bugs during undo/redo. [#1432](https://github.com/Orama-Interactive/Pixelorama/pull/1432)
- Fixed toggling the "Display Layer Effects" option not updating the effects of the unselected layers. [#1457](https://github.com/Orama-Interactive/Pixelorama/pull/1457)
- In dynamics, fixed tools having a non-zero velocity even when it just started drawing. This previously caused unpredictability when modifying alpha through velocity. [#1430](https://github.com/Orama-Interactive/Pixelorama/pull/1430)
- Fixed horizontal/vertical/diagonal mirror button shortcuts not being unique.
- Undo/redo now updates all tilemap layers. [#1471](https://github.com/Orama-Interactive/Pixelorama/pull/1471)
- The cel button texture gets properly updated when importing an image to replace a cel. [#1469](https://github.com/Orama-Interactive/Pixelorama/pull/1469)
- Fixed measurements, color & tilemap indices not mirroring when "Mirror View" is toggled on. [#1465](https://github.com/Orama-Interactive/Pixelorama/issues/1465)
- Fixed project opened twice when "open last project" is enabled. [#1473](https://github.com/Orama-Interactive/Pixelorama/pull/1473)
- Fixed file override confirmation dialog from being overflown with text when exporting.
- Fixed animation tags not being visible if the last project gets loaded on startup.
- Fixed the "add extension" file dialog ignoring the "Use native file dialogs" preference.
- Fixed precision loss in perspective lines. [#1450](https://github.com/Orama-Interactive/Pixelorama/pull/1450)

Happy painting, and keep pixelating your dreams! 🎨✨

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
