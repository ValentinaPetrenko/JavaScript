console.log("Task1")
 
let parent = document.getElementById('chat');
let line = document.createElement('div');
line.className= "line"

for(let i = 0; i<10; i++){
    let newDiv = document.createElement('div');
    newDiv.className= "block"
    line.appendChild(newDiv)
    for(let j=0;j<10;j++){
        let newDiv2=document.createElement('div');
        newDiv2.className="block2"
        newDiv2.textContent=i*j
        newDiv.appendChild(newDiv2)
    }
}

console.log(line);
// parent.appendChild(line);
// Не пойму как все добавить в parent




console.log("Task2")

function unique(param) {
    let result = [];
  
    for (let str of param) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}
const arr = [1, 1, 2, 2, 3];
console.log(unique(arr));


console.log("Task3")
function sum (value) {
    let number = value;
    sum = function() {
        let arg = arguments[0] ? arguments[0] : 0;
        return number = number + arg;
    };
    return sum();
}
console.log(sum(3)); 
console.log(sum(5)); 
console.log(sum(228)); 


console.log("Task4")
class  Calculator{
    constructor(value1,value2,znak) {
    this.value1=value1;
    this.value2=value2;
    this.znak=znak;
    };
    read (){
        this.value1= prompt('Введите число a',0)
        this.value2= prompt('Введите число b',0) 
    };
    setAction(){
        this.znak=prompt('Введите действие (+,-,*,/',)
    };
    doAction(){
        
        if(this.znak==="+"){
            return +this.value1+ +this.value2
             
        }else if(this.znak==="*"){
            return +this.value1*+this.value2
            
        }else if(this.znak==="-"){
            return +this.value1-+this.value2
            
        }
        else if(this.znak==="/"){
            return +this.value1/+this.value2
        }else{
            return "Неправильный формат";
        }
            
    };
}
const calculator = new Calculator();
calculator.read();
calculator.setAction();
let result=calculator.doAction();
console.log(result);





