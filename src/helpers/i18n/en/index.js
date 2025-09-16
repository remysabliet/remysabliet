import ITTerminology from './ITTerminology'

/**
 * Transform a JSON tree into a flat key/value objet
 * Example: flatten({form: {player: {name: 'My label'}})
 * will return {'form.player.name': 'My label'}
 */

const nestedMessages = {
  ITTerminology,
  language: {
    switchTo: 'Switch to',
    en: 'English',
    ja: 'Japanese',
    fr: 'French'
  },
  navigation: {
    slide1: 'Go to splash page',
    slide2: 'Go to introduction',
    slide3: 'Go to contact'
  }
}

function flatten(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'string') {
      messages[prefixedKey] = value
    } else {
      Object.assign(messages, flatten(value, prefixedKey))
    }
    return messages
  }, {})
}

export default flatten(nestedMessages)
