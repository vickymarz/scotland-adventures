import './style.css'
import renderHomePage from './home.js'
import renderViewMorePages from './viewMore'
import signUp from './signUp.js'
import login from './login.js'
import readStories from './readStories.js'
import interSectionObserver from './animations.js'

renderHomePage()
renderViewMorePages()
signUp()
document.querySelector('.login-section').innerHTML = login()
document.querySelector('.more-stories-popup').innerHTML = readStories()

interSectionObserver()

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

const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm_password')

const eye = Array.from(document.querySelectorAll('.eye'))
eye[0].addEventListener('click', () => hideOrShow(password))
eye[1].addEventListener('click', () => hideOrShow(confirmPassword))

const hideOrShow = inputField => {
	if (inputField.getAttribute('type') === 'password') {
		inputField.setAttribute('type', 'text')
	} else {
		inputField.setAttribute('type', 'password')
	}
}
