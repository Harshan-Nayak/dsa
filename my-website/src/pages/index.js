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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.patternShowcase}>
          <div className="container">
            <h2>Popular Patterns</h2>
            <div className={styles.patternGrid}>
              {['Two Pointers', 'Sliding Window', 'BFS/DFS', 'Dynamic Programming'].map((pattern) => (
                <div key={pattern} className={styles.patternCard}>
                  <h3>{pattern}</h3>
                  <p>Master this pattern with our interactive examples</p>
                  <Link className="button button--secondary" to={`/docs/${pattern.toLowerCase().replace(' ', '-')}`}>
                    Learn Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className={styles.patternCategories}>
          <div className="container">
            <h2>Top Interview Pattern Categories</h2>
            <div className={styles.categoryGrid}>
              {[
                { name: 'Arrays & Strings', count: '150+ problems', description: 'Master fundamental data structure patterns' },
                { name: 'Tree & Graph', count: '100+ problems', description: 'Tackle hierarchical and network problems' },
                { name: 'Dynamic Programming', count: '80+ problems', description: 'Learn optimal substructure patterns' },
                { name: 'System Design', count: '40+ problems', description: 'Design scalable distributed systems' },
                { name: 'Backtracking', count: '50+ problems', description: 'Solve complex recursive problems' },
                { name: 'Binary Search', count: '40+ problems', description: 'Optimize search operations' }
              ].map((category) => (
                <div key={category.name} className={styles.categoryCard}>
                  <h3>{category.name}</h3>
                  <p className="text--bold">{category.count}</p>
                  <p>{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.difficultySection}>
          <div className="container">
            <h2>Pattern Difficulty Distribution</h2>
            <div className={styles.difficultyGrid}>
              {[
                { level: 'Easy', count: '200+', color: '#00b894' },
                { level: 'Medium', count: '400+', color: '#fdcb6e' },
                { level: 'Hard', count: '150+', color: '#d63031' }
              ].map((diff) => (
                <div key={diff.level} className={styles.difficultyCard}>
                  <h3 style={{ color: diff.color }}>{diff.level}</h3>
                  <p className="text--bold">{diff.count} Problems</p>
                  <p>Master {diff.level.toLowerCase()} level patterns</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.companyPatterns}>
          <div className="container">
            <h2>Most Asked Company Patterns</h2>
            <div className={styles.companyGrid}>
              {[
                { company: 'Google', patterns: ['Sliding Window', 'Dynamic Programming', 'Graphs'] },
                { company: 'Meta', patterns: ['Trees', 'System Design', 'Arrays'] },
                { company: 'Amazon', patterns: ['Two Pointers', 'BFS/DFS', 'Design'] },
                { company: 'Microsoft', patterns: ['DP', 'Trees', 'Graphs'] }
              ].map((item) => (
                <div key={item.company} className={styles.companyCard}>
                  <h3>{item.company}</h3>
                  <ul>
                    {item.patterns.map((pattern) => (
                      <li key={pattern}>{pattern}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.learningPath}>
          <div className="container">
            <h2>Pattern Learning Path</h2>
            <div className={styles.pathTimeline}>
              {[
                { step: 1, title: 'Foundation Patterns', desc: 'Arrays, Strings, and Basic Data Structures' },
                { step: 2, title: 'Intermediate Algorithms', desc: 'Sorting, Searching, and Two Pointers' },
                { step: 3, title: 'Advanced Data Structures', desc: 'Trees, Graphs, and Heaps' },
                { step: 4, title: 'Dynamic Programming', desc: 'Pattern Recognition and Optimization' },
                { step: 5, title: 'System Design', desc: 'Scalable Architecture Patterns' }
              ].map((path) => (
                <div key={path.step} className={styles.pathStep}>
                  <h3>Step {path.step}: {path.title}</h3>
                  <p>{path.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className="container">
            <h2>Pattern Success Statistics</h2>
            <div className={styles.statsGrid}>
              {[
                { stat: '95%', desc: 'Interview Success Rate' },
                { stat: '1000+', desc: 'Problems Covered' },
                { stat: '50+', desc: 'Unique Patterns' },
                { stat: '10K+', desc: 'Active Learners' }
              ].map((item) => (
                <div key={item.desc} className={styles.statCard}>
                  <h3>{item.stat}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
