alert ("Bienvenido al restaurant La Fortaleza") ;

let platos= ["n1-La_Fortaleza,n2-Especial,n3-Rubi,n4-Hamburguesa,n5-Jugo_De_Zanahoria,n6-Ensalada_de_Palta_Y_Queso_Tomate_Y_Cebolla,n7-Pastel_De_Brocoli_Con_Queso,n8-Pollo salteado con brocoli y soja,n9-Salmon_Con_Arroz_Zebolla_Y_Pepino,n10-Frutas"];

let seleccionarPlatos = (prompt("Decea seleccionar algun plato?"));

 while(seleccionarPlatos === 'si'){

alert("Estos son los que tenemos para que elijas");

platos = prompt("Ingrese el nombre de un plato\n1-La Fortaleza\n2-Especial\n3-Rubi\n4-Hamburguesa\n5-Jugo de zanahoria\n6-Ensalada de palta y queso tomate y cebolla\n7-Pastel de brocoli con queso\n8-Pollo salteado con brocoli y soja\n9-Salmon con arroz cebolla y pepino\n10-Frutas");
break;
}

let cantidad = parseInt(prompt("cuantos platos quiere llevar?"));
cantidad = Number(cantidad);

seleccionarPlatos == (prompt("quiere elejir otro plato"));

while (seleccionarPlatos === 'si'){

alert("elije el que quieras");

platos = prompt("Ingrese el nombre de un plato\n1-La Fortaleza\n2-Especial\n3-Rubi\n4-Hamburguesa\n5-Jugo de zanahoria\n6-Ensalada de palta y queso tomate y cebolla\n7-Pastel de brocoli con queso\n8-Pollo salteado con brocoli y soja\n9-Salmon con arroz cebolla y pepino\n10-Frutas");

break;
}

cantidad = parseInt(prompt("cuantos platos quiere llevar?"));
cantidad = Number(cantidad);

alert (" seleccionaste la cantidad de platos" + cantidad);

alert("Gracias por venir lo esperamos pronto");


