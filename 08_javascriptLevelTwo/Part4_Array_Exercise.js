// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addNew(name) {
    roster.push(name)
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

function remove(name) {
    var index = roster.indexOf(name);
    roster.splice(index, 1);
}

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.

function display() {
    console.log(roster)
}

// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

const choise = prompt("Do you want to use the web app? y/n");

if (choise === "y") {
    while (true) {
        var select = prompt("Select 1: to add a name, 2: to remove a name, 3: to display de list, 4: to quit: ");
        if (select == 1) {
            var newName = prompt("Please write the name you want to add: ");
            addNew(newName);
        }else if (select == 2) {
            var delName = prompt("Please write the name you want to delete: ");
            remove(delName)
        }else if (select == 3) {
            display();
        }else if (select == 4) {
            break;
        }
    }
}

alert("Thanks for using the web App! Please refresh the page to start over! ")
