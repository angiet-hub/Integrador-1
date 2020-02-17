let nombreCliente = "";
const nombreProducto1 = "Leche la Serenisima";
const nombreProducto2 = "Pure de papas";
let precioProducto1 = 150;
let precioProducto2 = 50;
const codigoDescuento = "argentina";
const valorDescuento = 150;
let unidadesProducto1 = "";
let unidadesProducto2 = "";
let productosConfirmados = "";

nombreCliente = prompt(`Bienvenido! Ingrese el nombre de cliente`);

alert(`Los productos del día en promoción son: 
-- ${nombreProducto1} $${precioProducto1}.
-- ${nombreProducto2} $${precioProducto2}. `);

const compraProducto1 = confirm(`Desea llevar ${nombreProducto1}?`);
if (compraProducto1) {
    unidadesProducto1 = prompt("Cuantas unidades desea llevar?");
    precioProducto1 *= unidadesProducto1;
} else {
    precioProducto1 = 0;
}

const compraProducto2 = confirm(`Desea llevar ${nombreProducto2}?`);
if (compraProducto2) {
    unidadesProducto2 = prompt("Cuantas unidades desea llevar?");
    precioProducto2 *= unidadesProducto2;
} else {
    precioProducto2 = 0;
}


if(!compraProducto1 && compraProducto2) {
    productosConfirmados = nombreProducto2;
} else if (compraProducto1 && !compraProducto2) {
    productosConfirmados = nombreProducto1
} else if (compraProducto1 && compraProducto2) {
    productosConfirmados = [nombreProducto1, nombreProducto2];
} else {
    alert('Te esperamos proximamente!')};

let subtotal = precioProducto1 + precioProducto2;

alert(`Los productos seleccionados son :${productosConfirmados}.
El subtotal es de $${subtotal}.`)

const tarjeta = confirm(`Desea abonar con tarjeta de crédito?`);
let cuotas = "";
let valorCuotas = "";

if (tarjeta) {
    cuotas = Number(prompt("En cuantas cuotas desea abonar? 3, 6 o 12."));
    valorCuotas = subtotal / cuotas;

    if (cuotas === 3) {
        subtotal *= 1.05;
        alert(`El total de su pedido es de: ${subtotal}.
        La cantidad de cuotas seleccionadas son ${cuotas} y el valor de cada una es de ${valorCuotas}.`) 
    } else if (cuotas === 6) {
        subtotal *= 1.10;
        alert(`El total de su pedido es de: ${subtotal}.
    La cantidad de cuotas seleccionadas son ${cuotas} y el valor de cada una es de ${valorCuotas}.`)
    } else if (cuotas === 12) {
        subtotal *= 1.15;
        alert(`El total de su pedido es de: ${subtotal}.
        La cantidad de cuotas seleccionadas son ${cuotas} y el valor de cada una es de ${valorCuotas}.`)
    } else {
        alert(`Acerquese a nuestra sucursal para abonar y retirar el pedido. Muchas gracias`);
    }
} else {
        alert(`Acerquese a nuestra sucursal para abonar y retirar el pedido. Muchas gracias`);
    }

let subtotalConDescuento = subtotal - codigoDescuento;


const confirmacionCodigo = confirm("Tiene código de descuento?");
if(confirmacionCodigo) {
    const validacionCodigo = prompt("Por favor ingrese el código");
    if(validacionCodigo === codigoDescuento) {
        subtotalConDescuento = subtotal - valorDescuento;
        valorCuotas = subtotalConDescuento / cuotas;
        alert('Codigo correcto');
        alert(`Los productos seleccionados son :${productosConfirmados}.
        El subtotal de su compra es de: $${subtotal}.
        Descuento aplicado: $${valorDescuento}.
        Total: $${subtotalConDescuento}.
        La cantidad de cuotas seleccionadas son ${cuotas} y el valor de cada una es de ${valorCuotas}.`)
    } else {
        alert('Codigo incorrecto');
        alert(`Los productos seleccionados son :${productosConfirmados}.
        El subtotal de su compra es de: $${subtotal}.
        Total: $${subtotal}.
        La cantidad de cuotas seleccionadas son ${cuotas} y el valor de cada una es de ${valorCuotas}.`)
    }
}

alert(`Muchas gracias ${nombreCliente} por su compra!`);




