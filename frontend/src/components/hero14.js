import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero14.css'

const Hero14 = (props) => {
  return (
    <div className="hero14-container thq-section-padding">
      <div className="hero14-max-width thq-section-max-width">
        <div className="hero14-column">
          <div className="hero14-content">
            <h1 className="hero14-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero14-text4">Who We Are</span>
                </Fragment>
              )}
            </h1>
            <p className="hero14-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero14-text3">
                    We are a team of AI enthusiasts, researchers, and educators
                    dedicated to making the complex world of artificial
                    intelligence and data science understandable and inspiring.
                    Through engaging articles and visually rich infographics, we
                    aim to bridge the gap between cutting-edge research and
                    practical applications.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero14-actions"></div>
          </div>
        </div>
        <video
          src={props.video1Src}
          loop="true"
          muted="true"
          poster={props.video1Poster}
          autoPlay="true"
          className="hero14-video thq-img-ratio-4-3"
        ></video>
      </div>
    </div>
  )
}

Hero14.defaultProps = {
  content1: undefined,
  video1Poster:
    'https://images.pexels.com/videos/9783697/pictures/preview-0.jpeg',
  heading1: undefined,
  video1Src:
    'https://videos.pexels.com/video-files/9783697/9783697-hd_1366_720_25fps.mp4',
}

Hero14.propTypes = {
  content1: PropTypes.element,
  video1Poster: PropTypes.string,
  heading1: PropTypes.element,
  video1Src: PropTypes.string,
}

export default Hero14
