// outputing data
// // alert("Hello World");
// confirm("Are you sure you want to delete this");
// document.write("Hello World");
// console.log("Hello World");

// creation of programs
// let firstName=prompt("Enter your first name:");
// console.log(typeof(firstName));
// let lastName=prompt('Enter your last name');
// console.log('How are you doing'+ ' ' +firstName+ ' ' +lastName);
// console.log(` Good morning Mr ${firstName} ${lastName}`);

// let firstNumber=parseInt(prompt('Enter your first number'));
// console.log(typeof(firstNumber));
// let secondNumber=parseInt(prompt('Enter your second number'));
// console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// console.log(firstNumber + secondNumber);

// let _x = 20;
// _x;
// const x = 30;
// console.log(_x);

// strings
// let mynew= 'Digital Fortres';
// let address = "104, Herbert Macauly Road, Off University Road, Akoka Yaba Lagos State";
// console.log(address[5]);
// console.log(address.slice(0, 16));
// console.log(address.replace('Lagos', 'Ogun'));
// console.log(address.concat(mynew));
// console.log(address.lastIndexOf("e"));
// console.log(address.toLocaleUpperCase());
// console.log(address.toLocaleLowerCase());
// console.log(address.split().reverse().join());
// console.log(address.startsWith('1'));
// console.log(address.endsWith('e'));
// let newAddress=address.split();
// newAddress.unshift("Green");
// // newAddress.splice(1, 3, 'Purple', );
// console.log(newAddress);

// let word='Javascripts is simple';
// console.log(word[2]);
// console.log(word.replace('simple', 'easy'));
// console.log(word.length);
// console.log(word.lastIndexOf(''));
// console.log(typeof(word));
// console.log(word.lastIndexOf('s'));

// let newWord=word.split(' ');
// newWord.push('and nice');
// newWord.pop();


// console.log(newWord);
// console.log(newWord[2]);





// let myNumber=10;
// let x = myNumber.toFixed(2);
// let x =myNumber.toPrecision(5);
// console.log(x);

// ternery operator
// console.log(myNumber > 10 ? 'yes': 'no');

// let ola= Array('pink', 'red', 'purple', 'blue');
// let colors=['pink', 'red', 'purple', 'blue'];
// // colors.pop();
// colors.shift();
// colors.reverse();
// colors[1]='Yellow';
// colors.unshift('orange');
// colors.push('cream');
// console.log(colors);


// let employee = [

//     {
//         'name': 'Olamide',
//         'state': 'Ogun',
//         'email': 'Olamide@yahoo.com',
//     },

//     {
//         'name': 'Emeka',
//         'state': 'Abia',
//         'email': 'emeka@yahoo.com'

//     },

//     {
//         'name': 'Daniel',
//         'state': 'osun',
//         'email': 'daniel@gmail.com',
//     },

//     {
//         'name': 'Amara',
//         'state': 'kogi',
//         'email': 'amara@gmail.com',

//     },

//     {
//         'name': 'lekan',
//         'state': 'ikeja',
//         'email': 'lekan@gmail.com'
//     }
// ];

// let x = employee[2].name;
// console.log(x)







// assignment

// let firstName=prompt("Enter your ")

// let firstName=prompt("Enter your first name");
// let birthYear=prompt("Enter your birth year");
// let currentYear=2024;
// let age=currentYear - birthYear
// console.log('Your name is')


// Boolean
// let vote = false;
// // console.log(typeof(vote));
// console.log(vote ? 'yes you can vote':'you cannot vote');

// arithmetic operator  +, -, /, +=, -=, %, ++, --, ;
// let num=10;
// let num2=5;
// // console.log(num + num2);
// // console.log(num - num2);
// // console.log(num += num2);
// // console.log(num -= num2);
// // console.log(++num);
// // console.log(--num);
// console.log(num % num2);


// arithmetic comparison > < >=, <=, ==, ===, != ;
// console.log(num > num2);
// console.log(num < num2);
// console.log(num >= num2);
// console.log(num <= num2);
// console.log(num == num2);

// logical operator && || ;

// let country = 'Nigeria';
// let age = 18;

// if (country == 'Nigeria' && age >= 18){
//     console.log('You can vote');
// }else{
//     console.log('You cannot vote');
// }

// conditionals statements
// score = prompt('Enter your score').toLocaleUpperCase();

// if (score == 'A'){ 
//     console.log('Grade A');

