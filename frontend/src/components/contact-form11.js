import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form11.css'

const ContactForm11 = (props) => {
  return (
    <div className="contact-form11-contact11 thq-section-padding">
      <div className="contact-form11-max-width thq-section-max-width">
        <div className="contact-form11-content">
          <form className="contact-form11-form thq-card">
            <div className="contact-form11-container">
              <div className="contact-form11-input1">
                <label
                  htmlFor="contact-form-11-first-name"
                  className="thq-body-small"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="contact-form-11-first-name"
                  placeholder="First Name"
                  className="thq-input"
                />
              </div>
              <div className="contact-form11-input2">
                <label
                  htmlFor="contact-form-11-last-name"
                  className="thq-body-small"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="contact-form-11-last-name"
                  placeholder="Last Name"
                  className="thq-input"
                />
              </div>
            </div>
            <div className="contact-form11-input3">
              <label htmlFor="contact-form-11-email" className="thq-body-small">
                Email
              </label>
              <input
                type="text"
                id="contact-form-11-email"
                required="true"
                placeholder="Email"
                className="contact-form11-text-input3 thq-input"
              />
            </div>
            <div className="contact-form11-input4">
              <label
                htmlFor="contact-form-11-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-11-message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
            <button type="submit" className="thq-button-filled">
              <span className="thq-body-small">
                {props.submitAction ?? (
                  <Fragment>
                    <span className="contact-form11-text5">
                      Submit your message
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm11.defaultProps = {
  submitAction: undefined,
}

ContactForm11.propTypes = {
  submitAction: PropTypes.element,
}

export default ContactForm11
