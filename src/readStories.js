import isle from './images/isle-of-skyle.jpg'
import river from './images/river.jpg'
import walkWay from './images/walk-way.jpg'
import pasture from './images/pasture.jpg'

const readStories = () => {
	return `
  <section class="modal">
  <div class="popup-container">

					<div class="story more-story" id="read-stories">
						<img src=${river} alt="" />
						<div class="more-story-desc">
						<h3>ISLE LAKE</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at modi placeat impedit eveniet, illum iste sapiente corrupti! Animi laudantium laborum velit consequatur architecto provident odit mollitia eligendi. Animi dolorem sed, quos, reiciendis doloribus officia fuga mollitia, corporis odit similique ipsam? Mollitia eligendi nihil fugit quia ipsam voluptatibus vitae quaerat neque est /p>
            <div class="description cancel">
             <button type="button">Close</button>
             </div>
						 </div>
					</div>
          </div>
          </section>
           <section class="modal">
           <div class="popup-container">
					<div class="story more-story" id="read-stories">
       
						<img src=${walkWay} alt="" />
							<div class="more-story-desc">
						<h3>LILLE VALLEY</h3>
						<p>LLorem ipsum dolor sit amet consectetur adipisicing elit. Error at modi placeat impedit eveniet, illum iste sapiente corrupti! Animi laudantium laborum velit consequatur architecto provident odit mollitia eligendi. Animi dolorem sed, quos, reiciendis doloribus officia fuga mollitia, corporis odit similique ipsam? Mollitia eligendi nihil fugit quia ipsam voluptatibus vitae quaerat neque est</p>
             <div class="description cancel">
             <button type="button">Close</button>
             </div>
						 </div>
					</div>
          </div>
          </section>
           <section class="modal">
           <div class="popup-container">
					<div class="story more-story" id="read-stories">
						<img src=${isle}  alt="" />
							<div class="more-story-desc">
						<h3>ICE LAND</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at modi placeat impedit eveniet, illum iste sapiente corrupti! Animi laudantium laborum velit consequatur architecto provident odit mollitia eligendi. Animi dolorem sed, quos, reiciendis doloribus officia fuga mollitia, corporis odit similique ipsam? Mollitia eligendi nihil fugit quia ipsam voluptatibus vitae quaerat neque est</p>
            <div class="description cancel">
             <button type="button">Close</button>
             </div>
						 </div>
					</div>
          </div>
          </section>
           <section class="modal">
           <div class="popup-container">
					<div class="story more-story" id="read-stories">
						<img src=${pasture}  alt="" />
							<div class="more-story-desc">
						<h3>GREEN FIELD</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at modi placeat impedit eveniet, illum iste sapiente corrupti! Animi laudantium laborum velit consequatur architecto provident odit mollitia eligendi. Animi dolorem sed, quos, reiciendis doloribus officia fuga mollitia, corporis odit similique ipsam? Mollitia eligendi nihil fugit quia ipsam voluptatibus vitae quaerat neque est</p>
            <div class="description cancel">
             <button type="button">Close</button>
             </div>
						 </div>
					</div>
          </div>
          </section>`
}
export default readStories
