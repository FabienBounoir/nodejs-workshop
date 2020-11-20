// const hello = 'Hello';
// const world = 'world';

// module.exports = {
//     hello,
//     world,
// };


/////////////////////////////////////////////////////////////////////////////////////////

// const object = {
//     firstName: "fabien",
//     lastName: "bounoir",
//     favoriteColor: "blue",
// };

// module.exports = object


////////////////////////////////////////////////////////////////////////////////////////

function myCallBack1() {
    console.log("test1")
}

function myCallBack2() {
    console.log("test2")
}

function myCallBack3() {
    console.log("test3")
}

const object = {
    myCallBack1,
    myCallBack2,
    myCallBack3,
};

module.exports = object