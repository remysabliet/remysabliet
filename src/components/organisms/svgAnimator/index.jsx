import React, { Fragment, useState, useEffect} from 'react';

/**
 * Stateless component leveraging React Hooks to display SVG frames sequentially.
 * 
 * @param {*} setting 
 */
const SvgAnimator = ({
  setting
}) => {

  const [result, setResult] = useState(); // initialized to Empty
  
  const anim = () => {
    setting && setting.map(async anim => 
      await new Promise(resolve => setTimeout(resolve, anim.msTime)).then(() => 
        setResult(
          <svg {...anim.frame}>
            {anim.frame.uses && anim.frame.uses.map(use => {
              return (
                <use {...use} />
              )
            })}
          </svg>
        )
      )  
    )
  }
  
  useEffect(() => {
    anim();
  }, [setting]); // Will be re-executed if setting prop get updated

  return (
  <Fragment> 
    {result}
  </Fragment>
  )
}
export default SvgAnimator;
