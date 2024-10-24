import { Mensaje } from "../model/mensaje";

export class Utiles {

    public static obtenerMensajes(clave: string, mensajes: Mensaje[]): string[] {
        return mensajes.filter(x => x.clave.includes(clave)).map(x => x.valor);
    }

    public static ordenarAscendente(data: any[], campo: string) {
        return Utiles.ordenar(data, campo);
    }

    public static ordenarDescendente(data: any[], campo: string) {
        return Utiles.ordenar(data, campo, 'desc');
    }

    private static ordenar(data: any[], campo: string, orden?: string): any[] {

        const descendente = orden && orden == 'desc';

        return data.sort((a: any, b: any) => {
            if (typeof a[campo] === 'string' && typeof b[campo] === 'string') {
                if (descendente) {
                    return b[campo].localeCompare(a[campo]);
                }
                else {
                    return a[campo].localeCompare(b[campo]);
                }
            }
            else if (typeof a[campo] === 'number' && typeof b[campo] === 'number') {
                if (descendente) {
                    return b[campo] - a[campo];
                }
                else {
                    return a[campo] - b[campo];
                }
            }
            else {
                console.error('Queriendo comparar dos variables de diferente tipo o que no son numéricas o string. a:' + (typeof a[campo]) + ', b:' + (typeof b[campo]));
                return;
            }
        });
    }

    public static formatearFecha(fecha: Date): string {
        const dia = ('0' + fecha.getDate()).slice(-2);
        const mes = ('0' + (fecha.getMonth() + 1)).slice(-2);
        const anio = fecha.getFullYear();
        return `${dia}/${mes}/${anio}`;
    }

    public static convertToQueryParams(params: { [key: string]: any }): string {
        const queryParams = new URLSearchParams();
        for (const key in params) {
            if (params.hasOwnProperty(key) && params[key] !== undefined) {
                queryParams.append(key, params[key]);
            }
        }
        return queryParams.toString() ? `?${queryParams.toString()}` : '';
    }

    public static isValidUrl(url: string): boolean {
        // Gracias ChatGPT
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocolo
            '((([a-z\\d][-a-z\\d]*[a-z\\d])?\\.)+[a-z]{2,}|' + // dominio
            'localhost|' + // localhost
            '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // dirección IP
            '\\[?[a-fA-F0-9:*]+\\])' + // dirección IPv6
            '(\\:\\d+)?' + // puerto
            '(\\/[-a-z\\d%_.~+!@#$^&*(){}|\\/?]*)*' + // ruta (se añaden caracteres especiales permitidos)
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // consulta
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragmento
        return !!pattern.test(url);
    }

    
}