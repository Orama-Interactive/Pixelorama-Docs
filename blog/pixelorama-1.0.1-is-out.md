---
title: "Pixelorama v1.0.1 is out!"
slug: pixelorama-1.0.1-is-out
date: 2024-08-05
authors: [Overloaded]
image: img/blog/pixelorama-1.0.1-is-out/main.png
---
![Artwork by Kalpar, made with Pixelorama](/img/blog/pixelorama-1.0.1-is-out/main.png)

Artwork by Kalpar, one of the artists for v1.0's splash screen artworks.

Hello everyone! It's been a week since version 1.0 came out. We hope you have been enjoying Pixelorama so far! To ensure that you do, we just released version 1.0.1, which contains some bug fixes and performance improvements.

As always, if you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

<!-- truncate -->

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

**NOTE: If after updating Pixelorama still says that its version is v1.0-stable and not v1.0.1-stable, go to the Preferences and just toggle "Single window mode" on and off. This is an one time bug and will not happen in future updates again.**

Full changelog of version 1.0.1:

### Added
- Added an image effect that lets you adjust color properties of the image, such as brightness and contrast.
- It is now possible to toggle low processor usage mode in the Preferences (called "Update continuously"). [#1056](https://github.com/Orama-Interactive/Pixelorama/pull/1056)

### Changed
- It is no longer possible to click outside of a dialog to close it.
- Animation tag importing can now open from the frame button right-click menu. [#1041](https://github.com/Orama-Interactive/Pixelorama/pull/1041)
- The previews of the elliptical selection and the shape tools are now being mirrored, if a mirroring mode is enabled. This makes them consistent with the rectangle, lasso, paint and polygon selection tools.

### Fixed
- The previews of the shape and selection tools no longer make Pixelorama to be so slow.
- The performance of the shape tool drawing has been improved.
- Fixed an issue where if you increased a palette's width but also decreased its height, some colors would be lost, and re-ordering colors immediately after resizing would result in even more data loss. [#684](https://github.com/Orama-Interactive/Pixelorama/issues/684)
- Dialogs no longer close when Pixelorama's main window loses focus and regains it.
- When single window mode is disabled, popup dialogs are no longer unclickable. [#1054](https://github.com/Orama-Interactive/Pixelorama/issues/1054)
- Popups no longer appear in places outside the main window, if single window mode is disabled.
- The zoom tool modes now actually reflect their behavior.
- Fixed a bug where the opacity of multiple selected layers got automatically changed to be the same as the last selected layer's opacity.
- Fixed an issue with some Windows versions where the dialogs could not be re-opened. [#1061](https://github.com/Orama-Interactive/Pixelorama/issues/1061)
- The performance of the spritesheet smart slice has been improved. [#1046](https://github.com/Orama-Interactive/Pixelorama/pull/1046)
- Fixed issue with image effects changing the color of non-opaque pixels unintentionally.
- The clipping mask preview when using the move tool and the offset image effect now works correctly. [#1057](https://github.com/Orama-Interactive/Pixelorama/pull/1057)
- Fixed a crash that sometimes happened when selecting an imported model in a 3D cel.

Thank you all for taking the time to read this blog post and for supporting us. We appreciate every and each one of you, with special thanks to our contributors, our translators and our [patrons](https://www.patreon.com/OramaInteractive)! Happy painting, and keep pixelating your dreams.

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
