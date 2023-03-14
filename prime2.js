function IsPrime(n){
    aray = [2]
    for(i=2; i<=n; i++ ){
        for(j=2; j<i ; j++){
           if(i % j ==0 ){
            break
        }else if (j == i-1){
                aray.push(i)
            }else{
                continue
            }
           }
           } 
           return aray
        }
        


    console.log(IsPrime(100))

 