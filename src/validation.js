const displayMsg = (input, message, status) => {
	const emailMsg = document.querySelector('#email-msg')
	const passwordMsg = document.querySelector('#password-msg')

	emailMsg.innerText = message
	// passwordMsg.innerText = message

	input.className = status ? 'success' : 'error'
	return status
}

const showError = (input, message) => {
	return displayMsg(input, message, false)
}

function showSuccess(input) {
	return displayMessage(input, '', true)
}

const validateEmail = (input, invalidMsg) => {
	const emailRegex = /^([a-z 0-9 \. -]+)@([a-z 0-9 -]+)\.([a-z 0-9 \. -]{2,5}).([a-z 0-9]{2,8})?$/

	const email = input.value.trim()
	if (!emailRegex.test(email) || email !== email.toLowerCase()) {
		return showError(input, invalidMsg)
	}
	showSuccess(input)
	return true
}

export default validateEmail
