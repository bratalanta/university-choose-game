import { AppRoute, Complexity } from '../const';
import { getShuffledArray } from '../common';
import Level1Image from '../../img/level1/*.png';
import Game from '../game';
import getCurrentUserData from '../store';

Game.startLevel();
const { complexity } = getCurrentUserData();
const PicturesCount = {
  [Complexity.Easy]: 8,
  [Complexity.Medium]: 16,
  [Complexity.Hard]: 24,
};
const SearchNumber = {
  2: 'два',
  3: 'три',
  4: 'четыре',
  5: 'пять',
  6: 'шесть',
  7: 'семь',
  8: 'восемь',
  9: 'девять',
};

const shuffledNumbers = getShuffledArray(Object.keys(Level1Image));
const numberToSearch = shuffledNumbers[0];

const containerNumbers = getShuffledArray(shuffledNumbers.slice(0, PicturesCount[complexity]));
const numbersToSearch = containerNumbers.filter(
  (num) => num.charAt(0) === numberToSearch.charAt(0),
);

const searchNumbersInGame = [];

const levelHeaderElement = document.querySelector('.header-level-1');
const numbersListElement = document.querySelector('.numbers-list');
const checkBtn = document.querySelector('.footer__check');
levelHeaderElement.innerText = `Найди все числа ${SearchNumber[numbersToSearch[0].charAt(0)]}`;
numbersListElement.classList.add(complexity);

for (let i = 0; i < containerNumbers.length; i += 1) {
  const item = document.createElement('div');
  item.className = `numbers-list__item numbers-${complexity}`;

  const img = document.createElement('img');
  img.setAttribute('draggable', false);

  img.src = Level1Image[containerNumbers[i]];

  if (numbersToSearch.includes(containerNumbers[i])) {
    const currentNumber = img.src.split('/').at(-1).charAt(0);
    img.dataset.correct = true;
    searchNumbersInGame.push(currentNumber);
  }

  item.appendChild(img);
  numbersListElement.appendChild(item);
}

numbersListElement.addEventListener('click', ({ target }) => {
  target.closest('div').classList.toggle('chosen');
});

checkBtn.addEventListener('click', () => {
  const chosenNumbers = Array.from(numbersListElement.children)
    .map((item) => {
      if (item.classList.contains('chosen')) {
        return item.firstChild.src.split('/').at(-1).charAt(0);
      }

      return null;
    });

  if (chosenNumbers.join('') === searchNumbersInGame.join('')) {
    Game.goNextLevel(AppRoute.Level2);

    return;
  }

  Game.reduceHeartsCount();
  Game.reducePoints();
});
