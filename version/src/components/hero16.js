import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero16.css'

const Hero16 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero16-max-width thq-section-max-width">
        <div className="hero16-column thq-section-padding">
          <h1 className="thq-heading-1 hero16-text10">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero16-text16">
                  Empowering AI and Data Science Enthusiasts
                </span>
              </Fragment>
            )}
          </h1>
          <span>
            {props.text3 ?? (
              <Fragment>
                <span className="hero16-text17">
                  Highlighting the best insights and breakthroughs in AI and
                  data science. Stay ahead with our expertly curated content
                  designed to inspire and inform.
                </span>
              </Fragment>
            )}
          </span>
          <div className="hero16-actions">
            <label>
              {props.text ?? (
                <Fragment>
                  <span className="hero16-text19">Data Science</span>
                </Fragment>
              )}
            </label>
            <label>
              {props.text1 ?? (
                <Fragment>
                  <span className="hero16-text15">ML</span>
                </Fragment>
              )}
            </label>
            <label>
              {props.text2 ?? (
                <Fragment>
                  <span className="hero16-text18">Deep Learning</span>
                </Fragment>
              )}
            </label>
          </div>
        </div>
        <div className="hero16-content">
          <div className="hero16-column-container1 thq-mask-image-vertical thq-animated-group-container-vertical">
            <div className="thq-animated-group-vertical">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero16-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero16-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero16-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-vertical">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero16-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero16-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero16-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
          <div className="hero16-column-container2 thq-mask-image-vertical thq-animated-group-container-vertical">
            <div className="thq-animated-group-vertical-reverse">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero16-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero16-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero16-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-vertical-reverse">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero16-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero16-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero16-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero16-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero16.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1635942174796-2e33f5b561bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA0NjE2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1625314876522-a908c4c01167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA0NjE2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  text1: undefined,
  image3Alt: 'AI Research Hubs Platform',
  image3Src:
    'https://images.unsplash.com/photo-1567966181416-70c65337caa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA0NjE2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Inspiring Innovation in AI',
  heading1: undefined,
  image5Src:
    'https://images.unsplash.com/photo-1650884229262-130712cc13c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA0NjE2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1582719201918-f1fa99cc3c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA0NjE2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  text3: undefined,
  image1Alt: 'AI Research Hubs Logo',
  text2: undefined,
  image6Src:
    'https://images.unsplash.com/photo-1655890954753-f9ec41ce58ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA0NjE2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Innovative AI Solutions',
  image5Alt: 'Data Science Insights',
  image4Alt: 'AI and Data Science Professionals',
  text: undefined,
}

Hero16.propTypes = {
  image1Src: PropTypes.string,
  image4Src: PropTypes.string,
  text1: PropTypes.element,
  image3Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image6Alt: PropTypes.string,
  heading1: PropTypes.element,
  image5Src: PropTypes.string,
  image2Src: PropTypes.string,
  text3: PropTypes.element,
  image1Alt: PropTypes.string,
  text2: PropTypes.element,
  image6Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  text: PropTypes.element,
}

export default Hero16
