import {Pipe, PipeTransform} from '@angular/core';
import {UserService} from '../services/user.service';

@Pipe({
  name: 'userFullName'
})
export class UserFullNamePipe implements PipeTransform {
  constructor(private userService: UserService) {
  }

  transform(userName: {
    firstName: string,
    lastName: string
  }) {
    return userName.firstName + ' ' + userName.lastName;
  }
}
