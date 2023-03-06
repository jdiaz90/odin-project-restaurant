export default function description() {

    let div = document.createElement('div')
    let firstP = document.createElement('p')
    let secondP = document.createElement('p')
    let thirdP = document.createElement('p')

    div.id = 'description'
    firstP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores nesciunt ad laborum, sapiente quaerat deleniti quibusdam natus necessitatibus fuga adipisci maxime omnis voluptatem beatae rerum alias mollitia? Possimus, odit?'
    secondP.textContent = 'Natus facere doloribus inventore maiores enim esse accusantium ipsam a libero hic dolorum nesciunt odit quibusdam officiis, molestiae et est nobis ipsum sunt consequuntur explicabo sequi repellat. Facilis, fuga quam.'
    thirdP.textContent = 'Illum enim eligendi architecto animi. Expedita, neque! Soluta, quis quidem corporis officia, a ullam modi recusandae cupiditate labore aliquid minima facere quibusdam odit sequi molestias inventore sapiente eos iste hic.'

    div.appendChild(firstP)
    div.appendChild(secondP)
    div.appendChild(thirdP)

    return div

}