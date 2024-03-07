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
