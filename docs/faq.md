---
id: faq
title: FAQ
sidebar_label: FAQ
---

If you have any questions about Pixelorama, there is a chance that someone else had the same question before, so it will be answered here, in the Frequently Asked Questions (FAQ). The question is indicated with "Q" and the answer with "A".

## Q: How much does Pixelorama cost?
A: Pixelorama is available for the *extremely cheap price of $0.00!* That's right! Pixelorama is a [free and open-source software (FOSS)](https://en.wikipedia.org/wiki/Free_and_open-source_software), available under the (very permissive) [MIT license](https://github.com/Orama-Interactive/Pixelorama/blob/master/LICENSE)! In short:
- You are free to download and use Pixelorama for any purpose, personal, non-profit, commercial, or otherwise.
- You are free to modify, distribute, redistribute, and remix Pixelorama to your heart’s content, for any reason, both non-commercially and commercially.

However, the [Steam version](https://store.steampowered.com/app/2779170/Pixelorama/) is paid.

## Q: What platforms is Pixelorama available on?
A: Pixelorama is currently available for Windows, Linux, Mac and Web browsers. More platforms may be supported in the future.
You can download Pixelorama from [itch.io](https://orama-interactive.itch.io/pixelorama), [GitHub releases](https://github.com/Orama-Interactive/Pixelorama/releases) and on [Steam](https://store.steampowered.com/app/2779170/Pixelorama/). It is also available on Scoop for Windows, as a [Flatpak](https://flathub.org/apps/details/com.orama_interactive.Pixelorama) and [Snap](https://snapcraft.io/pixelorama) for Linux.

## Q: What benefits does the Steam version provide?
A: Users who buy Pixelorama through Steam will enjoy the benefits that Steam provides to all of the games and software hosted there, such as automatic updates and Steam Achievements. It is also a great way to fund the project's development! Apart from that, there will be no other difference between the non-Steam version. All of Pixelorama's features will be the same in all versions, and all versions will receive the same updates. In other words, the Steam version will **not** be a "Pro" version. It will be exactly the same as the non-Steam version, just with the added benefits that come naturally from Steam.

## Q: What are the minimum system requirements to run Pixelorama?
A: Pixelorama is a relatively lightweight software and it should run on most devices, as long as OpenGL 3.3 / OpenGL ES 3.0 is supported.

## Q: Does Pixelorama work on the Steam Deck?
A: It should! It works on Linux, so it should work on Steam Deck as well. Pixelorama also supports gamepad shortcuts, so you should be able to map the Steam Deck's buttons to actions such as undo/redo, copy, paste, etc. The reason we're not 100% certain is because we don't currently own a Steam Deck to test it ourselves.

## Q: Is Pixelorama safe?
A: Pixelorama is completely safe, as long as you download it from official sources (see `Q: What platforms is Pixelorama available on?` above). Its open-source nature allows for perfect transparency, thus it is impossible for us to sneak in malicious code without anyone noticing. The official builds are also being generated directly from the source code using GitHub Actions, so there is no worry that someone is sneaking in malicious code in the process of compiling. You may, however, get some security warnings from security software, such as Windows SmartScreen. The reason for this is that Pixelorama is not signed, and thus not recognized by the security system. You can safely ignore these warnings and proceed to run Pixelorama.

## Q: What languages is Pixelorama available in?
A: The main language is English, but Pixelorama is also available in numerous other languages! [All of our translation files are hosted in Crowdin](https://crowdin.com/project/pixelorama). By default, the language that Pixelorama is in is the system language of your device. You can easily change it by going to the `Edit menu > Preferences > Language`.

## Q: Who is working on Pixelorama?
A: Pixelorama is being developed by [Orama Interactive](https://www.oramainteractive.com/), a game development team. Of course, Pixelorama would not be the same without the help of our beloved [contributors](https://github.com/Orama-Interactive/Pixelorama/graphs/contributors)!

## Q: What engine is being used to develop Pixelorama? Where is the code hosted?
A: Pixelorama is being developed with the Godot Engine (version 4.3), and since it is open-source anyone can contribute to it! The code is available on [Pixelorama's GitHub repository](https://github.com/Orama-Interactive/Pixelorama)!

## Q: Why is Godot used to develop Pixelorama?
A: Mostly because it's easy to use, while being powerful at the same time. If we started Pixelorama using plain C++ or something like that it would be much more primitive and the development would be a lot slower. Features such as the image and layer effects, 3D layers, the extension system and others would be a lot harder to implement without Godot. Most of the community came from Godot, so if Godot wasn't used, it would also be less popular and it would have less contributors, leading to even less features and polish. Godot handles a lot of stuff for us already behind the scenes, and pretty much most major Godot releases also bring visible improvements to Pixelorama without us having to do big changes. Having to do all of that from scratch would be exhausting.

Pixelorama started as an experiment to see if making such a software in Godot is possible. The first time we showed it to Godot's community, we mostly did it to show what we could do with Godot, We weren't expecting anyone to actually use it, but we did want to make a proper pixel art software so we decided to keep improving it so it would become usable.

## Q: Can I contribute to this project?
Yes! Read our [Ways to Contribute](development_and_contributing) page to learn more.

## Q: Will Pixelorama ever become Godot's Plugin?
A: Pixelorama was originally created as a stand-alone program. Our current focus is to keep improving it and not implementing it into Godot itself, but we are not declining the possibility of it being a plugin one day. However, if you are interested in direct Pixelorama support from Godot, you can use the amazing [Importality plugin](https://github.com/nklbdev/godot-4-importality) which can be used to make Godot import pxo files. For best results, make sure to enable "Include blended images" when saving your pxo files from Pixelorama.
