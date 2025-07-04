const FORM = document.getElementById("quote-form");

FORM.addEventListener("submit", function(event) {
  event.preventDefault();

  const TEXT = document.getElementById("text").value;
  const AUTHOR = document.getElementById("author").value;

  console.log("Citation :", TEXT);
  console.log("Auteur/Autrice :", AUTHOR);

  addQuote(TEXT, AUTHOR);
});

function addQuote(quote, author) {
  const QUOTETEXT = document.createElement("p");
  QUOTETEXT.className = "text";
  QUOTETEXT.textContent = quote;

  const QUOTEAUTHOR = document.createElement("p");
  QUOTEAUTHOR.className = "author";
  QUOTEAUTHOR.textContent = author;

  const QUOTEDIV = document.createElement("div");
  QUOTEDIV.className = "quote";
  QUOTEDIV.appendChild(QUOTETEXT);
  QUOTEDIV.appendChild(QUOTEAUTHOR);

  const QUOTELIST = document.getElementById("quote-list");
  QUOTELIST.appendChild(QUOTEDIV);
}