import React from 'react';
import styles from './styles.module.css';

const tableData = {
  title: 'DFS and BFS Use Cases',
  headers: ['Category', 'Sample Questions', 'Time Complexity'],
  rows: [
    {
      category: 'DFS',
      questions: '',
      complexity: ''
    },
    {
      category: 'DFS in tree',
      questions: 'Tree in-order traversal',
      complexity: 'O(n)'
    },
    {
      category: 'DFS in string',
      questions: 'Word break with recursion',
      complexity: 'O(2^s)'
    },
    {
      category: '',
      questions: 'Word break with recursion and memoization',
      complexity: 'O(s²)'
    },
    {
      category: 'DFS in graph',
      questions: 'Graph DFS traversal with memoization',
      complexity: 'O(V+E)'
    },
    {
      category: 'DFS in matrix',
      questions: 'Number of islands with memoization',
      complexity: 'O(m*n)'
    },
    {
      category: 'BFS',
      questions: '',
      complexity: ''
    },
    {
      category: 'BFS in tree',
      questions: 'Tree level order traversal',
      complexity: 'O(n)'
    },
    {
      category: 'BFS in string',
      questions: 'Word ladder BFS or Bi-directional BFS with memoization',
      complexity: 'O(s*n)'
    },
    {
      category: 'BFS in graph',
      questions: 'Graph BFS traversal with memoization',
      complexity: 'O(V+E)'
    },
    {
      category: 'Find path',
      questions: 'BFS without memoization',
      complexity: 'O(b^d)'
    },
    {
      category: '',
      questions: 'Bi-directional BFS without memoization',
      complexity: 'O(b^(d/2))'
    },
    {
      category: 'Shortest path',
      questions: 'Shortest path in unweighted and undirected graph with memoization',
      complexity: 'O(V+E)'
    },
    {
      category: '',
      questions: 'Shortest path in adjacent matrix with memoization',
      complexity: 'O(m*n)'
    },
  ]
};

export default function AlgorithmTable() {
  return (
    <section className={styles.tableSection}>
      <div className="container">
        <h2 className={styles.tableTitle}>{tableData.title}</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.algorithmTable}>
            <thead>
              <tr>
                {tableData.headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, index) => (
                <tr key={index}>
                  <td>{row.category}</td>
                  <td>{row.questions}</td>
                  <td>{row.complexity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}