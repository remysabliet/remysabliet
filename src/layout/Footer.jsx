import React from 'react'

import classNames from "classnames";

import ArrowDirection from "assets/svg/ArrowDirection"

const Footer = React.memo(props => (
    <div className="rs-footer">
      <div className={"rs-footer-content"} >
        {props.isForegroundDirArrowActive}
        <ArrowDirection className={classNames("rs-arrow-dir-bottom", { 'is-active': props.isForegroundDirArrowActive })} {...props} />
      </div>
    </div>
  )
  )

export default Footer
