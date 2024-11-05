---
id: extension_api
title: ExtensionsApi
sidebar_label: ExtensionsApi
sidebar_position: 3
---
:::tip
This is the documentation for Api version 5
:::

### Description
This Api gives you the essentials to develop a working extension for Pixelorama. To keep things organized, the Api is divided into
many smaller Apis, each giving access to different areas of the Software;

To access this anywhere in the extension use `get_node_or_null("/root/ExtensionsApi")` e.g.
``` 
var api = get_node_or_null("/root/ExtensionsApi")
```

:::tip
Keep in mind that this API is targeted towards users who are not fully familiar with Pixelorama's source code. If you need to do something more complicated and more low-level, you would need to interact directly with the source code. 
:::

### Properties
- [general](#generalapi)
- [menu](#menuapi)
- [dialog](#dialogapi)
- [panel](#panelapi)
- [theme](#themeapi)
- [tools](#toolapi)
- [selection](#selectionapi)
- [project](#projectapi)
- [export](#exportapi)
- [import](#exportapi)
- [palette](#exportapi)
- [signals](#signalsapi)

### Method Descriptions

- **int** `get_api_version()`

    - Returns the version of the ExtensionsApi .

- **Array[Node]** `get_main_nodes(extension_name: StringName)`

    - Returns the initial nodes of an extension named `extension_name`. initial nodes are the nodes whose paths are in the `nodes` key of an extension.json file.
Extensions can be made to communicate with each other using this method. 


GeneralAPI
---
### Description
This part of Api provides the general stuff, like commonly used Autoloads, App's version info etc. The most basic (but important) stuff.

### Method Descriptions

- **String** `get_pixelorama_version()`

    - Returns the current version of pixelorama.

- **ConfigFile** `get_config_file()`

    - Returns the `ConfigFile` containing all Pixelorama settings (e.g. Brushes, sizes, preferences, etc...).

- **"src/Autoload/Global.gd"** `get_global()`

    - Returns the **Global** autoload used by Pixelorama.
Contains references to almost all UI Elements, Variables that indicate different settings etc...,
In short it is the most important autoload of Pixelorama.

- **"src/Autoload/DrawingAlgos.gd"** `get_drawing_algos()`

    - Returns the **DrawingAlgos** autoload, contains different drawing algorithms used by Pixelorama.

- **ShaderImageEffect** `get_shader_image_effect()`

    - Gives you a new `ShaderImageEffect` class. this class can apply shader to an image.
It contains method: `generate_image(img: Image, shader: Shader, params: Dictionary, size: Vector2)`
Whose parameters are identified as:

        | Parameter | Description |
        | --- | --- |
        | img | Image that the shader will be pasted to (Empty Image of size same as project).|
        | shader | preload of the shader. |
        | params | A dictionary of params used by the shader. |
        | size | It is the project's size. |

- **Node** `get_extensions_node()`

    - Returns parent of the nodes listed in extension.json -> "nodes".

- **Canvas** `get_canvas()`

    - Returns the main `Canvas` node, normally used to add a custom preview to the canvas.

- **ValueSlider** `create_value_slider()`

    - Returns a new `ValueSlider`. Useful for editing floating values.

- **ValueSliderV2** `create_value_slider_v2()`

    - Returns a new `ValueSliderV2`. Useful for editing 2D vectors.

- **ValueSliderV3** `create_value_slider_v3()`

    - Returns a new `ValueSliderV3`. Useful for editing 3D vectors.


MenuAPI
---
### Description
Gives ability to add/remove items from menus in the top bar.

### Enumerations
**enum**  `@unnamed_enums`:
 - FILE = 0
 - EDIT = 1
 - SELECT = 2
 - IMAGE = 3
 - EFFECTS = 3
 - VIEW = 4
 - WINDOW = 5
 - HELP = 6

### Method Descriptions

- **int** `add_menu_item(menu_type: int, item_name: String, item_metadata: Variant, item_id := -1)`

    - Adds a menu item of title `item_name` to the `menu_type` defined by `@unnamed_enums`.
`item_metadata` is usually a window node you want to appear when you click the `item_name`. That window node should also have a `menu_item_clicked() -> void` function inside its script.
Index of the added item is returned (which can be used to remove menu item later on).

- **void** `remove_menu_item(menu_type: int, item_idx: int)`

    - Removes a menu item at index `item_idx` from the `menu_type` defined by `@unnamed_enums`.


DialogAPI
---
### Description
Gives access to common dialog related functions.

### Method Descriptions

- **void** `show_error(text: String)`

    - Shows an alert dialog with the given `text`. Useful for displaying messages like "Incompatible API" etc...

- **Node** `get_dialogs_parent_node()`

    - Returns the node that is the parent of dialogs used in pixelorama.

- **void** `dialog_open(open: bool)`

    - Informs Pixelorama that some dialog is about to open or close.


PanelAPI
---
### Description
Gives access to Tabs and Dockable Container related functions.

### Properties

| Name | Description |
| --- | --- |
| **bool** tabs_visible | Sets/Gets the visibility of dockable tabs. |

### Method Descriptions

- **void** `add_node_as_tab(node: Node)`

    - Adds the `node` as a tab. Initially it's placed on the same panel as the tools tab, but it's position can be changed through editing a layout.

- **void** `remove_node_from_tab(node: Node)`

    - Removes the `node` from the DockableContainer.


ThemeAPI
---
### Description
Gives access to theme related functions.

### Method Descriptions

- **void** `add_theme(theme: Theme)`

    - Adds the `theme` to **Edit > Preferences > Interface > Themes**.

- **int** `find_theme_index(theme: Theme)`

    - Returns index of the `theme` in preferences.

- **Theme** `get_theme()`

    - Returns the current theme resource.

- **bool** `set_theme(idx: int)`

    - Sets a theme located at a given `idx` in preferences. If theme set successfully then return true, else false.

- **void** `remove_theme(theme: Theme)`

    - Remove the `theme` from preferences.

- **void** `add_font(font: Font)`

    - Adds a new `font`.

- **void** `remove_font(font: Font)`

    - Removes a loaded `font`. If that font is the current one of the interface, the font gets changed to `Roboto`.

- **void** `set_font(font: Font)`

    - Sets a `font` as the current one for the interface. The font must have been added beforehand by `add_font()`.


ToolAPI
---
### Description
Gives ability to add/remove tools.

### Method Descriptions

- **void** `add_tool(tool_name: String, display_name: String, scene: PackedScene, layer_types: PoolIntArray = [], extra_hint := "", shortcut: String, extra_shortucts := [], insert_point := -1)`

    - Adds a tool to pixelorama with name `tool_name` (without spaces), display name `display_name`, tool scene `scene`, layers that the tool works on `layer_types`, `extra_hint` (text that appears when mouse havers tool icon), primary shortcut name `shortcut` and any extra shortcuts `extra_shortucts`. 

    - At the moment extensions can't make their own shortcuts so you can leave `shortcut` and `extra_shortcuts` as `[]`.
To determine the position of tool in tool list, use `insert_point` (if you leave it empty then the added tool will be placed at bottom)

- **void** `remove_tool(tool_name: String)`

    - Removes a tool with name `tool_name` and assign Pencil as left tool, Eraser as right tool.


SelectionAPI
---
### Description
Gives access to pixelorama's selection system.

### Method Descriptions

- **void** `clear_selection()`

    - Clears the selection Gizmo.

- **void** `select_all()`

    - Select the entire region of current cel.

- **void** `select_rect(rect: Rect2, operation: int)`

    - Selects a portion defined by `rect` of the current cel. `operation` influences it's behaviour with previous selection rects (`0` for adding, `1` for subtracting, `2` for intersection).

- **void** `move_selection(destination: Vector2, with_content: bool, transform_standby: bool)`

    - Moves a selection to `destination`, with content if `with_content` is true. If `transform_standby` is true then the transformation will not be applied immediately unless <kbd>Enter</kbd> is pressed.

- **void** `resize_selection(new_size: Vector2, with_content: bool, transform_standby: bool)`

    - Resizes the selection to `new_size`, with content if `with_content` is `true`. If `transform_standby` is `true` then the transformation will not be applied immediately unless <kbd>Enter</kbd> is pressed.

- **void** `invert()`

    - Inverts the selection gizmo.

- **void** `make_brush()`

    - Makes a project brush out of the current selection's content.

- **void** `copy()`

    - Copies the selection content (works in or between pixelorama instances only).

- **void** `paste(in_place: bool)`

    - Pastes the selection content.

- **void** `delete_content()`

    - Erases the drawing on current cel enclosed within the selection's area.


ProjectAPI
---
### Description
Gives access to basic project manipulation functions.

### Properties

| Name | Description |
| --- | --- |
| **bool** current_project | Sets/Gets project currently in focus. |

### Method Descriptions

- **Project** `new_project(frames: Array[Frame] = [], name: String = tr(...), size: Vector2 = Vector2(64, 64), fill_color: Color = Color.TRANSPARENT)`

    - Creates a new project (with new tab) with name `name`, size `size`, fill color `fill_color` and frames `frames`. The created project also gets returned.

    - `frames` is an **Array** of type **Frames**. Usually it can be left as [].

- **Project** `new_empty_project(name: String = tr("untitled"))`

    - Creates and returns a new Project in a new tab, with an optional `name`.

    - Unlike **new_project()**, no starting frame/layer gets created. Useful if you want to deserialize project data.

- **Dictionary** `get_project_info(project: Project)`

    - Returns a dictionary containing all the project information.

- **void** `select_cels(selected_array := [[0, 0]])`

    - Selects the cels and makes the last entry of `selected_array` as the current cel. `selected_array` is an Array of Arrays containing 2 integers (frame & layer respectively).
Frames are counted from left to right, layers are counted from bottom to top. Frames/layers start at "0" and end at `project.frames.size() - 1` and `project.layers.size() - 1` respectively.

- **BaseCel** `get_current_cel()`

    - Returns the current cel. Cel type can be checked using function `get_class_name()` located inside the cel. It's type can be **GroupCel**, **PixelCel**, **Cel3D**, or **BaseCel**.

- **BaseCel** `get_cel_at(project: Project, frame: int, layer: int)`

    - Frames are counted from left to right, layers are counted from bottom to top. Frames/layers start at "0" and end at `project.frames.size() - 1` and `project.layers.size() - 1` respectively.

- **void** `set_pixelcel_image(image: Image, frame: int, layer: int)`

    - Sets an `image` at `frame` and `layer` on the current project. Frames are counted from left to right, layers are counted from bottom to top.

- **void** `add_new_frame(after_frame: int)`

    - Adds a new frame in the current project after frame `after_frame`.

- **void** `add_new_layer(above_layer: int, name: String, type: res://src/Autoload/Global.gd.LayerTypes)`

    - Adds a new Layer of type `type` with name `name` in the current project above layer `above_layer` (`above_layer` = 0 is the bottom-most layer and so on). 

        | `type` | class |
        | --- | --- |
        | 0 | PixelLayer |
        | 1 | GroupLayer |
        | 2 | 3DLayer |


ExportAPI
---
### Description
Gives access to adding custom exporters.

### Enumerations
**enum**  `ExportTab`:
 - IMAGE = 0
 - SPRITESHEET = 1

## Method Descriptions

- **int** `add_export_option(format_info: Dictionary, exporter_generator: Object, tab: ExportTab, is_animated: bool)`

    - `format_info` has keys: `extension` and `description` whose values are of type **String** e.g:

        ```
        format_info = {"extension": ".gif", "description": "GIF Image"}
        ```

    - `exporter_generator` is a node with a script containing the method `override_export()` which takes 1 argument of type **Dictionary** which is automatically passed to `override_export()` at time of export and contains keys: `processed_images`, `export_dialog`, `export_paths`, `project`

    - (Note: `processed_images` is an array of ProcessedImage resource which further has parameters `image` and `duration`)

    - If the value of `tab` is not in `ExportTab` then the format will be added to both tabs.

    - Returns the index of exporter, which can be used to remove exporter later.

- **void** `remove_export_option(id: int)`

    - Removes the exporter with `id` from Pixelorama.


ImportAPI
---
### Description
Gives access to adding custom exporters.

## Method Descriptions

- **int** `add_import_option(import_name: StringName, import_scene_preload: PackedScene)`

    - `import_scene` is a scene preload that will be instanced and added to "import options" section of pixelorama's import dialogs and will appear whenever `import_name` is chosen from import menu.
    - `import_scene` must have a script containing:
        1. An optional variable named `import_preview_dialog` of type ConfirmationDialog, If present, it will automatically be assigned a reference to the relevant import dialog's ImportPreviewDialog class so that you can easily access variables and methods of that class. (This variable is meant to be read-only)
        2. The method `initiate_import()`, which takes 2 arguments: `path`, `image`. Values will automatically be passed to these arguments at the time of import.

    - Returns the id of the importer.

- **void** `remove_import_option(id: int)`

    - Removes the import option with `id` from Pixelorama.


PaletteAPI
---
### Description
Gives access to palette related stuff.

## Method Descriptions

- **void** `remove_import_option(id: int)`

    - Creates and adds a new palette with name `palette_name` containing `data`. `data` is a *Dictionary* containing the palette information.

    - An example of data will be:
        ```
        {
        "colors": [
	        {
	        "color": "(0, 0, 0, 1)",
	        "index": 0
	        },
	        {
	        "color": "(0.1294, 0.1216, 0.2039, 1)",
	        "index": 1
	        },
	        {
	        "color": "(0.2667, 0.1569, 0.2314, 1)",
	        "index": 2
	        }
        ],
        "comment": "Place comment here",
        "height": 4,
        "width": 8
        }
        ```

SignalsAPI
---
### Description
Gives access to the basic commonly used signals. Some less common signals are not mentioned in Api but could be accessed through source directly.

### Method Descriptions
- **void** `signal_pixelorama_opened(callable: Callable, is_disconnecting := false)`

    - Connects/disconnects a signal to `callable`, that emits when pixelorama is just opened.

- **void** `signal_pixelorama_about_to_close(callable: Callable, is_disconnecting := false)`

    - Connects/disconnects a signal to `callable`, that emits when pixelorama is about to close.

- **void** `signal_project_created(callable: Callable, is_disconnecting := false)`

    - Connects/disconnects a signal to `callable`, that emits whenever a new project is created.
    - **Binds:** It has one bind of type **Project** which is the newly created project

- **void** `signal_project_saved(callable: Callable, is_disconnecting := false)`

    - Connects/disconnects a signal to `callable`, that emits after a project is saved.

- **void** `signal_project_switched(callable: Callable, is_disconnecting := false)`

    - Connects/disconnects a signal to `callable`, that emits whenever you switch to some other project.

- **void** `signal_cel_switched(callable: Callable, is_disconnecting := false)`

    - Connects/disconnects a signal to `callable`, that emits whenever you select a different cel.

- **void** `signal_project_data_changed(callable: Callable, is_disconnecting := false)`

    - Connects/disconnects a signal to `callable`, that emits whenever the project data are being modified.

- **void** `signal_tool_color_changed(callable: Callable, is_disconnecting := false)`

    - Connects/disconnects a signal to `callable`, that emits whenever a tool changes color.
    - **Binds:** It has two bind of type **Color** (indicating new color) and **int** (Indicating button that tool is assigned to, see @GlobalScope.MouseButton)

- **void** `signal_timeline_animation_started(callable: Callable, is_disconnecting := false)`

    - Connects/disconnects a signal to `callable`, that emits whenever timeline animation starts.

    - **Binds:** It has one bind of type bool which indicated if animation is in forward direction (true) or backward direction (false)

- **void** `signal_timeline_animation_finished(callable: Callable, is_disconnecting := false)`

    - Connects/disconnects a signal to `callable`, that emits whenever timeline animation stops.

- **void** `signal_current_cel_texture_changed(callable: Callable, is_disconnecting := false)`

    - Connects/disconnects a signal to `callable`, that emits whenever you select a different cel.

- **void** `signal_export_about_to_preview(callable: Callable, is_disconnecting := false)`

    - Connects/disconnects a signal to `callable`, that emits whenever preview is about to be drawn.

    - **Binds:** It has one bind of type **Dictionary** with keys: `exporter_id`, `export_tab`, `preview_images`, `durations`. Use this if you plan on changing preview of export
