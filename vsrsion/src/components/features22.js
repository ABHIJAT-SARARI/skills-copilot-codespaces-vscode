import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features22.css'

const Features22 = (props) => {
  return (
    <div className="features22-layout349 thq-section-padding">
      <div className="features22-max-width thq-section-max-width">
        <div className="features22-container1">
          <h2 className="features22-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="features22-text2">Explore Your Topic</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="features22-container2 thq-grid-auto-300">
          <div className="features22-card1 thq-card thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src="/New Folder/a%20simple%20text-based%20logo%20for%20a%20show%20titled%20ai-photoroom-1400w.png"
              className="features22-image1 thq-img-round thq-img-ratio-1-1"
            />
          </div>
          <div className="features22-card2 thq-card thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src="/New Folder/cloud-photoroom-photoroom-1400w.png"
              className="features22-image2 thq-img-round thq-img-ratio-1-1"
            />
          </div>
          <div className="features22-card3 thq-card thq-flex-column">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features22-image3 thq-img-round thq-img-ratio-1-1"
            />
          </div>
          <div className="features22-card4 thq-card thq-flex-column">
            <img
              alt={props.feature4ImageAlt}
              src="/New Folder/ert-1400w.png"
              className="features22-image4 thq-img-round thq-img-ratio-1-1"
            />
          </div>
          <div className="features22-card5 thq-card thq-flex-column">
            <img
              alt={props.feature5ImageAlt}
              src="/New Folder/designer-photoroom%20copy-1400w.png"
              className="features22-image5 thq-img-round thq-img-ratio-1-1"
            />
          </div>
          <div className="features22-card6 thq-card thq-flex-column">
            <img
              alt={props.feature6ImageAlt}
              src="/New Folder/python-photoroom-1400w.png"
              className="features22-image6 thq-img-round thq-img-ratio-1-1"
            />
          </div>
          <div className="features22-card7 thq-card thq-flex-column">
            <img
              alt={props.feature7ImageAlt}
              src="/New Folder/designer-photoroom-1400w.png"
              className="features22-image7 thq-img-round thq-img-ratio-1-1"
            />
          </div>
          <div className="features22-card8 thq-card thq-flex-column">
            <img
              alt={props.feature8ImageAlt}
              src="/New Folder/ml-photoroom-1400w.png"
              className="features22-image8 thq-img-round thq-img-ratio-1-1"
            />
          </div>
          <div className="features22-card9 thq-card thq-flex-column">
            <img
              alt={props.feature8ImageAlt1}
              src="/New Folder/quantum-photoroom-1400w.png"
              className="features22-image9 thq-img-round thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Features22.defaultProps = {
  feature3ImageAlt: 'Cutting-Edge Research Image Alt Text',
  feature2ImageAlt: 'Visually Impactful Infographics Image Alt Text',
  feature7ImageAlt: 'image',
  feature1ImageAlt: 'High-Quality Articles Image Alt Text',
  feature5ImageAlt: 'Accessibility Image Alt Text',
  feature8ImageAlt1: 'image',
  feature8ImageAlt: 'image',
  feature4ImageAlt: 'Practical Knowledge Image Alt Text',
  feature3ImageSrc:
    '/New Folder/data%20s%20background%20removed-photoroom-1400w.png',
  heading1: undefined,
  feature6ImageAlt: 'image',
}

Features22.propTypes = {
  feature3ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature7ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature8ImageAlt1: PropTypes.string,
  feature8ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  heading1: PropTypes.element,
  feature6ImageAlt: PropTypes.string,
}

export default Features22
