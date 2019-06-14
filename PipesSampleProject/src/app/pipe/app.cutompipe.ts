import { Pipe, PipeTransform } from '@angular/core';
// class to filter args data based on value. Here the args
// of the record on which pipe is applied
// and value of the data that will be input to the pipe
@Pipe({
    name: 'prodfilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        console.log(JSON.stringify(value) + ' ' + JSON.stringify(args));
        
        let filtervalue = args;
        if (filtervalue) {
            return value.filter(
                product => product.ProductName.toLowerCase().indexOf(filtervalue) != -1);
        } else {
            return value;
        }
    }
}