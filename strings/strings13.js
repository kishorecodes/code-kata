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
    for(let i=0;i<userData.length;i++){
        if(userData[i]===userData[i+1]){
            i+=1
            continue;
        } else {
            temp.push(userData[i])
        }
    }
    if(temp.length === 0){
        console.log('-1')
    } else {
        console.log(temp.join(' '))
    }
})
