import './style.css'
import * as home from './home.js'
import * as more from './viewMoreStories.js'



document.querySelector('.logo-desktop').innerHTML = home.carousel()

document.querySelector('.stories-container').innerHTML = home.stories()
document.querySelector('.adventures').innerHTML = home.adventures()

window.addEventListener('load', home.createElement)

document.querySelector('#more-stories').innerHTML = more.moreStories()

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
