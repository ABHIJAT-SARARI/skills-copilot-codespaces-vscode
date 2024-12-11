import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './writer-portal.css'
import Footer3 from '../components/footer3'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const WriterPortal = () => {
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [content, setContent] = useState('')

  const handleEditorChange = (value) => {
    setContent(value)
  }

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'indent': '-1'}, { 'indent': '+1' }, { 'lineheight': [] }],
      ['link', 'image', 'video', 'table', 'blockquote', 'hr'],
      ['clean']
    ]
  }

  const formats = [
    'header', 'font', 'list', 'bullet', 'check', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'align', 'color', 'background', 'indent', 'lineheight', 'link', 'image', 'video', 'table', 'hr'
  ]

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
        <ReactQuill
          value={content}
          onChange={handleEditorChange}
          modules={modules}
          formats={formats}
          theme="snow"
        />
      </section>
      <Footer3 />
    </div>
  )
}

export default WriterPortal
