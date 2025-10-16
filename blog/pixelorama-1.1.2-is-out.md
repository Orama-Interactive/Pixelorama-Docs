---
title: "Pixelorama v1.1.2 is out!"
slug: pixelorama-1.1.2-is-out
date: 2025-06-26
authors: [Overloaded]
image: /img/blog/pixelorama-1.1-is-out/main.png
---

```mdx-code-block
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
```

![Artwork by Roroto Sic, made with Pixelorama](/img/blog/pixelorama-1.1-is-out/main.png)
Artwork by [Roroto Sic](https://linktr.ee/Roroto_Sic), one of the artists for v1.1's splash screen artworks.

Pixelorama v1.1.2 has arrived! 🎉 This is quite a significant update because it comes with a long awaited feature: The ability to **rotate and skew selections directly on the canvas**! And that's not the only new feature, keep reading to find out more! 👀

If you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

<!-- truncate -->

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

## New YouTube video
For years people have been requesting tutorials on video format. I finally found the time to film a 30-minute long introductory video to Pixelorama for complete beginners! Please let us know what you think, I am new to making videos and feedback would be greatly appreciated! And don't forget to subscribe so you won't miss out on future videos!

<LiteYouTubeEmbed
  id="6srsqLhGhKk"
  params="autoplay=1&autohide=1&showinfo=0&rel=0"
  title="Pixelorama for Beginners: Learn The Basics In 30 Minutes"
  poster="maxresdefault"
  webp
/>

## Full changelog of version 1.1.2:

Along with the detailed changelog, our contributor **Variable** has prepared a video on his own YouTube channel that describes some of the new features of this new version:

<LiteYouTubeEmbed
  id="gKYOfL9iz6o"
  params="autoplay=1&autohide=1&showinfo=0&rel=0"
  title="Interesting features of upcoming Pixelorama v1.1.2"
  poster="maxresdefault"
  webp
/>

### Added
- The selection transformation system has been completely remade, finally allowing support for easy rotation and skewing! [#1245](https://github.com/Orama-Interactive/Pixelorama/pull/1245)
- A new isometric box tool! [#1246](https://github.com/Orama-Interactive/Pixelorama/pull/1246)
- Added bucket tool fill mode where regions from the merging of all layers are filled. [#1258](https://github.com/Orama-Interactive/Pixelorama/pull/1258)
- Using the move tool on a layer group now moves the content of all of its children.
- You can now hide all other layers when holding Alt and clicking on the visibility button of a layer.
- Users can now change the alpha of the transformation preview from the preferences.
- Added the ability to double-click on the canvas preview to get at the same point on the main canvas. [#1244](https://github.com/Orama-Interactive/Pixelorama/pull/1244)

### Fixed
- Transformed content no longer gets lost when pressing Control + an arrow key. [#1245](https://github.com/Orama-Interactive/Pixelorama/pull/1245)
- Transformed content no longer gets lost when cloning layers & frames.
- Pressing Enter or Cancel when changing the value of a slider in the options of a selection tool when there is an active transformation, no longer confirms/cancels the transformation.
- Fixed a bug where some child layer of group layers were not rendered. [#1268](https://github.com/Orama-Interactive/Pixelorama/pull/1268)
- Group layers with blend modes other than passthrough received a performance boost. [#1269](https://github.com/Orama-Interactive/Pixelorama/pull/1269)
- Fixed a bug where pasting images from the clipboard sometimes did not work, due to them being in different formats than the project image. [#1245](https://github.com/Orama-Interactive/Pixelorama/pull/1245)
- Fixed a bug where changing a palette color in a copied palette also changed the color in the original palette as well. [#1274](https://github.com/Orama-Interactive/Pixelorama/issues/1274)
- Closing the app with Zen Mode no longer hides all panels when opening the app again. [#1238](https://github.com/Orama-Interactive/Pixelorama/issues/1238)
- Fixed broken tool shortcuts on some keyboard layouts. [#1283](https://github.com/Orama-Interactive/Pixelorama/pull/1283)
- The override.cfg file is now being saved to the correct directory. [#1285](https://github.com/Orama-Interactive/Pixelorama/pull/1285)
- Panels can no longer be moved if the Moveable Panels option is turned off. [#1242](https://github.com/Orama-Interactive/Pixelorama/pull/1242)
- Using the bucket tool now confirms the active transformation. [#1245](https://github.com/Orama-Interactive/Pixelorama/pull/1245)
- The canvas rotation now affects the direction of the arrow keys. [#1245](https://github.com/Orama-Interactive/Pixelorama/pull/1245)
- The pixel grid gets immediately redrawn when its visibility is toggled. [#1240](https://github.com/Orama-Interactive/Pixelorama/pull/1240)

Happy painting, and keep pixelating your dreams! 🎨✨

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
