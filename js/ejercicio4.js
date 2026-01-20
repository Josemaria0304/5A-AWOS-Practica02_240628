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

//Impresion del objeto en formato tabla
    console.table(property1);

    //3. leyendo las propiedades de un objeto 
/*un objeto es un conjunto de variables que abstraen una 
identidad fisica o conceptual de la que es significativo almacenar informacion 
para el programa o sistema que estemos dearrollando 

para acceder a al as propiedades individuales basat con poner el nombre del objeto un "." y el
nombre de la propiedad*/

console.warn("3. Lectura de las propiedades de un Objeto");

console.log(`El usuario con id: ${property1.ownerID} esta rentando un: ${property1.name},
    cual se ddescribe como: ${property1.description} por un precio de: ${property1.price}, con los servicios inicializados de: ${property1.includedServices}`,
    `Actualmente ${property1.isSaleable ? "esta a la venta":"No esta a la venta"} `);

    console.warn("3. Lectura de las propiedades de un Objeto");

/*console.log(`El usuario con id: ${property1.ownerID} esta rentando un: ${property1.name}
    cual se ddescribe como: ${property1.description} con un costo de: ${property1.price}
    con los servicio incluidos de: ${property1.includedServices}${property1.isSeleable ? ", actualmente esta a la venta" :
        "que por el momento no esta a la venta"}`)*/

    //4. Modificaion de los valores de las propiedades de un objeto

    /* Para modificar los datos de una variable basta con accede a propiedad deseada moficada y asignarla su nuevo a traves del signo*/

    property1.price=8200.00
    property1.isSaleable=true
    property1.includedServices=["Agua", "Luz", "Gas", "Intenet", "Seguridad privada"]


console.log(`El usuario con id: ${property1.ownerID} esta rentando un: ${property1.name},
    cual se ddescribe como: ${property1.description} por un precio de: ${property1.price}, con los servicios inicializados de: ${property1.includedServices}`,
    `Actualmente ${property1.isSaleable ? "esta a la venta":"No esta a la venta"} `);

    //Descripcion de objetos (OBJECT DESTRUCTION)

    /* JavaScript es un lenguaje dinamico que permita que un proyecto previamente definido pueda dar descompuestos en pequeñas nuevas
    partes (variables) para que estas puedan ser manipuladas segun sean las necesidades*/

    user1=
    {
       UserID:32412,
       Name: "Jose Maria",
       email: "cas110607@gmail.com",
       createAT: Date("2015/01/18 23:15:42"),
       lastLogin: Date("2026/01/28 00:00:05"),
       userRol: ("Vendendor"),
       totalPropertys: 17,
       rating: 9.4
    }

     user2=
    {
       UserID:45456,
       Name: "Obed Vargas Luna",
       email: "ob78598@gmail.com",
       createAT: Date("2015/02/19 12:15:42"),
       lastLogin: Date("2026/01/28 23:15:15"),
       userRol: ("Comprador"),
       rating: 8.9,
       lastOperation: "Buscando Departamento para Renta"
    }

    user3=
    {
       UserID:78412,
       Name: "Angel Saul",
       email: "saul127@gmail.com",
       createAT: Date("2015/01/18 08:15:00"),
       lastLogin: Date("2026/01/28 12:00:00"),
       userRol: ("Comprador"),
       totalPropertys: 17,
       rating: 9.4
    }

     user4=
    {
       UserID:90456,
       Name: "Johny Neri",
       email: "joohn3458@gmail.com",
       createAT: new Date("2015/02/19 12:15:42"),
       lastLogin: new Date("2026/01/28 15:00:15"),
       userRol: ("Comprador"),
       rating: 8.9,
       lastOperation: "Buscando Departamento para Renta"
    }

    console.warn("5. Desestructuracion de objetos")

const buyerBid = (seller, buyer, property, price_bidded) => {

    const { UserID: sellerID, email: sellerEmail } = seller;
    const { UserID: buyerID, email: buyerEmail } = buyer;
    const { price, id } = property;
    fecha_oferta = new Date();
        
        
        
        console.log(`El usuario: ${buyerID} está realizando una oferta al usuario: ${sellerID} 
            por la propiedad: ${id} con fecha: ${fecha_oferta}`);

                return {
                buyerID,
                sellerID,
                propertyID: id,
                propertyPrice: price,
                date_bidded: fecha_oferta,
                bid_ocurrate: ((price_bidded / price) * 100).toFixed(2) + "%",

            }
    }


    //test1: El usuario 2 realiza una oferta 7500
    let bid1 = buyerBid(user1,user2,property1,7500)
    console.log(`La oferta tiene una exactitud de: ${bid1.bid_ocurrate}`)

    //test2: El usuario 3 realiza una oferta 8200
    let bid2 = buyerBid(user1,user3,property1,8200)
    console.log(`La oferta tiene una exactitud de: ${bid2.bid_ocurrate}`)

    //test3: El usuario 4 realiza una oferta 10000
    let bid3 = buyerBid(user1,user4,property1,10000)
    console.log(`La oferta tiene una exactitud de: ${bid3.bid_ocurrate}`)