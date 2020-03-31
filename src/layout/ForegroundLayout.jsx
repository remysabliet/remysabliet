import React from 'react'

import classNames from "classnames";

import Footer from 'layout/Footer'
import Header from 'layout/Header'
import NavBar from 'components/molecules/NavBar'

import { UI_FOREGROUND_LAYOUT } from "helpers/constants/homepage"

const ForegroundLayout = props => (
  <>
    <div className={classNames("rs-foreground-ui", props.layout === UI_FOREGROUND_LAYOUT["TOP-30"] ? "top-30" : "")}>    <div id="debug" />
      <Header {...props} />
      <NavBar {...props} />
      <Footer {...props} />
    </div>
  </>
)

export default ForegroundLayout
