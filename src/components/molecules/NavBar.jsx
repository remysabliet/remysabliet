import React, { useEffect } from 'react'
// import { HashLink as Link } from 'react-router-hash-link'
import { addExplosionEffectOnClick } from 'helpers/utils/animation'
import classNames from 'classnames'

const NavBar = React.memo(
  ({
    currentSlideIndex,
    deviceInfo,
    isSlideControlActivated,
    setCurrentSlideIndex,
    setSlideControllerDeactivated,
    slides
  }) => {
    useEffect(() => triggerExplosionAnim(currentSlideIndex), [currentSlideIndex])

    // Verify if the item clicked is not already active, if not, deactivate other item and active the current one
    // Also appends an effect to the current li's span
    const toggleStyle = id => {
      //Deactivate all active li (one at most)
      const activeLi = document.querySelectorAll('li.rs-li.active')

      if (activeLi[0] && activeLi[0].id !== id) {
        // console.log("list of active li",  activeLi[0].id)
        activeLi.forEach(x => {
          x.classList.toggle('active')
        })

        // make active the clicked li
        var li = document.getElementById(id)
        li.classList.toggle('active')
        let spanElem = li.querySelectorAll('.rs-link-container')[0]
        // Append effect on the Span element contained
        // by li
        addExplosionEffectOnClick(spanElem)
      }
    }

    const onLinkClick = index => {
      console.log("onClick", index)
      //deactivate possibility to slide during the CSS transition
      setSlideControllerDeactivated()
      if (isSlideControlActivated) {
        toggleStyle(`link${index + 1}`)
        setCurrentSlideIndex(index)
        // triggerExplosionAnim(index)
      }
    }

    /**
     * Trigger a CSS animation explosion effect on a link bars
     * The explosion is appended to the span with class rs-span-bg here
     * @param {*} index link index to which trigger explosion effect
     */
    const triggerExplosionAnim = index => {
      const spanElems = document.querySelectorAll('.rs-link-container')

      // 0.5 refers to the 0.5s of the css transition for link to become active and take full width
      // this will be used by below function to implement a delay before activating elastic effect
      addExplosionEffectOnClick(spanElems[index], 0.5)
    }

    return (
      <React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
          <defs>
            <filter id="filter-goo-2">
              <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="rs-navbar-container">
          <ul className="rs-nav">
            {slides.map((slide, index) => {
              return (
                <li
                  id={`link${index + 1}`}
                  className={classNames('rs-li', index === currentSlideIndex ? 'active' : '')}
                >
                  {/**  Have to manage the specific when its IOS + safari, we have to make sure the safari className is appended */}
                  <a
                    className={classNames(
                      'rs-link-container'
                    )}
                    style={{ filter: `url(#filter-goo-2)` }}
                    onClick={() => onLinkClick(index)}
                  >
                    <span className="rs-span-bg"></span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </React.Fragment>
    )
  }
)

export default NavBar
