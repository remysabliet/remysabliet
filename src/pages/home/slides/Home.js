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
        <svg className="svgStyle" viewBox="0 0 251 327">
          <use id="suit" xlinkHref="#suit"/>
          <use id="tie" xlinkHref="#tie"/>
          <use id="hair" xlinkHref="#hair"/>
          <use id="face" xlinkHref="#face"/>
        </svg>
    </Fragment>
  )
}

export default Home;

/*

  <div style={divStyle} >
        <svg style={svgStyle} viewBox="0 0 251 327">

        */