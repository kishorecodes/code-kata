const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userData = []
let temp = []

inp.on("line", (data) => {
    userData = data.split('')
});
inp.on("close",()=>{
    for(let i = userData.length - 1;i>=0;i--){
        temp.push(userData[i])
    }
    if(userData.join('') === temp.join('')){
        console.log('yes')
    } else {
        console.log('no')
    }
})
