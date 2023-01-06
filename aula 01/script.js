console.log('ta funcionando');
let btnClick = document.getElementById('btn');

btnClick.addEventListener('click',function(){
    // alert('funcionou o click')
    btnClick.style.backgroundColor='#203090';
    document.getElementById('h3').innerText="Leandro Castro"
    document.getElementById('h3').style.fontSize='30px';
    document.getElementById('h3').style.fontFamily='courier';
    document.getElementsByTagName('p')[0].style.fontSize='22px'
    document.getElementsByTagName('p')[1].style.fontSize='28px'
    document.getElementsByTagName('input')[0].value='Texto formado depois do click'
    
})