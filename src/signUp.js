import { validateEmail, validatePassword, passwordConfirmation } from './validation'
import postData from './services';
import capitalizeCharAt from './helpers';
const signForm = `
  	<div class="modal">
			<div class="form-container">
				<h2>Create a Secure Account</h2>
	        <div class="cancel">
  <i class="fa fa-times fa-2x"></i>
    </div>
				<form action="" id="signup-form">
				<ul>
				<li>
					<input
						type="text"
						name="firstName"
						id="first_name"
						autocomplete="cc-given-name"
						placeholder="Your First Name"
						required
					/>
					</li>
					<li>
					<input
						type="text"
						name="lastName"
						id="last_name"
						autocomplete="cc-family-name"
						placeholder="Your Last Name"
						required
					/>
					</li>
					<li>
					<input
						type="email"
						name="email"
						id="signup-email"
						placeholder="Enter Your Email Address"
						required
					/>
				   </li>
					 <li class="password">
						<input
						type="password"
						name="password"
						id="password"
						placeholder="Choose a Password"
						required
						/>
						<i class="fas fa-eye-slash eye" ></i>
						</li>
					<li class="password">
								<input
						type="password"
						name="confirmPassword"
						id="confirm_password"
						autocomplete="new-password"
						placeholder="Confirm Your Password"
						required />
						<i class="fas fa-eye-slash eye"></i>
						</li>
						<ul>
					<input type="submit" value="CREATE AN ACCOUNT" id="submit" />
				</form>
				<div class="footer">
					<p>Already have an Account? <a href="login.html">Login</a></p>
				</div>
			</div>
		</div>
  `

const signUp = () => {
	document.querySelector('.signup-section').innerHTML = signForm
	signUpValidation()
}

const signUpValidation = () => {
	const form = document.querySelector('#signup-form')
	const EMAIL_INVALID = 'Kindly enter a valid email address e.g abc@gmail.com'
	const PASSWORD_INVALID =
		'Minimum of 8 characters required and must contain at least one lowercase, one uppercase, one numeric, and one special character e.g Abc01@ff'
	const PASSWORD_MATCH_INVALID = 'Password do not match. Please check and try again'

	form.addEventListener('submit', e => {
		e.preventDefault()
		const emailValid = validateEmail(form.elements.email, EMAIL_INVALID)
		const passwordValid = validatePassword(form.elements.password, PASSWORD_INVALID)
		const passwordMatch = passwordConfirmation(
			form.elements.confirmPassword,
			PASSWORD_MATCH_INVALID,
			form.elements.password,
		)

		if (emailValid && passwordValid && passwordMatch) {
		
			const firstName = capitalizeCharAt(form.elements.firstName.value , 0)
			const lastName = capitalizeCharAt(form.elements.lastName.value , 0)
			const email =  form.elements.email.value.toLowerCase()
			const password = form.elements.password.value 

			const currentUser = {firstName, lastName, email, password}
			console.log(currentUser)
			postData(currentUser)
				form.reset()
			alert('Registeration successful. Proceed to sign in.')
		}
	})
}



export default signUp
