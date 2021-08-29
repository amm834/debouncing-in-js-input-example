const debounce = (callback, wait = 1000) => {
  let timeoutId = null;
  return function(...args) {
    clearTimeout(timeoutId);
    const next = () => callback.apply(this, args);
    timeoutId = setTimeout(next, wait);
  }
}

const input = document.querySelector('input');
const showData = document.querySelector('#show-data');

const setInputData = () => {
  showData.textContent = input.value;
}

input.addEventListener('input', debounce(setInputData));
