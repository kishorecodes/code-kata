const readline = require('readline')
const inp = readline.createInterface({
    input: process.stdin
})
let userData = []
inp.on('line',(data)=>{
    userData = data
})
inp.on('close',()=>{
    let sum1 = 0;
    for(let i=0;i<userData.length;i++){
        if(userData[i] >= 0 && userData[i]<=9){
            sum1+=parseInt(userData[i])
        }
    }
    console.log(sum1)
})
