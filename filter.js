/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */

// Simple filtering
const people = [
    {
        name: "Michael",
        age: 23,
    },
    {
        name: "Lianna",
        age: 16,
    },
    {
        name: "Paul",
        age: 18,
    },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const paulArray = people.filter(p => p.name === "Paul");
console.log(paulArray);
const paulObject = people.filter(p => p.name === "Paul")[0];// first element in the array
console.log(paulObject);

// Complex filtering
const students = [
    {
         id: 1,
         name: 'Mark',
         profession: 'Developer',
         skills: [
            {name:'JavaScript', yrexp: 1},
            {name:'html', yrexp: 5},
            {name:'CSS', yrexp:3},
        ]
     },
     {
         id: 2,
         name: 'Ariel',
         profession: 'Developer',
         skills: [
            {name:'JavaScript', yrexp: 0},
            {name:'html', yrexp: 4},
            {name:'CSS', yrexp: 2},
        ]
     },
     {
         id: 3,
         name: 'Jason',
         profession: 'Designer',
         skills: [
            {name:'JavaScript', yrexp: 1},
            {name:'html', yrexp: 1},
            {name:'CSS', yrexp: 5},
        ]
     },
 ];

 const hasStrokingSls.filter(student =>{
    let strongSkills = student.skills.filter(skill => skill.yrexp >=5);
    return strongSkills.length > 0;
 };
  

  const candidates = student });
  console.log(candidates);
