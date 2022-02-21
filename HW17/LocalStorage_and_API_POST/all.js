
//Задание на лекции
let btnTest=document.getElementById("btn-test");
btnTest.addEventListener("click",callAPI);


async function  callAPI(){
    let user = {
        name: 'John',
        surname: 'Smith'
      };
      
      let response = await fetch('https://api.jsonbin.io/b/5edfbf4e655d87580c46ed7b', {
       method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'secret-key': '$2b$10$dgM1SKMKiT9Mwj/qs8/0auCBRW85JrfDfVhdB8uoUfh90.wEpXJcK'
        },
        body: user
      });
      
      let result = await response.json();
      alert(result.message);


}

localStorage.setItem("name", "Valentina");


// ДЗ splice
let arr=[1, 2, 3, 4, 5];
arr.splice(1,0,"a","b");
arr.splice(6,0,"c");
arr.splice(8,0,"e");

console.log(arr);


//ДЗ localStorage
let txtArea = document.getElementById("test");
const txtlocalStorage = localStorage.getItem("txtArea");
if (txtlocalStorage){
	txtArea.value = txtlocalStorage;
};
txtArea.oninput = () => {
	localStorage.setItem("txtArea",txtArea.value);
};
// let area = localStorage.setItem("text", txtArea);
