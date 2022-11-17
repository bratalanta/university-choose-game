import {
  getCurrentUserData, startLevel, reduceHeartsCount, goNextLevel, reducePoints,
} from './common.js';
import { AppRoute, Complexity } from './const.js';
import { getRandomInt, getShuffledArray } from './functions.js';
import Level1Image from '../img/level1/*.png';

startLevel();

const PicturesCount = {
  [Complexity.Easy]: 8,
  [Complexity.Medium]: 16,
  [Complexity.Hard]: 24,
};
const SearchNumber = {
  2: 'два',
  4: 'четыре',
  6: 'шесть',
};
const {
  complexity,
} = getCurrentUserData();

const shuffledNumbers = getShuffledArray(Object.keys(Level1Image));
const shuffledSearchNumbers = getShuffledArray([...Object.keys(SearchNumber)]);
const numberToSearch = shuffledSearchNumbers[0];
const searchNumbersInGame = [];

const levelHeaderElement = document.querySelector('.header-level-1');
const numbersListElement = document.querySelector('.numbers-list');
const checkBtn = document.querySelector('.footer__check');

const createNumbersList = (listLength, level) => {
  // зарандомим индекс, он будет использоваться для страховочного числа, и будет вставляться в картинку
  // из cписка
  const insertTruthyNumberIndex = getRandomInt(0, listLength - 1);
  // Для подстраховки, чтобы был хотя бы одно число, которое нуЖно найти - найдем его индекс в
  // shuffledNumbers и добавим в картинку, затем удалим его из shuffledNumbers, чтобы
  // случайно еще раз такую Же картинку не вывести
  const firstTruthyNumberIndex = shuffledNumbers.findIndex((el) => el.charAt(0) === numberToSearch);

  for (let i = 0; i < listLength; i++) {
    const item = document.createElement('div');
    item.className = `numbers-list__item numbers-${level}`;

    const img = document.createElement('img');
    img.setAttribute('draggable', false);

    if (i === insertTruthyNumberIndex) {
      img.src = Level1Image[shuffledNumbers[firstTruthyNumberIndex]];
      shuffledNumbers.splice(firstTruthyNumberIndex, 1);
    } else {
      img.src = Level1Image[shuffledNumbers[i]];
    }

    if (shuffledNumbers[i].charAt(0) === numberToSearch) {
      img.dataset.correct = true;
    }

    item.appendChild(img);
    const currentNumber = img.src.split('/').at(-1).charAt(0);

    if (currentNumber === numberToSearch) {
      searchNumbersInGame.push(currentNumber);
    }

    numbersListElement.appendChild(item);
  }
};

const createHeaderText = (numberWord) => {
  levelHeaderElement.innerText = `Найди все числа ${numberWord}`;
};

switch (complexity) {
  case Complexity.Easy:
    createHeaderText(SearchNumber[numberToSearch]);
    createNumbersList(PicturesCount[Complexity.Easy], Complexity.Easy);
    break;
  case Complexity.Medium:
    numbersListElement.classList.add(Complexity.Medium);
    createHeaderText(SearchNumber[numberToSearch]);
    createNumbersList(PicturesCount[Complexity.Medium], Complexity.Medium);
    break;
  case Complexity.Hard:
    numbersListElement.classList.add(Complexity.Hard);
    createHeaderText(SearchNumber[numberToSearch]);
    createNumbersList(PicturesCount[Complexity.Hard], Complexity.Hard);
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
    });

  if (chosenNumbers.join('') === searchNumbersInGame.join('')) {
    goNextLevel(AppRoute.Level2);

    return;
  }

  reduceHeartsCount();
  reducePoints();
});
