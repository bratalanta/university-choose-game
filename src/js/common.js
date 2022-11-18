import ThemeImage from '../img/game/themes/*.jpg';

export const redirect = (evt, path) => {
  evt.preventDefault();

  window.location.replace(path);
};

export const setTheme = (theme) => {
  document.querySelector('.bg').style.background = `url(${ThemeImage[theme]}) no-repeat center`;
};

export const getShuffledArray = (array) => {
  const arr = [...array];

  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

export const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};
