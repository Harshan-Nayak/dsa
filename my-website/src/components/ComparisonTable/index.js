import React from 'react';
import styles from './styles.module.css';
import CompanyTopics from '../CompanyTopics';

const dataStructuresData = {
  linear: [
    { structure: 'Array', access: 'O(1)', insert: 'O(1)', delete: 'O(n)', search: 'O(n)', traverse: 'O(n)' },
    { structure: 'Ordered array', access: 'O(1)', insert: 'O(n)', delete: 'O(n)', search: 'O(logn)', traverse: 'O(n)' },
    { structure: 'Linked list', access: 'O(n)', insert: 'O(1)', delete: 'O(n)', search: 'O(n)', traverse: 'O(n)' },
    { structure: 'Matrix', access: 'O(1)', insert: 'O(1)', delete: 'O(1)', search: 'O(m*n)', traverse: 'O(m*n)' },
    { structure: 'Stack', access: 'O(1)', insert: 'O(1)', delete: 'O(1)', search: 'O(n)', traverse: 'O(n)' },
    { structure: 'Queue', access: 'O(1)', insert: 'O(1)', delete: 'O(1)', search: 'O(n)', traverse: 'O(n)' },
  ],
  nonLinear: [
    { structure: 'Tree', access: 'O(n)', insert: 'O(1)', delete: 'O(n)', search: 'O(n)', traverse: 'O(n)' },
    { structure: 'Balanced tree', access: 'O(logn)', insert: 'O(logn)', delete: 'O(logn)', search: 'O(logn)', traverse: 'O(n)' },
    { structure: 'Graph', access: 'O(V)', insert: 'O(1)', delete: 'O(V+E)', search: 'O(V+E)', traverse: 'O(V+E)' },
    { structure: 'Trie', access: 'O(s)', insert: 'O(s)', delete: 'O(s)', search: 'O(s)', traverse: 'O(n*s)' },
    { structure: 'Suffix trie', access: 'O(s)', insert: 'O(s)', delete: 'O(s)', search: 'O(s)', traverse: 'O(s^2)' },
  ]
};

const algorithmsData = {
  sorting: [
    { algorithm: 'Bubble, Selection, Insertion', time: 'O(n^2)', space: 'O(1)', usedArea: 'Simple sort' },
    { algorithm: 'Merge sort', time: 'O(n*logn)', space: 'O(n)', usedArea: 'Stable sort' },
    { algorithm: 'Quick sort', time: 'O(n*logn)', space: 'O(logn)', usedArea: 'Quick sort' },
  ],
  searching: [
    { algorithm: 'Linear search', time: 'O(n)', space: 'O(1)', usedArea: 'Search in non-sorted array' },
    { algorithm: 'Binary search', time: 'O(logn)', space: 'O(1)', usedArea: 'Search in sorted array' },
  ],
  recursion: [
    { algorithm: 'Factorial', time: 'O(n)', space: 'O(n)', usedArea: 'Math' },
    { algorithm: 'Valid parentheses', time: 'O(Cn)', space: 'O(Cn)', usedArea: 'String' },
    { algorithm: 'Permutation', time: 'O(n!)', space: 'O(n!)', usedArea: 'Array, String' },
    { algorithm: 'All subsets', time: 'O(2^n)', space: 'O(2^n)', usedArea: 'Array, String' },
  ],
  dynamicProgramming: [
    { algorithm: 'Fibonacci', time: 'O(n)', space: 'O(1)', usedArea: 'Math' },
    { algorithm: 'Knapsack', time: 'O(n*w)', space: 'O(n*w)', usedArea: 'Array' },
    { algorithm: 'Edit distance', time: 'O(s*t)', space: 'O(t)', usedArea: 'String' },
    { algorithm: 'Num of unique paths in matrix', time: 'O(m*n)', space: 'O(n)', usedArea: 'Matrix' },
  ]
};

export default function ComparisonTable() {
  const renderDataStructuresSection = (data, title) => (
    <>
      <tr className={styles.categoryRow}>
        <td colSpan="6">{title}</td>
      </tr>
      {data.map((row, index) => (
        <tr key={index}>
          <td>{row.structure}</td>
          <td>{row.access}</td>
          <td>{row.insert}</td>
          <td>{row.delete}</td>
          <td>{row.search}</td>
          <td>{row.traverse}</td>
        </tr>
      ))}
    </>
  );

  const renderAlgorithmsSection = (data, title) => (
    <>
      <tr className={styles.categoryRow}>
        <td colSpan="4">{title}</td>
      </tr>
      {data.map((row, index) => (
        <tr key={index}>
          <td>{row.algorithm}</td>
          <td>{row.time}</td>
          <td>{row.space}</td>
          <td>{row.usedArea}</td>
        </tr>
      ))}
    </>
  );

  return (
    <>
      <section className={styles.tableSection}>
        <div className="container" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className={styles.tableWrapper}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Data structure</th>
                <th>Access</th>
                <th>Insert</th>
                <th>Delete</th>
                <th>Search</th>
                <th>Traverse</th>
              </tr>
            </thead>
            <tbody>
              {renderDataStructuresSection(dataStructuresData.linear, 'Linear')}
              {renderDataStructuresSection(dataStructuresData.nonLinear, 'Non-linear')}
            </tbody>
          </table>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Algorithms</th>
                <th>Time</th>
                <th>Space</th>
                <th>Used area</th>
              </tr>
            </thead>
            <tbody>
              {renderAlgorithmsSection(algorithmsData.sorting, 'Sorting')}
              {renderAlgorithmsSection(algorithmsData.searching, 'Searching')}
              {renderAlgorithmsSection(algorithmsData.recursion, 'Recursion')}
              {renderAlgorithmsSection(algorithmsData.dynamicProgramming, 'Dynamic Programming')}
            </tbody>
          </table>
        </div>
        </div>
      </section>
      <CompanyTopics />
    </>
  );
}