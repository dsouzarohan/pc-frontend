import {Component, Input, OnInit} from '@angular/core';
import {Upload} from '../../../../models/notes.models';
import {NotesFacade} from '../../../../states/notes/notes.facade';

@Component({
  selector: 'app-upload-card',
  templateUrl: './upload-card.component.html',
  styleUrls: ['./upload-card.component.scss']
})
export class UploadCardComponent implements OnInit {
  @Input('upload')
  upload: Upload;

  constructor(private notesFacade: NotesFacade) {
  }

  ngOnInit() {
  }

  onDownloadClick(uploadId: string, uploadName: string) {
    this.notesFacade._download(uploadId, uploadName);
  }

  onDownloadFileClick(fileId: number, fileName: string) {
    this.notesFacade._downloadFile(fileId, fileName);
  }
}
