const readline = require('readline')
const inp = readline.createInterface({
    input: process.stdin
})
let userData = []
inp.on('line',(data)=>{
    userData = data.split("")
})
inp.on('close',()=>{
    const arr = userData.length;
    for(let i = 0;i<userData.length;i++){
        if(arr % 2 !== 0){
            let temp = Math.round((arr / 2))
            userData[temp - 1] = '*';
        } else {
            let temp = arr / 2
            userData[temp] = '*';
            userData[temp - 1] = '*';
        }
    }
    console.log(userData.join(""))
})
