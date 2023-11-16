import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, property: string, filterValue: string): any {
    if(property === null|| property === '' || property === undefined || filterValue === null || filterValue === '' || filterValue === undefined) {
      return value;
    }
    if (!Array.isArray(value)) {
      return value;
    }
    const filteredItems = value.filter(item => {
      return item[property].toLowerCase().includes(filterValue.toLowerCase());
    });

    return filteredItems;
  }

}
