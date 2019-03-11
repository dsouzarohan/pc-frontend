import {Component, Input, OnInit} from '@angular/core';
import {Answer, AnswerVote} from '../../../../../models/questions.models';
import {QuestionsFacade} from '../../../../../states/questions/questions.facade';
import {AuthFacade} from '../../../../../states/auth/auth.facade';
import {VotersListComponent} from '../../../../dialogs/voters-list/voters-list.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: ['./answer-card.component.scss']
})
export class AnswerCardComponent implements OnInit {
  @Input('answer')
  answer: Answer;
  @Input('questionAuthorId')
  questionAuthorId: number;
  public userVote: 'U' | 'D' = null;
  public isQuestionAuthor: boolean = false;

  public votes: {
    upVotes: AnswerVote[];
    downVotes: AnswerVote[];
  };

  constructor(
    private questionsFacade: QuestionsFacade,
    private authFacade: AuthFacade,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.authFacade.userID$.subscribe(userID => {
      this.isQuestionAuthor = userID === this.questionAuthorId;
      this.answer.answerVotes.forEach(answerVote => {
        if (answerVote.voterId === userID) {
          this.userVote = answerVote.voteType;
        }
      });
    });
    this.questionsFacade.answerVotes$(this.answer.id).subscribe(votes => {
      this.votes = votes;
    });
  }

  onVoteClick(voteType: 'U' | 'D') {
    this.questionsFacade._addAnswerVote({
      questionAnswerId: this.answer.id,
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

  onSelectAnswerClick() {
    this.questionsFacade._selectAnswer({
      questionId: this.answer.questionId,
      answerId: this.answer.id
    });
  }
}
