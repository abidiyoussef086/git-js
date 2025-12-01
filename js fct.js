// ==================== STRING MANIPULATION FUNCTIONS ====================

// Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Count Characters
function countCharacters(str) {
  return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// ==================== ARRAY FUNCTIONS ====================

// Find Maximum
function findMax(arr) {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

// Find Minimum
function findMin(arr) {
  if (arr.length === 0) return null;
  return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array (filters elements based on a condition function)
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// ==================== MATHEMATICAL FUNCTIONS ====================

// Factorial
function factorial(n) {
  if (n < 0) return null; // Factorial not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Fibonacci Sequence
function fibonacci(terms) {
  if (terms <= 0) return [];
  if (terms === 1) return [0];
  if (terms === 2) return [0, 1];
  
  const sequence = [0, 1];
  for (let i = 2; i < terms; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// ==================== TESTING THE FUNCTIONS ====================

console.log("=== STRING FUNCTIONS ===");
console.log("Reverse 'hello':", reverseString("hello"));
console.log("Count characters in 'JavaScript':", countCharacters("JavaScript"));
console.log("Capitalize 'hello world from javascript':", capitalizeWords("hello world from javascript"));

console.log("\n=== ARRAY FUNCTIONS ===");
const numbers = [5, 2, 9, 1, 7, 6];
console.log("Array:", numbers);
console.log("Maximum:", findMax(numbers));
console.log("Minimum:", findMin(numbers));
console.log("Sum:", sumArray(numbers));
console.log("Filter even numbers:", filterArray(numbers, num => num % 2 === 0));
console.log("Filter numbers > 5:", filterArray(numbers, num => num > 5));

console.log("\n=== MATHEMATICAL FUNCTIONS ===");
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 0:", factorial(0));
console.log("Is 7 prime?", isPrime(7));
console.log("Is 10 prime?", isPrime(10));
console.log("Is 17 prime?", isPrime(17));
console.log("Fibonacci sequence (10 terms):", fibonacci(10));
console.log("Fibonacci sequence (5 terms):", fibonacci(5));