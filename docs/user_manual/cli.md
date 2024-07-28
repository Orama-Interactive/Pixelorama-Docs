---
id: cli
title: Command Line Interface 
sidebar_label: Command Line Interface
---
Pixelorama offers a Command Line Interface (CLI), allowing you to use some of its features, such as project [exporting](save_and_export), from the command line. The CLI can be used to automate tasks easily. It can only be used on desktop platforms, such as Windows, Linux and macOS.

## Options
For the full list of the system options, you can refer to [Godot's documentation](https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html). Only the options that have the green checkbox icon in their description can be used in Pixelorama.
```
Usage:
        Pixelorama.x86_64 [SYSTEM OPTIONS] -- [USER OPTIONS] [FILES]...

Use -h in place of [SYSTEM OPTIONS] to see [SYSTEM OPTIONS].
Or use -h in place of [USER OPTIONS] to see [USER OPTIONS].

Some useful [SYSTEM OPTIONS] are:
--headless     Run in headless mode.
--quit         Close pixelorama after current command.


[USER OPTIONS]:

(The terms in [ ] reflect the valid type for corresponding argument).

--version, --pixelorama-version         Prints current Pixelorama version
--size                                  Prints size of the given project
--framecount                            Prints total frames in the current project
--export, -e                            Indicates given project should be exported
--spritesheet, -s                       Indicates given project should be exported as spritesheet
--output, -o                            [path] Name of output file (with extension)
--scale                                 [integer] Scales up the export image by a number
--frames, -f                            [integer-integer] Used to specify frame range
--direction, -d                         [0, 1, 2] Specifies direction
--json                                  Export the JSON data of the project
--split-layers                          Each layer exports separately
--help, -h, -?                          Displays this help page

```
