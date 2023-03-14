let arr = [12,5,45,1,21,54,8,5,2,1,1,54,5,8,8,5,2,48,8,54,5,]

const obj = {}
for(i=0;i<arr.length;i++){
    // obj[arr[i]] = 
    if(obj[arr[i]]){
        obj[arr[i]] += 1 
    }else{
        obj[arr[i]] = 1
    }
}

for(ele in obj){
    if(obj[ele]>1){
        console.log(ele)
    }
}









// function duplicate(arr){
//     temp = null
//     brr = []
//     for (i=0; i < arr.length; i++){
//         for(j=i+1; j < arr.length; j++){
//             if(arr[i]>arr[j]){
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     t = 0
//     while(t < arr.length){
//         if(arr[t] == arr[t+1]){
//             brr.push(arr[t])
//         }
//         t++
//     }
//     return brr
// }

// console.log(duplicate([1,2,2,,2,5,8,1,3,584,135]))



