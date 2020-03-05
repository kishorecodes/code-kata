const readline = require('readline')
const inp = readline.createInterface({
    input: process.stdin
})
let userData = []
inp.on('line',(data)=>{
    userData = data.split(" ")
})
inp.on('close',()=>{
    function removeDup(userData){
        let temp = 0;
    for(let i=0;i<userData.length;i++){
        if(userData[i] == userData[i+1]){
            userData.splice(i,2)
            temp++
        }
    }
    if(temp==1){
        removeDup(userData)
    } else {
        console.log(userData.join(" "))
    }
    }
    removeDup(userData)
})
