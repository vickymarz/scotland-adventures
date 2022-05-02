import './admin.css'

import { validateEmail, validatePassword} from '../validation'
import { userServices } from '../services/userServices'
import capitalizeCharAt from '../helpers'

const signUpValidation = () => {
	const form = document.querySelector('#register-form')
	const EMAIL_INVALID = 'Kindly enter a valid email address e.g abc@gmail.com'
	const PASSWORD_INVALID =
		'Minimum of 8 characters required and must contain at least one lowercase, one uppercase, one numeric, and one special character e.g Abc01@ff'

	form.addEventListener('submit', e => {
		e.preventDefault()
		const emailValid = validateEmail(form.elements.email, EMAIL_INVALID)
		const passwordValid = validatePassword(form.elements.password, PASSWORD_INVALID)

		if (emailValid && passwordValid) {
			const firstName = capitalizeCharAt(form.elements.firstName.value, 0)
			const lastName = capitalizeCharAt(form.elements.lastName.value, 0)
			const email = form.elements.email.value.toLowerCase()
			const password = form.elements.password.value
      const superAdminUser = form.elements.superAdminUser.value
      const superAdminPass = form.elements.superAdminPass.value
      const currentUser = { firstName, lastName, email, password, superAdminUser, superAdminPass }
      
      userServices.adminRegister(currentUser)
			form.reset()
		}
	})
}
signUpValidation()
