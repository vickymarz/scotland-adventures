import { userServices } from '../services/userServices'
import avatarIcon from '../images/avatar.png'

const renderAllPendingPopup = pending => {

	const content = document.querySelector('.pending-stories-popup')
	pending.forEach((story) => {
		const { authorFirstName, authorLastName, title, image, storyText, profilePicture} = story
			content.innerHTML += `
<section class="modal">
    <div class="popup-container">
      <div class="recommended-stories">
      <div class="author">
							<img src=${profilePicture || avatarIcon} alt="profic-picture" />
						<span>${authorFirstName}  ${authorLastName}</span>
					</div>
        <div class="story-img"> 
          <img src=${image} alt="image" />
        </div>
        <div class="story-description">
          
					<div class="recommended-story">
						<h2>${title}</h2>
						<p
              >${storyText}</p
            >
					</div>
				</div>
			</div>
      <div class="description cancel">
        <button type="button">Close</button>
      </div>
    </div>
  </section>
`
  })
}



const pendingStoriesPopup = async () => {
	const datas = await userServices.getAllStoriesAdmin()
	const pending = datas.filter(data => data.approvalStatus === 'pending')
	if (pending[0]) {
		document.querySelector('.pending-stories-popup').innerHTML = ''
	}
	renderAllPendingPopup(pending)
}



export default pendingStoriesPopup
