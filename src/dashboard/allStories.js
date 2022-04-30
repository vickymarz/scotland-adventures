import { userServices } from '../services/userServices'
import avatarIcon from '../images/avatar.png'

const renderAllStories = stories => {
	const content = document.querySelector('.stories-container-dashboard')
	stories.forEach((story) => {
		const { authorFirstName, authorLastName, title, image, storyText, profilePicture, id } = story
			content.innerHTML += `
<div class="recommended-stories">
	<div class="story-description">
    <div class="author">
			<img src=${profilePicture || avatarIcon} alt="author" />
			<span>${authorFirstName}  ${authorLastName}</span>
		</div>
		<div class="recommended-story">
			<h2 class="popup show-all">${title}</h2>
			<p class="favourite-story-desc">${storyText}</p>
      <span><i class="fa fa-bookmark bookmark" id=${id}></i></span>
		</div>
  </div>
	<div class="story-img">
		<img src=${image} alt="image"/>
	</div>
</div>
`
	})

	document.querySelectorAll('.bookmark').forEach(bookmarkBtn => {
		bookmarkBtn.addEventListener('click', bookmark)
	})

	const modalButtons = Array.from(document.querySelectorAll('.show-all'))
	const modals = Array.from(document.querySelectorAll('.more-popup'))

	const modalButtonZip = modalButtons.map((button, i) => [button, modals[i]])

	modalButtonZip.forEach(pair => {
		pair[0].addEventListener('click', () => {
			pair[1].style.display = 'block'
		})
	})

	document.querySelectorAll('.cancel').forEach(close => {
		close.addEventListener('click', () => {
			document.querySelectorAll('.more-popup').forEach(modal => {
				modal.style.display = 'none'
			})
		})
	})
}

const allStories = async () => {
	const datas = await userServices.getAllStoriesPublic()
	if (datas[7]) {
		document.querySelector('.stories-container-dashboard').innerHTML = ''
	}
	renderAllStories(datas)
}

const bookmark = async e => {
	const id = e.target.id
	if (id) {
		document.querySelector(`#${id}`).classList.toggle('bookmarks')
		userServices.postBookmarkedStories(id)
	}
}

export default allStories
