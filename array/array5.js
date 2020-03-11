const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userData = []
inp.on("line", (data) => {
  userData = data;
});
inp.on('close',()=>{
    for(let i=1;i<=userData;i++){
        let temp = []
        for(let j=1;j<i*2;j++){
            temp.push(1)
        }
        console.log(temp.join(' '))
    }
})
