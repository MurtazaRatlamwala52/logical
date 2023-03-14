let arr = [1,2,3,5,7,6,8,10]

let brr = arr.sort((a,b) =>  a - b)
console.log(brr)
for (let i = 0; i < arr.length-1; i++) {
    if(arr[i+1] != arr[i] + 1) {
        console.log(arr[i] + 1)
    }
}
