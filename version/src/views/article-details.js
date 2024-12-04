import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Footer3 from '../components/footer3'
import './article-details.css'

const ArticleDetails = (props) => {
  return (
    <div className="article-details-container1">
      <Helmet>
        <title>Article-Details - Character NFT template</title>
        <meta
          property="og:title"
          content="Article-Details - Character NFT template"
        />
      </Helmet>
      <header className="article-details-header1">
        <header data-thq="thq-navbar" className="article-details-navbar">
          <span className="article-details-logo1">Character</span>
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
                <span className="article-details-logo2">Character</span>
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
                <span className="article-details-text11">Features</span>
                <span className="article-details-text12">Pricing</span>
                <span className="article-details-text13">Team</span>
                <span className="article-details-text14">Blog</span>
              </nav>
              <div className="article-details-container3">
                <button className="article-details-login button">Login</button>
                <button className="button">Register</button>
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
          <h1 className="article-details-header2">
            How Neural Networks Work: A Beginner’s Guide
          </h1>
        </div>
        <span id="article1" className="article-details-text15">
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="article-details-text17">Introduction</span>
          <br className="article-details-text18"></br>
          <br className="article-details-text19"></br>
          <span>
            Neural networks, a cornerstone of artificial intelligence, are
            revolutionizing industries by solving complex problems like image
            recognition, natural language processing, and autonomous driving.
            But what exactly are neural networks, and how do they work? Let’s
            break it down.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span className="article-details-text25">
            What is a Neural Network?
          </span>
          <br></br>
          <br></br>
          <span>
            A neural network is a type of machine learning model inspired by the
            structure of the human brain. It consists of layers of
            interconnected nodes, or &quot;neurons,&quot; designed to process
            and recognize patterns in data.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            - Input Layer: Receives raw data (e.g., an image’s pixel values).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            - Hidden Layers: Perform computations, extracting features from the
            data.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            - Output Layer: Produces the final result, such as a classification
            or prediction.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span className="article-details-text40">
            How Does a Neural Network Learn?
          </span>
          <br className="article-details-text41"></br>
          <br></br>
          <span>
            Neural networks learn through a process called **training**, which
            involves feeding the model with labeled data and adjusting its
            internal parameters (weights and biases) to minimize errors. This
            process is achieved using algorithms like **backpropagation** and
            optimization techniques such as **gradient descent**.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            -Forward Pass: Data flows through the network, and predictions are
            made.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            - Error Calculation: The difference between the prediction and the
            actual value is measured using a loss function.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            - Backward Pass: The network adjusts its parameters to reduce the
            error for future predictions.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span className="article-details-text55">
            Key Applications of Neural Networks
          </span>
          <br className="article-details-text56"></br>
          <br></br>
          <span>
            1. **Image Recognition**: Identifying objects in photos or videos
            (e.g., facial recognition).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            2. **Speech Processing**: Converting spoken language into text or
            generating human-like speech.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            3. **Healthcare**: Diagnosing diseases through medical imaging
            analysis.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>---</span>
          <br></br>
          <br></br>
          <span className="article-details-text68">
            Why Are Neural Networks Important?
          </span>
          <br className="article-details-text69"></br>
          <br></br>
          <span>
            Neural networks are powerful because of their ability to generalize
            from data and uncover complex patterns that traditional algorithms
            might miss. This makes them invaluable in fields requiring
            data-driven decision-making and automation.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>---</span>
          <br></br>
          <br></br>
          <span className="article-details-text77">Conclusion</span>
          <br className="article-details-text78"></br>
          <br></br>
          <br></br>
          <span>
            Neural networks are shaping the future of AI by enabling machines to
            learn and make intelligent decisions. Whether you&apos;re a beginner
            or an experienced data scientist, understanding the basics of how
            these systems work is essential to leveraging their potential.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            Ready to dive deeper into neural networks? Explore our related
            articles for more insights.
          </span>
          <br></br>
          <br></br>
        </span>
        <div className="article-details-container4">
          <div className="article-details-container5">
            <div className="article-details-container6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="article-details-icon20"
              >
                <path
                  d="M20.61 19.19a7 7 0 0 0-2.74-10.57a8 8 0 1 0-14.19 6.29l-1.39 1.38a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 18h5.69A7 7 0 0 0 15 22h6a1 1 0 0 0 .92-.62a1 1 0 0 0-.21-1.09ZM8 15a6.6 6.6 0 0 0 .08 1H5.41l.35-.34a1 1 0 0 0 0-1.42A5.93 5.93 0 0 1 4 10a6 6 0 0 1 6-6a5.94 5.94 0 0 1 5.65 4H15a7 7 0 0 0-7 7m10.54 5l.05.05H15a5 5 0 1 1 3.54-1.46a1 1 0 0 0-.3.7a1 1 0 0 0 .3.71"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="article-details-icon22"
            >
              <g fill="none" stroke="currentColor" stroke-width="1.5">
                <path
                  d="M18 22a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-14a3 3 0 1 0 0-6a3 3 0 0 0 0 6M6 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path d="m15.5 6.5l-7 4m0 3l7 4"></path>
              </g>
            </svg>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              className="article-details-icon26"
            >
              <path
                d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
                fill="#2F88FF"
                stroke="#000"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div className="article-details-container7">
            <svg
              height="48"
              width="48"
              viewBox="0 0 48 48"
              className="article-details-icon28"
            >
              <g fill="currentColor">
                <path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></path>
                <path
                  fill-rule="evenodd"
                  d="M23.184 43.984C12.517 43.556 4 34.772 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20h-.274q-.272 0-.542-.016M11.166 36.62a3.028 3.028 0 0 1 2.523-4.005c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 2.498 4.002A17.94 17.94 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 4.916 1.971 9.373 5.166 12.621"
                  clip-rule="evenodd"
                ></path>
              </g>
            </svg>
            <ul className="article-details-ul list">
              <li className="article-details-li1 list-item">
                <span>Published By: </span>
              </li>
              <li className="list-item">
                <span className="article-details-text88">Date: </span>
              </li>
              <li className="list-item"></li>
            </ul>
          </div>
        </div>
      </section>
      <div>
        <div className="article-details-container9">
          <Script
            html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
          ></Script>
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
