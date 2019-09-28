import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { FirstLetterCapsPipe } from './pipes/first-letter-caps.pipe';



@NgModule({
  declarations: [FilterByPipe,FirstLetterCapsPipe],
  imports: [
    CommonModule
  ],
  exports:[
    FilterByPipe,FirstLetterCapsPipe
  ]
})
export class SharedModule { }
