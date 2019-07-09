'use strict';

/**
 * @param {array} - array of strings
 */
function reduce(arr){

  let decodedString = ''; // why do we need to have an empty string to not get 'undefined'

  arr.forEach(word => {
    if(word.length === 3){
      decodedString += ' ';
    } else {
      decodedString += word[word.length-1].toUpperCase();
    }
  });

  return decodedString;
}

const message = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

console.log(reduce(message.split(' ')));