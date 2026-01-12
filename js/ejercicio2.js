//Tipos de datos en JavaScript

//personaliza salidas de consola 
const bg = "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
console.log("%c1.- Ejercicio 02: Tipos de Datos ", style_console);


//1. undifined - valor por defeto asignado a variables declaradas
//pero no inicializadas, no es iguala NULL 

console.warn("1.- UNDFINED (No definido)")
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("valores actuales de las variables");
console.log(`usuariologeado = ${usuarioLogeado}`);
console.log(`rolusuario = ${rolUsuario}`);
console.log(`ultimoAcceso = ${ultimoAcceso}`);

/*En JavaScrip existe un metodo typeof() que nos devuelve el tipo de dato de una variable preficamente declarada */

console.log(`usuarioLogeado = ${typeof(usuarioLogeado)}`);
console.log(`rolUsuario = ${typeof(rolUsuario)}`);
console.log(`ultimoAcceso = ${typeof(ultimoAcceso)}`);

//Supnagamos que un usuario denominado marco se ha logeado exitosamente, el valor de la variable debera actualizarse a su username

usuarioLogeado = "marco";

//Pero no solo cambiara su valor, tambien cambiara su tipo
console.log(`El valor de la variable usuarioLogeado es: ${usuarioLogeado} y su nuevo tipo de dato es: ${typeof(usuarioLogeado)}`);

// 2. BOOLEAN (TRUE/FALSE) - verdadero o falso

console.warn("2.- BOOLEAN (TRUE/FALSE) - verdadero o falso")
var hayusuarioLogeado;

/* Supongamos que nuestra app tendra un menu especifico para los usuarios registrados, en el podran visualizar los mensajes o estado de sus publicaciones
de renta o venta de propiedades, a diferencia de un usuario que entra de manera incognita al visualizar las propiedades */
function validacionusariologueado(){
console.log(`El valor de la variable hayusuarioLogeado es: ${hayusuarioLogeado}, que es de tipo: ${typeof(hayusuarioLogeado)}`);

if(hayusuarioLogeado == true){
    
console.log("Dado que se ha logeado un usuario, la app mostrara el menu de usuario");
}else if(hayusuarioLogeado == false){
console.log("Dado que no hay usuario logueado la app no mostrara el menu de usuario");
}else{
    console.log("No procesar este tipo de dato");
}
}
//test1: usuario logeado = true
console.log("test 1")
hayusuarioLogeado = true;
validacionusariologueado();

//test2: usuario logeado = false
console.log("test 2")
hayusuarioLogeado = false;
validacionusariologueado();

//test3: usuario logeado a cualquier otra cosa
console.log("test 3")
hayusuarioLogeado = 532;
validacionusariologueado();

//3. Number (Numericos)
/*Es importante saber que JavaScript  a diferencia de otros lenguajes no diferencia los
datos no tipo numericos, lo que otro lenguajes de programacion lo que un ENTERO(INT), 
FLOTANTE(FLOAT), DECIAMAL(DOUBLE) para el solo son NUMBER */
console.warn("3.- NUMBER (Numericos)")
let userID_Owner = 240628;
let costoPropiedad = 125000.50;
let latitudPS = 28.240508;
let altitudPS =1180;
let longitudPS = -97.952881;

console.log(`Los valores de las variables declaradas para los datos de la propiedad son:
    id del usuario propietario: ${userID_Owner} ),
    Precio de la propiedad: ${costoPropiedad} ),
    Latitud (GPS): ${latitudPS} ),
    Longitud (GPS): ${longitudPS} ),
    Altitud (GPS): ${altitudPS} )`);


    console.log(`Los tipos de las variables declaradas para los datos de la propiedad son:
    id del usuario propietario: ${typeof(userID_Owner) },
    Precio de la propiedad: ${typeof(costoPropiedad) },
    Latitud (GPS): ${typeof(latitudPS) },
    Longitud (GPS): ${typeof(longitudPS) },
    Altitud (GPS): ${typeof(altitudPS) }`);