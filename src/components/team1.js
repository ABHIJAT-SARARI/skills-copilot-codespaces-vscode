import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team1.css'

const Team1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team1-max-width thq-section-max-width">
        <div className="team1-section-title">
          <span className="thq-body-small team1-text10">
            {props.content1 ?? (
              <Fragment>
                <span className="team1-text25">Join Our Team Today!</span>
              </Fragment>
            )}
          </span>
          <div className="team1-content1">
            <h2 className="thq-heading-2 team1-text11">
              {props.heading1 ?? (
                <Fragment>
                  <span className="team1-text27">Meet Our Team</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="team1-card1">
          <img
            alt={props.member2Alt}
            src={props.member2Src}
            className="team1-placeholder-image1 thq-img-round thq-img-ratio-1-1"
          />
          <div className="team1-content2">
            <div className="team1-title1">
              <span className="team1-text12 thq-body-small">
                {props.member2 ?? (
                  <Fragment>
                    <span className="team1-text28">Jane Smith</span>
                  </Fragment>
                )}
              </span>
              <span className="team1-text13 thq-body-small">
                {props.member2Job ?? (
                  <Fragment>
                    <span className="team1-text26">Data Scientist</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="team1-social-icons1">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="team1-icon1 thq-icon-small"
            >
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="team1-icon3 thq-icon-small"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </div>
        </div>
        <div className="team1-card2">
          <img
            alt={props.member1Alt}
            src={props.member1Src}
            className="team1-placeholder-image2 thq-img-round thq-img-ratio-1-1"
          />
          <div className="team1-content3">
            <div className="team1-title2">
              <span className="team1-text14 thq-body-small">
                {props.member1 ?? (
                  <Fragment>
                    <span className="team1-text19">John Doe</span>
                  </Fragment>
                )}
              </span>
              <span className="team1-text15 thq-body-small">
                {props.member1Job ?? (
                  <Fragment>
                    <span className="team1-text29">AI Researcher</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="team1-social-icons2">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="team1-icon5 thq-icon-small"
            >
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="team1-icon7 thq-icon-small"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </div>
        </div>
        <div className="team1-content4">
          <div className="team1-content5">
            <div className="team1-content6">
              <h2 className="thq-heading-2 team1-text16">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="team1-text30">We’re hiring!</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small team1-text17">
                {props.content3 ?? (
                  <Fragment>
                    <span className="team1-text20">
                      <span className="team1-text21">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <button className="team1-button thq-button-filled">
              <span className="thq-body-small">
                {props.actionContent ?? (
                  <Fragment>
                    <span className="team1-text24">Open positions</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Team1.defaultProps = {
  member1: undefined,
  member2Alt: 'Image of Jane Smith',
  content3: undefined,
  actionContent: undefined,
  member1Alt: 'Image of John Doe',
  content1: undefined,
  member2Job: undefined,
  heading1: undefined,
  member2: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1636041282523-1add6c493ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzEzMTIzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  member1Src:
    'https://images.unsplash.com/photo-1504810370725-2585de12e6ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzEzMTIzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  member1Job: undefined,
  heading2: undefined,
}

Team1.propTypes = {
  member1: PropTypes.element,
  member2Alt: PropTypes.string,
  content3: PropTypes.element,
  actionContent: PropTypes.element,
  member1Alt: PropTypes.string,
  content1: PropTypes.element,
  member2Job: PropTypes.element,
  heading1: PropTypes.element,
  member2: PropTypes.element,
  member2Src: PropTypes.string,
  member1Src: PropTypes.string,
  member1Job: PropTypes.element,
  heading2: PropTypes.element,
}

export default Team1
