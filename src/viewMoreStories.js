import isle from './images/isle-of-skyle.jpg'
import river from './images/river.jpg'
import walkWay from './images/walk-way.jpg'
import pasture from './images/pasture.jpg'

const moreStories = () => {
	return `
	      <div class="stories-title">
					<h2>SEE ALL STORIES</h2>
          <span>
          Go back	<i class="fa fa-arrow-left" id="arrow-back"></i>
          </span>
				</div>
				<div class="stories">
					<div class="story">
						<img src=${river} alt="" />
						<h3>ISLE LAKE</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button type="button">Description</button>
					</div>
					<div class="story">
						<img src=${walkWay} alt="" />
						<h3>LILLE VALLEY</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             <button type="button">Description</button>
					</div>
					<div class="story">
						<img src=${isle}  alt="" />
						<h3>ICE LAND</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="description">
             <button type="button">Description</button>
             </div>
					</div>
					<div class="story">
						<img src=${pasture}  alt="" />
						<h3>GREEN FIELD</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             <button type="button">Description</button>
					</div>
				</div>
	`
}

export { moreStories }
