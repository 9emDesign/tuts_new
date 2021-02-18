<<<<<<< HEAD
import {sayHi} from './sayHi.js';

//alert(sayHi); // function...
sayHi('Zayn'); // Hello, John!
=======
//jshint esversion:6
//object
// let person={
//   firstName:'Zayno',
//   lastName:'Lane',
//   age:50,
//   height:1.74
// };
// person.firstName=prompt();
// document.write(person.firstName);

// document.write(person.firstName);
// document.write(person.lastName);
// document.write(person.age);
// document.write(person.height);
// document.write(person.firstName+" "+person.lastName+" "+person.age+" "+person.height);

//array
/*let rainbow=['red','orange','yellow','green','blue','purple'];
document.write(rainbow[2],rainbow[5]);

//function
//function to perform a task
//function
/*function greet(){
  document.write('hello javascript!');
}
greet();*/

//function to perform a calculation
/*function volume(lenght,width,height){
  return lenght*width*height

}

  document.write(volume(25,50,100)+' '+'m3');
*/

//first javascript
// alert('Hello Javascript!');
// confirm('Hello again!');
// prompt('cat or dog!','dog')
//alert(window.innerHeight);

//document.write('your browser window is'+ ' '+ window.innerWidth+' '+'px wide! '+ '<br>');
//document.write('And your browser window is'+ ' '+ window.innerHeight+' '+'px high!');

// document.write(window.navigator.appName+ '<br>');
// document.write(window.navigator.appVersion+ '<br>');
// document.write(window.navigator.language+ '<br>');
// document.write(window.navigator.platform);

// let number=25;
// let truFalse=true;
// let firstName='Zayno';
// document.write('the number is: '+ number+ '<br>');
// document.write('is it true or false? '+ truFalse+ '<br>');
// document.write('tell me your first name: '+ firstName);

// let number1=25e6;
// let number2=150e6;
// let total= number2+number1;
// document.write(total);

//switch statements
// // let age= 36;
// // switch (age){
// //   case 16:
// //     document.write('under 18!');
// //       break;
// //   case 24:
// //   document.write('over 18!');
// //         break;
// //   default:
// //     document.write('Adult!');
// //     break;
// }

//for loop
// let answer=0;
// let startValue=11;
// let endValue=20;
// for (startValue;startValue<endValue;answer=startValue++){
//   document.write('answer='+ answer +'<br>');
// }

// let startValue=1;
// let someString=' ABCDEFGHIJKLM';
// for (startValue; startValue < someString.length; startValue++) {
//   document.write(startValue+ ' '+'letter: '+someString[startValue]+'<br>');
// }

//while loop
// let counter=1;
// let answer=0;
// while (counter<20){
//   answer=answer+counter;
//   counter++;
// }
// document.write('answer is '+answer);

//array loops
// let counter=0;
// let lotteryNumber=[10,29,45,27,56,85,98,67,50,40];
// while(counter< lotteryNumber.length){
//   document.write(lotteryNumber[counter]+'<br>');
//   counter++;
// }

//functions
// function myName(){
//   alert('Zayno');
// }
// document.write(myName());

//function calling function
// function firstFunction(){
//   let retrieveValue=secondFunction();
//   alert(retrieveValue);
// }
//
// function secondFunction(){
//   let alertString='My return Value';
//   return alertString;
// }

//function scope
// let alertString_global='ALERT global!!!';
// function scope(){
//  let alertString_local='ALERT!';
//  secondFunction();
//   function secondFunction(){
//     alert(alertString_global);
//     alert(alertString_local);
//   }
// }
// document.write(scope());

//console time
// console.time('Response in:');
// alert('click to continue');
// console.timeEnd('Response in:');

//manipulate html
// document.getElementById('button').onclick= function(){
//   document.getElementById('text').innerHTML='Your order has been confirmed!';
//   document.getElementById('button').style.display='none';
// }

//iife
// (function() {
// let age = 50;
//  document.write(age);
// }());

// let getAge = (function() {
//   let age = 50;;
//   return age;
// }());
// document.write(getAge);

//pro Javascript
// let hello = ' hello';
// let javascript = ' javascript';
// let answer =`Yo! ${hello} ${javascript}`;
// let answer2 = hello + javascript;
// let answer3 = `hello ${javascript}`;
// document.write(answer3);
// document.write(answer,answer2);

// let numToString = String(true);
// document.write(numToString);
// document.write(typeof(numToString));

//loop trough array for loop / foreach loop
// let myarray = ['Zayno','Robert','Cyril','Betulia','Thelma','Freddy','Carlos'];
// for (let i= 0 ; i < myarray.length ;i++){
//   document.write('Your name is: ' + myarray[i] + '<BR>');
// }

// myarray.forEach((item, i) => {
//   document.write('Your name is: ' + item + '<br>')
// });

