import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Purring',
    Svg: require('@site/static/img/purr-cat-1.svg').default,
    description: (
      <>
        The soothing sound of a cat's purr often brings comfort and contentment to those nearby, 
        symbolizing their relaxed and affectionate nature.
      </>
    ),
  },
  {
    title: 'Whiskers',
    Svg: require('@site/static/img/purr-sitting-cat-2.svg').default,
    description: (
      <>
        Cats' sensitive whiskers serve as finely tuned sensors, 
        aiding in navigation and communication, adding to their mystique and grace.
      </>
    ),
  },
  {
    title: 'Sunbeams',
    Svg: require('@site/static/img/purr-remote-work.svg').default,
    description: (
      <>
        Cats are known for seeking the sun's rays to bask, 
        embodying their love of warmth and leisure, creating picturesque scenes of relaxation and tranquility.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
