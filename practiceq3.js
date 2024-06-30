// 1)). print all even number form 0  to 100;;
console.log("even numbers : ");

for(let num =0;num<=100;num++){
    if(num%2===0){
        console.log(num);
        num++;
    }
}


// 2)) create a game where you start with any random game number ask the user to keep gussing the game number until the user niter correct value

let secretNumber = 46;
let userNumber = prompt("guuess and enter the game number :");
while(secretNumber != userNumber){
  userNumber =  prompt("you enter a wrong number guuess again :");

}
console.log("Congratulations,you enter the correct number!!!!!");
