let arr = [1,2,4,8,6,3,7,5,2,4,87,98,4,8,45,1,21,2,454,5,48,8]
let arr2 = []

for (i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        arr2.push(arr[i])
    }
}

console.log(arr2)