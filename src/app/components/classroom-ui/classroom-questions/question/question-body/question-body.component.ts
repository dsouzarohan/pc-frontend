import {Component, Input, OnInit} from '@angular/core';
import {Question, QuestionVote} from '../../../../../models/questions.models';
import {QuestionsFacade} from '../../../../../states/questions/questions.facade';
import {AuthFacade} from '../../../../../states/auth/auth.facade';
import {MatDialog} from '@angular/material';
import {VotersListComponent} from '../../../../dialogs/voters-list/voters-list.component';

@Component({
  selector: 'app-question-body',
  templateUrl: './question-body.component.html',
  styleUrls: ['./question-body.component.scss']
})
export class QuestionBodyComponent implements OnInit {
  @Input('question')
  question: Question;

  public userVote: 'U' | 'D' = null;
  public votes: {
    upVotes: QuestionVote[],
    downVotes: QuestionVote[]
  };

  constructor(
    private questionsFacade: QuestionsFacade,
    private authFacade: AuthFacade,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.authFacade.userID$.subscribe(userID => {
      this.question.questionVotes.forEach(questionVote => {
        if (questionVote.voterId === userID) {
          this.userVote = questionVote.voteType;
        }
      });
    });

    this.questionsFacade.questionVotes$(this.question.id).subscribe(votes => {
      this.votes = votes;
    });
  }

  onVoteClick(voteType: 'U' | 'D') {

    if (voteType !== this.userVote) {
      this.userVote = voteType;
    } else {
      this.userVote = null;
    }

    this.questionsFacade._addQuestionVote({
      questionId: this.question.id,
      voteType: voteType
    });
  }

  onCountClick() {
    this.dialog.open(VotersListComponent, {
      data: this.votes,
      height: '400px',
      width: '600px'
    });
  }
}
