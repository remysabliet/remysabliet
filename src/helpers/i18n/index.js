import en from './en'
import fr from './fr'
import ja from './ja'

const dico = {
  en,
  fr,
  ja
}

//Revoir 
const __ = (wordId, locale) => {
  console.log("TRANSLATION", wordId, locale)
  console.log(dico)
  const messages = locale && dico[locale] ? dico[locale] : dico['en'];
  console.log("TRANSLATION",messages)
  const res = Object.keys(messages).filter(
    y => y.includes(wordId)).map(
      y => messages[y])
      console.log(res)
  return res ? res : "textId not found";
};

export default __;

// https://tvanro.github.io/tech/building-a-translation-component-with-react-and-redux/