//Task-1
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}


//Task-2
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0 && i % 3 ===0) {
    console.log(i);
  }
}


//Task-3
for (let i = 100; i >= 50; i--) {
  if (i % 5 === 0) {
    console.log(i);
  }
}


//Task-4
for (let i = 0; i <= 7; i++) {
  let square = i * i;
  console.log(`The square of ${i} = ${square}`);
}


//Task-5
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);


//Task-6
const randomNumber6 = Math.floor(Math.random() * 10) + 1;

let result = 1;

for (let i = 2; i <= randomNumber6; i++) {
  result *= i;
}

console.log(randomNumber6);
console.log(result);


//Task-7

let randomNumber7;
let attempts;

for (attempts = 1; ; attempts++) {
  randomNumber7 = Math.floor(Math.random() * 100) + 1;
  if (randomNumber7 % 5 === 0) {
    break;
  }
}

console.log(`The random number is ${randomNumber7} and it took ${attempts} attempt/s to generate it.`);


//Task-8
const arr8 = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(arr8);
console.log(arr8.sort());


//Task-9
const arr9 = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(arr9);
console.log(arr9.includes('Pluto'));


//Task-10
const arr10 = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(arr10.sort());
console.log(arr10.includes('Garfield') && arr10.includes('Felix'));


//Task-11
const arr11 = [10.5, 20.75, 70, 80, 15.75];
console.log(arr11);


for (let i = 0; i <= arr11.length - 1; i++) {
  console.log(arr11[i]);
}


//Task-12
const arr12 = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(arr12);

const startsWithBOrP = arr12.filter(item => {
  const lower = item.toLowerCase();
  return lower.startsWith('b') || lower.startsWith('p');
}).length;

const hasBookOrPen = arr12.filter(item => {
  const lower = item.toLowerCase();
  return lower.includes('book') || lower.includes('pen');
}).length;

console.log(`Elements starting with 'B' or 'P' = ${startsWithBOrP}\n
Elements having 'book' or 'pen' = ${hasBookOrPen}`);


//Task-13
const arr13 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(arr13);

const moreThan10 = arr13.filter(item => item > 10).length;
const lessThan10 = arr13.filter(item => item < 10).length;
const equal10 = arr13.filter(item => item === 10).length;

console.log(`Elements that are more than 10 = ${moreThan10}\n
Elements that are less than 10 = ${lessThan10}\n
Elements that are 10 = ${equal10}`);


//Task-14
const first = [5, 8, 13, 1, 2];
const second = [9, 3, 67, 1, 0];

console.log('1st array is =', first);
console.log('2nd array is =', second);

const third = first.map((num, i) => Math.max(num, second[i]));

console.log('3rd array is =', third);


//Task-15
function firstDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }

  return -1;
}


//Task-16
function getDuplicates(arr) {
  const duplicates = [];
  const alreadyAdded = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !alreadyAdded.includes(arr[i])) {
        duplicates.push(arr[i]);
        alreadyAdded.push(arr[i]);
        break;
      }
    }
  }

  return duplicates;
}


//Task-17
function reverseStringWords(str) {
  if (str.trim() === '') return '';
  return str
    .split(' ')
    .map(word => [...word].reverse().join(''))
    .join(' ');
}


//Task-18
function getEvens(num1, num2) {
  const result = [];
  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }

  return result;
}


//Task-19
function getMultipleOf5(num1, num2) {
  const result = [];
  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  for (let i = start; i <= end; i++) {
    if (i % 5 === 0) {
      result.push(i);
    }
  }

  if (num1 > num2) {
    result.reverse();
  }

  return result;
}


//Task-20
function fizzBuzz(num1, num2) {
  const result = [];
  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }

  return result.join(' | ');
}