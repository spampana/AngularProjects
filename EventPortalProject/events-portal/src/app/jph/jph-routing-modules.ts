import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JphPostListComponent } from './jph-post-list/jph-post-list.component'


const jphRoutes: Routes = [
    {
        path: "posts",
        component: JphPostListComponent
    },

];


@NgModule({
    imports: [RouterModule.forChild(jphRoutes)],
    exports: [RouterModule]
})
export class JPHRoutingModule { }
