import avatarIcon from '../images/profile.png'
import { validateEmail, validatePassword, passwordConfirmation } from '../validation'
import { userServices } from '../services/userServices'
import capitalizeCharAt from '../helpers'

const renderProfile = datas => {
	const { firstName, lastName, email, profilePicture, phone } = datas
	const content = document.querySelector('.profile')
	content.innerHTML = ''

	content.innerHTML = `<div class="profileInfo">
	<h4>Personal Information</h4>
	<button class="submit" id="close-profile">Close</button>
</div>
<span></span>
<div class="profileContainer">
	<div class="avatar-profile">
		<div class="imageContainer">
			<img src=${profilePicture || avatarIcon} alt='profile-pic' id="profile-pics"/>
		</div>
		<h3>${firstName  || ''}  </h3>
    <input type='file' name='file' id='input' />
    <label for='input' class="imageUpload">
    		<i class="fas fa-camera"></i>
    </label>
    <small id="wait"> Please wait... </small>
  </div>
</div>
<span></span>
<div class="informations">
  <div class="userInformation">
    <div class="userDetails">
      <h4>Account Information</h4>

  <form class="form" id="profile-form">
    <div class="input-container">
      <label for='FirstName' class="label">
        First Name
      </label>
      <input
        type='text'
        name='firstName'
        class="input"
        placeholder='First Name'
        id='FirstName'
        value=${firstName || ''}
      />
    </div>
        <div class="input-container">
          <label for='lastName' class="label">
            Last Name
          </label>
          <input
            type='text'
            name='lastName'
            class="input"
            placeholder='Last Name'
            id='FirstName'
            value=${lastName || ''}
          />
        </div>
        <div class="input-container">
          <label for='Email' class="label">
            Email
          </label>
          <input
            type='email'
            name='email'
            class="input"
            placeholder='Email'
            id='email'
            value=${email || ''}
          />
        </div>
        <div class="input-container">
          <label for='Phone' class="label">
            Phone Number
          </label>
          <input
            type='tel'
            name='phone'
            class="input"
            placeholder='Phone Number';
            value=${phone || ''}
          />
        </div>
        <button type="submit" class="submit">Update Profile</button>
      </form>
    </div>
  </div>
  <div class="password">
      <h4>Change Password</h4>
          <form id="update-password">
            <div class="input-container">
              <label for='currentPassword' class="label">
                Current Password
              </label>
              <input
                type='password'
                name='password'
                class="input"
                placeholder='Current Password'
                id='currentPassword'
              />
            </div>
            <div class="input-container">
              <label for='newPassword' class="label">
                New Password
              </label>
              <Input
                type='password'
                name='newPassword'
                class="input"
                placeholder='New Password'
                id='newPassword'
              />
            </div>
            <div class="input-container">
              <label for='confirmPassword' class="label">
                Confirm Password
              </label>
              <input
                type='password'
                name='confirmPassword'
                class="input"
                placeholder='Confirm Password'
                id='confirmPassword'
              />
            </div>
            <button class="submit">Update Password</button>
          </form>
    </div>
</div>
</div>
<div class="profile-container"></div>
`
}

const successMsg = `<div class="profile-success">
			<h2>Success!</h2>
			<p class="profile-text">Profile updated successfully</p>
		</div>`


const uploadImage = () => {
  const wait = document.querySelector('#wait')
  let image = document.querySelector('#profile-pics')
  document.querySelector('#input').addEventListener('input', async function (e) {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'scotland_tourism')
   
    const isLoading = true
		const res = await fetch('https://api.cloudinary.com/v1_1/douramz6e/image/upload', {
			method: 'POST',
			body: formData,
		})
		const fileImage = await res.json()
    image.src = fileImage.secure_url
    if (isLoading) {
        wait.style.display = 'block'
        setTimeout(() => {
         wait.style.display = 'none'
        }, 5000);
      } 
	})

}


const profileValidation = async () => {
	const form = document.querySelector('#profile-form')
	const formPassword = document.querySelector('#update-password')
	const EMAIL_INVALID = 'Kindly enter a valid email address e.g abc@gmail.com'
	const PASSWORD_INVALID =
		'Minimum of 8 characters required and must contain at least one lowercase, one uppercase, one numeric, and one special character e.g Abc01@ff'
	const PASSWORD_MATCH_INVALID = 'Password do not match. Please check and try again'

	form.addEventListener('submit', async e => {
    e.preventDefault()
		const emailValid = validateEmail(form.elements.email, EMAIL_INVALID)

		if (emailValid) {
			const firstName = capitalizeCharAt(form.elements.firstName.value, 0)
			const lastName = capitalizeCharAt(form.elements.lastName.value, 0)
			const email = form.elements.email.value.toLowerCase()
			const phone = form.elements.phone.value
      const profilePicture = document.querySelector('#profile-pics').getAttribute('src')
			const currentUser = { firstName, lastName, email, phone, profilePicture }
      const result = await userServices.updateProfile
      (currentUser)

			const container = document.querySelector('.profile-success')

			if (result.message === 'Record updated') {
				container.style.display = 'block'
				setTimeout(() => {
					container.style.display = 'none'
				}, 5000)
			}
    }
    
	})

	formPassword.addEventListener('submit', async e => {
		e.preventDefault()
     
		const passwordValid = validatePassword(formPassword.elements.newPassword, PASSWORD_INVALID)
		const passwordMatch = passwordConfirmation(
			formPassword.elements.confirmPassword,
			PASSWORD_MATCH_INVALID,
			formPassword.elements.newPassword,
    )
    if (passwordValid && passwordMatch) {
      const password = formPassword.elements.password.value
			const newPassword = formPassword.elements.newPassword.value
      const currentUser = { password, newPassword}
      const result = userServices.updateProfile(currentUser)

      	if (result.message === 'Record updated') {
				container.style.display = 'block'
				setTimeout(() => {
					container.style.display = 'none'
				}, 1000)
			}
    }
	})
}

const profile = async () => {
  const datas = await userServices.getUser()
	renderProfile(datas)
	document.querySelector('.profile-container').innerHTML = successMsg
	profileValidation()
 uploadImage()
	document.querySelector('#close-profile').addEventListener('click', () => {
		document.querySelector('.profile').style.display = 'none'
	})
}

export default profile
