import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, radioValue: string) {

    return data.filter(
      (v: { detail: string; }) => v.detail.toLowerCase().indexOf(radioValue.toLowerCase()) > -1 );
  }

}
 