import React, { Fragment } from "react"
import { injectIntl } from "react-intl"; 

import Portrait from "assets/svg/portrait";
import Matrix from "components/molecules/effects/Matrix"
import __ from 'helpers/i18n'

/**
 * Home page
 */
const Home = (props) => {
  const { locale } = props;
  return (
    <Fragment>
      <Matrix list={__('ITTerminology', locale)} />
      <Portrait/>   
      <svg  width="100vw" height="100vh"  viewBox="0 0 251 327">
        <use xlinkHref="#suit"/>
        <use xlinkHref="#tie"/>
        <use xlinkHref="#hair"/>
        <use xlinkHref="#face"/>
      </svg>
    </Fragment>
  )
}

export default Home;
