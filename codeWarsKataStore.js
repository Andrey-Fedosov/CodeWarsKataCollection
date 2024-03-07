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
