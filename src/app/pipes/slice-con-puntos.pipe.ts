import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceConPuntos',
  standalone: true
})
export class SliceConPuntosPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (!value || typeof value !== 'string') {
      return value;
    }

    if (value.length > limit) {
      return value.substring(0, limit) + '...';
    } else {
      return value;
    }
  }
}
