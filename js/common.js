document.addEventListener('DOMContentLoaded', function() {

	const cardListTime = document.querySelectorAll('[data-time]')

	cardListTime.forEach(item => {
		const cardTime = item.querySelectorAll('time')
		const cardBtn = item.querySelector('[data-btn]')

		if (cardTime.length > 4) {
			for (let i = 3; i < cardTime.length; i++){
				cardTime[i].classList.add('hidden')

				cardBtn.addEventListener('click', () => {
					cardTime[i].classList.remove('hidden')
					cardBtn.classList.add('hidden')
				})
			}
			cardBtn.classList.remove('hidden')
		}
	})

})

