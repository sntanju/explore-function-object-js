var skyColor = 'white';

var phones = ['iphone', 'showmi', 'samsang', 'lg', 'htc'];
phones[3] = 'walton';

//check oppo not exists in an array
if(phones.indexOf('oppo') == -1){
    console.log('oppo is missing');
}

//if lg is avaialble
if(phones.indexOf('lg') != -1){
    console.log('lg is available');
}

//loop
var num = 0;
while(num <= 10){
    i++;
}

for(var i = 0; i < phones.length; i++){

}

// function 
function addThreeNumbers(num1, num2, num3){
    var total = num1 + num2 + num3;
    return total;
}
addThreeNumbers(87, 41, 56);

//object

var microphone = {
    brand: 'blue yeti',
    price: 120,
    color: black
};