// }else if (score == 'B'){
//     console.log('Grade B');

// }else if (score == 'C'){
//     console.log('Grade C');

// }else if (score == 'D'){
//     console.log('Fail');

// }else{
//     console.log('Unknown Result');
// }

// switch(true){
//     case score == 'A':
//         console.log('Grade A');
//         break;
//     case score == 'B':
//         console.log('Grade B');
//         break;
//     case score == 'C':
//         console.log('Grade C');
//         break;
//     case score == 'D':
//         console.log('Fail');
//         break;
//     default:
//         console.log('Unknown Result');


// }



// classwork

// let score = prompt('Enter your score');

// if (score >= 90 && score <= 100){
//     console.log('Excellent');

// }else if (score >= 80 && score <= 89){
//     console.log('Second class');

// }else if (score >= 70 && score <= 79){
//     console.log('Third class');

// }else if (score >= 60 && score <=69){
//     console.log('Lower class');


// }else if (score >= 50 && score <= 59){
//     console.log('Last clas');

// }else if (score >= 40 && score <= 49){
//     console.log('Fail');

// }else if (score >= 0 && score <= 39){
//     console.log('Unknown number');
// }


// num1 = parseInt(prompt('Enter the first number'));
// num2 = parseInt(prompt('Enter the second number'));
// sign=prompt('Enter your sign + - x / ');

// if (sign == '+'){
//     console.log(`${num1} + ${num2} = ${num1 + num2}`);

// }else if(sign == '-'){
//     console.log(`${num1} - ${num2} = ${num1 - num2}`);
 
// }else if(sign == '*'){
//     console.log(`${num1} * ${num2} = ${num1 * num2}`);
// }


// let mynum = Math.random(0, 4) + 1;
// console.log(mynum.toFixed(2))

// let mynum = Math.floor(Math.random() * 20) + 1
// console.log(mynum);

// let mynum = Math.floor(Math.random() * 3);
// let guess = parseInt(prompt('Enter your guess'));

// if (guess == mynum){
//     console.log('Congratulation you are correct')

// }else if (guess > mynum){
//     console.log('Your guess is high');

// }else if (guess < mynum){
//     console.log('your guess is low');

// }else {
//     console.log('Invalid');
// }


// let guessNnum = parseInt(prompt('please enter your number'));

// if (guessNnum % 2 == 0){
//     console.log('Yes it is even number');
// }else{
//     console.log('Not a even number');
// }

// let score =[10, 30, 20, 50, 23, 32];

// for (i of score){
//     if(i < 30){
//         console.log(i);
//     }
// }



// let x = 0 //initialize

// while(x < 10){ //condition
//      x++ // increment

//      console.log(x);  // outputing the data in my console
// }

// let x = 0 //initialize
// let product = parseInt(prompt('Enter a number'));

// while(x < 12){ //condition
//      x++ // increment
//      // product = product * x

//      console.log(`${product} x ${x} = ${product * x}`)  // outputing the data in my console
// }


// const ola = () => {
//     console.log('good morning');
// }
// ola()

// const welcome = (x , y) => {
//     return x * y
// }
// console.log(welcome(10, 20));

// function greetings(){
//     console.log('good day')
// }
// greetings()

// function myname( mainland, island) {
//     return ` i am currently on the mainland in ${mainland}, i will be leaving to ${island} on the island`
// }
// console.log(myname('Akowonjo', 'Lekki'));


// let mydisplay = document.querySelector('.disp')
// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     console.log('welcome')
//     mydisplay.innerHTML='Welcome to javascripts'
// })

// let myform = document.querySelector('.myform');
// let mydisplay = document.querySelector('.display');


// myform.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('form is ready');
//     let myname =myform.querySelector('input[name=name]').value;
//     mydisplay.innerHTML = myname;
// })

// let button = document.createElement('button');
// button.innerHTML = 'button';
// document.body.appendChild(button);
// button.addEventListener('click', function(){
//     console.log('javascript is headache');
//     text.innerHTML = 'javascript is headache';
// })

// let text = document.createElement('h1');
// document.body.appendChild(text)


// let plus = document.createElement('button');
// plus.innerHTML = '+';
// document.body.appendChild(plus);

// let display = document.createElement('button');
// display.innerHTML = '0';
// document.body.appendChild(display); 

// let minus = document.createElement('button');
// minus.innerText = '-';
// document.body.appendChild(minus);

