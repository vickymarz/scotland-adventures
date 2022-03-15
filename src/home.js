import isle from './images/isle-of-skyle.jpg'
import river from './images/river.jpg'
import walkWay from './images/walk-way.jpg'
import pasture from './images/pasture.jpg'
import hike from './images/hike.jpg'
import sea from './images/sea.jpg'
import train from './images/train.jpg'
import georgeHiles from './images/george-hiles.jpg'
import mountain from './images/mountain.jpg'
import logoIcon from './images/logo.png'
import titleIcon from './images/scotland.png'

const stories = `  <div class="stories-title">
					<h2>FIND POPULAR <span> STORIES </span></h2>
					<span id="arrow"> See more
					<i class="fa fa-arrow-right" ></i>
					</span>
				</div>
				<div class="stories">
					<div class="story">
					<div class="view">
						<img src=${river} alt="" />
             <button type="button" class="read popup">Read</button>
					</div>	
						<h3>ISLE LAKE</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
					<div class="story">
						<div class="view">
						<img src=${walkWay} alt="" />
             <button type="button" class="read popup">Read</button>
					</div>	
						<h3>LILLE VALLEY</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
					<div class="story">
						<div class="view">
						<img src=${isle} alt="" />
             <button type="button" class="read popup">Read</button>
					</div>	
						<h3>ICE LAND</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
					<div class="story">
						<div class="view">
						<img src=${pasture} alt="" />
             <button type="button" class="read popup">Read</button>
					</div>	
						<h3>GREEN FIELD</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</div>`

const adventures = `	<div class="adventure-title">
					<h2>HISTORICAL ATTRACTIONS</h2>
					<ul class="adventure-btns">
						<a href="#">All</a>
						<a href="#">Sort By</a>
						<a href="#">Sort By</a>
						<a href="#">Sort By</a>
					</ul>
				</div>
				<div class="adventure-places">
					<div class="adventure-imgs">
						<img src=${hike} alt="hike" />
						<p>George Hills</p>
					</div>
					<div class="adventure-imgs">
						<img src=${sea} alt="" />
						<p> Moongoose Sea </p>
					</div>
					<div class="adventure-imgs">
						<img src=${train} alt="" />
						<p> Moongoose Sea </p>
					</div>
					<div class="adventure-imgs">
						<img src=${georgeHiles} alt="" />
						<p> Moongoose Sea </p>
					</div>
					<div class="adventure-imgs">
						<img src=${mountain} alt="" />
						<p> Moongoose Sea </p>
					</div>
					<div class="adventure-imgs">
						<img src=${isle} alt="" />
						<p> Moongoose Sea </p>
					</div>
				</div>
				<div class="adventure-btn">
				<button type="button" id="history-btn">Show More</button>
			</div>`

const adventureIdeas = `<h2>ADVENTURE IDEAS</h2>
				<div class="my-stories">
					<div class="story more-story">
						<img src=${river} alt="" />
						<div class="more-story-desc">
						<h3> Jump into an ice-cold lake to boost your immunity</h3>
						<p>I’m a huge fan of spontaneously jumping into lakes, especially after a hike or trail run. It’s fantastic for muscle relief and boosting your immunity. The trick is not to think about it too much or testing the water beforehand. Just go for it and enjoy the tingling sensation in your body. You only live once! </p>
            <p class="location"> Location: No 20, scotland Road off negro street
            </p>
						 </div>
					</div>
					<div class="story more-story">
						<img src=${walkWay} alt="" />
							<div class="more-story-desc">
						<h3>Take a walking tour</h3>
						<p>You don’t have to travel far to take a walking tour. You can take one to learn something new about your city. Whether it’s focused on history, art or haunted houses like the one I’ve attended, you’ll expand your horizons.</p>
             <p class="location"> Location: N0 20, scotland Road off negro street
            </p>
						 </div>
					</div>
					<div class="story more-story">
						<img src=${isle}  alt="" />
							<div class="more-story-desc">
						<h3>Catch a sunrise from a mountain top</h3>
						<p>Stand up paddleboarding is a fantastic sport suitable for all age groups and fitness levels. You can even find a budget-friendly priced paddle board to buy or rent one and go for a paddle on the lake. This is my favourite activity when Canadian lakes are thawed.</p>
            <p class="location"> Location: N0 20, scotland Road off negro street
            </p>
						 </div>
					</div>
					<div class="story more-story">
						<img src=${pasture}  alt="" />
							<div class="more-story-desc">
						<h3>Sign up for a nature walk</h3>
						<p>If you’d like to know all the different plants and animals that live in your area, the best thing would be to sign up for a nature walk.</p>
            <p class="location"> Location: N0 20, scotland Road off negro street
            </p>
						 </div>
					</div>
          <div class="ideas-btn">
             <button type="button" id="adventure-btn">View All</button>
             </div>
				</div>	`

const createElement = () => {
	const logo = document.createElement('img')
	logo.setAttribute('src', logoIcon)
	document.querySelector('.logo-wrapper').appendChild(logo)

	const title = document.createElement('img')
	title.setAttribute('src', titleIcon)
	document.querySelector('.intro-title').appendChild(title)
}

const renderHomePage = () => {
	document.querySelector('.stories-container').innerHTML = stories
	document.querySelector('.adventures').innerHTML = adventures
	document.querySelector('.adventure-ideas').innerHTML = adventureIdeas
	createElement()
}

export default renderHomePage
