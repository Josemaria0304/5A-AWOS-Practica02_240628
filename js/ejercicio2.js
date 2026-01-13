//Tipos de datos en JavaScript

//personaliza salidas de consola 
const bg = "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
console.log("%c2.- Ejercicio 02: Tipos de Datos ", style_console);


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

usuarioLogeado = "Jose";

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

    //Los tipos de datos STRING son una palabra, valores cualitativos de las entidades de nuestra, aplicacion, que no tienen
    //un tamaño maximo y que estan conformadas por caracteres alfabeticos, caracteres especiales como acentos, o simobolos de algun otro idioma

    // 4.- STRING (Cadena de Caracteres)

var fullnameOwner = "Jose Maria Castillo Aparicio";
let nameProperty = "     Hermosa Casa en la Playa de Puerto Vallarta       ";
let descriptionProperty = "Casa de 2 pisos, 4 habitaciones, 2 baños completos y estacionamiento para 2 automóviles a orilla del mar.";
var statusProperty = "Disponible";
const typeProperty = "C";
var addressProperty;

/* Los tipos de datos STRING son palabras, valores cualitativos de las entidades de nuestra 
aplicación, que no tienen un tamaño máximo y que están conformadas por carácteres alfabéticos, 
caracteres especiales como acentos o símbolos de algún idioma*/

console.warn("4. STRING (CADENA DE CARÁCTERES, PALABRAS)");
console.log(`El usuario: ${fullnameOwner}, 
    esta vendiendo o rentando: ${nameProperty}
    que consiste en: ${descriptionProperty}
    actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`)
console.log(`Las variables declaradas son del tipo:
        fullnameOwner :   ${typeof(fullnameOwner)}
        nameProperty :   ${typeof(nameProperty)}
        descriptionProperty:  ${typeof(descriptionProperty)}
        statusProperty :   ${typeof(statusProperty)}
        typeProperty :   ${typeof(typeProperty)}`);

// Manipulando Strings, los tipos de datos cualitativos tienen ciertos métodos para manipular su valor
// por mencionar algunos:

// Transformar a MAYÚSCULAS
console.log(`Nombre del propietario ${fullnameOwner.toUpperCase()}`);

//Transformar a minúsculas
console.log(`Descripcion de la propiedad: ${descriptionProperty.toLocaleLowerCase()}`);

//Numero de caracteres 
console.log(`Tipo de propiedad ${typeProperty.length}`);
//subcadena 
console.log(`Nombre del propietario ${fullnameOwner.slice(9, fullnameOwner.length)}`);
//Eliminar espacios en blanco 
console.log(`Nombre de la propiedad ${nameProperty.trim()}`);
//Remplazar caracteres 
console.log(`Descripcion modificada ${descriptionProperty.replace("mar", "rio")}`);
//Remplazar todos los caracteres 
console.log(`Descripcion modificada ${descriptionProperty.toLocaleUpperCase().replaceAll("A", "4")}`);

//5. SIGINT (Entero de Grandes Dimensiones)

/*Este tipo dato permite almacenar numeros exageradamente amplios que usualmente aplicaiones cientificas
avanzadas requieren, esto para no perder presicion en los valores almacenados.*/

const numeroGrande = 123456789;
let numeroGrande2 = 12345678901234567890; 
let numeroGrande3 = 123456789012345678901234567890;
let numeroGrande4 = 1234567890123456789012345678901234567890;

console.warn("5.- SIGINT (Entero de Gran Presicion) ");

console.log(`El valor de numeroGrande es ${numeroGrande} y es soportado por ${typeof(numeroGrande)}`);
console.log(`El valor de numeroGrande2 es ${numeroGrande2} a pesar de ser soportado por: ${typeof(numeroGrande2)} comienza a sufrir problemas de presicion`);
console.log(`El valor de numeroGrande3 es ${numeroGrande3} ya no es soportado por number y adquiere un nuevo tipo siendo: ${typeof(numeroGrande3)}`);
console.log(`El valor de numeroGrande4 es ${numeroGrande4} ya no es soportado por number y adquiere un nuevo tipo siendo: ${typeof(numeroGrande4)}`);

numeroGrande2 = BigInt("12345678901234567890");

console.log(`Si declaramos la variable con BigInt el valor de numeroGrande2 es: ${numeroGrande2} y es soportado por: ${typeof(numeroGrande2)}`);

numeroGrande3 = BigInt("123456789012345678901234567890");
console.log(`Si declaramos la variable con BigInt el valor de numeroGrande3 es: ${numeroGrande3} y es soportado por: ${typeof(numeroGrande3)}`);

