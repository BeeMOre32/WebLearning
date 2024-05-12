
function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}


const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers);

const strings = ['apple', 'banana', 'cherry'];
const reversedStrings = reverseArray(strings);


console.log(reversedNumbers);
console.log(reversedStrings);


function swap<T, U>(a: T, b: U): [U, T] {
    return [b, a];
}

const swapped = swap(1, 'apple');
console.log(swapped); // ['apple', 1]


