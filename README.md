# Customise-JS
We will have many Customise JS Functions which does not built in javascript.

* [bind](#bind)
* [Merge Array](#merge-array)
* [shorten](#shorten)
* [shuffle](#shuffle)
* [summary](#summary)
* [Is Number](#is-number)
* [Is Str](#is-str)
* [Is Null](#is-null)
* [Performance Calculator](#performance-calculator)
* [Delete Duplicates](#delete-duplicates)


## bind
Bind function is used to copy the body of function to whom we bind. Like console.log is a function if we do console.log.bind, it will bind the body console.log to the variable we initialize to it. Bind accepts two arguments, both are optional, one is thisArg, which is an object or value we can refer to inside the function and the other are arguments that we can pass to the bind function.


## Merge Array
mergeArray is used to merge two arrays into one. A concat function is used to merge two arrays into one. Syntax is array1.concat(array2).

## shorten 
shorten is used to shorten the lenght of array. For example, if you have an array of ten element you can just change the length of the array to 3 and it will only show you first three indexes of arrays.

## shuffle
shuffle is used to shuffle the elements of an array, If you have an array you want to shuffle, you can do array.sort and pass into it a comparison function that will minus 0.5 from a Math.random number. After doing this, it will return a shuffled array. It happens so because sort accepts a comparison function whose value should return in negative, if first element of array is less than second, it will return a zero if first element of array is equal to second and it will return a positive number if first element of array is greater than second. So Math.random return a value between 0 and 1 and when we minus 0.5 from it, each time it gives an array of different sort.

## summary 
summary is used to combine two objects into one. We do this by creating a new object and copying the two objects in it using ... i.e spread operator.

## Is Number 
isNumber returns us a true or false value if the the given parameter is a number or not. We just check if the parameter is a number by checking it is not Nan and not infinite.

## Is Null 
isNull returns us a true or false value if the given parameter is a null or not. We check this if the given parameter value is not equal to null or undefined.

## Is Str
isStr return us a true or false value if the given parameter is a string or not. We check this if the given parameter value is a typeOf string or not.

## Performance Calculator
performanceCalculator tells us about the total time taken by a program to execute. We calculate the strating time of program and ending. Then remove starting time from the ending time and we have total time.

## Delete Duplicates
delDuplicates is used to remove duplicates from an array. We do this by making an array an object of set as sets do not have duplicate values.