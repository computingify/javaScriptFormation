'use strict';

// # 4_DOM

function createSection(id) {
    const sec = document.createElement('section');
    sec.id = id;
    document.body.append(sec);
    return sec;
}
/* Exercice 1: Couleurs
    - Créer une <div> pour chaque couleur, avec la couleur en textContent, et l'ajouter à l'élément avec l'id 'exo1'
    - Chaque div doit avoir un fond coloré de sa couleur
    - Au click, chaque div doit logguer sa couleur dans la console
*/

const colors = ['blue', 'red', 'green', 'black', 'grey', 'orange', 'purple'];
const exo1 = document.getElementById('exo1');

function makeDiv(color) {

    const div = document.createElement('div');
    div.textContent = color;
    div.style.backgroundColor = color;

    div.addEventListener('click', function (color) {
        console.log('Color', color.target.textContent);
    })
    div.classList.add('couleur');

    return div;
};

colors.map(makeDiv).forEach(function (div) {
    exo1.append(div);
});

// -------------------------------

/* Exercice 2: Taille
    - Créer une <section> avec l'id 'exo2', et l'ajouter au body
    - Créer une <div> carrée, de couleur noire, et l'ajouter à la 2e section
    - Lui ajouter un listener au mousemove, qui change sa hauteur/largeur
    en fonction de la position de la souris à l'écran (event.clientX, event.clientY)
*/
createSection('exo2');

const eCarree = document.createElement('div');
eCarree.classList.add('carre');
eCarree.style.backgroundColor = 'black';
const exo2 = document.getElementById("exo2");
exo2.append(eCarree);

eCarree.addEventListener('mousemove', (e) => {

    const x = Math.floor(e.clientX / 100);
    const y = Math.floor(e.clientY / 20)
    e.target.style.width = x + 'rem';
    e.target.style.height = y + 'rem';
})


// -------------------------------

/* Exercice 3: Harry & friends
    - Créer une <section> avec l'id 'exo3', et l'ajouter au body
    - Créer une <div> pour Harry, avec le nom en textContent, et l'ajouter à la 3e section
    - Ajouter un listener qui, au click, choisit un nom au hasard
    puis remplace la <div> cliquée par une nouvelle <div>, avec le nouveau nom
*/

const names = ['Harry', 'Hermione', 'Ron', 'Sirius', 'Hagrid', 'Albus'];
const exo3 = createSection('exo3');
const idChanger = 'changer';

const harry = document.createElement('div');
harry.textContent = names[0];
harry.classList.add('couleur');
harry.id = idChanger;
exo3.append(harry);

const element = document.getElementById(idChanger)
element.addEventListener('click', listener);

function listener() {
    // search random name
    const randIndex = Math.floor(Math.random() * names.length);

    // create new div
    const div = document.createElement('div');
    div.textContent = names[randIndex];
    div.classList.add('couleur');
    div.id = idChanger;
    const element = document.getElementById(idChanger);
    element.replaceWith(div);
    // Recall getElement to obtain the new one replaced
    const newElement = document.getElementById(idChanger);
    newElement.addEventListener('click', listener);
}


// -------------------------------

/* Exercice 4: Tracking de la souris
    - Créer une <section> avec l'id 'exo4', et l'ajouter au body
    - Créer un <button>, lui donner le contenu "Track", et l'ajouter à la 4e section
    - Lui ajouter un listener qui active/désactive le tracking
    de la position de la souris dans la fenêtre (event.clientX, event.clientY)
*/
// il vaut mieux accéder directement aux variable plutôt que de passer par le getId (qui demande pas mal de ressource au navigateur)
const exo4 = createSection('exo4');
let activated = false;

// Button creation
const button = document.createElement('button')
button.textContent = "Track";
button.classList.add('button');
exo4.append(button);

// Cursor showing
const mouseCoord = document.createElement('div');
mouseCoord.textContent = '<= Clic on Tack button to start tracking';
mouseCoord.classList.add('cusorShowing');
exo4.append(mouseCoord);


button.addEventListener('click', (event) => {
    if (!activated) {
        mouseCoord.style.backgroundColor = 'red';
        document.body.addEventListener('mousemove', mouseMouveListner);
    } else {
        mouseCoord.style.backgroundColor = 'grey';
        document.body.removeEventListener('mousemove', mouseMouveListner);
    }
    activated = !activated;
});

function mouseMouveListner(event) {
    mouseCoord.textContent = 'X= ' + event.clientX + ' | Y= ' + event.clientY;
}

// -------------------------------

/* Exercice Bonus: Click and drag
    - Créer une <section> avec l'id 'exo5', et l'ajouter au body
    - Créer une <div>, lui donner le contenu "Drag me", et l'ajouter à la 5e section
    - Faire en sorte de pouvoir déplacer cette <div> lorsque l'on clique dessus:
      * quand on clique dessus en laissant enfoncé, la <div> se déplace en fonction des déplacements de la souris
      * lorsqu'on relâche, la <div> ne se déplace plus
*/

const exo5 = createSection('exo5');

const dragDiv = document.createElement('div')
dragDiv.textContent = "Drag me";
dragDiv.classList.add('drag', 'button');
exo5.append(dragDiv); S

dragDiv.addEventListener('mousedown', (event) => {
    dragDiv.style.top = event.clientX + 'px';
    dragDiv.style.left = event.clientY + 'px';
})