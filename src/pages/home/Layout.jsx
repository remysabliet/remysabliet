import React from 'react'

import ForegroundUI from 'components/layout/ForegroundUI'
import Header from 'components/layout/Header'

import localeSetter from 'containers/localeSetter'

const Layout = React.memo(props => (
  <>
    <ForegroundUI>
      <Header {...props} />
    </ForegroundUI>
  </>
))

export default localeSetter(Layout)
