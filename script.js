// Hey kiddo  
let howOld = function(age) {
    if (age >= 18) {
        return true;
    }else{
        return false;
    }
};

const greetings = function (age) {
    const sayHi = howOld(age);
    if(sayHi == true){
        return console.log("Hello there");
    } else {
       return console.log ("Hey kiddo");
    }
};

console.log (greetings(45));



// VAT calculations - Exercise 1
const inclVAT = function(baseprice) {
    valueAddedTaxes = baseprice * 0.21;
    return valueAddedTaxes;
};

const priceIncludingVAT = function(baseprice){
    const includingVAT = inclVAT(baseprice) + baseprice;
    return includingVAT;
};

console.log(priceIncludingVAT(900));   

//VAT calculations - Exercise 2
const addedVAT = function(priceInclVat){
    basePrice = priceInclVat / 1.21;
    VAT = priceInclVat - basePrice;
    return [basePrice, VAT];
};

console.log(addedVAT(100));

