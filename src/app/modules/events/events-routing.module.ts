import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsCoreComponent} from '../../components/classroom-ui/classroom-events/events-core/events-core.component';
import {ClassroomEventsComponent} from '../../components/classroom-ui/classroom-events/classroom-events.component';

const eventsRoutes: Routes = [
  {
    component: EventsCoreComponent,
    path: '',
    children: [
      {
        component: ClassroomEventsComponent,
        path: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(eventsRoutes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {
}
