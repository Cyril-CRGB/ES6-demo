/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
// First, not using destructuring
let ages = [30, 26, 27];
let john = ages[0];
let mary = ages[1];
let joe = ages[2];
console.log(john, mary, joe);
// Second, using destructuring
let ages2 = [45, 15, 89];
let [oscar, nicolas, rozenn] = ages2;
console.log(oscar, nicolas, rozenn);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);
// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdlanguage: "german",
    fourthlanguage: "japanese",
};
let {firstLanguage, thirdlanguage} = languages2;
console.log(firstLanguage, thirdlanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "tomato",
    andrea: "steak",
};
let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);

