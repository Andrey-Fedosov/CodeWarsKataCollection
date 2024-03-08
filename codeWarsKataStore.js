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

//---------------------------------------
//^ 6

//* my variant

//* other user variant
//!  should add some other user variants
