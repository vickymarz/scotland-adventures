const baseURL = 'https://touristsstorytellingapp.heroku.com' 
const signupURL = 'api/auth/signup'

 const postData = async data => {
	const config = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	}

	try {
		const response = await fetch(`${baseURL}/${signupURL}`, config)
    const datas = await response.json()
    console.log(datas)
    const result = await datas.result
    console.log(result)
		return result
	} catch (err) {
		return err
	}
}

export default postData
