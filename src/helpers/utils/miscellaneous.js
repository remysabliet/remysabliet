import is from 'is_js'

/**
 * Shuffle an array of items (*)
 * @param {*} array 
 */
export const shuffle = (array) => {
	const cloneTab = array.slice();
	for (let i = cloneTab.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[cloneTab[i], cloneTab[j]] = [cloneTab[j], cloneTab[i]];
	}

	return cloneTab;
}
  
/**
 * During initialization of the page, will setup a few custom CSS properties as well as 
 * Listener and eventListener to handle resizing of the page
 * @param {*} array 
 */
export const initEventListener = () => {
  window.addEventListener(
  'resize',() => {
    // First we get the viewport height and width and multiply them by 1% to get a value in px corresponding to a vh unit
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    // Then we set the value in the --vh custom property to the root of the document (In order to be accessible from our CSS calculation function)
    // Slide property: height: calc(var(--vh, 1vh) * 100);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  })
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
 * Retrieve locale
 */
export function getLocale() {
  return navigator.languages && navigator.languages[0] // Chrome / Firefox
  || navigator.language // All browsers
  || navigator.userLanguage; // IE <= 10
}