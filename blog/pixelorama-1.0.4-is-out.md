---
title: "Pixelorama v1.0.4 is out!"
slug: pixelorama-1.0.4-is-out
date: 2024-09-25
authors: [Overloaded]
image: /img/blog/pixelorama-1.0.4-is-out/main.png
---

```mdx-code-block
import floating_windows from '@site/static/img/blog/pixelorama-1.0.4-is-out/floating_windows.mp4';
```

![Artwork by Roroto Sic, made with Pixelorama](/img/blog/pixelorama-1.0-is-out/main.png)
Artwork by Roroto, one of the artists for v1.0's splash screen artworks.

Greetings and salutations friends! A new Pixelorama update arrives today, and with quite a lot of goodies this time!

Probably the biggest new feature of them all is the ability to make panels into floating windows! To use this feature, you first have to enable "Moveable panels" from the Window menu, tabs will appear on top of every panel. On the right side of these tabs, you will have a menu with a single option - "Make floating". Click on that and the panel will become its own window. Close the window to turn it back into a panel. If you have "single window mode" disabled from the preferences, the windows will also be able to be placed outside of Pixelorama's main window, which can be pretty useful for multi-monitor setups!

<video controls style={{ maxWidth: "100%", height: "auto" }}>
    <source src={floating_windows} type="video/mp4">
    </source>
Your browser does not support the video tag.
</video>
A short video showcasing the aforementioned feature.

<!-- truncate -->

Another important new feature is the new “Color replace” mode of the Shading tool. This mode allows you to choose colors from a palette as lights or shadows, similar to how Aseprite's shading ink works, in contrast to the other two modes that generate new colors. This is useful if you want to limit your sprite’s colors to a specific palette.

As always, if you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

Full changelog of version 1.0.4:

### Added
- It is now possible to make panels into floating windows. This allows for any panel in the user interface to be its own window, and if single window mode is disabled, you can move these windows anywhere you want. This is especially useful for multi-monitor setups.
- Added a new "color replace" mode to the Shading tool, that uses the colors of the palette to apply shading. [#1107](https://github.com/Orama-Interactive/Pixelorama/pull/1107)
- Added a new Erase blend mode. [#1117](https://github.com/Orama-Interactive/Pixelorama/pull/1117)
- It is now possible to change the font, depth and line spacing of 3D text.
- Implemented the ability to change the font of the interface from the preferences.
- Clipping to selection during export is now possible. [#1113](https://github.com/Orama-Interactive/Pixelorama/pull/1113)
- Added a preference to share options between tools. [#1120](https://github.com/Orama-Interactive/Pixelorama/pull/1120)
- Added an option to quickly center the canvas in the View menu. Mapped to <kbd>Shift + C</kbd> by default. [#1123](https://github.com/Orama-Interactive/Pixelorama/pull/1123)
- Added hotkeys to switch between tabs. <kbd>Control+Tab</kbd> to go to the next project tab, and <kbd>Control+Shift+Tab</kbd> to go to the previous. [#1109](https://github.com/Orama-Interactive/Pixelorama/pull/1109)
- Added menus next to each of the two mirroring buttons in the Global Tool Options, that allow users to automatically move the symmetry guides to the center of the canvas, or the view center.
- A new Reset category has been added to the Preferences that lets users easily restore certain options.

### Changed
- Bumped extensions API version to 5.
- The screen no longer remains on when idle, avoiding unnecessary power consumption. [#1125](https://github.com/Orama-Interactive/Pixelorama/pull/1125)
- The export dialog's resize slider now allows for values greater than 1000.
- Made some UI improvements to the rotate/flip image brush options. [#1105](https://github.com/Orama-Interactive/Pixelorama/pull/1105)
- The bucket tool now picks colors from the top-most layer, like the rest of the drawing tools.

### Fixed
- The move tool preview is now properly aligned to the pixel grid.
- Camera zoom is now being preserved when switching between projects.
- Projects are no longer being saved with the wrong name in the Web version.
- Fixed 3D Shape Edit tool option values not updating when switching between 3D objects.
- Using the bucket tool while moving the cursor and also holding the color picker shortcut (Alt by default), now picks colors instead of actually using the tool.
- Tool previews are now being properly cleared when switching to other tools before finishing the action being performed by the previous tool.
- Fixed icons not being set to the correct color when launching Pixelorama with the dark theme.
- Fixed some text in the About dialog not having the text color of the theme.
- Fixed the backup confirmation dialog closing when clicking outside of it when single window mode is disabled.
- The dynamics dialog is now set to its correct size when something is made visible or invisible. [#1104](https://github.com/Orama-Interactive/Pixelorama/pull/1104)
- The color picker values no longer change when using RAW mode. [#1108](https://github.com/Orama-Interactive/Pixelorama/pull/1108)
- Fixed some icon stretch and expand modes in the UI. [#1103](https://github.com/Orama-Interactive/Pixelorama/pull/1103)

Thank you all for taking the time to read this blog post and for supporting us. We appreciate every and each one of you, with special thanks to our contributors, our translators and our [patrons](https://www.patreon.com/OramaInteractive)! Happy painting, and keep pixelating your dreams.

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
