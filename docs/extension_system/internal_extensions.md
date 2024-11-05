---
id: internal_extensions
title: Internal Extensions
sidebar_label: Internal Extensions
sidebar_position: 2
---

Internal extensions are extensions that are not `.pck` files, but actual code (arranged in the same format as you would an extension) in `res://src/Extensions/`.

The concept of internal extensions was origally targeted towards potentially making pixelorama more modular by grouping some of it's features into smaller extensions, but it can also be used in developing of extensions by users.

## Comparing the two methods

        | Internal Extensions | Standard way (as separate project) |
        | --- | --- |
        | Both ways are easily interchangeable | Both ways are easily interchangeable |
        | During development you don't have to export a pck, every time you need to debug the extension | To debug you'd have to re-export your extension which is time consuming |
        | Both Pixelorama's source code and creating an Extension project is required (The Extension project is required for when you **release** your extension) | Creating the Extension project is required but Pixelorama's source code is optional |
        | You can extend pixelorama's classes (like BaseTool) | You can still extend classes, but Godot's code editor will complain (it's perfectly fine but it's not very pleasing to the eye) |

## Making an Extension, internal
:::tip version control
To ensure your work isn't accidentally lost, it is highly recommended that you use version control (e.g Git) in your extension project and in pixelorama's source.
:::

1. First, make an extension project by following [this tutorial](./extension_basics#making-an-extension) (from here, it will now be referred to as **your project**).
2. Get and unzip the [source code](https://github.com/Orama-Interactive/Pixelorama/releases) of pixelorama that you intend to use for your extension.
3. Create an `Extensions` folder (case sensitive) in the pixelorama's source code in the `src` folder.
4. From your project, copy (not cut/move) the contents from `src/Extensions` folder to the `src/Extensions` folder in pixelorama (created in step 3).
5. Navigate to the `src/Extensions/(extension name)/extension.json` file and copy the value of the `name` key. Then open `src/HandleExtensions.gd` file in pixelorama's source and find the `_add_internal_extensions()` method. Modify and save it as follows:
    ```
    func _add_internal_extensions() -> void:
        _load_extension("ExtensionName", true)  # Add this line, and replace `ExtensionName` with the value of your `name` key.
    ```
Now the extension has become internal. From here you can continue to code in the `Extensions/<your extension>` folder of pixelorama (just don't create any files in outside your extension folder).


## Exporting your extension.

When you are done making your extension and are ready to release and distribute your extension you have to convert your internal extension back to a regular extension.
1. Remove/comment the line that was added to `src/HandleExtensions.gd` (In step 5 of [Making an Extension, internal](#making-an-extension-internal))
2. From pixelorama, copy (not cut/move) your extension folder from `src/Extensions`, back to the `src/Extensions` folder of your project (replacing existing files).
3. Export your project by following [this tutorial](./extension_basics#exporting-the-extension).
