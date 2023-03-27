export default function nav() {

    let nav = document.createElement('nav')
    let ul = document.createElement('ul')
    let home = document.createElement('li')
    let about = document.createElement('li')
    let menu = document.createElement('li')

    nav.className = 'menu'
    
    home.textContent = 'Home'
    about.textContent = 'About'
    menu.textContent = 'Menu'

    nav.appendChild(ul)
    ul.appendChild(home)
    ul.appendChild(about)
    ul.appendChild(menu)

    return nav

}