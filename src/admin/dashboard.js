import '../dashboard/users.css'
import logoIcon from '../images/logo.png'
import avatarIcon from '../images/avatar.png'
import jwt_decode from 'jwt-decode'
import renderAdminNav from './adminNav'
import createElement from './adminHome'
import allStories from '../dashboard/allStories'
import allStoriesPopup from '../dashboard/allStoriesPopup'
import renderPage from '../dashboard/dashboardHome'
import renderUserStories from '../dashboard/usersStories'
import adminDrafts from './adminDraft'
import renderPublished from '../dashboard/publishedStories'
import approvedStories from './approvedStories'
import approvedStoriesPopup from './approvedStoriesPopup'
import bookmarkedStories from '../dashboard/savedStories'
import savedStoriesPopup from '../dashboard/savedStoriesPopup'
import { userServices } from '../services/userServices'
import pendingStories from './pendingStories'
import pendingStoriesPopup from './pendingStoriesPopup'
import profile from '../dashboard/profile'

userServices.getAllStoriesAdmin()
userServices.getAllStoriesPublic()
userServices.getUser()
userServices.getAuthorStories()

renderAdminNav()
renderPage()
renderUserStories()
renderPublished()
createElement()
allStoriesPopup()
approvedStoriesPopup()
pendingStoriesPopup()
bookmarkedStories()
savedStoriesPopup()
profile()
adminDrafts()
allStories()
pendingStories()
approvedStories()
const createImages = async () => {
 const datas = await userServices.getUser()
 const profilePic = datas.profilePicture

	const logo = document.createElement('img')
	logo.setAttribute('src', logoIcon)
	document.querySelector('.main-header-logo').appendChild(logo)

	const title = document.createElement('img')
	title.setAttribute('src', `${profilePic || avatarIcon}`)
	document.querySelector('.main-header-avatar').appendChild(title)
}

createImages()

const getToken = () => {
	const token = localStorage.getItem('jwt-token')
	const decoded = jwt_decode(token)
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
	document.querySelector('.approved-state').style.display = 'none'
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
					activeSection.style.display = 'block'
					activeStoryBtn.forEach(list => {
						list.style.color = '#000'
					})
					activeStory.style.color = '#ce6a10'
				}
			})
		})
	})
}

displayStory()

const manageStory = () => {
	document.querySelector('.approved-state').style.display = 'none'
	document.querySelectorAll('.manage-story').forEach(btn => {
		btn.addEventListener('click', e => {
			const myStoryId = e.target.id
			const activeSection = document.querySelector(`.${myStoryId}`)
			const activeStoryBtn = document.querySelectorAll('.manage-story')
			const activeStory = document.querySelector(`#${myStoryId}`)

			document.querySelectorAll('.manage-my-stories').forEach(story => {
				story.style.display = 'none'
				let { className } = story
				className = className.split(' ')[0]
				if (className === myStoryId) {
					activeSection.style.display = 'block'
					activeStoryBtn.forEach(list => {
						list.style.color = '#000'
					})
					activeStory.style.color = '#ce6a10'
				}
			})
		})
	})
}

manageStory()

document.querySelector('#write').addEventListener('click', () => {
	document.querySelector('.created-stories').style.display = 'none'
	document.querySelector('.write-story').style.display = 'block'
})

const togglePreview = () => {
	const previewBtn = document.querySelector('#preview-btn')
	const publishSection = document.querySelector('.publish-section')
	const previewSection = document.querySelector('.preview-section')
	const draftBtn = document.querySelector('#save-draft')
	const updateBtn = document.querySelector('#update-draft')

	previewBtn.addEventListener('click', () => {
		publishSection.classList.toggle('toggle-preview')
		previewSection.classList.toggle('toggle-preview')
		draftBtn.classList.toggle('toggle-preview')
		updateBtn.classList.toggle('toggle-preview')

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
		formData.append('upload_preset', 'boxmonie')

		const res = await fetch('https://api.cloudinary.com/v1_1/boxmonie/image/upload', {
			method: 'POST',
			body: formData,
		})
		const fileImage = await res.json()
		textArea.innerHTML += `<br> <img src=${fileImage.secure_url} alt="" class="preview-img" />`
		image.style.display = 'block'
		image.src = fileImage.secure_url
	})
}

