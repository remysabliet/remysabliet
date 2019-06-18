import React, { Fragment } from "react"
import { injectIntl } from "react-intl"; 

import SvgAnimator from "components/organisms/svgAnimator"
import Matrix from "components/molecules/effects/Matrix"
import { portraitAnimSetting } from 'helpers/constants/animation'
import __ from 'helpers/i18n'


/**
 * Home page
 */
const Home = (props) => {
  const { locale } = props;
  return (
    <Fragment>
      <Matrix list={__('ITTerminology', locale)} />
      <SvgAnimator setting={portraitAnimSetting} />
    </Fragment>
  )
}

export default Home;
