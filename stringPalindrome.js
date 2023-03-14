let str = 'madam';
let str2 =  '';

for(i = str.length - 1 ; i >= 0 ; i--){
    str2 += str[i];
}
if (str2 == str){
    console.log('Palindrome')
}else{
    console.log('Not a Palindrome');
}

// console.log(str2);