---
title: "Pixelorama v1.0.3 is out!"
slug: pixelorama-1.0.3-is-out
date: 2024-09-13
authors: [Overloaded]
image: img/blog/pixelorama-1.0.3-is-out/main.png
---
```mdx-code-block
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
```

![Artwork by Uch, made with Pixelorama](/img/blog/pixelorama-1.0.3-is-out/main.png)
Artwork by Uch, one of the artists for v1.0's splash screen artworks.

Hello everyone, new Pixelorama version today! Just like the previous minor versions, this one also contains important bug fixes, but it comes with a few new features and improvements as well!

Among the new features is a new layer effect called Index Map, contributed by [Variable](https://github.com/Variable-ind). This effect makes the original red and green color values of the image act as x and y positions of a separate image (the map), and the result uses colors from the map based on the red and green color values from the source images. This allows you to change the colors of the map, and the changes get automatically applied to the source project. This can allow you to use techniques such as this:
<LiteYouTubeEmbed
  id="HsOKwUwL1bE"
  params="autoplay=1&autohide=1&showinfo=0&rel=0"
  title="Pixel Art Animation. Reinvented - Astorion Devlog"
  poster="maxresdefault"
  webp
/>

<!-- truncate -->

To explain how this new effect works, Variable has even prepared a video!
<LiteYouTubeEmbed
  id="BmmEWuxD8xk"
  params="autoplay=1&autohide=1&showinfo=0&rel=0"
  title="Intro to Index Map effect"
  poster="maxresdefault"
  webp
/>

As always, if you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

Full changelog of version 1.0.3:

### Added
- Added new global layer buttons that change visibility, lock or expand all layers on the first level. [#1085](https://github.com/Orama-Interactive/Pixelorama/pull/1085)
- Added a new Gaussian blur image and layer effect.
- A new Index Map layer effect has been added. [#1093](https://github.com/Orama-Interactive/Pixelorama/pull/1093)
- Is it now possible to adjust the opacity of onion skinning. [#1091](https://github.com/Orama-Interactive/Pixelorama/pull/1091)
- Added option to trim the empty area of the exported images. [#1088](https://github.com/Orama-Interactive/Pixelorama/pull/1088)
- A quality slider has been added to the export dialog, when exporting jpg files.

### Changed
- The layer opacity and frame buttons are now fixed on top, always visible regardless of the vertical scroll position. [#1095](https://github.com/Orama-Interactive/Pixelorama/pull/1095)
- The default blend mode of layer groups is now pass-through.
- The color picker popup when editing gradients is now moveable.

### Fixed
- Fixed an issue where the '\n` escape character got inserted inside the palette name, causing the palette to fail to be saved.
- The export dialog has been optimized by caching all of the blended frames. Changing export options, besides the layers, no longer cause slowness by re-blending all of the frames.
- Optimized the lasso and polygon select tools, as well as the fill options of the pencil and curve tools. The time they take to complete now depends on the size of the selection, rather than checking all of the pixels of the entire canvas.
- Fixed a crash when re-arranging palette swatches while holding <kbd>Shift</kbd>.
- Fixed a crash when using the move tool snapped to the grid.
- Fixed wrong preview in the gradient dialog when editing the gradient and dithering is enabled.
- Fixed a visual bug with the preview of the resize canvas dialog.
- Fixed wrong stretch mode in the cel button previews. [#1097](https://github.com/Orama-Interactive/Pixelorama/pull/1097)

Thank you all for taking the time to read this blog post and for supporting us. We appreciate every and each one of you, with special thanks to our contributors, our translators and our [patrons](https://www.patreon.com/OramaInteractive)! Happy painting, and keep pixelating your dreams.

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
