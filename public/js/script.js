const btn = document.getElementById('btn');
btn.onclick = function () {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
}



// Variables
const pi = 3.142;
let username = 'monica';
let age = 10;
let present = false;

// Objects
const person = {
    username: 'monica', 
    age: 14,
    present: false,
    child: {
        name: 'Aba',
        friend: {
            name: 'Kwame'
        }
    }
}
console.log(person.username);
person.age = 11;
console.log(person);


// Arrays
const bottle1 = {
    size: 'large',
    color: 'yellow'
  }
  
  const bottle2 = {
    size: 'small',
    color: 'blue'
  }
  
    
  const bottles = [bottle1,bottle2];
  bottles.push(bottle1);
  bottles.push(bottle2)
  bottles;
  
  bottles[0];
  
  const date = new Date();
  date.toString();
  date.getMonth();
  
  
  // If statements
//   const age = 19;
  if (age >= 18){
    'You are true'}
    else{
      'You are false'
    }
  
  // For loop
  for (let i= 0; i <= 5; i++) {
   console.log('We did it!'); 
  }
  

  // Functions
// Defining a function
function login(username, password) {
  // validate the username and password ! means NOT, || means OR 
  if (!username || !password) {
    return 'username or password not provided';
  }
  // verify username and password
 if (username == 'monica' && password == '1234') {
    return 'user is logged in';
 } else {
   return 'invalid username or password'
 }
}
//Invoking a functions 
login('monica',);

// Basic Arithmetic Operations
23/2;
5%2;
// Strings in javascript
// concatenation
const firstname = 'Monica';
const lastname = 'Kokovena';
const middlename = ''
firstname + ' '+ middlename+' ' + lastname;

// Template literal
`${firstname} ${middlename} ${lastname}`;

// String Methods
// Length Method
let fullName = 'Monica Edem Kokovena'
fullName.length


fullName.toUpperCase()
fullName.toLowerCase()
fullName.charAt(7)
fullName.slice(0,6)
// count from 0 and exclusive of the last number/letter selected
fullName.split('')
fullName.replace('Edem','Yemisi')
fullName.indexOf('vena')

// String 
Number('3.243')
parseInt('3.243')
parseFloat('3.243')
let amount = 200000
amount.toString()
console.log(`GHS ${amount}`)



// Write a function that will add a participant to our google classroom
const participants = [];
function addParticipant(email) {
  // check if email was provided
  if(!email){
    return 'No email provided';
  }
  // check if email is valid
  if (!email.includes('@')){
      return 'Invalid email provided';
      }
  // add email to participants
  participants.push(email);
  return 'Participant added';
}

addParticipant('yemisivena@gmail.com');
addParticipant('abela@gmail.com')
participants;
   
// arrays in javascript
// const users =[
//  { username: 'monicaEdem',
//   password: '1234',
//   email: 'monicaekokovena@gmail.com'},
  
//   { username: 'yemisiVena',
//   password: '5678',
//   email: 'abela@gmail.com'
//   }
// ]

// Write a function that will add a participant to our google classroom

// const participants = [];
// function addParticipant(email) {
//   // check if email was provided
//   if (!email) {
//     return "No email provided";
//   }  // check if email is valid
//   if (!email.includes("@")) {
//     return "Invalid email provided";
//   }
//   // add email to participants
//   participants.push(email);
//   return "Participant added";
// }

addParticipant("yemisivena@gmail.com");
addParticipant("abela@gmail.com");
participants;

// arrays in javascript
const users = [
  {
    username: "monicaEdem",
    password: "1234",
    email: "monicaekokovena@gmail.com",
  },

  { username: "yemisiVena", password: "5678", email: "abela@gmail.com" },
];

// Write a function that will take a user with firstname, lastname and return fullname(...means spread)


function fullName(user){
  return {
    ...user, 
    fullName: `${user.firstname} ${user.lastname}`
 
  }
}
const user= {
  firstname: 'Monica',
  lastname: 'Kokovena'
}
fullName(user);

// Array map
  const Users = [
  {firstname:'Monica', lastname:'Kokovena'},
  {firstname:'Valerine', lastname:'Norvinyo'},
  {firstname:'Leah', lastname:'Appiah-Kubi'},
  {firstname:'Abele', lastname:'Okoro'},
   {firstname:'Oko', lastname:'Mensah'}  
]
  // Users.map(fullName);

// Square of numbers
function square(number) {
  return number**2;
  
}
square(2);

const numbers= [2,4,1,3];
numbers.map(square);


//Array filter

function isEven(number) {
   
  return number % 2===0;  
}
isEven(5);
number.filter(isEven)



// Write a function that will allow a user to reset their password

// const user = {
//   email:'yemisivena@gmail.com',
//   password: '1234'
// }

function resetPassword(email, newPassword){
  // check if email and new password was provided
  
  if (!email || !newPassword){
    return 'Email or password not provided';
  }
   // check if provided email is correct
  if (email===user.email){
    // update password with new one
    user.password = newPassword;
    return 'Password reset successful';
  }
  if (email !== user.email){
    return 'Invalid email';
  }

}

user;
resetPassword('monicaekokovena@gmail.com')
resetPassword('yemisivena@gmail.com','0987')
user


// You have been given an array of students with some them marked as absent and others marked as present. Write a function that returns the total number of students present.

const students = [
  {id: 1, present: true},
  {id: 2, present: true},
  {id: 3, present: false},
  {id: 4, present: true},
  {id: 5, present: false},
]

function totalPresent(students){
  // Define a variable to track the total present
  let total =0;
  // Begin a loop
  for(let i = 0; i < students.length;i++){
    // For any iteration if stusent is presnt then increase total present by 1
    if (students[i].present ===true){
        total++;
      }
    }
  // Return the total presnt
  return total;
    
}


totalPresent(students);



// Classes in javascript
class Laptop{
  constructor(brand,color) {
    this.brand = brand;
    this.color = color;
  }
}
const laptop1 = new Laptop( 'Dell','black');
const laptop2 = new Laptop( 'HP','silver');





























            
        






























            
        





            
        









