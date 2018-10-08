var nameVar = 'Pree';
nameVar = 'xyz';
console.log('nameVar', nameVar);

let nameLet = 'hen';
nameLet = 'sed';
console.log('nameLet', nameLet);

const nameConst = 'Fresd';
console.log('nameConst',nameConst);

//block scoping

const fullName = 'Andrew Mead';
let firstName;

if(fullName) {
     firstName = fullName.split(' ')[0];
    console.log(firstName); //let, const are block scope//
}

console.log(firstName);