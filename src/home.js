import isle from './images/isle-of-skyle.jpg'
import river from './images/river.jpg'
import walkWay from './images/walk-way.jpg'
import pasture from './images/pasture.jpg'
import favIcon from './images/favourite.png'
import avatarIcon from './images/avatar.png'
import logoIcon from './images/logo.png'

const carousel = () => {
	return `
  	<div id="demo" class="carousel slide" data-bs-ride="carousel">
					<div class="carousel-indicators">
						<button
							type="button"
							data-bs-target="#demo"
							data-bs-slide-to="0"
							class="active"
						></button>
						<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
						<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
					</div>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img  src="" alt="Los Angeles" class="d-block" style="width: 100%" />
							<div class="carousel-caption">
								<h3>Los Angeles</h3>
								<p>We had such a great time in LA!</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src="" alt="Chicago" class="d-block" style="width: 100%" />
							<div class="carousel-caption">
								<h3>Chicago</h3>
								<p>Thank you, Chicago!</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src="" alt="New York" class="d-block" style="width: 100%" />
							<div class="carousel-caption">
								<h3>New York</h3>
								<p>We love the Big Apple!</p>
							</div>
						</div>
					</div>
					<button
						class="carousel-control-prev"
						type="button"
						data-bs-target="#demo"
						data-bs-slide="prev"
					>
						<span class="carousel-control-prev-icon"></span>
					</button>
					<button
						class="carousel-control-next"
						type="button"
						data-bs-target="#demo"
						data-bs-slide="next"
					>
						<span class="carousel-control-next-icon"></span>
					</button>
				</div>
`
}

const stories = () => {
	return `
	      <div class="stories-title">
					<h2>FIND POPULAR DESTINATIONS</h2>
					<i class="fa fa-arrow-right"></i>
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

export { carousel, createElement, stories }
