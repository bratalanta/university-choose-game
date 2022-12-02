import {
  AppRoute, ComplexityExtraPointsFactor, LevelData, NEXT_LEVEL_TRANSITION_TIME, StartFeatures,
  StorageField,
} from './const';
import HeartImage from '../img/game/hearts/*.png';
import getCurrentUserData from './store';
import { redirect, setTheme } from './common';

export default class Game {
  static reducePoints() {
    const {
      complexity,
      lvl,
      points,
    } = getCurrentUserData();
    const playerPointsElement = document.querySelector('.player-points__number');

    const reducedPoints = Number(points) + LevelData[lvl].Complexity[complexity].ErrorPoints;

    localStorage.setItem(StorageField.Points, reducedPoints < 0 ? 0 : reducedPoints);
    playerPointsElement.innerText = reducedPoints < 0 ? 0 : reducedPoints;
  }

  static reduceHeartsCount() {
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
  }

  static _launchTimer() {
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
  }

  static startLevel() {
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
    const levelJumpLinks = document.querySelectorAll('.progress-bar__level--link');

    if (levelJumpLinks) {
      for (const link of levelJumpLinks) {
        link.addEventListener('click', (evt) => {
          localStorage.setItem(StorageField.Lvl, link.innerText);
          localStorage.setItem(StorageField.TimeLeft, '');
          redirect(evt, `/${evt.target.href.split('/').at(-1)}`);
        });
      }
    }

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

    window.addEventListener('load', () => this._launchTimer());
    backToHomeLink.addEventListener('click', (evt) => redirect(evt, AppRoute.Home));
    setTheme(theme);
  }

  static _setPoints() {
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
  }

  static goNextLevel(lvlPath) {
    const {
      lvl,
    } = getCurrentUserData();

    const modal = document.querySelector('.modal');
    document.querySelector('.footer__check').classList.add('passed');
    modal.classList.remove('hidden');

    this._setPoints();
    localStorage.setItem(StorageField.Lvl, Number(lvl) + 1);
    localStorage.setItem(StorageField.TimeLeft, '');

    setTimeout(() => {
      window.location.replace(lvlPath);
    }, NEXT_LEVEL_TRANSITION_TIME);
  }
}
