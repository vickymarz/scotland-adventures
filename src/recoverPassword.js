import { userServices } from './services/userServices'

const content = `
<section class="modal" id="recover-password">
	<div class="form-container">
		<h2>Recover your password</h2>
    <div class="cancel">
      <i class="fa fa-times fa-2x"></i>
  </div>
	<form action="" id="password-recovery" >
		<input
      type="text"
      name="email"
      id="recovery-email"
      placeholder="Enter Your Email"
      required
    />
					
    <input type="submit" value="RECOVER PASSWORD" id="submit" />
				
	</form>
  <div class="recovery-message"></div>
</section>
  `

const successMsg = `<div class="recovery-success">
			<h2>Action Required!</h2>
			<p>Kindly proceed to your email to verify password</p>
		</div>`

const recoverPassword = () => {
	document.querySelector('.password-recovery-section').innerHTML = content
	document.querySelector('.recovery-message').innerHTML = successMsg
	// UserPassword()
}

// const UserPassword = () => {
// 	const form = document.querySelector('#password-recovery')

// 	form.addEventListener('submit', e => {
// 		e.preventDefault()
// 		const email = form.elements.email.value
// 		const currentUser = { email }
// 		userServices.login(currentUser)
// 		form.reset()
// 	})
// }
export default recoverPassword
