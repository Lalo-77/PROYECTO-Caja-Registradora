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
        categoria:"plato principal",
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
        nombre:"Jugo de zanahoria",
        precio:1200,
        descripcion:"",
        categoria:"postre",
        },
    {
        id:6,
        nombre:"Ensalada de palta queso tomate y cebolla",
        precio:1800,
        descripcion:"",
        categoria:"Plato princioal",
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
        categoria:"plato principal",
        },
    {
        id:9,
        nombre:"Salmon con arroz cebolla y pepino",
        precio:1700,
        descripcion:"",
        categoria:"plato principal",
        },
    {
        id:10,
        nombre:"Frutas",
        precio:1800,
        descripcion:"",
        categoria:"postre",
        },
    ]
const carrito = []

function mostrarPlatos () {

const listado = platos.reduce((acc, el)=>acc +=`${el.id} - ${el.nombre} - precio: $${el.precio} \n`,"0");

const seleccion = parseInt(prompt("ingrese el numero de plato que decea, ingrese no para salir" + listado));

const buscarPlato = platos.find(platos => platos.id === seleccion);

    console.log("buscarPlatos");

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

    mostrarPlatos()
const total = carrito.reduce((acc,el)=> acc += el.precio * el.unidades, 0);

    alert(`el total a pagar por su compra es: ${total}`);
}
const filtroPorPrecio = platos.filter(alimento =>alimento.precio < 2000);
const filtroPorCategoria = platos.filter(alimento =>alimento.categoria ==='plato principal');

    console.log(filtroPorPrecio);

const filtrarPorNombre1 = new Array
(["la Fortaleza","2000","Especial","1900","Rubi","2500","Hamburgueza","2500","jugo de zanahoria","1200","Ensalada palta queso tomate y cebolla","1800",
"pastel de brocoli con queso","1500","Pollo salteado con brocoli y soja","1800","Salmon con arroz cebolla y pepino","2000","Frutas","1200"]);


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

