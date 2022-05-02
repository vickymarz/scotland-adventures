import { userServices } from './services/userServices'
import { validateEmail } from './validation'
const content = `
<section class="modals" id="recover-password">
	<div class="form-container reset-password-container">
		<h2>Recover your password</h2>
    <div class="cancel" id="close-recovery">
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
  </div>  
  <div class="recovery-message"></div>
</section>
  `

const successMsg = `<div class="recovery-success">
			<h2>Action Required!</h2>
			<p>Kindly proceed to your email to recover your password</p>
		</div>`

const recoverPassword = () => {
	document.querySelector('.password-recovery-section').innerHTML = content
	document.querySelector('.recovery-message').innerHTML = successMsg
	resetPasswordValidation()
}

const resetPasswordValidation = () => {
	const form = document.querySelector('#password-recovery')
	const EMAIL_INVALID = 'Kindly enter a valid email address e.g abc@gmail.com'

	form.addEventListener('submit', e => {
		e.preventDefault()
    const emailValid = validateEmail(form.elements.email, EMAIL_INVALID)
    if (emailValid) { 
      const email = form.elements.email.value.toLowerCase()      
      const currentUser = { email }
      userServices.forgotPassword(currentUser)
      
      const container = document.querySelector('.recovery-success')
			container.style.display = 'block'
			setTimeout(() => {
				container.style.display = 'none'
			}, 5000)
				form.reset()
    }
	})
}
export default recoverPassword
