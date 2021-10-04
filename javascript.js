var quotes = ['The purpose of our lives is to be happy','Get busy living or get busy dying.','Life is what happens when you’re busy making other plans.','Many of life’s failures are people who did not realize how close they were to success when they gave up.','Never let the fear of striking out keep you from playing the game.']

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}