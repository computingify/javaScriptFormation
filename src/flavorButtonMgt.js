import flavorTweet from './flavorTweet.js'

export default flavorButtonMgt


function flavorButtonMgt(listElement, tweet) {
    const flavButton = document.createElement('button')
    flavButton.classList.add('button')
    flavButton.textContent = 'Fav'

    flavButton.addEventListener('click', function () {
        if (!listElement.classList.contains('flavor')) {
            listElement.classList.add('flavor')
            flavorTweet(tweet, true)
        } else {
            listElement.classList.remove('flavor')
            flavorTweet(tweet, false)
        }
        // console.log('localStorage', localStorage)
    })

    return flavButton
}