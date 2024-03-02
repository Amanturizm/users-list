export const filterUsers = (name, value) => {
  const cardsUser = document.getElementById('cards-user');
  const cardNodes = Array.from(cardsUser.children);

  cardNodes.forEach(card => {
    const text = card.querySelector(`.${name}`).textContent.trim().toLowerCase();

    card.style.display = text.includes(value.toLowerCase()) ? '' : 'none';
  });
};

export const sortUsers = (type) => {
  const cardsUser = document.getElementById('cards-user');
  const cardNodes = Array.from(cardsUser.children);

  const sortedCards = cardNodes.sort((a, b) => {
    const textA = a.querySelector(`.${type}`).textContent.trim().toLowerCase();
    const textB = b.querySelector(`.${type}`).textContent.trim().toLowerCase();
    return textA.localeCompare(textB);
  });

  cardsUser.innerHTML = '';
  sortedCards.forEach(card => cardsUser.appendChild(card));
};
