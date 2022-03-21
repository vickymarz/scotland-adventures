import { fetchApi } from './fetchApi'
import {
	BASE_URL,
	SIGNUP_URL,
	ADMIN_SIGNUP_URL,
	LOGIN_URL,
	FORGOT_PASSWORD_URL,
	RESET_PASSWORD_URL,
} from './rootEndpoints'

const register = async params => {
	const result = await fetchApi.post(`${BASE_URL}/${SIGNUP_URL}`, params)
	const container = document.querySelector('.signup-success')
	const success = document.querySelector('.success-text')

	if (result.message === 'User with email already exists') {
		const error = document.querySelector('.verify-email')
		error.style.display = 'flex'
		error.textContent = 'This email already exists'
		setTimeout(() => {
			error.style.display = 'none'
		}, 3000)
		return result
	}
	if (result.code === 200) {
		container.style.display = 'block'
		setTimeout(() => {
			container.style.display = 'none'
		}, 5000)
	}

	if (result.code === 204) {
		container.style.display = 'block'
		success.textContent =
			'Your email has been verified. You already have an account. Kindly login with your admin email and password'
		setTimeout(() => {
			container.style.display = 'none'
		}, 5000)
	}

	if (result.code === 208) {
		container.style.display = 'block'
		success.textContent = 'You are already a basic User!'
		setTimeout(() => {
			container.style.display = 'none'
		}, 5000)
	}
}

const adminRegister = async params => {
	const result = await fetchApi.post(`${BASE_URL}/${ADMIN_SIGNUP_URL}`, params)
	const success = document.querySelector('.success-text')
	const container = document.querySelector('.signup-success')

	if (result.code === 200) {
		container.style.display = 'block'
		setTimeout(() => {
			container.style.display = 'none'
		}, 5000)
	}

	if (result.code === 204) {
		container.style.display = 'block'
		success.textContent =
			'Your email has been verified. You already have an account. Kindly login with your basic user email and password'
		setTimeout(() => {
			console.log(container)
			container.style.display = 'none'
		}, 5000)
	}

	if (result.code === 208) {
		container.style.display = 'block'
		success.textContent = 'You are already an admin!'
		setTimeout(() => {
			container.style.display = 'none'
		}, 5000)
	}
	return result
}

const login = async params => {
	const result = await fetchApi.post(`${BASE_URL}/${LOGIN_URL}`, params)
	localStorage.setItem('jwt-token', result.accessToken)
	return result
}

const forgotPassword = async email => {
	await fetchApi.post(`${BASE_URL}/${FORGOT_PASSWORD_URL}`, { email })
}

const resetPassword = async ({ token, password, confirmPassword }) => {
	await fetchApi.post(`${BASE_URL}/${RESET_PASSWORD_URL}`, { token, password, confirmPassword })
}

const getAll = async () => {
	return await fetchApi.get(BASE_URL)
}

const getById = async () => {
	return await fetchApi.get(`${BASE_URL}/${id}`)
}

export const userServices = {
	register,
	adminRegister,
	login,
	forgotPassword,
	resetPassword,
	getAll,
	getById,
}
