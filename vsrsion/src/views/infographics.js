import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Hero1 from '../components/hero1'
import CTA23 from '../components/cta23'
import Features4 from '../components/features4'
import CTA2 from '../components/cta2'
import Footer3 from '../components/footer3'
import './infographics.css'
import logo from '../assets/without_bg.png'


const Infographics = (props) => {
  return (
    <div className="infographics-container1">
      <Helmet>
        <title>Infographics - AI Research Hubs</title>
        <meta
          property="og:title"
          content="Infographics - AI Research Hubs"
        />
      </Helmet>
      <header className="home-header1">
        <header data-thq="thq-navbar" className="home-navbar">
        <img src={logo} alt="Logo" className="navbar-logo" />
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="infographics-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="infographics-nav1"
            ></nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="infographics-btn-group"
          >
            <div className="infographics-socials"></div>
          </div>
          <div data-thq="thq-burger-menu" className="infographics-burger-menu">
            <button className="button infographics-button">
              <svg viewBox="0 0 1024 1024" className="infographics-icon10">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="infographics-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="infographics-nav2"
            >
              <div className="infographics-container2">
              <img src={logo} alt="Logo" className="navbar-logo" />
              <div
                  data-thq="thq-close-menu"
                  className="infographics-menu-close"
                >
                  <svg viewBox="0 0 1024 1024" className="infographics-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="infographics-nav3"
              >
                <span className="infographics-text10">About</span>
                <span className="infographics-text11">Team</span>
              
              </nav>
              <div className="infographics-container3">
                <button className="infographics-login button">Register/Login</button>
              </div>
            </div>
            <div className="infographics-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="infographics-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="infographics-icon16"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="infographics-icon18"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          <Link to="/" className="infographics-navlink1 button-clean button">
            Home
          </Link>
          <Link
            to="/articles"
            className="infographics-navlink2 button-clean button"
          >
            Articles
          </Link>
          <Link to="/" className="infographics-navlink3 button-clean button">
            About
          </Link>
        </header>
      </header>
      <section className="infographics-hero">
        <div className="infographics-heading">
          <h1 className="infographics-header2">
            Infographics: Visualizing Knowledge
          </h1>
          <p className="infographics-caption">
            Grasp complex concepts with our engaging and easy-to-understand
            infographics, designed to make AI and data science accessible to
            everyone.
          </p>
        </div>
        <div className="infographics-buttons"></div>
      </section>
      <Hero1
        heading1={
          <Fragment>
            <span className="infographics-text15">Latest Creation</span>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="infographics-text16">Name: </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="infographics-text17">Description: </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="infographics-text18">Used In: </span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="infographics-text19">Labels:</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="infographics-text20">Evolution </span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="infographics-text21">
              Artificial Intelligence 
            </span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="infographics-text22">Decades</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="infographics-text23">
               The AI Evolution: Key Milestones Through the Decades.
            </span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="infographics-text24">
              Explore how AI has transformed industries over time, from its
              origins to groundbreaking innovations. 
            </span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="infographics-text25">
              Poster At BBAU, Medium Story.
            </span>
          </Fragment>
        }
      ></Hero1>
      <CTA23
        heading1={
          <Fragment>
            <span className="infographics-text26">
              Search Your Infographics
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="infographics-text27">Search Infographics</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="infographics-text28">
              Enter the key word or title and search your infographics.
            </span>
          </Fragment>
        }
      ></CTA23>
      <Features4
        feature3Title={
          <Fragment>
            <span className="infographics-text29">Expert Contributors</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="infographics-text30">High-Quality Articles</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="infographics-text31">
              Featured Infographic (at the top)
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="infographics-text32">
              Explore visually engaging infographics that simplify complex AI
              concepts.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="infographics-text33">
              Visually Impactful Infographics
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="infographics-text34">
              Access well-researched and informative articles on AI and data
              science topics.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="infographics-text35">
              Learn from professionals, researchers, and enthusiasts who share
              their expertise.
            </span>
          </Fragment>
        }
      ></Features4>
      <CTA2
        action1={
          <Fragment>
            <span className="infographics-text36">Submit Request</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="infographics-text37">Request Infographics</span>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="infographics-text38">
              To Request new infographics, you should log in first.
            </span>
          </Fragment>
        }
      ></CTA2>
      <div>
        <div className="infographics-container5">
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
            <span className="infographics-text39">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="infographics-text40">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="infographics-text41">FAQs</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="infographics-text42">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="infographics-text43">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="infographics-text44">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer3root-class-name2"
      ></Footer3>
    </div>
  )
}

export default Infographics