import './users.css'
import * as dashboard from './dashboard/dashboardHome'
import userStories from './dashboard/usersStories'
import favouriteStories from './dashboard/favouriteStory'

window.addEventListener('load', dashboard.createUserElement)

document.querySelector('#stories-container').innerHTML = dashboard.recommendedStories()

document.querySelector('.view-notification').innerHTML = dashboard.notifications()

document.querySelector('.favourites').innerHTML = dashboard.savedStories()

document.querySelector('.users-stories-popup').innerHTML = userStories()

document.querySelector('.favourite-stories-popup').innerHTML = favouriteStories()

document.querySelectorAll('.list').forEach(e => {
	e.addEventListener('click', displayPage)
})

document.querySelectorAll('.view-stories').forEach(e => {
	e.addEventListener('click', displayStory)
})

document.querySelector('#write').addEventListener('click', () => {
	document.querySelector('.created-stories').style.display = 'none'
	document.querySelector('.write-story').style.display = 'block'
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

function displayStory(e) {
	const myStoryId = e.target.id
	const activeSection = document.querySelector(`.${myStoryId}`)
	const activeStoryBtn = document.querySelectorAll('.view-stories')
	const activeStory = document.querySelector(`#${myStoryId}`)
	
	document.querySelectorAll('.my-stories').forEach(story => {
		story.style.display = 'none'
		let { className } = story
		className = className.split(' ')[0]
		if (className === myStoryId) {
			activeSection.style.display = 'flex'
			activeStoryBtn.forEach(list => {
				list.style.color = '#000'
			})
			activeStory.style.color = '#ce6a10'
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
