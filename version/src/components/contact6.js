import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact6.css'

const Contact6 = (props) => {
  return (
    <div className="contact6-container thq-section-padding">
      <div className="contact6-max-width thq-section-max-width">
        <div className="contact6-content1 thq-flex-row">
          <div className="contact6-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact6-text18">Get in Touch</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact6-text20">
                    Have questions or feedback? Reach out to us using the
                    contact information provided.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="contact6-content3">
            <div className="contact6-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact6-contact-info1">
                <h3 className="contact6-text12 thq-heading-3">Email</h3>
                <span className="thq-body-small">
                  {props.email1 ?? (
                    <Fragment>
                      <span className="contact6-text17">
                        contact@aiinsights.com
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact6-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact6-contact-info2">
                <h3 className="contact6-text13 thq-heading-3">Phone</h3>
                <span className="thq-body-small">
                  {props.phone1 ?? (
                    <Fragment>
                      <span className="contact6-text19">+1-123-456-7890</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact6-content6">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact6-contact-info3">
                <h3 className="contact6-text15 thq-heading-3">Office</h3>
                <span className="thq-body-small">
                  {props.address1 ?? (
                    <Fragment>
                      <span className="contact6-text16">
                        123 AI Street, Data City
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact6-content7 thq-flex-row">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Contact6.defaultProps = {
  address1: undefined,
  email1: undefined,
  imageAlt: 'Contact Image',
  imageSrc:
    'https://images.unsplash.com/photo-1717501217910-8f7e911ff0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzEzNTUxNnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  phone1: undefined,
  content1: undefined,
}

Contact6.propTypes = {
  address1: PropTypes.element,
  email1: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  heading1: PropTypes.element,
  phone1: PropTypes.element,
  content1: PropTypes.element,
}

export default Contact6
