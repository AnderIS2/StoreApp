import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FiltertiendaPipe implements PipeTransform {

  transform(value: any, filterValue: string): any {
    if (filterValue === null || filterValue === '' || filterValue === undefined) {
      return value;
    }
    if (!Array.isArray(value)) {
      return value;
    }

    const filteredItems = value.filter(item => {
      return (
        item.username.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.firstLastName.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.email.toLowerCase().includes(filterValue.toLowerCase())
      );
    });

    return filteredItems;
  }

}
