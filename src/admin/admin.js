import './admin.css'
import { userServices } from '../services/userServices'

const loginValidation = () => {
  const form = document.querySelector('#login-form')

	form.addEventListener('submit', e => {
		e.preventDefault()
		const email = form.elements.email.value
		const password = form.elements.password.value
		const currentUser = { email, password }
		userServices.adminLogin(currentUser)
		form.reset()
	})
}

loginValidation()