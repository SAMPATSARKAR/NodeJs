const readline = require('readline');
let rl = new readline.createInterface({
    input: process.stdin, output: process.stdout}
);

let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
let ans = num1+num2;
rl.question(`what is ${num1} + ${num2} `,(UserInput)=>{
    if(Number(UserInput.trim()) === ans){
        rl.close();
    }else{
        rl.setPrompt("Incorrect\n");
        rl.prompt();

        rl.on('line',(UserInput)=>{
            if(Number(UserInput.trim()) === ans){
                rl.close();
            }else{
                rl.setPrompt("Incorrect again\n");
                rl.prompt();
            }
        })
    }
    });

ask();
rl.on('close',()=>{
        console.log("Correct!!!");
        
});