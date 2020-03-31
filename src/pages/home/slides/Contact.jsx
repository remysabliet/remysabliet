import React, { Fragment } from 'react'

// import {video} from "./video.mp4"
import video from 'assets/video/codingBackgroundMovie.mp4'
import linkedinLogo from 'assets/ico/linkedin.png'
import wantedlyWhite from 'assets/ico/wantedlyWhite.png'

const Contact = () => (
  <div className="rs-content rs-js-animated-element">
    <video
      className="rs-movie-back"
      autoplay="autoplay" //autoplay only is not supported, but autoplay + muted is supported by chrome
      muted
      loop
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div className="rs-content-overlay">
      <div className="rs-blank" />
      {/* <div className="rs-profil-image"/> */}
      <div className="rs-social-shadow-overlay" />
      <div className="rs-social">
        <div className="rs-social-panel">
          <h1>Get in touch</h1>
          <div className="rs-logo">
            <a href="https://www.linkedin.com/in/r%C3%A9my-sabliet-2575b567/" target="_blank">
              <img src={linkedinLogo} />
            </a>
            <a href="" target="_blank">
              <img src={wantedlyWhite} />
            </a>
          </div>
          <p>東京新宿区 - 169-0074</p>
          <p> sabliet@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
)
export default Contact
