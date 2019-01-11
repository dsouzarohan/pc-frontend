import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthFacade} from '../states/auth/auth.facade';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authFacade: AuthFacade) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authRequest;
    this.authFacade.userToken$.subscribe(authToken => {
      authRequest = req.clone({
        headers: req.headers.set('X-Authorization', 'Bearer ' + authToken)
      });
    });

    return next.handle(authRequest);
  }
}
