import isle from './images/isle-of-skyle.jpg'
import river from './images/river.jpg'
import walkWay from './images/walk-way.jpg'
import pasture from './images/pasture.jpg'
import hike from './images/hike.jpg'
import sea from './images/sea.jpg'
import train from './images/train.jpg'
import georgeHiles from './images/george-hiles.jpg'
import mountain from './images/mountain.jpg'
import favIcon from './images/favourite.png'
import avatarIcon from './images/avatar.png'
import logoIcon from './images/logo.png'


const stories = () => {
	return `
	      <div class="stories-title">
					<h2>FIND POPULAR DESTINATIONS</h2>
					<i class="fa fa-arrow-right" id="arrow"></i>
				</div>
				<div class="stories">
					<div class="story">
						<img src=${river} alt="" />
						<h3>ISLE LAKE</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
					<div class="story">
						<img src=${walkWay} alt="" />
						<h3>LILLE VALLEY</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
					<div class="story">
						<img src=${isle}  alt="" />
						<h3>ICE LAND</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
					<div class="story">
						<img src=${pasture}  alt="" />
						<h3>GREEN FIELD</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</div>
	`
}

const adventures = () => {
	return `
	<div class="adventure-title">
					<h2>HISTORICAL ADVENTURES</h2>
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
				<button type="button">Show More</button>
				</div>
	`
}

const createElement = () => {
	const favourite = document.createElement('img')
	favourite.setAttribute('src', favIcon)
	document.querySelector('.favourite').appendChild(favourite)

	const avatar = document.createElement('img')
	avatar.setAttribute('src', avatarIcon)
	document.querySelector('.avatar').appendChild(avatar)

	const logo = document.createElement('img')
	logo.setAttribute('src', logoIcon)
	document.querySelector('.logo-desktop').appendChild(logo)
}

export {createElement, stories, adventures }
