'use strict';

// Asynchrone
const rawDataUrl = 'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json'
console.log('--- Question 1 ---');
/* créer une Promesse qui renvoie un nombre aléatoire au bout de 2 secondes.
  Si ce nombre est pair, le résoudre, sinon le rejeter.

  Utiliser setTimeout().
*/
const maPromesse = new Promise(function (resolve, reject) {
  const number = Math.floor(Math.random() * 10)
  console.log('Random number = ', number)
  setTimeout(function () {
    if (number % 2 === 0)
      resolve(number);
    else
      reject('Pas Paire')
  }, 2000);
});


console.log('--- Question 2 ---');
/* Consommer la Promesse de 1) pour
- afficher le nombre renvoyé quand elle résoud
- logguer un message d'erreur quand elle est rejetée
*/

maPromesse
  .then(function (value) {
    // console.log('le chifre est paire: value = ', value)
  })
  .catch(function (error) {
    // console.log(error, 'le chifre est impaire')
  })


console.log('--- Question 3 ---');
/* Écrire une fonction getJson() qui prend une URL en entrée,
  et renvoie la Promesse de récupérer la réponse HTTP transformée en JSON
*/

function getJson(url) {

  return fetch(url)
    .then(function (httpResponse) {
      console.log('http response: ', httpResponse)
      return httpResponse.json() //return a promise
    })
    .catch(function (httpResponse) {
      console.log('http response Fail: ', httpResponse)
    })

}

getJson(rawDataUrl)
  .then(function (data) {  // Dans ce cas c'est ce .then qui permet de reccupérer le retour de la promesse du .json()
    console.log('data inside json', data)
    return data
  })


console.log('--- BONUS ---');
/* Créer une Promesse qui:
  - crée un nombre aléatoire (delay) en 0 et 5000
  - au bout de 2s, rejeter la Promesse avec le texte 'Trop long...'
  - au bout de delay ms pour résoudre le nombre delay
  - consommer la Promesse de sorte que si elle est rejetée, on recommence jusqu'à ce qu'elle résolve
*/
