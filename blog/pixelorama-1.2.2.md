---
title: "Pixelorama v1.2.2 is out!"
slug: pixelorama-1.2.2
date: 2026-09-09
authors: [Overloaded]
image: /img/blog/pixelorama-1.2.2/main.png
---

```mdx-code-block
import gradient_tool from '@site/static/img/blog/pixelorama-1.2.2/gradient_tool.mp4';
```

![Artwork by Momo, made with Pixelorama](/img/blog/pixelorama-1.2.2/main.png)

Artwork by [Momo](https://linktr.ee/mypeachtea), one of the artists for v1.2's splash screen artworks.

Greetings everyone! We have another Pixelorama update for you! Today we are releasing version 1.2.2 to the world, and with it we bring a highly requested feature, a new dedicated **gradient tool**! Not only that, but you can now also export Pixelorama projects as Aseprite files, instead of just being able to import them.

We also fixed a quite serious bug, which made keyframe IDs conflicting with already existing keyframes when loading a pxo file. If you load a pxo file that has keyframes, you will unfortunately need to re-create them in order for it to work correctly, otherwise when you try to select, move, delete etc a keyframe, other keyframes will also receive the same operation, due to ID conflicts. Moreover, we re-wrote some of the code of the layer effect system to massively improve the performance of stacked effects.

<video controls style={{ maxWidth: "100%", height: "auto" }}>
    <source src={gradient_tool} type="video/mp4">
    </source>
Your browser does not support the video tag.
</video>
A short video showcasing the gradient tool.

If you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

<!-- truncate -->

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

## Full changelog of version 1.2.2:

### Added
- Implemented a new gradient tool. [#1591](https://github.com/Orama-Interactive/Pixelorama/pull/1591)
- It is now possible to export projects as Aseprite files. [#1603](https://github.com/Orama-Interactive/Pixelorama/pull/1603)
- You can now adjust the time taken by frames in a tag without disturbing their relative duration ratio. [#1312](https://github.com/Orama-Interactive/Pixelorama/pull/1312)

### Changed
- Integer zoom now zooms exponentially, just like the normal zoom. [#1594](https://github.com/Orama-Interactive/Pixelorama/pull/1594)

### Fixed
- Fixed keyframe IDs conflicting with already existing keyframes when loading pxo files and adding new keyframes on them. Note: existing keyframes in saved pxo files need to be re-created once.
- Massively improved performance of stacked layer effects. [#1591](https://github.com/Orama-Interactive/Pixelorama/pull/1591)
- Fixed cel button preview acting like the cel is still linked, even if it got unlinked.

Happy painting, and keep pixelating your dreams! 🎨✨

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
