import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import logo from '../assets/without_bg.png'
import sampleImage from '../assets/fg.jpg'
import Footer3 from '../components/footer3'
import './article-details.css'
import 'katex/dist/katex.min.css'
import { BlockMath, InlineMath } from 'react-katex'

const ArticleDetails = (props) => {
  const { articleId } = useParams()
  const [article, setArticle] = useState({
    title: 'Loading...',
    content: 'Loading...',
  })
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showComments, setShowComments] = useState(false)

  useEffect(() => {
    // Placeholder for fetching article data
    setArticle({
      title: 'How Neural Networks Work: A Beginner’s Guide',
      content: (
        <Fragment>
          <h2>Introduction</h2>
          <p>Neural networks, a cornerstone of artificial intelligence, are revolutionizing industries by solving complex problems like image recognition, natural language processing, and autonomous driving. But what exactly are neural networks, and how do they work? Let’s break it down.</p>
          <img src={sampleImage} alt="Sample" />
          <h2>What is a Neural Network?</h2>
          <p>A neural network is a type of machine learning model inspired by the structure of the human brain. It consists of layers of interconnected nodes, or "neurons," designed to process and recognize patterns in data.</p>
          <ul>
            <li>Input Layer: Receives raw data (e.g., an image’s pixel values).</li>
            <li>Hidden Layers: Perform computations, extracting features from the data.</li>
            <li>Output Layer: Produces the final result, such as a classification or prediction.</li>
          </ul>
          <h2>How Does a Neural Network Learn?</h2>
          <p>Neural networks learn through a process called <strong>training</strong>, which involves feeding the model with labeled data and adjusting its internal parameters (weights and biases) to minimize errors. This process is achieved using algorithms like <strong>backpropagation</strong> and optimization techniques such as <strong>gradient descent</strong>.</p>
          <p>For example, the equation <InlineMath math="y = mx + b" /> represents a simple linear relationship.</p>
          <p>Einstein's famous equation <InlineMath math="E = mc^2" /> shows the relationship between energy and mass.</p>
          <p>The derivative of the exponential function is given by <InlineMath math="\\frac{d}{dx}e^x = e^x" />.</p>
          <pre><code class="language-js">const neuralNetwork = new NeuralNetwork();</code><button class="copy-button">Copy</button></pre>
          <h2>Key Applications of Neural Networks</h2>
          <p>1. <strong>Image Recognition</strong>: Identifying objects in photos or videos (e.g., facial recognition).</p>
          <p>2. <strong>Speech Processing</strong>: Converting spoken language into text or generating human-like speech.</p>
          <p>3. <strong>Healthcare</strong>: Diagnosing diseases through medical imaging analysis.</p>
          <h2>Why Are Neural Networks Important?</h2>
          <p>Neural networks are powerful because of their ability to generalize from data and uncover complex patterns that traditional algorithms might miss. This makes them invaluable in fields requiring data-driven decision-making and automation.</p>
          <h2>Conclusion</h2>
          <p>Neural networks are shaping the future of AI by enabling machines to learn and make intelligent decisions. Whether you&apos;re a beginner or an experienced data scientist, understanding the basics of how these systems work is essential to leveraging their potential.</p>
          <p>Ready to dive deeper into neural networks? Explore our related articles for more insights.</p>
        </Fragment>
      ),
    })
  }, [articleId])

  useEffect(() => {
    const copyButtons = document.querySelectorAll('.copy-button')
    copyButtons.forEach(button => {
      button.addEventListener('click', () => {
        const codeBlock = button.previousElementSibling
        navigator.clipboard.writeText(codeBlock.textContent)
        button.textContent = 'Copied!'
        setTimeout(() => {
          button.textContent = 'Copy'
        }, 2000)
      })
    })
  }, [article.content])

  const handleLike = () => {
    if (isLoggedIn) {
      setIsLiked(!isLiked)
      setLikes(isLiked ? likes - 1 : likes + 1)
    } else {
      alert('Please log in to like the article.')
    }
  }

  const handleComment = () => {
    if (isLoggedIn) {
      setShowComments(!showComments)
    } else {
      alert('Please log in to comment on the article.')
    }
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment])
      setNewComment('')
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        url: window.location.href,
      }).then(() => {
        console.log('Thanks for sharing!');
      }).catch(console.error);
    } else {
      alert('Share feature is not supported in your browser.');
    }
  }

  return (
    <div className="article-details-container1">
      <Helmet>
        <title>{article.title} - AI Research Hubs</title>
        <meta property="og:title" content={`${article.title} - AI Research Hubs`} />
      </Helmet>
      <header className="article-details-header1">
        <header data-thq="thq-navbar" className="home-navbar">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="article-details-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="article-details-nav1"
            ></nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="article-details-btn-group"
          >
            <div className="article-details-socials"></div>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="article-details-burger-menu"
          >
            <button className="button article-details-button">
              <svg viewBox="0 0 1024 1024" className="article-details-icon10">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="article-details-mobile-menu"
          >
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="article-details-nav2"
            >
              <div className="article-details-container2">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <div
                  data-thq="thq-close-menu"
                  className="article-details-menu-close"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="article-details-icon12"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="article-details-nav3"
              >
                <span className="article-details-text10">About</span>
                <span className="article-details-text11">Team</span>
              </nav>
              <div className="article-details-container3">
                <button className="article-details-login button">
                  Register/Login
                </button>
              </div>
            </div>
            <div className="article-details-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="article-details-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="article-details-icon16"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="article-details-icon18"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          <Link to="/" className="article-details-navlink1 button-clean button">
            Home
          </Link>
          <Link
            to="/article-details"
            className="article-details-navlink2 button-clean button"
          >
            Infographics
          </Link>
          <Link
            to="/article-details"
            className="article-details-navlink3 button-clean button"
          >
            About
          </Link>
        </header>
      </header>
      <section className="article-details-hero">
        <div className="article-details-heading">
          <h1 className="article-details-header2">{article.title}</h1>
        </div>
        <div id="article1" className="article-details-content">
          {article.content}
        </div>
        <div className="article-details-meta">
          <div className="article-details-author">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              className="article-details-icon28"
            >
              <g fill="currentColor">
                <path d="M16 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></path>
                <path
                  fill-rule="evenodd"
                  d="M11.592 21.992C6.258 21.778 2 17.386 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10h-.137q-.136 0-.271-.008M5.583 18.31a1.514 1.514 0 0 1 1.261-2.003c3.898-.431 6.432-.392 10.32.009a1.495 1.495 0 0 1 1.249 2.002A8.97 8.97 0 0 0 21 12c0-4.971-4.029-9-9-9S3 7.029 3 12c0 2.458.986 4.687 2.583 6.31"
                  clip-rule="evenodd"
                ></path>
              </g>
            </svg>
            <div className="article-details-author-info">
              <span>Published By: Author Name</span>
              <span>Date: 01 Jan 2023</span>
            </div>
          </div>
          <div className="article-details-actions">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="article-details-icon20"
              onClick={handleComment}
            >
              <path
                d="M20.61 19.19a7 7 0 0 0-2.74-10.57a8 8 0 1 0-14.19 6.29l-1.39 1.38a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 18h5.69A7 7 0 0 0 15 22h6a1 1 0 0 0 .92-.62a1 1 0 0 0-.21-1.09ZM8 15a6.6 6.6 0 0 0 .08 1H5.41l.35-.34a1 1 0 0 0 0-1.42A5.93 5.93 0 0 1 4 10a6 6 0 0 1 6-6a5.94 5.94 0 0 1 5.65 4H15a7 7 0 0 0-7 7m10.54 5l.05.05H15a5 5 0 1 1 3.54-1.46a1 1 0 0 0-.3.7a1 1 0 0 0 .3.71"
                fill="currentColor"
              ></path>
            </svg>
            <div className="like-container">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`article-details-icon22 ${isLiked ? 'liked' : ''}`}
                onClick={handleLike}
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill={isLiked ? 'blue' : 'white'}
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
              <span>{likes}</span>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="article-details-icon24"
              onClick={handleShare}
            >
              <path
                d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.53.5 1.21.81 1.96.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.51 9.31 6.83 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.83 0 1.51-.31 2.04-.81l7.13 4.16c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        {showComments && (
          <div className="comments-section">
            <h3>Comments</h3>
            <div className="comments-list">
              {comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </div>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
            ></textarea>
            <button onClick={handleAddComment}>Add Comment</button>
          </div>
        )}
      </section>
      <div>
        <div className="article-details-container9">
          <Script src="/path/to/accordionScript.js"></Script>
        </div>
      </div>
      <Footer3
        link1={
          <Fragment>
            <span className="article-details-text89">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="article-details-text90">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="article-details-text91">FAQs</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="article-details-text92">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="article-details-text93">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="article-details-text94">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer3root-class-name4"
      ></Footer3>
    </div>
  )
}

export default ArticleDetails
