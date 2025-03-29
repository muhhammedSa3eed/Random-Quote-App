var arrayOfQuotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "--Oscar Wilde",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "--Dr. Seuss",
  },
  {
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "--Robert Frost",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "--Mark Twain",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "--Marcus Tullius Cicero",
  },
  {
    quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "--Oscar Wilde",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "--Elbert Hubbard",
  },
  {
    quote: "“Without music, life would be a mistake.”",
    author: "--Friedrich Nietzsche, Twilight of the Idols",
  },
];
function randomQuote() {
  var random = Math.trunc(Math.random() * arrayOfQuotes.length + 1);

  document.getElementById(
    "quote"
  ).textContent = `${arrayOfQuotes[random].quote}`;
  document.getElementById(
    "author"
  ).textContent = `${arrayOfQuotes[random].author}`;
}
