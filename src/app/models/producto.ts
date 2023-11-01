export class Producto {

    _id?: string;
    producto: string;
    categoria: string;
    descripcion: string;
    precio: number;

    constructor(producto:string, categoria:string, descripcion: string, precio: number){
        this.producto = producto;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.precio = precio;
    }

}