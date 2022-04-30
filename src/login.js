import { userServices } from './services/userServices'

const content = `
<section class="modal" id="show-login">
	<div class="form-container login-container">
		<h2>Login to your account</h2>
    <div class="cancel">
      <i class="fa fa-times fa-2x"></i>
    </div>
		<form action="" id="login-form" >
			<input
				type="text"
				name="email"
				id="login-email"
				placeholder="Enter Your Email"
				required
			/>
				<input
				type="password"
				name="password"
				id="password"
				autocomplete="current-password"
				placeholder="Enter Password"
				required
			/>
			
			<input type="submit" value="LOGIN" id="submit" />
				<p class="login-error"></p>
		</form>
		<div class="footer">
			<p>Don't have an account? <span class="show-signin">Sign Up</span></p>
			<p>
				Forgot Password?
				<span class="recover-password">Recover Password</span>
			</p>
		</div>
	</div>
	<div class="success-login"></div>
</section>
  `

	const successMsg = `<div class="login-success">
			<h2>Login Successful!</h2>
			<p>You will be redirected to your dashboard shortly</p>
		</div>`

const login = () => {
	document.querySelector('.login-section').innerHTML = content
	document.querySelector('.success-login').innerHTML = successMsg
	loginUser()
}

const loginUser = () => {
	const form = document.querySelector('#login-form')

	form.addEventListener('submit', e => {
		e.preventDefault()
		const email = form.elements.email.value
		const password = form.elements.password.value
		const currentUser = { email, password }
		userServices.login(currentUser)
		form.reset()
	})
}
export default login
