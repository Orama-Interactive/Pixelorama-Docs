---
id: extension_api
title: ExtensionsApi
sidebar_label: ExtensionsApi
sidebar_position: 2
---
:::caution 0.x Api
This is the Api documentation of Pixelorama 0.x, After Pixelorama 1.0 instead of showing documentation, this page will show you how to get it through godot documentation comments in pixelorama's source-code.
:::

### Description
This Api gives you the essentials to develop a working extension for Pixelorama.
The Api consists of many smaller Apis, each giving access to different areas of the Software;

- [general](#generalapi)
- menu
- dialog
- panel
- theme
- tools
- selection
- project
- exports
- signals

To access this anywhere in the extension use `get_node_or_null("/root/ExtensionsApi")`

:::tip
Keep in mind that this API is targeted towards users who are not fully familiar with Pixelorama's source code. If you need to do something more complicated and more low-level, you would need to interact directly with the source code. 
:::

### Method Descriptions

● `int` `get_api_version()`

Returns the version of the ExtensionsApi.


GeneralAPI
---
Gives Access to the general stuff.

### Description
This part of Api provides stuff like commonly used Autoloads, App's version info etc the most basic (but important) stuff.

### Method Descriptions

● **String** `get_pixelorama_version()`

Returns the current version of pixelorama.

● **ConfigFile** `get_config_file()`

Returns the `ConfigFile` contains all the settings (Brushes, sizes, preferences, etc...).

● **"src/Autoload/Global.gd"** `get_global()`

Returns the Global autoload used by Pixelorama.
Contains references to almost all UI Elements, Variables that indicate different settings etc..., In short it is the most important autoload of Pixelorama.

● **"src/Autoload/DrawingAlgos.gd"** `get_drawing_algos()`

Returns the DrawingAlgos autoload, contains different drawing algorithms used by Pixelorama.

● **ShaderImageEffect** `get_shader_image_effect()`

Gives you a new ShaderImageEffect class. this class can apply shader to an image.
It contains method: `generate_image(img: Image, shader: Shader, params: Dictionary, size: Vector2)`
Whose parameters are identified as:

| Parameter | Description |
| --- | --- |
| img | Image that the shader will be pasted to (Empty Image of size same as project).|
| shader | preload of the shader. |
| params | A dictionary of params used by the shader. |
| size | It is the project's size. |

● **Node** `get_extensions_node()`

Returns parent of the nodes listed in extension.json -> "nodes".

● **Canvas** `get_canvas()`

Returns the main `Canvas` node, normally used to add a custom preview to the canvas.


MenuAPI
---
Gives ability to add/remove items from menus in the top bar.

### Enumerations
**enum**  `@unnamed_enums`:
 - FILE = 0
 - EDIT = 1
 - SELECT = 2
 - IMAGE = 3
 - VIEW = 4
 - WINDOW = 5
 - HELP = 6

### Method Descriptions

● **int** `add_menu_item(menu_type: int, item_name: String, item_metadata: Variant, item_id := -1)`

Adds a menu item of title `item_name` to the `menu_type` defined by `@unnamed_enums`.
`item_metadata` is usually a window node you want to appear when you click the `item_name`. That window node should also have a `menu_item_clicked` function inside its script.
Index of the added item is returned (which can be used to remove menu item later on).

● **void** `remove_menu_item(menu_type: int, item_idx: int)`

Removes a menu item at index `item_idx` from the `menu_type` defined by `@unnamed_enums`.


DialogAPI
---
Gives access to common dialog related functions.

### Method Descriptions

● **void** `show_error(text: String)`

Shows an alert dialog with the given `text`. Useful for displaying messages like "Incompatible API" etc...

● **Node** `get_dialogs_parent_node()`

Returns the node that is the parent of dialogs used in pixelorama.

● **void** `dialog_open(open: bool)`

Tells pixelorama that some dialog is about to open or close.


PanelAPI
---
Gives access to Tabs and Dockable Container related functions.

### Method Descriptions

● **void** `set_tabs_visible(visible: bool)`

Sets the visibility of dockable tabs.

● **bool** `get_tabs_visible()`

Gets the visibility of dockable tabs.

● **void** `add_node_as_tab(node: Node)`

Adds the `node` as a tab. Initially it's placed on the same panel as the tools tab, but can be changed through adding custom layouts.

● **void** `remove_node_from_tab(node: Node)`

Removes the `node` from the DockableContainer.


ThemeAPI
---
Gives access to theme related functions.

### Method Descriptions

● **void** `add_theme(theme: Theme)`

Adds the `theme` to **Edit > Preferences > Interface > Themes**.

● **int** `find_theme_index(theme: Theme)`

Returns index of the `theme` in preferences.

● **Theme** `get_theme()`

Returns the current theme resource.

● **bool** `set_theme(idx: int)`

Sets a theme located at a given `idx` in preferences. If theme set successfully then return true, else false.

● **void** `remove_theme(theme: Theme)`

Remove the `theme` from preferences.


ToolAPI
---
Gives ability to add/remove tools.

### Method Descriptions

● **void** `add_tool(tool_name: String, display_name: String, shortcut: String, scene: PackedScene, extra_hint := "", extra_shortucts := [], layer_types: PoolIntArray = [])`

Adds a tool to pixelorama with name `tool_name` (without spaces), display name `display_name`, tool scene `scene`, layers that the tool works on `layer_types`, `extra_hint` (text that appears when mouse havers tool icon), primary shortcut name `shortcut` and any extra shortcuts `extra_shortucts`. 

At the moment extensions can't make their own shortcuts so you can ignore shortcut and extra_shortucts.

● **void** `remove_tool(tool_name: String)`

Removes a tool with name `tool_name` and assign Pencil as left tool, Eraser as right tool.


SelectionAPI
---
Gives access to pixelorama's selection system.

### Method Descriptions

● **void** `clear_selection()`

Clears the selection Gizmo.

● **void** `select_all()`

Select the entire region of current cel.

● **void** `select_rect(rect: Rect2, operation: int)`

Selects a portion defined by `rect` of the current cel. `operation` influences it's behaviour with previous selection rects (0 for adding, 1 for subtracting, 2 for intersection).

● **void** `move_selection(destination: Vector2, with_content: bool, transform_standby: bool)`

Moves a selection to `destination`, with content if `with_content` is true. If `transform_standby` is true then the transformation will not be applied immediatelyunless <kbd>Enter</kbd> is pressed.

● **void** `resize_selection(new_size: Vector2, with_content: bool, transform_standby: bool)`

Resizes the selection to `new_size`, with content if `with_content` is `true`. If `transform_standby` is `true` then the transformation will not be applied immediately unless <kbd>Enter</kbd> is pressed.

● **void** `invert()`

Inverts the selection gizmo.

● **void** `make_brush()`

Makes a project brush out of the current selection's content.

● **void** `copy()`

Copies the selection content (works in or between pixelorama instances only).

● **void** `paste(in_place: bool)`

Pastes the selection content.

● **void** `delete_content()`

Deletes the drawing on current cel enclosed within the selection's area.


ProjectAPI
---
Gives access to basic project manipulation functions.

### Method Descriptions

● **Project** `new_project(frames: Array, name: String, size: Vector2, fill_color: Color)`

Creates a new project (with new tab) with name `name`, size `size`, fill color `fill_color` and frames `frames`. The created project also gets returned.

`frames` is an **Array** of type **Frames**. Usually it can be left as [].

● **void** `switch_to(project: Project)`

Switches to the tab that contains the `project`.

● **Project** `get_current_project()`

Returns the project in focus.

● **Dictionary** `get_project_info(project: Project)`

Returns a dictionary containing all the project information.

● **BaseCel** `get_current_cel()`

Returns the current cel. Cel type can be checked using function `get_class_name()` located inside the cel. It's type can be **GroupCel**, **PixelCel**, **Cel3D**, or **BaseCel**.

● **BaseCel** `get_cel_at(project: Project, frame: int, layer: int)`

Frames are counted from left to right, layers are counted from bottom to top. Frames/layers start at "0" and end at `project.frames.size() - 1` and `project.layers.size() - 1` respectively.

● **void** `set_pixelcel_image(image: Image, frame: int, layer: int)`

Sets an `image` at `frame` and `layer` on the current project. Frames are counted from left to right, layers are counted from bottom to top.

● **void** `add_new_frame(after_frame: int)`

Adds a new frame in the current project after frame `after_frame`.

● **void** `add_new_layer(above_layer: int, name: String, type: res://src/Autoload/Global.gd.LayerTypes)`

Adds a new Layer of type `type` with name `name` in the current project above layer `above_layer` (`above_layer` = 0 is the bottom-most layer and so on). 

| `type` | class |
| --- | --- |
| 0 | PixelLayer |
| 1 | GroupLayer |
| 2 | 3DLayer |


ExportAPI
---
Gives access to adding custom exporters.

### Enumerations
**enum**  `ExportTab`:
 - IMAGE = 0
 - SPRITESHEET = 1

## Method Descriptions

● **int** `add_export_option(format_info: Dictionary, exporter_generator: Object, tab: ExportTab, is_animated: bool)`

`format_info` has keys: `extension` and `description` whose values are of type **String** e.g:

`format_info = {"extension": ".gif", "description": "GIF Image"}`

`exporter_generator` is a node with a script containing the method `override_export()` which takes 1 argument of type **Dictionary** which is automatically passed to `override_export()` at time of export and contains keys: `processed_images`, `durations`, `export_dialog`, `export_paths`, `project`

If the value of `tab` is not in `ExportTab` then the format will be added to both tabs.

Returns the index of exporter, which can be used to remove exporter later.

● **void** `remove_export_option(id: int)`

Removes the exporter with `id` from Pixelorama.


SignalsAPI
---
Gives access to the basic commonly used signals.

### Description
Gives access to the basic commonly used signals. Some less common signals are not mentioned in Api but could be accessed through source directly.

### Method Descriptions
● **void** `connect_project_changed(target: Object, method: String)`

connects a signal to method present in target, that emits whenever you switch to some other project.

● **void** `disconnect_project_changed(target: Object, method: String)`

reverse of `connect_project_changed()`.

● **void** `connect_cel_changed(target: Object, method: String)`

connects a signal to method present in target, that emits whenever you select a different cel.

● **void** `disconnect_cel_changed(target: Object, method: String)`

reverse of `connect_cel_changed()`.

● **void** `connect_tool_color_changed(target: Object, method: String)`

connects a signal to method present in target, that emits whenever a tool changes color.

● **void** `disconnect_tool_color_changed(target: Object, method: String)`

reverse of `connect_tool_color_changed()`.

● **void** `connect_current_cel_texture_changed(target: Object, method: String)`

connects a signal to method present in target, that emits whenever texture of the currently focused cel changes.

● **void** `disconnect_current_cel_texture_changed(target: Object, method: String)`

reverse of `connect_current_cel_texture_changed()`.

