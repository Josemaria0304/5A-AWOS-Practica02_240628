/* estabilizacion de la barra de pruebas en el devtools en el navegador 
*/
console.log("%cEjercico 03: Funciones", style_console);

//Funciones Nombradas
/* 
    1. funciones proceduales, vacias, sin valor de retorno y sin parametros de entrada
*/

function saludar () {
    console.log("bienvenidos al sistema de bienes raices");
}

console.warn("1. funciones sin valor de retorno, sin parametros");
saludar();

/* 
    2. funciones procedurales sin valor de retorn, peri si recie parametros
    es decir datos de entrada
*/

function saludar_usuario(username, gender){
    if(gender == "H")
        console.log(`Bienvenido, ${username} al sistema de bienes raices`)
    
    else if(gender == "M")
        console.log(`Bienvenida, ${username} al sistema de bienes raices`)
    
    else
        console.log(`Bienvenid@, ${username} al sistema de bienes raices`)
}

console.warn("2. funciones sin valor de retorno, con parametros de entrada");
saludar_usuario("Jose Maria", "H");
console.log(`---------------------------------------------------------------------------------------`)
saludar_usuario("Patricia", "M");
console.log(`---------------------------------------------------------------------------------------`)
saludar_usuario("Guadalupe", null);

//3. Funciones que retornan un dato, pero que no reciben parametros

function fechaActual(){
    const fecha = new Date();
    const dia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const fechaformatoMX = `${dia[fecha.getDay()]} , ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`;
      return fechaformatoMX;
}

console.log("3.Funciones que retorna un valor, pero tiene parametros");
let hoy = fechaActual();
console.log(`Bienvenidos al sistema de bienes raices, hoy es: ${hoy}`);
/*Imprimiendo el valor de dato es:*/
console.log(fechaActual);
console.log(typeof (fechaActual));

//4. Funciones que retornan un valor y que reciben parametro de entrada

function Login(username, password){
    let uservalidation = false;
 if(username === "admin" && password == "admin123"){
    uservalidation = true;
    console.log("Bienvenido usuarion admin");
}
else if(username === "admin" && password != "admin123"){
    uservalidation = false;
console.log("Lo sentimos verifique su contraseña");
}else if (username != "admin" && password == "admin123"){

   console.log("El nombre de usuario es incorrecto");

}else if (username != "admin" && password != "admin123"){

   console.log("Porfavor verifica el nombre del usuario y la contraseña");

}
return uservalidation;
}

console.warn("4. Funciones que retornan un dato, pero tambien reciben parametros de entrada");
var loginstatus;
// test1 - usuario y contraseña correctos
console.log(`Test 1 - Usuario: admin, Contraseña: admin123`);
loginstatus = Login("admin", "admin123");
console.log(`${loginstatus ?"El usuario se ha logeado correctamente" : "Hubo un error en el login del usuario admin"}`); 

// test2 - usuario incorrecto y contraseña 
console.log(`Test 2 - Usuario: administrador, Contraseña: admin123`);
loginstatus = Login("administrador", "admin123");
console.log(`${loginstatus ?"El usuario se ha logeado correctamente" : "Hubo un error en el login del usuario admin"}`); 

// test3 - usuario y contraseña incorrecta
console.log(`Test 3 - Usuario: admin, Contraseña: admin12345`);
loginstatus = Login("admin", "admin12345");
console.log(`${loginstatus ?"El usuario se ha logeado correctamente" : "Hubo un error en el login del usuario admin"}`); 

//test4 - usuario y contraseña incorrectos
console.log(`Test 4 - Usuario: administrador, Contraseña: admin12345`);
loginstatus = Login("administrador", "admin12345");
console.log(`${loginstatus ?"El usuario se ha logeado correctamente" : "Hubo un error en el login del usuario admin"}`);

//Funciones ANONIMAS, FUNCIONES FLECHA (ARROW), FUNCIONES LAMBDA
/*A diferencia de las funciones nombradas este tipo de funciones no suelen ser reutilizados
en el codigo solo se ejecutan en una sola vez, dando velocidad, individalidad y privacidad
a los datos utilizados en el proceso*/

//5. Funcion anonima, sin parametros
isNewUser = function(){
    const hoy = new Date();
    return(
lastLogin.getFullYear() === hoy.getFullYear() &&
lastLogin.getMonth() === hoy.getMonth() &&
lastLogin.getDate() === hoy.getDate()
    );
}
console.warn("5. Funcion anonima, sin parametros");

console.log("Test 1 - Fecha de ultimo acceso igual a la fecha actual");
console.log(`La fecha del ultimo acceso es: ${lastLogin}`);
console.log (`El usuario login es: ${isNewUser() ? "Nuevo Usuario" : "Usuario Antiguo"}`);

console.log(`---------------------------------------------------------------------------------------`);
console.log("Test 2 - Fecha de ultimo acceso es diferente a la fecha actual");
lastLogin= new Date("2025/12/31");
console.log(`La fecha del ultimo acceso es: ${lastLogin}`);
console.log (`El usuario login es: ${isNewUser() ? "Nuevo Usuario" : "Usuario Antiguo"}`);
