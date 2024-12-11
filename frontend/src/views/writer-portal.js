import React from 'react'
import { Helmet } from 'react-helmet'
import './writer-portal.css'

const WriterPortal = () => {
  return (
    <div className="writer-portal-container">
      <Helmet>
        <title>Writer Portal - AI Research Hubs</title>
        <meta property="og:title" content="Writer Portal - AI Research Hubs" />
      </Helmet>
      <header className="writer-portal-header">
        <h1>Writer Portal</h1>
        <p>Explore opportunities to contribute to AI Research Hubs.</p>
      </header>
      <section className="writer-portal-content">
        <h2>Submit Your Application</h2>
        <p>Fill out the form below to apply as a writer.</p>
        {/* Form for writer application */}
        <form className="writer-portal-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Why do you want to write for us?" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  )
}

export default WriterPortal
