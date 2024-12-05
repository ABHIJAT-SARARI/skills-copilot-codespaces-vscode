import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="steps2-text10 thq-heading-2">
              <span>Be Part of the AI Revolution</span>
              <br></br>
            </h2>
            <p className="steps2-text13 thq-body-large">
              At AI Research Hubs, we welcome professionals, researchers, and
              enthusiasts passionate about AI and data science. Contribute your
              expertise, ideas, or creativity to shape the future of AI
              knowledge sharing.
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">
                  <span>Write Portal</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text30">
                      Visit Our Write Portal
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text18 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text31">
                      Navigate to AIResearchHubs.com writer portal. to explore
                      our mission and discover opportunities to collaborate.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text19 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text34">On Write Portal</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text21 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text33">
                      Locate the &quot;Write Portal&quot; section, where you’ll
                      find all the information about contributing to our
                      platform.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text22 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text32">
                      Submit Your Application
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text24 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text36">
                      <span>
                        Fill out a simple form describing your background,
                        expertise, and areas of interest. This helps us
                        understand how your skills align with our mission.
                      </span>
                      <br></br>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text25 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text29">Showcase Your Work</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text27 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text35">
                      Attach sample articles, infographics, or research that
                      demonstrate your understanding of AI or data science. If
                      you’re new, share your ideas or vision.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text28 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step4Title: undefined,
  step1Title: undefined,
  step1Description: undefined,
  step3Title: undefined,
  step2Description: undefined,
  step2Title: undefined,
  step4Description: undefined,
  step3Description: undefined,
}

Steps2.propTypes = {
  step4Title: PropTypes.element,
  step1Title: PropTypes.element,
  step1Description: PropTypes.element,
  step3Title: PropTypes.element,
  step2Description: PropTypes.element,
  step2Title: PropTypes.element,
  step4Description: PropTypes.element,
  step3Description: PropTypes.element,
}

export default Steps2
