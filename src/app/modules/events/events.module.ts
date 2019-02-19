import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {FullCalendarModule} from 'primeng/fullcalendar';

@NgModule({
  imports: [SharedModule, FullCalendarModule]
})
export class EventsModule {
}
