// 15. Largest of Two Numbers
// Create a function that takes two numbers and returns the greater number.


function largestNumber(num1 , num2){
    if(num1>num2){
        return `${num1} is Larger than ${num2}`;
    }
    else{
        return `${num2} is Larger than ${num1}`
    }
}
console.log(largestNumber(7,2));