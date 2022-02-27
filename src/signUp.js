const signUp = () => {
	return `
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
						name="Email"
						id="signup-email"
						placeholder="Enter Your Email Address"
						required
					/>
				
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
					<input type="submit" value="CREATE AN ACCOUNT" id="submit" />
				</form>
				<div class="footer">
					<p>Already have an Account? <a href="login.html">Login</a></p>
				</div>
			</div>
		</div>
  `
}

export default signUp 
