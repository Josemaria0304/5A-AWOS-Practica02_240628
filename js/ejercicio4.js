//Estilizacion de la barra de puebras en el DevTools en el navegador

console.log("%cEjercicio 04: Objetos", style_console);

console.warn("1. Propiedades de un objeto");

let propertyID = 1;
let propertyName = "Departamento en el Centro de Ciudad de México"
let propertyDescription = "Hermoso departamento de 3 recámaras, 1 baño y 1 cajón de estacionamiento ubicado en el centro de Ciudad de México, Ubicado en un tercer piso."
let propertyType = "D" // H: House D: Deparment T:Terrain L: locale W: WareHouse C:Cabain
let propertyIsSaleable = false; //se vende?
let propertyIsRentable = true; //se renta?
let propertyPrice = 7500.00
let propertyLat = 19.4283813
let propertyLong = -99.1020177
let propertyToken = Symbol("D-12558-CDMX-MX-S");
let propertyIncludedService = ["Agua","Luz","Gas"];
let propertyImage = null
let propertyOwnerID = 32412
let propertyStatus = "Good"

console.log(`Datos de la propiedad en Renta:
    Nombre: ${propertyName}
    Descripcion: ${propertyDescription}
    Tipo: ${propertyType}
    Precio: ${propertyPrice}
    Ubicacion: Latitud: ${propertyLat} Longitud: ${propertyLong}
    Servicios incluidos: ${propertyIncludedService}
    En renta: ${propertyIsRentable}
    En venta: ${propertyIsSaleable}
    Token: ${propertyToken.description}
    Dueño: ${propertyOwnerID}
    Imagen: ${propertyImage}
    `)

    //2. Declaraciones de un objeto
    /* Para declarar un objeto en JS es necesario asignarle un nombre y todas sus propiedades iran entre {} y separadas por coma en el orden clave : valor*/
    console.warn("2. Declaraciones de un objeto")
    property1 = {
        id: 1,
        name: "Departamento en el Centro de Ciudad de México",
        description: "Hermoso departamento de 3 recámaras, 1 baño y 1 cajón de estacionamiento ubicado en el centro de Ciudad de México, Ubicado en un tercer piso.",
        price:7500.00,
        isRentable: true,
        isSaleable: false,
        includedServices: ["Agua","Luz","Gas"],
        lat: 19.4283813,
        long: -99.1020177,
        Status: "Good",
        Token: Symbol("D-12558-CDMX-MX-S"),
        OwnerID: 32412
    }