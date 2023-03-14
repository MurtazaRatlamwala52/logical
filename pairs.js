let arr =  [80,60,10,50,30,100,0,50];

for (i=0; i<arr.length - 1 ; i++){
    for(j=i+1; j<=arr.length; j++){
        if(arr[i] + arr[j] == 100){
            console.log(arr[i] + ', ' + arr[j]); 
        }
}
}