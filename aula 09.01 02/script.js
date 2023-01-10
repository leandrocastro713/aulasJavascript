// after, before, prepend, append
let div = document.querySelector('.container')
div.before('AAAAAA')
div.prepend('BBBBB')
div.append('CCCCCC')
div.after('DDDDDD')

let agua = document.querySelector('#cachorro')
agua.insertAdjacentText('beforebegin','aaaaa')
agua.insertAdjacentHTML('afterbegin','<u>bbbbbb</u>')

let el = document.createElement('span')
el.innerText='ccccc'
el.className='ex'

agua.insertAdjacentElement('beforeend', el)

// --------------------------------------------------

let galho = document.querySelector('#arvore')
galho.insertAdjacentText('beforebegin','ddddd')
galho.insertAdjacentHTML('afterbegin','<u>bbbbbb</u>')
