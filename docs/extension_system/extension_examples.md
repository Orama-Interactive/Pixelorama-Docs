---
id: extension_examples
title: Examples
sidebar_label: Examples
sidebar_position: 4
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

Changes colors of the Default theme to be High contrast
```
extends Node

@onready var extension_api: Node  ## A variable for easy reference to the Api
var color_picker_button: Button
var was_native_picker_used := false

# In entries resembling a:b:c, the keys are in order of 
# (stylebox_name:theme_type:stylebox_color_name)  # Colors inside Stylebox
# and in entries resembling a:b, the keys are in order of 
# (color_name:theme_type)  # Colors outside Stylebox
var theme_colors: Dictionary[String, String] = {
	"button_pressed:Tree:background_color": "000000ff",
	"clear_color:Misc": "000000ff",
	"cursor:ItemList:border_color": "ffffffff",
	"cursor:Tree:border_color": "ffffffff",
	"cursor_unfocused:ItemList:border_color": "ffffffff",
	"cursor_unfocused:Tree:border_color": "ffffffff",
	"custom_button_hover:Tree:background_color": "000000ff",
	"custom_button_hover:Tree:border_color": "ffffffff",
	"disabled:Button:background_color": "000000ff",
	"disabled:ColorPickerButton:border_color": "ffffffff",
	"disabled:RulerButton:border_color": "ffffffff",
	"embedded_border:Window:background_color": "000000ff",
	"embedded_unfocused_border:Window:background_color": "000000ff",
	"focus:Button:border_color": "ffffffff",
	"focus:ColorPickerButton:border_color": "ffffffff",
	"focus:LineEdit:background_color": "000000ff",
	"focus:LineEdit:border_color": "ffffffff",
	"focus:RulerButton:background_color": "000000ff",
	"focus:TextEdit:background_color": "000000ff",
	"focus:TextEdit:border_color": "ffffffff",
	"grabber:HScrollBar:background_color": "000000ff",
	"grabber:VScrollBar:background_color": "000000ff",
	"grabber_area:HSlider:background_color": "000000ff",
	"grabber_area:VSlider:background_color": "000000ff",
	"grabber_area_highlight:HSlider:background_color": "000000ff",
	"grabber_area_highlight:VSlider:background_color": "000000ff",
	"grabber_highlight:HScrollBar:background_color": "000000ff",
	"grabber_highlight:VScrollBar:background_color": "000000ff",
	"grabber_pressed:HScrollBar:background_color": "000000ff",
	"grabber_pressed:VScrollBar:background_color": "000000ff",
	"guide:CelButton:background_color": "000000ff",
	"guide:CelButton:border_color": "ffffffff",
	"hover:Button:background_color": "000000ff",
	"hover:CelButton:background_color": "000000ff",
	"hover:CelButton:border_color": "ffffffff",
	"hover:ColorPickerButton:background_color": "000000ff",
	"hover:ColorPickerButton:border_color": "ffffffff",
	"hover:PopupMenu:background_color": "000000ff",
	"hover:RulerButton:background_color": "000000ff",
	"normal:Button:background_color": "000000ff",
	"normal:CelButton:background_color": "000000ff",
	"normal:CelButton:border_color": "ffffffff",
	"normal:ColorPickerButton:background_color": "000000ff",
	"normal:ColorPickerButton:border_color": "ffffffff",
	"normal:LineEdit:background_color": "000000ff",
	"normal:LineEdit:border_color": "ffffffff",
	"normal:RichTextLabel:background_color": "000000ff",
	"normal:RichTextLabel:border_color": "ffffffff",
	"normal:RulerButton:background_color": "000000ff",
	"normal:TextEdit:background_color": "000000ff",
	"normal:TextEdit:border_color": "ffffffff",
	"panel:AcceptDialog:background_color": "000000ff",
	"panel:ItemList:border_color": "ffffffff",
	"panel:Panel:background_color": "000000ff",
	"panel:PanelContainer:background_color": "000000ff",
	"panel:PopupMenu:background_color": "000000ff",
	"panel:PopupMenu:border_color": "ffffffff",
	"panel:PopupPanel:background_color": "000000ff",
	"panel:TabContainer:background_color": "000000ff",
	"panel:TabContainer:border_color": "ffffffff",
	"panel:TooltipPanel:background_color": "000000ff",
	"panel:TooltipPanel:border_color": "ffffffff",
	"panel:Tree:background_color": "000000ff",
	"pressed:Button:background_color": "000000ff",
	"pressed:Button:border_color": "ffffffff",
	"pressed:CelButton:background_color": "000000ff",
	"pressed:CelButton:border_color": "ffffffff",
	"pressed:ColorPickerButton:background_color": "000000ff",
	"pressed:ColorPickerButton:border_color": "ffffffff",
	"pressed:LayerFrameButton:background_color": "000000ff",
	"pressed:LayerFrameButton:border_color": "ffffffff",
	"pressed:RulerButton:background_color": "000000ff",
	"read_only:LineEdit:background_color": "000000ff",
	"read_only:LineEdit:border_color": "ffffffff",
	"read_only:TextEdit:background_color": "000000ff",
	"read_only:TextEdit:border_color": "ffffffff",
	"scroll:HScrollBar:background_color": "000000ff",
	"scroll:VScrollBar:background_color": "000000ff",
	"scroll_focus:HScrollBar:border_color": "ffffffff",
	"scroll_focus:VScrollBar:border_color": "ffffffff",
	"selected:ItemList:background_color": "000000ff",
	"selected:Tree:background_color": "000000ff",
	"selected_focus:ItemList:background_color": "000000ff",
	"selected_focus:Tree:background_color": "000000ff",
	"slider:HSlider:background_color": "000000ff",
	"slider:VSlider:background_color": "000000ff",
	"tab_disabled:TabBar:background_color": "000000ff",
	"tab_disabled:TabBar:border_color": "ffffffff",
	"tab_disabled:TabContainer:background_color": "000000ff",
	"tab_disabled:TabContainer:border_color": "ffffffff",
	"tab_focus:TabBar:border_color": "ffffffff",
	"tab_focus:TabContainer:border_color": "ffffffff",
	"tab_hovered:TabBar:background_color": "000000ff",
	"tab_hovered:TabBar:border_color": "ffffffff",
	"tab_hovered:TabContainer:background_color": "000000ff",
	"tab_hovered:TabContainer:border_color": "ffffffff",
	"tab_selected:TabBar:background_color": "000000ff",
	"tab_selected:TabBar:border_color": "ffffffff",
	"tab_selected:TabContainer:background_color": "000000ff",
	"tab_selected:TabContainer:border_color": "ffffffff",
	"tab_unselected:TabBar:background_color": "000000ff",
	"tab_unselected:TabBar:border_color": "bebebeff",
	"tab_unselected:TabContainer:background_color": "000000ff",
	"tab_unselected:TabContainer:border_color": "ffffffff",
	"title_button_hover:Tree:background_color": "000000ff",
	"title_button_normal:Tree:background_color": "000000ff",
	"title_button_pressed:Tree:background_color": "000000ff"
}



## This script acts as a setup for the extension
func _enter_tree() -> void:
	# NOTE: Use get_node_or_null("/root/ExtensionsApi") to access api.
	# NOTE: See https://www.oramainteractive.com/Pixelorama-Docs/extension_system/extension_api for
	# detailed documentation.
	extension_api = get_node_or_null("/root/ExtensionsApi")

    # First we get the currently open theme
	var base_theme: Theme = extension_api.theme.autoload().themes[0]
    # Then we make a copy of it (this copy will be our high contrast theme)
	var our_theme: Theme = base_theme.duplicate_deep()
    # We do some (optional) border adjustments manually
	var p_container_stylebox: StyleBoxFlat = our_theme.get_stylebox("tab_unselected", "TabBar")
	p_container_stylebox.border_width_left = 0
	p_container_stylebox.border_width_right = 0
	p_container_stylebox.border_width_top = 1
	p_container_stylebox.border_width_bottom = 0
	var tab_container_stylebox: StyleBoxFlat = our_theme.get_stylebox("panel", "TabContainer")
	tab_container_stylebox.border_width_left = 2
	tab_container_stylebox.border_width_right = 2
	tab_container_stylebox.border_width_top = 2
	tab_container_stylebox.border_width_bottom = 2
	# Now we set the theme name and colors.
	our_theme.resource_name = "High Contrast"
	extension_api.theme.set_theme_colors(our_theme, theme_colors)
    # Add theme to the list in prefferences
	extension_api.theme.add_theme(our_theme)
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
		var frames := Array([], TYPE_OBJECT, &"RefCounted", load("res://src/Classes/Frame.gd"))
		new_project = extension_api.project.new_project(frames, "Test", Vector2(64, 64))
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
		var image: Image = details["processed_images"][i].image
		var error := image.save_png(details["export_paths"][i])
		if error != OK:
			return false
	return true
```
