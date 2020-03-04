import React, { Fragment } from 'react'

// import {video} from "./video.mp4"
import video from 'assets/video/codingBackgroundMovie.mp4'

const Contact = () => (
  <div className="rs-content rs-js-animated-element">
      <video
        className="rs-movie-back"
        autoplay="autoplay" //autoplay only is not supported, but autoplay + muted is supported by chrome
        muted
        loop
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video
        tag.
      </video>

    <div className="rs-content-overlay">
      <div className="rs-blank"></div>
      <div className="rs-profil-image"></div>
      <div className="rs-social"></div>
    </div>
  </div>
)
export default Contact
