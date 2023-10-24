import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filteredString: string, propName: string): any[]  {
    const result: any = [];
    const searchField: string[] = propName.split(','); 
    if(!value || filteredString === '' || propName === ''){
      return value;
    }
    value.forEach((a:any)=>{
      for(let i: number = 0; i < searchField.length; i++) {
        if(a[searchField[i]].trim().toLowerCase().includes(filteredString.toLowerCase()) 
            && result.indexOf(a) == -1) {
          result.push(a);
        }
      }
    });
    return result;
  }
}
