import React, {type ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type BigFeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: ReactNode;
};

const FEATURES: BigFeatureItem[] = [
  {
    title: translate({
      message: 'Create Animations with Ease',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/main_page/screenshot1.gif',
      width: 800,
      height: 800,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        Pixelorama's animation system lets you draw frame by frame with onion skinning, frame tags, and even real-time drawing while the animation is playing. Synchronize audio and manage complex projects across multiple layers and frames. Export to spritesheets, gifs and even videos. Import your animations from other software, such as Aseprite, Photoshop & Krita.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Pixel-Perfect Tools, Built for Artists',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/main_page/screenshot2.gif',
      width: 600,
      height: 600,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        Perfect pixel lines, drawing & shading tools, palettes, indexed mode, rotation and scaling algorithms tailored specifically to pixel art, like cleanEdge, OmniScale, and rotxel.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Powerful, Modern, Non-Destructive Editing',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/main_page/screenshot3.gif',
      width: 800,
      height: 800,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        Pixelorama has a powerful layer system with clipping masks, group blending and non-destructive effects such as outlines, gradient maps, drop shadows, and more, with the ability to import your own! Perfect for exploring new styles without losing your base art. You can even harness the power of the third dimension with our 3D layers!
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Ideal for Game Development',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/tileset_selection_resize.gif',
      width: 800,
      height: 800,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        Use Pixelorama's tilemap layers to create rectangular, isometric or hexagonal tiles for your games. Attach custom user data to any element, and automate file exports using the command line interface for bulk exporting and streamlining workflows.
      </Translate>
    ),
  },
];

export default FEATURES;
