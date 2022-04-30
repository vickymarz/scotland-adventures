const openModal = () => {
	const modalButtons = Array.from(document.querySelectorAll('.popup'))
	const modals = Array.from(document.querySelectorAll('.modal'))

	const modalButtonZip = modalButtons.map((button, i) => [button, modals[i]])

	modalButtonZip.forEach(pair => {
		pair[0].addEventListener('click', () => {
			pair[1].style.display = 'block'
		})
	})
}
openModal()
const closeModal = () => {
	document.querySelectorAll('.clear').forEach(close => {
		close.addEventListener('click', () => {
			document.querySelectorAll('.modal').forEach(modal => {
				modal.style.display = 'none'
			})
		})
	})
}
closeModal()
