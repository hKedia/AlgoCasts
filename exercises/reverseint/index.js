// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
}

// function reverseInt(n) {
//     let rev=0;
//     let flag = false;
//     if (n < 0) {
//         flag = true;
//         n = Math.abs(n);
//     }
//     while(n>0) {
//         rev = (rev * 10) + n%10;
//         n = Math.floor(n/10);
//     }
//     if(flag)
//         return -rev;
//     else
//         return rev;
// }

module.exports = reverseInt;
