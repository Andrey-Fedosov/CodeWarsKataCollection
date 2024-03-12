// here  completed katas(but aren't been uploaded)

// //& for 11.03.2024
// //^ 1 write a function that returns the average age of developers
// //^ katas link: https://www.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript

// //my variant
//// function getAverageAge(list) {
////   return Math.round(
////     list.map((el) => el.age).reduce((a, c) => a + c) / list.length
////   );
// //}

// //* --------------------------------------------------------------------

// //^ 2 write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins
// //^ kata's link: https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript

// //my variant
// function findAdmin(list, lang) {
//   return list.filter((el) => el.language === lang && el.githubAdmin === "yes");
// }

// //* --------------------------------------------------------------------

// //^ 3 Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form.
// //^ kata's link: https://www.codewars.com/kata/583952fbc23341c7180002fd/train/javascript

// //my variant
// function orderFood(list) {
//   let mealType = {};

//   for (let el of list) {
//     let mealArray = Object.keys(mealType);
//     if (mealArray.includes(el.meal) === false) {
//       mealType[el.meal] = 1;
//     } else {
//       mealType[el.meal]++;
//     }
//   }
//   return mealType;
// }

// //^ 4 your function should return true as there is at least one developer from the required 5 geographic zones.
// //^ kata's link: https://www.codewars.com/kata/58291fea7ff3f640980000f9/train/javascript

// //my variant
// function allContinents(list) {
//   let eachContinentMembersCount = {};

//   for (let el of list) {
//     let continentsList = Object.keys(eachContinentMembersCount);

//     if (continentsList.includes(el.continent) === false) {
//       eachContinentMembersCount[el.continent] = 1;
//     } else {
//       eachContinentMembersCount[el.continent]++;
//     }
//   }

//   return Object.keys(eachContinentMembersCount).length === 5;
// }

// //^ 5 Your task is to return either: true if all developers in the list code in the same language; or false otherwise.
// //^ kata's link: https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript

//my variant
// // function isSameLanguage(list) {
// //  const firstMemeberLanguage = list[0].language;
// //  return list
// //    .map((el) => el.language)
// //  .every((el) => el === firstMemeberLanguage);
// //}

//& for 12.03.2024

//^ 1
//^ kata's link: https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

//my variant

function oddOrEven(array) {
  return array.length === 0 || array.reduce((a, c) => a + c) % 2 === 0
    ? 'even'
    : 'odd'; //enter code here
}

//^ 2
//^ kata's link: https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

//my variant

//& for 13.03.2024
//^ 1 Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

//^ kata's link: https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

//my variant
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return list.sort((a, b) => b - a)[0];
};

//^ 2 You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//^ kata's link: https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

//my variant
function check(a, x) {
  return a.some((el) => el === x);
}

//^ 3 Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//^ kata's link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

//my variant
function reverseWords(str) {
  return str
    .split(' ')
    .map((el) => el.split('').reverse().join(''))
    .join(' ');
}

//^ 4 Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//^ kata's link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

//my variant
function longest(s1, s2) {
  let newS = '';
  const s3 = s1 + s2;

  for (let i = 0; i < s3.length; i++) {
    if (!newS.includes(s3[i])) {
      newS += s3[i];
    } else {
      newS;
    }
  }
  return newS.split('').sort().join('');
}

//^ 5 Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'
//^ kata's link: https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

//my variant
function divisors(integer) {
  let result = [];
  for (let i = 2; i <= integer; i++) {
    if (integer % i === 0 && integer !== i) {
      result.push(i);
    } else if (result.length === 0 && integer === i) {
      return `${i} is prime`;
    }
  }
  return result;
}

//& for 13.03.2024
//^ 4
//^ kata's link:

//my variant
//^ 4
//^ kata's link:

//my variant
//^ 4
//^ kata's link:

//my variant
