import logoIcon from '../images/logo.png'

const navigations = `
  	<nav class="nav-element">
				<div class="logo-dashboard"> 
          	<img src=${logoIcon} alt="logo" />
        </div>
				<ul class="nav-items">
					<li class="list"><i class="fas fa-home" id="main"></i><span>Home</span></li>
					<li class="list"><i class="fas fa-tasks" id="manage-stories"></i><span>Manage</span></li>
					<li class="list"
						><i class="fa fa-bell" id="notifications"></i><span>Notifications</span></li
					>
					<li class="list"
						><i class="fa fa-bookmark" id="saved-stories"></i><span>Favorites</span></li
					>
					<li class="list"
						><i class="fa fa-book-open" id="created-stories"></i><span>Stories</span></li
					>
					<span class="line"></span>
					<li class="list"><i class="fa fa-edit" id="write-story"></i><span>Write</span></li>
				</ul>
			</nav>
`

const renderAdminNav = () => {
	document.querySelector('#header').innerHTML = navigations
}

export default renderAdminNav;