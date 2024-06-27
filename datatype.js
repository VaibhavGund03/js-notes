//  data type js

// number,sting,undefine,null,bigint,symbol.

// primitive  data number

let salary = 43000;  // number data type
console.log(salary);

let fullName = "vaibhav gund"; // string data type
console.log(fullName);

isFollow = true;     // boolean data type
console.log(isFollow);

let x;          // undefine data type
console.log(x);

 x = null;
 console.log(x);    // null data type or  object

 // x = bigint("1234");
//  console.log(x); // bigint data type

let y = Symbol("hello");  // Symbol data type
console.log(y);

  // non primitive data type.
  // object = arrays,function.

  // create a object 
  // OBJECT IS collection of different variable


  const student = {
    fullName:"om kanawade",
    age : 19,
    sgpa : 9.0,
    isPass:true,
  };
  // this is a student object
  console.log(student.age);
  // or 
  console.log(student);

  // how to update values

  student["age"] = student["age"]+1;

  student["sgpa"] = student["sgpa"]+0.2;



  













