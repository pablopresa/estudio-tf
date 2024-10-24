export class CrearNoticiaDto {
    titulo: string;
    descripcion: string;
    urlImagen: string;
    fecha: Date;

    constructor(titulo: string, descripcion: string, urlImagen: string, fecha: Date) {

        this.titulo = titulo;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
        this.fecha = fecha;
    }
}