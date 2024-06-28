//1)). get user to input a number using prompt("enter the number :"). check if the number is a multiple of 5 or not.

// alert("hello good morning");

let number = prompt("enter the number :");
console.log(number);

if(number%5===0){
    console.log(number," is multiple by five");

}else{
    console.log(number,"not multiple by five");
}

/////////////////////////////////////////
//2)). write a code which can give grade to studnet according to their scores.

let score = 345;
let grade;

if(score>90 && score<100){
   grade = "A grade";

}else if(score>70&&score<89){
    grade = "B grade";
}else if(score>60&&score<69){
   
    grade = "C grade";
}else if(score>50&& score<59){
    console.log("D grade");
    grade = "D grade";
}else if (score=0&&score<49){
    grade = "Fail  try again!!!";
}else{

    console.log("please inter the valid marks");

}
