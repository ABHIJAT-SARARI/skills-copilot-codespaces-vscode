import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero1.css'

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
                <span>
                  {props.text ?? (
                    <Fragment>
                      <span className="hero1-text21">Name: </span>
                    </Fragment>
                  )}
                </span>
                <span className="hero1-text11">
                  {props.text7 ?? (
                    <Fragment>
                      <span className="hero1-text28">
                         The AI Evolution: Key Milestones Through the Decades.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="hero1-container3">
                <span>
                  {props.text1 ?? (
                    <Fragment>
                      <span className="hero1-text22">Description: </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.text8 ?? (
                    <Fragment>
                      <span className="hero1-text29">
                        Explore how AI has transformed industries over time,
                        from its origins to groundbreaking innovations. 
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="hero1-container4">
                <span>
                  {props.text2 ?? (
                    <Fragment>
                      <span className="hero1-text23">Used In: </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.text9 ?? (
                    <Fragment>
                      <span className="hero1-text30">
                        Poster At BBAU, Medium Story.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="hero1-container5">
                <span>
                  {props.text3 ?? (
                    <Fragment>
                      <span className="hero1-text24">Labels:</span>
                    </Fragment>
                  )}
                </span>
                <label>
                  {props.text4 ?? (
                    <Fragment>
                      <span className="hero1-text25">Evolution </span>
                    </Fragment>
                  )}
                </label>
                <label>
                  {props.text5 ?? (
                    <Fragment>
                      <span className="hero1-text26">
                        Artificial Intelligence 
                      </span>
                    </Fragment>
                  )}
                </label>
                <label>
                  {props.text6 ?? (
                    <Fragment>
                      <span className="hero1-text27">Decades</span>
                    </Fragment>
                  )}
                </label>
              </div>
            </div>
            <div className="hero1-actions"></div>
          </div>
          <div className="hero1-container6">
            <img
              alt={props.image1Alt}
              src="/New Folder/fg-1400w.jpg"
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
  heading1: undefined,
  text: undefined,
  text1: undefined,
  text2: undefined,
  text3: undefined,
  text4: undefined,
  text5: undefined,
  text6: undefined,
  text7: undefined,
  text8: undefined,
  text9: undefined,
}

Hero1.propTypes = {
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
  text: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  text3: PropTypes.element,
  text4: PropTypes.element,
  text5: PropTypes.element,
  text6: PropTypes.element,
  text7: PropTypes.element,
  text8: PropTypes.element,
  text9: PropTypes.element,
}

export default Hero1
