let nome = document.querySelector("#nome")
let altura = document.querySelector('#altura')
let peso = document.querySelector('#peso')
let calcular = document.querySelector('#calcular')
let resultado = document.querySelector('#resultado')
let imc = parseFloat('0.20')


calcular.addEventListener('click', ()=> {
    console.log('clicou')
    console.log(nome.value)
    console.log(parseFloat(peso.value))
    console.log(parseFloat(altura.value))
    console.log('imc antes: ' + imc)
    imc = (peso.value/(altura.value*altura.value))
    console.log('imc depois: ' + imc)
    //Menos do que 18,5 - Abaixo do peso
    //Entre 18,5 e 24,9 - Peso normal
    //Entre 25 e 29,9 - Sobrepeso
    //Entre 30.0 e 34.9 - Obesidade Grau 1 ; 
    //Entre 35.0 e 39.9 - Obesidade Grau 2 ; 
    //Acima de 40 - Obesidade Grau 3
    console.log(imc)
    let resultadoString = nome.value + ': seu IMC é de ' + parseInt(imc) + ' e você está '
    if(imc<18.5){
        resultadoString += 'abaixo do peso.'
    }
    if(imc>=18.5 && imc <=24.9){
        resultadoString += 'com peso normal.'
    }
    if(imc>=25 && imc <=29.9){
        resultadoString += 'com sobrepeso.'
    }
    if(imc>=30 && imc <=34.9){
        resultadoString += 'com obesidade grau 1.'
    }
    if(imc>=35 && imc <=39.9){
        resultadoString += 'com obesidade grau 2.'
    }
    if(imc>=40){
        resultadoString += 'com obesidade grau 3.'
    }

    
    resultado.textContent = resultadoString
})