alert ("Bienvenido al restaurant La Fortaleza") ;

const platos = ["plato1-La_Fortaleza,plato2-Especial,plato3-Rubi,plato4-Hamburguesa,plato5-Jugo_De_Zanahoria,plato6-Ensalada_de_Palta_Y_Queso_Tomate_Y_Cebolla,plato7-Pastel_De_Brocoli_Con_Queso,plato8-Pollo salteado con brocoli y soja,plato9-Salmon_Con_Arroz_Zebolla_Y_Pepino,plato10-Frutas"];

const seleccionarPlatos = (prompt("ingrese si para seleccionat algun plato"));

while (seleccionarPlatos === " "){

    alert("Debes ingresar una opcion");

seleccionarPlatos =(prompt("Ingrese si para seleccionar algun plato!"));

if (seleccionarPlatos == "si"){
    alert("Estos son los que tenemos para el que elijas");

    platos = prompt("seleccione un plato del menu, plato1-La Fortaleza, plato2-Especial, plato3-Rubi, plato4-Hamburguesa, plato5-Jugo de zanahoria, plato6-Ensalada de palta y queso tomate y cebolla, plato7-Pastel de brocoli con queso, plato8-Pollo salteado con brocoli y soja, plato9-Salmon con arroz cebolla y pepino, plato10-Frutas");

    alert("Seleccionaste el plato, " + "" + platos + "del menu");

let cantidad = parseInt(prompt("cuantos platos del menu quiere llevar?"));

    cantidad = Number(cantidad);

    alert ("seleccionaste la cantidad " + cantidad + "de platos");

} else { (seleccionarPlatos != "si");

    alert("Gracias regrese cuando quiera. lo esperamos!!!");
    }
}
    seleccionarPlatos == (prompt("Deceas elegir un plato mas?"));

if (seleccionarPlatos == "si"){
    
    alert("Elige los que quieras");
    
    platos = prompt("Ingrese el nombre de un plato del menu, plato1-La Fortaleza, plato2-Especial, plato3-Rubi, plato4-Hamburguesa, plato5-Jugo de zanahoria, plato6-Ensalada de palta y queso tomate y cebolla, plato7-Pastel de brocoli con queso, plato8-Pollo salteado con brocoli y soja, plato9-Salmon con arroz cebolla y pepino, plato10-Frutas");

    cantidad = parseInt(prompt("cuantos platos del menu quiere llevar?"));
    cantidad = Number(cantidad);

alert ("seleccionaste la cantidad " + cantidad + "de platos");
    
}else { (seleccionarPlatos !="si");
alert("Gracias regrese cuando quiera lo esperamos");
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

    function Menu(nombre, precio);
        this.nombre = nombre;
        this.precio = precio;
        this.ingrdientes;
        this.stock;


