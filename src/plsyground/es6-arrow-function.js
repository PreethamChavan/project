const square = function (x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

//let fullName = 'Mike Smith';
// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];

// };

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Mike Smith'));