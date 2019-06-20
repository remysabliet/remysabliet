import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/*
The classic button, in different colors, sizes, and states
 */
const Button = ({
  primary,
  actPrimary,
  active,
  loading,
  className,
  children,
  id,
  ...props
}) => {


  const classes = classNames(
    "button",
    {
      "active": active,
    },
    className
  );

  return (
    <button className={classes} id={id} {...props} >
      {children}
    </button>
  );
};

export default Button;
