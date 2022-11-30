//switch
let entrada = prompt("desea adoptar un gato o perro");
while (entrada != "ESC") {
    switch (entrada) {
        case "perro":
        alert("vas a adoptar un perro");
            break;
        case "gato":
        alert("vas a adoptar un gato");
            break;
        default:
        alert("criatura no disponible. Piensa de nuevo, que desea adoptar?");
            break;
    }
    entrada = prompt("desea adoptar gato o perro");


}