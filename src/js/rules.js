import {getCurrentUserData, redirect, setTheme} from './common.js'
import { AppRoute } from './const.js'

const {
    theme
} = getCurrentUserData()
console.log(theme)
setTheme(theme)

const backToHomeLink = document.querySelector('.rules__back-link')
backToHomeLink.addEventListener('click', (evt) => redirect(evt, AppRoute.Home))
