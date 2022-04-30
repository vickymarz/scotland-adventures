import { userServices } from '../services/userServices'
import avatarIcon from '../images/avatar.png'

const createElement = async () => {
 const datas = await userServices.getUser()
	const profilePic = datas.profilePicture
	
	const avatar = document.createElement('img')
	avatar.setAttribute('src', `${profilePic || avatarIcon}`)
	document.querySelector('.avatar').appendChild(avatar)
}

export default createElement
