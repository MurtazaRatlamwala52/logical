s = 'rat'
t = 'car'
opStr = []

let arr = s.split("")
let brr = t.split("")

if(s.length != t.length) return false

    for(i = 0; i < arr.length; i++){
        for(j = 0; j < brr.length; j++){
            if(arr[i] == brr[j]){
                opStr.push(arr[i])  
                brr.splice(j, 1); 
                break
            }
        }
}
opStr = opStr.join('')
console.log(opStr)
s = arr.join("")
t = brr.join("")
if(s == opStr ){
    console.log(true) 
}else return console.log(false)

// arr = [1,3,5,4,8,9,]
// arr2 = arr.sort()