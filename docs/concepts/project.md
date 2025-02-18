---
id: project
title: Project
sidebar_label: Project
---

In Pixelorama, the term "Project" refers to the entire sprite, which contains all of the frames and layers it might have. Each project can be saved as a `.pxo` file. Multiple projects can be opened in Pixelorama at the same time, with each one having its own tab.

A project contains the following properties:
- The image data of each individual [cel](cel).
- The properties of the project itself, such as its name, size, FPS (frames per second) and [color mode](color_mode).
- All of the properties of frames, [layers](layer), cels, animation tags, [guides](../user_manual/user_interface/canvas/#rulers-and-guides).
- [Brushes](brush) that are local to that specific project.
- [Tilesets](../user_manual/tilemaps#tileset) that are used by [tilemap layers](../user_manual/tilemaps).

## Saving a project
See [this page](../user_manual/save_and_export/#saving) to learn how to save a project.

## .pxo files
Pxo files are Pixelorama's custom file format that saves the entire content of the project. It cannot be opened in other image editors.

### File structure
The file format is essentially a .zip file in disguise. It contains a `data.json` file, and an `image_data` folder. The `data.json` file contains all of the project's metadata, such as project name, size, FPS, and the metadata of layers, frames, cels, etc. They are stored in JSON form, so they can easily be read by other software.

The `image_data` folder contains all of the image data. It contains another folder called `frames`, which in turn contains a folder for each `frame` of the project, and each frame folder contains the image data of every [cel](cel) that belongs to that frame. To preserve a non-destructive workflow, the cel image data are not affected by layer blend modes and layer effects. Along with the image data themselves, the data of the indices of each pixel are also being stored in the form of images. The files of these names start with `indices_`, and they are needed for [indexed mode](color_mode#indexed). 

If you have enabled the option to include the blended images, the `image_data` folder will also contain all of the final image data for each frame. A final image is composed of every cel, with the layer effects applied to each cel, blended together into a single image, taking the blend modes of each layer into account.

If the project has [brushes](brush), a `brushes` folder is also created, containing all of the brush image data. Similarly, if the project contains [tilemap layers](../user_manual/tilemaps), the tilesets that they use are being stored in a `tilesets` folder. Each tileset has its own folder, named after its index, and the folders contain the individual tiles in the form of image data. If the project contains audio layers, the audio files of these layers are being stored in an `audio` folder.

In order for a software to read the data of a pxo, it has to open it as a zip file, and then it has to read the `data.json` file, and parse it as JSON object. Then, it either has to loop through the all of the folders included in `image_data/frames`, where each folder contains the cel data for each frame separately, or, if the final blended images are included and that's all we care about, it just has to loop through all of the images inside the `image_data` folder, where each image corresponds to every frame of the project, and import them.

### Include blended images
During save, you are given the option to select if the blended images will be included in the exported file. If enabled, the final blended images are also being stored in the pxo, for each frame. This makes the pxo file larger and is useful for importing by third-party software or [CLI exporting](../user_manual/cli). Loading pxo files in Pixelorama does not need this option to be enabled.
