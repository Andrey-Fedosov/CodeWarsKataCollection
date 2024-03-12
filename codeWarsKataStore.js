//& 07.03.2024

// ^  Write a function that takes the full name of a person, and returns the initials, separated by dots ('.')

//* my variant
function initials(n) {
  let [lastName] = n.split(" ").slice(-1);
  lastName = lastName[0].toUpperCase() + lastName.slice(1);
  let initials = n
    .split(" ")
    .slice(0, -1)
    .map((el) => el.slice(0, 1).toUpperCase())
    .join(".");
  return `${initials}.${lastName}`;
}

//* other user variant
//!  should add some other user variants

//& 08.03.2024

//^ 1. to split a given string into different strings of equal size (note size of strings is passed to the method)

//* my variant

let splitInParts = function (s, partLength) {
  if (s.length < partLength) {
    return s;
  } else {
    let splittedSArray = [];
    for (let i = 0; i < s.length; i += partLength) {
      splittedSArray.push(s.slice(i, i + partLength));
    }
    return splittedSArray.join(" ");
  }
};

//* other user variant
//!  should add some other user variants

//^ 2.  function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order.

//* my variant
function inAscOrder(arr) {
  const stringInOrder = [...arr].sort((a, b) => a - b).join("");
  return arr.join("") === stringInOrder;
}

//* other user variant
//!  should add some other user variants

//^3 you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it

//* my variant
function dontGiveMeFive(start, end) {
  let rowFromStartToEnd = [];
  for (let i = start; i <= end; i++) {
    rowFromStartToEnd.push(i.toString());
  }

  return rowFromStartToEnd.filter((el) => !el.includes("5")).length;
}

//* other user variant
//!  should add some other user variants

//^ 3. Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

//* my variant

function eachCons(array, n) {
  let result = [];
  for (let i = 0; i <= array.length - n; i++) {
    result.push(array.slice(i, i + n));
  }
  return result;
}

//* other user variant
//!  should add some other user variants

//^ 4 the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.

//* my variant
function toFreud(string) {
  if (string.length === 0) {
    return "";
  } else {
    let arrayOfSex = [];
    const amountsForRepeat = string.split(" ").length;
    for (let i = 0; i < amountsForRepeat; i++) {
      arrayOfSex.push("sex");
    }

    return arrayOfSex.join(" ");
  }
}

//* other user variants
const toFreud = (str) =>
  str === ""
    ? ""
    : str
        .split(" ")
        .map((e) => "sex")
        .join(" ");

//^ 5 calculate the volume of a cuboid with three values: the length, width and height of the cuboid.

//* my variant
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

//^ 7

//* my variant
function magicSum(numbers) {
  const arrayToReduce = numbers
    .filter((el) => el % 2 !== 0)
    .map((el) => el.toString())
    .filter((el) => el.includes("3"));
  return arrayToReduce.length === 0
    ? 0
    : arrayToReduce.length === 1
    ? Number(arrayToReduce[0])
    : arrayToReduce.reduce((a, c) => Number(c) + Number(a));
}

//* other user variant
//!  should add some other user variants

//^ 8

//* my variant
function howMuchWater(water, load, clothes) {
  if (clothes > 2 * load) {
    return "Too much clothes";
  }
  if (clothes < load) {
    return "Not enough clothes";
  }
  return +(water * 1.1 ** (clothes - load)).toFixed(2);
}

//* other user variant
//!  should add some other user variants

//^ 6 write a function that adds the username property to each object in the input array:  detailed task: https://www.codewars.com/kata/582a53ed261c2af9d200018c/train/javascript

//* my variant
function addUsername(list) {
  const createUserName = (user) => {
    let userName = `${user.firstName.toLowerCase()}${user.lastName[0].toLowerCase()}${
      new Date().getFullYear() - user.age
    }`;
    return userName;
  };

  list.map((el) => (el.username = createUserName(el)));

  return list;
}

//* other user variant
//!  should add some other user variants

//& 09.03.2024
//^ 1 Your task is to return an array where each object will have a new property 'greeting' with the following string value: Hi < firstName here >, what do you like the most about < language here >?

//* my variant

function greetDevelopers(list) {
  list.map(
    (el) =>
      (el.greeting = `Hi ${el.firstName}, what do you like the most about ${el.language}?`)
  );
  console.log(list);
  return list;
}

//* other user variant
//!  should add some other user variants

//^ 2 Your task is to return the number of JavaScript developers coming from Europe.

function countDevelopers(list) {
  return list.filter(
    (el) => el.continent === "Europe" && el.language === "JavaScript"
  ).length;
}

//* other user variant
//!  should add some other user variants

//^ 3

//* my variant
function findOddNames(list) {
  const checkForOdd = (name) => {
    return (
      name
        .split("")
        .map((el) => el.charCodeAt(0))
        .reduce((a, c) => a + c) % 2
    );
  };

  list.map((el) => (el.charCodeOddIndicator = checkForOdd(el.firstName)));

  const filteredList = list.filter((el) => el.charCodeOddIndicator === 1);
  filteredList.map((el) => delete el.charCodeOddIndicator);

  return filteredList;
}

//* other user variant
//!  should add some other user variants

//& 10.03.2024
//^ 1 Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

//* my variant
function countLanguages(list) {
  let result = {};

  for (let el of list) {
    let keyArray = Object.keys(result);
    if (keyArray.includes(el.language) === false) {
      result[el.language] = 1;
    } else {
      result[el.language]++;
    }
  }

  return result;
}

//* other user variant
//!  should add some other user variants

//^ 2
//* my variant
function likes(names) {
  if (names.length === 0) {
    return `no one likes this`;
  }
  if (names.length === 1) {
    return `${[...names]} likes this`;
  }
  if (names.length === 2) {
    let nameSection = names.join(" and ");
    return `${nameSection} like this`;
  }
  if (names.length === 3) {
    let firstName = names[0];
    nameSection = names.slice(1).join(" and ");
    return `${firstName}, ${nameSection} like this`;
  }
  if (names.length >= 4) {
    nameSection = names.slice(0, 2).join(", ");
    return `${nameSection} and ${names.length - 2} other like this`;
  }
}

//* other user variant
//!  should add some other user variants

//---------------------------------------
//& 09.03.2024
//^ 6

//* my variant

//* other user variant
function rowSumOddNumbers(n) {
	var start = n * n - n + 1;
  var result = 0;  
  
  for(i = 0; i < n; i++)
  {
    result =  result + (start + (i*2));
  }
    
   return result;
//!  should add some other user variants
