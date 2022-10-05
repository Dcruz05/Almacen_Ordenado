const almacen = new Inventario();


//Boton para agregar Producto
const btnAgregar =document.getElementById("btnAgregar");
btnAgregar.addEventListener("click",(e)=>{
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const cantidad = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;
    
    const producto = new Producto(codigo, nombre, cantidad, precio);
    almacen.agregar(producto);
    document.getElementById("listado").innerHTML =``;

    e.preventDefault();
})

//Boton para mostrar listado normal de productos
const btnMostrar = document.getElementById("btnMostrar")
btnMostrar.addEventListener("click", (e) => {
    document.getElementById("listado").innerHTML =`${almacen.listado()}`
    e.preventDefault();
});

//Boton para mostrar listado invertido de productos
const btnMostrarInvertido = document.getElementById("btnMostrarInvertido")
btnMostrarInvertido.addEventListener("click", (e) => {
    document.getElementById("listado").innerHTML =`${almacen.listadoInverso()}`
    e.preventDefault();
});

//Boton para eliminar un registro por codigo
const btnEliminar = document.getElementById("btneliminar")
btnEliminar.addEventListener("click", (e) => {
    if(almacen.eliminar(document.getElementById("dltCodigo").value)==true){
        alert("El Producto se elimino con exito")
    }else alert("El producto que desea eliminar no existe");
    document.getElementById("listado").innerHTML =``

});

const btnBuscar = document.getElementById("btnBuscar")
btnBuscar.addEventListener("click", (e) => {
    const producto = almacen.buscar(document.getElementById("schCodigo").value)
    document.getElementById("listado").innerHTML = `${almacen.mostrarBusqueda(producto)}`
})