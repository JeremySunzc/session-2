function greatNum(num1,num2){
    if (num1 > num2){
        return num1} ;

    return num2
};

num1  = prompt("Enter a number");
num2  = prompt("Enter another number");
result = greatNum(num1,num2)

console.log(`The greater number of ${num1} and ${num2} is ${result}`)