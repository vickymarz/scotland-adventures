function introSectionObserver() {
	const header = document.querySelector('header')
	const introSection = document.querySelector('.divider')

	const options = {
		rootMargin: '0px',
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
introSectionObserver()

