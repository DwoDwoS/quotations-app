const form = document.getElementById('quote-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const text = document.getElementById('text').value;
  const author = document.getElementById('authorName').value;

  console.log('Citation :', text);
  console.log('Auteur/Autrice :', author);
});