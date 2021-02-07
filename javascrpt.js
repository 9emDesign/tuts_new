//jshint esversion:6
/*let username= 'Robert'; // variable string
let age= 50; //variable number
let person = { //object
firstName:'Zayno',
age:50,
height:1.74
};
console.log(username);
console.log(age);
console.log(person.firstName);
console.log(person.height);*/

//function to perform a task
/*function greet() {
  document.write('hello javascript function');
}
greet();*/

/*function greet(firstName) {
  document.write('hello javascript function:'+ ' '+firstName);
}
greet('Robert!');*/

//function to perform a calculation
/*function square(number) {
  return number*number;
}
document.write(square(25));*/

//if else statements
/*let hour=6;
if(hour >=6 && hour <=12){
  document.write('Good Morning!');
}else if(hour >=12 && hour<=18){
  document.write('Good Afternoon!');
}else {
  document.write('Good Evening!');
}*/

//switch
// let pap=40;
// switch (pap) {
//   case 20:document.write('Your 20!');
//   break;
//   case 40:document.write('hey 40!');
//   break;
//   default:document.write('Just kidding!');
// break;
// }

//comparison operators
// let overTwentyone= true;
// if(overTwentyone != true){
  // document.write('Congratulations - Your old enough!');
// }else{
  // document.write('Your not old enough!');
// }

//manipulating html
// document.getElementById('button').onclick= function(){
//   document.getElementById('confirm').innerHTML='Order placed!';
//   document.getElementById('button').style.display='none';
// };

//object
// let person={
//   name:'zayno',
//   lastName:'Lane',
//   age:50
// };

//IIFE
// (function() {
//   let person = {
//     name:'Robert',
//     lastName:'Lane',
//   };
//     document.write(person.lastName + ' ' + person.name);
// })();

// let v = (function() {
//   let age = 50;
//   return age;
// })();
// document.write(v);

//loop object
// let obj = {
//   name: 'Jean-Luc Picard ',
//   rank: 'Captain ',
//   age: 54
// };
//
// // Prints "name Jean-Luc Picard" followed by "rank Captain"
// Object.keys(obj).forEach(key => {
//   document.write(key, ' ' + obj[key]);
// });
//
// Object.keys(obj).forEach((key, i) => {
//     document.write(key, ' ' + obj[key]);
// });

//function
// function square(x){
//   return x*x;
// }
// let y = 12;
// document.write(square(y));

// function names(x){
//   return x.name = 'Sally';
// }
// let me ={
//   name:'Caleb'
// };
// document.write(names(me));

//callback function
function dosomething(x){
  return x();
}

document.write(dosomething(myfunction));

//javascript exercises for beginners
// function check100(a,b){
//   if(a === 100 || b === 100){
//     document.write('a or b is equal to 100!');
//   }else if (a+b === 100) {
//     document.write('a and b is equal to 100');
//   }else if (a !== 100 || b !== 100) {
//     document.write('a or b is not equal to 100!');
//   }
// }
// check100(0,100);

//loop in loop
// function loops(x,y) {
//   for(let i=0;i < 2;i++){
//     for(let j=0;j < 1;j++){
//       document.write('loop2!'+ x +'<br>');
//     }
//     document.write('loop1!'+ y +'<br>');
//   }
//
// }
// loops('loop1','loop2');

//loop
// class Book{
//   constructor(title,author,year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//
//   getSummary(){
//     return `${this.title} was written in ${this.year} by ${this.author}.`;
//   }
// }
//
// let book1 = new Book('Jurassic Park','Jhon Wither','1990');
// console.log(book1);
