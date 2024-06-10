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
const users =[
 { username: 'monicaEdem',
  password: '1234',
  email: 'monicaekokovena@gmail.com'},
  
  { username: 'yemisiVena',
  password: '5678',
  email: 'abela@gmail.com'
  }
]





