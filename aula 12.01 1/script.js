document.querySelector('button').onclick = (btn) => {

    let h1 = document.querySelector('h1');

    if(h1.style.backgroundColor == ''){
        h1.style.backgroundColor = 'yellow'
    }else{
        h1.style.backgroundColor = '';
    }
}