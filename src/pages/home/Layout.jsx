import React from 'react'

import ForegroundUI from 'components/layout/ForegroundUI'
import Header from 'components/layout/Header'
import localeSetter from 'containers/localeSetter'

const Layout = props => (
  <>
    <ForegroundUI>    <div id="debug"/>
      <Header {...props} />
    </ForegroundUI>
  </>
)

export default localeSetter(Layout)
