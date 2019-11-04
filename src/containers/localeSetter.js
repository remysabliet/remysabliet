import { connect } from 'react-redux'

import { updateLocales } from 'actions/global'

/**
 * the locale code is located at the last 2 character of returned event.target id
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch) {
  const updateLocale = event => {
    const targetID = event.target.id
    const locale = targetID ? targetID.substr(targetID.length - 2) : 'en'
    dispatch(updateLocales(locale))
  }

  return {
    setLocale: updateLocale
  }
}

// HoC used to inject cross-cutting concern info
const localeSetter = Component =>
  connect(
    null,
    mapDispatchToProps
  )(Component)

export default localeSetter
