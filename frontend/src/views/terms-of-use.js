import React from 'react'
import { Helmet } from 'react-helmet'
import './terms-of-use.css'

const TermsOfUse = () => {
  return (
    <div className="terms-of-use-container">
      <Helmet>
        <title>Terms of Use - AI Research Hubs</title>
        <meta property="og:title" content="Terms of Use - AI Research Hubs" />
      </Helmet>
      <header className="terms-of-use-header">
        <h1>Terms of Use</h1>
      </header>
      <section className="terms-of-use-content">
        <h2>Introduction</h2>
        <p>These terms govern your use of our website and services.</p>
        {/* Add more sections as needed */}
      </section>
    </div>
  )
}

export default TermsOfUse
