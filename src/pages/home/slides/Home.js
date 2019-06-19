import React, { Fragment } from "react"

import SVGAnimator from "components/organisms/SVGAnimator"
import Matrix from "components/molecules/effects/Matrix"
import { portraitAnimSetting } from 'helpers/constants/animation'
import __ from 'helpers/i18n'

import SVGDisplayer from 'components/atoms/SVGDisplayer';

import Test from "assets/svg/Test";

const test = {
 className: "test",
 // viewBox: "0 0 251 327",
 // preserveAspectRatio: undefined,
  uses: [
    { id:"test", xlinkHref: "#test", opacity: "1"}
  ]
}

/**
 * Home page
 */
const Home = (props) => {
  const { locale } = props;
  return (
    <Fragment>
      <Matrix list={__('ITTerminology', locale)} />
      <SVGAnimator setting={portraitAnimSetting} />
    </Fragment>
  )
}

export default Home;

/*

     <div className="svg-wrapper">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="60" width="320" />
          <div className="text">ZACH SAUCIER</div>
        </svg>
    </div>


    <div className="svg-wrapper">
      <Test />
      </div>

<div className="svg-wrapper">
        <SVGDisplayer svg={test} />
      </div>

    */