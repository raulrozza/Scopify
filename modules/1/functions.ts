/**
 * Important lessons
 * Function declarations (standard, arrow, nameless)
 * Dynamic return types
 */

function power(num1: number, num2: number) {
    return num1 * num2;
}

console.log(power(30, 2));

// Export only when talking about modules
export const metersToKilometers = (meters: number): number => meters / 1000;

console.log(metersToKilometers(15));
