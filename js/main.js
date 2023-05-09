alert ("Bienvenido al restaurant La Fortaleza") ;

let platos= ["n1-La_Fortaleza,n2-Especial,n3-Rubi,n4-Hamburguesa,n5-Jugo_De_Zanahoria,n6-Ensalada_de_Palta_Y_Queso_Tomate_Y_Cebolla,n7-Pastel_De_Brocoli_Con_Queso,n8-Pollo salteado con brocoli y soja,n9-Salmon_Con_Arroz_Zebolla_Y_Pepino,n10-Frutas"]

let seleccion = prompt(" Ingrese si decea seleccionar uno de nuestros platos ");
while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no");
    seleccion = prompt("decea seleccionar algo si o no");
}
if(seleccion == "si"){
    alert("A continuacion le mostramos nuestro menu de platos");
    
    platos = prompt("Ingrese el nombre de un plato\n1-La Fortaleza\n2-Especial\n3-Rubi\n4-Hamburguesa\n5-Jugo de zanahoria\n6-Ensalada de palta y queso tomate y cebolla\n7-Pastel de brocoli con queso\n8-Pollo salteado con brocoli y soja\n9-Salmon con arroz cebolla y pepino\n10-Frutas");
    
}
let cantidad = parseInt(prompt("cuantos platos quiere llevar?"));
cantidad = Number(cantidad);
alert(prompt("decea seguir eligiendo?"));

    for (let elegido = 1; elegido <= 10; elegido++){

        let respuesta = parceInt(prompt ("platos"));

        if (respuesta != "0"){
            respuesta = (" platos < 1 and platos >= 10");
        alert("Seleccionaste ", respuesta,"platos del menu");
        }else{
            respuesta = "";
            console.log("No has seleccionado cuantos platos quieres")
        }
    }
        alert("regrese pronto, lo vamos a atender mejor");
        alert("Bueno, le agradecemos por su amabilidad; regrese pronto!!!")
        alert("Selecciono el plato " );

    while(seleccion === "no"){
        
        alert("gracias por la compra, hasta pronto");
        
    break;  
}
