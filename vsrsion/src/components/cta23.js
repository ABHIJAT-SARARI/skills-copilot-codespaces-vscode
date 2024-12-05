import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta23.css'

const CTA23 = (props) => {
  return (
    <div className="cta23-container1 thq-section-padding">
      <div className="cta23-max-width thq-section-max-width">
        <div className="cta23-row1">
          <div className="cta23-content">
            <h2 className="cta23-heading1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="cta23-text2">Search Your Infographics</span>
                </Fragment>
              )}
            </h2>
            <p className="cta23-content1 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="cta23-text4">
                    Enter the key word or title and search your infographics.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="cta23-container2">
              <div className="cta23-row2">
                <div className="cta23-container3">
                  <input
                    type="text"
                    placeholder="Keyword or title"
                    required="true"
                    className="cta23-textinput thq-input"
                  />
                </div>
              </div>
              <button type="button" className="cta23-button thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="cta23-text3">Search Infographics</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="cta23-image thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

CTA23.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1584267999776-d14c2efb822d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA1MTcwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  image1Alt: 'AI Research Community',
  action1: undefined,
  content1: undefined,
}

CTA23.propTypes = {
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default CTA23