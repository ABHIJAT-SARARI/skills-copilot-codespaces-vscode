import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './auth-component.css';
import ReCAPTCHA from 'react-google-recaptcha';

const AuthComponent = ({ onLogin, onRegister, onForgotPassword }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA');
      return;
    }
    if (isLogin) {
      console.log('Logging in with email:', email);
      await onLogin(email, password, recaptchaToken);
    } else {
      // Register user
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('password', password);
      if (profilePicture) {
        formData.append('profilePicture', profilePicture);
      }
      console.log('Registering user with data:', formData);
      try {
        await onRegister(formData, recaptchaToken);
      } catch (error) {
        console.error('Registration error:', error);
      }
    }
  };

  const handleForgotPassword = async () => {
    console.log('Forgot password clicked');
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA');
      return;
    }
    await onForgotPassword(email, recaptchaToken);
  };

  return (
    <div className="auth-component">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <div className="auth-component-field">
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="auth-component-field">
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </>
        )}
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
          <div className="auth-component-field">
            <label>Profile Picture (optional):</label>
            <input
              type="file"
              onChange={(e) => setProfilePicture(e.target.files[0])}
            />
          </div>
        )}
        <ReCAPTCHA
          sitekey="6LeCdZYqAAAAAAEKKSidDjNY6Apxa8op8kcOrdOL"
          onChange={(token) => setRecaptchaToken(token)}
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={() => {
        console.log('Switching to', isLogin ? 'Register' : 'Login');
        setIsLogin(!isLogin);
      }}>
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