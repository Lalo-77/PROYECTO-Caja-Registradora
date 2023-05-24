alert ("Bienvenido al restaurant La Fortaleza");

const platos = [
    
    {
        id:1,
        nombre:"La_Fortaleza",
        precio: 2000,
        descripcion:"",
        categoria: "plato principal"
        },
    {
        id:2,
        nombre:"Especial",
        precio: 2300,
        descripcion:"",
        categoria:"entrada"
        },
    {
        id:3,
        nombre:"Rubi",
        precio:2500,
        descripcion:"",
        categoria:"platoPrincipal",
        },
    {
        id:4,
        nombre:"Hamburgueza",
        precio:2500,
        descripcion:"",
        categoria:"entrada",
        },
    {
        id:5,
        nombre:"Jugo de Zanahoria",
        precio:1200,
        descripcion:"",
        categoria:"postre",
        },
    {
        id:6,
        nombre:"Ensalada_de_Palta_Y_Queso_Tomate_Y_Cebolla",
        precio:1800,
        descripcion:"",
        categoria:"PlatoPrincioal",
        },
    {
        id:7,
        nombre:"Pastel_De_Brocoli_Con_Queso",
        precio:1700,
        descripcion:"",
        categoria:"entrada",
        },
    {
        id:8,
        nombre:"Pollo salteado con brocoli y soja",
        precio:1600,
        descripcion:"",
        categoria:"platoPrincipal",
        },
    {
        id:9,
        nombre:"Salmon_Con_Arroz_Zebolla_Y_Pepino",
        precio:1700,
        descripcion:"",
        categoria:"platoPrincipal",
        },
    {
        id:10,
        nombre:"Frutas",
        precio:1800,
        descripcion:"",
        categoria:"postre",
        },
    ]
    
    const carrito = [];

    function mostrarProductos () {
    const listado = platos.reduce((acc, el) => acc +=`${el.id} - ${el.nombre} - precio: $${el.precio} \n`,"");

const seleccionarPlatos = parseiInt(prompt("ingrese el numero de plato que decea, ingrese no para salir\n" + listado)).toLowerCase();

let precio = 0;

productoElegido = platos.find(p => p.id === seleccionarPlatos);

console.log("productoElegido"),

carrito.push(productoElegido);
console.log(carrito);

const continuarCompra = confirm("decea continuar?")

if(continuarCompra){
    mostrarProductos();
}else{
    alert("el total de su comopra es ");
    }
}

while (seleccionarPlatos !== " "){

    alert("Debes ingresar una opcion");

const plato = (prompt("Ingrese el plato deseado: la fortaleza, especial, rubi, hamburguesa, jugo de zanahoria, ensalada de palta queso tomate y cebolla pastel de brocoli con queso pollo salteado con brocoli y soja, salmon con arroz cebolla y pepino, frutas")).toLowerCase();

if (plato1 == "la fortaleza"|| plato2=="especial"|| plato3 == "rubi"|| plato4 == "hamburguesa"|| plato5 == "jugo de zanahoria"|| plato6 == "ensalada de palta y queso tomate y cebolla"|| plato7 == "pastel de brocoli con queso" || plato8 == "pollo salteado con brocoli y soja" || plato9 == "Salmon con arroz cebolla y pepino" || plato10 == "frutas"){
    
    switch (plato){
    case "laFortaleza":
    precio = 1500; 
    plato = "la fortaleza";
    break;
    case "especial":
    precio = 1900;
    plato  = "especial";
    break;
    case "rubi":
    precio = 1600;
    plato  = "rubi";
    break;
    case "hamburguesa": 
    precio = 1200;
    plato = "hamburguesa";
    break;
    case "jugo de Zanahoria": 
    precio  = 600;
    plato  = "jugo de zanahoria";
    break; 
    case "ensalada de palta queso tomate y cebolla":
    precio = 1500;
    plato = "ensalada de palta queso tomate y cebolla";
    break;
    case "pastel de brocoli con queso": 
    precio = 1400;
    plato = "pastel de brocoli con queso"
    break;
    case "pollo salteado con brocoli y soja": 
    precio = 1200;
    plato = "pollo salteado con brocoli y soja";
    break;
    case "salmon con arroz cebolla y pepino": 
    precio = 800;   
    plato = "salmon con arroz cebolla y pepino";
    break; 
    case "frutas":
    precio = 800;
    plato = "frutas"
    break;
    default:
    alert ("El plato no esta disponible");
    }    
alert("Seleccionaste el plato," + "" + plato + "del menu");

let cantidad = parseInt(prompt("cuantos platos del menu quiere llevar?"));
    cantidad = Number(cantidad);

    alert ("seleccionaste la cantidad " + cantidad + "de platos");

} else { (seleccionarPlatos != "si");

    alert("Gracias regrese cuando quiera. lo esperamos!!!");
    }
    seleccionarPlatos = prompt("Deceas elegir un plato mas? Ingrese si para seleccionar algun plato? no para salir").toLowerCase();
}

if (seleccionarPlatos === "si"){
    
    alert("Elige los que quieras");
    
    platos = prompt("Ingrese el nombre de un plato del menu, la fortaleza,especial,rubi,hamburguesa,jugo de zanahoria,ensalada de palta y queso tomate y cebolla,pastel de brocoli con queso,pollo salteado con brocoli y soja,salmon con arroz cebolla y pepino,frutas");

    cantidad = parseInt(prompt("cuantos platos del menu quiere llevar?"));
    cantidad = Number(cantidad);

alert ("seleccionaste la cantidad " + cantidad + "de platos");

}else { (seleccionarPlatos !== "si");
alert("Gracias regrese cuando quiera lo esperamos");
    }

    function Menu(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.ingredientes = ingredientes;
        this.stock= this.stock;
    }
        const plato1 ={
            nombre:"La_Fortaleza",
            precio: 2000,
            };
        const plato2 ={
                nombre:"Especial",
                precio: 2300,
            };
        const plato3 ={
                nombre:"Rubi",
                precio:2500,
            };
        const plato4 ={
                nombre:"Hamburgueza",
                precio:2500,
            }
        const plato5 ={
                nombre:"Jugo de Zanahoria",
                precio:1200,
            }
        const plato6 ={
                nombre:"Ensalada_de_Palta_Y_Queso_Tomate_Y_Cebolla",
                precio:1800,
            }
        const plato7 ={
                nombre:"Pastel_De_Brocoli_Con_Queso",
                precio:1700,
            }
        const plato8 ={
                nombre:"Pollo salteado con brocoli y soja",
                precio:1600,
            }
        const plato9 ={
                nombre:"Salmon_Con_Arroz_Zebolla_Y_Pepino",
                precio:1700,
            }
        const plato10 ={
                nombre:"Frutas",
                precio:1800,
            };

function sumar(la_fortaleza){
    let plato = "la fortaleza";
    return plato;
}
console.log(sumar(la_fortaleza));