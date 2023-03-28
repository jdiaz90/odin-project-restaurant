import h1 from './h1'
import nav from './nav'
import food from './food'
import tennessee from '../images/tennessee-burger.png'
import fajita from '../images/fajita.jpg'
import fish from '../images/fish.jpg'
import kebab from '../images/kebab.jpg'
import meatballs from '../images/meatballs.jpg'
import samosa from '../images/samosa.jpg'

export default function menu() {
    
    const body = document.querySelector('#content')
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }

    const grid = document.createElement('div')
    grid.className = 'grid-menu-food'

    const item1 = food(tennessee, 'Tennessee Burger')
    const item2 = food(fajita, 'Fajita')
    const item3 = food(fish, 'Fish & Chips')
    const item4 = food(kebab, 'Doner Kebab')
    const item5 = food(meatballs, 'Meatballs')
    const item6 = food(samosa, 'Cheese Samosa')

    grid.appendChild(item1)
    grid.appendChild(item2)
    grid.appendChild(item3)
    grid.appendChild(item4)
    grid.appendChild(item5)
    grid.appendChild(item6)

    body.append(nav())
    body.append(h1('Menu Casa Fernando'))
    body.append(grid)

}