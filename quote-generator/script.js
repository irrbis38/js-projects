let apiQuotes = [];
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

//Show Loading
const loading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

//Hide Loading
const complete = () => {
  quoteContainer.hidden = false;
  loader.hidden = true;
};

//Show New Quote
const newQuote = () => {
  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  quoteAuthor.textContent = !quote.author ? "Unknown" : quote.author;
  quote.text.length > 20
    ? quoteText.classList.add("long-quote")
    : quoteText.classList.remove("long-quote");
  quoteText.textContent = quote.text;
  complete();
};

// Get Quotes From API
const getQuotes = async () => {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log(error);
  }
};

//Tweet Quote
const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterUrl, "_blank");
};

// Add EventListeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
