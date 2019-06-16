import { connect } from 'react-redux'

const mapStateToProps = state => ({
  deviceInfo: state.deviceInfo,
  locale: state.locale
})

// HoC used to inject cross-cutting concern info 
const withCCConcernInfo = Component => {
  return connect(mapStateToProps)(Component)
}

export default withCCConcernInfo
