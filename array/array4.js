const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userData = []
inp.on("line", (data) => {
  userData = data.split(' ');
});
inp.on('close',()=>{
    const newArr = userData.sort((a,b)=>{
        return b-a;
    })
    console.log(newArr[1])
})
