var nameArray = ['zac', 'darth vader', 'goku', 'homer', 'bertha', 'joe', 'goku', 'goku', 'goku'];
var userInput = prompt("Search for a student: ");
var numberOfGokus = 0;
var numberOfJoes = 0;

var newStudent = prompt("Enter the new Name");

nameArray.push(newStudent)

console.log(nameArray);

var newArray = [['zac', 'goku', 'joe',] ['mike', 'scotty', 'magic']];

for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray[i].length; j++) {
        console.log(newArray[i][j])
    }
}

// for (var i=0; i < nameArray.length; i++); {
//     if (nameArray[i] === userInput.toLowerCase()) {
//     console.log('Yes ${nameArray[i]} is in the array at index ${i}')
// }
// }

// for (var i=0; i < nameArray.length; i++) {
//     if(nameArray[i] ==='goku') {
//         console.log("found one!");
//         numberofGokus++;
//     }
// }

// if(numberOfGokus > numberOfJoes) {
//     console.log("not a fair fight");
// } else if (numberOfJoes > numberOfGokus) {
//     console.log("joe's gonna win every time");

// }

// console.log(numberOfGokus);