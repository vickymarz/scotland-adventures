import './users.css'
import * as dashboard from './dashboard/dashboardHome'

window.addEventListener('load', dashboard.createUserElement)

document.querySelector('#stories-container').innerHTML = dashboard.recommendedStories()

document.querySelector('.view-notification').innerHTML = dashboard.notifications()

document.querySelector('.favourites').innerHTML = dashboard.savedStories()

document.querySelectorAll('.list').forEach(e => {
	e.addEventListener('click', displayPage)
})

function displayPage(e) {
	const list = e.target.id
	const activeSection = document.querySelector(`.${list}`)

	document.querySelectorAll('section').forEach(section => {
		section.style.display = 'none'
		let { className } = section
		if (className === list) {
			activeSection.style.display = 'block'
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

// window.onload = () => imageAdder()
