const interSectionObserver = () => {
	const header = document.querySelector('header')
	const introSection = document.querySelector('.intro-title')

	const options = {
		rootMargin: '-160px',
	}

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				header.classList.add('header-active')
			} else {
				header.classList.remove('header-active')
			}
		})
	}, options)

	observer.observe(introSection)
}

export default interSectionObserver