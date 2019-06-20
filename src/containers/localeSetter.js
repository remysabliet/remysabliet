import { connect } from 'react-redux'

import { updateLocales } from 'actions/global'

function mapDispatchToProps(dispatch) {
  const updateLocale = (event) => {
    dispatch(updateLocales(event.target.id))
  }

  return {
    setLocale: updateLocale
  }
}

// HoC used to inject cross-cutting concern info 
const localeSetter = Component => {
  return connect(null, mapDispatchToProps)(Component)
}

export default localeSetter;
