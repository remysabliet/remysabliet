import React, { useEffect, Fragment } from 'react'

import video from 'assets/video/codingBackgroundMovie.mp4'
import linkedinLogo from 'assets/ico/linkedin.png'
import wantedlyWhite from 'assets/ico/wantedlyWhite.png'

const Contact = props => {
  const { deviceInfo } = props

  const linkedingURL = 'https://www.linkedin.com/in/r%C3%A9my-sabliet-2575b567/'
  const wantedlyURL = 'https://www.wantedly.com/users/134192425'

  /**
   * As a workaround for touchstart event not being dispatched anymore in order to deactivate IOS Scrolling
   * we must create a specific touchend event for any button/actions element on the page having an interaction with user 
   * the reason we use touchend and not touchstart is that IOS prevent use of new windows from touchstart event, but not from touchen
   *  
   * useEffect allow to execute below logic once element are rendered cf querySelector)
   */
  useEffect(() => {
    if (['android', 'ios'].includes(deviceInfo)) {

      const callBackLInk = (event, url) => {
        event.preventDefault();
        window.open(url, '_blank')
      }

      const linkedinLinkNode = document.querySelector("#linkedin-link")
      if (linkedinLinkNode) {
        linkedinLinkNode.addEventListener("touchend", (event) => callBackLInk(event, linkedingURL), { passive: false });
      }

      const wantedlyLinkNode = document.querySelector("#wantedly-link")
      if (wantedlyLinkNode) {
        wantedlyLinkNode.addEventListener("touchend", (event) => callBackLInk(event, wantedlyURL), { passive: false });
      }
      return () => {
        linkedinLinkNode.removeEventListener("touchend", func, { passive: false });
        wantedlyLinkNode.removeEventListener("touchend", func, { passive: false });
      }
    }
  }, [deviceInfo])


  return (
    <div className="rs-content rs-js-animated-element">
      <video
        className="rs-movie-back"
        autoPlay="autoplay" //autoplay only is not you shosupported, but autoplay + muted is supported by chrome
        muted
        loop
        playsInline // mandatory to make it works in IOS (whatever the browser)
        autoBuffer
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
              <a id="linkedin-link" href={linkedingURL} target="_blank">
                <img src={linkedinLogo} />
              </a>
              <a id="wantedly-link" href={wantedlyURL} target="_blank">
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
}
export default Contact
