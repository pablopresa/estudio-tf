export class Boton {
    titulo: string;
    valor: string;
    tipo: string;
    orden: number;
    activo: boolean;

    constructor(titulo: string, valor: string, tipo: string, orden: number, activo: boolean) {
        this.titulo = titulo;
        this.valor = valor;
        this.tipo = tipo;
        this.orden = orden;
        this.activo = activo;
    }
}