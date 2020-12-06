let btns = document.querySelectorAll('.tab-btn')
let about = document.querySelector('.about')
let articles = document.querySelectorAll('.content')

about.addEventListener('click', function (e) {
	let id = e.target.dataset.id
	if (id) {
		// remove active from other buttons
		btns.forEach(function (btn) {
			btn.classList.remove('active')
		})

		// active tabs which one I want to highlight
		e.target.classList.add('active')

		// hide other articles
		articles.forEach(function (article) {
			article.classList.remove('active')
		})

        // active content which one I want to highlight
        let element = document.getElementById(id)
        element.classList.add('active')
	}
})
