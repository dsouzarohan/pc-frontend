import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { QuestionsFacade } from "../../../../../states/questions/questions.facade";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-question-comment-input",
  templateUrl: "./question-comment-input.component.html",
  styleUrls: ["./question-comment-input.component.scss"]
})
export class QuestionCommentInputComponent implements OnInit {
  @ViewChild("questionCommentForm")
  questionCommentForm: NgForm;
  @Input("questionId")
  questionId: number;
  public questionComment: string = "";

  public isCommenting: boolean = false;

  constructor(private questionsFacade: QuestionsFacade) {}

  ngOnInit() {
    this.questionsFacade.isCommenting$.subscribe(isCommenting => {
      this.isCommenting = isCommenting;
    });
  }

  onCommentClick() {
    this.questionsFacade._createQuestionComment({
      questionComment: this.questionCommentForm.value["questionComment"],
      questionId: this.questionId
    });
    this.questionCommentForm.resetForm();
  }
}
