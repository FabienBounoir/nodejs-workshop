// import 

// const value = require("./module")

// console.log(value.hello)
// console.log(value.world)

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//utilisation des objects + concatenation

// const object = {
//     firstName: "fabien",
//     lastName: "bounoir",
//     favoriteColor: "blue",
// };

//extirper des variables d'un objet
// const { firstName, lastName, favoriteColor } = require("./module")

//methode de concatenation
//const sentence = object.firstName + " " + object.lastName + ": My favorite color is " + object.favoriteColor
//const sentence = `${object.firstName} ${object.lastName}: My favorite color is ${object.favoriteColor}`
// const sentence = `${firstName} ${lastName}: My favorite color is ${favoriteColor}`

// console.log(sentence)


////////////////////////////////////////////////////////////////////////////////////////////////////////

//asynchrone

// function myCallBack() {
//     console.log("i'm called")
// }

// function myFunction(arg) {
//     arg();
//     arg();
// }

// myFunction(myCallBack)


const { myCallBack1, myCallBack2, myCallBack3 } = require("./module");

function myFunction(arg) {
    arg();
}

myFunction(myCallBack1)
myFunction(myCallBack2)
myFunction(myCallBack3)