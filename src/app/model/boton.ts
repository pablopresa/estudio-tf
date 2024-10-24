export class Boton {
    titulo: string;
    valor: string;
    tipo: string;
    orden: number;
    rol: string;
    activo: boolean;

    constructor(titulo: string, valor: string, tipo: string, orden: number, activo: boolean, permiso: string) {
        this.titulo = titulo;
        this.valor = valor;
        this.tipo = tipo;
        this.orden = orden;
        this.activo = activo;
        this.rol = permiso;
    }
}