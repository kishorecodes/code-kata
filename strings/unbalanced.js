const readline = require('readline')

const inp = readline.createInterface({
    input: process.stdin
})

let userData = []
inp.on('line',(data)=>{
    userData = data
})

inp.on('close',()=>{
    let left = 0;
    let right = 0;
    for(let i = 0;userData.length;i++){
        if(userData[i]!==undefined){
            if(userData[i] == "("){
            left++
            } else if(userData[i] == ")"){
                right++
            } else {
                continue;
            }
        } else {
            break;
        }
    }
    if(left == right){
        console.log("1")
    } else{
        console.log("0")
    }
})
