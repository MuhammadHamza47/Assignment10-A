// 1. Write a JavaScript program to list the properties of a JavaScript object

let student = {
    stName: "Muhammad Hamza",
    stClass: "BS(SE)",
    rollNo: 6492
};

console.log(student);

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

    
console.log("Roll No: "+ student.rollNo);

// 3. Write a JavaScript program to get the length of a JavaScript object.  

let length = Object.keys(student);

console.log(length);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.


let library = [ 

    {
        author: 'Bill Gates',
 
        title: 'The Road Ahead',
 
        readingStatus: true
    },
 
    {
        author: 'Steve Jobs',
 
        title: 'Walter Isaacson',
 
        readingStatus: true
    },
 
    {
        author: 'Suzanne Collins',
 
        title:  'Mockingjay: The Final Book of The Hunger Games', 
 
        readingStatus: false
    }];

    for (var i = 0; i < library.length; i++) 
   {
    let book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }

//    5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.


class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    getVolume() {
      const pi = 3.14159265358979323846;
      const volume = pi * Math.pow(this.radius, 2) * this.height;
      return volume.toFixed(4);
    }
  }
  
  const cylinder = new Cylinder(3, 5);
  console.log(`The volume of the cylinder is ${cylinder.getVolume()}`);

// 6. Write a Bubble Sort algorithm in JavaScript.  

let Data=[5,2,8,6,9,1,3,5,4,2]

sortingArray= Data.sort((a,b)=>(a-b))
console.log(sortingArray)

// Write a JavaScript program which returns a subset of a string.   

//Sample Data: dog

//Expected Output: ["d", "do", "dog", "o", "og", "g"]

function generateSubsets(str) {
    let subsets = [];
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        subsets.push(str.slice(i, j));
      }
    }
  
    return subsets;
  }
console.log( generateSubsets("dog"));  


 //8. Write a JavaScript program to create a Clock.   

// Note: The output will come every second.

// Expected Console Output :

// "14:37:42"

// "14:37:43"

// "14:37:44"

// "14:37:45"

// "14:37:46"

// "14:37:47"

function clock() { // user-defined
  // Get the current date and time
  var now = new Date();  // built-in function

  // Extract hours, minutes, and seconds from the date object
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Add a leading zero to single-digit hours, minutes, and seconds
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Build the clock string in the format HH:MM:SS
  var clockStr = hours + ":" + minutes + ":" + seconds;

  // Log the clock string to the console
  console.log(clockStr);
}
clock()

// Update the clock every second
//   setInterval(clock, 5000);

// 9. Write a JavaScript program to calculate the area and perimeter of a circle.   

// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

function area(r){
  return 3.14*r*r
 }
 console.log("Area of a circle is:", area(60))
 
 
 function perimeter(r){
    
 return 2*3.14*r
 }
 console.log("the parimeter of a circle is :",perimeter(50));

 // 10. Write a JavaScript program to sort an array of JavaScript objects.   

// Sample Object :



var library1 = [ 

  {

      title:  'The Road Ahead',

      author: 'Bill Gates',

      libraryID: 1254

  },

  {

      title: 'Walter Isaacson',

      author: 'Steve Jobs',

      libraryID: 4264

  },

  {

      title: 'Mockingjay: The Final Book of The Hunger Games',

      author: 'Suzanne Collins',

      libraryID: 3245

  }];
library1.sort(function(a,b){
return b.libraryID - a.libraryID;
})
console.log(library1);

///////////////////////////  Functions //////////////////////////////////

// . Write a js program to find cube of any number using function.

function cube(num){
    
  return num*num*num
}
console.log(cube(3));

// 2. Write a js program to find diameter, circumference and area of circle using functions.


//diameter
function diameter(r){
  return 2*r
}
console.log(diameter(14));

//circumference
function  circumference(r){
  return 2*3.14*r
}
console.log( circumference(20));
//circle
function circle(r){
  return 3.14*r*r
}
console.log(circle(19));

//3. Write a js program to find maximum and minimum between two numbers using functions.

function Difference(num1,num2){
   
  if(num1>num2){
      return `${num1} is maximum `
  }
  
  else if (num1<num2) {
      return `${num2} is maximum`
      
  }
  return `${num1} and ${num2} both are equal`
  }
  console.log(Difference(0,0));

  //4. Write a js program to check whether a number is even or odd using functions.

function checkwhether(number){
  if (number%2==0) {
      return `${number} is even`
  }
  else
  return `${number} is odd`
}
console.log(checkwhether(7));

// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

// function Weather(a,b,c) {
//   let num = 153;
//   if a * 
// }

// 6. Write a JavaScript program to find all prime numbers between given interval using functions.

// function primeNumber(num){
//     if(num<2)
//     return false
//     for (let index = 2; index < num.length; index++) {
//       if (num%2==0) {
//         return false
//       }
//         return true
//     }
// }
// function findprime(a,b){
// let primes=[];
// for (let index = a; index <=b; index++) {
//     if (primeNumber(index)) primes.push(index);
//     return primes;
// }
// }
// console.log(findprime(10,20));
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimes(start, end) {
  let primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}


console.log(findPrimes(10, 20)); 

// 7. Write a JavaScript program to print all strong numbers between given interval using functions.


function printPositiveNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    if (i > 0) {
      console.log(i);
    }
  }
}


console.log(printPositiveNumbers(-5, 5)); 
console.log(printPositiveNumbers(0, 10)); 

// 10. Write a JavaScript program to find power of any number using function.

