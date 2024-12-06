import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta2.css'

const CTA2 = (props) => {
  return (
    <div className="cta2-container1 thq-section-padding">
      <h2 className="cta2-heading1 thq-heading-2">
        {props.heading1 ?? (
          <Fragment>
            <span className="cta2-text4">Request Infographics</span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text ?? (
          <Fragment>
            <span className="cta2-text5">
              To Request new infographics, you should log in first.
            </span>
          </Fragment>
        )}
      </span>
      {props.isLoggedIn ? (
        <Fragment>
          <input
            type="text"
            placeholder="Enter Title"
            required="true"
            className="cta2-textinput1 thq-input"
          />
          <input
            type="text"
            placeholder="Enter At least 5 Tags related to your Title and description."
            required="true"
            className="cta2-textinput2 thq-input"
          />
          <input
            type="text"
            placeholder="Enter brief description"
            required="true"
            className="cta2-textinput3 thq-input"
          />
          <button type="button" className="cta2-button thq-button-filled" onClick={props.onRequestSubmit}>
            <span>Submit Request</span>
          </button>
        </Fragment>
      ) : (
        <p>Please log in to submit a request.</p>
      )}
    </div>
  )
}

CTA2.defaultProps = {
  action1: undefined,
  heading1: undefined,
  text: undefined,
  onLogin: () => {},
  onPayment: () => {},
  onRequestSubmit: () => {},
  isLoggedIn: false,
  isPaymentDone: false,
}

CTA2.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  text: PropTypes.element,
  onLogin: PropTypes.func,
  onPayment: PropTypes.func,
  onRequestSubmit: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  isPaymentDone: PropTypes.bool,
}

export default CTA2
