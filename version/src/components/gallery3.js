import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery3.css'

const Gallery3 = (props) => {
  return (
    <div className="gallery3-gallery3 thq-section-padding">
      <div className="gallery3-max-width thq-section-max-width">
        <div className="gallery3-section-title">
          <h2 className="gallery3-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery3-text3">Explore Our Infographics</span>
              </Fragment>
            )}
          </h2>
          <span className="gallery3-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery3-text4">
                  Discover visually engaging infographics that simplify complex
                  AI and data science concepts for easy understanding.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery3-container1 thq-grid-4">
          <div className="gallery3-container2">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery3-image1 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container3">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery3-image2 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container4">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery3-image3 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container5">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="gallery3-image4 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container6">
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="gallery3-image5 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container7">
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="gallery3-image6 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container8">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="gallery3-image7 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container9">
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="gallery3-image8 thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery3.defaultProps = {
  image5Alt: 'AI Research Hubs Workshops',
  image3Src:
    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA1MTg3NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1553831755-2a0a5370efe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA1MTg3NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'AI Research Hubs Community',
  image1Alt: 'AI Research Hubs Infographic',
  image7Src:
    'https://images.unsplash.com/photo-1561990488-a470d32e776d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA1MTg3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  image4Alt: 'AI Research Hubs Articles',
  image5Src:
    'https://images.unsplash.com/photo-1710438597462-32b8fabf8dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA1MTg3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  image7Alt: 'AI Research Hubs Resources',
  image2Src:
    'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA1MTg3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1650884230497-d3459c67f14c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA1MTg3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1712002641088-1191ef635cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA1MTg3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'AI Research Hubs Team',
  image6Src:
    'https://images.unsplash.com/photo-1561265912-ec91f904ab58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA1MTg3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'AI Research Hubs Events',
  image8Alt: 'AI Research Hubs Projects',
}

Gallery3.propTypes = {
  image5Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image1Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  heading1: PropTypes.element,
  image4Alt: PropTypes.string,
  image5Src: PropTypes.string,
  content1: PropTypes.element,
  image7Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image8Src: PropTypes.string,
  image4Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image8Alt: PropTypes.string,
}

export default Gallery3
