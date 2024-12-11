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
      const hljsScript = document.createElement('script')
      hljsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js'
      hljsScript.onload = () => {
        const katexScript = document.createElement('script')
        katexScript.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.15/dist/katex.min.js'
        katexScript.onload = () => {
          const autoRenderScript = document.createElement('script')
          autoRenderScript.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.15/dist/contrib/auto-render.min.js'
          autoRenderScript.onload = () => {
            const Clipboard = window.Quill.import('modules/clipboard')
            const Delta = window.Quill.import('delta')
            const FontAttributor = window.Quill.import('attributors/class/font')
            const Bold = window.Quill.import('formats/bold')

            // Customize font whitelist
            FontAttributor.whitelist = ['sofia', 'slabo', 'roboto', 'inconsolata', 'ubuntu']
            window.Quill.register(FontAttributor, true)

            // Customize bold format to use <b> tag
            Bold.tagName = 'B'
            window.Quill.register(Bold, true)

            // Custom module to log content changes
            class LogContentModule {
              constructor(quill, options) {
                quill.on('text-change', () => {
                  console.log('Editor content changed:', quill.root.innerHTML)
                })
              }
            }
            window.Quill.register('modules/logContent', LogContentModule)

            class PlainClipboard extends Clipboard {
              convert(html = null) {
                if (typeof html === 'string') {
                  this.container.innerHTML = html
                }
                let text = this.container.innerText
                this.container.innerHTML = ''
                return new Delta().insert(text)
              }
            }

            window.Quill.register('modules/clipboard', PlainClipboard, true)

            const toolbarOptions = [
              ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],               // custom button values
              [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
              [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
              [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
              [{ 'direction': 'rtl' }],                         // text direction
              [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
              [{ 'font': FontAttributor.whitelist }],
              [{ 'align': [] }],
              ['link', 'image', 'video', 'formula'],            // embedding options
              ['clean'],                                        // remove formatting button
              ['undo', 'redo']                                  // undo and redo buttons
            ]

            const quillInstance = new window.Quill('#editor', {
              theme: 'snow', // Use Snow theme
              modules: {
                toolbar: {
                  container: toolbarOptions,
                  handlers: {
                    link: function (value) {
                      if (value) {
                        const href = prompt('Enter the URL')
                        this.quill.format('link', href)
                      } else {
                        this.quill.format('link', false)
                      }
                    },
                    undo: function () {
                      this.quill.history.undo()
                    },
                    redo: function () {
                      this.quill.history.redo()
                    }
                  }
                },
                syntax: { hljs: window.hljs }, // Enable syntax highlighting
                table: true, // Enable table support
                history: { // Enable history module with custom configurations
                  delay: 2000,
                  maxStack: 500,
                  userOnly: true
                },
                keyboard: {
                  bindings: {
                    customBold: {
                      key: 'B',
                      shortKey: true,
                      handler: function(range, context) {
                        this.quill.format('bold', !context.format.bold)
                      }
                    },
                    customItalic: {
                      key: 'I',
                      shortKey: true,
                      handler: function(range, context) {
                        this.quill.format('italic', !context.format.italic)
                      }
                    }
                  }
                },
                clipboard: {
                  matchers: [
                    ['B', (node, delta) => {
                      return delta.compose(new Delta().retain(delta.length(), { bold: true }))
                    }],
                    [Node.TEXT_NODE, (node, delta) => {
                      return new Delta().insert(node.data)
                    }]
                  ]
                },
                logContent: true // Enable custom log content module
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
          document.body.appendChild(autoRenderScript)
        }
        document.body.appendChild(katexScript)
      }
      document.body.appendChild(hljsScript)
    }
    document.body.appendChild(script)
  }, [])

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
      </section>
      <Footer3 />
    </div>
  )
}

export default WriterPortal
