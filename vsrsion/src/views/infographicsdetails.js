import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import logo from '../assets/without_bg.png'
import Footer3 from '../components/footer3'
import accordionScript from '../scripts/accordionScript'
import './infographicsdetails.css'

const Infographicsdetails = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Placeholder for actual login state
  const username = "John Doe"; // Placeholder for actual username

  // Placeholder data
  const infographic = {
    title: "The AI Evolution: Key Milestones Through the Decades",
    description: "Grasp complex concepts with our engaging and easy-to-understand infographics, designed to make AI and data science accessible to everyone.",
    image: "https://play.io/static/svg/default-img.svg",
    usedBy: "Organization, university, paper talk",
    tags: "AI, Data Science, Technology"
  }

  return (
    <div className="infographicsdetails-container10">
      <Helmet>
        <title>{infographic.title} - AI Research Hubs</title>
        <meta property="og:title" content={`${infographic.title} - AI Research Hubs`} />
      </Helmet>
      <header className="infographicsdetails-header1">
        <div data-thq="thq-navbar" className="home-navbar">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <div data-thq="thq-navbar-nav" data-role="Nav" className="infographicsdetails-desktop-menu">
            <nav data-thq="thq-navbar-nav-links" data-role="Nav" className="infographicsdetails-nav1"></nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="infographicsdetails-btn-group">
            <div className="infographicsdetails-socials"></div>
            {isLoggedIn ? (
              <div className="profile">
                <img src="/path/to/profile-icon.png" alt="Profile" className="profile-icon" />
                <span>{username}</span>
              </div>
            ) : (
              <button className="infographicsdetails-login button">Register/Login</button>
            )}
          </div>
          <div data-thq="thq-burger-menu" className="infographicsdetails-burger-menu">
            <button className="button infographicsdetails-button">
              <svg viewBox="0 0 1024 1024" className="infographicsdetails-icon10">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="infographicsdetails-mobile-menu">
            <div data-thq="thq-mobile-menu-nav" data-role="Nav" className="infographicsdetails-nav2">
              <div className="infographicsdetails-container11">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <div data-thq="thq-close-menu" className="infographicsdetails-menu-close">
                  <svg viewBox="0 0 1024 1024" className="infographicsdetails-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav data-thq="thq-mobile-menu-nav-links" data-role="Nav" className="infographicsdetails-nav3">
                <span className="infographicsdetails-text10">About</span>
                <span className="infographicsdetails-text11">Team</span>
              </nav>
              <div className="infographicsdetails-container12">
                {isLoggedIn ? (
                  <div className="profile">
                    <img src="/path/to/profile-icon.png" alt="Profile" className="profile-icon" />
                    <span>{username}</span>
                  </div>
                ) : (
                  <button className="infographicsdetails-login button">Register/Login</button>
                )}
              </div>
            </div>
            <div className="infographicsdetails-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="infographicsdetails-icon14">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="infographicsdetails-icon16">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="infographicsdetails-icon18">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          <Link to="/articles" className="infographicsdetails-navlink1 button-clean button">Home</Link>
          <Link to="/articles" className="infographicsdetails-navlink2 button-clean button">Articles</Link>
          <Link to="/articles" className="infographicsdetails-navlink3 button-clean button">About</Link>
        </div>
      </header>
      <section className="infographicsdetails-hero">
        <div className="infographicsdetails-heading">
          <h1 className="infographicsdetails-header2">{infographic.title}</h1>
          <p className="infographicsdetails-caption">{infographic.description}</p>
        </div>
        <div className="infographicsdetails-buttons"></div>
        <img src={infographic.image} alt="infographic" className="infographicsdetails-image" />
        <div className="infographicsdetails-container13">
          <div className="infographicsdetails-container14">
            <span className="infographicsdetails-text15">Used BY</span>
            <div className="infographicsdetails-container15">
              <span className="infographicsdetails-text16">Tags</span>
            </div>
          </div>
          <div className="infographicsdetails-container16">
            <div className="infographicsdetails-container17">
              <span className="infographicsdetails-text17">{infographic.usedBy}</span>
            </div>
            <span className="infographicsdetails-text18">{infographic.tags}</span>
          </div>
        </div>
      </section>
      <div>
        <div className="infographicsdetails-container19">
          <Script html={accordionScript}></Script>
        </div>
      </div>
      <Footer3
        link1={
          <Fragment>
            <span className="infographicsdetails-text19">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="infographicsdetails-text20">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="infographicsdetails-text21">FAQs</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="infographicsdetails-text22">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="infographicsdetails-text23">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="infographicsdetails-text24">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer3root-class-name3"
      ></Footer3>
    </div>
  )
}

export default Infographicsdetails
