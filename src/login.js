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
						name="Password"
						id="password"
						autocomplete="current-password"
						placeholder="Enter Password"
						required
					/>
					
					<input type="submit" value="LOGIN" id="submit" />
				</form>
				<div class="footer">
					<p>Don't have an account? <a href="sign_up.html">Sign Up</a></p>
					<p>
						Forgot Password?
						<a href="./recover_password.html">Recover Password</a>
					</p>
				</div>
			</div>
		</section>
  `
const login = () => {
	document.querySelector('.login-section').innerHTML = content
}
export default login
