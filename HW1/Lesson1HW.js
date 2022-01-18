console.log("Task 2")
console.log (typeof NaN)
console.log (typeof Infinity)
console.log (typeof 5)
console.log (typeof "Hello")
console.log (typeof true)
console.log (typeof false)
console.log (typeof null)
console.log (typeof a)
console.log (typeof {name:"Valentina"})

console.log("Task 3")
let name = "Valentina"
if(typeof name == "string"){
    console.log("Привет", name);
}else{
    console.log("Ошибка");
}


console.log ("Task 4")

let username="Valentina"
console.log((typeof name=="string")?`Привет ${username}`:"Ошибка, не тот тип данных");


console.log ("Task 5")
let fDayOff=6;
switch (fDayOff) {
    case 1:
        console.log("working day");
        break;
    case 2:
        console.log("working day");
        break;
    case 3:
        console.log("working day");
        break;
    case 4:
        console.log("working day");
        break;
    case 5:
        console.log("working day");
        break;
    case 6:
        console.log("weekend");
        break;
    case 7:
        console.log("weekend");
        break;
    default:
        console.log("There is no such day of the week");
       
}

