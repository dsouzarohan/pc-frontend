import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassroomNotesComponent} from '../../components/classroom-ui/classroom-notes/classroom-notes.component';

const notesRoutes: Routes = [
  {
    path: '',
    component: ClassroomNotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(notesRoutes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {
}
