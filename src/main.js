import './style.css';
import validator from 'validator';

const submitBtn = document.getElementById('submitbtn');
const advice = document.getElementById('advice');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const infoUser = document.getElementById('infouser').value;
  const selectedOption = document.getElementById('validator-type').value;

  if (selectedOption === 'email') {
    if (validator.isEmail(infoUser)) {
      advice.innerHTML = 'Endereço de e-mail é válido';
    } else {
      advice.innerHTML = 'Endereço de e-mail não é válido';
    }
  } else if (selectedOption === 'cpf') {
    if (validator.isTaxID(infoUser, 'pt-BR')) {
      advice.innerHTML = 'Este CPF é válido';
    } else {
      advice.innerHTML = 'Este CPF não é válido';
    }
  }
});
