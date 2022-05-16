class Producto {
    constructor(articulo,costo,ganancia,venta,cantidad){
        this.articulo = articulo;
        this.costo = costo;
        this.ganancia = ganancia;
        this.venta = venta;
        this.cantidad = cantidad;
    }
}
let productos = []
let formProducto = document.querySelector ('#formProducto')
let botonProductos = document.querySelector('#botonProductos')
let divProductos = document.querySelector ('#divProductos')

formProducto.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("Creaste un nuevo producto")
    let articulo = document.querySelector ("#idArticulo").value
    let costo = document.querySelector ("#idCosto").value
    let ganancia = document.querySelector ("#idGanancia").value
    let venta = document.querySelector ("#idCosto").value * (1+(document.querySelector ("#idGanancia").value)/100)
    let cantidad = document.querySelector ("#idCantidad").value
    document.getElementById('idPrecioventa').innerHTML = venta
    const producto = new Producto (articulo,costo,ganancia,venta,cantidad)
    productos.push(producto)
    console.log(productos)
    formProducto.reset ()
})

botonProductos.addEventListener ('click',() =>{
    productos.forEach((producto,indice) => {
        divProductos.innerHTML += `
        <div class="card text-white bg-primary mb-3" id="producto${indice}" style="max-width: 20rem;">
  <div class="card-header">Productos</div>
  <div class="card-body">
    <h4 class="card-title">Articulo N° ${indice + 1}</h4>
    <p class="card-text">Articulo${producto.articulo}</p>
    <p class="card-text">Precio de costo${producto.costo}</p>
    <p class="card-text">Porcentaje de ganancia %${producto.ganancia}</p>
    <p class="card-text">Precio de venta ${producto.venta}</p>
    <p class="card-text">Cantidad ${producto.cantidad}</p>
  </div>
  `
    }
    )
}
)

if (localStorage.getItem('productos')) {
    productos = localStorage.getItem('productos')
} else {
    localStorage.setItem('productos', json.stringify(productos))
}