console.log('Hello folks!');
const axios = require('axios');

//axios.get('https://google.com').then((response) => {
//    console.log(response.data);
//})

const mathfunction = require('./package/math-function')
console.log(mathfunction.add(1, 2));
console.log(mathfunction.sub(1, 2));
console.log(mathfunction.mul(1, 2));
console.log(mathfunction.div(1, 2));
