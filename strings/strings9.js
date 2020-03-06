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
    const temp = userData.map((element,index)=>{
        if(element.toLowerCase() == "the" || element.toLowerCase() == "a" || element.toLowerCase() == "an"){
            return userData[index+1]
        }
    })
    const article = temp.filter(element=>{
        return element !== undefined
    })
    console.log(article.join(" "))
})
