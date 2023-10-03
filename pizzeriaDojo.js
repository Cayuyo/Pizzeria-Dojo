var sandwich = {
    pan: "masa madre",
    proteína: "asado",
    queso: "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
};

console.log(sandwich);

function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}

var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);


function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    return {
        tipoCorteza: tipoCorteza,
        tipoSalsa: tipoSalsa,
        quesos: quesos,
        salsas: salsas
    };
}

var pizzaChicago = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);

var pizzaLanzadaAMano = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);

var pizzaAlCayuyo1 = pizzaOven("delgada", "barbacoa", ["mozzarella", "cheddar"], ["pollo a la parrilla", "cebolla morada"]);
var pizzaMonoEspacial = pizzaOven("pan", "alfredo", ["mozzarella", "parmesano"], ["espinacas", "tomate cherry", "bacon"]);

console.log("Pizza estilo Chicago:", pizzaChicago);
console.log("Pizza lanzada a mano:", pizzaLanzadaAMano);
console.log("Pizza al Cayuyo:", pizzaAlCayuyo1);
console.log("Pizza mono espacial:", pizzaMonoEspacial);
