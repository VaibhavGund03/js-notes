// loops are use to execute a piece of code again and again

/* ======== for loop =========


for(let i=1;i<=5;i++){
console.log("javascript")
}

*/

for(let i =1; i<=5;i++){
    console.log("vaibhav gund");
}


//=======2========

let sum =0;
for(let i = 1;i<=10;i++){
    sum = sum+i;

}
console.log("sum =",sum);

//======== infinite loop ==========
/// a loop that never end do not use

// =========while loop ============
/*while loop

while(   )
{

}
*/
let a =12;
while(a<=20){
    console.log("a = ",a);
    a++;
}

/// ===== do while loop =====

let v = 20;
do{
    console.log("vaibhav");
    v++;
}while(v<=21);

// === for of loop ===
/* for(let val of StrVar){
 do some work
} */
let str = " i am vaibhav";// use to iterator--> character.
for(let i of str){
    console.log("i = ",i);
}

//======FOR IN LOOP ===========
/*for (let key in objVar){

do some work
} */

let std = {
    name: "vaibhav",
    age:19,
    sgpa:8.3,
    isPass: true,
};
for(let i in std){
   // console.log(i);

   console.log("key = ",i,"values = ",std[i]);
}

// it is only return a keys value for ex== name,age,sgpa,isPass etc






