import { fetchApi } from './fetchApi'
import { BASE_URL, SIGNUP_URL } from './rootEndpoints'

const register = params => {
	fetchApi.post(`${BASE_URL}/${SIGNUP_URL}`, params)
}