renderImage()

const displayText = e => {
	const textArea = document.querySelector('.text-area')
	const input = document.querySelector('#input-title')

	input.addEventListener('input', e => {
		document.querySelector('#story-title').textContent = e.target.value
	})

	textArea.addEventListener('input', e => {
		document.querySelector('#text').textContent = e.target.textContent
	})
}

const submitStory = () => {
	displayText()
	const btn = document.querySelector('#submit-story')
	btn.addEventListener('click', () => {
		document.querySelector('.preview-img').style.display = 'none'
		document.querySelector('br').style.display = 'none'
		const title = document.querySelector('#story-title').textContent
		const storyText = document.querySelector('#text').textContent
		const location = document.querySelector('#location').value
		const image = document.querySelector('.text-img').getAttribute('src')
		const category = 'General'
		const storyObj = { title, storyText, image, location, category }
		userServices.publishStory(storyObj)
		document.querySelector('.text-area').innerHTML = ''
		document.querySelector('#input-title').value = ''
		document.querySelector('.text-area').innerHTML = ''
		document.querySelector('#input-title').value = ''
		document.querySelector('#text').innerHTML = ''
		document.querySelector('#story-title').innerHTML = ''
		document.querySelector('.text-img').style.display = 'none'
	})
}
submitStory()

const showDrafts = () => {
	document.querySelector('.published').style.display = 'none'
	document.querySelector('#published').style.display = 'flex'

	document.querySelector('#save-draft').addEventListener('click', () => {
		document.querySelector('.preview-img').style.display = 'none'
		document.querySelector('br').style.display = 'none'
		let title = document.querySelector('#story-title').textContent
		let storyText = document.querySelector('#text').textContent
		let location = document.querySelector('#location').value
		let image = document.querySelector('.text-img').getAttribute('src')
		let category = 'General'

		let storyObj = { title, storyText, image, location, category }
		userServices.createStory(storyObj)
		adminDrafts()
		document.querySelector('.text-area').innerHTML = ''
		document.querySelector('#input-title').value = ''
		document.querySelector('#text').innerHTML = ''
		document.querySelector('#story-title').innerHTML = ''
		document.querySelector('.text-img').style.display = 'none'
	})
}
showDrafts()

const updateDraft = () => {
	document.querySelector('.published').style.display = 'none'
	document.querySelector('#published').style.display = 'flex'

	document.querySelector('#update-draft').addEventListener('click', () => {
		document.querySelector('.preview-img').style.display = 'none'
		document.querySelector('br').style.display = 'none'
		let id = document.querySelector('.update').getAttribute('itemname')
		let title = document.querySelector('#story-title').textContent
		let storyText = document.querySelector('#text').textContent
		let location = document.querySelector('#location').value
		let image = document.querySelector('.text-img').getAttribute('src')
		let category = 'General'

		let storyObj = { title, storyText, image, location, category }
		userServices.updateDraft(storyObj, id)
    adminDrafts()
		document.querySelector('.text-area').innerHTML = ''
		document.querySelector('#input-title').value = ''
		document.querySelector('.text-img').style.display = 'none'
	})
}

updateDraft()


const showProfile = () => {
	document.querySelectorAll('.show-profile').forEach(btn => {
		btn.addEventListener('click', () => {
			document.querySelector('.profile').style.display = 'block'
		})
	})
}
showProfile()

const logout = () => {
	document.querySelectorAll('.exit').forEach(btn =>
		btn.addEventListener('click', () => {
			userServices.logout()
			localStorage.clear()
			window.location.assign('/admin.html')
		}),
	)
}
logout()
