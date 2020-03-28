import React from 'react'

import ForegroundLayout from 'layout/ForegroundLayout'
import AnimationContainer from 'containers/AnimationContainer'


const ForegroundUI = React.memo(props => {
  // console.log("ForegroundUI", props)
  return (
    <>
      <ForegroundLayout  {...props}>
        <div id="debug" />
      </ForegroundLayout>
    </>
  )
})

export default AnimationContainer(ForegroundUI)