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
    return {num:'Given Number = '+number+'\nTotal sum of the Number = '+(evenSum+oddSum),
            even:'\nEven numbers are = '+evenNum+'\nAnd sum of even Number = '+evenSum,
            odd:'\nOdd numbers are = '+oddNum+'\nAnd sum of odd Number = '+oddSum,
            }
}
let array = [1,2,3,4,5,6];
console.log(findEvenOdd(array).num,findEvenOdd(array).even,findEvenOdd(array).odd);