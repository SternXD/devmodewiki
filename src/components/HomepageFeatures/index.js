import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Xbox Development',
    description: (
      <>
        Comprehensive guides for Xbox Developer Mode setup, UWP applications,
        emulators, and development tools specifically for Xbox Series S/X.
      </>
    ),
  },
  {
    title: 'Emulation Guides',
    description: (
      <>
        Step-by-step tutorials for setting up and configuring various emulators
        including XBSX2, Dolphin, Xenia, and more for Xbox development.
      </>
    ),
  },
  {
    title: 'Developer Tools',
    description: (
      <>
        Essential tools and resources for UWP development, Visual Studio setup,
        compilation guides, and troubleshooting tips for Xbox projects.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="feature-box">
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
