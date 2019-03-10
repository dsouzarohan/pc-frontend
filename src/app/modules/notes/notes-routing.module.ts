import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassroomNotesComponent} from '../../components/classroom-ui/classroom-notes/classroom-notes.component';
import {NotesCoreComponent} from '../../components/classroom-ui/classroom-notes/notes-core/notes-core.component';

const notesRoutes: Routes = [
  {
    path: '',
    component: NotesCoreComponent,
    children: [
      {
        path: '',
        component: ClassroomNotesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(notesRoutes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {
}
