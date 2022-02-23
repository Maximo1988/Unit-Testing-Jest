// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const {fromEuroToDollar,fromYenToPound,fromDollarToYen} = require("./app.js")


expect(fromEuroToDollar(3.5)).toBe(4.2);
expect(fromDollarToYen(3.0)).toBe(319.75);
expect(fromYenToPound(4.0)).toBe(409.28000000000003);
})