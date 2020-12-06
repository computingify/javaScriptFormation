export default createAllTweets

import createListElement from './createListElement.js'


// [3] créer et ajouter un <ol> à la page, puis y ajouter les <li> de tweets en utilisant [2]
function createAllTweets(tweets) {
    const orderTweetsAll = document.createElement('ol');

    tweets.forEach(function (element) {
        orderTweetsAll.append(createListElement(element));
    })

    return orderTweetsAll;
}