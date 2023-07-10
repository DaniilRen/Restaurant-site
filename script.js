const button = document.getElementById('burger-menu-btn')
const menu = document.getElementById('menu')

button.addEventListener('click', () => {
	menu.classList.toggle('hidden')
})