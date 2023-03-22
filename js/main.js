function toggleDarkMode() {
    const body = document.querySelector('body')
    const btn = document.querySelector('.toggle__button')

    btn.addEventListener('click', () => body.classList.toggle('dark_theme'))
}
toggleDarkMode()
