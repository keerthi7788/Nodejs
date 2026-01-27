const persons = [
    { name: "John", age: 30,location:"bangalore" },
    { name: "Jane", age: 25,location:"mangalore" },
    { name: "Doe", age: 40 }
];
console.log("persons", persons);
const personshadow = [...persons];
console.log(personshadow);
personshadow[0].age=35
console.log(persons);