import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features4.css'

const Features4 = (props) => {
  return (
    <div className="features4-layout301 thq-section-padding">
      <div className="features4-max-width thq-section-max-width">
        <h2 className="features4-text1 thq-heading-2">
          {props.sectionTitle ?? (
            <Fragment>
              <span className="features4-text4">
                Featured Infographic (at the top)
              </span>
            </Fragment>
          )}
        </h2>
        <div className="features4-row thq-grid-auto-300">
          <div className="features4-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content1 thq-flex-column">
              <div className="features4-section-title1 thq-flex-column">
                <h3 className="features4-title1 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features4-text3">
                        High-Quality Articles
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features4-description1 thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features4-text7">
                        Access well-researched and informative articles on AI
                        and data science topics.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="features4-feature2">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content2 thq-flex-column">
              <div className="features4-section-title2 thq-flex-column">
                <strong className="features4-title2 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features4-text6">
                        Visually Impactful Infographics
                      </span>
                    </Fragment>
                  )}
                </strong>
                <span className="features4-description2 thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features4-text5">
                        Explore visually engaging infographics that simplify
                        complex AI concepts.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="features4-feature3">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content3 thq-flex-column">
              <div className="features4-section-title3 thq-flex-column">
                <strong className="features4-title3 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features4-text2">
                        Expert Contributors
                      </span>
                    </Fragment>
                  )}
                </strong>
                <span className="features4-description3 thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features4-text8">
                        Learn from professionals, researchers, and enthusiasts
                        who share their expertise.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features4.defaultProps = {
  feature3Title: undefined,
  feature2ImageAlt: 'Visually Impactful Infographics Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1724304013246-1abe63567e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA0OTMzNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'High-Quality Articles Image',
  feature1Title: undefined,
  sectionTitle: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1667372283545-1261fb5c427a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA0OTMzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: 'Expert Contributors Image',
  feature2Description: undefined,
  feature2Title: undefined,
  feature1Description: undefined,
  feature3Description: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1553831755-2a0a5370efe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA0OTMzNnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features4.propTypes = {
  feature3Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
}

export default Features4
