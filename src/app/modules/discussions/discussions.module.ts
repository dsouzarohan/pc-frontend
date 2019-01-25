import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ClassroomDiscussionsComponent} from '../../components/classroom-ui/classroom-discussions/classroom-discussions.component';
import {DiscussionsRoutingModule} from './discussions-routing.module';
import {DiscussionComponent} from '../../components/classroom-ui/classroom-discussions/discussion/discussion.component';
import {DiscussionBodyCardComponent} from '../../components/classroom-ui/classroom-discussions/discussion/discussion-body-card/discussion-body-card.component';
import {DiscussionPostsCardComponent} from '../../components/classroom-ui/classroom-discussions/discussion/discussion-posts-card/discussion-posts-card.component';
import {DiscussionCommentsCardComponent} from '../../components/classroom-ui/classroom-discussions/discussion/discussion-comments-card/discussion-comments-card.component';
import {CreateDiscussionPostComponent} from '../../components/classroom-ui/classroom-discussions/discussion/create-discussion-post/create-discussion-post.component';
import {DiscussionCoreComponent} from '../../components/classroom-ui/classroom-discussions/discussion-core/discussion-core.component';
import {EditorModule} from 'primeng/editor';
import {DiscussionCardComponent} from '../../components/classroom-ui/classroom-discussions/discussion-card/discussion-card.component';
import {DiscussionCommentInputComponent} from '../../components/classroom-ui/classroom-discussions/discussion/discussion-comment-input/discussion-comment-input.component';
import {CreateDiscussionComponent} from '../../components/classroom-ui/classroom-discussions/create-discussion/create-discussion.component';

@NgModule({
  declarations: [
    ClassroomDiscussionsComponent,
    DiscussionComponent,
    DiscussionBodyCardComponent,
    DiscussionPostsCardComponent,
    DiscussionCommentsCardComponent,
    CreateDiscussionPostComponent,
    DiscussionCoreComponent,
    DiscussionCardComponent,
    DiscussionCommentInputComponent,
    CreateDiscussionComponent
  ],
  imports: [SharedModule, DiscussionsRoutingModule, EditorModule]
})
export class DiscussionsModule {
}
