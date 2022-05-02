<<<<<<< HEAD
=======
import jwt_decode from 'jwt-decode'
>>>>>>> d9e10d90dbb1cac7fda6dfa2031a591ed9966479

const authHeader = () => {
	const token = localStorage.getItem('jwt-token')
	if (token) {
<<<<<<< HEAD
		return { authorization: token }
=======
		const decoded = jwt_decode(token)
		return { authorization: decoded }
>>>>>>> d9e10d90dbb1cac7fda6dfa2031a591ed9966479
	} else {
		return {}
	}
}

const post = async (url, data) => {
	const config = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			...authHeader(url),
		},
		body: JSON.stringify(data),
	}

	try {
		const response = await fetch(url, config)
		const datas = await response.json()
		return datas
	} catch (err) {
		return err
	}
}

const get = async url => {
	const config = {
		method: 'GET',
		headers: authHeader(url),
	}
<<<<<<< HEAD
	try {
		const response = await fetch(url, config)
		const datas = await response.json()
		return datas
	} catch (err) {
		return err
	}
}

const _delete = async (url, data) => {
	const config = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			...authHeader(url),
		},
		body: JSON.stringify(data),
	}
=======
>>>>>>> d9e10d90dbb1cac7fda6dfa2031a591ed9966479

	try {
		const response = await fetch(url, config)
		const datas = await response.json()
		return datas
	} catch (err) {
		return err
	}
}

const put = async (url, data) => {
	const config = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			...authHeader(url),
		},
		body: JSON.stringify(data),
	}

	try {
		const response = await fetch(url, config)
		const datas = await response.json()
		return datas
	} catch (err) {
		return err
	}
}

export const fetchApi = {
	post,
	get,
<<<<<<< HEAD
	_delete,
=======
>>>>>>> d9e10d90dbb1cac7fda6dfa2031a591ed9966479
	put,
}
