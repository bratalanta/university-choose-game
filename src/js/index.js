import {AppRoute, Complexity, StartFeatures, StorageField} from './const.js'
import {getCurrentUserData, redirect, setTheme} from './common.js'
import ThemeImage from '../img/game/themes/*.jpg';

const {
    theme: chosenTheme,
    complexity
} = getCurrentUserData()

const ComplexityColor = {
    [Complexity.Easy]: 'green',
    [Complexity.Medium]: 'orange',
    [Complexity.Hard]: 'red',
}

setTheme(chosenTheme)

let isInputValid = false

const handleThemeChange = ({target}) => {
    document.querySelector('.bg').style.background = `url(${ThemeImage[target.value]}) no-repeat center`
    localStorage.setItem(StorageField.Theme, target.value)
}

const handleInputChange = (evt) => {
    const error = document.querySelector('.enter-game__error')

    if (evt.target.value && !evt.target.value.includes(' ')) {
        error.classList.remove('active')
        isInputValid = true
    } else {
        error.classList.add('active')
        isInputValid = false
    }
}

const handleComplexityColorChange = ({target}) => {
    target.style.color = ComplexityColor[target.value]
    localStorage.setItem(StorageField.Complexity, target.value)
}

const handleStartButtonClick = (evt) => {
    evt.preventDefault()
    const error = document.querySelector('.enter-game__error')

    if (!isInputValid) {
        error.classList.add('active')
        return
    }

    const name = document.querySelector('.enter-game__input').value
    const theme = document.querySelector('#theme').value
	const complexity = document.querySelector('#complexity').value

    localStorage.setItem(StorageField.Name, name);
	localStorage.setItem(StorageField.Theme, theme);
	localStorage.setItem(StorageField.Complexity, complexity);
	localStorage.setItem(StorageField.Lvl, StartFeatures.Level);
	localStorage.setItem(StorageField.Points, StartFeatures.Points);
	localStorage.setItem(StorageField.HeartsCount, StartFeatures.HeartsCount);
    localStorage.setItem(StorageField.TimeLeft, '');

	location.replace(AppRoute.Level1)
}

const startButton = document.querySelector('.enter-game__link')
startButton.addEventListener('click', handleStartButtonClick)

const enterGameInput = document.querySelector('.enter-game__input')
enterGameInput.addEventListener('input', handleInputChange)

const themeSelector = document.querySelector('#theme')
themeSelector.value = chosenTheme ? chosenTheme : themeSelector.value
themeSelector.addEventListener('change', handleThemeChange)

const rulesLink = document.querySelector('.rules__link')
rulesLink.addEventListener('click', (evt) => redirect(evt, AppRoute.Rules))

const complexitySelector = document.querySelector('#complexity')
complexitySelector.value = complexity ? complexity : complexitySelector.value
complexitySelector.style.color = ComplexityColor[complexitySelector.value]
complexitySelector.addEventListener('change', handleComplexityColorChange)
