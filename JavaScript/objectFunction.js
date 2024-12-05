//create a object with properties
let rectangle = {
  length: 10,
  breadth: 10,

  draw() {
    console.log("drawing rectangle");
  },
  erase() {
    console.log("erasing rectangle");
  },
};

console.log(rectangle);
console.log(rectangle.length);
rectangle.draw();
rectangle.erase();

//Instead creating rectangle object multiple times
//use factory function which will create rectangle object
//whenever we need to create a new rectangle object will pass its length and breadth properties to this function
// function createRectangle() {
//   return (rectangle = {
//     length: 10,
//     breadth: 10,

//     draw() {
//       console.log("drawing rectangle");
//     },
//   });
// }

//Factory Function: Return rectangle object with its properties
function createRectangle(length, breadth) {
  return (rectangle = {
    length: length,
    breadth: breadth,
    draw() {
      console.log(
        "drawing rectangle having length:",
        length,
        "and breadth ",
        breadth
      );
    },
    area() {
      console.log("area of the rectangle is: " + length * breadth);
    },
  });
}

//Request by calling function and return rectangle object
let rectObj = createRectangle(4, 5);
let rectObj1 = createRectangle(7, 70);
rectObj.draw();
rectObj1.area();
console.log(rectObj);

//Constructor function: properties/methods initialization/define
//new: keyword return empty object , this: refer current object
function Rectangle(len, bre) {
  this.length = len;
  this.breadth = bre;
  this.draw = function () {
    console.log("drawing rectangle");
  };
}
//Object creation using constructor function:
let obj = new Rectangle(34, 30);
console.log(obj);
obj.color = "yellow"; //added new property
console.log(obj);

delete obj.color; //delete property
console.log(obj);

//Reference types: Pointing to same address
// let a = { val: 10 };
// let b = a; //pass by address
// a.val++;
// console.log(a.val); //11
// console.log(b.val); //11

//Pass by value
// let number = 10;
// function inc(number) {
//   number++;
// }
// inc(number);
// console.log(number); //gives 10 bcz pass by value

//for-in loop
let rect = {
  len: 10,
  bre: 22,
};
for (let key in rect) {
  console.log(key, rect[key]);
}

//for-of : iterables->Arrays,Maps
let array = [2, 3, 5, "qwerty"];
for (let key of Object.keys(rect)) {
  console.log(key, rect[key]);
}
for (let item of array) {
  console.log(item);
}

//To check existing properties of an object
if ("len" in rect) {
  console.log("present properties");
} else {
  console.log("absent properties");
}

let a = 3 + 10 + "34" + 4;
console.log("a = " + a + " " + typeof a); //string

//*************Object Cloning Methods****************************
//First: 1. Itration
let src = { value: 10 };
let dest = {};
for (let key in src) {
  dest[key] = src[key];
}
//Second: Using assign function:
let obj2 = Object.assign({}, src);
console.log("obj2 value = " + obj2.value);
obj2.value = 20;
console.log("obj2 value = " + obj2.value); //change value only for obj2
console.log("src value = " + src.value); //will not change for src
//Third: Object Cloning
let objClone3 = { ...src };
console.log("objClone3 value = " + objClone3.value);

//Garbage Collection:Automatically in js run in background
//find unused objects/variable and deallocate them
//we don't have control over garbage collection





