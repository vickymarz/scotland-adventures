import './style.css'
import * as home from './home.js'
import * as more from './viewMoreStories.js'
import signUp from './signUp.js'
import login from './login.js'
// import './utils'


document.querySelector('.stories-container').innerHTML = home.stories()
document.querySelector('.adventures').innerHTML = home.adventures()

document.querySelector('#more-stories').innerHTML = more.moreStories()

document.querySelector('.signup-section').innerHTML = signUp()
document.querySelector('.login-section').innerHTML = login()

window.addEventListener('load', home.createElement)


const hideSection = () => {
  const viewMore = document.querySelector('#more-stories')
  const sections = document.querySelectorAll('section')
  sections.forEach(section => {
    section.style.display = 'none',
    viewMore.style.display = 'block'
  })
  
}

const showSection = () => {
  const viewMore = document.querySelector('#more-stories')
  const sections = document.querySelectorAll('section')
  sections.forEach(section => {
    section.style.display = 'block',
    viewMore.style.display = 'none'
  })
  
}

const storiesBtn = document.querySelector('#arrow')
storiesBtn.addEventListener('click', hideSection)

const returnBtn = document.querySelector('#arrow-back')
returnBtn.addEventListener('click', showSection)


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
	console.log(modalButtons)
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
