import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe implements PipeTransform {

  transform(value: any, field: string): any {
    if (!value) {
      return [];
    } else {
      return value.filter(it => {
        return it.ptoDate.includes(field)
      });
    }
  }

}
