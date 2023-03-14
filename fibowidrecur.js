function fibowidrecur(num){
    if(num < 2){
        return num
    }
    return fibowidrecur(num-1) + fibowidrecur(num - 2)
}

function print(nterm){
    for(i=0 ; i < nterm; i++){
        console.log(fibowidrecur(i))
    }
}

print(7)