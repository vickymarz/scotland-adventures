const displayMsg = (input, message, status) => {
	const htmlString = `<small>${message}<htmlString>`
	input.parentNode.insertAdjacentHTML('afterend', htmlString)
	input.className = status ? 'success' : 'error'
	return status
}

const showError = (input, message) => {
	setTimeout(() => {
		input.parentElement.nextElementSibling.remove()
	}, 3000)
	return displayMsg(input, message, false)
}

const showSuccess = input => {
	return displayMsg(input, '', true)
}

export const validateEmail = (input, invalidMsg) => {
	const emailRegex = /^([a-z 0-9 \. -]+)@([a-z 0-9 -]+)\.([a-z 0-9 \. -]{2,5}).([a-z 0-9]{2,8})?$/

	const email = input.value.trim()
	if (!emailRegex.test(email) || email !== email.toLowerCase()) {
		return showError(input, invalidMsg)
	}

	showSuccess(input)
	return true
}

export const validatePassword = (input, invalidMsg) => {
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\^&*])(?=.{8,})/

	const password = input.value.trim()
	if (!passwordRegex.test(password)) {
		return showError(input, invalidMsg)
	}
	input.nextSibling.remove()
	showSuccess(input)
	return true
}

export const passwordConfirmation = (input, invalidMsg, confirmPasswordInput) => {
	const confirmPassword = confirmPasswordInput.value.trim()
	const password = input.value.trim()
	if (password !== confirmPassword) {
		return showError(input, invalidMsg)
	}
	showSuccess(input)
	return true
}
