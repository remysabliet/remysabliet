import ITTerminology from './ITTerminology'

/**
 * Transform a JSON tree into a flat key/value objet
 * Example: flatten({form: {player: {name: 'My label'}})
 * will return {'form.player.name': 'My label'}
 */

const nestedMessages = {
  ITTerminology,
  language: {
    switchTo: '切り替え',
    en: '英語',
    ja: '日本語',
    fr: 'フランス語'
  },
  navigation: {
    slide1: 'スプラッシュページに移動',
    slide2: '自己紹介に移動',
    slide3: 'お問い合わせに移動'
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
