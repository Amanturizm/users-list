import { fetchData } from './features';
import { getSortedUsers } from './sort';

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

const sortMenu = document.getElementById('sort');
const sortMenuItems = document.getElementsByClassName('sort-menu');

sortMenu.addEventListener('mouseover', () => sortMenu.classList.add('hover'));
sortMenu.addEventListener('mouseout', () => sortMenu.classList.remove('hover'));

for (let menuItem of sortMenuItems) {
  menuItem.addEventListener('click', (e) => {
    sortMenu.classList.remove('hover');
    getSortedUsers(e.target.innerText);
  });
}
