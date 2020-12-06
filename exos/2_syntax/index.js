'use strict';

// # 2-1_Syntax

function logArray(array, str) {
  array.forEach(element => {
    console.log(str, element);
  })
}

console.log('--- Question 1 ---');
// [1] créer une variable x, et lui assigner un nombre
const x = 7;


console.log('--- Question 2 ---');
// [2] logguer cette variable dans la console avec console.log()
console.log(x);


console.log('--- Question 3 ---');
/* [3] créer une fonction x10 qui en entrée prend un nombre et renvoie le nombre multiplié par 10
  puis logguez le résultat de la fonction x10 appliquée sur x.
*/
function x10(val) {
  return val * 10;
}
console.log(x10(x));


console.log('--- Question 4 ---');
/* [4] créer une fonction random qui en entrée prend un nombre et renvoie un nombre entier aléatoire
  entre 0 et ce nombre (ex: si on lui passe 4, on veut récupérer, 0, 1, 2 ou 3, au hasard).
  Logguer le résultat de la fonction random appliquée sur x.
  ( Utiliser Math.random() et Math.floor() )
*/
function geneRand(val) {
  let rand = Math.random() * val;
  return Math.floor(rand);
};

console.log(geneRand(x));


console.log('--- Question 5 ---');
/* [5] logguer chacune des valeurs de "nombres" dans la console
en utilisant .forEach()
*/
const nombres = [23, 12, 57, 178, 139, 434, 222, 1000, 59, 887];
// nombres.forEach(element => {
//   console.log(element);
// })
console.log(nombres);


console.log('--- Question 6 ---');
/* [6] à partir de "nombres", créer un nouveau tableau avec seulement les entiers pairs
  en utilisant .filter()
*/
const pairs = nombres.filter(function (e) {
  return e % 2 === 0;
})
console.log(pairs);


console.log('--- Question 7 ---');
/* [7] à partir de "nombres", créer un nouveau tableau avec seulement les entiers plus grands que 100
  en utilisant .filter()
*/
const higher = nombres.filter(function (e) {
  return e > 100;
})
console.log(higher);


console.log('--- Question 8 ---');
/* [8] à partir de "nombres", créer un nouveau tableau contenant les valeurs multipliées par 10
  en utilisant .map() et la function x10
*/
const ten = nombres.map(x10);
console.log(ten);


console.log('--- Question 9 ---');
/* [9] logguer chacune des valeurs de "couleurs" et leur longueur dans la console
en utilisant .forEach()
*/
const couleurs = ['bleu', 'rouge', 'vert', 'jaune', 'orange', 'marron', 'noir'];
couleurs.forEach(element => {
  console.log("Value: ", element, " | Size: ", element.length);
})


console.log('--- Question 10 ---');
/* [10] à partir de "couleurs", créer un nouveau tableau contenant les longueurs
  en utilisant .map()
*/
const colorSize = couleurs.map(function (e) {
  return e.length;
})
console.log(colorSize);


console.log('--- Question 11 ---');
// [11] créer une fonction "longueur" qui prend en entrée une string et renvoie la longueur de la string
function longueur(str) {
  return str.length;
}


console.log('--- Question 12 ---');
// [12] reprendre le code de la question 10 mais en utilisant la fonction "longueur"
const ln = couleurs.map(longueur);
console.log(ln);


console.log('--- Question 13 ---');
// [13] ajouter 2 ou 3 nouvelles personnes au tableau "personnes", en utilisant .push()
const personnes = [{ nom: 'Romain', date: '1985-12-31' }];
personnes.push({ nom: 'Adrien', date: '1985-10-04' });
personnes.push({ nom: 'Serge', date: '1970-09-23' });


console.log('--- Question 14 ---');
// [14] à partir de "personnes", créer un nouveau tableau contenant seulement les noms en utilisant .map()
function getName(list) {
  return list.nom;
}
const name = personnes.map(getName);
logArray(name, "name: ");


console.log('--- Question 15 ---');
/* [15] créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
 et renvoie l'âge en nombre, en utilisant Date()
*/
function calculerAge(guy) {

  const currentDate = new Date();
  const guyDate = new Date(guy);

  const age = currentDate - guyDate;
  return new Date(age).getFullYear() - 1970;

}

function getGuyDateGetAge(guy) {
  return calculerAge(guy.date);
}

console.log('--- Question 16 ---');
// [16] à partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges
console.log(personnes.map(getGuyDateGetAge));  // Array(3) [ 34, 35, 50 ]


console.log('--- Test ---');
// Et si j'ai une function qui me retourne l'age de la personne et que je veux l'utiliser avant d'appeler calculerAge() ?
function getGuyDate(guy) {
  return guy.date;
}

console.log(personnes.map(getGuyDate).map(calculerAge));
