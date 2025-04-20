// // variables
//     // let ,var , const
// let a = 10;
// var b = "20";
// const c = 30;
// // c = 1
// // data types
//     // string , number , boolean , null , undefined
//     let name = "Asim"; // "" , '', ``
//     let phone = "1234567890"
//     // number
//     let age = 20;
//     let salary = 10000.50;
//     let r = "40"
//     // boolean
//     let isMarried = true;
//     let isSingle = false;
//     let isHungry = true;
//    // undefined
//     let x; let z; let y;
//     console.log(x,y,z)
//     // null
//     let money = null;
//     console.log(money)
// // operators\
// // arithmetic operators
// console.log(a+b)
// console.log(a-r)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)
// // assignment operators
// a = 10;
// a+=20; // a = a + 20
// a-=20; // a = a - 20
// a*=20; // a = a * 20
// a/=20; // a = a / 20
// a%=20; // a = a % 20
// // comparison operators
// // == , != , === , !== , > , < , >= , <=
// // logical operators
// console.log(10!=="10")
// // conditionals
// // if , else if , else , switch, ternary operator
// // falsy values
// // 0 , false , null , undefined , NaN , ""
// console.log(Boolean(-85.69))
// let coin = "heads";
// // if(coin==='heads'){
// //     console.log("Team A wins")
// // }
// // else if(coin==='tails'){
// //     console.log("Team B wins")
// // }
// // else{
// //     console.log("coin should be heads or tails")
// // }

// // switch(coin){
// //     case "heads":
// //         console.log("Team A wins")
// //         break;
// //     case "tails":
// //         console.log("Team B wins")
// //         break;
// //     default:
// //         console.log("coin should be heads or tails")
// //         break;
// // }

// // ternary operator
// // coin=="heads"? console.log("Team A wins"):console.log("Team B wins")
// // functions
// // functions // build in functions , custom functions

// console.log('hello there')
// alert("hello there")
// let cookies = confirm('do you want cookies')
// console.log(cookies)
// age = prompt('enter your age')
// console.log(2025-age)

// let result = Math.random();
// console.log(Math.pow(2,3))


// // custom functions

// function greet(name){
//     console.log(`hello ${name}`)
// }

// greet("Asim")
// // arrays


// fruits.push('grapes')

// console.log(fruits)
// console.log(fruits.pop())
// console.log(fruits)

// fruits.shift()
// fruits.unshift('grapes')
// fruits.splice(1,0,'guava','watermelon','pineapple')
// console.log(fruits)

// let str = 'asim'
// console.log(str.split('').reverse().join(''))

// // objects 


// console.log(pen.color)

// pen.write('hello world , hakuna matata')


// loops

// for , while, do while, for in , for off, forEach,

// for(let i=2;i<=50;i+=2){
//     console.log(i)
// }


// let name = prompt("Enter your name");

// while(!name){
//     name = prompt("Providing a name is mandatory");
// }

// alert(`Hello ${name}`);

// let x = 1;

// do{
//     console.log(x)
//     x++
// }
// while(x<=10)


// let pen = {
//     color : "blue",
//     price : 10,
//     size : "small",
//     material : "wood",
//     write: function(message){
//         console.log(message)
//     }
// }

// pen.write('asked by nishiha')


// for(let i of fruits){
    //     console.log(`I love to eat ${i}`)
    // }
    
    // for(let i in pen){
        //     console.log(pen[i])
        // }
        
// let fruits = ["apple" , "banana" , "mango" , "orange"]
// let nums = [1,5,9,8,7,6,5,4,23,1,4,56,9]

// let newlist = fruits.map(function(i){
//     return i+" is a fruit"
// })

// let gt10 = nums.filter((i)=>{
//     return i>10
// })

// let sum = nums.reduce((a,b)=>{
//     return a+b
// })


// nums.forEach(function(i){
//     console.log(i)
// })
// DOM // document object model

// let header = document.getElementById('header')
// header.innerHTML = "Header is here"
// header.style.background = 'peachpuff'
// header.style.color = 'red'
// header.style.textAlign = 'center'


// let buttons = document.getElementsByTagName('button')

// console.log(buttons)

// for(let i of buttons){
//     i.style.display = 'block'
// }

// let btns = document.getElementsByClassName('btn')

// for(let i of btns){
//     i.style.color = 'red'
// }

// let header = document.querySelector('#header')
// header.innerHTML = "Header is here"
// header.style.color = 'red'

// let mainheader = document.querySelector('#mainHeader')

// let h1 = document.createElement('h1')

// h1.innerHTML = "Welcome to our website"

// mainheader.appendChild(h1)

function fun(){
    document.body.style.background = 'peachpuff'
}

function colorMe(event){
    document.body.style.background = event.target.value
}