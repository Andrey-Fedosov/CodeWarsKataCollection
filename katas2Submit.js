// here  completed katas(but aren't been uploaded)

//& for 11.03.2024
//^ 1 write a function that returns the average age of developers
//^ katas link: https://www.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript

//my variant
function getAverageAge(list) {
  return Math.round(
    list.map((el) => el.age).reduce((a, c) => a + c) / list.length
  );
}

//* --------------------------------------------------------------------

//^ 2 write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins
//^ kata's link: https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript

//my variant
function findAdmin(list, lang) {
  return list.filter((el) => el.language === lang && el.githubAdmin === "yes");
}

//* --------------------------------------------------------------------

//^ 3 Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form.
//^ kata's link: https://www.codewars.com/kata/583952fbc23341c7180002fd/train/javascript

//my variant
function orderFood(list) {
  let mealType = {};

  for (let el of list) {
    let mealArray = Object.keys(mealType);
    if (mealArray.includes(el.meal) === false) {
      mealType[el.meal] = 1;
    } else {
      mealType[el.meal]++;
    }
  }
  return mealType;
}

//^ 4 your function should return true as there is at least one developer from the required 5 geographic zones.
//^ kata's link: https://www.codewars.com/kata/58291fea7ff3f640980000f9/train/javascript

//my variant
function allContinents(list) {
  let eachContinentMembersCount = {};

  for (let el of list) {
    let continentsList = Object.keys(eachContinentMembersCount);

    if (continentsList.includes(el.continent) === false) {
      eachContinentMembersCount[el.continent] = 1;
    } else {
      eachContinentMembersCount[el.continent]++;
    }
  }

  return Object.keys(eachContinentMembersCount).length === 5;
}

//^ 5 Your task is to return either: true if all developers in the list code in the same language; or false otherwise.
//^ kata's link: https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript

//my variant
function isSameLanguage(list) {
  const firstMemeberLanguage = list[0].language;
  return list
    .map((el) => el.language)
    .every((el) => el === firstMemeberLanguage);
}

//^ 6
//^ kata's link:

//my variant

//^ 7
//^ kata's link:

//my variant

//^ 8
//^ kata's link:

//my variant
