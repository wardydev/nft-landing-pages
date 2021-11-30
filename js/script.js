const hamburgerMenu = document.querySelector('.hamburger-menu')

hamburgerMenu.addEventListener('click', function() {
    const closeMenu = document.querySelector('.close-menu')
    closeMenu.classList.remove('hidden')

    closeMenu.addEventListener('click', function() {
        this.classList.add('hidden')
    })
})