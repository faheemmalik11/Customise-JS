const duplicates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'a', 'b', 'c'];
const delDuplicates = array => [...new Set(array)];
console.log(delDuplicates(duplicates));