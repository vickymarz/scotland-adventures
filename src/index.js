import './style.css'
import signUp from './signUp.js'
import login from './login.js'
import recoverPassword from './recoverPassword'
import renderHomePage from './home'
import readStories from './readStories'
import popularStories from './popularStories'
import morePopularStories from './morePopularStories'
import popularStoriesPopup from './popularStoriesPopup'
import renderViewMorePages from './viewMore'
import interSectionObserver from './animations.js'
import { userServices } from './services/userServices'

userServices.getAllStoriesPublic()
signUp()
login()
recoverPassword()
renderHomePage()
readStories()
morePopularStories()
popularStoriesPopup()
renderViewMorePages()
interSectionObserver()
popularStories()


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
	const moreBtn = Array.from(document.querySelectorAll('.open'))
	const modals = Array.from(document.querySelectorAll('.modal'))
	const popups = Array.from(document.querySelectorAll('.modal-popups'))
	const modalButtonZip = modalButtons.map((button, i) => [button, modals[i]])

	const moreBtnZip = moreBtn.map((button, i) => [button, popups[i]])
	modalButtonZip.forEach(pair => {
		pair[0].addEventListener('click', () => {
			pair[1].style.display = 'block'
		})
	})

	moreBtnZip.forEach(pair => {
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

	document.querySelectorAll('.cancelled').forEach(close => {
		close.addEventListener('click', () => {
			document.querySelectorAll('.modal-popups').forEach(modal => {
				modal.style.display = 'none'
			})
		})
	})

	document.querySelector('#close-recovery').addEventListener('click', () => {
		document.querySelector('.modals').style.display = "none"
	 })
}
closeModal()

const loginPopup = () => {
	document.querySelector('.show-login').addEventListener('click', () => {
		document.querySelector('#show-signup').style.display = 'none'
		document.querySelector('#show-login').style.display = 'block'
	})
}
loginPopup()

const signupPopup = () => {
	document.querySelector('.show-signin').addEventListener('click', () => {
		document.querySelector('#show-signup').style.display = 'block'
		document.querySelector('#show-login').style.display = 'none'
	})
}
signupPopup()

const passwordRecoveryPopup = () => {
	document.querySelector('.recover-password').addEventListener('click', () => {
		document.querySelector('#recover-password').style.display = 'block'
		document.querySelector('#show-login').style.display = 'none'
	})
}
passwordRecoveryPopup()

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
