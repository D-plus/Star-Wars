import { Pipe, PipeTransform } from '@angular/core';
import { AbstractObject } from '../interfaces/abstract-object.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(listToSort: any, field: string, direction: string, valuesType: string = 'string'): AbstractObject[] {
    if (!Array.isArray(listToSort)) {
      return;
    }
    const resultArray = [...listToSort];

    if (valuesType === 'string') {
      return this.sortByString(resultArray, direction, field);
    }

    return this.sortByStringContainsNumber(resultArray, direction, field);
  }

  sortByString(list, direction, field): AbstractObject[] {
    return list.sort((a: string, b: string) => {
      if (a[field] === b[field]) {
        return 0;
      } else if (direction === 'asc') {
        return a[field] > b[field] ? 1 : -1;
      }

      return a[field] < b[field] ? 1 : -1;
    });
  }

  sortByStringContainsNumber(list, direction, field): AbstractObject[] {
    return list.sort((a: string, b: string) => {
      if (this.parseInt(a) === this.parseInt(b)) {
        return 0;
      } else if (direction === 'asc') {
        return this.parseInt(a[field]) > this.parseInt(b[field]) ? 1 : -1;
      }

      return this.parseInt(a[field]) < this.parseInt(b[field]) ? 1 : -1;
    });
  }

  private parseInt(stringContainsNumber: string): number {
    return parseInt(stringContainsNumber, 10);
  }
}
