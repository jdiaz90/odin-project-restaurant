import home from './home'
import contact from './contact'
import menu from './menu'

export default function nav() {

    let nav = document.createElement('nav')
    let ul = document.createElement('ul')
    let liHome = document.createElement('li')
    let liContact = document.createElement('li')
    let liMenu = document.createElement('li')

    nav.className = 'menu'
    
    liHome.textContent = 'Home'
    liContact.textContent = 'Contact'
    liMenu.textContent = 'Menu'

    liHome.addEventListener('click', () => {
        home()
    })
    liContact.addEventListener('click', () => {
        contact()
    })
    liMenu.addEventListener('click', () => {
        menu()
    })

    nav.appendChild(ul)
    ul.appendChild(liHome)
    ul.appendChild(liContact)
    ul.appendChild(liMenu)

    return nav

}