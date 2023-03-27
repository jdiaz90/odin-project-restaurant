import h1 from './h1'
import description from './divDescription'
import info from './info'
import nav from './nav'

export default function home() {
    
    const body = document.querySelector('#content')
    body.append(nav())
    body.append(h1())
    body.append(description())
    body.append(info())

}