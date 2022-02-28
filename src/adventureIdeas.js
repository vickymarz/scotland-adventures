import isle from './images/isle-of-skyle.jpg'
import river from './images/river.jpg'
import walkWay from './images/walk-way.jpg'
import pasture from './images/pasture.jpg'

const adventureIdeas = () => {
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
          <div class="ideas-btn">
             <button type="button">View All</button>
             </div>
				</div>
	`
}

export default adventureIdeas
