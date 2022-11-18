import { redirect, setTheme } from '../common';
import { AppRoute, ComplexityTranslation } from '../const';
import getCurrentUserData from '../store';

const totalPointsElement = document.querySelector('.content__points-number');
const downloadBtn = document.querySelector('.download');
const backHomeLink = document.querySelector('.content__win-link-home');

const {
  points,
  name,
  complexity,
  heartsCount,
  theme,
} = getCurrentUserData();
setTheme(theme);
totalPointsElement.innerText = points;

const downloadFile = (content, fileName) => {
  const a = document.createElement('a');
  const file = new Blob([content], { type: 'text/plain' });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
};

const handleDownloadBtnClick = () => {
  const textarea = document.createElement('textarea');
  const now = new Date();

  textarea.value = `
        ${name}! Твой результат прохождения игры "Выбери нужное" на уровне сложности "${ComplexityTranslation[complexity]}":\n
        Очки: ${points}
        Осталось жизней: ${heartsCount}

        ${now.toLocaleDateString()}
        `;

  const fileName = `${name}_${now.toLocaleTimeString()}.txt`;
  downloadFile(textarea.value, fileName);
};

downloadBtn.addEventListener('click', handleDownloadBtnClick);
backHomeLink.addEventListener('click', (evt) => redirect(evt, AppRoute.Home));
