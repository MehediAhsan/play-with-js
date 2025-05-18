/*

Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes.

*/

function hourToMinute(hour){
   const minutes = hour*60;
   return minutes;
}

let hours=5;
let getMinutes = hourToMinute(hours);
console.log(hours,'hours =',getMinutes,'minutes');