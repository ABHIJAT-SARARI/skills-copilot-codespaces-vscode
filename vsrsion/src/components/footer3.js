import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/without_bg.png';
import { Link } from 'react-router-dom'; // Import React Router Link for routing
import './footer3.css';

const SocialIcon = ({ iconPath, altText, link }) => (
  <a href={link} target="_blank" rel="noreferrer noopener" className="footer3-social-link">
    <svg alt={altText} viewBox="0 0 877.7142857142857 1024" className="footer3-icon thq-icon-small">
      <path d={iconPath} />
    </svg>
  </a>
);

const Footer3 = (props) => {
  return (
    <footer className={`footer3-footer thq-section-padding ${props.rootClassName}`}>
      <div className="footer3-max-width thq-section-max-width">
        <div className="footer3-content">
          <div className="footer3-logo">
            <img alt={props.logoAlt} src={logo} className="footer3-image" />
          </div>

          <div className="footer3-links">
            <Link to="/about" className="thq-body-small">{props.link1Text ?? 'About Us'}</Link>
            <Link to="/contact" className="thq-body-small">{props.link2Text ?? 'Contact Us'}</Link>
            <Link to="/not-found" className="thq-body-small">{props.link4Text ?? 'FAQs'}</Link>
          </div>

          <div className="footer3-social-links">
            <SocialIcon altText="Facebook" link="https://facebook.com" iconPath="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z" />
            <SocialIcon altText="Instagram" link="https://instagram.com" iconPath="M448 224c-123.5 0-224 100.5-224 224s100.5 224 224 224 224-100.5 224-224-100.5-224-224-224zm0 368c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zm146.5-224c-19.5 0-35.5-16-35.5-35.5s16-35.5 35.5-35.5 35.5 16 35.5 35.5-16 35.5-35.5 35.5zm76.5-48c-1.5-34-9-64.5-24.5-93.5-15.5-29-36.5-50.5-65.5-66-29-15.5-59.5-23-93.5-24.5-37-1.5-147.5-1.5-184.5 0-34 1.5-64.5 9-93.5 24.5-29 15.5-50.5 36.5-66 65.5-15.5 29-23 59.5-24.5 93.5-1.5 37-1.5 147.5 0 184.5 1.5 34 9 64.5 24.5 93.5 15.5 29 36.5 50.5 65.5 66 29 15.5 59.5 23 93.5 24.5 37 1.5 147.5 1.5 184.5 0 34-1.5 64.5-9 93.5-24.5 29-15.5 50.5-36.5 66-65.5 15.5-29 23-59.5 24.5-93.5 1.5-37 1.5-147.5 0-184.5zm-48 224c-1.5 31-8.5 60-19.5 85.5-11 25.5-26.5 41-52 52-25.5 11-54.5 18-85.5 19.5-36.5 1.5-146 1.5-182.5 0-31-1.5-60-8.5-85.5-19.5-25.5-11-41-26.5-52-52-11-25.5-18-54.5-19.5-85.5-1.5-36.5-1.5-146 0-182.5 1.5-31 8.5-60 19.5-85.5 11-25.5 26.5-41 52-52 25.5-11 54.5-18 85.5-19.5 36.5-1.5 146-1.5 182.5 0 31 1.5 60 8.5 85.5 19.5 25.5 11 41 26.5 52 52 11 25.5 18 54.5 19.5 85.5 1.5 36.5 1.5 146 0 182.5z" />
            <SocialIcon altText="Twitter" link="https://twitter.com" iconPath="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z" />
          </div>
        </div>

        <div className="footer3-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer3-row">
            <div className="footer3-footer-links">
              <span className="footer3-content thq-body-small">© 2024 AIResearchhubs</span>
              <span className="thq-body-small">{props.privacyLink ?? <span className="footer3-text">Privacy Policy</span>}</span>
              <span className="thq-body-small">{props.termsLink ?? <span className="footer3-text">Terms of Service</span>}</span>
              <span className="thq-body-small">{props.cookiesLink ?? <span className="footer3-text">Cookies Policy</span>}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer3.defaultProps = {
  logoAlt: 'AI Research Hubs Logo',
  link1Text: 'About Us',
  link2Text: 'Contact Us',
  link4Text: 'FAQs',
  rootClassName: '',
};

Footer3.propTypes = {
  logoAlt: PropTypes.string,
  link1Text: PropTypes.string,
  link2Text: PropTypes.string,
  link4Text: PropTypes.string,
  privacyLink: PropTypes.element,
  termsLink: PropTypes.element,
  cookiesLink: PropTypes.element,
  rootClassName: PropTypes.string,
};

export default Footer3;
