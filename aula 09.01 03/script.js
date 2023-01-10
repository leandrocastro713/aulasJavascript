// after, before, prepend, append
// let div = document.querySelector('.container')
// div.before('AAAAAA')
// div.prepend('BBBBB')
// div.append('CCCCCC')
// div.after('DDDDDD')

// let agua = document.querySelector('#cachorro')
// agua.insertAdjacentText('beforebegin','aaaaa')
// agua.insertAdjacentHTML('afterbegin','<u>bbbbbb</u>')

// let el = document.createElement('span')
// el.innerText='ccccc'
// el.className='ex'

// agua.insertAdjacentElement('beforeend', el)

// // --------------------------------------------------

// let galho = document.querySelector('#arvore')
// galho.insertAdjacentText('beforebegin','ddddd')
// galho.insertAdjacentHTML('afterbegin','<u>bbbbbb</u>')

let b_left = document.querySelector('#btn_left')
let b_top = document.querySelector('#btn_top')
let b_right = document.querySelector('#btn_right')
let b_bottom = document.querySelector('#btn_bottom')
let c_central = document.querySelector('.central')


function inserir(onde){

    let el = document.createElement('span')
    el.innerText='NovoElemento'
    el.className='newElement'

    // console.log(onde)
    if(onde=='left'){
        b_left.insertAdjacentElement('beforebegin',el)
    }
    if(onde=='top'){
        b_top.insertAdjacentElement('beforebegin',el)
    }
    if(onde=='right'){
        b_right.insertAdjacentElement('afterend',el)
    }
    if(onde=='bottom'){
        b_bottom.insertAdjacentElement('afterend',el)
    }
}



for (const i = 0; i < 3 ; i ++ ){
    console.log(i)
}

console.log(i)