import flavorButtonMgt from './flavorButtonMgt.js'

export default createListElement

// [2] créer une fonction, qui pour un tweet en entrée, crée et retourne un <li> contenant le texte du tweet
function createListElement(tweet) {
    // console.log('tweet: ', tweet, 'full_text', tweet.full_text);
    const listElement = document.createElement('li');
    listElement.textContent = tweet.full_text;

    // Flavor button
    const flavButton = flavorButtonMgt(listElement, tweet);
    listElement.append(flavButton)

    return listElement;
}