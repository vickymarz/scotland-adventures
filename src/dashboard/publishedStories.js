import { userServices } from '../services/userServices'
import avatarIcon from '../images/avatar.png'

const renderPublished = published => {

	const content = document.querySelector('.published-stories')
	published.forEach(story => {
		const { authorFirstName, authorLastName, title, image, storyText, profilePicture, id } = story
		content.innerHTML += `
<div class="recommended-stories" id=${id}>
	<div class="story-description">
    <div class="author">
			<img src=${profilePicture || avatarIcon} alt="author" />
			<span>${authorFirstName}  ${authorLastName}</span>
		</div>	
		<div class="recommended-story">
			<h2 class="popup ${id} update-published">${title}</h2>
			<p class="draft-text">${storyText}</p>
				<span><i class="fas fa-trash-alt remove ${id}"></i></span>
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

		document.querySelectorAll('.update-published').forEach(updateBtn => {
			updateBtn.addEventListener('click', update)
		})
}

const publishedStories = async () => {
const datas = await userServices.getAuthorStories()
		const published = datas.filter(data => data.approvalStatus === 'approved')
	if (published[0]) {
		document.querySelector('.published-stories').innerHTML = ''
	}
	renderPublished(published)
}
const remove = async e => {
	let btn = e.target.className
	const id = btn.split(' ')[3]

	if (id) {
		userServices.deleteStory(id)
		const element = document.getElementById(id)
		element.remove()
		await publishedStories()
	}
}

const update = async e => {
	let btn = e.target.className
	const id = btn.split(' ')[1]
	if (id) {
		document.querySelector('.created-stories').style.display = 'none'
		document.querySelector('.text-img').style.display = 'block'
		document.querySelector('.write-story').style.display = 'block'

		const data = await userServices.getStory(id)
		document.querySelector('#input-title').value = data.title
		document.querySelector('#story-title').textContent = data.title
		document.querySelector('.text-img').src = data.image

			document.querySelector(
			'.text-area',
		).innerHTML = `${data.storyText}<br> <img src=${data.image} alt="image" class="preview-img" />`

		document.querySelector('#text').textContent = data.title
		document.querySelector('#story-title').src = data.image
	}
}

export default publishedStories
