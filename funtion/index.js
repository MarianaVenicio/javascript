
//funtion
function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "+": return num1 + num2;
      break;
    case "-": return num1 - num2;
      break;
    case "/": return num1 / num2;
      break;
    case "*": return num1 * num2;
      break;

    default: return " dificil de saber,  refresque la pagina";
      break;
  }
}
let num1 = parseInt(prompt("cantidad de gatos "));
let num2 = parseInt(prompt("cantidad de perros"));
let operacion = prompt("coloque el valor +");
let resultado = calculadora(num1, num2, operacion);
let mensaje = `total de animales en el refugio ${resultado}`;
alert(mensaje);

