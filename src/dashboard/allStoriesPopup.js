import { userServices } from '../services/userServices'
import avatarIcon from '../images/avatar.png'

const renderAllStoriesPopup = stories => {
	const content = document.querySelector('.users-stories-popup')
	stories.forEach((story, index) => {
		const { authorFirstName, authorLastName, title, image, storyText, profilePicture, id } = story

			content.innerHTML += `
<section class="modal more-popup">
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
							<span><i class="fa fa-bookmark save" id=${id}></i></span>
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

	document.querySelectorAll('.save').forEach(bookmarkBtn => {
		bookmarkBtn.addEventListener('click', bookmark)
	})
}

const allStoriesPopup = async () => {
	const datas = await userServices.getAllStoriesPublic()
	if (datas[7]) {
		document.querySelector('.users-stories-popup').innerHTML = ''
	}
	renderAllStoriesPopup(datas)
}

const bookmark = async e => {
	const id = e.target.id
	if (id) {
		document.querySelector(`#${id}`).classList.toggle('bookmarks')
		userServices.postBookmarkedStories(id)
	}
}


export default allStoriesPopup
