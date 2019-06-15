import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './app.first.component';
import { SecondComponent } from './app.second.component';

// define route table

const routes: Routes = [
    { path: '', component: FirstComponent },
    { path: 'second', component: SecondComponent }
];


// this module is defining the RouterMoudule.forChild()
// to make sure that the module will be lazy loaded 
@NgModule({
    declarations: [FirstComponent, SecondComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [],
    providers: [],
})
export class LazyModule { }