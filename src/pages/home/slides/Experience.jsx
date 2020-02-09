import React, { Fragment } from 'react'
import MainCanvas from 'components/organisms/drawer/canvas/MainCanvas'

const Experience = () => (
  <Fragment>
    <p>Oneself in classical and humanistic studies, Latin was a must.</p>
    
    <p>
      {' '}
      <ul>
        <li>
          ADD Jelly button for contact
          https://1stwebdesigner.com/free-code-snippets-css-buttons/
        </li>{' '}
        <li>
          Parallax Effect On Hover
          https://codemyui.com/parallax-effect-hover/
        </li>
        <li>
          {' '}
          Back and forward arrow between slide
          https://codemyui.com/back-forward-arrow-animation-using-svg/
        </li>
        <li>
          {' '}
          Menu Icon toggle anim (Optional)
          https://codepen.io/Zaku/pen/vcaFr
        </li>
        <li>
          {' '}
          Menu: Inspiration to create living SVG
          animation/transformation
          https://codepen.io/lbebber/pen/LELBEo
        </li>
        <li>
          {' '}
          Text distorsion effect
          https://tympanus.net/codrops/2019/02/06/text-distortion-effects-using-blotter-js/
        </li>
      </ul>
    </p>
    <MainCanvas width={300} height={400} />
  </Fragment>
)
export default Experience