//functions
// function myfunction(){
//   let myArray = ['Zayno','Robert','Cyril','Betulia'];
//   myArray.forEach((item, i) => {
//     document.write('Your name is: ' + item + '<br>');
//   });
//
// }
//
// myfunction();

// function myfunction(name,lastName){
//   if(name == 'Zayno' || lastName == "Lane"){
//     document.write('Your name is: ' + name + ' and your last name is: ' + lastName);
//   }else if (name == "Robert" || lastName == "Lane") {
//     document.write('Your name is: ' + name + ' and your last name is: ' + lastName);
//   }else if (name == 'Cyril' || lastName == 'Lane') {
//     document.write('Your name is: ' + name + ' and your last name is: ' + lastName);
//   }else if (name == 'Betulia' || lastName == "Lane") {
//     document.write('Your name is: ' + name + ' and your last name is: ' + lastName);
//   }else {
//     document.write('Your name is not in te list!');
//   }
// }
//
// myfunction('Betulia','Lane');

//object
// let name = prompt('your name');
// let lastname = prompt('your last name');
// let age = prompt('your age');
// let height = prompt('your height');
//

// let person={
//   firstName:name,
//   lastName:lastname,
//   age:age,
//   height:height
// };
//
// Object.keys(person).forEach((key, i) => {
//   document.write(key +': ' + person[key] + '<br>');
// });

//icecream loop
// let scoops = 5;
// while(scoops > 0){
//   document.write('Another scoop eaten:' + scoops +'left' + '<br>');
//   scoops--;
//   if (scoops == 0){
//     document.write('No more scoops left!  ');
//   }
// }

//scrambled loop
// let i = 0;
// let name = 'Joe';
// while (i < 2) {
//   document.write('Happy birthday to you!.' + '<br>');
//   i++;
// }
// document.write('Happy birthday dear ' + name + ', <br>');
// document.write('Happy birthday to you!.'+'<br>');

//bottles of beer
// var word = "bottles";
// var count = 5;
// while (count > 0) {
// document.write(count + " " + word + " of beer on the wall <br>");
// document.write(count + " " + word + " of beer, <br>");
// document.write("Take one down, pass it around, <br>");
// count--;
// if (count > 0) {
// document.write(count + " " + word + " of beer on the wall.<br>");
// } else {
// document.write("No more " + word + " of beer on the wall.<br>");
// }
// }

//random numbers
// let num1 = Math.floor(Math.random()*10)+1;
// let num2 = Math.floor(Math.random()*10)+1;
// let num3 = Math.floor(Math.random()*10)+1;
// let random_num = num1 +' '+ num2 +' '+ num3;
// // document.write(num1);
// // document.write(num2);
// // document.write(num3);
// document.write(random_num);

// let grid = [[1,2,3],[4,5,6],[7,8,9],[2,3,4],[5,6,7]];
// let randomLocation = Math.floor(Math.random()*grid.length);
// document.write(randomLocation);

//loop through array and find max
// let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
// 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
// 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
//
// let costs = [.25, .27, .25, .25, .25, .25,
// .33, .31, .25, .29, .27, .22,
// .31, .25, .25, .33, .21, .25,
// .21, .25, .28, .25, .24, .22,
// .20, .25, .30, .25, .24, .25,
// .25, .25, .27, .25, .26, .29];
//
//
// let max = Math.max.apply(Math, scores);
// let min = Math.min.apply(Math, costs);
// let mindec=min.toFixed(2);
// document.write('The maximum bubbles is: ' + max + ' / ' + 'The most economic price is: ' + mindec + ' cents');

//pre qualify Car
// function pre(car){
//   if(car.mileage > 10000){
//     return false;
//   }else if (car.year > 1995) {
//     return false;
//   }
// document.write('Your mileage is: ' + car.mileage + ' and year is: ' + car.year + ' you should buy this car!');
// retrurn;
// }
//
// let taxi = {
//   make:'KIA',
//   model:'Picanto',
//   year:1990,
//   color:'beige',
//   pasengers:4,
//   convertible:false,
//   mileage:9000
// };
//
// document.write(pre(taxi));

//this
// let eightball = {
//   index:0,
//   advice:['yes','no','maybe','not a chance'],
//   shake:function () {
//     this.index = this.index + 1;
//     if(this.index >= this.advice.length){
//       this.index = 0;
//     }
//   },
//   look:function(){
//     return this.advice[this.index];
//   }
//
// };
//
// eightball.shake();
// document.write(eightball.look());

//counter
// for (var i = 1000000; i > 0; i--) {
//   document.write(i);
// }

//constructor function
/* let name = prompt('your name');
let lastname = prompt('your last name');
let age = prompt('your age');
let height = prompt('your height');

function Person() {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  this.height = height;
  this.hello = function () {
    alert(name + ' says hello!');
  }
}

let sayhello = new Person(name,lastname,age,height);
sayhello.hello();
 */
let message = document.getElementById('greenPlanet');
message.innerHTML = 'Alert:Attack by red laser!';
>>>>>>> f847a84 (test authy commit)