// let mynumber = 0;
// let plus =document.createElement('button');
// plus.innerHTML = '+';
// document.body.appendChild(plus);
// plus.addEventListener('click', () => {
//     count.innerHTML = ++mynumber
// });

// let count =document.createElement('h1');
// count.innerHTML = 0;
// document.body.appendChild(count);

// let minus = document.createElement('button');
// minus.innerHTML = '-';
// document.body.appendChild(minus)
// minus.addEventListener('click', () => {
//         count.innerHTML =   --mynumber
//    } );

// let data = [
//     {
//     'name': 'Olamide',
//     id :1,
//     'email': 'Olamide@yahoo.com',
//     },

//     {
//     'name': 'Prosper',
//     id: 2,
//     'email': 'emeka@yahoo.com'

//     },

//     {
//     'name': 'quadri',
//     id: 3,
//     'email': 'Olamide@yahoo.com',
//     },

    
//     ]

//     function readAll(){
//     localStorage.setItem('object', JSON.stringify(data));
//     var prosper = document.querySelector('.data_table');
//     var myobject = localStorage.getItem('object')
//     var myobjectdata = JSON.parse(myobject)
//     // console.log(myobjectdata)
//     var element = "";
//     myobjectdata.map(x => (
//             element+= `
//             <tr>
//             <td>${x.id}</td>
//             <td>${x.name}</td>
//             <td>${x.email}</td>
//             <td><button onclick={myedit(${x.id})}>Edit</button></td>
//             <td><button onclick={mydelete(${x.id})}>Delete</button></td>
//             </tr>
//             `
//     ))

//     prosper.innerHTML = element;

//     }


//     function mydelete (id) {
//         data = data.filter(x => x.id !==id);
//         readAll();
//     }

//     function mycreate() {
//     document.querySelector('.create_form').style.display='block';
//     document.querySelector('.add_div').style.display = 'none';
//     }

//     function myadd() {
//     var name = document.querySelector('.name').value;
//     var email = document.querySelector('.email').value
//     let myclass = Math.floor(Math.random()* 1000)
//     var myobject = {id: myclass, name:name, email:email}
//     data.push(myobject) 
//     console.log(myobject)
//     readAll()
//     }

//     function myedit(id){
//         // alert('hello')
//         document.querySelector('.updated_form').style.display='block';
//         var myget = data.find(x => x.id == id);
//         document.querySelector('.uid').value = myget.id;
//         document.querySelector('.uname').value = myget.name;
//         document.querySelector('.uemail').value = myget.email;


//     }

//     function myupadte(){
//         var id = document.querySelector('.uid').value;
//         var name = document.querySelector('.uname').value;
//         var email = document.querySelector('.uemail').value;
//         document.querySelector('.uname').value = '';
//         document.querySelector('.uemail').value = '';


//         var myindex = data.findIndex(x => x.id == id);
//         data[myindex] = {id, name, email};


//         document.querySelector('.updated_form').style.display='block';
//         readAll()
//     }




    //  spread operator

    // let mydays = ['monday', 'tuesday', 'wednesday', 'thursday'];
    // let num = [29, 30, 50,70]
    // let myweek = [...mydays, 'friday', 'saturday', 'sunday', ...num];
    // console.log(myweek)

//     let employee ={
//         'name':'tunde',
//         'state':'lagos',
//         'lga':'alimosho'
//     };
// //    console.log(employee['state']);
//    let {name, state, lga} = employee;
//    console.log(lga);

// Get the clock hands


// Get the clock hands
// const hourHand = document.querySelector('.hour-hand');
// const minuteHand = document.querySelector('.minute-hand');
// const secondHand = document.querySelector('.second-hand');

// // Update the clock hands every second
// setInterval(() => {
//     const now = new Date();
//     const hours = now.getHours() % 12;
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();

//     // Calculate the rotation angles for each hand
//     const hourAngle = (hours * 30) + (minutes * 0.5);
//     const minuteAngle = (minutes * 6);
//     const secondAngle = (seconds * 6);

//     // Update the clock hands
//     hourHand.style.transform = `rotate(${hourAngle}deg)`;
//     minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
//     secondHand.style.transform = `rotate(${secondAngle}deg)`;
// }, 1000);  


// Udemy class


// alert("Hello World!");

let js = 'amazing';
if (js === 'amazing') alert('Javascripts is fun!');

