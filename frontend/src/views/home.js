import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Modal from 'react-modal'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import logo from '../assets/without_bg.png'
import Hero17 from '../components/hero17'
import Steps2 from '../components/steps2'
import Footer3 from '../components/footer3'
import AuthComponent from '../components/auth-component' // Import AuthComponent
import './home.css'

const Home = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set to false initially
  const [showModal, setShowModal] = useState(false);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null); // Add state for profile picture URL
  const [role, setRole] = useState('reader'); // Default role to 'reader'
  const username = "John Doe"; // Placeholder for actual username

  const handleLogin = async (email, password, recaptchaToken) => {
    try {
      console.log('Logging in with email:', email);
      const response = await axios.post('https://symmetrical-broccoli-q7qx56gj67rg3x5g5-5000.app.github.dev/api/auth/login', { email, password, recaptchaToken });
      setIsLoggedIn(true);
      setProfilePictureUrl(response.data.profilePictureUrl);
      setRole(response.data.role);
      setShowModal(false);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRegister = async (formData, recaptchaToken) => {
    try {
      console.log('Sending registration data to server:', formData);
      const response = await axios.post('https://symmetrical-broccoli-q7qx56gj67rg3x5g5-5000.app.github.dev/api/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Registration response:', response.data);
      setIsLoggedIn(true);
      setProfilePictureUrl(response.data.profilePictureUrl);
      setRole(response.data.role);
      setShowModal(false);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleForgotPassword = async (email, otp, recaptchaToken) => {
    try {
      console.log('Sending forgot password request for email:', email);
      await axios.post('https://symmetrical-broccoli-q7qx56gj67rg3x5g5-5000.app.github.dev/api/forgot-password', { email, otp, recaptchaToken });
      alert('Password reset instructions sent to your email.');
    } catch (error) {
      console.error('Forgot password failed:', error);
    }
  };

  useEffect(() => {
    const burgerMenu = document.querySelector('.home-burger-menu button');
    const mobileMenu = document.querySelector('.home-mobile-menu');
    const closeMenu = document.querySelector('.home-menu-close');
    const mobileLinks = document.querySelectorAll('.home-nav3 a');

    const toggleMobileMenu = () => {
      mobileMenu.style.transform = mobileMenu.style.transform === 'translateX(0%)' ? 'translateX(100%)' : 'translateX(0%)';
    };

    burgerMenu.addEventListener('click', toggleMobileMenu);
    closeMenu.addEventListener('click', toggleMobileMenu);
    mobileLinks.forEach(link => link.addEventListener('click', toggleMobileMenu));

    return () => {
      burgerMenu.removeEventListener('click', toggleMobileMenu);
      closeMenu.removeEventListener('click', toggleMobileMenu);
      mobileLinks.forEach(link => link.removeEventListener('click', toggleMobileMenu));
    };
  }, []);

  return (
    <div className="home-container1">
      <Helmet>
        <title>AI Research Hubs</title>
        <meta property="og:title" content="AI Research Hubs" />
      </Helmet>
      <header className="home-header1">
        <header data-thq="thq-navbar" className="home-navbar">
        <img src={logo} alt="Logo" className="navbar-logo" />
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav1"
            >
              <Link
                to="/articles"
                className="home-navlink1 button-clean button"
              >
                Articles
              </Link>
              <Link
                to="/infographics"
                className="home-navlink2 button-clean button"
              >
                Infographics
              </Link>
              <Link
                to="/about"
                className="home-navlink3 button-clean button"
              >
                About
              </Link>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <div className="home-socials"></div>
            {isLoggedIn ? (
              <div className="profile">
                <img src={profilePictureUrl || "/path/to/profile-icon.png"} alt="Profile" className="profile-icon" />
                <span>{username}</span>
              </div>
            ) : (
              <button className="home-view1 button" onClick={() => setShowModal(true)}>Register/Login</button>
            )}
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="button home-button">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav2"
            >
              <div className="home-container2">
              <img src={logo} alt="Logo" className="navbar-logo" />
              <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav3"
              >
                <Link to="/articles" className="home-text10">Articles</Link>
                <Link to="/infographics" className="home-text11">Infographics</Link>
                <Link to="/about" className="home-text12">About</Link>
              </nav>
              <div className="home-container3">
                {isLoggedIn ? (
                  <div className="profile">
                    <img src={profilePictureUrl || "/path/to/profile-icon.png"} alt="Profile" className="profile-icon" />
                    <span>{username}</span>
                  </div>
                ) : (
                  <button className="home-login button" onClick={() => setShowModal(true)}>Register/Login</button>
                )}
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </header>
      <section className="home-hero">
        <div className="home-heading1">
          <h1 className="home-header2">Welcome to AI Research Hubs</h1>
          <p className="home-caption">
            Your ultimate destination for unlocking the potential of AI and data
            science—explore, learn, and innovate with us.
          </p>
        </div>
        <div className="home-buttons">
          <button className="button">Explore</button>
        </div>
      </section>
      <section className="home-description1">
        <Hero17></Hero17>
      </section>
      <h1 className="home-text15">What we offer</h1>
      <section className="home-cards">
        <div className="home-row">
          <div className="home-card10">
            <div className="home-main1">
              <div className="home-content1">
                <h2 className="home-header3">
                  <span>In-Depth Articles Gateway to AI Mastery</span>
                  <br></br>
                </h2>
                <p className="home-description2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="home-learn1 button">
                <span className="home-text18">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image10"
                />
              </button>
            </div>
          </div>
          <div className="home-card11">
            <div className="home-main2">
              <div className="home-content2">
                <h2 className="home-header4">
                  <span className="home-text19">
                    Visual Infographics: Knowledge at a Glance
                  </span>
                  <br></br>
                </h2>
                <p className="home-description3">
                  Unlock the power of visual learning with our stunning,
                  data-driven infographics. From &quot;10 Key Steps in Machine
                  Learning&quot; to &quot;AI Trends in 2024,&quot; our
                  infographics condense essential information into eye-catching
                  visuals. Designed to inspire and educate, these graphics are
                  perfect for grasping intricate ideas quickly and efficiently.
                </p>
              </div>
              <button className="home-learn2 button">
                <span className="home-text21">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image11"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="home-collection">
        <div className="home-content3">
          <div className="home-heading2">
            <h2 className="home-header5">All time best Articles</h2>
          </div>
        </div>
        <div className="home-main3">
          <div className="home-card12">
            <div className="home-image12">
              <img
                alt="image"
                src="/Characters/character-1.svg"
                className="home-image13"
              />
            </div>
          </div>
          <div className="home-card13">
            <div className="home-image14">
              <img
                alt="image"
                src="/Characters/character-2.svg"
                className="home-image15"
              />
            </div>
          </div>
          <div className="home-card14">
            <div className="home-image16">
              <img
                alt="image"
                src="/Characters/character-3.svg"
                className="home-image17"
              />
            </div>
          </div>
          <div className="home-card15">
            <div className="home-image18">
              <img
                alt="image"
                src="/Characters/character-4.svg"
                className="home-image19"
              />
            </div>
          </div>
          <div className="home-card16">
            <div className="home-image20">
              <img
                alt="image"
                src="/Characters/character-5.svg"
                className="home-image21"
              />
            </div>
          </div>
          <div className="home-card17">
            <div className="home-image22">
              <img
                alt="image"
                src="/Characters/character-6.svg"
                className="home-image23"
              />
            </div>
          </div>
          <div className="home-card18">
            <div className="home-image24">
              <img
                alt="image"
                src="/Characters/character-7.svg"
                className="home-image25"
              />
            </div>
          </div>
          <div className="home-card19">
            <div className="home-image26">
              <img
                alt="image"
                src="/Characters/character-8.svg"
                className="home-image27"
              />
            </div>
          </div>
        </div>
        <button className="home-view3 button-link button">View all</button>
      </section>
      <section className="home-project">
        <div className="home-understand">
          <div className="home-content4">
            <div className="home-heading3">
              <h2 className="home-header6">Our Vision</h2>
              <p className="home-header7">
                At AI Research Hubs, we aim to bridge the gap between
                cutting-edge artificial intelligence advancements and accessible
                knowledge. Through meticulously crafted articles and visually
                engaging infographics, we strive to empower professionals,
                researchers, and enthusiasts with insights that inspire
                innovation and drive meaningful impact in AI and data science.
              </p>
            </div>
            <button className="home-view4 button-link button">
              <span>Learn More</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home-image28"
              />
            </button>
          </div>
          <img alt="image" src="/group%202415.svg" className="home-image29" />
        </div>
        <div className="home-mining">
          <img alt="image" src="/group%202422.svg" className="home-image30" />
          <div className="home-content5">
            <div className="home-heading4">
              <h2 className="home-header8">
                <span className="home-text23">Who we are</span>
                <br></br>
              </h2>
              <p className="home-header9">
                AI Research Hubs is a dedicated platform for AI and data science
                enthusiasts, professionals, and learners. We specialize in
                crafting high-quality articles and visually impactful
                infographics to simplify complex topics, inspire innovation, and
                foster a deeper understanding of artificial intelligence and
                data-driven technologies. Our mission is to bridge the gap
                between cutting-edge research and practical knowledge, making AI
                accessible and actionable for everyone.
              </p>
            </div>
            <button className="home-view5 button-link button">
              <span>Learn More</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home-image31"
              />
            </button>
          </div>
        </div>
      </section>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text26">Visit Our Write Portal</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text27">On Write Portal</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text28">Submit Your Application</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text29">Showcase Your Work</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text30">
              Navigate to AIResearchHubs.com writer portal. to explore our
              mission and discover opportunities to collaborate.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text31">
              Locate the &quot;Write Portal&quot; section, where you’ll find all
              the information about contributing to our platform.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text32">
              <span>
                Fill out a simple form describing your background, expertise,
                and areas of interest. This helps us understand how your skills
                align with our mission.
              </span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text36">
              Attach sample articles, infographics, or research that demonstrate
              your understanding of AI or data science. If you’re new, share
              your ideas or vision.
            </span>
          </Fragment>
        }
      ></Steps2>
      <div>
        <div className="home-container5">
          <Script src="/path/to/accordionScript.js"></Script>
        </div>
      </div>
      <Footer3
        link1={
          <Fragment>
            <span className="home-text37">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text38">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text39">FAQs</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text40">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text41">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text42">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer3root-class-name"
      ></Footer3>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <AuthComponent
          onLogin={handleLogin}
          onRegister={handleRegister}
          onForgotPassword={handleForgotPassword}
        />
      </Modal>
      </div>
  )
}
export default Home
