import * as fromRouter from '@ngrx/router-store';
import {routerReducer, RouterStateSerializer} from '@ngrx/router-store';
import {Params, RouterStateSnapshot} from '@angular/router';
import {createFeatureSelector} from '@ngrx/store';

export interface RouterStateUrl {

  url: string;
  queryParams: Params;
  params: Params;

}

export class RouterSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: {queryParams},
    } = routerState;
    const {params} = route;

    return {url, params, queryParams};
  }
}

export interface RouterState {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
}


export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');
