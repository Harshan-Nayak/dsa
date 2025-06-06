import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ComparisonTable from '@site/src/components/ComparisonTable';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Master LeetCode Patterns
        </Heading>
        <p className="hero__subtitle">Ace your coding interviews with our comprehensive DSA patterns guide</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/dsa-patterns">
            Explore Patterns →
          </Link>
          <Link
            className="button button--primary button--lg margin-left--md"
            to="/docs/category/dsa-patterns">
            Start Learning
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Master LeetCode Patterns: Ace your coding interviews with our comprehensive DSA patterns guide">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ComparisonTable />
      </main>
    </Layout>
  );
}
