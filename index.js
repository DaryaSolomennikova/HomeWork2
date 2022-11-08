// Home work 2: 
 
// NORMAL 
// Task 1. 
    
    let variable = ['true', false, 17, undefined, null];
    for (let i = 0; i < 6; i++){ 
    console.log(typeof(variable[i]));
    }

// Task 2. 

   let height = 150;
   let width = 200;
    if (height > width){
        console.log(height);
   } else {
        console.log(width);
   }

// Task 3.

let a=20;
for (let x = 1; x <= a; x++) {
    if (x % 3 === 0) {
        console.log(x);
    }
}

// Task 4.

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork;
if( key && document && pen && (apple || orange)){
    shouldGoToWork=true;
} else { 
    shouldGoToWork=false;
}
console.log(shouldGoToWork);

// Task 5. 

// Way 1.

let number=prompt('Введите любое число');

if (number % 3==0 && number % 5==0)

{
    console.log("FizBuz");
}
else if (number % 3==0) 
{
    console.log("Buz");
}   
else if (number % 5 ==0)
{
    console.log("Fiz");
}
else {
    console.log(NaN);
}

// way 2.
let number = prompt('Введите любое целое число');
switch(Boolean(number) == true) {
    case (number % 3 == 0 && number % 5 == 0):
      console.log("FizBuz"); break;
    case (number % 3 == 0): 
      console.log("Buz"); break;
    case (number % 5 == 0):
      console.log("Fiz"); break;
    default: console.log(`${NaN} or not a integer digit`);
}l


// Task 6. 

// way 1.

let age = prompt('Cколько вам лет?');

if (age >= 16 && age <= 18){
    alert ('Можешь выкурить сигаретку, только маме не говори');
} else if (age >= 19){
    alert('Попей пивка'); 
}
else{
    alert('Пей колу');
}


// way 2.

let age = prompt('Cколько вам лет?');
switch (Boolean (age)==true) {
    case (age >=16 && age <=18):
        alert ('Можешь выкурить сигаретку, только маме не говори');
    break;

    case(age>=19):
        alert('Попей пивка'); 
    break;

    case(age<=15):
        alert('Пей колу');
    break;
}

// Task 7.

let partOfTheWorld = prompt('В какую часть света вы хотели бы отправиться? Юг/Север/Запад/Восток').toUpperCase();
switch (partOfTheWorld) {
    case "ЮГ":
        alert ('На юг пойдешь счастье найдешь');
    break;
    case "СЕВЕР":
        alert ('На север пойдешь много денег найдешь');
    break;
    case "ЗАПАД":
    alert ('На запад пойдешь верного друга найдешь');
    break;
    case "ВОСТОК":
    alert ('На восток пойдешь разработчиком станешь');
    break;
}

// ADVANCED

// Task 1.  

let userName = prompt ('Как вас зовут?').toLowerCase().split(" ");

for (let i = 0; i < userName.length; i++) {
    userName[i] = userName[i][0].toUpperCase() + userName[i].substring(1);
}

alert("Привет, "+ userName.join(" ") +"!");

// Task 2. 

// way 1.

let anyNumber, subtract, add, multiply, divide, result;
anyNumber = Number(prompt ('Введите любое число'));
subtract = Number(prompt('Cколько отнять?'));
add = Number(prompt('Сколько прибавить?'));
multiply = Number(prompt('На сколько умножить?'));
divide = Number(prompt('На сколько разделить?'));
result = ((((anyNumber - subtract) + add) * multiply) / divide);
alert(`((((${anyNumber} - ${subtract}) + ${add}) * ${multiply}) / ${divide}) = ${result}`);


// way 2.

let commands = ['Введите любое число?', 'Cколько отнять?','Сколько прибавить?','На сколько умножить?','На сколько разделить?'];
let numbers = [];
let result;
for(let k = 0; k < commands.length; k++){
    numbers.push(Number(prompt(commands [k])));
}
result = ((((numbers[0] - numbers[1]) + numbers[2]) * numbers[3]) / numbers[4]);
alert(`((((${numbers[0]} - ${numbers[1]}) + ${numbers[2]}) * ${numbers[3]}) / ${numbers[4]}) = ${result}`);

// Task 3. 

let count = 6;
for ( let i = 1; i <= count; i++) {
        console.log("#".repeat(i));
}