alert ("Bienvenido al restaurant La Fortaleza");

const platos = [
    
    {
        id:1,
        nombre:"La fortaleza",
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
        categoria:"platorPrincipal",
        },
    {
        id:4,
        nombre:"Hamburguesa",
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
        nombre:"Ensalada de palta queso tomate y cebolla",
        precio:1800,
        descripcion:"",
        categoria:"PlatoPrincioal",
        },
    {
        id:7,
        nombre:"Pastel de brocoli con queso",
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
        nombre:"Salmon con arroz cebolla y pepino",
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

    const seleccionarPlatos = ("si");

    alert(prompt("Ingrese si, si decea elegir algun plato, si no seleccione no"));

    function mostrarProductos () {
    const listado = platos.reduce((acc, el) => acc +=`${el.id} - ${el.nombre} - precio: $${el.precio} \n`,"");

    seleccionarPlatos = parseiInt(prompt("ingrese el numero de plato que decea, ingrese no para salir\n" + listado)).toLowerCase();

let precio = 0;

let productoElegido = platos.find(p => p.id === seleccionarPlatos);

console.log("productoElegido"),

carrito.push(productoElegido);
console.log(carrito);

const continuarCompra = confirm("decea continuar?")

if(continuarCompra === "si"){

    mostrarProductos(productoElegido)

}else{

    alert("el total de su compra es ", precio);

    }
}
while (seleccionarPlatos !==" ") {

    alert("Debes ingresar una opcion");

let plato = (prompt("Ingrese el plato deseado: la fortaleza, especial, rubi, hamburguesa, jugo de zanahoria, ensalada de palta queso tomate y cebolla pastel de brocoli con queso pollo salteado con brocoli y soja, salmon con arroz cebolla y pepino, frutas")).toLowerCase();


if ("la fortaleza"|| "especial"|| "rubi"|| "hamburguesa"|| "jugo de zanahoria"|| "ensalada de palta y queso tomate y cebolla"|| "pastel de brocoli con queso" || "pollo salteado con brocoli y soja" || "Salmon con arroz cebolla y pepino" || "frutas"){
    
    switch (plato){
    case "la fortaleza":
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

alert("Seleccionaste el plato," + " " + plato + " del menu");

let cantidad = parseInt(prompt("cuantos platos del menu quiere llevar?"));

    cantidad = Number(cantidad);

    alert ("seleccionaste la cantidad " + cantidad + " de platos");

}else{ (seleccionarPlatos !== "si");

    alert("Gracias regrese cuando quiera. lo esperamos!!!");
    }
    seleccionarPlatos === (prompt("Deceas elegir un plato mas?Ingrese si para seleccionar algun plato? no para salir")).toLowerCase();
}
if (seleccionarPlatos === "si"){
    
    alert("Elige los que quieras");
    
    plato = prompt("Ingrese el nombre de un plato del menu", plato1-"la_fortaleza",plato2-"especial",plato3-"rubi",plato4-"hamburguesa",plato5-"jugo de zanahoria",plato6-"ensalada de palta y queso tomate y cebolla",plato7-"pastel de brocoli con queso",plato8-"pollo salteado con brocoli y soja",plato9-"salmon con arroz cebolla y pepino",plato10-frutas );  

    cantidad = parseInt(prompt("cuantos platos del menu quiere llevar?"));
    cantidad = Number(cantidad);

alert ("seleccionaste la cantidad " + cantidad + "de platos");

} else (seleccionarPlatos !==" ");{

alert("Gracias regrese cuando quiera lo esperamos");

    } 
    function PlatoSelec(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.ingredientes = ingredientes;
        this.stock= this.stock;
    
        const plato1 = new plato ("La fortaleza",nombrePlato,
            2000 );
        const plato2 = new plato("Especial", nombrePlato,
            2300);
        const plato3 = new plato("Rubi", nombrePlato, 
        2500);
        const plato4 = new plato("Hamburguesa", nombrePlato,
        2500);
        const plato5 = new plato("Jugo de Zanahoria", nombrePlato,
        1200);
        const plato7 =new plato("Pastel de brocoli con queso",nombrePlato,
        1700);
        const plato8 =new plato("Pollo salteado con brocoli y soja",nombrePlato,
        1600);
        const plato9 = new plato("Salmon con arroz cebolla y pepino",nombrePlato, 
        1700);
        const plato10 = new plato("Frutas",nombrePlato,
        1800);

        this.vender =(cant) => {
        this.stock = this.stock -cant;
        };
        this.mostrar = () => "Producto:" + this.nombre +
        "precio:" + this.precio;
    }
function sumar(la_fortaleza){
    let plato = "la fortaleza";
    return plato;
}
console.log(sumar(la_fortaleza));