import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassroomDiscussionsComponent} from '../../components/classroom-ui/classroom-discussions/classroom-discussions.component';
import {DiscussionComponent} from '../../components/classroom-ui/classroom-discussions/discussion/discussion.component';
import {CreateDiscussionPostComponent} from '../../components/classroom-ui/classroom-discussions/discussion/create-discussion-post/create-discussion-post.component';
import {DiscussionCoreComponent} from '../../components/classroom-ui/classroom-discussions/discussion-core/discussion-core.component';

const discussionsRoutes: Routes = [
  {
    path: '',
    component: ClassroomDiscussionsComponent
  },
  {
    path: ':discussionId',
    component: DiscussionCoreComponent,
    children: [
      {
        component: DiscussionComponent,
        path: ''
      },
      {
        component: CreateDiscussionPostComponent,
        path: 'new'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(discussionsRoutes)],
  exports: [RouterModule]
})
export class DiscussionsRoutingModule {
}
