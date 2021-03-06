// export const getGlobalInfo = deviceInfo => ({
//   type: 'FETCH_DEVICE_INFO',
//   payload: deviceInfo
// })

export const updateLocales = locale => ({
  type: 'UPDATE_LOCALE',
  payload: locale
})

export const updateFgndDirArrow = isFgndArrowActive => ({
  type: 'UPDATE_IS_FGND_ARW_ACTIVE',
  payload: isFgndArrowActive
})

export const updateCurrentSlideIndex = slideIndex => ({
  type: 'UPDATE_CURRENT_SLIDE_INDEX',
  payload: slideIndex
})

/** Will allow to make enable/disable the change of Slide control (ex via Nav) */
export const updateIsSlideControlActivated = isControlActive => ({
  type: 'UPDATE_IS_SLIDE_CONTROL_ACTIVATED',
  payload: isControlActive
})

