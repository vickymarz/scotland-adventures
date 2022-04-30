import { userServices } from '../services/userServices'
import avatarIcon from '../images/avatar.png'

const renderApproved = approved => {
	const content = document.querySelector('.approved-stories')
	approved.forEach(story => {
			const { authorFirstName, authorLastName, title, image, storyText, profilePicture, id } = story
		content.innerHTML += `
<div class="recommended-stories">
	<div class="story-description">
    <div class="author">
			<img src=${profilePicture || avatarIcon} alt="profic-picture" />
			<span>${authorFirstName}  ${authorLastName}</span>
		</div>
		<div class="recommended-story">
			<h2 class="popup ${id} show-all-approved">${title}</h2>
			<p class="draft-text">${storyText}</p>
		</div>
  </div>
	<div class="story-img"> 
		<img src=${image} alt="image" />
	</div>
</div>
`
	})

	const modalButtons = Array.from(document.querySelectorAll('.show-all-approved'))
	const modals = Array.from(document.querySelectorAll('.approved-popup'))
	const modalButtonZip = modalButtons.map((button, i) => [button, modals[i]])

	modalButtonZip.forEach(pair => {
		pair[0].addEventListener('click', () => {
			pair[1].style.display = 'block'
		})
	})

	document.querySelectorAll('.cancel').forEach(close => {
		close.addEventListener('click', () => {
			document.querySelectorAll('.approved-popup').forEach(modal => {
				modal.style.display = 'none'
			})
		})
	})
	
}

const approvedStories = async () => {
	const datas = await userServices.getAllStoriesAdmin()
	const approved = datas.filter(data => data.approvalStatus === 'approved')
	if (approved[0]) {
		document.querySelector('.approved-stories').innerHTML = ''
	}
	renderApproved(approved)
}

export default approvedStories
