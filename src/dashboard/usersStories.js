import isle from '../images/isle-of-skyle.jpg'
import river from '../images/river.jpg'
import walkWay from '../images/walk-way.jpg'
import pasture from '../images/pasture.jpg'
import avatarIcon from '../images/avatar.png'

const stories = 
	`
  <section class="modal">
    <div class="popup-container">
      <div class="recommended-stories">
      <div class="author">
						<img src=${avatarIcon} alt="" />
						<span>John Doe</span>
					</div>
        <div class="story-img"> 
          <img src=${river} alt="" />
        </div>
        <div class="story-description">
          
					<div class="recommended-story">
						<h2>Intesting things about Scotland</h2>
						<p
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic corrupti quas pariatur illum, perferendis eveniet, soluta similique officia eos numquam voluptates facere sunt assumenda nobis reprehenderit laborum? Facilis enim accusantium cupiditate, ipsum earum nesciunt architecto beatae rem est veniam laborum, placeat natus, commodi voluptate provident quae at! Ad nam perferendis, animi quibusdam, veniam assumenda esse excepturi corporis quod neque fugiat ducimus ipsum culpa quos repellat tempore maxime sapiente, deleniti sint! Saepe necessitatibus officiis, fuga provident itaque nemo amet minima est?</p
            >
							<span><i class="fa fa-bookmark"></i></span>
					</div>
				</div>
			</div>
      <div class="description cancel">
        <button type="button">Close</button>
      </div>
    </div>
  </section>
  <section class="modal">
    <div class="popup-container">
      <div class="recommended-stories">
      <div class="author">
						<img src=${avatarIcon} alt="" />
						<span>John Doe</span>
					</div>
        <div class="story-img"> 
          <img src=${river} alt="" />
        </div>
        <div class="story-description">
          
					<div class="recommended-story">
						<h2>Intesting things about Scotland</h2>
						<p
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic corrupti quas pariatur illum, perferendis eveniet, soluta similique officia eos numquam voluptates facere sunt assumenda nobis reprehenderit laborum? Facilis enim accusantium cupiditate, ipsum earum nesciunt architecto beatae rem est veniam laborum, placeat natus, commodi voluptate provident quae at! Ad nam perferendis, animi quibusdam, veniam assumenda esse excepturi corporis quod neque fugiat ducimus ipsum culpa quos repellat tempore maxime sapiente, deleniti sint! Saepe necessitatibus officiis, fuga provident itaque nemo amet minima est?</p
            >
							<span><i class="fa fa-bookmark"></i></span>
					</div>
				</div>
			</div>
      <div class="description cancel">
        <button type="button">Close</button>
      </div>
    </div>
  </section>
  <section class="modal">
  <div class="popup-container">
  <div class="recommended-stories">
  <div class="author">
						<img src=${avatarIcon} alt="" />
						<span>John Doe</span>
						</div>
  <div class="story-img"> 
    <img src=${isle} alt="" />
  </div>
  <div class="story-description">
          
						<div class="recommended-story">
							<h2>Intesting things about Scotland</h2>
							<p
								>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic corrupti quas pariatur illum, perferendis eveniet, soluta similique officia eos numquam voluptates facere sunt assumenda nobis reprehenderit laborum? Facilis enim accusantium cupiditate, ipsum earum nesciunt architecto beatae rem est veniam laborum, placeat natus, commodi voluptate provident quae at! Ad nam perferendis, animi quibusdam, veniam assumenda esse excepturi corporis quod neque fugiat ducimus ipsum culpa quos repellat tempore maxime sapiente, deleniti sint! Saepe necessitatibus officiis, fuga provident itaque nemo amet minima est?</p
							>
							<span><i class="fa fa-bookmark"></i></span>
						</div>
					</div>
				</div>
        <div class="description cancel">
             <button type="button">Close</button>
             </div>
    </div>
  </section>
  <section class="modal">
  <div class="popup-container">
  <div class="recommended-stories">
  <div class="author">
						<img src=${avatarIcon} alt="" />
						<span>John Doe</span>
						</div>
  <div class="story-img"> 
    <img src=${pasture} alt="" />
  </div>
  <div class="story-description">
         
						<div class="recommended-story">
							<h2>Intesting things about Scotland</h2>
							<p
								>LLorem ipsum dolor sit, amet consectetur adipisicing elit. Hic corrupti quas pariatur illum, perferendis eveniet, soluta similique officia eos numquam voluptates facere sunt assumenda nobis reprehenderit laborum? Facilis enim accusantium cupiditate, ipsum earum nesciunt architecto beatae rem est veniam laborum, placeat natus, commodi voluptate provident quae at! Ad nam perferendis, animi quibusdam, veniam assumenda esse excepturi corporis quod neque fugiat ducimus ipsum culpa quos repellat tempore maxime sapiente, deleniti sint! Saepe necessitatibus officiis, fuga provident itaque nemo amet minima est?</p
							>
							<span><i class="fa fa-bookmark"></i></span>
						</div>
					</div>
				</div>
        <div class="description cancel">
             <button type="button">Close</button>
             </div>
    </div>
  </section>
  <section class="modal">
  <div class="popup-container">
  <div class="recommended-stories">
  <div class="author">
						<img src=${avatarIcon} alt="" />
						<span>John Doe</span>
						</div>
  <div class="story-img"> 
    <img src=${walkWay} alt="" />
  </div>
  <div class="story-description">
          
						<div class="recommended-story">
							<h2>Intesting things about Scotland</h2>
							<p
								>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic corrupti quas pariatur illum, perferendis eveniet, soluta similique officia eos numquam voluptates facere sunt assumenda nobis reprehenderit laborum? Facilis enim accusantium cupiditate, ipsum earum nesciunt architecto beatae rem est veniam laborum, placeat natus, commodi voluptate provident quae at! Ad nam perferendis, animi quibusdam, veniam assumenda esse excepturi corporis quod neque fugiat ducimus ipsum culpa quos repellat tempore maxime sapiente, deleniti sint! Saepe necessitatibus officiis, fuga provident itaque nemo amet minima est?</p
							>
							<span><i class="fa fa-bookmark"></i></span>
						</div>
					</div>
				</div>
        <div class="description cancel">
             <button type="button">Close</button>
             </div>
    </div>
  </section>
          `

const renderUserStories = () => {
  document.querySelector('.users-stories-popup').innerHTML = stories
}
export default renderUserStories
