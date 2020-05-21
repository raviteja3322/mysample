import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], order = '', column: string = ''): any[] {

    return _.orderBy(value, [column], [order]);
    
  }

}
