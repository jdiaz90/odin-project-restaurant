import h1 from './h1'
import description from './divDescription'
import info from './info'

const body = document.querySelector('#content')
body.append(h1())
body.append(description())
body.append(info())