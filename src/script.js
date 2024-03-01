const API_URL = 'https://jsonplaceholder.typicode.com/';

const fetchData = async (url, init) => {
  const response = await fetch(url, init);
  return await response.json();
};

const cardsUser = document.getElementById('cards-user');

const createUserCard = ({ username, email, phone }) => {
  return `
    <div class="card-user">
      <h3>${username}</h3>
      <p>${email}</p>
      <p>${phone}</p>
    </div>
  `;
};

(async () => {
  const data = await fetchData(API_URL + 'users');

  const userCardsHTML = data.map(createUserCard).join('');
  cardsUser.innerHTML = userCardsHTML;
})();
