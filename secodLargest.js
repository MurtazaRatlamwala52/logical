function Sec(arr){
    largest = null
    secndlargest = null 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == largest ){
            continue
        }
        else if(arr[i]>largest ){
            secndlargest = largest
            largest = arr[i]  
        }else if(arr[i] > secndlargest || arr[i] == secndlargest){
            secndlargest = arr[i]
        }
    }
    return secndlargest
}

console.log(Sec( [12, 35, 1, 10, 34, 1, 35]))

// //[]

// var secondHighest = function(s) {
//     arr = []
//     for(let i = 0; i < s.length; i++){
//         if(isNaN(s[i])){
//         continue
//         }else{
//             arr.push(s[i])
//         }
//     }
//     var brr = arr.sort()
//     let sec = brr[brr.length-2]
//     let large = brr[brr.length-1]
//     if(brr.length == 0 || sec == large ) return - 1
//     else return sec
// };

// console.log(secondHighest("dfa12321afd"))

