import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Features, {type FeatureItem} from '@site/src/data/features';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


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
          <img
            alt={translate({message: 'Pixelorama icon'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/pixelorama.svg')}
          />
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
      <Link className="button button--primary" to="https://store.steampowered.com/app/2779170/Pixelorama/">
        <Translate>Download</Translate>
      </Link>
      <Link className="button button--info" to="/Introduction">
        <Translate>Read the Documentation</Translate>
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

function Feature({
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
        className={styles.featureImage}
        alt={feature.title}
        width={Math.floor(feature.image.width)}
        height={Math.floor(feature.image.height)}
        src={withBaseUrl(feature.image.src)}
        loading="lazy"
      />
      <Heading as="h3" className={clsx(styles.featureHeading)}>
        {feature.title}
      </Heading>
      <p className="padding-horiz--md">{feature.text}</p>
    </div>
  );
}

function FeaturesContainer() {
  // Split Features into chunks of 5 (3 + 2)
  const chunks = [];
  for (let i = 0; i < Features.length; i += 5) {
    chunks.push(Features.slice(i, i + 5));
  }

  return (
    <div className="container text--center">
      {chunks.map((chunk, chunkIdx) => (
        <React.Fragment key={chunkIdx}>
          {/* First row: up to 3 items */}
          <div className="row margin-top--lg margin-bottom--lg">
            {chunk.slice(0, 3).map((feature, idx) => (
              <Feature feature={feature} key={`row1-${chunkIdx}-${idx}`} />
            ))}
          </div>

          {/* Second row: up to 2 items */}
          <div className="row">
            {chunk.slice(3, 5).map((feature, idx) => (
              <Feature
                feature={feature}
                key={`row2-${chunkIdx}-${idx}`}
                className={clsx('col--4', idx === 0 && 'col--offset-2')}
              />
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

function SimpleVideoContainer() {
  return (
    <div>
      <div
          style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh',
          fontSize: '20px',
          }}>
          <h2>
            Check it out in the intro video
          </h2>
      </div>
      <div
          style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30vh',
          fontSize: '20px',
          }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/--ZcztkvWUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
    <TopBanner />
    <HeroBanner />
    <CTA />
    <div className={styles.section}>
      <FeaturesContainer />
      <SimpleVideoContainer />
    </div>
    </Layout>
  );
}
