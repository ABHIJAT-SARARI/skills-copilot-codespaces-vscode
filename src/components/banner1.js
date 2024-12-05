import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div className="banner1-container1 thq-section-padding">
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container2">
          <h2 className="banner1-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner1-text3">
                  Empowering AI and Data Science Enthusiasts
                </span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner1-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner1-text2">
                  Stay updated with the latest insights and breakthroughs in AI,
                  data science, and machine learning.
                </span>
              </Fragment>
            )}
          </h3>
        </div>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  content1: undefined,
  heading1: undefined,
}

Banner1.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Banner1
