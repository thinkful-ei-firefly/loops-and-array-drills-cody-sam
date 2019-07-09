'use strict';

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;

  return function(location){
    warningCounter += 1;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${warningCounter > 1 ? 'times': 'time'} today!`);
  };
}

const volcano = hazardWarningCreator('Volcano\'s gonna blow');
const hurricane = hazardWarningCreator('Hurricane\'s gonna blow');
const avalanche = hazardWarningCreator('Avalanche\'s gonna plow');

volcano('Maryland');
volcano('Washington');
volcano('England');

hurricane('Miami');
hurricane('Alaska');

avalanche('LA');
avalanche('Africa');
avalanche('France');
avalanche('Texas');
