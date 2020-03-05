const readline = require('readline')
const inp = readline.createInterface({
    input: process.stdin
})
let userData = []
inp.on('line',(data)=>{
    userData = data.split("")
})
inp.on('close',()=>{
    let total = 0;
    let temp = [];
    for(let i = 0;i<userData.length;i++){
        if(userData[i]>=0 && userData[i]<=9){
            total+=Number(userData[i])
        } else {
            temp.push(userData[i])
        }
    }
    temp.push(total)
    console.log(temp.join(""))
})
