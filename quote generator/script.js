const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// show loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// hide loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}


// show new quote
function newQuote(){
    loading();
    // pick a random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if author field is black and replace it with "unkwon"
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // check quote length to determine styling
    if (quote.text.length > 120){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.add('long-quote');
    }
    quoteText.textContent = quote.text;
    complete();
}

// Get quotes from api
async function getQuotes(){
    loading();
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();

    } catch (error) {
        // catch error here
    }
}

// event listener
newQuoteBtn.addEventListener('click', newQuote)


// on load
getQuotes();
