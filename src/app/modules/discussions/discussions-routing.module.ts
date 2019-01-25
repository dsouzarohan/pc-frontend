import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassroomDiscussionsComponent} from '../../components/classroom-ui/classroom-discussions/classroom-discussions.component';
import {DiscussionComponent} from '../../components/classroom-ui/classroom-discussions/discussion/discussion.component';
import {CreateDiscussionPostComponent} from '../../components/classroom-ui/classroom-discussions/discussion/create-discussion-post/create-discussion-post.component';
import {DiscussionCoreComponent} from '../../components/classroom-ui/classroom-discussions/discussion-core/discussion-core.component';
import {CreateDiscussionComponent} from '../../components/classroom-ui/classroom-discussions/create-discussion/create-discussion.component';

const discussionsRoutes: Routes = [
  {
    path: '',
    component: DiscussionCoreComponent,
    children: [
      {
        component: ClassroomDiscussionsComponent,
        path: ''
      },
      {
        component: CreateDiscussionComponent,
        path: 'new'
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(discussionsRoutes)],
  exports: [RouterModule]
})
export class DiscussionsRoutingModule {
}
