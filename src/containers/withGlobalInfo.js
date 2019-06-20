import { connect } from 'react-redux'

const mapStateToProps = state => {

  const {deviceInfo, locale} = state.global;
  console.log("withGlobalInfo", deviceInfo, locale)
  return {
    deviceInfo: deviceInfo,
    locale: locale
  }
}

// HoC used to inject cross-cutting concern info 
const withGlobalInfo = Component => {
  return connect(mapStateToProps)(Component)
}

export default withGlobalInfo
