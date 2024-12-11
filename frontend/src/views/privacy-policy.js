import React from 'react'
import { Helmet } from 'react-helmet'
import './privacy-policy.css'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <Helmet>
        <title>Privacy Policy - AI Research Hubs</title>
        <meta property="og:title" content="Privacy Policy - AI Research Hubs" />
      </Helmet>
      <header className="privacy-policy-header">
        <h1>Privacy Policy</h1>
      </header>
      <section className="privacy-policy-content">
        <h2>Introduction</h2>
        <p>We value your privacy and are committed to protecting your personal data.</p>
        {/* Add more sections as needed */}
      </section>
    </div>
  )
}

export default PrivacyPolicy