function powerOfnum(number,power) {
  return number**power
}
console.log(powerOfnum(7,2));

// 11. Write a JavaScript program to print all natural numbers between 1 to n using function.


function naturalNumbers(n){
  for (let i = 1; i<= n; i++) {
     
      console.log(i)
  }
}
console.log(naturalNumbers(10));

// 12. Write a JavaScript program to print all even or odd numbers in given range using function.

function printEvenOrOddNumbers(start, end, type) {
  for (let i = start; i <= end; i++) {
    if (type === 'even' && i % 2 === 0) {
      console.log(i);
    } else if (type === 'odd' && i % 2 !== 0) {
      console.log(i);
    }
  }
}


 console.log(printEvenOrOddNumbers(1, 10, 'even')) 
 console.log(printEvenOrOddNumbers(1, 10, 'odd'))

 // 13. Write a JavaScript program to find sum of all natural numbers between 1 to n using function
function naturalNumbers(n){
  let sum=0;
  for (let i = 1; i<= n; i++) {
     
    sum=sum+i
  }
  return sum
}
console.log(naturalNumbers(10));

// 15. Write a JavaScript program to find reverse of any number using function.

function reverseNumber(num) {
  let reversed = 0;
  while (num !== 0) {
    reversed = reversed * 10 + (num % 10);
    num = (num - num % 10) / 10;
  }
  return reversed;
}


console.log(reverseNumber(123)); 
console.log(reverseNumber(456789)); 

// 16.Write a JavaScript program to check whether a number is palindrome or not using function.
function isPalindrome(number) {
    
  const strNumber = number.toString();
 
  const len = strNumber.length;
  
  for (let i = 0; i < len / 2; i++) {
    if (strNumber[i] !== strNumber[len - 1 - i]) {
      return false;
    }
  }
  return true;
}


console.log(isPalindrome(121)); 

//17. Write a JavaScript program to find sum of digits of a given number using function.

function sumofdigits(n){
  let sum=0;
  for (let i = 1; i<= n; i++) {
     
    sum=sum+i
  }
  return sum
}
console.log(sumofdigits(5));

//18. Write a JavaScript program to find factorial of any number using function

function factorial(number) {
  if (number < 0) {
    return -1;
  } else if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5)); 
console.log(factorial(7)); 
console.log(factorial(0)); 

//19. Write a JavaScript program to generate nth Fibonacci term using function.
function fibonacciSeries(n) {
  let fibonacciArr = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
  }

  return fibonacciArr;
}

console.log(fibonacciSeries(10)); 
console.log(fibonacciSeries(20)); 

//20. Write a JavaScript program to find GCD (HCF) of two numbers using function

function findGCD(a, b) {
    
  a = Math.abs(a);
  b = Math.abs(b);
  if (b === 0) {
    return a;
  }
  
  
  return findGCD(b, a % b);
}
console.log(findGCD(12, 18)); 

//21. Write a JavaScript program to find LCM of two numbers using function.

function findLCM(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  let larger = Math.max(a, b);
  for (let i = larger; ; i += larger) {
    if (i % a === 0 && i % b === 0) {
      return i;
    }
  }
}
console.log(findLCM(12, 18));
console.log(findLCM(30, 50)); 
console.log(findLCM(0, 8)); 

//22. Write a JavaScript program to display all array elements using function.

function displayAllarray(array){
  for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
      
  }
      
  }
  let myarray=[1,3,5,7,9,11]
  console.log(displayAllarray(myarray));

  //23. Write a JavaScript program to find sum of elements of array using function.

function sumofarray(sumofarr) {
  let sum=0;
  for (let i = 0; i < array.length; i++) {
   sum=sum+sumofarr[i];
      
  }
  return sum
}
let array=[3,4,5,6,7,8,9]
console.log(sumofarray(array));


///////////////////////////// Date Handling //////////////////////////////////


//2. Write a JavaScript function to get the current date. 
//Note : Pass a separator as an argument.
// Test Data :


function getCurrentDate(saprator) {
  const currentDate = new Date();
  const day =  currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

return `${day}${saprator}${month}${saprator}${year}${saprator}`
}
console.log(getCurrentDate('/') );
console.log(getCurrentDate('-'));

// 3. Write a JavaScript function to get the number of days in a month.

function getDaysInMonth(month, year) {
  return new Date(year, month,0).getDate();
}



console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(10, 2012));

// 4. Write a JavaScript function to get the month name from a particular date.

function getMonthName(date) {
    
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December'];

  
  var monthIndex = date.getMonth();

  
  var monthName = monthNames[monthIndex];

  
  return monthName;
}



console.log(getMonthName(new Date("10/11/2009")));
console.log(getMonthName(new Date("11/13/2014")));

// 5. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).

function compare_dates(date1,date2) {
  if (date1.getTime()==date2.getTime()) {
     return "Date1==Date2"
  }
  else if(date1>date2){
     return "Date1>Date2"
  }
else
return "Date1<Date2;"

}




console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));

// 6. Write a JavaScript function to add specified minutes to a Date object.

function add_minutes(date,minutes) {
  return new Date(date.getTime() + minutes*80000) 
}
console.log(add_minutes(new Date(2014,10,2),30));

// 7. Write a JavaScript function to test whether a date is a weekend.


function is_weekend(date_string) {
  const date = new Date(date_string);
  const day = date.getDay();
  return day === 0 || day === 6 ? "weekend" : undefined;
}

console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
// Output :
// "weekend" "weekend" undefined
