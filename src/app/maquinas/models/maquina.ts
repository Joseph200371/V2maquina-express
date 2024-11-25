import { Producto } from "./producto";

export class Maquina{
    id!:number;
    alias_name!:string ;
    descripcion!:string ;
    modelo!:string;
    marca!:string;
    estado!:string;
    url!:string;
    tipo!:string;
    colaMQ!: string;
    productos!: Array<Producto>;
    direccion!:string;
    longitud!:string;
    latitud!:string;
}