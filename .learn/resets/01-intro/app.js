// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = (a) => {
    return a * 1.2;
}
const fromDollarToYen = (b) => {
    return (b / 1.2 )* 127.9;
}
const fromYenToPound = (c) => {
    return (c * 127.9)* 0.8;
}

console.log(fromEuroToDollar(3.5))
console.log(fromDollarToYen(3.0))
console.log(fromYenToPound(4.0))

console.log ("Hello World")
const sum = (a, b) => {
    return a + b;
}
console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar };

