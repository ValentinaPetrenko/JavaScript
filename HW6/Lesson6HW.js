console.log("Task1")
 
let table = document.createElement("table");
table.className = "tab"

document.body.append(table);

for (let i = 0; i <= 10; i++) {
    let tr = document.createElement("tr");
    tr.className = "block"

    table.appendChild(tr);

    for (let j = 0; j <= 10; j++) {
        let td = document.createElement("td");
        td.className = "td"

        tr.appendChild(td);
        td.innerText = i * j;
    }
}



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





