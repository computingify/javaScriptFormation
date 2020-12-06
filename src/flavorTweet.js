export default flavorTweet

function flavorTweet(tweet, isFlavor) {

    let flavorArray = localStorage.getItem('flavor')

    console.log('flavorArray: ', flavorArray, ' | isFlavor : ', isFlavor)

    if (isFlavor) {
        console.log('flavorArray.getItem: ', flavorArray.getItem('*'))
        if (flavorArray.getItem('*') === null) {
            flavorArray = [tweet.id]
            console.log('flavorArray: ', flavorArray, ' | isFlavor : ', isFlavor)
        } else if (!flavorArray.includes(tweet.id)) {
            flavorArray.push(tweet.id)
        }
    } else /*if (flavorArray !== null) {*/
        if (flavorArray.includes(tweet.id)) {
            const index = flavorArray.indexOf(tweet.id)
            flavorArray.splice(index, index + 1)
        }
    // }

    localStorage.setItem('flavor', flavorArray)
}

