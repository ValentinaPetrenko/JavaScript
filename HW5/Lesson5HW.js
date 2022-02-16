console.log("Task1")
const studentArr = [{
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
},
{
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
},
{
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
},
{
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
},
{
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
},
{
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
},
{
    name: 'Максим',
    surname: 'Меженский',
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
},
{
    name: 'Денис',
    surname: 'Марченко',
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
},
{
    name: 'Антон',
    surname: 'Завадский',
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3
},
{
    name: 'Игорь',
    surname: 'Куштым',
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
},
{
    name: 'Инна',
    surname: 'Скакунова',
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
},
];




// class Student {
//     constructor(studentArr = []){
//         Object.assign(this, studentArr);
        
//         };
    
//         getisSelfPayment() {
//           if (this.ratingPoint>=800){
//               return `${this.name} ${this.surname} ${this.ratingPoint}, поздравляем вы на бюджете!`
//           }else{
//               return `${this.name} ${this.surname} ${this.ratingPoint} , вы на контракте!`
//           }
//         }
// }

// let students=new Student(studentArr);
// console.log(students.getisSelfPayment());

class Student {
    constructor(enrollee = {}) {
        this.id = Student.incrementId();
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.schoolPoint = enrollee.schoolPoint;
        Student.listOfStudents = {id: this.id, ...enrollee,};
    }
  
    static get listOfStudents() {
        return this.studentsList || []
    }
  
    static set listOfStudents(student) {
        const studentList = this.studentsList || [];
        student.isSelfPayment = true;
        if (student.ratingPoint >= 800 && studentList.length < 5) {
            student.isSelfPayment = false;
        }
        if (studentList.length >= 5) {
            let notSelfPayment = studentList.filter((person) => !person.isSelfPayment);
            let selfPayment = studentList.filter((person) => person.isSelfPayment);
  
            if (student.ratingPoint >= 800) {
                student.isSelfPayment = false;
                notSelfPayment.unshift(student);
  
                if (notSelfPayment.length > 5) {
                    let notSelfPaymentSort = notSelfPayment.sort((a, b) => a.ratingPoint - b.ratingPoint);
                    if (notSelfPaymentSort[0].ratingPoint === notSelfPaymentSort[1].ratingPoint) {
                        notSelfPaymentSort[0].isSelfPayment = notSelfPaymentSort[0].schoolPoint < notSelfPaymentSort[1].schoolPoint;
                        notSelfPaymentSort[1].isSelfPayment = notSelfPaymentSort[0].schoolPoint > notSelfPaymentSort[1].schoolPoint;
                    } else {
                        notSelfPaymentSort[0].isSelfPayment = notSelfPaymentSort[0].ratingPoint < notSelfPaymentSort[1].ratingPoint;
                        notSelfPaymentSort[1].isSelfPayment = notSelfPaymentSort[0].ratingPoint > notSelfPaymentSort[1].ratingPoint;
                    }
                    notSelfPayment = notSelfPaymentSort;
                }
            } else {
                selfPayment.push(student)
            }
            return this.studentsList = [...notSelfPayment, ...selfPayment];
        }
        return this.studentsList = [...studentList, student];
    }
  
    static incrementId() {
        if (!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
    }
  }
  
  studentArr.forEach(student => new Student(student));
  console.log(Student.listOfStudents);

  console.log(new Student(studentArr));
  console.log(new Student(studentArr[1]));
  console.log(new Student(studentArr[2]));
  console.log(new Student(studentArr[3]));
  console.log(new Student(studentArr[4]));
  console.log(new Student(studentArr[5]));



console.log("Task2")
class CustomString{
    constructor (str){
        this.str=str;
    }
    getreverseString= function reverse () {
        let letter=this.str
        return letter.split("").reverse().join("");
    }
    getucFirsteString=function ucFirst() {
        let letter2=this.str
        if (!letter2) return letter2;
        return letter2[0].toUpperCase() + letter2.slice(1);
    }
    getucWordsString=function ucWords () {
        let letter3=this.str
        return letter3.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join();
    }
}

const myString=new CustomString("qwerty qwerty");
console.log(myString.getreverseString());
console.log(myString.getucFirsteString());
console.log(myString.getucWordsString());

console.log("Task3")
class Validator{
    constructor(str){
        this.str=str;
    }
    checkisEmail(){
        if(this.str.includes('@')){
            return this.str
        }else{
            return false
        }
    }
    checkIsDomain(){
        if (this.str.includes('.')){
            return this.str
        }else{
            return false
        }
    }
    checkIsPhone(){
        if(this.str.includes('+38')){
            return this.str
        }else{
            return false
        }
    }
    // checkIsDate(){
    //     if(this.arr.includes('YYYY-MM-DD')){
    //         return this.arr
    //     }else{
    //         return false
    //     }
    // }

       
}
let check1=new Validator('vasya.pupkin@gmail.com');
console.log(check1.checkisEmail());

let check2=new Validator('google.com');
console.log(check2.checkIsDomain());

let check3=new Validator('+38 (066) 937-99-92');
console.log(check3.checkIsPhone());  

// let check4=new Validator('30.11.2019');
// console.log(check3.checkIsDate());