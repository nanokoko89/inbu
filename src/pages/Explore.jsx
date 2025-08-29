import React from 'react'
import Header from '../components/Header/Header'
import styles from './Explore.module.scss'

const directory = [
  {
    name: 'Jane Doe Photography',
    category: 'Photography',
    description: 'Lifestyle photographer capturing everyday moments.',
    website: 'https://janedoe.com'
  },
  {
    name: 'TechGuru Consulting',
    category: 'IT Consulting',
    description: 'Technology solutions for small businesses.',
    website: 'https://techguru.example'
  },
  {
    name: 'Green Thumb Landscaping',
    category: 'Landscaping',
    description: 'Garden design and lawn care services.',
    website: 'https://greenthumb.example'
  }
]

export default function Explore() {
  return (
    <div>
      <Header />
      <div className={`container ${styles.directory}`}>
        <h1>Brand Directory</h1>
        <p>Discover individuals and businesses on our platform.</p>
        <div className={styles.list}>
          {directory.map((item) => (
            <div key={item.name} className={styles.card}>
              <h3>{item.name}</h3>
              <p className={styles.category}>{item.category}</p>
              <p>{item.description}</p>
              <a href={item.website} target="_blank" rel="noopener noreferrer">
                {item.website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
