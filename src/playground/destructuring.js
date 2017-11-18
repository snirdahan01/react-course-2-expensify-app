//
// Object destructuring
//

// const person = {
//     name: 'Snir',
//     age: 27,
//     location: {
//         city: 'Beer-Sheva',
//         temp: 25
//     }
// };

// const {name: firstname = "Anonymous", age} = person;

// console.log(`${firstname} is ${age}.`);

// const {temp: temperature, city} = person.location;

// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = "Self-Publisher"} = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 S Jupiter Street', 'Philadelphia', 'Pennsylvenia', '19147'];

const [street, city, state = 'Beer-Sheva', zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, priceM, priceL, priceXL] = item;

console.log(`A medium ${name} consts ${priceM}.`);