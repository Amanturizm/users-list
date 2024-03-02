import { fetchData } from './features';
import { filterUsers, sortUsers } from './options';

const API_URL = 'https://jsonplaceholder.typicode.com/';

const setUsers = async () => {
  try {
    const data = await fetchData(API_URL + 'users');

    const cardsUser = document.getElementById('cards-user');

    cardsUser.innerHTML = data.map(({ username, email, phone }) => {
      return `
        <div class="card-user">
          <h3 class="username">${username}</h3>
          <p class="email">${email}</p>
          <p>${phone}</p>
        </div>
      `;
    }).join('');
  } catch {
    // nothing
  }
};

void setUsers();

const reloadBtn = document.getElementById('reload');

reloadBtn.addEventListener('click', setUsers);

const filterLabels = document.getElementsByClassName('filter-label');

for (const filterLabel of filterLabels) {
  filterLabel.addEventListener('click', (e) => {
    document.querySelector(`.filter-input[name=${e.target.attributes.datatype.value}]`).focus();
  });
}

const filterInputs = document.getElementsByClassName('filter-input');

for (const filterInput of filterInputs) {
  filterInput.addEventListener('input', (e) => {
    const { name, value } = e.target;

    if (value === ' ') {
      e.target.value = '';
      return;
    }
    ;
    filterUsers(name, value);
  });
}

const sortMenu = document.getElementById('sort');
const sortMenuItems = document.getElementsByClassName('sort-menu');

sortMenu.addEventListener('click', () => sortMenu.classList.toggle('hover'));
document.addEventListener('click', (e) => {
  e.stopPropagation();

  if (
    !e.target.classList.contains('sort-menu') &&
    e.target.parentElement.id !== 'sort' &&
    e.target.id !== 'sort'
  ) {
    sortMenu.classList.remove('hover');
  }
});

for (let menuItem of sortMenuItems) {
  menuItem.addEventListener('click', (e) => {
    e.stopPropagation();
    sortMenu.classList.remove('hover');
    sortUsers(e.target.innerText);
  });
}
