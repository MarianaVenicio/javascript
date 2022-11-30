var notas = [];
var i;

for (i = 0; i < 3; i++) {
    notas.push(Number(prompt("Ingresa tu nota:" + (i + 1),)));
}

var suma = notas.reduce(function (total, cantidad) {
    return total + cantidad
});

 
var promedio = (suma / (notas.length)).toFixed(1);


var estado;
if (promedio >= 4.0) {
    estado = ("Aprobado");
} else {
    estado = ("Reprobado");
}
