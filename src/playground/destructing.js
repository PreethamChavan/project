//
// object destruction
//
// const person ={
//     name: 'preuebd',
//     age: 25,
//     location: {
//         city: 'aidbcub',
//         temp: 91
//     }
// };

// const {name: firstName= 'xyz', age} =person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature} = person.location;
// if(city && temperature){
//     console.log(`it's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'ioaudcydv',
//     author: 'iudbviudb',
//     publisher: {
//        // name: 'Penguin'
//     }
// };

// const { name: publisherName= 'self-publisher'} = book.publisher;

// console.log(publisherName);

// 
// array desctruction
// 

const address = ['1255 s junijojon street','san jose','cali', '22522'];

const [, city, state,]= address;

console.log(`you are in ${city} ${state}.`);