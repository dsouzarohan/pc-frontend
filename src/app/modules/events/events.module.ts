import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {ClassroomEventsComponent} from '../../components/classroom-ui/classroom-events/classroom-events.component';
import {EventsCoreComponent} from '../../components/classroom-ui/classroom-events/events-core/events-core.component';
import {EventsRoutingModule} from './events-routing.module';
import {CreateEventDialogComponent} from '../../components/dialogs/create-event-dialog/create-event-dialog.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {EventComponent} from '../../components/dialogs/event/event.component';

@NgModule({
  imports: [
    SharedModule,
    FullCalendarModule,
    EventsRoutingModule,
    NgxMaterialTimepickerModule.forRoot()
  ],
  declarations: [
    ClassroomEventsComponent,
    EventsCoreComponent,
    CreateEventDialogComponent,
    EventComponent
  ],
  entryComponents: [CreateEventDialogComponent, EventComponent]
})
export class EventsModule {
}
