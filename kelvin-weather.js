//setting variable kelvin to 293
const kelvin = 0;

//celsius value is 273 less than kelvin
const celsius = kelvin - 273;

//formula for calculating fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

//rounding off decimal value of fahrenheit
fahrenheit = Math.floor(fahrenheit);

//formula for Newton scale
let newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);