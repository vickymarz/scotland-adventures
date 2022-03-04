import isle from './images/isle-of-skyle.jpg'
import river from './images/river.jpg'
import walkWay from './images/walk-way.jpg'
import pasture from './images/pasture.jpg'
import hike from './images/hike.jpg'
import sea from './images/sea.jpg'
import train from './images/train.jpg'
import georgeHiles from './images/george-hiles.jpg'
import mountain from './images/mountain.jpg'

const moreStories = () => {
	return `
	      <div class="stories-title id="stories-title">

					<h2>SEE ALL INTERESTING STORIES</h2>
          <span id="span">
          Go back	<i class="fa fa-arrow-left" id="arrow-back"></i>
          </span>
				</div>
				<div class="my-stories">
					<div class="story more-story">
						<img src=${river} alt="" />
						<div class="more-story-desc">
						<h3>ISLE LAKE</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at modi placeat impedit eveniet, illum iste sapiente corrupti! Animi laudantium laborum velit consequatur architecto provident odit mollitia eligendi. Animi dolorem sed, quos, reiciendis doloribus officia fuga mollitia, corporis odit similique ipsam? Mollitia eligendi nihil fugit quia ipsam voluptatibus vitae quaerat neque est /p>
            <div class="description ">
             <button type="button" >Description</button>
             </div>
						 </div>
					</div>
					<div class="story more-story">
						<img src=${walkWay} alt="" />
							<div class="more-story-desc">
						<h3>LILLE VALLEY</h3>
						<p>LLorem ipsum dolor sit amet consectetur adipisicing elit. Error at modi placeat impedit eveniet, illum iste sapiente corrupti! Animi laudantium laborum velit consequatur architecto provident odit mollitia eligendi. Animi dolorem sed, quos, reiciendis doloribus officia fuga mollitia, corporis odit similique ipsam? Mollitia eligendi nihil fugit quia ipsam voluptatibus vitae quaerat neque est</p>
             <div class="description">
             <button type="button">Description</button>
             </div>
						 </div>
					</div>
					<div class="story more-story">
						<img src=${isle}  alt="" />
							<div class="more-story-desc">
						<h3>ICE LAND</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at modi placeat impedit eveniet, illum iste sapiente corrupti! Animi laudantium laborum velit consequatur architecto provident odit mollitia eligendi. Animi dolorem sed, quos, reiciendis doloribus officia fuga mollitia, corporis odit similique ipsam? Mollitia eligendi nihil fugit quia ipsam voluptatibus vitae quaerat neque est</p>
            <div class="description">
             <button type="button">Description</button>
             </div>
						 </div>
					</div>
					<div class="story more-story">
						<img src=${pasture}  alt="" />
							<div class="more-story-desc">
						<h3>GREEN FIELD</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at modi placeat impedit eveniet, illum iste sapiente corrupti! Animi laudantium laborum velit consequatur architecto provident odit mollitia eligendi. Animi dolorem sed, quos, reiciendis doloribus officia fuga mollitia, corporis odit similique ipsam? Mollitia eligendi nihil fugit quia ipsam voluptatibus vitae quaerat neque est</p>
            <div class="description">
             <button type="button">Description</button>
             </div>
						 </div>
					</div>
				</div>
	`
}

const moreHistory = () => {
	return `
  	<div class="adventure-title">
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
          	<div class="adventure-imgs">
						<img src=${walkWay} alt="" />
						<p> Moongoose Sea </p>
					</div>
					<div class="adventure-imgs">
						<img src=${train} alt="" />
						<p> Moongoose Sea </p>
					</div>
					<div class="adventure-imgs">
						<img src=${river} alt="" />
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
				<button type="button" id="back">Go Back</button>
				</div>
	`
}

const moreAdventures = () => {
	return `
					<h2>ADVENTURE IDEAS</h2>
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
             <button type="button" id="back-btn">Back</button>
             </div>
				</div>
	`
}

export { moreStories, moreHistory, moreAdventures }
