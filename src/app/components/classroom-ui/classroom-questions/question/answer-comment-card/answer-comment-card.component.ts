import {Component, Input, OnInit} from '@angular/core';
import {AnswerComment, AnswerCommentVote} from '../../../../../models/questions.models';
import {QuestionsFacade} from '../../../../../states/questions/questions.facade';
import {AuthFacade} from '../../../../../states/auth/auth.facade';
import {VotersListComponent} from '../../../../dialogs/voters-list/voters-list.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-answer-comment-card',
  templateUrl: './answer-comment-card.component.html',
  styleUrls: ['./answer-comment-card.component.scss']
})
export class AnswerCommentCardComponent implements OnInit {
  @Input('answerComment')
  answerComment: AnswerComment;
  public userVote: 'U' | 'D' = null;
  public votes: {
    upVotes: AnswerCommentVote[];
    downVotes: AnswerCommentVote[];
  };
  public isVoting: boolean = false;

  constructor(
    private questionsFacade: QuestionsFacade,
    private authFacade: AuthFacade,
    public dialog: MatDialog
  ) {
  }

  onVoteClick(voteType: 'U' | 'D') {
    if(!this.isVoting){
      this.questionsFacade._addAnswerCommentVote({
        answerCommentId: this.answerComment.id,
        voteType: voteType
      });
    }
  }

  onCountClick() {
    this.dialog.open(VotersListComponent, {
      data: this.votes,
      height: '400px',
      width: '600px',

    });
  }

  ngOnInit() {
    this.questionsFacade.isVoting$.subscribe(isVoting => {
      this.isVoting = isVoting;
    });


    this.authFacade.userID$.subscribe(userID => {
      this.answerComment.answerCommentVotes.forEach(answerCommentVote => {
        if (answerCommentVote.voterId === userID) {
          this.userVote = answerCommentVote.voteType;
        }
      });
    });

    this.questionsFacade
      .answerCommentVotes$(this.answerComment.id)
      .subscribe(votes => {
        this.votes = votes;
      });
  }
}
