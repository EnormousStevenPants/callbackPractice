/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  //Code Here for first
  function first(arr, callback) {
    return callback(arr[0]);
  }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

  function last(names, fnc) {
    return fnc(names[names.length - 1]);
  }

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply

function multiply(a, b, fnc){
  var answer = a * b;

  return fnc(answer);
}

  // var multiply = function(a, b, fnc) {
  //   return fnc(a, b){
  //     return a * b;
  //   };
  // };

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains

function contains(names, firstName, fnc) {
  var value;
  for (var i = 0; i < names.length; i++) {
    if (names[i] == firstName) {
      return fnc(true);
    } else {
      return fnc(false);
    }
  }
}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});
//
//
//
//
//
// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//
//
//
//
//     //Code Here for uniq
//
    function uniq(names, fnc) {
      for (var i = 0; i < names.length; i++){
        for (var j = names.length - 1; j > i; j--){
          if (names[j] === names[i]) {
            names.splice(j, 1);
          }
        }
      }
      return fnc(names);
    }

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});
//
//
//
//
//
// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//
//
//
//
//     //Code Here for each

function each(names, fnc){

  for (var i = 0; i < names.length; i++){
    fnc(names[i], i);
  }
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item);
});
//
//
//
//
//
// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//
//
//
//
//
//  //code here for getUserById
//
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

function getUserById(users, val, fnc){

  for (var i = 0; i < users.length; i++){
    for (var prop in users[i]){
      if (users[i][prop] === val){
        return fnc(users[i]);
      }
    }
  }
}

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
