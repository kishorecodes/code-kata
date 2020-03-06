const readline = require('readline')
const inp = readline.createInterface({
    input: process.stdin
})
let userData = []
let temp = []
inp.on('line',(data)=>{
    userData = data.split("")
})
inp.on('close',()=>{
    let evenArr = []
    let oddArr = []
    for(let i=0;i<userData.length;i++){
        (i%2===0) ? evenArr.push(userData[i]) : oddArr.push(userData[i])
    }
    console.log(evenArr.join(""),oddArr.join(""))
})
