const readline = require('readline')
const inp = readline.createInterface({
    input: process.stdin
})
let userData = []
inp.on('line',(data)=>{
    userData.push(data)
})
inp.on('close',()=>{
    const [a,b] = [...userData]
    const rameshMark = a.split(' ')
    let temp = []
    const marks = b.split(' ').map(element => {
        return Number(element)
    })
    for(let i = 0;i<marks.length;i++){
        if(marks[i] === Number(rameshMark[1])){
            temp.push(i)
        } else {
            continue;
        }
    }
    temp.length === 0 ? console.log('-1') : console.log(temp.join(' '))
})
