let saldo = 1000; // saldo inicial en la cuenta
let retirada; // cantidad a retirar
const password = "1234"; // contraseña de la cuenta
let intentos = 0; // contador de intentos de inicio de sesión
let ingresoPass;

do {
    ingresoPass = prompt("Ingrese la contraseña");
    intentos++;
    if (ingresoPass !== password && intentos < 3) {
        alert("Contraseña Incorrecta, intente de nuevo");
    } else if (ingresoPass !== password && intentos === 3) {
        alert("Ha superado el número de intentos permitidos, operación cancelada");
    }

} while (ingresoPass !== password && intentos < 3);

// if (ingresoPass === password) {
//     do {
//         retirada = parseInt(prompt("¿Cuánto deseas retirar? (mínimo $100)"));
//         if (isNaN(retirada) || retirada < 100) {
//             alert("La cantidad debe ser un número mayor o igual a $100");
//         } else if (retirada > saldo) {
//             alert("Saldo insuficiente");
//         }
//     } while (isNaN(retirada) || retirada < 100 || retirada > saldo);
//     saldo -= retirada;
//     alert(`Retiraste $${retirada}. Tu nuevo saldo es $${saldo}`);
// }

