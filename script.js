var nameArray = ['zac', 'darth vader', 'goku', 'homer', 'bertha', 'joe', 'goku', 'goku', 'goku'];
var userInput = prompt("Search for a student: ");

var newStudent = prompt("Enter the new Name");

nameArray.push(newStudent)

console.log(nameArray);

var numberOfGokus = 0;
var numberOfJoes = 0;

// for (var i=0; i < nameArray.length; i++); {
//     if (nameArray[i] === userInput.toLowerCase()) {
//     console.log('Yes ${nameArray[i]} is in the array at index ${i}')
// }
// }

for (let i=0; i < nameArray.length; i++) {
    if(nameArray[i] ==='goku') {
        console.log("found one!");
        numberofGokus++
    }
}

if(numberOfGokus > numberOfJoes) {
    console.log("not a fair fight");
} else if (numberOfJoes > numberOfGokus) {
    console.log("joe's gonna win every time");

}

console.log(numberOfGokus);