let myValues = ["Stone","Papper","Scissor"];
const bot = (Math.floor((Math.random()*3)));
const human = (Math.floor((Math.random()*3)));
// console.log(bot);
// console.log(human);
console.log("Bot=",myValues[bot]);
console.log("Human=",myValues[human]);
   if (bot===human){
    console.log("TIE")
   }
   else if(bot===0 && human === 1){
    console.log("Human win");
   }
   else if (bot===1 && human ===2){
    console.log("Human win");
   }
   else if (bot===2 && human ===0){
    console.log("Human win");
   }
   else if (bot===0 && human ===2){
    console.log("Bot win");
   }
   else if (bot===2 && human ===1){
    console.log("Bot win");
   }
   else if (bot===1 && human ===0){
    console.log("Bot win");
   }