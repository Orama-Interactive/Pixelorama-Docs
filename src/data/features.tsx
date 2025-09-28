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
      src: '/img/undraw_react.svg',
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
      src: '/img/undraw_version_control.svg',
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
];

export default FEATURES;