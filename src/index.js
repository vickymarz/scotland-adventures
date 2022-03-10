import './style.css'
import * as home from './home.js'
import * as more from './viewMore.js'
import signUp from './signUp.js'
import login from './login.js'
import readStories from './readStories.js'
import interSectionObserver from './animation.js'

interSectionObserver()

document.querySelector('.stories-container').innerHTML = home.stories()
document.querySelector('.adventures').innerHTML = home.adventures()
document.querySelector('.adventure-ideas').innerHTML = home.adventureIdeas()

document.querySelector('#more-stories').innerHTML = more.moreStories()

document.querySelector('#more-history').innerHTML = more.moreHistory()

document.querySelector('#more-adventures').innerHTML = more.moreAdventures()

document.querySelector('.signup-section').innerHTML = signUp()
document.querySelector('.login-section').innerHTML = login()
document.querySelector('.more-stories-popup').innerHTML = readStories()

window.addEventListener('load', home.createElement)

const moreStories = () => {
	const viewMore = document.querySelector('#more-stories')
	const sections = document.querySelectorAll('.section')
	sections.forEach(section => {
		;(section.style.display = 'none'), (viewMore.style.display = 'block')
	})
}

const lessStories = () => {
	const viewMore = document.querySelector('#more-stories')
	const sections = document.querySelectorAll('.section')
	sections.forEach(section => {
		;(section.style.display = 'block'), (viewMore.style.display = 'none')
	})
}

const moreHistory = () => {
	const viewMore = document.querySelector('#more-history')
	const sections = document.querySelectorAll('.section')
	sections.forEach(section => {
		;(section.style.display = 'none'), (viewMore.style.display = 'block')
	})
}

const lessHistory = () => {
	const viewMore = document.querySelector('#more-history')
	const sections = document.querySelectorAll('.section')
	sections.forEach(section => {
		;(section.style.display = 'block'), (viewMore.style.display = 'none')
	})
}

const moreAdventures = () => {
	const viewMore = document.querySelector('#more-adventures')
	const sections = document.querySelectorAll('.section')
	sections.forEach(section => {
		;(section.style.display = 'none'), (viewMore.style.display = 'block')
	})
}

const lessAdventures = () => {
	const viewMore = document.querySelector('#more-adventures')
	const sections = document.querySelectorAll('.section')
	sections.forEach(section => {
		;(section.style.display = 'block'), (viewMore.style.display = 'none')
	})
}

document.querySelector('#arrow').addEventListener('click', moreStories)

document.querySelector('#span').addEventListener('click', lessStories)

document.querySelector('#history-btn').addEventListener('click', moreHistory)

document.querySelector('#back').addEventListener('click', lessHistory)

document.querySelector('#adventure-btn').addEventListener('click', moreAdventures)

document.querySelector('#back-btn').addEventListener('click', lessAdventures)

function toggleMenu() {
	document.querySelectorAll('.menu-bar').forEach(element =>
		element.addEventListener('click', () => {
			document.querySelector('.mobile-menu').classList.toggle('active')
		}),
	)
}

toggleMenu()

const openModal = () => {
	const modalButtons = Array.from(document.querySelectorAll('.popup'))
	const modals = Array.from(document.querySelectorAll('.modal'))

	const modalButtonZip = modalButtons.map((button, i) => [button, modals[i]])

	modalButtonZip.forEach(pair => {
		pair[0].addEventListener('click', () => {
			pair[1].style.display = 'block'
		})
	})
}
openModal()

const closeModal = () => {
	document.querySelectorAll('.cancel').forEach(close => {
		close.addEventListener('click', () => {
			document.querySelectorAll('.modal').forEach(modal => {
				modal.style.display = 'none'
			})
		})
	})
}
closeModal()
