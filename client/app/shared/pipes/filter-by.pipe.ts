import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(list: any[], by: string, term: any): any {
    if (by && term) {
      return list.filter(item => item[by].toLowerCase().includes(term.toLowerCase()));
    } else {
      return list;
    }
  }

}
