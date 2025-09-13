import ITTerminology from './ITTerminology'

/**
 * Transform a JSON tree into a flat key/value objet
 * Example: flatten({form: {player: {name: 'My label'}})
 * will return {'form.player.name': 'My label'}
 */

const nestedMessages = {
  ITTerminology,
  language: {
    switchTo: 'Changer vers',
    en: 'Anglais',
    ja: 'Japonais',
    fr: 'Français'
  },
  navigation: {
    slide1: 'Aller à la page d\'accueil',
    slide2: 'Aller à l\'introduction',
    slide3: 'Aller au contact'
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
