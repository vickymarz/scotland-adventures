import { userServices } from '../services/userServices'
import avatarIcon from '../images/avatar.png'

const renderAllApprovedPopup = approved => {
	const content = document.querySelector('.approved-stories-popup')
	approved.forEach((story) => {
		const { authorFirstName, authorLastName, title, image, storyText, profilePicture } = story
			content.innerHTML += `
<section class="modal approved-popup">
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
						<h2 class="show-all-approved">${title}</h2>
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

const approvedStoriesPopup = async () => {
  const datas = await userServices.getAllStoriesAdmin()
  const approved = datas.filter(data => data.approvalStatus === 'approved')

	if (approved[0]) {
		document.querySelector('.approved-stories-popup').innerHTML = ''
	}
	renderAllApprovedPopup(approved)
}

export default approvedStoriesPopup
