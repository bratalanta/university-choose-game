import {
  AppRoute, ComplexityExtraPointsFactor, LevelData, NEXT_LEVEL_TRANSITION_TIME, StartFeatures,
  StorageField,
} from './const';
import HeartImage from '../img/game/hearts/*.png';
import ThemeImage from '../img/game/themes/*.jpg';

export const redirect = (evt, path) => {
  evt.preventDefault();

  window.location.replace(path);
};

export const setTheme = (theme) => {
  document.querySelector('.bg').style.background = `url(${ThemeImage[theme]}) no-repeat center`;
};

export const getCurrentUserData = () => (
  {
    name: localStorage.getItem(StorageField.Name),
    theme: localStorage.getItem(StorageField.Theme),
    complexity: localStorage.getItem(StorageField.Complexity),
    lvl: localStorage.getItem(StorageField.Lvl),
    points: localStorage.getItem(StorageField.Points),
    heartsCount: localStorage.getItem(StorageField.HeartsCount),
    timeLeft: localStorage.getItem(StorageField.TimeLeft),
  }
);

export const reducePoints = () => {
  const {
    complexity,
    lvl,
    points,
  } = getCurrentUserData();
  const playerPointsElement = document.querySelector('.player-points__number');

  const reducedPoints = Number(points) + LevelData[lvl].Complexity[complexity].ErrorPoints;

  localStorage.setItem(StorageField.Points, reducedPoints < 0 ? 0 : reducedPoints);
  playerPointsElement.innerText = reducedPoints < 0 ? 0 : reducedPoints;
};

export const reduceHeartsCount = () => {
  const {
    heartsCount,
  } = getCurrentUserData();
  const heartsListElement = document.querySelector('.hearts');

  const firstErrorHeartsCount = StartFeatures.HeartsCount - 1;
  const secondErrorHeartsCount = StartFeatures.HeartsCount - 2;

  switch (heartsCount - 1) {
    case firstErrorHeartsCount:
      heartsListElement.children[firstErrorHeartsCount].src = HeartImage.black_heart;
      localStorage.setItem(StorageField.HeartsCount, firstErrorHeartsCount);
      break;
    case secondErrorHeartsCount:
      heartsListElement.children[secondErrorHeartsCount].src = HeartImage.black_heart;
      localStorage.setItem(StorageField.HeartsCount, secondErrorHeartsCount);
      break;
    default:
      heartsListElement.children[0].src = HeartImage.black_heart;
      window.location.replace(AppRoute.Lose);
  }
};

export const launchTimer = () => {
  const timerElement = document.querySelector('.header__timer');
  const checkBtn = document.querySelector('.footer__check');

  const {
    timeLeft,
    complexity,
    lvl,
  } = getCurrentUserData();

  const launchTime = timeLeft || LevelData[lvl].Complexity[complexity].Time;
  let min = Math.floor(launchTime / 60);
  let sec = launchTime % 60;

  const timer = setInterval(() => {
    if (checkBtn.classList.contains('passed')) {
      clearInterval(timer);

      return;
    }

    localStorage.setItem(StorageField.TimeLeft, min * 60 + sec);
    timerElement.innerText = `0${min}:${sec / 10 >= 1 ? sec : `0${sec}`}`;

    if (sec === 0 && min === 0) {
      window.location.replace(AppRoute.Lose);
      clearInterval(timer);
    }

    sec -= 1;

    if (min < 1 && sec < 10) {
      timerElement.classList.toggle('end');
    }

    if (sec < 0) {
      min -= 1;
      sec = 59;
    }
  }, 1000);
};

export const startLevel = () => {
  const {
    name,
    theme,
    complexity,
    lvl,
    points,
    heartsCount,
  } = getCurrentUserData();

  const authorLink = document.querySelector('.footer__author');
  const playerName = document.querySelector('.level-info__player-name');
  const playerPoints = document.querySelector('.player-points__number');
  const winPoints = document.querySelector('.win-points__number');
  const errorPoints = document.querySelector('.error-points__number');
  const backToHomeLink = document.querySelector('.menu__item-link');
  const heartsList = document.querySelector('.hearts');

  for (let i = 0; i < StartFeatures.HeartsCount - heartsCount; i += 1) {
    if (heartsCount === StartFeatures.HeartsCount) {
      break;
    }

    heartsList.children[StartFeatures.HeartsCount - 1 - i].src = HeartImage.black_heart;
  }

  playerName.innerText = name;
  playerPoints.innerText = points;
  winPoints.innerText = `+${LevelData[lvl].Complexity[complexity].WinPoints}`;
  errorPoints.innerText = LevelData[lvl].Complexity[complexity].ErrorPoints;
  authorLink.style.display = 'none';

  window.addEventListener('load', () => launchTimer());
  backToHomeLink.addEventListener('click', (evt) => redirect(evt, AppRoute.Home));
  setTheme(theme);
};

export const resetStorage = (shouldResetPoints = true) => {
  if (shouldResetPoints) {
    localStorage.setItem(StorageField.Points, StartFeatures.Points);
  }

  localStorage.setItem(StorageField.TimeLeft, '');
  localStorage.setItem(StorageField.Lvl, StartFeatures.Level);
  localStorage.setItem(StorageField.HeartsCount, StartFeatures.HeartsCount);
};

const setPoints = () => {
  const modalExtraPointsElement = document.querySelector('.extra-points__number');
  const {
    complexity,
    points,
    timeLeft,
    lvl,
  } = getCurrentUserData();

  const winPoints = Number(points) + LevelData[lvl].Complexity[complexity].WinPoints;
  const extraPoints = Math.round(timeLeft / ComplexityExtraPointsFactor[complexity]);
  modalExtraPointsElement.innerText = extraPoints;

  localStorage.setItem(StorageField.Points, winPoints + extraPoints);
};

export const goNextLevel = (lvlPath) => {
  const {
    lvl,
  } = getCurrentUserData();

  const modal = document.querySelector('.modal');
  document.querySelector('.footer__check').classList.add('passed');
  modal.classList.remove('hidden');

  setPoints();
  localStorage.setItem(StorageField.Lvl, Number(lvl) + 1);
  localStorage.setItem(StorageField.TimeLeft, '');

  setTimeout(() => {
    window.location.replace(lvlPath);
  }, NEXT_LEVEL_TRANSITION_TIME);
};
