import { fetchData } from './features';

const API_URL = 'https://jsonplaceholder.typicode.co/';

const setUsers = async () => {
  try {
    const data = await fetchData(API_URL + 'users');

    const cardsUser = document.getElementById('cards-user');

    cardsUser.innerHTML = data.map(({ username, email, phone }) => {
      return `
        <div class="card-user">
          <h3>${username}</h3>
          <p>${email}</p>
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
