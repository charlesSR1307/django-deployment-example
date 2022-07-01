var firstName = prompt("Please enter your first name: ");
var lastName = prompt("Please enter your last name: ");
var age = prompt("How old are you?: ");
var height = prompt("How tall are you in centimeters (cm)?: ");
var petName = prompt("What is the name of your pet: ");
alert("Thank you for the information!");
petNameLength = petName.length

console.log(petName.length)
var count = 0;
if (firstName[0] && lastName[0]) {
   count += 1;
   console.log(count)
}
if (age>20 && age<30) {
   count += 1;
   console.log(count)
}
if (height>=170) {
   count += 1;
   console.log(count)
}
if (petName[petNameLength-1] === "y") {
   count += 1;
   console.log(count)
}

if (count == 4) {
   console.log("This is the secret message!")
}