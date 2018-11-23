import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {Injectable} from '@angular/core';

@Injectable()

export class AuthInterceptor implements HttpInterceptor{

  constructor(private authService: AuthService){
    console.log("Intercept constructor called");
  }

  intercept(req: HttpRequest<any>, next: HttpHandler){

    console.log("Intercept called");

    const authToken = this.authService.getUserToken();
    const authRequest = req.clone({
      headers: req.headers.set('X-Authorization','Bearer '+authToken)
    });

    return next.handle(authRequest);

  }
}
