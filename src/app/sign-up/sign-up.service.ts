import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor() { }

  createUser(user: object){
    console.log(user);
  }
}