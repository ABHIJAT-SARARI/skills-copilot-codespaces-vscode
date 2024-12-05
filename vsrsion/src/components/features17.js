import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features17.css'

const Features17 = (props) => {
  return (
    <div className="features17-layout349 thq-section-padding">
      <div className="features17-max-width thq-section-max-width">
        <div className="features17-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features17-content1">
          <div className="features17-section-title">
            <span className="thq-body-small">
              {props.feature1Slogan ?? (
                <Fragment>
                  <span className="features17-text5">
                    Stay updated with the latest AI trends
                  </span>
                </Fragment>
              )}
            </span>
            <div className="features17-content2">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features17-text4">Our Vision</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features17-text6">
                      To be the go-to hub for AI and data science enthusiasts,
                      fostering innovation and learning through accessible,
                      authentic, and insightful content.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features17.defaultProps = {
  feature1Title: undefined,
  feature1Slogan: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1636690598773-c50645a47aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzEzNDc4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'AI Insights Image',
  feature1Description: undefined,
}

Features17.propTypes = {
  feature1Title: PropTypes.element,
  feature1Slogan: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
}

export default Features17
