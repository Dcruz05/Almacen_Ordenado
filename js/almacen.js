class Inventario{
    constructor(){
        this.productos=new Array();
    }

    agregar(producto){
        this.productos.push(producto);
    }

    eliminar(codigo){
        if(this.buscar(codigo)==null){
            return false;
        }
        else{
            for(let i=0;i<this.productos.length;i++){
                if(codigo==this.productos[i].codigo){
                    for(let j=i;j<this.productos.length-1;j++){
                        this.productos[j]=this.productos[j+1];
                    }
                }
            }
            this.productos.pop()
            return true;
        }
    }

    buscar(codigo){
        for(let i=0;i<this.productos.length;i++){
            if(this.productos[i].codigo===codigo){
                return this.productos[i];
            }
        }
        return null;
    }

    mostrarBusqueda(resultado){
        if(resultado!=null){
            return `${resultado.infoHtml()}`
        }else{
            return `El producto que desea buscar no existe`;
        }
    }

    listado(){
        let lista = ""
        if(this.productos.length>0){
            for(let i=0;i<this.productos.length;i++){
                lista += this.productos[i].infoHtml();
            }
        }else{
            lista = "<p>No hay productos registrados</p>"
        }
        
        return lista
    }

    listadoInverso(){
        let lista = ""
        if(this.productos.length>0){
            for(let i=this.productos.length-1;i>=0;i--){
                lista += this.productos[i].infoHtml();
            }
        }else{
            lista = "<p>No hay productos registrados</p>"
        }
        return lista
    }
}
