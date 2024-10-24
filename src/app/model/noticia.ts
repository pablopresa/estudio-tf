export class Noticia {
  titulo: string;
  descripcion: string;
  urlImagen: string;
  fecha: Date;
  fechaString: string;

  constructor(titulo: string, descripcion: string, urlImagen: string, fecha: Date, fechaString: string) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.urlImagen = urlImagen;
    this.fecha = fecha;
    this.fechaString = fechaString;
  }
}