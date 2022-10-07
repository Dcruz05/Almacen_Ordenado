class Inventario{
    constructor(){
        this.productos=new Array();
    }

    agregar(producto){
        if(this.productos.length==0){}
        let buscar = this.buscar(producto.codigo)
        if(buscar==null && this.productos.length>=0){
            if(producto.codigo!=""){
                this.productos.push(producto)
                /*for(let i=0;i<this.productos.length;i++){
                    if(this.productos[i].codigo<producto.codigo){   
                        this.productos[i+1]=producto;
                    }
                }*/
                return true
            }else{
                return null
            }
        }else if(buscar!=null){
            return false;
        }

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
        let inicio = 0;
        let fin = (this.productos.length) - 1;   
        let resultado = null;
        let encontrado = false;
        let mitad;
     
        while ((encontrado === false) && (inicio <= fin)) {
            mitad = Math.floor((inicio + fin)/2);
            if (this.productos[mitad].codigo == codigo) {
                encontrado = true;
                resultado = this.productos[mitad];
            } else if (this.productos[mitad].codigo > codigo) {
                fin = mitad - 1;
            } else {
                inicio = mitad + 1;
            }
        }
        return resultado;
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