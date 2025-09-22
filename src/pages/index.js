import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started!
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <section className={styles.content}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="text--center">
              <Heading as="h2">Welcome to the Official Wiki for Dev Store!</Heading>

              <p className="hero__subtitle">
                Your comprehensive resource for Xbox development, emulation guides, and developer tools.
                Get started with Xbox Developer Mode, learn to compile emulators, and discover helpful resources for your projects.
              </p>

              <div className={styles.heroButtons}>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/intro">
                  Get Started
                </Link>
                <Link
                  className="button button--outline button--lg"
                  to="/docs/xbox-setup/xbox-developer-mode-setup">
                  Setup Xbox Dev Mode
                </Link>
              </div>

              <div className={styles.features}>
                <div className="row">
                  <div className="col col--4">
                    <div className="text--center">
                      <div className="feature-icon">🎮</div>
                      <Heading as="h4">Xbox Development</Heading>
                      <p>Complete guides for setting up Xbox Developer Mode and creating UWP applications for Xbox Series S/X and Xbox One consoles.</p>
                    </div>
                  </div>
                  <div className="col col--4">
                    <div className="text--center">
                      <div className="feature-icon">🕹️</div>
                      <Heading as="h4">Emulation Guides</Heading>
                      <p>Step-by-step tutorials for XBSX2, Dolphin, Xenia, and other emulators optimized for Xbox.</p>
                    </div>
                  </div>
                  <div className="col col--4">
                    <div className="text--center">
                      <div className="feature-icon">🔧</div>
                      <Heading as="h4">Developer Tools</Heading>
                      <p>Visual Studio setup, compilation guides, and essential tools for Xbox development projects.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.cta}>
                <Heading as="h3">Ready to get started?</Heading>
                <p>
                  Explore our comprehensive documentation to learn everything you need to know about Xbox development,
                  emulation, and developer tools. Whether you're new to Xbox development or an experienced developer,
                  you'll find valuable resources here.
                </p>
                <div className={styles.buttons}>
                  <Link
                    className="button button--primary button--lg"
                    to="/docs/emulation/dolphin-guide">
                    Browse Emulation Guides
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Your source for developer tools and resources.">
      <HomepageHeader />
      <main>
        <HomepageContent />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
