import isle from './images/isle-of-skyle.jpg'
import river from './images/river.jpg'
import walkWay from './images/walk-way.jpg'
import pasture from './images/pasture.jpg'

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

export { moreStories }
