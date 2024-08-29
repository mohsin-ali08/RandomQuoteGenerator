// Array of quotes with authors

const quotes = [
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    text: "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.",
    author: " – Voltaire",
  },
  {
    text: "Life is tough my darling, but so are you.",
    author: "– Stephanie Bennett Henry",
  },
  {
    text: "All the world's a stage, and all the men and women merely players.",
    author: "William Shakespeare",
  },
  {
    text: "Be kind, for everyone you meet is fighting a hard battle.",
    author: "Plato",
  },
  {
    text: "Unable are the loved to die for love is immortality.",
    author: "Emily Dickinson",
  },
  {
    text: "Whether you think you can, or you think you can’t – you’re right.",
    author: "Henry Ford",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
];

// create a function to generate a random Quotes
function generateQuote() {
  // Get a random index from the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // Get the quote and author based on the random index

  const selectedQuote = quotes[randomIndex];

  // Display the quote and author on the webpage

  document.getElementById("quote").textContent = `"${selectedQuote.text}"`;
  document.getElementById("author").textContent = `-${selectedQuote.author}`;
}
