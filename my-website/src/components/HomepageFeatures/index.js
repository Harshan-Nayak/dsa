import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Two Pointers',
    Svg: require('@site/static/img/two_pointers.svg').default,
    description: (
      <>
        Master the two pointers technique for solving array and string problems efficiently.
      </>
    ),
  },
  {
    title: 'Sliding Window',
    Svg: require('@site/static/img/sliding_window.svg').default,
    description: (
      <>
        Learn how to optimize solutions using the sliding window pattern for subarray problems.
      </>
    ),
  },
  {
    title: 'Binary Search',
    Svg: require('@site/static/img/binary_search.svg').default,
    description: (
      <>
        Understand when and how to apply binary search beyond simple sorted array searches.
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
