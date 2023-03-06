export default function map() {

    let map = document.createElement('iframe')
            
    map.setAttribute(
        'src',
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11567.753436969462!2d-5.6630778!3d43.5453268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeaab66494b3b1268!2sCasa%20Fernando!5e0!3m2!1ses!2ses!4v1677705559486!5m2!1ses!2ses'
    )
    map.setAttribute(
        'width',
        '300'
    )
    map.setAttribute(
        'height',
        '225'
    )
    map.setAttribute(
        'style',
        'border:0;'
    )
    map.setAttribute(
        'loading',
        'lazy'
    )
    map.setAttribute(
        'referrerpolicy',
        'no-referrer-when-downgrade'
    )

    return map

}