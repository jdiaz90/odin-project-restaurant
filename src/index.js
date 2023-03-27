import './css/style.css';

import h1 from './js/h1'
import description from './js/divDescription'
import info from './js/info'
import nav from './js/nav'

const body = document.querySelector('#content')
body.append(nav())
body.append(h1())
body.append(description())
body.append(info())