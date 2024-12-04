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
      <div className="cta2-max-width thq-section-max-width">
        <div className="cta2-content">
          <div className="cta2-container2">
            <div className="cta2-row thq-flex-column">
              <div className="cta2-container3"></div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="cta2-button thq-button-filled">
        <span>
          {props.action1 ?? (
            <Fragment>
              <span className="cta2-text3">Submit Request</span>
            </Fragment>
          )}
        </span>
      </button>
    </div>
  )
}

CTA2.defaultProps = {
  action1: undefined,
  heading1: undefined,
  text: undefined,
}

CTA2.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  text: PropTypes.element,
}

export default CTA2
