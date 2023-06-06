alert ("Bienvenido al restaurant La Fortaleza");

// cristian nuñez
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

let seleccion = "si"

function mostrarProductos () {
const listado = platos.reduce((acc, el) => acc +=`${el.id} - ${el.nombre} - precio: $${el.precio} \n`,"");

seleccion = prompt("ingrese el numero de plato que decea, ingrese no para salir\n" + listado).toLowerCase();

let precio = 0;
menu = platos

function buscarPlato(){
const id = prompt("Ingrese el numero de id del plato que decea seleccionar").toLowerCase();

let buscarPlato = platos.find(platos => platos.id === id);

    console.log("buscarPlato"),
    buscarPlato();
}
    carrito.push(buscarPlato);

    console.log(carrito);

const continuarCompra = confirm("decea continuar eligiendo?")

if(continuarCompra === "si"){

    mostrarPlatos(buscarPlato)

}else{
    alert(parseInt("el total de su compra es ", precio));
    }
}
while (seleccion === "si"){

    alert (prompt("Decea seleccionar algun plato"));
    alert ("Aqui te mostramos los platos que tenemos disponibles para vos");

console.log(mostrarProductos ()); 

    let plato = (prompt("Ingrese el plato deseado: la fortaleza, especial, rubi, hamburguesa, jugo de zanahoria, ensalada de palta queso tomate y cebolla, pastel de brocoli con queso pollo salteado con brocoli y soja, salmon con arroz cebolla y pepino, frutas")).toLowerCase();

if (menu =="la fortaleza"|| menu =="especial"|| menu =="rubi"|| menu =="hamburguesa"|| menu =="jugo de zanahoria"|| menu =="ensalada de palta y queso tomate y cebolla"|| menu =="pastel de brocoli con queso" || menu =="pollo salteado con brocoli y soja" || menu =="Salmon con arroz cebolla y pepino" || menu =="frutas"){
        
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

let unidades = parseInt(prompt("cuantos platos quiere llevar"))
    carrito.push({platos, unidades, precio})
    console.log(carrito)
} else {
    alert("no tenemos ese plato disponible")
}
    seleccion = (prompt("decea seguir eligiendo?"))

while(seleccion === "no"){
    alert("gracias por la compra, hasta pronto")
    carrito.forEach((carritoFinal) => {
      console.log('plato: ${carritoFinal.plato}, + unidades: ${carritoFinal.unidades}, + total a pagar por plato ${carritoFinal.unidades * carritoFinal.precio}')
    })
break;  
}
}
const total = carrito.reduce((acc,el)=> acc, + el.precio * el.unidades, 0) 
    console.log('el total a pagar por su compra es: ${total}')

const filtroPorPrecio = ArrayAlimento.filter(alimento=>
    alimento.precio < 2000)

const filtrarPorNombre1 = new Array ["]laFortaleza","Especial","1900", "Rubi", "Hamburgueza","jugoDeZanahoria", "Ensalada palta queso tomate y cebolla", "1800",
"pastelDeBrocoliConQueso", "1500", "PolloSalteadoConBrocoliYSoja", "1800","SalmonConArrozCebollaYPepino", "2000", "Frutas" ,"1200"]

    localStorage.setItem('menu1', 'laFortaleza')

    localStorage.setItem('menu2', 'especial')

    localStorage.setItem('menu3', 'rubi')

    localStorage.setItem('menu4', 'hamburguesas')

    localStorage.setItem('menu5', 'jugoDZanahoria')

    localStorage.setItem('menu6', 'EnsaladaDePaltaQuesoTomateceYCebolla')

    localStorage.setItem('menu7', 'polloSalteadoConBrocoliYSoja')

    localStorage.setItem('menu8', 'pollo_salteado_con_brocoli_y_soja')

    localStorage.setItem('menu9', 'salmonConArrozCebollaYPepino')

    localStorage.setItem('menu10', 'frutas')

    function PlatoSelecionado(nombre, precio){
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
    let plato1 = "la fortaleza";
    return acc;
}
    console.log(sumar(la_fortaleza))
    