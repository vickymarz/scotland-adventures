import './style.css'
import * as home from './home.js'



document.querySelector('.logo-desktop').innerHTML = home.carousel()
document.querySelector('.stories-container').innerHTML = home.stories()
window.addEventListener('load', home.createElement)

function toggleMenu() {
	document.querySelectorAll('.menu-bar').forEach(element =>
		element.addEventListener('click', () => {
			document.querySelector('.mobile-menu').classList.toggle('active')
		}),
	)
}

toggleMenu()
