import React from 'react'

import ForegroundLayout from 'layout/ForegroundLayout'
import AnimationContainer from 'containers/AnimationContainer'
import localeSetter from 'containers/localeSetter'

const ForegroundUI = props => {
  console.log("ForegroundUI", props) 
  return (
  <>
    <ForegroundLayout  {...props}>
      <div id="debug" />
    </ForegroundLayout>
  </>
)
  }
export default localeSetter(AnimationContainer(ForegroundUI))