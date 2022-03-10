const interSectionObserver = () => {
	const header = document.querySelector('header')
	const introSection = document.querySelector('.intro')

	const options = {
		rootMargin: '-280px',
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
