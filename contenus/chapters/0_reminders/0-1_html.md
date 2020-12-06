# [HTML](https://developer.mozilla.org/fr/docs/Web/html)

C'est le **squelette** d'une page web.

## Sémantique

HTML est un langage de [balises](https://developer.mozilla.org/fr/docs/Web/Guide/HTML/HTML5/Liste_des_%C3%A9l%C3%A9ments_HTML5), il sert à structurer de l'information pour lui donner du sens.

```html
<monTag monAttribut="maValeur">
  <monAutreTag>Contenu</monAutreTag>
</monTag>

<!-- Commentaire: ceci est une balise auto fermante -->
<monTag monAttribut="maValeur" />
```

Les attributs sont comme des options pour les balises. Il y en a des communs à tous les éléments, mais en général ils sont spécifiques.

Principaux attributs communs:

- `hidden`
- `class`
- `id`

A minima, une page HTML se constitue d'un bloc `<head>` et d'un bloc `<body>`.

```html
<!-- le DOCTYPE sert à préciser la version de HTML, par défault html signifie HTML5 -->
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

## `<head>`

Le bloc `<head>` sert à déclarer toutes les infos utiles au navigateur afin de l'aider à afficher la page. Les infos du `<head>` n'ont pas vocation à être affichées à l'écran.

Il est important de bien construire son `<head>` pour aider au référencement.

On y trouve en général:

- [`<meta>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/meta) : Informations sur le document
- [`<link>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/link) : Liens vers des ressources externes, souvent des feuilles CSS, ou la favicon
- [`<title>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/title) : Le titre de la page, affiché dans l'onglet
- [`<style>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/style) : Du code CSS inliné
- [`<script>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/script) : Du code javascript, bloque le parser HTML

### Styles

Il y a deux options pour intégrer du style:

- via un fichier externe

```html
<link rel="stylesheet" href="./style.css" />
```

- via une balise `<style>`

```html
<style>
  div {
    color: blue;
  }
</style>
```

### Scripts

<mark>Toujours les déclarer dans le `<head>`</mark>

Il y a deux options pour intégrer du javascript:

- via un fichier externe

```html
<script src="./index.js"></script>
<!-- bien penser à fermer la balise -->
```

- en écrivant le script directement dans la balise `<script>`

```html
<script>
  console.log('COUCOU');
</script>
```

Les `<script>` bloquent le parser HTML, <mark>c'est-à-dire que la lecture de la page s'arrête pour chaque `<script></mark>`, le temps de télécharger et d'exécuter chacun des `<script>`.

Il est courant de voir des `<script>` placés à la fin du `<body>`. Cette astuce sert à éviter le blocage du parser HTML, mais les `<script>` ne sont plus à leur place naturelle, c'est-à-dire dans le `<head>`.

<mark>Deux attributs sont intéressants pour éviter le blocage du parser</mark>, tout en laissant les `<script>` dans le `<head>`:

- `defer`
  
  - on retarde l'exécution pour attendre que toute la page soit lue
  - si plusieurs scripts avec `defer`, <mark>ordre d'exécution préservé</mark>

- `async`
  
  - exécuté dès que possible, dès la réception du fichier
  
  - Si plusieurs scripts avec `async`, <mark>aucun ordre d'execution établi</mark>
    
    Pour l'utilisé : `<script async>`

## `<body>`

Le bloc `<body>` sert à décrire le contenu de notre page. C'est là que toute l'information à affichée est structurée.

### [Balises classiques](https://developer.mozilla.org/fr/docs/Web/HTML/Element)

La plupart des balises servent à structurer du contenu, comme sur une page d'un journal.

- [`<a>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/a) : Liens

```html
<a href="https://www.youtube.com/watch?v=2zNSgSzhBfM">
  cette vidéo est géniale !
</a>
```

- [`<ul>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ul) [`<ol>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ol) [`<li>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/li) : lister des éléments

- [`<article>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/article) [`<menu>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/menu) [`<section>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/section) [`<footer>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/footer) [`<header>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ul) [`<nav>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/nav) [`<main>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/main) [`<p>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/p) [`<h1>`-`<h6>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Heading_Elements) : structurer son contenu

- [`<table>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/table) : pour des données tabulaires (non recommendé car doit être fait dans le css)
  
  - Regarder [`display:flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) ou [`display:table`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) en CSS pour aligner/centrer des éléments visuellement.

- [`<div>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/div) [`<span>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/span) : pas de sens sémantique

### Média

- [`<img>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/img)
  - jpeg
  - png
  - svg
  - gif

```html
<img src="http://example.org/azerty.png" alt="mon image représente..." />
```

- [`<audio>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/audio) [`<video>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/video)

- [`<source>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/source)
  
  `alt`permet d'ajouter du text pour les mals voyants qui utilise des lecteur de page internet

### Formulaires

```html
<form action="http://www.monUrl.com" method="POST">
  <label for="nom">Nom</label>
  <input id="nom" name="nom" type="text" /> /* name pour l'id de la donnée lorsqu'elle est envoyé au serveur*/

  <label for="cool">
    Etes-vous cool ?
    <input id="cool" name="cool" type="checkbox" />
  </label>

  <label for="history">Votre histoire</label>
  <textarea id="history" name="histoire"></textarea>

  <input type="submit" value="Envoyer" />
</form>
```

- [`<form>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/form)
  - Method: GET ou POST
  - Surtout jamais de formulaire imbriqué
  - Envoyer le formulaire avec un &lt;button type="submit"> ou un &lt;input type="submit">
- [`<input>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input)
  - `type`: text, radio, url, email , number, file, search, date, datetime...
  - `placeholder="coucou"`
  - [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) : pour le focus sur l'input quand clic sur label
  - `required`
- [`<textarea>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/textarea), [`<select>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/textarea) et [`<option>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/option)

### Charger une autre page

- [`<iframe src="http://....">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
  
  *Permet d'ouvrir une fenêtre dans notre page web. c'est comme une nouvelle fenêtre qui fonctionne indépendament.*

---

## [Exercice](../../../exos/0_reminders/0-1_html.md)

## À suivre: [CSS](./0-2_css.md)
