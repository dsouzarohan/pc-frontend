import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ClassroomDiscussionsComponent} from '../../components/classroom-ui/classroom-discussions/classroom-discussions.component';
import {DiscussionsRoutingModule} from './discussions-routing.module';

@NgModule({
  declarations: [ClassroomDiscussionsComponent],
  imports: [SharedModule, DiscussionsRoutingModule]
})
export class DiscussionsModule {

}
