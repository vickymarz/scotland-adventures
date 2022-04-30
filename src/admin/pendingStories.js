import { userServices } from '../services/userServices'
import avatarIcon from '../images/avatar.png'

const renderPending = pending => {

	const content = document.querySelector('.pending-stories')
	pending.forEach(story => {
		const { authorFirstName, authorLastName, title, image, storyText, profilePicture, id } = story
		content.innerHTML += `
<div class="recommended-stories">
	<div class="story-description">
    <div class="author">
			<img src=${profilePicture || avatarIcon} alt="profic-picture" />
			<span>${authorFirstName}  ${authorLastName}</span>
		</div>
		<div class="recommended-story">
		  <h2 class="popup ${id} show-all-pending">${title}</h2>
			<p class="draft-text">${storyText}</p>
		</div>
		<div class="checks-wrapper">
			<div class="checks">
					<i class="far fa-check-circle approve ${id}"></i>
				<small>Approve</small>
			</div>
			<div class="checks">
				<i class="far fa-times-circle reject" id=${id}></i>
				<small>Reject</small>
			</div>
		</div>
	</div>
	<div class="story-img"> 
		<img src=${image} alt="image" />
	</div>
</div>
`
	})

	document.querySelectorAll('.approve').forEach(approveBtn => {
		approveBtn.addEventListener('click', approve)
  })
  
	document.querySelectorAll('.reject').forEach(approveBtn => {
		approveBtn.addEventListener('click', reject)
	})

	const modalButtons = Array.from(document.querySelectorAll('.show-all-pending'))
	const modals = Array.from(document.querySelectorAll('.pending-popup'))
	const modalButtonZip = modalButtons.map((button, i) => [button, modals[i]])

	modalButtonZip.forEach(pair => {
		pair[0].addEventListener('click', () => {
			pair[1].style.display = 'block'
		})
	})

	document.querySelectorAll('.cancel').forEach(close => {
		close.addEventListener('click', () => {
			document.querySelectorAll('.pending-popup').forEach(modal => {
				modal.style.display = 'none'
			})
		})
	})

}

const pendingStories = async () => {
	const datas = await userServices.getAllStoriesAdmin()
	const pending = datas.filter(data => data.approvalStatus === 'pending')
	if (pending[0]) {
		document.querySelector('.pending-stories').innerHTML = ''
	}
	renderPending(pending)
}

const approve = async e => {
	let btn = e.target.className
	const id = btn.split(' ')[3]
	if (id) {
		const status = {
			storyId: id,
			decision: 'approved',
		}
		userServices.manageStory(status)
		await pendingStories()
	}
}

const reject = async e => {
	if (e.target.id) {
		const status = {
			storyId: e.target.id,
			decision: 'rejected',
		}
		userServices.manageStory(status)
		await pendingStories()
	}
}

export default pendingStories
