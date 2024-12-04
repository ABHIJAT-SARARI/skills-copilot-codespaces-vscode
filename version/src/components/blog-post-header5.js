import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './blog-post-header5.css'

const BlogPostHeader5 = (props) => {
  return (
    <div className="blog-post-header5-blog-post-header3 thq-section-padding">
      <div className="blog-post-header5-max-width thq-section-max-width">
        <div className="blog-post-header5-section-title">
          <div className="blog-post-header5-title1">
            <div className="blog-post-header5-breadcrumbs"></div>
            <div className="blog-post-header5-content1">
              <h1 className="blog-post-header5-title2 thq-heading-1">
                {props.blogPostTitle ?? (
                  <Fragment>
                    <span className="blog-post-header5-text5">
                      Unlocking the Potential of AI: Latest Breakthroughs and
                      Insights
                    </span>
                  </Fragment>
                )}
              </h1>
              <div className="blog-post-header5-content2">
                <div className="blog-post-header5-author">
                  <span className="blog-post-header5-text1 thq-body-small">
                    Written by
                  </span>
                  <span className="blog-post-header5-text2 thq-body-small">
                    {props.avatarName ?? (
                      <Fragment>
                        <span className="blog-post-header5-text4">
                          AI Enthusiast
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="blog-post-header5-time">
                  <span className="thq-body-small">
                    {props.date ?? (
                      <Fragment>
                        <span className="blog-post-header5-text3">
                          September 15, 2021
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-post-header5-container">
          <img
            alt={props.blogPostImageAlt}
            src={props.blogPostImageSrc}
            className="blog-post-header5-image1 thq-img-ratio-4-3"
          />
        </div>
      </div>
    </div>
  )
}

BlogPostHeader5.defaultProps = {
  date: undefined,
  avatarName: undefined,
  blogPostImageAlt: 'Empowering AI and Data Science Enthusiasts',
  blogPostImageSrc:
    'https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzA4NDAzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  blogPostTitle: undefined,
}

BlogPostHeader5.propTypes = {
  date: PropTypes.element,
  avatarName: PropTypes.element,
  blogPostImageAlt: PropTypes.string,
  blogPostImageSrc: PropTypes.string,
  blogPostTitle: PropTypes.element,
}

export default BlogPostHeader5
