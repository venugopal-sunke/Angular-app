import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateformat',
    standalone: false
})
export class DateformatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
