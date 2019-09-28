import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component'
import { EventsDetailsComponent } from './events-details/events-details.component';
import { RegisterEventComponent } from './register-event/register-event.component';

const eventsRoutes: Routes = [
    {
        path: "",
        component: EventsListComponent
    },
    {
        path:"new",
        component: RegisterEventComponent
    },
    {
        path:":id",
        component: EventsDetailsComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(eventsRoutes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }
