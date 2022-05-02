import { userServices } from './services/userServices'

const renderMoreStories = stories => {
	const content = document.querySelector('#more')
	stories.forEach((story, index) => {
		const { title, image, storyText} = story
		if (index > 3 && index < 4) {
			content.innerHTML += `
      		<div class="story more-story">
						<img src=${image} alt="image" />
						<div class="more-story-desc">
						<h3>${title}</h3>
						<p class="text-mobile">${storyText}</p>
						 </div>
					</div>
      `
		}
	})
}

const morePopularStories = async () => {
	const datas = await userServices.getAllStoriesPublic()
	renderMoreStories(datas)
}

export default morePopularStories
