import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import logo from '../assets/without_bg.png';
import Footer3 from '../components/footer3';
import './payment-details.css';

const PaymentDetails = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profilePictureUrl, setProfilePictureUrl] = useState(null);
    const [username, setUsername] = useState("John Doe"); // Placeholder for actual username
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        // Fetch payment details if logged in
        if (isLoggedIn) {
            axios.get('/api/payments')
                .then(response => setPayments(response.data))
                .catch(error => console.error('Error fetching payment details:', error));
        }
    }, [isLoggedIn]);

    return (
        <div className="payment-details-container">
            <Helmet>
                <title>Payment Details</title>
                <meta property="og:title" content="Payment Details" />
            </Helmet>
            <header className="payment-details-header">
                <header data-thq="thq-navbar" className="payment-details-navbar">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                    <div data-thq="thq-navbar-nav" data-role="Nav" className="payment-details-desktop-menu">
                        <nav data-thq="thq-navbar-nav-links" data-role="Nav" className="payment-details-nav">
                            <Link to="/articles" className="payment-details-navlink button-clean button">Articles</Link>
                            <Link to="/infographics" className="payment-details-navlink button-clean button">Infographics</Link>
                            <Link to="/about" className="payment-details-navlink button-clean button">About</Link>
                        </nav>
                    </div>
                    <div data-thq="thq-navbar-btn-group" className="payment-details-btn-group">
                        <div className="payment-details-socials"></div>
                        {isLoggedIn ? (
                            <div className="profile">
                                <img src={profilePictureUrl || "/path/to/profile-icon.png"} alt="Profile" className="profile-icon" />
                                <span>{username}</span>
                            </div>
                        ) : (
                            <button className="payment-details-view button">Register/Login</button>
                        )}
                    </div>
                </header>
            </header>
            <section className="payment-details-content">
                <h1>Payment Details</h1>
                {isLoggedIn ? (
                    <div className="payment-list">
                        {payments.map(payment => (
                            <div key={payment.id} className="payment-item">
                                <p>Amount: {payment.amount}</p>
                                <p>Date: {payment.date}</p>
                                <p>Status: {payment.status}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Please log in to view your payment details.</p>
                )}
            </section>
            <Footer3
                link1={<span>About Us</span>}
                link2={<span>Contact Us</span>}
                link4={<span>FAQs</span>}
                termsLink={<span>Terms of Service</span>}
                cookiesLink={<span>Cookies Policy</span>}
                privacyLink={<span>Privacy Policy</span>}
                rootClassName="footer3root-class-name"
            />
        </div>
    );
};

export default PaymentDetails;
