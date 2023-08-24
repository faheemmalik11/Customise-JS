const array = ['one', 'two', 'three', 'four', 'five', 'six'];
array.sort(() => Math.random() - 0.5);
console.log(array);