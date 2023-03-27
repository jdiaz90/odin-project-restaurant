import h1 from './h1'
import form from "./form"
import contactMessage from './contactMessage'
import nav from './nav'

export default function contact() {
    
    const body = document.querySelector('#content')
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }

    body.append(nav())
    body.append(h1('Contact with Casa Fernando'))
    body.append(contactMessage())
    body.append(form())

}