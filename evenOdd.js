/*

Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers.

*/

function findOddSum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 != 0){
            sum+=arr[i];
        }
    }
    return sum;
}

const numbers = [5, 7, 8, 10, 45, 30];
const OddSum = findOddSum(numbers);
console.log('Sum of Odd Number from the array =',OddSum,'\n\n');

/***********
 
 Find even and odd number from an array and summation of even and odd number 
 
************/


function findEvenOdd(number){
    let evenNum = [];
    let evenSum = 0;
    let oddNum = [];
    let oddSum = 0;
    for(let j=0; j<number.length; j++){
        if(number[j]%2 == 0){
            evenNum.push(number[j]);
            evenSum+=number[j];
        }
        else{
            oddNum.push(number[j]);
            oddSum+=number[j];
        }
    }
    console.log('Total sum of the array =',evenSum+oddSum);
    console.log('Even number from the array =',evenNum,'And sum of even number =',evenSum);
    console.log('Odd number from the array =',oddNum,'And sum of odd number =',oddSum);
}
let array = [1,2,3,4,5,6];
console.log('Given array =', array);
findEvenOdd(array);