import React from 'react'
import './styles.css'

const Section = ({ children, ...rest }) => (
  <section>
    <svg className="Section-border" viewBox="0 0 8 4" preserveAspectRatio="none">
      <path d="M8 0v4H0a5.025 5.025 0 0 0 4-2 5.026 5.026 0 0 1 4-2z" />
    </svg>
    {children}
  </section>
)

export default Section
