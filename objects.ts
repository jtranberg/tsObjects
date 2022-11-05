const dog = {
    name: "elton",
    breed: 'shaggy',
    age: 0.5

}

function printName(person: {first: string, last: string}): void {         //parameter type annotation
    console.log(`${person.first} ${person.last}`)
}

printName({first: "Thomas", last: "jocabian"});

let coord: {x: number, y: number} = {x:34, y:56}    // return type is variable

function randcoord(): {x: number, y: number} {        //return type is literal
    return{ x: Math.random(), y: Math.random() };
}

printName ({first: 'mick', last: 'Jagger'})

