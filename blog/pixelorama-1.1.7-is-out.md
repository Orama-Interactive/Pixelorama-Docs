---
title: "Pixelorama v1.1.7 is out, with an experimental Android version!"
slug: pixelorama-1.1.7-is-out
date: 2025-11-29
authors: [Overloaded]
image: /img/blog/pixelorama-1.1-is-out/main.png
---
![Artwork by Roroto Sic, made with Pixelorama](/img/blog/pixelorama-1.1-is-out/main.png)
Artwork by [Roroto Sic](https://linktr.ee/Roroto_Sic), one of the artists for v1.1's splash screen artworks.

Your wishes have finally been granted!🪄🧙 Pixelorama v1.1.7 arrives today, bringing you goodies you have been waiting for, for a long time. Have you been wishing for an Android version? It's finally (almost, experimentally) here! Have you been wishing for a way to import gif files without using FFMPEG? Good news, that's also here! Did you want a quick way to resize brushes by just holding down keys and moving the mouse? Guess what, that's also here! Along with many more stuff, so keep reading to find out more!

If you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

<!-- truncate -->

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

## Experimental Android version
People have been asking for an Android version for as long as I can remember. I am happy to announce that I've done progress on this front, and today we are releasing the first ever Android version. You can get it for free, currently only on itch.io: https://orama-interactive.itch.io/pixelorama

Please keep in mind that this version is still **experimental**, so please think of it as very early access and not something that is production ready. It has not been widely tested as of this moment, so please do not use it for any serious work. While it should work fine, the user interface is not very mobile-friendly at the moment. This is why I recommend you to use it if you have an Android **tablet** and not a phone, as the experience on smaller screens will not be quite as enjoyable. We rely on user feedback to improve Pixelorama, so if you do use the Android version, we are looking forward to your thoughts and ideas! The next steps would be to polish it further by adding buttons for quickly undoing and redoing, and perhaps UI buttons for the Shift, Control and Alt modifiers, like the Android version of Godot has. Once we're more confident of its quality, we will publish it to places like F-Store, and eventually Google Play.

We will mostly focus on improving the tablet experience for now, as adapting the interface to tablets is easier than on mobile phones. Eventually, however, we may have to make an entirely different version of the UI that will be enabled by default on phones, that is simpler and less crowded, with bigger buttons that are easier to interact with on small screens. Users will always have the option to switch back and forth between UI modes, no matter the platform. This is what Clip Studio Paint also does, and I think it may be the best approach to tackle this issue. No promises as to when this will happen though, as it would be quite a large undertaking.

To accompany the Android version, a new **single tool mode** has been added! This essentially makes the right mouse button no longer be able to have a tool of its own, and it always activates the same tool as the left mouse button. On touch screens, the left mouse button is equivalent to tapping the screen, and the right mouse button is equivalent to long presses. The single tool mode is enabled by default on Android and disabled on other platforms, but you can toggle it from the preferences, no matter which device you're using!

## Full changelog of version 1.1.7:

### Added
- Importing GIF files is now possible without needing FFMPEG!
- Holding <kbd>Control + Shift</kbd> and moving the mouse right or left now changes the brush size. This shortcut can be changed from the Preferences.
- The shortcuts category in the Preferences now have search bars to filter by name, or by shortcut.
- Added mouse motion shortcuts to quickly change the color hue, saturation, value and alpha. By default, these shortcuts are empty, but they can be changed from the Preferences.
- Added a button in the palette panel that unlocks the palette grid, making the swatches automatically resize based on the available free space of the panel, instead of having a fixed width and height.
- A single tool mode has been added as a preference that makes the right mouse button activate the same tool as the left mouse button, instead of being independent.
- Selecting "Paste from clipboard" while having a Lospec Palette URI copied will now automatically download that palette.
- Removing all backups is now possible from the Preferences, under the Reset category.

### Changed
- The default UI scale factor now depends on the monitor properties, instead of always being set to 1.0.
- In the shortcut category of the Preferences, the Default shortcut profile is no longer selectable, and the Custom profile is now the default one. If you want to restore the default shortcuts, you can press the new "Reset" button.
- The distance between panels in the interface has been increased from 8 pixels to 12, making it a bit easier to grab the split handler in order to resize the panels.
- Palette swatches get selected on mouse button *release* and not *press*, making them more consistent with the rest of the buttons in the interface.
- Scrolling on the palette panel is now smoother and works like the rest of the scrollable areas on the interface.

### Fixed
- Fixed crash when drawing and there is no active palette.
- Fixed a crash that sometimes happened when loading multiple projects at once. [#1379](https://github.com/Orama-Interactive/Pixelorama/issues/1379)
- Fix crash when opening Pixelorama with a project which had a group layer saved as current layer. [#1378](https://github.com/Orama-Interactive/Pixelorama/pull/#1378)
- Fixed crash when adding a new palette when there is none.
- Fixed crash when drag and dropping something that is not a palette swatch (such as a cel button) into a swatch.
- Fixed crash when trying to import a zip file that is not an extension. [#1375](https://github.com/Orama-Interactive/Pixelorama/pull/#1375)
- The timeline now scrolls to the active cel when switching projects. [#1377](https://github.com/Orama-Interactive/Pixelorama/issues/1377)
- Exporting videos should no longer skip the last frame.
- Fixed subwindow dialogs being too big compared to the main window size, if the UI is scaled.
- Fixed error code 1 when saving a backup, if the current session backup directory is removed while Pixelorama is running. Now, it always checks if the directory exists and re-creates it, if it is deleted.

Happy painting, and keep pixelating your dreams! 🎨✨

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
