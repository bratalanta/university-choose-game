import {
  getCurrentUserData, goNextLevel, reduceHeartsCount, reducePoints, startLevel,
} from './common';
import { AppRoute, Complexity } from './const';
import { getRandomInt, getShuffledArray } from './functions';
import Level3Image from '../img/level3/choose/*.png';

startLevel();

const {
  complexity,
} = getCurrentUserData();

const levelHeaderElement = document.querySelector('.header-level-3');
const container = document.querySelector('.pictures');
const checkBtn = document.querySelector('.footer__check');

const HeaderText = {
  v: 'овощи',
  f: 'фрукты',
  b: 'ягоды',
};
const PicturesCount = {
  [Complexity.Easy]: 8,
  [Complexity.Medium]: 10,
  [Complexity.Hard]: 12,
};

const IMAGE_SIZE = '40';
const SAFE_DISTANCE = 15;

const shuffledPictures = getShuffledArray(Object.keys(Level3Image));
const pictureToSearchId = shuffledPictures[0].charAt(0);
const picturePositions = [];
const searchPicturesInGame = [];

levelHeaderElement.innerText = `Найди все ${HeaderText[pictureToSearchId]}`;

for (let i = 0; i < PicturesCount[complexity]; i += 1) {
  const img = document.createElement('img');
  img.src = Level3Image[shuffledPictures[i]];
  img.classList.add('pictures__food');

  let topPosition = getRandomInt(IMAGE_SIZE, container.offsetHeight - IMAGE_SIZE);
  let leftPosition = getRandomInt(IMAGE_SIZE, container.offsetWidth - IMAGE_SIZE);
  let absolutePosition = Math.abs(topPosition + leftPosition);

  while (picturePositions.some(
    (pic) => Math.abs(pic - absolutePosition) < SAFE_DISTANCE,
  ) && i > 0) {
    topPosition = getRandomInt(IMAGE_SIZE, container.offsetHeight - IMAGE_SIZE);
    leftPosition = getRandomInt(IMAGE_SIZE, container.offsetWidth - IMAGE_SIZE);
    absolutePosition = Math.abs(topPosition + leftPosition);
  }

  picturePositions.push(absolutePosition);

  img.style.top = `${topPosition}px`;
  img.style.left = `${leftPosition}px`;

  const currentPictureId = shuffledPictures[i].charAt(0);

  if (currentPictureId === pictureToSearchId) {
    searchPicturesInGame.push(currentPictureId);
  }

  container.append(img);
}

container.addEventListener('click', ({ target }) => (target.classList.contains('pictures__food') ? target.classList.toggle('chosen') : null));

checkBtn.addEventListener('click', () => {
  const chosenPictures = Array.from(container.children)
    .map((item) => {
      if (item.classList.contains('chosen')) {
        return item.src.split('/').at(-1).charAt(0);
      }

      return null;
    });

  if (chosenPictures.join('') === searchPicturesInGame.join('')) {
    goNextLevel(AppRoute.Win);

    return;
  }

  reduceHeartsCount();
  reducePoints();
});
