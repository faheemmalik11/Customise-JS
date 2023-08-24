const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);
console.log(isNumber('3.14159'));