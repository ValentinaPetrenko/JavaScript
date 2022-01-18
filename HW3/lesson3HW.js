console.log("Task1")
let itog = 0;
function SumTo(n){
    for(i = 0; i <= n; i++){
        itog += i**2; 
    }
}
SumTo(4)
console.log(itog);

console.log("Task2")
let result;
function avg2(a,b){
    result=(a+b)/2; 
}
avg2(2,4)
console.log (result);

console.log("Task3")
let arr = [[1, 6, 3, '6'], [10, 15, 13, '10']]
let sumArray = arr.reduce((acc, value) => {
  for (let item of value) {
    if (typeof item === 'number' && item % 2 == 0) {
      acc += item;
    }
  }
  return acc
}, 0)
console.log(sumArray);


console.log("Task4")
let obj={
  name:"Valentina",
  pass:"pwd"
}
function pass(key,value,obj){
  if (obj[key]===undefined){
    obj[key]=value
  }
}
console.log(obj);




console.log("Task5")
let answer =confirm("test");
while (answer === false);


console.log("Task6")
let numb=[1,4,-2,3,2,-4];
let sum = numb.reduce((acc, value) => acc + value);
console.log (sum);

let descending = numb.sort ((el1,el2) =>{
    if (el1 == el2)
    return 0;
    else if (el1>el2)
    return -1;
    else if (el1<el2)
    return 1;
})
console.log(descending);

let positive= numb.filter(val => val>0);
console.log(positive);

let increase= numb.map((el) =>{
    if (typeof el == "number")
    return el+10;
})
console.log(increase);


console.log("Task7")
user = {
birthdayDate: new Date("1990-04-27")
}

console.log(user.birthdayDate.toLocaleString());

function whenNextBirthday(){
  let now = new Date();
  let nextbirthday =user.birthdayDate;
  if (now.getMonth()>user.birthdayDate.getMonth()|| (now.getMonth()===user.birthdayDate.getMonth() && now.getDate()>user.birthdayDate.getDate())){
    nextbirthday.setFullYear(now.getFullYear()+1)
  }else{
    nextbirthday.setFullYear(now.getFullYear())
  }
  console.log((nextbirthday-now)/(1000*60*60*24));
} 



