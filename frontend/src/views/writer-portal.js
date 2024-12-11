import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './writer-portal.css'
import Footer3 from '../components/footer3'

const WriterPortal = () => {
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [content, setContent] = useState('')
  const [quill, setQuill] = useState(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js'
    script.onload = () => {
      const quillInstance = new window.Quill('#editor', {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, 4, false] }],
            [{ 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
            [{ 'align': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            ['link', 'image', 'video', 'formula'],
            ['clean']
          ],
          syntax: true, // Enable syntax highlighting
          table: true // Enable table support
        },
        placeholder: 'Compose an epic...',
        formats: [
          'background', 'bold', 'color', 'font', 'code', 'italic', 'link', 'size', 'strike', 'script', 'underline',
          'blockquote', 'header', 'indent', 'list', 'align', 'direction', 'code-block', 'formula', 'image', 'video'
        ]
      })
      quillInstance.on('text-change', () => {
        setContent(quillInstance.root.innerHTML)
        console.log('Editor content changed:', quillInstance.root.innerHTML)
      })
      setQuill(quillInstance)
    }
    document.body.appendChild(script)
  }, [])

  const handleInsertText = () => {
    if (quill) {
      quill.insertText(0, 'Hello, Quill!', 'bold', true)
    }
  }

  const handleGetText = () => {
    if (quill) {
      const text = quill.getText(0, 10)
      console.log('First 10 characters:', text)
    }
  }

  return (
    <div className="writer-portal-container">
      <Helmet>
        <title>Writer Portal - AI Research Hubs</title>
        <meta property="og:title" content="Writer Portal - AI Research Hubs" />
      </Helmet>
      <header className="writer-portal-header">
        <nav className="writer-portal-navbar">
          <Link to="/writer-portal" className="writer-portal-navlink">Writer Portal</Link>
          <Link to="/payment-details" className="writer-portal-navlink">Payment Details</Link>
          <Link to="/published" className="writer-portal-navlink">Published</Link>
        </nav>
        <h1>Writer Portal</h1>
        <p>Explore opportunities to contribute to AI Research Hubs.</p>
      </header>
      <section className="writer-portal-content">
        <h2>Draft Your Article</h2>
        <form className="writer-portal-form">
          <input
            type="text"
            placeholder="Article Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Article Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
        </form>
        <div id="editor">
          <p>Start writing your article...</p>
        </div>
        <button onClick={handleInsertText}>Insert Text</button>
        <button onClick={handleGetText}>Get Text</button>
      </section>
      <Footer3 />
    </div>
  )
}

export default WriterPortal
