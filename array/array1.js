const readline = require('readline')
const inp = readline.createInterface({
    input: process.stdin
})
let userData = []
let temp = []
inp.on('line',(data)=>{
    userData = data.split(" ")
})
inp.on('close',()=>{
    for(let i = 0;i<userData.length;i++){
        for(let j=i+1;j<userData.length;j++){
            if(userData[i] === userData[j]){
                temp.push(userData[i])
            }
        }
    }
    console.log(temp.join(" "))
})
