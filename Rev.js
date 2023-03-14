num = 878945

temp = num
var rev = 0
while(temp != 0){
    rem =  temp % 10
    rev = rev * 10 + rem
    temp = Math.round(temp/10)
}

console.log(rev)