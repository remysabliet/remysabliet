import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { render } from 'react-testing-library'

// The following function comes from the library examples:
// https://github.com/kentcdodds/react-testing-library-examples
export default function renderWithContext(
  ui, // Corresponds to App
  {
    route = '/', // In calling function,  route is provided as parameter. if not provided default value is '/'
    history = createMemoryHistory({ initialEntries: [route] }),
    store // Provided as props of App
  } = {} /* La syntaxe *= {}* permet de generer un Objet par defaut si jamais aucun Objet n a ete passe en parametre de la fonction.

  La raison pour laquelle on fait cela, c’est qu’on associe des valeurs par defaut a l’interieur de cet objet ( route et history),
  Dans le cas ou on aurait invoquer la fonction avec un objet vide, alors lles deux cles *route* et *history* seraient automatiquement ajoute a notre a  notre objet vide. Mais dans le cas ou ne passe pas d’objet vide (donc rien du tout), ces deux cles n’auront aucun objet auquel s’attacher, et donc le code plante a la compilation.

  Neanmoins dans le cas du challenge6, en regardant le code *render-app.js*, quoi qu’il arrive,
  renderWithCOntext() sera toujours invoque avec un objet qui est soit vide {}
  dans le cas ou l’utilisateur ne specifie pas de route, soit enrichi de la valeur *{route:route}* en parametre,
   donc dans notre cas on pourrait retirer la partie speciale  *= {}* definit en parametre
    de la fonction renderWithCOntext().
 */
) {
  return {
    // render renvoit un container element
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
    store
  }
}
