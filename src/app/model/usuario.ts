export class Usuario {

    nombre: string;
    apellido: string;
    usuario: string;
    rol: string;

    constructor(nombre: string, apellido: string, usuario: string, rol: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.rol = rol;
    }
}