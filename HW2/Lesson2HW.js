console.log("Task1")
let str= 'Вася;Петя;Вова;Олег';
console.log(str.split());


console.log("Task2")

function hello2(name){
    if(name){
        console.log(`Привет, ${name}`);
    }else{
        console.log (`Привет, гость`);
    }
}
hello2("Василий");


console.log("Task3")
let arr=[1,2,3,4];
let newArr=arr.map(function addOneForAll(arr){
    return ++arr;
})
console.log(newArr);


console.log("Task4")
let i=0;
while(true) {
    i++;
    if(Math.random() > 0.9){
        console.log(i);
        break;
    }
}

   

console.log("Task5")
let height = 8; 
let width = 10;
let board = "";

for (let y = 0; y < height; y++) {   
  for (let x = 0; x < width; x++) {
    if (x%(width-1) == 0){
        board += "\n";
    }
    else if ((x + y) % 2 == 0){
        board += "!";
    }
    else{
      board += "#";
      }
   }
}
console.log(board);


console.log("Task6")
let numbers = [1,2,3,4];
numbers.forEach(
    function(element, index, array){
    array[index] = element* element*element;
});
console.log(numbers);


