
import isle from './images/isle-of-skyle.jpg'
import river from './images/river.jpg'
import georgeHiles from './images/george-hiles.jpg'
import mountain from './images/mountain.jpg'
import hike from './images/hike.jpg'
import sea from './images/sea.jpg'
import train from './images/train.jpg'
import walkWay from './images/walk-way.jpg'

const historyAttractions = () => {
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
				<button type="button id="adventure-btn">Go Back</button>
				</div>
	`
}

export default historyAttractions