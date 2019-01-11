import {Pipe, PipeTransform} from '@angular/core';
import {UserService} from '../services/user.service';
import {map} from 'rxjs/operators';

@Pipe({
  name: 'userFullName'
})
export class UserFullNamePipe implements PipeTransform {
  constructor(private userService: UserService) {
  }

  transform(userID: string) {
    return this.userService.getPersonalDetails(userID).pipe(
      map(response => {
        if (response) {
          console.log('@UserFullNamePipe#Response', response);
          return (
            response.personalDetails.firstName +
            ' ' +
            response.personalDetails.lastName
          );
        }
      })
    );
  }
}
