const outputDiv = document.getElementById('output');
const inputField = document.getElementById('input');

inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleCommand();
  }
});

inputField.focus();
