import { fetchApi } from './fetchApi'
import {
	BASE_URL,
	SIGNUP_URL,
	LOGIN_URL,
	FORGOT_PASSWORD_URL,
	RESET_PASSWORD_URL,
} from './rootEndpoints'

const register = async params => {
	await fetchApi.post(`${BASE_URL}/${SIGNUP_URL}`, params)
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
	login,
	forgotPassword,
	resetPassword,
	getAll,
	getById,
}
