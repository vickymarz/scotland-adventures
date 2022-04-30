import { userServices } from '../services/userServices'
import avatarIcon from '../images/avatar.png'

const renderBookmarked = bookmarks => {
	const content = document.querySelector('.favourites')
	bookmarks.forEach(bookmark => {
		const { authorFirstName, authorLastName, title, image, storyText, profilePicture, id } =
			bookmark
		content.innerHTML += `
<div class="favourite-stories" id=${id}>
  <div class="story-description">
    <div class="author">
			<img src=${profilePicture || avatarIcon} alt="profic-picture" />
		  <span>${authorFirstName}  ${authorLastName}</span>
	  </div>
	  <div class="favourite-story">
			<h2 class="popup">${title}</h2>
			<p class="favourite-story-desc">${storyText}</p>
				<span><i class="fas fa-trash-alt remove ${id}" ></i></span>
		</div>
  </div>
	<div class="story-img">
		<img src=${image} alt="image" />
	</div>
</div>
`
	})

	document.querySelectorAll('.remove').forEach(deleteBtn => {
		deleteBtn.addEventListener('click', remove)
	})
}

const bookmarkedStories = async () => {
	const datas = await userServices.getBookmarkedStories()
		if (datas[0]) {
			document.querySelector('.favourites').innerHTML = ''
		}
	renderBookmarked(datas)
}

const remove = async e => {
	let btn = e.target.className
	const id = btn.split(' ')[3]

	if (id) {
		userServices.deleteStory(id)
		const element = document.getElementById(id)
		element.remove()
		await bookmarkedStories()
	}
}

export default bookmarkedStories
