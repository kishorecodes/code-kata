const readline = require('readline')
const inp = readline.createInterface({
    input: process.stdin
})
let userData = []
inp.on('line',(data)=>{
    userData = data.split("")
})
inp.on('close',()=>{
    let unique = new Set()
    let temp = []
    for(let i =0;i<userData.length;i++){
        unique.add(userData[i])
    }
    const a = [...unique]
    if(a.length === 3){
        console.log("Wonder")
    } else {
        console.log("-1")
    }
})
