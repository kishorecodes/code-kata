const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userData = []
inp.on("line", (data) => {
  userData.push(data);
});
inp.on('close',()=>{
    const [a,b] = [...userData];
    const newArr = b.split(' ').sort((a,b)=>{
        return a-b;
    })
    console.log(newArr.join(' '))
})
