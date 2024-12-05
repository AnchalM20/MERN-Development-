let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr[4] = 21; //array modified
console.log(arr);
console.log(arr.length);
arr.push(11); //added new element at end
console.log(arr);
console.log("popped element: ", arr.pop()); //remove element from end of the array and return it
console.log(arr);

arr.shift(); //Remove element from Start of array
console.log(arr);

let num = [33, 44];

arr.unshift(44); //insert element from start of array
console.log("Element after unshift: ", arr);

//Add elements between start and end
arr.splice(2, 1, "a", "s", 22, 33); //add elements at index 2 and remove one element
console.log(arr);

//Searching
console.log(arr.indexOf(10)); //return -1 if not found
console.log(arr.includes("s")); //return true
console.log(arr.indexOf(22, 2)); //search element, From index 2

//Seaching in Array of Objects
let student = [
  { name: "anchal", rollno: 44 },
  { name: "Shivani", rollno: 41 },
];
console.log(student);
console.log(student.indexOf({ name: "anchal", rollno: 44 })); //return -1 bcz address is not same
//Find object using function:
let students = student.find((student) => student.name === "anchal");

console.log(student2344a);
