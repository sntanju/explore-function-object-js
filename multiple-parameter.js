function addTwoNumbers(number1, number2){
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}

var firstNumber = 35;
var secondNumber = 47;
var result =  addTwoNumbers(firstNumber, secondNumber);
console.log('result value: ', result);

// multiple function 
function multiplyTwoNumbers(num1, num2){
var result = num1 * num2;
return result;
}

var total = multiplyTwoNumbers(5, 100);
console.log('total after multiplication', total);

// minus function 
function minusTwoNumbers(new1, new2){
    console.log(new1, new2);
    var answer = new1 - new2;
    return answer;
}
var firstNew = 47;
var secondNew = 35;
var ans = minusTwoNumbers(firstNew, secondNew);
console.log('difference of two number:', ans);

// divition function 
function divideTwoNumber(n1, n2){
    var value = n1 / n2;
    return value;
}
var divition = divideTwoNumber(100, 10);
console.log('result after divition', divition);
