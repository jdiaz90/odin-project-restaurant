import list from './list'
import map from './map'

export default function info() {

    let info = document.createElement('div')
    info.id = 'info'

    info.appendChild(list())
    info.appendChild(map())

    return info

}