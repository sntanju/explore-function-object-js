function bringSingara(taka){
    console.log('for singara',taka);
    console.log('singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var moeny = 90;
var singara = bringSingara(moeny);
console.log('take singara',singara);