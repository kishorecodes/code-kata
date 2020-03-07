const readline = require('readline')
const inp = readline.createInterface({
    input: process.stdin
})
let userData = []
inp.on('line',(data)=>{
    userData = data.split(" ")
})
inp.on('close',()=>{
    const newArr = userData.map((element,index)=>{
        if((index+1) % 2 !== 0){
            return element.toUpperCase()
        } else {
            return element
        }
    })
    console.log(newArr.join(" "))
})
