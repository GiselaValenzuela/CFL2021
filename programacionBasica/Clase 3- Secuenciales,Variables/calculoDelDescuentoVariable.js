let readlineSync = require (`readline-sync`);
let precioProducto = readlineSync.questionInt ("Ingrese el precio del producto");
console.log ("el precio es", precioProducto);
let porcentajeDescuento = readlineSync.questionInt ("Ingrese porcentaje de descuento");
console.log ("porcentajeDescuento es", porcentajeDescuento);
let resultado = precioProducto-(precioProducto*(porcentajeDescuento/100));
console.log ("El precio a pagar es", resultado);