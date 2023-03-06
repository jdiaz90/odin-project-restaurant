import listElement from './listElement'

export default function list() {

    let list = document.createElement('div')
    list.id = 'list'

    list.appendChild(listElement('./images/open.svg', 'Open All Days'))
    list.appendChild(listElement('./images/address.svg', 'Pl. del Marqués, 5, 33201 Gijón, Asturias'))
    list.appendChild(listElement('./images/phone.svg', '984490286'))
    list.appendChild(listElement('./images/delivery.svg', 'Home Delivery'))
    list.appendChild(listElement('./images/takeaways.svg', 'Takeaways'))

    return list

}