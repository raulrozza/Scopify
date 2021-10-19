/**
 * Important lessons
 * Array declaration
 * Array values
 * Dynamic array types
 * Legacy array navigation in for loops
 * Template literals and forof
 * Modules
 */

import { metersToKilometers } from './functions';

const array = [15, 10, 25];
const manyTypesArray = ['banana', 17, true];
// array[0] = 'coisa' // Show as an error

console.log(array);
console.log(manyTypesArray);

const kilometersArray = [];
for (let i = 0; i < array.length; i++)
    kilometersArray.push(metersToKilometers(array[i]));

for (const value of manyTypesArray) console.log(`Value: ${value}`);
