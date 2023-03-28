import image from './image'

export default function food(src, text) {

    let food = document.createElement('div')
    let img = image(src)
    let title = document.createElement('div')

    food.className = 'food-item'
    title.textContent = text

    food.appendChild(img)
    food.appendChild(title)

    return food

}