import image from './image'

export default function listElement(src, text) {

    let element = document.createElement('div')
    let divText = document.createElement('div')

    divText.textContent = text

    element.appendChild(image(src))
    element.appendChild(divText)

    return element

}