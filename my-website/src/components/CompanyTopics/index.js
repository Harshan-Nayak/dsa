import React from 'react';
import styles from './styles.module.css';

const companyData = {
  Google: [
    'Graph Algorithms',
    'Dynamic Programming',
    'Trees (especially balanced BSTs)',
    'Recursion and Backtracking',
    'String Manipulation'
  ],
  Microsoft: [
    'Binary Trees and BSTs',
    'Graph Traversals (BFS/DFS)',
    'Dynamic Programming',
    'Arrays and Strings',
    'System Design'
  ],
  Amazon: [
    'Arrays and Hash Tables',
    'Trees (especially Binary Search Trees)',
    'Graphs (BFS/DFS)',
    'Dynamic Programming',
    'Object-Oriented Design'
  ],
  Flipkart: [
    'Arrays and Strings',
    'Hash Tables',
    'Linked Lists',
    'Trees and Graphs',
    'Dynamic Programming'
  ],
  Meta: [
    'Arrays and Strings',
    'Graphs (especially BFS/DFS)',
    'Dynamic Programming',
    'Hash Tables',
    'Binary Search'
  ],
  Oracle: [
    'SQL Optimization',
    'Trees and Graphs',
    'Arrays and LinkedLists',
    'Hash Tables',
    'Dynamic Programming'
  ],
  Cisco: [
    'Networking Algorithms',
    'Trees and Graphs',
    'Dynamic Programming',
    'Arrays and Strings',
    'System Design'
  ],
  Atlassian: [
    'Arrays and Strings',
    'Hash Tables',
    'Trees and Graphs',
    'Sorting and Searching',
    'Object-Oriented Design'
  ],
  Salesforce: [
    'Array Manipulation',
    'Hash Tables',
    'Trees and Graphs',
    'Dynamic Programming',
    'SQL and Database Concepts'
  ],

};

export default function CompanyTopics() {
  return (
    <section className={styles.companyTopicsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Company-Specific Focus Areas</h2>
        <div className={styles.companyGrid}>
          {Object.entries(companyData).map(([company, topics]) => (
            <div key={company} className={styles.companyCard}>
              <h3 className={styles.companyName}>{company}</h3>
              <ul className={styles.topicsList}>
                {topics.map((topic, index) => (
                  <li key={index} className={styles.topicItem}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}