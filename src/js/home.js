import h1 from './h1'
import description from './divDescription'
import info from './info'
import nav from './nav'

export default function home() {
    
    const body = document.querySelector('#content')
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }

    body.append(nav())
    body.append(h1('Casa Fernando'))
    body.append(description())
    body.append(info())

}