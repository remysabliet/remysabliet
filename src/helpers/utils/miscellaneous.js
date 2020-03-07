import is from 'is_js'
import { locales } from "helpers/constants/global"

/**
 * Shuffle an array of items (*)
 * @param {*} array
 */
export const shuffle = array => {
  const cloneTab = array.slice();
  for (let i = cloneTab.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloneTab[i], cloneTab[j]] = [cloneTab[j], cloneTab[i]];
  }

  return cloneTab
}

export const recomputeViewportSize = () => {
  // First we get the viewport height and width and multiply them by 1% to get a value in px corresponding to a vh unit
  const vh = window.innerHeight * 0.01
  const vw = window.innerWidth * 0.01
  // Then we set the value in the --vh custom property to the root of the document (In order to be accessible from our CSS calculation function)
  // Slide property: height: calc(var(--vh, 1vh) * 100);
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  document.documentElement.style.setProperty('--vw', `${vw}px`)
  
  var styles = getComputedStyle(document.documentElement);
  console.log("New Viewport size DOM Style: ", document.documentElement.style)
  console.log("vh: ", styles.getPropertyValue('--vh'))
  console.log("vw: ", styles.getPropertyValue('--vw'))
  console.log("--calligraphy-container-height", styles.getPropertyValue('--calligraphy-container-height'))
  console.log("--calligraphy-row-height", styles.getPropertyValue('--calligraphy-row-height'))

}

export const addEventListener = (type, fn) => {
  window.addEventListener(type, fn)
}

export const removeEventListener = (type, fn) => {
  window.removeEventListener(type, fn)
}

/**
 * Retrieve device information using is.js framework
 */
export function getDeviceInfo() {
  const envDevice = [
    'ie',
    'chrome',
    'firefox',
    'edge',
    'opera',
    'safari',
    'phantom',
    'ios',
    'android'
  ]

  let result
  envDevice.forEach(env => {
    if (is[env]()) {
      // Dynamic function call, we call every method having env name within the is module imported
      result = env
    }
  })

  if (typeof result === 'undefined') {
    return null
  }
  return result
}

/**
 * Retrieve browser's locale
 */
export function getLocale() {
  const locale =
    navigator.language
    // All browsers 
    || (navigator.languages && navigator.languages[0]) // Chrome / Firefox
    || navigator.userLanguage // IE <= 10

  const browserCountryCode = locale && locale.length > 2 ? locale.substr(0, 2) : locale
  console.log(browserCountryCode, locales, locales.indexOf(browserCountryCode))
  return locales.filter(element => element.locale === browserCountryCode).length > 0 ? browserCountryCode : 'en'
}