numeroGrande4 = BigInt("1234567890123456789012345678901234567890");
console.log(`Si declaramos la variable con BigInt el valor de numeroGrande4 es: ${numeroGrande4} y es soportado por: ${typeof(numeroGrande4)}`);

//6. SYMBOL (Simbolo) - valor unico e inmutable

/*Es un tipo de dato que ademas de tener un tipo, un valor, asocia la ubicacion del espacio en memoria, por lo que
todos los valores asignados a una variable de este tipo siempre seran ÚNICOS*/

console.warn("6.- SYMBOL (Simbolo)");

const numero1 = 4;
const numero2 = 4.0;
const numero3 = "4";
const numero4 = "4.0";
const numero5 = Symbol(4);
const numero6 = Symbol(4.0);
const numero7 = Symbol("4");
const numero8 = Symbol("4.0");

//Valores y tipos de datos
console.log(`Valores y tipos:
    numero1 - valor: ${numero1}, tipo: ${typeof(numero1)}
    numero2 - valor: ${numero2}, tipo: ${typeof(numero2)}
    numero3 - valor: ${numero3}, tipo: ${typeof(numero3)}
    numero4 - valor: ${numero4}, tipo: ${typeof(numero4)}
    numero5 - valor: ${numero5.description}, tipo: ${typeof(numero5)}
    numero6 - valor: ${numero6.description}, tipo: ${typeof(numero6)}
    numero7 - valor: ${numero7.description}, tipo: ${typeof(numero7)}
    numero8 - valor: ${numero8.description}, tipo: ${typeof(numero8)}`);

    //Pruebas Comparartivas
    if(numero1 == numero2){
        console.log("Las variables numero1 y numero2 son iguales en valor.");

    }else{
        console.log("Las variables numero1 y numero2 no son iguales en valor.");
    }

    if(numero1 == numero3){
        console.log("Las variables numero1 y numero3 son iguales en valor.");

    }else{
        console.log("Las variables numero1 y numero3 no son iguales en valor.");
    }

    if(numero1 === numero3){
        console.log("Las variables numero1 y numero3 son iguales en valor y tipo de dato.");

    }else{
        console.log("Las variables numero1 y numero3 no son iguales en valor, ni en tipo de dato.");
    }

    if(numero1 == numero4){
        console.log("Las variables numero1 y numero4 son iguales en valor. ");

    }else{
        console.log("Las variables numero1 y numero4 no son iguales en valor.");
    }

    if(numero1 == numero5){
        console.log("Las variables numero1 y numero5 son iguales en valor y tipo de dato. ");

    }else{
        console.log("Las variables numero1 y numero5 no son iguales en valor, ni en tipo de dato.");
    }

    if(numero5 == numero6){
        console.log("Las variables numero5 y numero6 son iguales en valor y tipo de dato. ");

    }else{
        console.log("Las variables numero5 y numero6 no son iguales en valor, ni en tipo de dato.");
    }

//7. NULL (NULO)
/*El tipo de dato es nulo es similar a undefined, con la variacion de que hay un consentimiento del usuario o del
sistema a que esta variable intencionalmente fue inicailizada con este valor*/

var isPremiumUser;
var isNewUser;
let todayDate = new Date();
var lastLogin = todayDate;

console.warn("7.- NULL (NULO)");
console.log(`El usuario: ${usuarioLogeado} tipo de dato: ${typeof(usuarioLogeado)}
             Fecha ultimo login: ${todayDate} tiopo de dato: ${typeof(lastLogin)}
             Es nuevo usuario: ${isNewUser} tipo de dato: ${typeof(isNewUser)}
             Es usuario premium: ${isPremiumUser} tipo de dato: ${typeof(isPremiumUser)}`);
             
console.log("Datos de la validacion del usuario");
//Validacion del usuario

if(todayDate == lastLogin){
    isNewUser=true;
}else{
    isNewUser=false;
}
//Como es un nuevo usuario aun no se ve, ni publica ninguna propiedad por defecto no interesa por el momento que no sea premium hasta que interactue con la plataforma
isPremiumUser = null; 

console.log(`El usuario: ${usuarioLogeado} tipo de dato: ${typeof(usuarioLogeado)}
             Fecha ultimo login: ${todayDate} tiopo de dato: ${typeof(lastLogin)}
             Es nuevo usuario: ${isNewUser} tipo de dato: ${typeof(isNewUser)}
             Es usuario premium: ${isPremiumUser} tipo de dato: ${typeof(isPremiumUser)}`);
             
