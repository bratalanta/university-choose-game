import { redirect, setTheme } from '../common';
import { AppRoute } from '../const';
import getCurrentUserData from '../store';

const {
  theme,
} = getCurrentUserData();
setTheme(theme);

const backToHomeLink = document.querySelector('.rules__back-link');
backToHomeLink.addEventListener('click', (evt) => redirect(evt, AppRoute.Home));
