import listElement from './listElement'
import open from '../images/open.svg'
import address from '../images/address.svg'
import phone from '../images/phone.svg'
import delivery from '../images/delivery.svg'
import takeaways from '../images/takeaways.svg'

export default function list() {

    let list = document.createElement('div')
    list.id = 'list'

    list.appendChild(listElement(open, 'Open All Days'))
    list.appendChild(listElement(address, 'Pl. del Marqués, 5, 33201 Gijón, Asturias'))
    list.appendChild(listElement(phone, '984490286'))
    list.appendChild(listElement(delivery, 'Home Delivery'))
    list.appendChild(listElement(takeaways, 'Takeaways'))

    return list

}