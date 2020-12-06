export default checkFr

// [4] créer une fonction checkFr qui pour un tweet en entrée renvoie vrai ou faux selon si la langue est 'fr'
function checkFr(tweet) {
    if (tweet.lang === "fr") {
        return true;
    }
    return false;
}