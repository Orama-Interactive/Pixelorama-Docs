import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import SmallFeatures, {type SmallFeatureItem} from '@site/src/data/small_features';
import BigFeatures, {type BigFeatureItem} from '@site/src/data/big_features';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode} from '@docusaurus/theme-common';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { motion } from 'framer-motion';


function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {'🎉\xa0'}
        <Link className={styles.topBannerTitleText} to="https://store.steampowered.com/app/2779170/Pixelorama/">
        {'Pixelorama v1.2 is out!'}
        </Link>
        {'\xa0🥳'}
      </div>
    </div>
  );
}


function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message:
                  'Unleash your creativity with <b>Pixelorama</b>, a powerful and accessible open-source <b>pixel art</b> multitool.',
                description:
                  'Home page hero title, can contain simple html tags',
              }),
            }}
          />
        </Heading>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className={styles.indexCtas}>
      <Link className="button button--primary" to="#download">
        <Translate>Download</Translate>
      </Link>
      <Link className="button button--info" to="/Introduction">
        <Translate>Documentation</Translate>
      </Link>
      <span className={styles.indexCtasGitHubButtonWrapper}>
        <iframe
          className={styles.indexCtasGitHubButton}
          src="https://ghbtns.com/github-btn.html?user=Orama-Interactive&amp;repo=Pixelorama&amp;type=star&amp;count=true&amp;size=large"
          width={160}
          height={30}
          title="GitHub Stars"
        />
      </span>
    </div>
  );
}

function SmallFeature({
  feature,
  className,
}: {
  feature: FeatureItem;
  className?: string;
}) {
  const {withBaseUrl} = useBaseUrlUtils();

  return (
    <div className={clsx('col', className)}>
      <img
        className={styles.smallfeatureImage}
        alt={feature.title}
        width={Math.floor(feature.image.width)}
        height={Math.floor(feature.image.height)}
        src={withBaseUrl(feature.image.src)}
        loading="lazy"
      />
      <Heading as="h3" className={clsx(styles.smallfeatureHeading)}>
        {feature.title}
      </Heading>
      <p className="padding-horiz--md">{feature.text}</p>
    </div>
  );
}

function SmallFeaturesContainer() {
 return (
    <div id="smallfeatures" className="container text--center">
      <div className="row margin-top--lg margin-bottom--lg">
        {SmallFeatures.map((feature, idx) => (
          <SmallFeature feature={feature} key={idx} className="col col--4" />
        ))}
      </div>
    </div>
  );
}

function BigFeature({feature, reversed}) {
  const {withBaseUrl} = useBaseUrlUtils();
  return (
  <motion.div
      className={clsx(styles.featureRow, reversed && styles.reversed)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
    <div className={clsx(styles.featureRow, reversed && styles.reversed)}>
      <div className={styles.featureText}>
        <h3>{feature.title}</h3>
        <p>{feature.text}</p>
      </div>
      <div className={styles.featureImage}>
        <img alt={feature.title}
        width={Math.floor(feature.image.width)}
        height={Math.floor(feature.image.height)}
        src={withBaseUrl(feature.image.src)}
        loading="lazy" />
      </div>
    </div>
    </motion.div>
  );
}

function BigFeaturesContainer() {
  return (
    <div className="container margin-top--xl margin-bottom--xl">
      {BigFeatures.map((feature, idx) => (
        <BigFeature key={idx} feature={feature} reversed={idx % 2 === 1} />
      ))}
    </div>
  );
}

function VideoContainer() {
  return (
    <div className="container text--center margin-top--xl">
      <div className="row">
        <div className="col">
          <div className="video-container">
            <LiteYouTubeEmbed
              id="--ZcztkvWUQ"
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="Pixelorama is Coming to Steam! v1.0 trailer"
              poster="maxresdefault"
              webp
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DownloadCard({logo, title, link}) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card padding--lg text--center', 'downloadCard')}>
        <div className="card__header">
          <img src={logo} alt={`${title} logo`} style={{height: '60px'}} />
          <h3 className="margin-top--sm">{title}</h3>
        </div>
        <div className="card__footer">
          <Link className="button button--primary" to={link}>
            <Translate>Download</Translate>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Download() {
  const {colorMode} = useColorMode(); // "light" or "dark"

  const githublogoSrc =
    colorMode === 'dark'
      ? '/img/main_page/github-mark-white.svg'
      : '/img/main_page/github-mark.svg';

  return (
    <div id="download" className="container text--center margin-top--xl">
      <Heading as="h1">
        <Translate>Download Pixelorama now on:</Translate>
      </Heading>
      <div className="row margin-top--lg">
        <DownloadCard
          logo={useBaseUrl("/img/main_page/steam_icon_logo.svg")}
          title="Steam"
          link="https://store.steampowered.com/app/2779170/Pixelorama/"
        />
        <DownloadCard
          logo={useBaseUrl("/img/main_page/itch_icon.svg")}
          title="Itch.io"
          link="https://orama-interactive.itch.io/pixelorama"
        />

        <DownloadCard
          logo={useBaseUrl(githublogoSrc)}
          title="GitHub Releases"
          link="https://github.com/Orama-Interactive/Pixelorama/releases"
        />
        <DownloadCard
          logo={useBaseUrl("/img/main_page/flathub_badge.svg")}
          title="Flathub"
          link="https://flathub.org/en/apps/com.orama_interactive.Pixelorama"
        />
      </div>
    </div>
  );
}


export default function Home() {
  const {
    siteConfig: {customFields, tagline},
  } = useDocusaurusContext();
  const {description} = customFields as {description: string};
  return (
    <Layout title={tagline} description={description}>
    <HeroBanner />
    <CTA />
    <div className={styles.section}>
      <BigFeaturesContainer />
      <VideoContainer />
    </div>
    <Download />
    </Layout>
  );
}
