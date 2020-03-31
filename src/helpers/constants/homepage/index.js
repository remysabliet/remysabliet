import en from './calligraphyEn'
import ja from './calligraphyJa'

export const symbols = {
  empty: [], // used for refresh purpose
  ja: ja,
  en: en
}


export const CONST_SLIDES = ['home', 'about-me', 'contact']

export const UI_FOREGROUND_LAYOUT = {
  FULL_LAYOUT: 'FULL',
  'TOP-30': 'TOP-30'
}

//UNUSED FOR NOW

// We add an additional clqss .faded-out to all the element of the array
// for them to be invisible by default
// const idiomClassName = { className: 'faded-out' }

// export const callygraphySymbols = {
//   ...symbols,
//   ja: symbols.ja.map(obj =>
//     Object.assign(obj, {
//       element: React.cloneElement(obj.element, {
//         class: `${obj.element.props.className} ${idiomClassName}`
//       })
//     })
//   )
// }
