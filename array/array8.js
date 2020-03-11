const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userData = []
inp.on("line", (data) => {
  userData.push(data);
});
let temp =[]
inp.on('close',()=>{
    const [a,b] = [...userData];
    console.log(b.split(' ').sort().join(' '))
})
