import React, { Fragment } from 'react'

import SVGAnimator from 'components/organisms/svgAnimator'
import Matrix from 'components/molecules/effects/Matrix'
import { portraitAnimSetting } from 'helpers/constants/animation'
import __ from 'helpers/i18n'
import { debugPhone } from 'helpers/utils/miscellaneous'
/**
 * Home page
 */
const Home = props => {
  const { locale, deviceInfo } = props
  // console.log(" Home", locale)
  // For mobile, we reduce the number of div to be displayed in order to save cpu
  const matrixLimit = ['ios', 'android'].includes(deviceInfo) ? 15 : undefined
  // // console.log('matrixLimit', matrixLimit)

  const debugMode = true;

  
  return (
    <Fragment>
      {/* {debugMode && <div>{deviceInfo}
      {'innerHeight: ' + window.innerHeight}
      {'  outerHeight: ' + window.outerHeight}
    </div>} */}

      <Matrix limit={matrixLimit} list={__('ITTerminology', locale)} />
      <SVGAnimator setting={portraitAnimSetting} />
    </Fragment>
  )
}

export default Home
