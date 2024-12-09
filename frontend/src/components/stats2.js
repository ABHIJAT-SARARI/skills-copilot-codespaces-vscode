import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container1 thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container3 thq-flex-column">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text21">
                  Stay updated with the latest trends and advancements in AI and
                  Data Science.
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats2-text25">Statistics</span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="stats2-text26">
                  Join our community to connect with like-minded individuals and
                  expand your knowledge.
                </span>
              </Fragment>
            )}
          </p>
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats2-text27">100+</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text28">
                      Curated articles on Data Science, Deep Learning, and
                      Artificial Intelligence
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container6">
              <h2 className="stats2-text15 thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats2-text22">50+</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text29">
                      In-depth tutorials and guides for AI and Data Science
                      enthusiasts
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats2-text23">2000+</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text30">
                      Community members actively engaged in discussions and
                      knowledge sharing
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container9">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats2-text31">10+</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text24">
                      Expert interviews and insights from industry professionals
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  content1: undefined,
  stat2: undefined,
  stat3: undefined,
  stat4Description: undefined,
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1611273005460-7c1866aac894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzEzMTIyOHw&ixlib=rb-4.0.3&q=80&w=1080',
  content2: undefined,
  stat1: undefined,
  stat1Description: undefined,
  stat2Description: undefined,
  stat3Description: undefined,
  stat4: undefined,
  image1Alt: 'Statistics Image',
}

Stats2.propTypes = {
  content1: PropTypes.element,
  stat2: PropTypes.element,
  stat3: PropTypes.element,
  stat4Description: PropTypes.element,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
  content2: PropTypes.element,
  stat1: PropTypes.element,
  stat1Description: PropTypes.element,
  stat2Description: PropTypes.element,
  stat3Description: PropTypes.element,
  stat4: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default Stats2
