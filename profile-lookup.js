'use strict';

//Setup
var contacts = [
  {
    'firstName': 'Akira',
    'lastName': 'Laine',
    'number': '0543236543',
    'likes': ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    'firstName': 'Harry',
    'lastName': 'Potter',
    'number': '0994372684',
    'likes': ['Hogwarts', 'Magic', 'Hagrid']
  },
  {
    'firstName': 'Sherlock',
    'lastName': 'Holmes',
    'number': '0487345643',
    'likes': ['Intriguing Cases', 'Violin']
  },
  {
    'firstName': 'Kristian',
    'lastName': 'Vos',
    'number': 'unknown',
    'likes': ['JavaScript', 'Gaming', 'Foxes']
  }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i=0; i < contacts.length; i++) {
  // contacts.forEach(function(contact) {
    const objKeys = Object.keys(contacts[i]);

    if (name === contacts[i].firstName) {
      if (objKeys.includes(prop)) {
        return contacts[i][prop];
      } else {
        return 'No such property';
      }

    } 
  }
  return 'No such contact';
  // Only change code above this line
}
// Change these values to test your function

console.log(lookUpProfile('Akira', 'likes'));
// "Kristian", "lastName" should return "Vos"
// "Sherlock", "likes" should return ["Intriguing Cases", "Violin"]
// "Harry","likes" should return an array
console.log(lookUpProfile('Kristian', 'lastName'));
console.log(lookUpProfile('Sherlock', 'likes'));
console.log(lookUpProfile('Harry', 'likes'));
console.log(lookUpProfile('Harryt', 'likes'));
console.log(lookUpProfile('Harry', 'likest'));

