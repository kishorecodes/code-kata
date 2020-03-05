const readline = require('readline')
const inp = readline.createInterface({
  input: process.stdin
})
let userData = [];
inp.on('line',(data)=>{
  userData = data
})

inp.on('close',()=>{
    let sum = 0;
    for(let i =0 ;i<userData.length;i++){
        sum+=userData.charCodeAt(i);
    }
    console.log(sum)
})
