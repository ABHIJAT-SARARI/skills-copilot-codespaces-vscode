import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './hero1.css'
import defaultImage from '../assets/fg.jpg'

const Hero1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero1-max-width thq-section-max-width">
        <div className="thq-flex-row hero1-container1">
          <div className="hero1-column">
            <div className="hero1-content">
              <h1 className="thq-heading-1 hero1-heading1">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="hero1-text20">Latest Creation</span>
                  </Fragment>
                )}
              </h1>
              <div className="hero1-container2">
                <span>Name: {props.name ?? "Placeholder Name"}</span>
              </div>
              <div className="hero1-container3">
                <span>Description: {props.description ?? "Placeholder Description"}</span>
              </div>
              <div className="hero1-container4">
                <span>Used In: {props.usedIn ?? "Placeholder Usage"}</span>
              </div>
              <div className="hero1-container5">
                <span>Labels:</span>
                {props.labels?.map((label, index) => (
                  <label key={index} className={`hero1-label hero1-label${index + 1}`}>{label}</label>
                )) ?? (
                  <>
                    <label className="hero1-label hero1-label1">Placeholder Label 1</label>
                    <label className="hero1-label hero1-label2">Placeholder Label 2</label>
                    <label className="hero1-label hero1-label3">Placeholder Label 3</label>
                  </>
                )}
              </div>
            </div>
            <div className="hero1-actions"></div>
          </div>
          <div className="hero1-container6">
            <img
              alt={props.image1Alt}
              src={props.image1Src || defaultImage}
              className="hero1-image1 thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero1.defaultProps = {
  image1Alt: 'PlaceholderImage1314',
  image1Src: defaultImage,
  heading1: undefined,
  name: undefined,
  description: undefined,
  usedIn: undefined,
  labels: undefined,
}

Hero1.propTypes = {
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  name: PropTypes.string,
  description: PropTypes.string,
  usedIn: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string),
}

export default Hero1
