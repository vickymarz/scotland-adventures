const displayMsg = (input, message, status, element) => {
	element.innerText = message
	input.className = status ? 'success' : 'error'
	return status
}

const showError = (input, message, element) => {
	return displayMsg(input, message, false, element)
}

const showSuccess = input => {
	return displayMessage(input, '', true)
}

const validateEmail = (input, invalidMsg, element) => {
	const emailRegex = /^([a-z 0-9 \. -]+)@([a-z 0-9 -]+)\.([a-z 0-9 \. -]{2,5}).([a-z 0-9]{2,8})?$/

	const email = input.value.trim()
	if (!emailRegex.test(email) || email !== email.toLowerCase()) {
		return showError(input, invalidMsg, element)
	}
	showSuccess(input)
	return true
}

export default validateEmail
