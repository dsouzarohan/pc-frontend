import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {NotesRoutingModule} from './notes-routing.module';
import {ClassroomNotesComponent} from '../../components/classroom-ui/classroom-notes/classroom-notes.component';
import {FileUploadDialogComponent} from '../../components/dialogs/file-upload-dialog/file-upload-dialog.component';
import {EditorModule} from 'primeng/editor';
import {FileUploadModule} from 'primeng/primeng';
import {NotesCoreComponent} from '../../components/classroom-ui/classroom-notes/notes-core/notes-core.component';
import {UploadCardComponent} from '../../components/classroom-ui/classroom-notes/upload-card/upload-card.component';

@NgModule({
  imports: [SharedModule, NotesRoutingModule, EditorModule, FileUploadModule],
  declarations: [ClassroomNotesComponent, FileUploadDialogComponent, NotesCoreComponent, UploadCardComponent],
  entryComponents: [FileUploadDialogComponent],
  providers: []
})
export class NotesModule {
}
