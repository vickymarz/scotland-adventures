import { userServices } from '../services/userServices'
import avatarIcon from '../images/avatar.png'

const renderBookmarkedPopup = bookmarks => {
	const content = document.querySelector('.favourite-stories-popup')
	content.innerHTML = ''
	bookmarks.forEach(bookmark => {
		const { authorFirstName, authorLastName, title, image, storyText, profilePicture, id } =
			bookmark
		content.innerHTML += `
<section class="modal">
  <div class="popup-container">
    <div class="recommended-stories">
      <div class="author">
				<img src=${profilePicture || avatarIcon} alt="author" />
					<span>${authorFirstName}  ${authorLastName}</span>
					</div>
        <div class="story-img"> 
          <img src=${image} alt="image" />
        </div>
        <div class="story-description">
          	<div class="recommended-story">
					  	<h2>${title}</h2>
						  <p>${storyText}</p>
								<span><i class="fas fa-trash-alt remove ${id}" ></i></span>
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

	document.querySelectorAll('.remove').forEach(deleteBtn => {
		deleteBtn.addEventListener('click', remove)
	})
}

const savedStoriesPopup = async () => {
	const datas = await userServices.getBookmarkedStories()
	renderBookmarkedPopup(datas)
}

const remove = async e => {
	let btn = e.target.className
	const id = btn.split(' ')[3]

	if (id) {
		userServices.deleteStory(id)
		const element = document.getElementById(id)
		element.remove()

		e.parentNode
		await savedStoriesPopup()
	}
}

export default savedStoriesPopup










