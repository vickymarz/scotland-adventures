import './users.css'
import jwt_decode from 'jwt-decode'
import renderNav from './nav'
import renderPage from './dashboardHome'
import renderUserStories from './usersStories'
import renderfavouriteStories from './favouriteStory'
import renderPublished from './publishedStories'
import renderDrafts from './drafts'
import { userServices } from '../services/userServices'

renderNav()
renderPage()
renderUserStories()
renderfavouriteStories()
renderPublished()
renderDrafts()

const getToken = () => {
	const token = localStorage.getItem('jwt-token')
	const decoded = jwt_decode(token)
	console.log(decoded)
}

getToken()

const showStories = () => {
	document.querySelectorAll('section').forEach(section => {
		section.style.display = 'none'
	})
	document.querySelector('.main').style.display = 'block'
	document.querySelector('#main').style.color = 'white'
}

showStories()

const navigatePages = () => {
	document.querySelectorAll('.list').forEach(navList => {
		navList.addEventListener('click', e => {
			const list = e.target.id
			const activeSection = document.querySelector(`.${list}`)
			const navList = document.querySelectorAll('.list i')
			const activeList = document.querySelector(`#${list}`)

			document.querySelectorAll('section').forEach(section => {
				section.style.display = 'none'
				let { className } = section
				if (className === list) {
					navList.forEach(list => {
						list.style.color = '#ce6a10'
					})
					activeList.style.color = 'white'
				}
			})
			activeSection.style.display = 'block'
		})
	})
}

navigatePages()

const displayStory = () => {
	document.querySelectorAll('.view-stories').forEach(btn => {
		btn.addEventListener('click', e => {
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
						activeStoryBtn[0].style.color = '#ce6a10'
					})
					activeStory.style.color = '#ce6a10'
					activeStoryBtn[0].style.color = '#ce6a10'
				}
			})
		})
	})
}

displayStory()

document.querySelector('#write').addEventListener('click', () => {
	document.querySelector('.created-stories').style.display = 'none'
	document.querySelector('.write-story').style.display = 'block'
})

const togglePreview = () => {
	const previewBtn = document.querySelector('#preview-btn')
	const publishSection = document.querySelector('.publish-section')
	const previewSection = document.querySelector('.preview-section')
	const draftBtn = document.querySelector('#save-draft')

	previewBtn.addEventListener('click', () => {
		publishSection.classList.toggle('toggle-preview')
		previewSection.classList.toggle('toggle-preview')
		draftBtn.classList.toggle('toggle-preview')

		if (previewBtn.textContent === 'Preview') {
			previewBtn.textContent = 'Continue Writing'
		} else {
			previewBtn.textContent = 'Preview'
		}
	})
}

togglePreview()

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

const renderImage = () => {
	document.querySelector('#file').addEventListener('input', async function (e) {
		const textArea = document.querySelector('.text-area')
		let image = document.querySelector('.text-img')

		const file = e.target.files[0]
		const formData = new FormData()
		formData.append('file', file)
		formData.append('upload_preset', 'scotland_tourism')

		const res = await fetch('https://api.cloudinary.com/v1_1/douramz6e/image/upload', {
			method: 'POST',
			body: formData,
		})
		const fileImage = await res.json()
		console.log(fileImage.secure_url)
		textArea.innerHTML += `<br> <img src=${fileImage.secure_url} alt="" class="preview-img" />`
		image.style.display = 'block'
		image.src = fileImage.secure_url
	})
}

renderImage()

const displayText = e => {
	const textArea = document.querySelector('.text-area')
	const input = document.querySelector('#input-title')

	textArea.addEventListener('input', e => {
		document.querySelector('#text').innerHTML = e.target.innerHTML
	})

	input.addEventListener('input', e => {
		document.querySelector('#story-title').innerHTML = e.target.value
	})
}

const submitStory = () => {
	displayText()
	const btn = document.querySelector('#submit-story')
	btn.addEventListener('click', () => {
		const title = document.querySelector('#story-title').innerHTML
		const storyText = document.querySelector('#text').innerHTML
		const location = document.querySelector('#location').value
		const image = document.querySelector('.text-img').getAttribute('src')
		const category = 'General'
		const storyObj = { title, storyText, image, location, category }
		userServices.publishStory(storyObj)
	})
}
submitStory()

const showDrafts = () => {
	document.querySelector('.published').style.display = 'none'
	document.querySelector('#published').style.display = 'flex'

	document.querySelector('#save-draft').addEventListener('click', () => {
		const title = document.querySelector('#story-title').innerHTML
		const storyText = document.querySelector('#text').innerHTML
		const location = document.querySelector('#location').value
		const image = document.querySelector('.text-img').getAttribute('src')
		const category = 'General'
		const storyObj = { title, storyText, image, location, category }
		userServices.createStory(storyObj)
	})
}

showDrafts()

const logout = () => {
	document.querySelector('.exit').addEventListener('click', () => {
		localStorage.clear()
		window.location.assign('/index.html')
	})
}
logout()
