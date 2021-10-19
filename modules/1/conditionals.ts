/*
 *  Important lessons:
 * If/Else/Elseif
 * Type declarations
 * Switch
 */

const number = 10;

if (number > 5) console.log('yes it is');
else console.log('no it isnt');

type Options = 'small' | 'medium' | 'large';

const option: Options[] = ['small', 'large'];

switch (option[0]) {
    case 'small':
        console.log('its small');
        break;
    case 'medium':
        console.log('its a big bigger');
        break;
    case 'large':
        console.log('its way higher');
        break;
}
