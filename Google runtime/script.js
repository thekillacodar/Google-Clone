const searchInput = document.getElementById('search-input');
const list = document.getElementById('list');
const people = []; // define or populate the people array

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

searchInput.addEventListener("input", (e) => {
  let value = e.target.value;

  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase();

    const filteredPeople = people.filter(person => {
      return person.name.includes(value);
    });

    setList(filteredPeople);
  } else {
    clearList();
  }
});

function setList(people) {
  clearList();
  people.forEach(person => {
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

document.getElementById('search-btn').addEventListener('click', function() {
  const query = searchInput.value;
  window.location.href = `https://www.google.com/search?q=${query}`; // open in same tab
});

document.getElementById('body').addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    const query = searchInput.value;
    window.location.href = `https://www.google.com/search?q=${query}`; // open in same tab
  }
});
