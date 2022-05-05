const pesoCajonVacio = 0.8;
const gananciaFinal = 1.4;
const gananciaReventa = 1.2;
let pesoCajon  ;
let precioCajon ;
let producto;
let costoKg;
let precioVenta
let id;
const final = (pesoCajon,precioCajon) =>  (precioCajon / (pesoCajon - pesoCajonVacio) * gananciaFinal);
const reventa = (pesoCajon,precioCajon) =>  (precioCajon / (pesoCajon - pesoCajonVacio) * gananciaReventa);
class productos{
    constructor(id, producto, pesoCajon, precioCajon, precioReventa, precioVenta){
        this.id = id;
        this.producto = producto
        this.pesoCajon = pesoCajon
        this.precioCajon = precioCajon
        this.precioReventa = precioReventa = reventa
        this.precioVenta = precioVenta = final

    }
}
const productosGuardados= [];

do {
    productosGuardados.push (new productos())
    id = prompt ("ingrese id del producto")
    producto = prompt ("ingrese nombre del producto")
    tipoCliente = prompt ("ingrese tipo de cliente");

    pesoCajon = parseFloat(prompt ("ingrese peso total del cajon"));
    precioCajon = parseFloat(prompt ("ingrese el costo del cajon"));
    
    if ( isNaN (pesoCajon) || isNaN (precioCajon) ){
        alert ("ingrese un valor valido");
    }
} while( isNaN(pesoCajon) || isNaN(precioCajon) )
 switch (tipoCliente) {
     case "final":
         alert (`el precio del kg de ${producto}  es $ ${final(pesoCajon, precioCajon)}`);
         break
    case "reventa":
            alert (`el precio del kg de ${producto}  es $ ${reventa(pesoCajon, precioCajon)}`);
            break
             default:
                alert ("ingrese un tipo valido de cliente");
             
                break    
        

 }


console.log (tipoCliente);
console.log(precioVenta);
console.log(productos)