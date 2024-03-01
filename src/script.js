const API_URL = 'https://jsonplaceholder.typicode.com/';

const reloadBtn = document.getElementsByClassName('reload')[0];

const togglePreloader = (isNone) => {
  setTimeout(() => {
    reloadBtn.style.animation = isNone ? 'none' : 'reload 600ms infinite ease-in-out'
    reloadBtn.style.cursor = isNone ? 'pointer' : 'not-allowed';
    reloadBtn.disabled = !isNone;
  }, isNone ? 500 : 0);
};

const fetchData = async (url, init) => {
  togglePreloader();
  const response = await fetch(url, init)
    .catch(() => togglePreloader(true))
    .finally(() => togglePreloader(true));

  return await response.json();
};

const cardsUser = document.getElementById('cards-user');

const setUsers = async () => {
  const data = await fetchData(API_URL + 'users');

  cardsUser.innerHTML = data.map(({username, email, phone}) => {
    return `
    <div class="card-user">
      <h3>${username}</h3>
      <p>${email}</p>
      <p>${phone}</p>
    </div>
  `;
  }).join('');
};

void setUsers();

reloadBtn.addEventListener('click', () => {
  void setUsers();
});
