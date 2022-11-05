var dog = {
    name: "elton",
    breed: 'shaggy',
    age: 0.5
};
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "jocabian" });
