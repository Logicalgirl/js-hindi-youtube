// const user = {
//     username:"Tannu",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`); // in this line we use this keyword for accesing value whose ihn under the scope.
//      console.log(this) // they print the current contex value
//     }
// }
// user.welcomeMessage()
// user.username="Anurag"
// user.welcomeMessage()

// console.log(this) // they print empty value beacuse they dont have any current context


// const chai = function() {
//     let username="tannu"
//     console.log(this) // there output is undefined
// }

/// arrow function-------------------
// const chai = () => {  // this is the arrow fuunction
//     let username= "tannu"
//     console.log(this) // undefined o/p
// }

// syntax of arrow function:: () => {}

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,12))

//const addTwo = (num1 , num2) => (num1 + num2)  //implicite return they automatically return value

// return objext using arrow function
// for returning value in arrow function it manditory to use ().
const addTwo = (num1 , num2) => ({name:"tannu"})
console.log(addTwo(5,12))