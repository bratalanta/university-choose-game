import { AppRoute, Complexity } from '../const';
import { getRandomInt, getShuffledArray } from '../common';
import Level2Image from '../../img/level2/*.png';
import getCurrentUserData from '../store';
import Game from '../game';

Game.startLevel();
const {
  complexity,
} = getCurrentUserData();

const container = document.querySelector('.content-full');
const checkBtn = document.querySelector('.footer__check');

const PicturesCount = {
  [Complexity.Easy]: 8,
  [Complexity.Medium]: 14,
  [Complexity.Hard]: 20,
};

const IMAGE_SIZE = '70';
const CONTAINER_SEPARATOR_OFFSET_LEFT = container.offsetWidth / 2 - IMAGE_SIZE / 2;
const OFFSCREEN_POSITION = 999999;

const shuffledAnimals = getShuffledArray(Object.keys(Level2Image));

// обработка переноса
let dx = 0;
let dy = 0;
let correctTopPosition = 0;
let correctLeftPosition = 0;

const handleDragStart = (evt) => {
  dx = evt.clientX - evt.target.offsetLeft;
  dy = evt.clientY - evt.target.offsetTop;

  const ghostImg = evt.target.cloneNode(true);
  evt.dataTransfer.setDragImage(ghostImg, OFFSCREEN_POSITION, OFFSCREEN_POSITION);
};

const handleDrag = (evt) => {
  const { target } = evt;

  if (evt.clientY - dy >= 0 && evt.clientY - dy < container.offsetHeight - IMAGE_SIZE) {
    target.style.top = `${evt.clientY - dy}px`;
    correctTopPosition = evt.clientY - dy;
  }

  if (evt.clientX - dx >= 0 && evt.clientX - dx < container.offsetWidth - IMAGE_SIZE) {
    target.style.left = `${evt.clientX - dx}px`;
    correctLeftPosition = evt.clientX - dx;
  }
};

const handleDragEnd = (evt) => {
  const { target } = evt;

  target.style.left = `${correctLeftPosition}px`;
  target.style.top = `${correctTopPosition}px`;
};

document.addEventListener('dragover', (evt) => {
  evt.preventDefault();
});

document.addEventListener('dragenter', (evt) => {
  evt.preventDefault();
});

for (let i = 0; i < PicturesCount[complexity]; i += 1) {
  const img = document.createElement('img');
  img.setAttribute('draggable', true);
  img.src = Level2Image[shuffledAnimals[i]];

  img.style.top = `${getRandomInt(IMAGE_SIZE, container.offsetHeight - IMAGE_SIZE)}px`;
  img.style.left = `${getRandomInt(IMAGE_SIZE, container.offsetWidth - IMAGE_SIZE)}px`;

  container.append(img);

  img.addEventListener('dragstart', handleDragStart);
  img.addEventListener('drag', handleDrag);
  img.addEventListener('dragend', handleDragEnd);
}

checkBtn.addEventListener('click', () => {
  const leftSide = [];
  const rightSide = [];

  Array.from(container.children).forEach((item) => {
    if (item.tagName === 'DIV') {
      return;
    }

    const itemId = item.src.split('/').at(-1).charAt(0);

    if (item.offsetLeft <= CONTAINER_SEPARATOR_OFFSET_LEFT) {
      leftSide.push(itemId);

      return;
    }

    rightSide.push(itemId);
  });

  const areElementsDividedCorrectly = leftSide.every((el) => el === leftSide[0])
        && rightSide.every((el) => el === rightSide[0]);

  if (areElementsDividedCorrectly) {
    Game.goNextLevel(AppRoute.Level3);

    return;
  }

  Game.reduceHeartsCount();
  Game.reducePoints();
});
