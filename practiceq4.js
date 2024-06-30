// Q1)). prompt the user to enter their full name.generate a username for them based on the input start username with @ follwed by their full name and ending with the fullname length.

// ex - user name = vaibhavgund user name should be "@vaibhavgund11";

let fullName = prompt("enter the name without any space :- ");
console.log(fullName);

let userName ="@"+fullName+fullName.length;
console.log(userName);
