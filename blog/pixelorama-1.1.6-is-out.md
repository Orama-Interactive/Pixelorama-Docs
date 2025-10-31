---
title: "Pixelorama v1.1.6 is out!"
slug: pixelorama-1.1.6-is-out
date: 2025-10-31
authors: [Overloaded]
image: /img/blog/pixelorama-1.1.1-is-out/main.png
---
![Artwork by BearSaidNo, made with Pixelorama](/img/blog/pixelorama-1.1.1-is-out/main.png)
Artwork by [BearSaidNo](https://bearsaidno.neocities.org/), one of the artists for v1.1's splash screen artworks.

Trick or treat 🎃? Treat for sure, as we bring you a new version of Pixelorama as a Halloween present! Version 1.1.6 comes with various new features, such as diagonal symmetry, font loading, two new color picker shapes, and a lot more bug fixes and quality of life improvements!

If you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

<!-- truncate -->

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

## New website
We have launched a new website at https://pixelorama.org! It contains a landing page which briefly explains Pixelorama's features and contains links to download, the documentation you already know, and a blog. Feel free to let us know what you think! Starting from this version, the blog posts will be posted on Pixelorama's website instead of Orama's.

## Extension incompatibility
Due to version 1.1.6 updating to Godot 4.5.1, Pixelorama extensions exported with Godot versions prior to 4.5 will no longer work. This essentially means that you have to **re-download** the extensions you are using, if you are using any, from the extension explorer when they get updated, which they will shortly after this release. If you are an extension developer, simply re-export your extension using Godot 4.5 or 4.5.1 and it should work fine.

## Full changelog of version 1.1.6:

### Added
- Added buttons that enable diagonal symmetry!
- If Pixelorama crashed in the previous session, a window will appear the next time it is launched to let the user know that they can restore data, if there are any projects that can be restored.
- Two new color picker shapes, OK HS Rectangle and OK HL Rectangle.
- Users can now drag and drop font files to load them. Fonts can be used by the text tool, text meshes in 3D layers and the user interface itself.
- Added an Undo History dialog.
- The convolution matrix layer effect now has a kernel normalization factor.
- Added Arabic translation and made improvements to the UI so that it works better for Right-To-Left languages.
- Pixelorama can now load Lospec palettes if started with "lospec-palette://" plus the palette's name as a CLI argument. In theory, this allows Pixelorama to open when clicking on the "Open In App" button on a palette on Lospec's website, but for now **it does not work automatically**, as it requires different setup for different operating systems.
- A preview.png file is now saved inside pxo files. This can help file managers to generate thumbnails for pxo files. **Note that this doesn't mean that you will automatically see thumbnails for pxo files — it's up to file managers to implement this.**

### Changed
- **Extensions made for previous versions of Pixelorama will fail to load on this version.** Make sure to re-download the extensions you want.
- The timeline now scrolls when adding/moving layers, when the current cel is changing from shortcuts or from the timeline buttons, and when cels, frames and layers are being dragged.
- The layer effect settings dialog now scrolls automatically when dragging layer effects to re-order them.
- When moving frames using the arrow buttons in the timeline, all moved cels are now being selected. [#1358](https://github.com/Orama-Interactive/Pixelorama/pull/1358)
- The "Offset/Zoom" effect has been renamed to "Offset & Scale". [#1362](https://github.com/Orama-Interactive/Pixelorama/pull/1362)
- On Linux, the native screen color picker of the operating system is now used.
- The canvas can now be moved by arrow keys if there is a selection tool selected, but there is not an active selection. If there is, the selection itself gets moved, just like before.

### Fixed
- The canvas no longer jitters when it is zoomed out a lot and smooth zoom is enabled.
- The screen color picker now works properly on Linux, users can pick colors outside of Pixelorama's window.
- Optimized the "Mirror Image" effect when a selection is active. Now it should no longer lag on big canvases.
- Fixed a crash when a user selects a 3D object, then does an undo or redo [#1353](https://github.com/Orama-Interactive/Pixelorama/pull/1353)
- Fixed tilemap cells being erased in manual mode if there are cells outside of the canvas boundaries.
- Invisible layers are no longer included when exporting images in headless mode, such as from the command line. [#1368](https://github.com/Orama-Interactive/Pixelorama/issues/1368)
- Fixed transparent checkers not following canvas movement vertically, if "Follow canvas movement" was enabled, and "Follow canvas zoom level" was disabled from the Preferences.
- The color picker's RGB values can no longer go higher than 255. [#349](https://github.com/Orama-Interactive/Pixelorama/issues/349)
- Fixed the restore to default button in the Preferences not hiding after being clicked next to text fields and color buttons.
- Fixed the "Open last project" button in the splash screen not hiding in the Web version.

Happy painting, and keep pixelating your dreams! 🎨✨

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
