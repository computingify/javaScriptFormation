
import * as constant from './const.js'
import checkFr from './checkFr.js'
import createAllTweets from './createAllTweets.js'

export default filterButton

function filterButton(tweets, isFr, tweetsShowed) {
    const button = document.createElement('button')
    button.textContent = constant.textButtonOnlyFrench;
    button.classList.add('button');

    button.addEventListener('click', function () {

        // Tweets language management
        let retTweets;
        if (!isFr) {
            // Show only fr Tweets
            const tweetsFr = tweets.filter(function (tweet) {
                if (checkFr(tweet)) {
                    // console.log(tweet);
                    return tweet;
                }
            })
            // Button information management
            button.textContent = constant.textButtonAllTweets;

            retTweets = createAllTweets(tweetsFr);

        } else {
            // Show all Tweets
            // Button information management
            button.textContent = constant.textButtonOnlyFrench
            retTweets = createAllTweets(tweets);
        }

        isFr = !isFr;
        tweetsShowed.replaceWith(retTweets);
        tweetsShowed = retTweets;

    });

    return button;
}