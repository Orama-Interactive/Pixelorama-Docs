import React, {type ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: ReactNode;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'Wide Range of Tools',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/undraw_typewriter.svg',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        Customize your workflow by dynamically mapping tools to the left and right mouse buttons, making your creation process faster and more intuitive.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Advanced Animation Support',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/exported_gif.gif',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        Create animations with a timeline composed of layers and frames, including features like onion skinning, audio synchronization, frame tags, and the ability to draw while the animation is playing.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Pixel Art Focused',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/undraw_around_the_world.svg',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        Perfect pixel lines, indexed mode, and rotation and scaling algorithms tailored specifically to pixel art, like cleanEdge, OmniScale, and rotxel.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Seamless Tilemap Creation',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/tileset_selection_resize.gif',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        Use Pixelorama's tilemap layers to create rectangular, isometric or hexagonal tiles for your games.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Powerful Layer System',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Utilize clipping masks and non-destructive visual effects like outlines, gradient maps, drop shadows, and more. Perfect for experimenting with styles and compositions, as changes can be applied without altering your original artwork.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Palette Management',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Bring color into your canvas by choosing from pre-made palettes, importing your own, or creating custom ones inside the software to suit your unique style.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Visual Effects',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Multiple image effects for fine-tuning your artwork.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Advanced Canvas Options',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Utilize guides, rectangular and isometric grids, and tile mode to ensure seamless and precise pattern creation.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Automatic Backups',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Stay safe with auto-saved backups to recover your work in case of unexpected software crashes.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Highly Customizable UI',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Tailor the interface to your needs for maximum efficiency and a smooth workflow.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Export & Import',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Support for various formats such as PNG, animated PNG, spritesheets, GIFs and even videos. Importing projects from Aseprite, Photoshop, Krita & Piskel is also supported.
      </Translate>
    ),
  },
  {
    title: translate({
      message: '3D Layer Support',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Break the barrier between dimensions by bringing 3D models and shapes into your 2D canvas for unlimited creative possibilities.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Command Line Automation',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Automate file exports using the command line interface for bulk exporting and streamlining workflows
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Project Metadata',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Attach custom user data to layers, frames, and cels, making it easy to integrate with game development and other creative processes.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Extension Support',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Benefit from free, community-made extensions, such as tools that convert your 2D pixels into 3D voxels.
      </Translate>
    ),
  },
];

export default FEATURES;