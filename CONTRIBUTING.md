# How to contribute efficiently

## Table of contents:

* [Contributing pull requests](#contributing-pull-requests)
* [Contributing translations](#contributing-translations)
* [Communicating with developers](#communicating-with-developers)
<br><br>

## Contributing pull requests
- Make sure the changes you are contributing are written in **English** and are grammatically correct.
- Changes should be at the `master` branch. Please do not open Pull Requests for the `gh-pages` branch.

### If you want to edit an existing page
Locate its `.md` source file in the `docs/` directory of the repository and open it in your favorite text editor - or directly within GitHub, although that is not recommended because you might lose your work. You can then commit the changes, push them to your fork and open a pull request.

### If you want to add a new page
Create a `.md` file inside the `docs/` directory with a meaningful name (preferably using snake_case). You can then edit the file with your favorite text editor, and write its content like you do for any other file. At the top of the file, make sure to include its **unique id**, preferably the same as the file name, the page title and the sidebar label. They should be in a format like this:
```
---
id: example_page
title: Example Page
sidebar_label: Example Page
---
```

### To add images
Put the image files you want to add inside the `static/img/assets` directory with meaningful names (preferably using snake_case) and include them on your page with
```
![Alt Text](../static/img/example_image.png)
```

## Contributing translations
Not available yet.
<br><br>

## Communicating with developers
To communicate with developers (e.g. to discuss a feature you want to implement or a bug you want to fix), the following channels can be used:

- [GitHub Issues](https://github.com/Orama-Interactive/Pixelorama-Docs/issues): If there is an
  existing issue about a topic you want to discuss, just add a comment to it -
  all developers watch the repository and will get an email notification. You
  can also create a new issue - please keep in mind to create issues only to
  discuss quite specific points about the development, and not general user
  feedback or support requests.
- [Our Discord Server](https://discord.gg/GTMtr8s): All developers and most contributors are there, so it's the best way for direct chat about Pixelorama. You can use the channel `#pixelorama-dev` to stay up to date with Pixelorama's developments real-time, or talk about the developments and request new features. If you seek support, please use the `#pixelorama-help` channel instead.
