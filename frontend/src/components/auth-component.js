import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './auth-component.css';
import ReCAPTCHA from 'react-google-recaptcha';

const AuthComponent = ({ onLogin, onRegister, onForgotPassword }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA');
      return;
    }
    if (isLogin) {
      await onLogin(email, password, recaptchaToken);
    } else {
      await onRegister(email, password, otp, profilePicture, recaptchaToken);
    }
  };

  const handleForgotPassword = async () => {
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA');
      return;
    }
    await onForgotPassword(email, otp, recaptchaToken);
  };

  return (
    <div className="auth-component">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="auth-component-field">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="auth-component-field">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {!isLogin && (
          <>
            <div className="auth-component-field">
              <label>OTP:</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <div className="auth-component-field">
              <label>Profile Picture:</label>
              <input
                type="file"
                onChange={(e) => setProfilePicture(e.target.files[0])}
                required
              />
            </div>
          </>
        )}
        <ReCAPTCHA
          sitekey="YOUR_RECAPTCHA_SITE_KEY"
          onChange={(token) => setRecaptchaToken(token)}
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
      {isLogin && (
        <button onClick={handleForgotPassword}>Forgot Password</button>
      )}
    </div>
  );
};

AuthComponent.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired,
};

export default AuthComponent;