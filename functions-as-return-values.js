'use strict';

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;

  return function(location){
    warningCounter += 1;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${warningCounter > 1 ? 'times': 'time'} today!`);
  };
}

const volcanoWarning = hazardWarningCreator('Volcano\'s gonna blow');
const hurricane = hazardWarningCreator('Hurricane\'s gonna blow');
const avalanche = hazardWarningCreator('Avalanch\'s gonna plow');

volcanoWarning('Maryland');
volcanoWarning('Washington');
volcanoWarning('England');

hurricane('Miami');
hurricane('Alaska');

avalanche('LA');
avalanche('Africa');
avalanche('France');
avalanche('Texas');
