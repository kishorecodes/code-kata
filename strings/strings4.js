const readline = require('readline')
const inp = readline.createInterface({
    input: process.stdin
})
let userData = []
inp.on('line',(data)=>{
    userData = data.split(" ")
})
inp.on('close',()=>{
    let [a,b] = [...userData];
    let count = 0
    if(a.length == b.length){
        for(let i=0;i<a.length;i++){
            if(a[i] == b[i]){
                continue;
            } else {
                count++
            }
        }
        if(count == 1){
            console.log("yes")
        } else {
            console.log("no")
        }
    } else {
        console.log("no")
    }
})
