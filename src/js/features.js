export const togglePreloader = isNone => {
  const reloadBtn = document.getElementById('reload');

  setTimeout(() => {
    reloadBtn.style.animation = isNone ? 'none' : 'reload 600ms infinite linear'
    reloadBtn.style.cursor = isNone ? 'pointer' : 'not-allowed';
    reloadBtn.disabled = !isNone;
  }, isNone ? 500 : 0);
};

let timeout;

export const showErrorAlert = (message, isNone) => {
  const errorAlert = document.getElementById('alert-error');
  const errorAlertMessage = document.getElementsByClassName('alert-error-message')[0];

  errorAlertMessage.innerText = message;
  errorAlert.style.display = 'flex';
  errorAlert.style.opacity = '1';

  if (timeout) {
    clearTimeout(timeout);
  }

  if (!isNone && errorAlert.style.display === 'flex') {
    timeout = setTimeout(() => {
      errorAlert.style.opacity = '0';

      setTimeout(() => {
        errorAlertMessage.innerText = '';
        errorAlert.style.display = 'none';
      }, 1000);
    }, 5000);
  }
};

export const fetchData = async (url, init) => {
  togglePreloader();

  const data = await fetch(url, init)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      togglePreloader(true);
      showErrorAlert(error.message || 'Oops...Something went wrong!');
      console.error('There was a problem with the fetch operation:', error);
    }).finally(() => togglePreloader(true));

  return data;
};
