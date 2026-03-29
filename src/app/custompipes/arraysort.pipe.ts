import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arraysort',
    standalone: false
})
export class ArraysortPipe implements PipeTransform {

  transform(value: any, arg: string,): any {
    if(arg == 'ascending'){
      value.sort((a: number,b: number)=> {
         return a-b;
      });
    }else{
      value.sort((a: number,b: number)=> {
        return b-a;
      });
    }
    return value;
  }

}
