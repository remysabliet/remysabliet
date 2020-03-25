import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { addExplosionEffectOnClick } from 'helpers/utils/animation'

const NavBar = React.memo(({ slides }) => {

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
          <li id="link1" className="rs-li active">
            <a className="link-container" style={{ filter: 'url(#filter-goo-2)' }} onClick={() => toggleStyle('link1')}>
              <span className="span__bg">
              </span>
            </a>
          </li>

          <li id="link2" className="rs-li">
            <a className="link-container" style={{ filter: 'url(#filter-goo-2)' }} onClick={() => toggleStyle('link2')}>
              <span className="span__bg">
              </span>
            </a>
          </li>

        </ul>
      </div>
    </React.Fragment>
  )
});

export default NavBar


{/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
		 <defs>
			<filter id="filter-goo-2">
			<feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
			<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
			<feComposite in="SourceGraphic" in2="goo" />
			</filter>
		</defs>
	</svg> */}


{/* <div  class="rs-navbar-container" >
<ul class="rs-nav">
  <li id="link1" class="rs-li active">
    <a class="link-container" style="filter: url('#filter-goo-2')" onclick="toggleStyle('link1')">
      <span  class="span__bg">
      </span>
    </a>
  </li>
  <li id="link2" class="rs-li">
    <a  class="link-container" onclick="toggleStyle('link2')" style="filter: url('#filter-goo-2')"><span  class="span__bg"></span></a>
  </li>
  
    <li id="link3" class="rs-li">
    <a  class="link-container" onclick="toggleStyle('link3')" style="filter: url('#filter-goo-2')"><span  class="span__bg"></span></a>
  </li>
  
    <li id="link4" class="rs-li">
    <a  class="link-container" onclick="toggleStyle('link4')" style="filter: url('#filter-goo-2')"><span  class="span__bg"></span></a>
  </li>
</ul> */}


{/* <nav className='rs-nav'>
{slides.map(slide => (
  <Link smooth to={`/#${slide}`}>
    {slide}
  </Link>
))}
</nav> */}