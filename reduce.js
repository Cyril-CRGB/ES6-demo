/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */

// Summing an array of numbers:
// "acc" = accumulator
// "curr" = currentValue
const nums = [0, 1, 2, 3 , 4];
let sum = nums.reduce((acc, curr) => {
    // will execute 4 times, because no starting point has been given, 
    // therefore the first accumulator is here the first element of the array
    console.log(
        "Accumulator:", acc,
        "Current VAlue:", curr,
        "Total:", acc + curr,
    );
    return acc + curr;
},10// starting point must be given here
);
console.log(sum);

// simplified version of the above function
let sum2 = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum2);

const teamMembers = [
    {
         name: 'Andrew',
         profession: 'Developer',
         yrsexp: 5,
     },
     {
         name: 'Ariel',
         profession: 'Developer',
         yrsexp: 7,
     },
     {
         name: 'Michael',
         profession: 'Designer',
         yrsexp: 1,
     },
     {
        name: 'Kelly',
        profession: 'Designer',
        yrsexp: 3,
    },
    {
        name: 'Mark',
        profession: 'Manager',
        yrsexp: 10,
    },
  ];

  // Totaling a specific object property
  let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsexp, 0);
  console.log(totalExperience);

  // Grouping by a property, and totaling it too
  // {Developer: 12, Designer: 4} <-- this is what we want!
  let expByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr. yrsexp;
    } else {
        acc[key] += curr.yrsexp;
    }
    return acc;
  }, {}); 

  console.log(expByProfession);