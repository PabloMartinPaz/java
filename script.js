const pesocajonvacio = 0.8;
const gananciafinal = 1.4;
const gananciareventa = 1.2;
let pesocajon  ;
let preciocajon ;
let producto;
let costokg;
let precioventa

const final = (pesocajon,preciocajon) =>  (preciocajon / (pesocajon - pesocajonvacio) * gananciafinal);
const reventa = (pesocajon,preciocajon) =>  (preciocajon / (pesocajon - pesocajonvacio) * gananciareventa);


do {
    producto = prompt ("ingrese nombre del producto")
    tipocliente = prompt ("ingrese tipo de cliente");

    pesocajon = parseFloat(prompt ("ingrese peso total del cajon"));
    preciocajon = parseFloat(prompt ("ingrese el costo del cajon"));
    
    if ( isNaN (pesocajon) || isNaN (preciocajon) ){
        alert ("ingrese un valor valido");
    }
} while( isNaN(pesocajon) || isNaN(preciocajon) )
 switch (tipocliente) {
     case "final":
         alert ("el precio del kg de " + producto + " es $" + final(pesocajon,preciocajon));
         break
    case "reventa":
            alert ("el precio del kg de " + producto + " es $" + reventa(pesocajon,preciocajon));
            break
             default:
                alert ("ingrese un tipo valido de cliente");
             
                break    
        

 }

console.log (tipocliente);
console.log(precioventa);
