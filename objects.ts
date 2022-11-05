const dog = {
    name: "elton",
    breed: 'shaggy',
    age: 0.5

}

function printName(person: {first: string, last: string}): void {
    console.log(`${person.first} ${person.last}`)
}

printName({first: "Thomas", last: "jocabian"});



