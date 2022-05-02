import isle from './images/isle-of-skyle.jpg'
import river from './images/river.jpg'
import walkWay from './images/walk-way.jpg'
import pasture from './images/pasture.jpg'

const stories = `
  <section class="modal">
  <div class="popup-container">

					<div class="story more-story" id="read-stories">
						<img src=${river} alt="" />
						<div class="more-story-desc">
						<h3>ISLE LAKE</h3>
						<p>Admired the views of native Caledonian pine forests, glistening lochs and open moorlands as you drive through the Great Glen on your way from Inverness to Glenfinnan.</p>
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
						<p>Another lovely stop on your journey from Edinburgh (or on your way back) is South Queensferry, where you can see the iconic Forth Bridges up close.</p>
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
						<p>The beautiful Drummond Castle Gardens is one of Europe's finest formal gardens. In Outlander the gardens are shown as the ornate park and orchard of the Palace of Versailles in France.</p>
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
						<h3>HOGWARTS EXPRESS</h3>
						<p>From rugged coastlines to rolling countrysides, charming villages to valleys dotted with sheep, experience Ireland’s natural beauty and local culture.</p>
            <div class="description cancel">
             <button type="button">Close</button>
             </div>
						 </div>
					</div>
          </div>
          </section>`

					const moreStories = `
  <section class="modal-popups">
  <div class="popup-container">

					<div class="story more-story" id="read-stories">
						<img src=${river} alt="" />
						<div class="more-story-desc">
						<h3>ISLE LAKE</h3>
						<p>Admired the views of native Caledonian pine forests, glistening lochs and open moorlands as you drive through the Great Glen on your way from Inverness to Glenfinnan. </p>
            <div class="description cancelled">
             <button type="button">Close</button>
             </div>
						 </div>
					</div>
          </div>
          </section>
           <section class="modal-popups">
           <div class="popup-container">
					<div class="story more-story" id="read-stories">
       
						<img src=${walkWay} alt="" />
							<div class="more-story-desc">
						<h3>LILLE VALLEY</h3>
						<p>Another lovely stop on your journey from Edinburgh (or on your way back) is South Queensferry, where you can see the iconic Forth Bridges up close.</p>
             <div class="description cancelled">
             <button type="button">Close</button>
             </div>
						 </div>
					</div>
          </div>
          </section>
           <section class="modal-popups">
           <div class="popup-container">
					<div class="story more-story" id="read-stories">
						<img src=${isle}  alt="" />
							<div class="more-story-desc">
						<h3>ICE LAND</h3>
						<p>The beautiful Drummond Castle Gardens is one of Europe's finest formal gardens. In Outlander the gardens are shown as the ornate park and orchard of the Palace of Versailles in France.</p>
            <div class="description cancelled">
             <button type="button">Close</button>
             </div>
						 </div>
					</div>
          </div>
          </section>
           <section class="modal-popups">
           <div class="popup-container">
					<div class="story more-story" id="read-stories">
						<img src=${pasture}  alt="" />
							<div class="more-story-desc">
						<h3>HOGWARTS EXPRESS</h3>
						<p>From rugged coastlines to rolling countrysides, charming villages to valleys dotted with sheep, experience Ireland’s natural beauty and local culture.</p>
            <div class="description cancelled">
             <button type="button">Close</button>
             </div>
						 </div>
					</div>
          </div>
          </section>
						`

const readStories = () => { 
		document.querySelector('.more-stories-popup').innerHTML = stories
		document.querySelector('.view-more-stories-popup').innerHTML = moreStories
}

export default readStories
