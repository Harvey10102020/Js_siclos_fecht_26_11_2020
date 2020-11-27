let numero = 1;

//DO

// do {


//     console.log(numero);
// }

//WHILE

while (numero < 10) {
    numero++;

    if (numero > 3) {

        console.log(numero);

    }

}

//LISTAS

lista_datos = [];
lista_datos["dato1"] = "mi dato 1";
lista_datos["dato2"] = "mi dato 2";

lista_direcciones = [];
lista_direcciones["Direcion1"] = "Calle 1 2 3";
lista_direcciones["Direccion2"] = "Calle 3 4 5";

let lista_meses = [];
lista_meses["Enero"] = lista_datos;
lista_meses["Febrero"] = "02-02-2020";
lista_meses["Marzo"] = "23-10-2020";
lista_meses["Abril"] = lista_direcciones;

console.log(lista_meses);

//FOR IN

for (meses in lista_meses) {

    if (typeof(lista_meses[meses] === "object")) {

        console.log(lista_meses[meses]);

    }


}


//FOR OF

for (meses of lista_meses) {

    if (typeof(lista_meses[meses] === "object")) {

        console.log(lista_meses[meses]);

    }


}