'use strict';

const turtleSteps = [3, 4];
const turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const positiveMovements = turtleMovements.filter(step => step[0] >= 0 && step[1] >=0);
console.log(positiveMovements[0]);
console.log(positiveMovements[1]);
console.log(positiveMovements[2]);
const totalMovement = positiveMovements.map(step => step[0]+step[1]);
console.log(totalMovement);
totalMovement.forEach((step, i) => console.log(`Movement #${i+1}: ${step} steps`));