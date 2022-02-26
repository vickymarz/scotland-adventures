import './style.css'
import favIcon from './images/favourite.png'
import avatarIcon from './images/avatar.png'

const favourite = document.createElement('img')
favourite.setAttribute('src', favIcon)
document.querySelector('.favourite').appendChild(favourite)

const avatar = document.createElement('img')
avatar.setAttribute('src', avatarIcon)
document.querySelector('.avatar').appendChild(avatar)