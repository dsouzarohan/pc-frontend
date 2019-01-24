import {NgModule} from '@angular/core';
import {ExtraOptions, PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './modules/core/core.module#CoreModule',
    canActivate: [AuthGuard]
  }
];

const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
