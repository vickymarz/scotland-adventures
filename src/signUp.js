import validateEmail from './validation'

const signForm = `
  	<div class="modal">
			<div class="form-container">
				<h2>Create a Secure Account</h2>
	        <div class="cancel">
  <i class="fa fa-times fa-2x"></i>
    </div>
				<form action="" id="signup-form">
					<input
						type="text"
						name="Full Name"
						id="first_name"
						autocomplete="cc-given-name"
						placeholder="Your First Name"
						required
					/>
					<input
						type="text"
						name="Last Name"
						id="last_name"
						autocomplete="cc-family-name"
						placeholder="Your Last Name"
						required
					/>
					<input
						type="email"
						name="email"
						id="signup-email"
						placeholder="Enter Your Email Address"
						required
					/>
				   	<small id="email-msg"></small>
						<input
						type="password"
						name="Password"
						id="password"
						placeholder="Choose a Password"
						required
						autocomplete="new-password"
				
						<input
						type="password"
						name="Confirm Password"
						id="confirm_password"
						autocomplete="new-password"
						placeholder="Confirm Your Password"
						required
						/>
							<small id=password-msg></small>
					<input type="submit" value="CREATE AN ACCOUNT" id="submit" />
				</form>
				<div class="footer">
					<p>Already have an Account? <a href="login.html">Login</a></p>
				</div>
			</div>
		</div>
  `

const signUpValidation = () => {
	const form = document.querySelector('#signup-form')
	const EMAIL_INVALID = 'Kindly enter a valid email address e.g abc@gmail.com'
	const emailMsg = document.querySelector('#email-msg')

	form.addEventListener('submit', e => {
		e.preventDefault()
		const emailValid = validateEmail(form.elements.email, EMAIL_INVALID, emailMsg)

		if (emailValid) {
			form.submit()
			form.reset()
		}
	})
}

const signUp = () => {
	document.querySelector('.signup-section').innerHTML = signForm
	signUpValidation()
}

export default signUp
