import './users.css'
import * as dashboard from './dashboard/dashboardHome'
import userStories from './dashboard/usersStories'

window.addEventListener('load', dashboard.createUserElement)

document.querySelector('#stories-container').innerHTML = dashboard.recommendedStories()

document.querySelector('.view-notification').innerHTML = dashboard.notifications()

document.querySelector('.favourites').innerHTML = dashboard.savedStories()

document.querySelector('.users-stories-popup').innerHTML = userStories()

document.querySelectorAll('.list').forEach(e => {
	e.addEventListener('click', displayPage)
})

function displayPage(e) {
	const list = e.target.id
	const activeSection = document.querySelector(`.${list}`)
	const navList = document.querySelectorAll('.list i')
	const activeList = document.querySelector(`#${list}`)
	
	document.querySelectorAll('section').forEach(section => {
		section.style.display = 'none'
		let { className } = section
		if (className === list) {
			activeSection.style.display = 'block'
			navList.forEach(list => {
				list.style.color = '#ce6a10'
			})
			activeList.style.color = 'white'
		} 
	})
}

let defaultBtn = document.querySelector('#file')
let image = document.querySelector('.text-img')
defaultBtn.addEventListener('change', function (e) {

	const file = e.target.files[0]
	if (file) {
		const reader = new FileReader();
		reader.onload = function() {
			const result = reader.result
			image.src = result
		}
		reader.readAsDataURL(file)
	}
	if (this.value) {
		let value = this.value
		updateImg(value)
		console.log(value);
	}
})

function updateImg (value) {
	let content = document.querySelector('#text-area')
	content.value = content.value + "\n" + value
}

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
