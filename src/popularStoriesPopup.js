import { userServices } from './services/userServices'

const renderStories = stories => {
	const content = document.querySelector('.more-stories-popup')
	stories.forEach((story) => {
		const { title, image, storyText, id } = story
		
			content.innerHTML += `
      	<section class="modal story-popup">
  <div class="popup-container">
					<div class="story more-story" id="read-stories">
						<img src=${image} alt="image" />
						<div class="more-story-desc">
						<h3>${title}</h3>
						<p>${storyText}</p>
            <div class="description cancel">
             <button type="button" id=${id}>Close</button>
             </div>
						 </div>
					</div>
          </div>
          </section>
      `
	})	
}

const popularStoriesPopup = async () => {
	const datas = await userServices.getAllStoriesPublic()
		if (datas[3]) {
		document.querySelector('.more-stories-popup').innerHTML = ''
	}
	renderStories(datas)
}

export default popularStoriesPopup
