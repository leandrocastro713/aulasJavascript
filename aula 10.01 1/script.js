let item = document.querySelectorAll('button')

function destacar(qual){
    for(let i=0; i<6; i++){
        console.log(i,qual)
        if((i+1)==qual){
            item[i].style.backgroundColor='blue'
            item[i].style.color='white'
        }else{
            item[i].style.backgroundColor='red'
            item[i].style.color='white'
        }
    }
}
