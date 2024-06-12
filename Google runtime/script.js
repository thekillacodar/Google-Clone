const searchInput = document.getElementById('search-input');
const list = document.getElementById('list');
const people = []; // assume this is populated elsewhere

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

searchInput.addEventListener('input', (e) => {
  let value = e.target.value.trim().toLowerCase();

  if (value.length > 0) {
    setList(people.filter(person => person.name.includes(value)));
  } else {
    clearList();
  }
});

function setList(filteredPeople) {
  clearList();
  filteredPeople.forEach(person => {
    const listItem = document.createElement('li');
    const text = document.createTextNode(person.name);
    listItem.appendChild(text);
    list.appendChild(listItem);
  });
}

function noResults() {
  const error = document.createElement('li');
  error.classList.add('error-message');
  const text = document.createTextNode('No results found. Sorry!');
  error.appendChild(text);
  list.appendChild(error);
}

document.getElementById('search-btn').addEventListener('click', () => {
  const query = searchInput.value.trim();
  window.open(`https://www.google.com/search?q=${query}`);
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    const query = searchInput.value.trim();
    window.open(`https://www.google.com/search?q=${query}`);
  }
});