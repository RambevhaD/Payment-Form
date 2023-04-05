import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnit: string): any {
    if(!value){
      return '';
    }

    switch(targetUnit){
      case 'KM':
        return value*1.60934;
      case 'M':
        return value*1.60934*1000;
      case 'CM':
        return  value*1.60934*1000*1000;
      default:
        throw new Error('Target unit not suppported');  
      
    } 
    
  
  }

}
