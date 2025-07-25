//Task-1
let str1 ="5", str2 = "2";
let num1 = Number(str1);
let num2 = Number(str2);
console.log(`The sum of 5 and 2 is = ${num1 + num2}\n
The product of 5 and 2 is = ${num1 * num2}\n
The division of 5 and 2 is = ${num1 / num2}\n
The subtraction of 5 and 2 is = ${num1 - num2}\n
The remainder of 5 and 2 is = ${num1 % num2}\n
The exponentiation of 5 and 2 is = ${num1 ** num2}`);


//Task-2
let s1 = "200", s2 = "-50";
let n1 = Number(s1);
let n2 = Number(s2);
console.log(`The greatest value is = ${Math.max(n1, n2)}\n
The smallest value is = ${Math.min(n1, n2)}\n
The average is = ${(n1 + n2) / 2}\n
The absolute difference is = ${Math.abs(n1 - n2)}`);


//Task-3
let r1 = Math.floor(Math.random() * 50) + 1;
let r2 = Math.floor(Math.random() * 50) + 1;
let difference = Math.abs(r1 - r2);
console.log(`The absolute difference between numbers is = ${difference}`);


//Task-4
let random1 = Math.floor(Math.random() * 50) + 1;
let random2 = Math.floor(Math.random() * 50) + 1;
let random3 = Math.floor(Math.random() * 50) + 1;
let random4 = Math.floor(Math.random() * 50) + 1;
let random5 = Math.floor(Math.random() * 50) + 1;
let max = Math.max(random1, random2, random3, random4, random5);
let min = Math.min(random1, random2, random3, random4, random5);
console.log(`The max value = ${max}\n
The min value = ${min}`)


//Task-5
let rn1 = Math.floor(Math.random() * 51) + 50;
let rn2 = Math.floor(Math.random() * 51) + 50;
let rn3 = Math.floor(Math.random() * 51) + 50;
console.log(`The number 1 = ${rn1}\n
The number 2 = ${rn2}\n
The number 3 = ${rn3}\n
The sum of numbers is = ${rn1 + rn2 + rn3}`);


//Task-6
let a = Math.floor(Math.random() * 100) + 1;
let b = Math.floor(Math.random() * 100) + 1;
let c = Math.floor(Math.random() * 100) + 1;
let result = a > 25 && b > 25 && c > 25;
console.log(result);


//Task-7
let userName = "David";
console.log(`The length of the name is = ${userName.length}\n
The first character in the name is = ${userName[0]}\n
The last character in the name is = ${userName[userName.length - 1]}\n
The first 3 characters in the name are = ${userName.slice(0, 3)}\n
The last 3 characters in the name are = ${userName.slice(-3)}`);