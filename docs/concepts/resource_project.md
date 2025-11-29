---
id: resource_project
title: Resource Project
sidebar_label: Resource Project
---

In Pixelorama, the term Resource Project is a derivative of [Project](project) and is considered as virtual in the sense that it is temporary (cannot be stored locally by user through *File > Save*, instead a `resource_updated` signal is emitted) and it's main purpose is to edit subresources (e.g tiles, shader textures etc.) that otherwise cannot be modified directly in the main project.


In addition to properties provided by a normal [Project](project), a Resource Project contains:
- A `resource_updated` signal with one bind of type [ResourceProject](project), that is emitted whenever user tries to save.
- An `get_frame_image(idx: int)` method, which returns an image containing the render of frame at the given `idx` in the resource project
