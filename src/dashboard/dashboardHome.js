
import isle from '../images/isle-of-skyle.jpg'
import river from '../images/river.jpg'
import walkWay from '../images/walk-way.jpg'
import pasture from '../images/pasture.jpg'
import avatarIcon from '../images/avatar.png'

const recommendedStories =
	 `
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
							<span><i class="fa fa-bookmark"></i></span>
						</div>
					</div>
					<div class="story-img"> 
          	<img src=${river} alt="" />
          </div>
				</div>
          <div class="recommended-stories">
					<div class="story-descrption">
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
							<span><i class="fa fa-bookmark"></i></span>
						</div>
					</div>
					<div class="story-img">
            <img src=${isle} alt="" />
          </div>
				</div>
          <div class="recommended-stories">
					<div class="story-descrption">
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
							<span><i class="fa fa-bookmark"></i></span>
						</div>
					</div>
					<div class="story-img">
             	<img src=${pasture} alt="" /> 
          </div>
				</div>
          <div class="recommended-stories">
					<div class="story-descrption">
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
							<span><i class="fa fa-bookmark"></i></span>
						</div>
					</div>
					<div class="story-img">
            	<img src=${walkWay} alt="" />
          </div>
				</div>
      `

const notifications = 
	 `
	 <div class="view-notification">
	    <img src=${avatarIcon } alt="author" />
				<div class="notification">
					<p>Emmanuel Orji <span> liked your post for </span> Beauty in Scotland</p>
					<p class="date">Feb, 30 2023</p>
				</div>
		</div>
	`

const savedStories = 
 `
	<div class="favourite-stories">
	  <div class="favourite-story">
			<h2 class="popup">Intesting things about Scotland</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Ducimus repudiandae earum
				maxime reiciendis necessitatibus totam, deserunt molestias eaque a vitae quidem
				libero, voluptates perferendis nulla culpa in illo unde cum </p>
		     	<div class="delete-author">
				<p> John Doe </p>
				<span><i class="fas fa-trash-alt"></i></span>
		     </div>
		</div>
		<div class="story-img">
      <img src=${walkWay} alt="" />
    </div>

		</div>
		
	`

const renderPage = () => {
  document.querySelector('.view-notification').innerHTML = notifications
	document.querySelector('#stories-container').innerHTML = recommendedStories
	document.querySelector('.favourites').innerHTML = savedStories
}

export default renderPage
