import React from 'react'
// import { HashLink as Link } from 'react-router-hash-link'
import { addExplosionEffectOnClick } from 'helpers/utils/animation'
import classNames from "classnames";

const NavBar = React.memo(({ currentSlideIndex, deviceInfo, isSlideControlActivated, setCurrentSlideIndex, setSlideControllerDeactivated, slides }) => {
  console.log(deviceInfo)
  // Verify if the item clicked is not already active, if not, deactivate other item and active the current one
  // Also appends an effect to the current li's span 
  const toggleStyle = (id) => {
    //Deactivate all active li (one at most)
    const activeLi = document.querySelectorAll('li.rs-li.active')

    if (activeLi[0] && activeLi[0].id !== id) {
      // console.log("list of active li",  activeLi[0].id)
      activeLi.forEach((x) => {
        x.classList.toggle('active')
      })

      // make active the clicked li
      var li = document.getElementById(id)
      li.classList.toggle('active');
      let spanElem = li.querySelectorAll('.link-container')[0]
      // Append effect on the Span element contained 
      // by li
      addExplosionEffectOnClick(spanElem)

    }
  }

  const onLinkClick = ((index) => {
    // console.log("OnLinkClick", index)

    //deactivate possibility to slide during the CSS transition
    setSlideControllerDeactivated();

    if (isSlideControlActivated) {
      toggleStyle(`link${index + 1}`)
      setCurrentSlideIndex(index)
    }
  })

  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
        <defs>
          <filter id="filter-goo-2">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="rs-navbar-container" >
        <ul className="rs-nav">
          {slides.map((slide, index) => {
            return (
              <li id={`link${index + 1}`} className={classNames("rs-li", index === currentSlideIndex ? "active" : "")}>
                <a className={classNames("link-container",  deviceInfo === "safari" ? "safari" : "")} style={{ filter: `url(#filter-goo-2)` }} onClick={() => onLinkClick(index)}>
                <span className="span__bg">
                </span>
            </a>
          </li>
          )})}
        </ul>
      </div>
    </React.Fragment >
  )
});

export default NavBar
