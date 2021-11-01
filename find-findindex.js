/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, 
and a string. The function should return the first object with the key of username that matches the string passed to the function. 
If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(theArray, username) {
  return theArray.find(function(u){
    return u.username===username;
  });
};

/*
Write a function called `removeUser` which accepts an array of objects, 
each with a key of username, and a string. The function should remove the object from the array. 
If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let newIndex=usersArray.findIndex(function(user){
    return user.username===username;
  });
  if(newIndex===-1) return;
  return usersArray.splice(newIndex,1)[0];//remove the object from the array and [0]-undefined

};