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
    const newArr = b.split(' ').sort((a,b)=>{
        return b-a;
    })
    console.log(newArr[0])
})
