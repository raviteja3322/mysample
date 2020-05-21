import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], key: string, value: string): any[] {
    if(!items) return [];
    if(!value) return items;
      return items.filter( it => {
          return it[key].toString().toLowerCase().includes(value)
      });
   } 
}