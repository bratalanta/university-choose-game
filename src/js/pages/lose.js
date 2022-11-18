import { redirect, setTheme } from '../common';
import { AppRoute } from '../const';
import getCurrentUserData, { resetStorage } from '../store';

const {
  points,
  theme,
} = getCurrentUserData();
setTheme(theme);

const playerPoints = document.querySelector('.content__points-number');
const restartGameLink = document.querySelector('.content__lose-link-restart');
const backHomeLink = document.querySelector('.content__lose-link-home');

playerPoints.innerText = points;

restartGameLink.addEventListener('click', (evt) => {
  resetStorage();
  redirect(evt, AppRoute.Level1);
});
backHomeLink.addEventListener('click', (evt) => redirect(evt, AppRoute.Home));
