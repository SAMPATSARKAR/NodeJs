// function SayHello(){
//     console.log("Hello W")
// }
// SayHello();
// console.log(window);

const sum = (num1,num2) => num1 + num2;
const PI = 3.14;
class someMathObj{
    constructor(){
        console.log('Obj created');
        
    }
}
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.someMathObj= someMathObj;

module.exports = {sum:sum,PI:PI, someMathObj:someMathObj}