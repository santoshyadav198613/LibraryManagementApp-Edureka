import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: any, symbol: string, mul: number): any {
    console.log(value);
    return symbol + '-' + value * mul;
  }

}
