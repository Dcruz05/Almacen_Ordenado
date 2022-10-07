const almacen = new Inventario();


//Boton para agregar Producto
const btnAgregar =document.getElementById("btnAgregar");
btnAgregar.addEventListener("click",(e)=>{
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const cantidad = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;
    if (codigo=="") {
        document.getElementById("listado").innerHTML=`No se agrego el producto, falta el codigo`
    }else{
        const producto = new Producto(parseInt(codigo), nombre, cantidad, precio);
        respuesta = almacen.agregar(producto)
        if(respuesta==true){
            document.getElementById("listado").innerHTML=`Se agrego el producto`
        }
        else if(respuesta==false){
            document.getElementById("listado").innerHTML =`No se puede agregar un producto con codigo repetido`;
        }
    }


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
        document.getElementById("listado").innerHTML =`Producto eliminado`
    }else document.getElementById("listado").innerHTML =`El producto que desea eliminar no existe`
});

const btnBuscar = document.getElementById("btnBuscar")
btnBuscar.addEventListener("click", (e) => {
    const producto = almacen.buscar(document.getElementById("schCodigo").value)
    document.getElementById("listado").innerHTML = `${almacen.mostrarBusqueda(producto)}`
})

