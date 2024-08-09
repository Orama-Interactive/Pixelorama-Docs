---
id: extension_examples
title: Examples
sidebar_label: Examples
sidebar_position: 3
---
:::caution code version
The examples below assume you are developing for the latest Pixelorama release
:::

Below are some example codes for different basic types of extensions. To use them, [create an extension](extension_basics#making-an-extension) and paste your desired code from here to `Main.gd`;
- [Bare Minimum](#bare-minimum)
- [Add new Tab](#add-new-tab)
- [Add Menu Item](#add-menu-item)
- [Change Font](#change-font)
- [Project Manipulation](#project-manipulation)
- [Custom Exporter](#custom-exporter)

### Bare Minimum
The most basic code.
```
extends Node


# This script acts as a setup for the extension
func _enter_tree() -> void:
	pass


func _exit_tree() -> void:  # Extension is being uninstalled or disabled
	# remember to remove things that you added using this extension
	pass
```

### Add new Tab
Adds a simple Panel as a tab, which will be placed at the same place as the Tools tab by default.
```
extends Node

@onready var extension_api: Node  # Variable for keeping reference to the Api

# some references to nodes that will be created later
var panel


# This script acts as a setup for the extension
func _enter_tree() -> void:
	extension_api = get_node_or_null("/root/ExtensionsApi")  # Accessing the Api

	# add a test panel as a tab  (this is an example) the tab is located at the same
	# place as the (Tools tab) by default
	panel = Panel.new()
	panel.name = "This is a new panel"  # This is optional
	extension_api.panel.add_node_as_tab(panel)


func _exit_tree() -> void:  # Extension is being uninstalled or disabled
	# remember to remove things that you added using this extension
	extension_api.panel.remove_node_from_tab(panel)
```

### Add Menu Item
Adds a menu item in Help menu, which displays a message when clicked on it.
```
extends Node

@onready var extension_api: Node  # Variable for keeping reference to the Api

var item_id: int

# This script acts as a setup for the extension
func _enter_tree() -> void:
	extension_api = get_node_or_null("/root/ExtensionsApi")  # Accessing the Api
	var type = extension_api.menu.HELP

	item_id = extension_api.menu.add_menu_item(type, "Show Message", self)
	# the 3rd argument (in this case "self") will try to call "menu_item_clicked"
	# (if it is present)


func menu_item_clicked():
	# Do some stuff
	extension_api.dialog.show_error("You Tickled Me :)")


func _exit_tree() -> void:  # Extension is being uninstalled or disabled
	# remember to remove things that you added using this extension
	extension_api.menu.remove_menu_item(extension_api.menu.HELP, item_id)
```

### Add a Theme
Adds a theme to pixelorama **Preferences > Interface > Themes** (you need to have a theme resource beforehand and that theme resource must derive from one of the [main pixelorama themes](https://github.com/Orama-Interactive/Pixelorama/tree/master/assets/themes))
```
extends Node

@onready var extension_api: Node  # Variable for keeping reference to the Api

var theme = load("res://path_to_some_theme.tres") # Replace this with your theme resource
# your theme resource must be a derivative of themes from
# https://github.com/Orama-Interactive/Pixelorama/tree/master/assets/themes
# or else a CRASH might occur


# if a theme from the extension was set in preferences, then it will be automatically be
# set when pixelorama is launched again
func _enter_tree() -> void:
	extension_api = get_node_or_null("/root/ExtensionsApi")  # Accessing the Api
	if theme:
		extension_api.theme.add_theme(theme)  # Adds the theme to preferences


func _exit_tree() -> void:  # Extension is being uninstalled or disabled
	if theme:
		extension_api.theme.remove_theme(theme)  # Adds the theme to preferences
```

### Change Font
Sometimes you only need a different font instead of a different theme. This is much easier to achieve than adding themes.(you need to have a `.ttf` font resource beforehand)
```
extends Node
# used If your goal is to only use a different font

@onready var extension_api: Node  # Variable for keeping reference to the Api

var font_res = load("res://path_to_some_font.ttf")  # Replace this with your font resource
var old_font

# This script acts as a setup for the extension
func _enter_tree() -> void:
	extension_api = get_node_or_null("/root/ExtensionsApi")  # Accessing the Api
	if font_res:
		old_font = extension_api.general.get_global().control.theme.default_font.font_data
		#set the new font
		extension_api.general.get_global().control.theme.default_font.font_data = font_res


func _exit_tree() -> void:
	if font_res and old_font:
		#set the default font back again
		extension_api.general.get_global().control.theme.default_font.font_data = old_font

```

### Project Manipulation
Wish to automate some project behaviour? this will demonstrate some of the basic functions provided by the project api. This example adds a menu button to the edit menu and on clicking it some project manipulations (instructed in `menu_item_clicked()`) will get carried out.
```
extends Node

# I will show you some common stuff to manipulate projects
# (I will make use of the menu api as well)

# To know the available methods of (timeline) see:
# https://github.com/Orama-Interactive/Pixelorama/blob/master/src/UI/Timeline/AnimationTimeline.gd

# NOTE: some more advanced methods can be accessed from timeline node (un-comment line below to get them)
#@onready var timeline = ExtensionsApi.general.get_global().animation_timeline

@onready var extension_api: Node  # Variable for keeping reference to the Api

var item_id: int
var type: int


func _enter_tree() -> void:
	extension_api = get_node_or_null("/root/ExtensionsApi")  # Accessing the Api
	type = extension_api.menu.EDIT
	item_id = extension_api.menu.add_menu_item(type, "Click Me 4 times", self)


func _exit_tree() -> void:  # Extension is being uninstalled or disabled
	# remember to remove things that you added using this extension
	extension_api.menu.remove_menu_item(type, item_id)


################## Test Project methods whenever we click the menu button ############
var thing_to_do := 0
var new_project
var dest_img: Image
func menu_item_clicked():
	# Do some stuff
	if thing_to_do == 0:
		# get an image (For testing) from the current cel
		dest_img = extension_api.project.get_current_cel().get_image()
		# also make a new project
		new_project = extension_api.project.new_project([], "Test", Vector2(64, 64))
	if thing_to_do == 1:
		# To change something or get something in a project we must make it our "current_project" first
		extension_api.project.switch_to(new_project)
	if thing_to_do == 2:
		# Add 3 frames (the new_project will now have 4 total frames)
		for i in range(3):
			extension_api.project.add_new_frame(0)
	if thing_to_do == 3:
		# Add a PixelLayer
		extension_api.project.add_new_layer(0, "I Love Pixelorama")
	if thing_to_do == 4:
		# Now change content at {frame 3, layer 1} of "new_project"
		extension_api.project.set_pixelcel_image(dest_img, 2, 0)  # {frame 3, layer 1}
	thing_to_do += 1
```

### Custom Exporter
Adds a basic custom exporter that will export only odd frames. 
```
extends Node

@onready var extension_api: Node  # Variable for keeping reference to the Api

var id: int


func _enter_tree() -> void:
	extension_api = get_node_or_null("/root/ExtensionsApi")  # Accessing the Api

	var exporter_info := {"extension": ".png", "description": "Only Alternate Frames"}
	id = extension_api.exports.add_export_option(
		exporter_info, self, extension_api.exports.ExportTab.IMAGE, false
	)  # 2nd argument (in this case "self") must have "override_export()" in it's script


func _exit_tree() -> void:
	# remember to remove things that you added using this extension
	extension_api.exports.remove_export_option(id)


func override_export(details: Dictionary) -> bool:
	# in this function you take control of image processing and saving from pixelorama
	# return true for SUCCESS, false for FAILURE

	# the (details) include everything you could possibly need for exporting
	# keys of (details) are:
	# "processed_images", "durations", "export_dialog", "export_paths", "project"
	for i in range(0, details["processed_images"].size(), 2):
		var image: Image = details["processed_images"][i]
		var error = image.save_png(details["export_paths"][i])
		if error != OK:
			return false
	return true
```
