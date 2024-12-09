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
  feature3Title: (
    <Fragment>
      <span className="features4-text2">Placeholder Title 3</span>
    </Fragment>
  ),
  feature2ImageAlt: 'Placeholder Image 2',
  feature1ImageSrc: 'https://via.placeholder.com/600x400',
  feature1ImageAlt: 'Placeholder Image 1',
  feature1Title: (
    <Fragment>
      <span className="features4-text3">Placeholder Title 1</span>
    </Fragment>
  ),
  sectionTitle: (
    <Fragment>
      <span className="features4-text4">Featured Infographic (at the top)</span>
    </Fragment>
  ),
  feature2ImageSrc: 'https://via.placeholder.com/600x400',
  feature3ImageAlt: 'Placeholder Image 3',
  feature2Description: (
    <Fragment>
      <span className="features4-text5">Placeholder Description 2</span>
    </Fragment>
  ),
  feature2Title: (
    <Fragment>
      <span className="features4-text6">Placeholder Title 2</span>
    </Fragment>
  ),
  feature1Description: (
    <Fragment>
      <span className="features4-text7">Placeholder Description 1</span>
    </Fragment>
  ),
  feature3Description: (
    <Fragment>
      <span className="features4-text8">Placeholder Description 3</span>
    </Fragment>
  ),
  feature3ImageSrc: 'https://via.placeholder.com/600x400',
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
