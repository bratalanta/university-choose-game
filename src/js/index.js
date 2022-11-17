import {
  AppRoute, Complexity, DEFAULT_THEME, StartFeatures, StorageField,
} from './const';
import { getCurrentUserData, redirect, setTheme } from './common';
import ThemeImage from '../img/game/themes/*.jpg';

const {
  theme: chosenTheme,
  complexity,
  name,
} = getCurrentUserData();

const ComplexityColor = {
  [Complexity.Easy]: 'green',
  [Complexity.Medium]: 'orange',
  [Complexity.Hard]: 'red',
};

setTheme(chosenTheme || DEFAULT_THEME);
let isInputValid = false;

if (name) {
  document.querySelector('.enter-game__username').innerText = name;
  isInputValid = true;
} else {
  document.querySelector('.logout').classList.add('hidden');
  document.querySelector('.login').classList.remove('hidden');
}

const handleThemeChange = ({ target }) => {
  document.querySelector('.bg').style.background = `url(${ThemeImage[target.value]}) no-repeat center`;
  localStorage.setItem(StorageField.Theme, target.value);
};

const handleInputChange = ({ target }) => {
  const error = document.querySelector('.enter-game__error');

  if (target.value && !target.value.includes(' ')) {
    error.classList.remove('active');
    isInputValid = true;
  } else {
    error.classList.add('active');
    isInputValid = false;
  }
};

const handleComplexityColorChange = (evt) => {
  const { target } = evt;
  target.style.color = ComplexityColor[target.value];
  localStorage.setItem(StorageField.Complexity, target.value);
};

const handleStartButtonClick = (evt) => {
  evt.preventDefault();
  const error = document.querySelector('.enter-game__error');

  if (!isInputValid) {
    error.classList.add('active');
    return;
  }

  const {
    name: userName,
  } = getCurrentUserData();

  const inputName = document.querySelector('.enter-game__input').value;
  const theme = document.querySelector('#theme').value;
  const complexityElementValue = document.querySelector('#complexity').value;

  localStorage.setItem(StorageField.Name, inputName || userName);
  localStorage.setItem(StorageField.Theme, theme);
  localStorage.setItem(StorageField.Complexity, complexityElementValue);
  localStorage.setItem(StorageField.Lvl, StartFeatures.Level);
  localStorage.setItem(StorageField.Points, StartFeatures.Points);
  localStorage.setItem(StorageField.HeartsCount, StartFeatures.HeartsCount);
  localStorage.setItem(StorageField.TimeLeft, '');

  window.location.replace(AppRoute.Level1);
};

const handleLogoutButtonClick = () => {
  localStorage.removeItem(StorageField.Name);
  document.querySelector('.logout').classList.add('hidden');
  document.querySelector('.login').classList.remove('hidden');
  isInputValid = false;
};

const startButton = document.querySelector('.main__play-link');
startButton.addEventListener('click', handleStartButtonClick);

const enterGameInput = document.querySelector('.enter-game__input');
enterGameInput.addEventListener('input', handleInputChange);

const themeSelector = document.querySelector('#theme');
themeSelector.value = chosenTheme || DEFAULT_THEME;
themeSelector.addEventListener('change', handleThemeChange);

const rulesLink = document.querySelector('.rules__link');
rulesLink.addEventListener('click', (evt) => redirect(evt, AppRoute.Rules));

const complexitySelector = document.querySelector('#complexity');
complexitySelector.value = complexity || Complexity.Easy;
complexitySelector.style.color = ComplexityColor[complexitySelector.value];
complexitySelector.addEventListener('change', handleComplexityColorChange);

const logoutButton = document.querySelector('.enter-game__unlog');
logoutButton.addEventListener('click', handleLogoutButtonClick);
