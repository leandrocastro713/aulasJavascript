let canguru = document.querySelector('div')

// canguru.addEventListener('click', ()=>{
//     console.log('click')
// })

// canguru.addEventListener('mousedown', ()=>{
//     console.log('mouse down')
// })

// canguru.addEventListener('mouseup', ()=>{
//     console.log('mouse up')
// })

// canguru.addEventListener('mouseenter', (div)=>{
//     console.log('mouse enter')
//     div.target.style.backgroundColor = 'red'
// })

// canguru.addEventListener('mouseleave', (div)=>{
//     console.log('mouse leave')
//     div.target.style.backgroundColor = 'yellow'
// })

// canguru.addEventListener('mousemove', ()=>{
//     console.log('mouse move')
// })

// canguru.addEventListener('dblclick', ()=>{
//     console.log('duplo clique')
// })

// canguru.addEventListener('contextmenu', ()=>{
//     console.log('context menu')
// })

canguru.addEventListener('click', (e)=>{
    console.log('mouse down')

    if(e.shiftKey){
        console.log('ok shift')
    }
    if(e.altKey){
        console.log('alt OK')
    }
    if(e.ctrlKey || e.altKey){
        console.log('ctrl ou alt OK')
    }

})

canguru.addEventListener('mousemove', (ev)=> {
    console.log(ev.pageX + ":" + ev.pageY)
})

let texto = document.querySelector('#texto')
    texto.addEventListener('keydown', (e)=> {
    console.log(e.key) //aparece só a letra
    console.log(e.code) //aparece o código da tecla
})