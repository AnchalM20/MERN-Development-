console.log("Hello world!");

let msg = "Anchal ---  ";
console.log(typeof msg); //Primitive type
console.log(
  msg.length,
  msg.charAt(0).toLowerCase(),
  "\n",
  msg.trim().split(" ")[0].concat(" Maurya"),
  "\n",
  msg.length,
  msg.includes("ch"),
  "\n",
  msg.split(" ")[0]
);

console.log(msg.split(" ")[0]);
let name = new String("Ujala");
console.log(typeof name); //Object
console.log(name.replace("ala", "wala"));

let message = "This is javascript basic concepts";
let words = message.split(" ");
console.log(words);
