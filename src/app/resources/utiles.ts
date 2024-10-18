import { Mensaje } from "../model/mensaje";

export class Utiles {

    public static obtenerMensajes(clave: string, mensajes: Mensaje[]): string[] {
        return mensajes.filter(x => x.clave.includes(clave)).map(x => x.valor);
    }

    public static ordenar(data: any[]): any[] {
        return data.sort((a: any, b: any) => {
          if (typeof a.orden === 'string' && typeof b.orden === 'string') {
            return a.orden.localeCompare(b.orden);
          }
          else if (typeof a.orden === 'number' && typeof b.orden === 'number') {
            return a.orden - b.orden;
          }
          else {
            console.error('Queriendo comparar dos variables de diferente tipo o que no son numéricas o string. a:' + (typeof a.orden) + ', b:' + (typeof b.orden));
            return;
          }
        });
      }
    
}