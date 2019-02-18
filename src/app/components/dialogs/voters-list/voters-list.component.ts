import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-voters-list',
  templateUrl: './voters-list.component.html',
  styleUrls: ['./voters-list.component.scss']
})
export class VotersListComponent implements OnInit {

  constructor(
    dialogRef: MatDialogRef<VotersListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      upVotes: any[],
      downVotes: any[]
    }
  ) {
  }

  ngOnInit() {
  }

}
