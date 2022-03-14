import { fetchApi } from "./fetchApi";
import {BASE_URL, SIGNUP_URL, LOGIN_URL} from './rootEndpoints'
	

const register = async(params) => {
  await fetchApi.post(`${BASE_URL}/${SIGNUP_URL}`, params)
}

const login = async(params) => {
  await fetchApi.post(`${BASE_URL}/${LOGIN_URL}`, params)
}
