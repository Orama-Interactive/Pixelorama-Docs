---
title: "Pixelorama v1.0.2 is out!"
slug: pixelorama-1.0.2-is-out
date: 2024-08-21
author: Emmanouil Papadeas
image: img/blog/pixelorama-1.0.2-is-out/main.png
---
```mdx-code-block
import hd_index_painting from '@site/static/img/blog/pixelorama-1.0.2-is-out/hd_index_painting.mp4';
```

![Artwork by Nighters, made with Pixelorama](/img/blog/pixelorama-1.0.2-is-out/main.png)

Artwork by Nighters, one of the artists for v1.0's splash screen artworks.

Hello everyone! Here's another release for Pixelorama, containing some important fixes and improvements, as well as a few new features!

As always, if you wish to support us, you can [become a Patron](https://www.patreon.com/OramaInteractive) and receive exclusive awards, or [buy Pixelorama on Steam](https://store.steampowered.com/app/2779170/Pixelorama/), [or from itch.io](https://orama-interactive.itch.io/pixelorama)!

<!-- truncate -->

[![Become a patron](/img/blog/become_a_patron.png)](https://patreon.com/OramaInteractive)

The highlight of this update is that group layer blending is now supported! Layers that belong to the same group are now being blended together into a single texture, which represents the entire group. Layers outside the group are not affecting the group's blended texture. This has several advantages:

- Group layers can have their own blend modes. A new "passthrough" mode has also been added that does not blend the children of the group together, as if the group doesn't exist.
- Group layers can both act as a clipping mask and be used by a clipping mask.
- Group layers and cels now have their own opacity.
- Group layer effects are no longer being applied recursively to each of its children, but instead they are being applied once in the final blended texture. This allows us to use some modern non-destructive techniques, such as HD Index Painting with dithering support, as seen in the video below.

<video controls style={{ maxWidth: "100%", height: "auto" }}>
    <source src={hd_index_painting} type="video/mp4">
    </source>
Your browser does not support the video tag.
</video>

Full changelog of version 1.0.2:
### Added
- Group layer blending is now supported. To prevent a layer group from blending, you can set its blend mode to "Pass through". [#1077](https://github.com/Orama-Interactive/Pixelorama/pull/1077)
- Added <kbd>Control+Shift+Alt</kbd> as a shortcut that automatically selects a layer directly from the canvas when using tools.
- Added tolerance to the bucket tool's "similar area" mode and to the magic wand tool.
- It is now possible to move all selected cels between different frames, but they all have to be on the same layer.
- Added a convolution matrix layer effect, still work in progress.
- Native file dialogs now have a checkbox that lets you save blended images inside .pxo files.
- It is now possible to change the maximum undo steps from the Preferences.
- Cel properties of group and 3D cels can now be edited.

### Changed
- Renamed the "similarity" slider of the select by color tool and the bucket tool's "similar colors" mode to "tolerance", and made it work the inverse way to make it consistent with other art software.
- It is now possible to change the blend modes of multiple selected layers from the timeline's option button.

### Fixed
- The Web version no longer requires SharedArrayBuffer, so compatibility with certain browsers should be better now.
- Scaling with cleanEdge and OmniScale is now working again. [#1074](https://github.com/Orama-Interactive/Pixelorama/issues/1074)
- Layer effects are now being applied when exporting single layers.
- Exporting group layers now takes blending modes and layer effects into account.
- Fixed crashes when attempting to export specific layers or tags that have been deleted.
- Fixed crashes when importing brushes and palettes.
- Fixed an issue with the bucket tool filling with the wrong color.
- Fixed an issue when merging two layers, where if the bottom layer had layer/cel transparency, the transparency would be applied in the content destructively.
- Fixed an issue where color sliders wouldn't be visible during startup, if the color options button was expanded.
- Fixed bug where some buttons on the interface were not affected by the custom icon color on startup.
- Fixed an issue when loading a project, selecting a project brush and then switching tools. [#1078](https://github.com/Orama-Interactive/Pixelorama/pull/1078)
- Fixed wrong rendering of the isometric grid. [#1069](https://github.com/Orama-Interactive/Pixelorama/pull/1069)


Thank you all for taking the time to read this blog post and for supporting us. We appreciate every and each one of you, with special thanks to our contributors, our translators and our [patrons](https://www.patreon.com/OramaInteractive)! Happy painting, and keep pixelating your dreams.

Pixelorama is available on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/) and [Itch.io](https://orama-interactive.itch.io/pixelorama)!
