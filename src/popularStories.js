import { userServices } from './services/userServices'

const showStories = stories => {
	const content = document.querySelector('.stories')
	stories.forEach((story) => {
		const { title, image, storyText, id } = story
		
			content.innerHTML += `
      	<div class="story text">
					<div class="view">
						<img src=${image} alt="image" />
             <button type="button" class="read popup" id=${id}>Read</button>
					</div>	
						<h3>${title}</h3>
						<p class="text-mobile">${storyText}</p>
				</div>
      `
	})

  const storry = Array.from(document.querySelectorAll('.story'))
	for (let i = 4; i < storry.length; i++) {
		storry[i].style.display = "flex"
	}	

	const modalButtons = Array.from(document.querySelectorAll('.read'))
	const modals = Array.from(document.querySelectorAll('.story-popup'))
	const modalButtonZip = modalButtons.map((button, i) => [button, modals[i]])

	modalButtonZip.forEach(pair => {
		pair[0].addEventListener('click', () => {
			pair[1].style.display = 'block'
		})
	})

	document.querySelectorAll('.cancel').forEach(close => {
		close.addEventListener('click', () => {
			document.querySelectorAll('.story-popup').forEach(modal => {
				modal.style.display = 'none'
			})
		})
	})
}

const popularStories = async () => {
	const datas = await userServices.getAllStoriesPublic()
	if (datas[3]) {
		document.querySelector('.stories').innerHTML = ''
	}
	showStories(datas)
}



export default popularStories
