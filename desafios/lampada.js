let btnLigar = document.querySelector('#turnOn')
let btnDesligar = document.querySelector('#turnOff')
let imgLampada = document.querySelector('#lamp')
let quebrou = false

btnLigar.addEventListener('click', ()=> {
    if(!quebrou){
        imgLampada.setAttribute('src', './img/ligada.jpg')
    }else{
        alert('A lâmpada está quebrada!')
    }
})
btnDesligar.addEventListener('click', ()=> {
    if(!quebrou){
        imgLampada.setAttribute('src', './img/desligada.jpg')
    }else{
        alert('A lâmpada está quebrada!')
    }
})
imgLampada.addEventListener('click', ()=> {
    if(!quebrou){
        imgLampada.setAttribute('src', './img/quebrada.jpg')
        quebrou=true;
    }else{
        alert('Já está quebrada. Quer quebrar mais?')
    }
})