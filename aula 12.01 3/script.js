let cachorro = document.querySelector('div')

cachorro.addEventListener('mousemove', (ev => {
    let el = document.createElement('div')
    el.className='elemento'

    el.style.top = ev.pageY.toString() + 'px'
    el.style.left = ev.pageX.toString() + 'px'

    console.log(el.style.left)
    document.querySelector('div').appendChild(el)
}))