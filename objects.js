var dog = {
    name: "elton",
    breed: 'shaggy',
    age: 0.5
};
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "jocabian" });
var coord = { x: 34, y: 56 }; // return type is variable
function randcoord() {
    return { x: Math.random(), y: Math.random() };
}
printName({ first: 'mick', last: 'Jagger' });
