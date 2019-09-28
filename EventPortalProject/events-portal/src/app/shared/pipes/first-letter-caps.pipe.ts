import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterCaps'
})
export class FirstLetterCapsPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    console.log("value from pipe----"+value)
    if (!value) {
      return value;
    }
    return value.replace(/\w\s*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }

}
