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

function mostrarProductos () {

const listado = platos.reduce((acc, el) => acc +=`${el.id} - ${el.nombre} - precio: $${el.precio} \n`,"");

const seleccion = parseInt(prompt("ingrese el numero de plato que decea, ingrese no para salir" + listado));

const buscarPlato = platos.find(platos => platos.id === seleccion);

    console.log("buscarPlato");

    carrito.push(buscarPlato);

    console.log(carrito);

const continuarCompra = confirm("decea continuar eligiendo?");

if(continuarCompra){

    mostrarPlatos();

}else{
    calcularTotal();
    }

}
function calcularTotal(){

const total = carrito.reduce((acc,el)=> acc += el.precio * el.unidades, 0);
    alert(`el total a pagar por su compra es: ${total}`);
}
const filtroPorPrecio = platos.filter(alimento=>
    alimento.precio < 2000);

    console.log(filtroPorPrecio);

const filtrarPorNombre1 = new Array ["]laFortaleza","Especial","1900", "Rubi", "Hamburgueza","jugoDeZanahoria", "Ensalada palta queso tomate y cebolla", "1800",
"pastelDeBrocoliConQueso", "1500", "PolloSalteadoConBrocoliYSoja", "1800","SalmonConArrozCebollaYPepino", "2000", "Frutas" ,"1200"]();

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
