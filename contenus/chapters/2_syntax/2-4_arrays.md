# [Tableaux](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Un tableau est une collection de valeurs.

On peut accéder à l'élément `n` d'un tableau avec `monTableau[n-1]`. Sa longueur est `monTableau.length`.

```js
const array = [12, 65, 'romain', function () {}];

array[0]; // 12
array.length; // 4
```

<i> On peut mélanger les types dans un tableau </i>

## Itérer sur un tableau

Il y a plusieurs manières d'itérer sur un tableau.

```js
const array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {
  // à l'ancienne
  console.log(array[i]);
}

for (let element of array) {
  // à un poil plus moderne
  console.log(element);
}

array.forEach(function (element) {
  // beaucoup mieux !
  console.log(element);
});
// Ou alors avec une écriture fonctionnelle
array.forEach(element => {
    console.log(element);
})
```

En Javascript moderne, on utilise très rarement les boucles `for`. En général on utilise les méthodes fonctionnelles des tableaux pour itérer.

## Manipuler les tableaux

En Javascript, on aime bien manipuler les tableaux en utilisant l'**écriture fonctionnelle**.

De manière illustrée, ça donne [ça](https://twitter.com/steveluscher/status/741089564329054208).

- `a.forEach(f)`

```js
const array = [1, 2, 3, 4];

array.forEach(function (element, index, array) {
  // les arguments index et array sont optionnels
  console.log(element * index);
});

// 0
// 2
// 6
// 12
```

- `a.map(f)`

```js
const array = [1, 2, 3];

const array10 = array.map(function (e, i, a) {
  // les arguments i et a sont optionnels
  return e * 10;
}); // [10, 20, 30]
```

<i> map permet de stocker le resultat d'un calcule sur le tableau</i>

- `a.filter(f)`

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const pairs = array.filter(function (e, i, a) {
  // les arguments i et a sont optionnels
  return e % 2 === 0;
}); // [2, 4, 6, 8]
```

<i> permet de créer un filtre sur un tableau, si la condition du return est true alors il conserve les valeurs qui remplissent cette condition</i>

- `a.find(pred)`

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const found = array.find(function (e, i, a) {
  // les arguments i et a sont optionnels
  return e >= 4 && e % 4 === 2; // 6
});
```

<i> retourne le 1 élément qui rempli la condition </i>

- `a.sort(fun)`

```js
const found = array.sort(function (a, b) {
  return b - a; // doit retourner un nombre positif ou négatif
});
```

- `a.includes(element)`

```js
array.includes(2); // true
array.includes(10); // false
```

<i> Savoir si un élément est présent dans le tableau </i>

- `a.flat()`

```js
const array = [1, 2, [3, [4]]];
const applati = array.flat(); // [1, 2, 3, 4]
```

- `a.slice(debut, fin)`

```js
const extrait = array.slice(2, 5); // [3, 4, 5]
```

## À suivre: [Quelques petites choses en plus](./2-5_utils.md)
