import { userServices } from './services/userServices'

const content = `
  		<section class="modal">
			<div class="form-container">
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
					<p>Don't have an account? <a href="sign_up.html">Sign Up</a></p>
					<p>
						Forgot Password?
						<a href="./recover_password.html">Recover Password</a>
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
	const success = document.querySelector('.login-success')

	form.addEventListener('submit', e => {
		e.preventDefault()
		const email = form.elements.email.value
		const password = form.elements.password.value
		const currentUser = { email, password }
		userServices.login(currentUser)
		success.style.display = 'block'
		setTimeout(() => {
			success.style.display = 'none'
			window.location.assign('/dashboard.html')
		}, 3000)
		form.reset()
	})
}
export default login
