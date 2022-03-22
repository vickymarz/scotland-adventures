import avatarIcon from '../images/avatar.png'
import river from '../images/river.jpg'

const drafts = `
<div class="recommended-stories">
					<div class="story-description">
          <div class="author">
						<img src=${avatarIcon} alt="" />
						<span>John Doe</span>
						</div>
						<div class="recommended-story">
							<h2 class="popup">Intesting things about Scotland</h2>
							<p
								>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus repudiandae earum
								maxime reiciendis necessitatibus totam, deserunt molestias eaque a vitae quidem
								libero, voluptates perferendis nulla culpa in illo unde cum?</p
							>
							
						</div>
					</div>
					<div class="story-img"> 
          	<img src=${river} alt="" />
          </div>
				</div>
`

const renderDrafts = () => {
	document.querySelector('.show-drafts').innerHTML = drafts
}

export default renderDrafts
