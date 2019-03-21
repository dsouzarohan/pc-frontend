import { Component, Input, OnInit } from "@angular/core";
import {
  QuestionComment,
  QuestionCommentVote
} from "../../../../../models/questions.models";
import { QuestionsFacade } from "../../../../../states/questions/questions.facade";
import { AuthFacade } from "../../../../../states/auth/auth.facade";
import { VotersListComponent } from "../../../../dialogs/voters-list/voters-list.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-question-comment-card",
  templateUrl: "./question-comment-card.component.html",
  styleUrls: ["./question-comment-card.component.scss"]
})
export class QuestionCommentCardComponent implements OnInit {
  @Input("questionComment")
  public questionComment: QuestionComment;
  public userVote: "U" | "D" = null;
  public votes: {
    upVotes: QuestionCommentVote[];
    downVotes: QuestionCommentVote[];
  };
  public isVoting: boolean = false;

  constructor(
    private questionsFacade: QuestionsFacade,
    private authFacade: AuthFacade,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.questionsFacade.isVoting$.subscribe(isVoting => {
      this.isVoting = isVoting;
    });

    this.authFacade.userID$.subscribe(userID => {
      this.questionComment.questionCommentVotes.forEach(questionCommentVote => {
        if (questionCommentVote.voterId === userID) {
          this.userVote = questionCommentVote.voteType;
        }
      });
    });

    this.questionsFacade
      .questionCommentVotes$(this.questionComment.id)
      .subscribe(votes => {
        this.votes = votes;
      });
  }

  onVoteClick(voteType: "U" | "D") {
    if(!this.isVoting){
      this.questionsFacade._addQuestionCommentVote({
        questionCommentId: this.questionComment.id,
        voteType: voteType
      });
    }
  }

  onCountClick() {
    this.dialog.open(VotersListComponent, {
      data: this.votes,
      height: "400px",
      width: "600px"
    });
  }
}
