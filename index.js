let user1 = {
    user: "admin",
    password: "admin",
    balance: 100,
};

let user2 = {
    user: "admin2",
    password: "admin2",
    balance: 200,
};

let user3 = {
    user: "admin3",
    password: "admin3",
    balance: 300,
};

let cuentas = [user1, user2, user3];
let loggedUser = {};


//función que me sirve para loguearme e ingresar a mi cuenta
function Login() {
    event.preventDefault();
    let userFromHtml = document.getElementById("username").value;
    let passwordFromHtml = document.getElementById("password").value;

    for (let i = 0; i < cuentas.length; i++) {
        if (userFromHtml === cuentas[i].user && passwordFromHtml === cuentas[i].password) {
            loggedUser = cuentas[i];
            alert("Bienvenido");
        }
    }
}


//funcion que me permite ver el saldo en mi cuenta
function viewBalance() {
    event.preventDefault();
    let balance = loggedUser.balance;
    let showBalance = document.getElementById("displayBalance");

    //para mostrar el saldo en el navegador
    showBalance.innerHTML = balance !== undefined ? "Balance: " + balance : "";
}


//funcion que me permite depositar una cantidad dentro de mi saldo
function depositarSaldo() {
    event.preventDefault();
    let balance = loggedUser.balance;
    let montoDepositar = parseInt(document.getElementById("depositar").value);
    if(montoDepositar < 0) {
        alert("el monto a retirar no puede ser negativo");
        return console.error();
    }
    let saldoDepositado = document.getElementById("displayBalance");

    let balanceLuegoDeposito = balance + montoDepositar;
    // balance = balanceLuegoDeposito

    loggedUser.balance =  balanceLuegoDeposito
    
    if(balanceLuegoDeposito > 990 || balanceLuegoDeposito < 10) {
        alert("el saldo de tu cuenta excede el limite permitido, intente depositando un monto menor");
        return console.error();
    }
    saldoDepositado.innerHTML = balance !== undefined ? "Balance: " + balanceLuegoDeposito : "";

}


//funcion que me permite retirar un monto mi saldo
function retirarSaldo() {
    event.preventDefault();
    let nuevoBalance = loggedUser.balance;
    let montoRetirado = document.getElementById("retirar").value
    if(montoRetirado < 0) {
        alert("el monto a retirar no puede ser negativo")
        return console.error();;
    }
    let mostrarNuevoBalance = document.getElementById("displayBalance");

    let balanceLuegoRetiro = nuevoBalance - montoRetirado;

    loggedUser.balance =  balanceLuegoRetiro
    
    if(balanceLuegoRetiro > 990 || balanceLuegoRetiro < 10) {
        alert("el saldo de tu cuenta no es suficiente, el saldo de tu cuenta no debe ser menor a 10 ni mayor a 990");
        return console.error();
    }
    mostrarNuevoBalance.innerHTML = nuevoBalance !== undefined ? "Balance: " + balanceLuegoRetiro : "";
}




