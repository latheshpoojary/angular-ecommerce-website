import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],filterString:string,productAtt:string):any[] {
    console.log(filterString,productAtt);
    
    const result :any=[];
    if(!value || filterString==='' || productAtt===''){
      return value;
    }
    value.forEach((item:any)=>{
      if(item[productAtt].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(item);
      }
    });
    return result;
  }

}
