console.log("Task1")
let car =  {
    brand: "Audi",
    say (message,time) {
        console.log ((`${this.brand} ${message} in ${time}.`));
    }
};
let someMessage= "Go";
let funcSayGo= car.say.bind(car,someMessage,new Date().getHours() + ':' + new Date().getMinutes());
funcSayGo();
let funcSayGoCall= car.say;
funcSayGoCall.call(car,someMessage,new Date().getHours() + ':' + new Date().getMinutes());




console.log("Task2")
const objectA = {
    a: 1,
    b: 2,
    c: 3,
};
const func = function() {
    let obj= Object.values(this)
    return obj.reduce(function(sum,current){
        return sum+current;
    },0);
};
let newFunc= func.bind(objectA);
console.log(newFunc());
   

console.log("Task3")
const valObject0 = {
    values: [1, '2', 4, 8, '8',  3, 10, null, false],
};
function NewArray(){
    let val=[]
    for ( let i=0; i<values.length; i++){
        if (typeof  i==="number" && i %2 ==0 && i<10);
        return val;
    }
}
let NewValObject0=func.bind(valObject0);
console.log(NewValObject0());


 console.log("Task4")
user = {
    birthdayDate: new Date("1990-04-27")
}   
console.log(user.birthdayDate.toLocaleString());
function DayAfterBirthday(){
    let now = new Date();
    let afterbirthday=user.birthdayDate;
    if(now.getMonth()>user.birthdayDate.getMonth()|| (now.getMonth()===user.birthdayDate.getMonth() && now.getDate()>user.birthdayDate.getDate())){
        afterbirthday.setFullYear(now.getFullYear())
    }else{
        afterbirthday.setFullYear(now.getFullYear()-1)
    }
    return ((now-afterbirthday)/(1000*60*60*24));
}
console.log(DayAfterBirthday());


console.log("Task5")
let user2 = new Date(1990,03,27)
let today=new Date()
let year=today.getFullYear()-user2.getFullYear();
let month=(today-user2)/(1000*60*60*24*30);
let day=(today-user2)/(1000*60*60*24);
let hours=(today-user2)/(1000*60*60);

if(month<0 || (month===0 && today.getDate() < user2.getDate())){
    year--;
}
console.log(year);
console.log(month);
console.log(day);
console.log(hours);








  
    






