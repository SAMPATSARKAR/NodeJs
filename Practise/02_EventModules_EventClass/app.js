import EventEmitter from "events";
const eventEmitter = new EventEmitter();

eventEmitter.on('click',()=>{
    console.log("Event emitter called");
    
})
eventEmitter.emit('click');

class Car extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    getName(){
        return this._name;
    }
}
let maruti = new Car("Maruti");
maruti._name="MarutiSuziki";
console.log(maruti.getName());
