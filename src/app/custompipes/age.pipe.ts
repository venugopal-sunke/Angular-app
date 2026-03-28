import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    let currentYear = new Date().getFullYear();
    let previousYear = value.getFullYear();
    let age = currentYear - previousYear;
    return age;
  }

}
